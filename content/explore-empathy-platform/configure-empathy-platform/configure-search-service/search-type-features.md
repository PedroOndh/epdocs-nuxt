---
title: Search type features
tags:
- configure search
- configure search type
- configure match all search
- configure match search
- configure multi match search
- configure term search
- configure browsing search
- configure top clicked search
- configure empathize match search
- configure field values
- search settings
- search endpoint
- search features
- feature configuration


---

Search type features modify how the search engine match works. Empathy Plaform includes the following search type features:

- **[Match All Search](#match-all-search)**: Performs a search to match all documents in the index.
- **[Match Search](#match-search)**: Performs a search on a single field in the index.
- **[Multi Match Search](#multi-match-search)**: Performs a search on a collection of fields in the index.
- **[Term Search](#term-search)**: Performs a search using an exact match query on a single field in the index.
- **[Browsing Search](#browsing-search)**: Performs navigation using specific value for field, filtering results and applying faceting and boosting configuration for the field value. 
- **[Top Clicked Search](#top-clicked-search)**: Performs a search for the most clicked products in the product catalogue.
- **[Empathize Match Search](#empathize-match-search)**: Performs a search for query suggestions and popular searches.
- **[Field Values](#field-values)**: Lists all possible values for a field.

::: warning 

You can only use **one query type feature** at the same time.  

:::

::: interact

For an explanation on how to set up the features in the Search microservice, see [Feature configuration](readme.md#feature-configuration).

:::


## Match All Search
The Match All Search (`matchAllSearch`) feature lets you add a query to match all fields from all documents. 


### Search configuration
There are no additional parameters to configure this feature.

**Configuration example**
```json
{
  "name": "matchAllSearch"
}

```

<!--
:::details matchAllSearch request and response example

**Request sent to endpoint**

```

```

**Elasticsearch query with fields**

```json

```

**Response returned to client**

```json

```

:::
-->


## Match Search
The Match Search (`matchSearch`) feature lets perform a search engine match by using the configured `field` parameter. If the `query` parameter is not present in the request, it applies `matchAllSearch` behavior, if configured. Otherwise, it gives an exception and requests the missing query parameter.  

Field | Description | Type | Default value
--- | --- | --- | --- | ---
`query` | Query terms to search (optional) | String | -

Query can be sent as a parameter with the format `query=sample query`. The feature uses the `field` name provided within the value specified through the query parameter `query` if present. If the `query` parameter is not present within the request and `emptyQueryParamAllowed` is `false` or undefined, the request gives an 400 error.   


### Search configuration
You configure the fields to search on in the JSON configuration file of the feature, not in the request.   

**Config parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`field` | Field to be used for applying the match (required) | String | ---
`queryOperator` | Query operator to be used. Available values: `AND`, `OR` (optional) | String | `OR`
`emptyQueryParamAllowed` | Determines whether a `query` parameter is required or not. <br> If  `true`, it allows requests without the `query` parameter (optional) | Boolean | `False`

**Configuration example**
```json
{
  "name": "matchSearch",
  "config": {
    "field": "keywords",
    "queryOperator": "AND",
    "emptyQueryParamAllowed": true
  }
}
```

<!--
:::details Match Search request and response example

**Request sent to endpoint**

```

```

**Elasticsearch query with fields**

```json

```

**Response returned to client**

```json

```

:::
-->


## Multi Match Search
The Multi Match Search (`multiMatchSearch`) feature adds the ability to search on a collection of fields and returns the associated results. 

Multi Match Search performs two functions:
- **[Query](#configuration-for-query-usage)**: It performs a search for the query term on a collection of fields.
- **[Equalize](#configuration-for-equalize)**: It retrieves the Equalize configuration, which contains the relationship between the fields and its weighting, and adds the weights to each field so that they can be more or less significant for the query.


### Configuration for query usage
Fields to search on are not configured through the request, but in the JSON configuration file of the feature.

**Config parameters**
Field | Description | Type | Default value
--- | --- | --- | --- | ---
`searchableFields` | List of allowed fields to be used to search over them. It cannot be empty or null (required) | Array | ---
`tieBreaker` | Capability to resolve conflicts resulting from identical product overall scores (optional) | Integer | `0.0`
`autoGenerateSynonymsPhraseQuery` | Specify if match phrase queries must be created for multi-term synonyms (optional) | Boolean | `false`


### Configuration for Equalize
<!-- CLARIFY USAGE OF MULTIMATCH FOR EQUALIZE. This section needs to link to the tutorial that explains how to set up Equalize-->
The Equalize configuration can be retrieved by **request**, <!-- via the **Playboard**, -->or via **JSON configuration**. The order of preference for configuration is request parameters<!--, Playboard,--> and then configuration file. 

- **Equalize configuration via request**: Equalize is sent as query parameter with the format `equalize={"field1":value, "field2":value}`. The value of the parameter must be a JSON object that contains a collection of fields, and the related weight.
<!-- This is used by the Playboard to see a preview of the configuration.-->
<!-- NOT SUPPORTED YET: - **Playboard**: Equalize is configured using the Equalize tool in the Empathy Platform Playboard. Weights applied are retrieved from the tool. -->
- **Equalize JSON configuration**: Equalize is configured for each field via JSON.

The weights for the fields are calculated based on the type and the Equalize boost using the formula:  `field_type_multiplier * equalize_field_boost`.

The field subtypes are:
Type | Description | Multiplier
--- | --- | --- 
`Keyword` | Field with exact match | `1.5`
`Text` | Field using [standard tokenizer](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-standard-tokenizer.html), lowercase filter, and ASCII folding | `1`
`NGram` | Field with text abilities and [`ngram` tokenizer](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-ngram-tokenizer.html) | `0.2`
`Derived` | Field with text abilities and [stemming](https://www.elastic.co/guide/en/elasticsearch/reference/current/stemming.html#algorithmic-stemmers) | `1`


::: note 

If no Equalize configuration is found, Equalize weights applied for each field are the value defined as default for your instance.

:::

**Config parameters**
Field | Description | Type | Default value
--- | --- | --- | --- | ---
`searchableFields` | List of allowed Equalized fields to be used to search over them. It cannot be empty or null (required) | Array | ---
`tieBreaker` | Behavior to calculate the score (optional). Available values: `0.0` - Take the single best score out of all the fields (e.g. `first_name:will` and `last_name:will`), `1.0` - Add together the scores for all the fields (e.g `first_name:will` and `last_name:will`), or `0.0 < n < 1.0` - Take the single best score plus tie-breaker, multiplied by each of the scores from other matching fields/groups | Integer | `0.0`
`autoGenerateSynonymsPhraseQuery` | Specify if match phrase queries must be created for multi-term synonyms (optional) | Boolean | `false`

**Configuration example**
```json
    {
    "name": "multiMatchSearch",
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
    }
```
<!--
::: details Multi Match Search request and response examples

**Request to the endpoint**

``` 

query=text&equalize={"field1":1, "field2":3} 

```

**ElasticSearch query with fields**

```json
{
  "query": {
    "bool": {
      "must": [
        {
          "multi_match": {
            "query": "text",
            "fields": [
              "field1^1.5",
              "field1.text^1.0",
              "field1.derived^1.0",
              "field1.ngram^0.2",
              "field2^4.5",
              "field2.text^3.0",
              "field2.derived^3.0",
              "field2.ngram^1.5"
            ],
            "type": "cross_fields",
            "operator": "OR",
            "minimum_should_match": "100%",
            "auto_generate_synonyms_phrase_query": false,
            "_name": "ORGANIC"
          }
        }
      ]
    }
  }
}
```

**Response returned to client**

```json

    {
    "docs": [
        // documents
    ],
    "numFound": 2
    }
```
:::
-->


## Term Search
The Term Search (`termSearch`) feature adds the ability to search using an exact match query on a single field and returns the associated results.

Field | Description | Type | Default value 
--- | --- | --- | ---
`query` | Query term to search (required) | String | ---

Query must be sent as a parameter with the format `query=term`.


### Search configuration
The field to search is configured in the JSON configuration file of the feature.

**Config parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`field` | Name of the field to be used to search. It cannot be empty or null (required) | String | ---

**Configuration example**
```json
{
  "name": "termSearch",
  "config": {
    "field": "color"
  }
}
```

<!--
::: details Term Search request and response example

**Request sent to the endpoint**

```
query=green
```

**Elasticsearch query with fields**

```json
{
  "query": {
    "term" : { "color" : "green"}
  }
}
```

**Response returned to client**

```json
{
  "content": [{
    "id": "11454-L",
    "color": "Green"
  }, {
    "id": "23198-R",
    "color": "Green"
  }]
}
```
:::
-->

## Browsing Search
The Browsing Search (`browsingSearch`) feature adds the ability to navigate based on a specific value for a field. Navigating means not only filtering the results and all facets, but also applying specific faceting and boosting configuration for the selected field value.

You must send the `browseField` and `browseValue` parameters with the field and the value associated to filter the results.

Parameters must be sent with the format `browseField=field&browseValue=value`.

Field | Description | Type | Default value
--- | --- | --- | ---
`browseField` | Field to filter the results (required) | String | ---
`browseValue` | Value associated to the field to filter the results (required) | String | ---


### Search configuration
There are no additional parameters to configure this feature.

**Configuration example**
```json
{
  "name": "browsingSearch"
}
```

<!--
::: details Browsing Search request and response example

**Request sent to the endpoint**

```
browseField=XXXXXX&browseValue=YYYYYYY
```

**Elasticsearch query with fields**

```json


```

**Response returned to client**

```json

```

:::
-->

## Top Clicked Search
The Top Clicked Search (`topClickedSearch`) feature lets you query the most clicked products in the catalogue. Once configured, the filters listed in the configuration can be used as query parameters.    

For example, if the feature is configured with the filters `lang` and `scope`, the query parameters are: `lang=en&scope=mobile`.    

When a filter is configured, only the products that **strictly match** the corresponding query parameter are returned. This means that: 

- If there is a query parameter, the **products matching the query parameter** are returned.
- If there is NO query parameter, only the **products without a value for that filter** are returned.

You can enable a Redis cache to cache the results of the Top Clicked query.


### Search configuration

**Config parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`idFieldName` | Name of the field used as `productId` in the product catalogue (required) | String | --- 
`filters` | Filters to be applied when querying the top-clicked index (optional) | Array | --- 
`redisCached` | Enable Redis cache (optional) | Boolean | --- 
`redisTTL` | Time-to-live for the data in Redis cache, in seconds (optional) | Integer | ---

**Filters parameters**
Field | Description | Type | Default value 
--- | --- | --- | ---  
`queryParam` | Name of the query parameter (required) | String |  ---
`field` | Name of the field in the top-clicked index (optional) | Array | Value set for `queryParam`

**Configuration example**
```json
{
  "name": "topClickedSearch",
  "config": {
    "idFieldName": "groupId",
    "filters": [
      {
        "queryParam": "scope",
        "field": "filters.scope"
      }
    ],
    "redisCached": true,
    "redisTTL": 250
  }
}

```

<!--
::: details Top Clicked Search request and response example

**Request sent to the endpoint**

```

```

**Elasticsearch query with fields**

```json


```

**Response returned to client**

```json

```
:::
-->

<!-- Add link to tutorial with all steps for setting up TopClicked/Recommendations when available.
::: develop 
For more information on how to implement the TopClicked endpoint, see **Set up Recommendations (TopClicked) tutorial**.
:::
-->


## Empathize Match Search
The Empathize Match Search (`empathizeMatchSearch`) feature lets you run an Elastic match by using the configured `field` and applying a `matchAll` if the query parameter is not present within the request and the configuration allows that behavior. Otherwise, it returns an exception asking for a missing `query` parameter.

Field | Description | Type | Default value
--- | --- | --- | ---
`query` | Query terms to search (optional) | String | ---

Query can be sent as a parameter with the format `query=sample query`. The feature uses the `field` name provided within the value specified through the query parameter `query` if present. If the `query` parameter is not present within the request and `emptyQueryParamAllowed` is `false` or undefined, the request gives a 400 error.


### Search configuration
The field to search is configured in the JSON configuration file of the feature.

**Config parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`field` | Field to be used for applying the match (required) | String |  ---
`queryOperator` | Query operator to be used. Allowed operators: `AND`, `OR` (optional) | String | `OR`
`emptyQueryParamAllowed` | Determines whether empty query parameters are allowed. If `true`, it allows requests without `query` parameter (optional) | Boolean | `false`
`excludeExactMatch` | Determines whether exact matches are allowed. If `true`, it removes the results that exactly match the query (optional) | Boolean | `false`

**Configuration example**
```json
{
  "name": "empathizeMatchSearch",
  "config": {
    "field": "keywords",
    "queryOperator": "AND",
    "emptyQueryParamAllowed": true,
    "excludeExactMatch": false
  }
}
```

<!--
::: details Empathize Match Search request and response example

**Request sent to the endpoint**

```

```

**Elasticsearch query with fields**

```json


```

**Response returned to client**

```json

```
:::
-->


## Field Values
The Field Values (`fieldvalues`) feature lets you list all the possible values for a field. The accepted fields can be configured in two ways:

- Fields configured as **`allowedFields` in the client.json file**.   
- Attribute fields can be informed as **query parameters**, but they must be a subset of the fields included in the configuration.   

The endpoint accepts a query parameter `attribute` in the request. Where the query parameter is informed, an aggregation for that field is included in the response. Only one field is accepted.

**Example:**
```
attribute=fieldName
```

### Search configuration
You configure the fields to be used in the JSON configuration.

**Config parameters**
Field | Description | Type | Default value
--- | --- | ---  | ---
`allowedFields` | Fields that can be sent as parameters for this feature (required) | String | ---
`field` | Field name (required) | String | ---
`aggregationSize` | Maximum size the aggregation should have (required) | Integer | ---
`aggregationField` | Elasticsearch property by which the aggregations should be made (required) | String | ---

**Configuration example**
```json
{
  "name": "fieldValues",
  "config": {
    "allowedFields": [
      {
        "field": "brand",
        "aggregationSize": 21000,
        "aggregationField": "facet_brandName"
      }
    ]
  }
}
```

<!--
::: details Field values request and response example

**Request sent to the endpoint**

```

```

**Elasticsearch query with fields**

```json


```

**Response returned to client**

```json

```
:::
-->