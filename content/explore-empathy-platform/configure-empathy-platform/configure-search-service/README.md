---
title: Configure the search microservice
sidebar_title: Configure search
tags:
  - search configuration
  - search settings
  - search endpoint
  - client configuration
  - feature configuration
  - endpoint configuration
  - search features
  - cmc
  - configruation management console
  - instance management

---

The Search section in the Instance Management tool lets you configure the setup of the Search microservice. The Search microservice is responsible for searching and retrieving information from the search engine. It uses a search plugin to customize the search engine behavior, i.e. how queries are formed, how results are presented, etc.   

You set up the instance as an instance in the Search microservice, customize the features used in the Search plugin, and define the endpoint structure with the requestors used to retrieve the information, and features to be used.

![Configure Search](~@assets/media/instance-mgt/config-search.svg)

::: warning

Only Playboard users with **permissions for Instance management** can set up and edit the Search configuration. 

:::

The configuration of the Search microservice is broken down into three sections. You configure the sections in this order:

1. **[Client configuration](#client-configuration)**: Sets up the configuration for the customer, including the number of resources assigned to the customer’s instance. 
2. **[Feature configuration](#feature-configuration)**: Determines the features used in the customer’s implementation, and the configuration of each feature.
3. **[Endpoint configuration](#endpoint-configuration)**: Defines the endpoint structure, with the requestors that determines the block of information retrieved from the index, and the features used by each requestor.

The Search plugin and Search microservice are started with a basic configuration to start up the microservice, which is overwritten when you configure this form. Every time you make a change to the configuration, the Search plugin **needs to be reloaded** for the configuration to be applied. This is done automatically when you click **Save**.

::: danger Important

The **product catalogue must have been set up and indexed** before you can configure the Search microservice.

:::


## Client configuration
The first step is to customize the configuration for the customer. Each instance has its own Search configuration, which allows the implementation to be customized according to the customer's requirements.

Initially, you need to create the configuration for the customer by identifying the customer with its instance ID. <!---In the Search configuration, the instance ID is the `clientId`.-->

| Field | Description | Type | Default value
| --- | --- | --- | --- 
| `instance` | Instance ID, e.g. `empathy` (required) | String | ---
| `workersSize` | Limit for resource allocation (optional) | Integer | `5`

::: warning

In a multi-tenant environment, search microservice resources are shared. The `workersSize` parameter sets the limit for the resources allocated to the instance. By default, the value is 5; however, this parameter can be adjusted as required to provide more resources. You should **not change this parameter** unless you have been advised to do so by Partner Enablement.

<!-- 05.04.2022 Unsure what the range of values we want to recommend for workersSize. In any case, since its impact can affect performance greatly, this parameter ideally should be hidden from the configuration and only allow internal devs (Enablement) to change it-->
:::

To add a client configuration:

1. Edit the JSON code snippet below to include the instance ID.
    ```json
    {
      "instance": "empathy",
      "workersSize": 5
    }
    ```
2. Copy and paste the code snippet in the **Client configuration** field.


## Feature configuration
Features are options that can be set up in the search service. In Empathy Platform there are two types of feature:

- **Search feature**: Functionalities used by the search engine. It's composed of a list of query processors, and a list of result processors. Search features are divided into five categories:   
    - **[Search type](search-type-features.md)**: These features modify how the search engine retrieves the results.   
    - **[Query settings](search-query-settings.md)**: These features determine what information should be sent in the query.
    - **[Response customization](response-customization-features.md)**: These features determine how the results are returned.
    - **[Relevancy tuning](search-relevancy-tuning.md)**: These features determine how results are ranked within the SERP.
    - **[Debug utilities](debug-utilities-features.md)**: These features provide additional information for admin purposes.

- **[Fallback feature](search-fallback-features.md)**: Functionalities used in the event that no results are returned by the search engine. Fallback features are composed by a list of request processors.

<!--Features are defined inside the `requestor` configuration block, under the `features` key. -->

Features are invoked in the order they appear in the configuration.

| Field | Description | Type | Default value
| --- | --- | --- | --- 
| `instance` | Instance ID, e.g. `empathy` (required) | String | --- 
| `endpointId` | Name of the endpoint where the feature is used (required) | String | --- 
| `requestorId` | Name of the requestor where the feature is used (required) | String | --- 
| `type` | Type of feature to be used, either `SEARCH` or `FALLBACK` (required) | String | --- 
| `feature` | Name of the feature (required | String | --- 
| `config` | Configuration of the feature. Each feature has its own configuration (required) | Array | --- 

::: note

The value of the `endpointId` parameter depends on the endpoint you set up in [endpoint configuration](#endpoint-configuration).

:::

To add the feature configuration:
1. Edit the JSON code snippet below to include all required features.   

    ```json
      {
        "instance": "MY_INSTANCE_ID",
        "endpointId": "ENDPOINT_ID",
        "requestorId": "REQUESTOR_ID",
        "type": "FEATURE_TYPE",
        "feature": "FEATURE_NAME",
        "config": {
          ...
       }
      }
    ```
   
2. Copy and paste the code snippet in the **Feature configuration** field.

::: details Example: Feature configuration

```json
[
  ...
  {
    "instance": "empathy",
    "endpointId": "search",
    "requestorId": "catalog",
    "type": "FALLBACK",
    "feature": "spellcheck",
    "config": {
      "collectionType": "CATALOG",
      "enablePhraseSuggester": true,
      "redisCached": true,
      "redisTTL": 250.0,
      "mainCollectionId": "empathy",
      "secondaryCollectionId": "empathy"
    },
    {
      "instance": "empathy",
      "endpointId": "search",
      "requestorId": "catalog",
      "type": "SEARCH",
      "feature": "multiMatchSearch",
      "config": {
        "searchableFields": [
          {
            "name": "description",
            "boost": 3
          },
          {
            "name": "brand"
          },
          {
            "name": "category",
            "boost": 0
          }
        ],
        "tieBreaker": 0.1,
        "autoGenerateSynonymsPhraseQuery": false
      }
    ...
]

```
:::


## Endpoint configuration
Once you have configured the search service features to be used, you set up the endpoint configuration. The endpoint configuration determines the [requestors](configure-search-requestors.md) to be used for each feature. A requestor decides the block of information retrieved. 

Generally speaking, in Empathy Platform, you use `search` as the main endpoint for the search experience, `browse` as the endpoint for the navigation experience. For the conversational services, you use `empathize` for query suggestions and popular searches, `topclicked` for recommendations, and `skusearch` for ID results. 

::: warning Important

All features must have been previously set up in the feature configuration. Otherwise, the configuration will fail. 

:::

| Field | Description | Type | Default value
| --- | --- | ---  | --- 
| `instance` | Instance ID for the customer (required) | String | ---
| `endpointId` | Name of the endpoint to add. Common values: `search`, `browse`, `empathize`, `topclicked`, `skusearch`, and `field-values` (required) | String | ---
| `type` | Type of endpoint to be created (required) | String | `custom`
| `requestors` | Collections to be queried for each endpoint. <br> For example, you set up one requestor for the main product catalogue, another requestor to support boosts, etc. (required) | Array | ---

To add the endpoint configuration:

1. Edit the JSON code snippet below to include all required requestors. See [Configure Search Requestors](configure-search-requestors.md).
    ```json
      {
        "instance": "MY_INSTANCE_ID",
        "endpointId": "ENDPOINT",
        "requestors": [
          ...
        ],
        "type": "custom"
      }
    ```
2. Copy and paste the code snippet in the **Endpoint configuration** field.

::: develop

You may want to use the `field-values` endpoint to retrieve all the possible values for a field. You specify the searchable fields in the definition of the feature. See [Field Values feature configuration](search-type-features.md#field-values).

:::

:::details Example: Endpoint configuration

```json
[
  {
    "instance": "empathy",
    "endpointId": "search",
    "requestors": [
      {
        "features": {
          "fallback": [
            "spellcheck"
          ],
          "search": [
            "multiMatchSearch",
            "pagination",
            "totalHits",
            "debug"
          ]
        },
        "requestorId": "catalog",
        "mainCollectionId": "empathy",
        "postprocessors": [
          {
            "name": "explain"
          }
        ],
        "type": "default"
      },
      {
        "config": {
          "linkType": "DIRECT",
          "queryParamFilters": [
            {
              "field": "langs",
              "queryParam": "lang"
            },
            {
              "field": "filters.scope",
              "queryParam": "scope"
            }
          ]
        },
        "id": "direct",
        "secondaryCollectionId": "empathy",
        "type": "links"
      }
    ],
    "type": "custom"
  }
]
```
:::




<!-- TW notes

Each of these configs can be sent separately, however the global endpoint lets you send a request with all config in the body.
Certain configurations are stored in memory, for usage during runtime



-->