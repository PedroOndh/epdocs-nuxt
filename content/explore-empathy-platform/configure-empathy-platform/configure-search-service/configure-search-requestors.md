---
title: Configure the search requestors
tags:
  - search settings
  - search endpoint
  - requestors
  - feature configuration
  - search features
  - configure search
  - cmc
  - configuration management console
  - instance management

---

Requestors manage the execution of an endpoint request and return a result. The Search microservice has two built-in requestors:

- **[Default Query Requestor](#default-query-requestor)**: Used by features to retrieve blocks of information.
- **[Links Query Requestor](#links-query-requestor)**: Used to retrieve links for [redirections](/explore-empathy-platform/features/redirections-overview.md) and [promotions](/explore-empathy-platform/features/promotions-overview.md) (promoted results and promotion banners).
<!-- For more information, see **[Tutorial: Set up redirections and promotions](set-up-redirections-promotions.md)**.-->

When you configure the requestors, you specify the requestor type, product catalogue collection affected, the features to be used, and any post-processors to be run after executing the feature. The post-processors let you modify every result after the result has been built. For example, to add new fields. Each post-processor has its own configuration.   

::: note
You need to create the features in the [feature configuration](readme.md#feature-configuration) before configuring the endpoint.
:::


## Default Query Requestor
All features except links use the **DefaultQueryRequestorFactory** requestor. This requestor can be customized to the customer's requirements. It uses the standard `requestors` parameters.

**`requestors` parameters**

| Field | Description | Type | Default value
| --- | --- | --- | --- 
| `requestorId` | Name of the requestor, e.g. product catalogue | Yes | String | ---
| `type` | Type of requestor. To use the **DefaultQueryRequestorFactory** requestor, enter `default`. Enter `links` to use the **LinksQueryRequestor** requestor (required) | String | `default`
| `mainCollectionId` | ID of the indexed product catalogue collection. <br> If you do not have this ID, ask [Partner enablement](mailto:enablement_partners@empathy.co) (required) | String | ---
| `features` | List of all features associated with the requestor (required) | Array | ---
| `postprocessors` | Collection of processors executed after the feature cycle (required) | Array | ---
| `redisCached` | Determines whether a Redis cache is activated for the requestor. If you set this to `true`, enter a value in **redisTTL** (optional) | Boolean | `false`
| `redisTTL` | Number of seconds to save data in cache (optional) | Integer | ---

::: develop

You can use a Redis cache for the requestor and determine the number of seconds of data to save in cache in the `redisTTL` parameter. This parameter is useful where your customer has high traffic in the store or during the sales period. The greater the TTL (time-to-live) value, the greater the time between cached responses, and hence the greater the response and the lower impact on the search engine. However, the results may be less up-to-date and it may take longer to see any changes in configuration (for example, changes in product attribute weighting made in Equalize). If you plan to use Redis, you need to add the `redis.enabled` environment variable as `true`, and `redis.nodes` containining the value of the Redis URL available to connect to it. The Redis service must be configured without authorization, as it is not supported by the search service.

 You cannot enable a Redis cache for the `LinksQueryRequestor`. The current date is added to each Elasticsearch query, so this information changes in every request.

:::

**Configuration example**
```json
        "requestors": [
            {
                "requestorId": "catalog",
                "type": "default",
                "features": {
                    "search": [
                        "browsingSearch",
                        "sorting",
                        "pagination",
                        "filtering",
                        "faceting",
                        "boosting",
                        "grouping",
                        "searchHits",
                        "totalHits",
                        "debug"
                    ]
                },
                "redisCached": true,
                "redisTTL": 250,
                "mainCollectionId": "empathy"
            }
        ]
```

<!--
::: details DefaultQueryRequestor request and response
Default requestor is added in the search endpoint. See [Endpoint configuration](configure-search-service.md#endpoint-configuration).

**Request**

```


```


**Elastic query**

```

```

**Requestor response**

```json


```
:::
-->


## Links Query Requestor
This requestor is made for requesting blocks of information from `links` index. There are three types of links: [Redirections](/explore-empathy-platform/features/redirections-overview.md), [Promotions](/explore-empathy-platform/features/promotions-overview.md#promoted-results), and [Banners](/explore-empathy-platform/features/promotions-overview.md#promotion-banners).

The requestor returns a previously configured URL when searching from a query. Promotions and banners also return the previously configured image.

::: warning

You must have set up a `links`collection in the index. A 500 error code is returned if the collection does not exist.

:::

In addition to the `requestor` parameters, in the `config` block, the `query` parameter is used to find the link associated to the parameter. The filters configured are used to delimit the links returned. For example, `?query=home&lang=es&scope=desktop`.   
Links are returned ordered by priority (weight), and then by updated date. If no query is sent, all the links marked as `match_all` in the Playboard are returned.

Links are applied over certain criteria. When a link has a filter configured, it is only retrieved if the parameter exists in the request and has the same value as the configured link. When a link is configured with a filter with multiple values, that link is returned if the parameter exists in the request and has one of the values configured.

**`config` parameters**
Field | Description | Type | Default value
--- | --- | --- | --- | ---
`linkType` | Type of link to retrieve. Available values: `DIRECT`, `PROMOTED`, `BANNER` (required) | String | ---
`queryParamFilters` | Filters to apply (required) | String | ---

**`queryParamFilters` parameters**
Field | Description | Type | Default value
--- | --- | --- | --- | ----
`queryParam` | Parameter of the query to retrieve the value from (required) | Array | ---
`field` | Field to filter the content of the value of the `queryParam` (optional) | String | `queryParam`

**Configuration example**
```json
        "requestors": [
          {
                "requestorId": "direct",
                "type": "links",
                "redisCached": false,
                "mainCollectionId": "empathy",
                "secondaryCollectionId": "empathy",
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
                }
            }
        ]
```

<!--
::: details LinksQueryRequestor request and response
Links requestor is added in the search endpoint. See [Endpoint configuration](configure-search-service-advanced.md#endpoint-configuration).

**Request**

```
query=text&store=1&store=2&scope=mobile
```


**Elastic query**

```
query=(text OR match_all) AND 
store=(1 OR 2) AND scope=mobile AND device=null AND 
enabled=true AND 
type=DIRECT AND 
(startDate <= now OR startDate=null) AND (endDate >= now OR endDate=null)
```

**Requestor response**

```json

{
  "direct": {
    "content": [
      {
        "title_raw": "shirt",
        "id": "605dcafebe6f780ac5f7a3b1",
        "title": "shirt",
        "url": "https://searchbroker.atlassian.net/secure/RapidBoard.jspa?rapidView=50&projectKey=EP&assignee=5b961ea5b295006b102fb6b9",
        "image_url": ""
      }
    ]
  }
}
```
:::

-->

<!--There are two post-processors:
- `explain`: Lets you add sorting and scoring information to every result. 
    It can be enabled for a request by sending the query parameter `debugEnabled=true`. When enabled, a `debugProperties` section is added to every result containing information about the sorting criteria used in that request.   
    More details about how the score has been calculated can be retrieved sending parameter `debugRankingDetails=true`, and a section with details is added inside the score `criteriaId sort`.
- `tagging`: Provides direct integration with the Empathy Platform Tagging API with information provided by the Empathy Platform Search API. This postprocessor returns a ready-to-use URL of tagging events in the search response. See [Search and Tag - Tagging post-processor configuration](#search--tag-tagging-postprocessor). -->

<!--
**`postprocessors` parameters**
Field | Description | Required | Type | Default value
--- | --- | --- | --- | ---
`name` | Name of postprocessor declared as bean. Accepted values: `explain`, `tagging` | Yes | String | ---
`config` | Configuration passed to postprocessor | No | String | ---

**`explain` parameters**
There is no additional configuration for this post processor.


::: details Example: Requestor configuration with Explain postprocessor

```json
        "requestors": [
          {
            "requestorId": "catalog",
            "type": "default",
            "features": {
              "search": [
                "totalHits"
              ]
            },
            "postprocessors": [
              {
                "name": "explain"
              }
            ],
            "redisCached": false,
            "mainCollectionId": "empathy"
          }
        ]

```
:::

<!--
::: details Example: Tagging postprocessor configuration

```json
{
  "params": [
    {
      "name": "q",
      "resolver": "request",
      "originName": "query",
      "defaultValue": "default"
    },
    {
      "name": "totalHits",
      "resolver": "calculated",
      "originName": "numFound"
    },
    {
      "name": "page",
      "resolver": "calculated"
    },
    {
      "name": "title",
      "resolver": "document",
      "originName": "name",
      "defaultValue": "Default title"
    }
  ]
}
```

:::

#### Search & Tag. Tagging postprocessor

The `tagging` post processor configuration involves two sections:

``` json
{
  "name": "tagging",
  "config": {
    "params": [],
    "events": []
  }
}
```

**`tagging` parameters**
Field | Description | Required | Type | Default value
--- | --- | --- | --- | ---
`params` | A list of params that defines the query params available to include in the tagging URL generated. Each entry contains the name of the `param` is the configuration that determines how to resolve its value | Yes | Array | ---
`events` | A list of events to be included into the tagging response. Each event contains the name of the event, the parameters that must include the event URL and the event type, which can be `global` (events informed at response level) or `document` (events informed at document level) | Yes | Array | ---

**`params` parameters**
Field | Description | Required | Type | Default value
--- | --- | --- | --- | ---
`name` | Parameter name to be included into the tagging URL | - | yes
`resolver` | Name of the resolver to be used to solve the value of the parameter. A set of predefined resolvers are available. See [predefined resolvers](#predefined-resolvers) | Yes | String | ---
`originName` | Name of the field to be read from the origin | No | String | Name of the parameter
`defaultValue` | Default value to be returned where the desired value is not present in the origin | No | String | ---

``` json
{
  "params": [
    {
      "name": "q",
      "resolver": "request",
      "originName": "query",
      "defaultValue": "default"
    },
    {
      "name": "totalHits",
      "resolver": "calculated",
      "originName": "numFound"
    },
    {
      "name": "page",
      "resolver": "calculated"
    },
    {
      "name": "title",
      "resolver": "document",
      "originName": "name",
      "defaultValue": "Default title"
    }
  ]
}
```
#### Resolvers

Each parameter needs to have a value that is calculated through a resolver. The resolver must be named, being that name the same as the value
associated to the attribute "resolver" in the configuration. The resolver must implement the interface `ParamResolver` in order to work with the
configuration automatically and needs to be exposed as a spring bean. This way you can add new resolvers but a set of predefined resolvers are already
built to be used.

#### Predefined Resolvers

There is a set of predefined resolvers to solve the value of a set of parameters.

Resolver name | Class | Explanation
--- | --- | ---
request | RequestParamResolver | Resolves the value of a parameter which origin is the request
document | DocumentParamResolver | Resolves the value of a parameter which origin is the document
totalHits | TotalHitsParamResolver | Resolves the value of a parameter totalHits
filtered |FilteredParamResolver | Resolves the value of a parameter filtered
page | PageParamResolver | Resolves the value of a parameter page
position | positionParamResolver | Resolves the value of a parameter position
spellcheck | spellcheckParamResolver | Resolves the value of a parameter spellcheck

Those are pre-built in order to be able to have the minimum parameters that Tagging events needs. Check Tagging documentation for more information.

### Events section configuration

```json
[
  {
    "name": "query",
    "type": "global",
    "queryParams": [
      "q",
      "totalHits",
      "page",
      "lang",
      "scope",
      "origin",
      "filtered",
      "spellcheck"
    ]
  },
  {
    "name": "click",
    "type": "document",
    "queryParams": [
      "q",
      "title",
      "productId",
      "position",
      "page",
      "url",
      "follow",
      "lang",
      "scope",
      "origin",
      "filtered",
      "spellcheck"
    ]
  }
]
```

Following the previous example the structure of an event is:

field | description | default value | mandatory
--- | --- | --- | ---
name | Name of the event (it should correlate with the different events that are accepted by the Tagging API). | - | yes
type | Type of the event. Valid values are `global` (that means that the event will be included globally) or `document`that means that the event will be included per document. | -  | yes
queryParams | List of parameters that are wanted to be included into the tagging url for this event. They need to be defined into the `params` section. Otherwise they will be ignored. | - | yes 

-->

<!---
**Processors**: There are three types of processor:   
    - query processor: Builds the final query sent to the search engine (ElasticSearch).
    - request processor: Creates internal requests to be managed, used to manage fallback solutions.
    - result processor: Transforms the results obtained from the query.
**Post-processor**: Used to add information to the documents/results.
**Transformers**: There are two types:
    - document transformer - adapts the document structure to requirements. Performed after the post-processors.--->