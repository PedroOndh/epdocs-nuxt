---
title: Response customization features
tags:
- configure search
- configure response customization features
- configure sorting
- configure pagination
- configure grouping
- configure total hits
- configure search hits
- search settings
- search endpoint
- search features
- feature configuration
---

Response customization features determine how results are returned by the search engine. Empathy Platform offers these response customization features:

- **[Sorting](#sorting)**: Sorts the results by a given field.
- **[Pagination](#pagination)**: Paginates through a set of results.
- **[Grouping](#grouping)**: Groups the results by a given field.
- **[Total Hits](#total-hits)**: Renders the total number of results matching the query.
- **[Search Hits](#search-hits)**: Determines the fields to be returned in the response.

::: interact 

For an explanation on how to set up the features in the Search microservice, see [Feature configuration](readme.md#feature-configuration).

:::


## Sorting
The **Sorting** (`sorting`) response customization feature lets you [sort the returned results](/explore-empathy-platform/overview/sorting-overview.md) by a specific field.    

Sorting can be determined using:

- **[Query parameters](#query-parameters)**
- **[Search configuration file](#search-configuration)**

The order of preference is query parameters first, and then Search configuration file. The sorting values are set up in the Search configuration file.

When sorting on a field is applied, the score is not sent in the response. You can use the **score calculation** property (`scoreCalculation`) to request the calculation of the score of the product, so it can be included in the response. 


### Query parameters
You use the `sort` query parameter to pass the sorting criteria (`field`) by which results are sorted in the SERP. To pass the sorting criteria in the request, use the format `sort=field order` or `sort=field`.

::: warning  

Despite sending sorting criteria via query parameter in the request, all _sortable_ fields  must be listed in the [Search configuration](#search-configuration) (`whitelist`). Otherwise, an error is returned. 

Note that _sortable_ fields must not be `text` type in the index.

::: 

If you want to send multiple sorting criteria, you need to indicate multiple values separated by comma, e.g. `sort=field order,field2 order`.

If the request does not include any sorting criteria, the default criteria in the configuration is used.

Field | Description | Type
--- | --- | --- |
`sort` | Sorting criteria to display results on the SERP. Available formats: `sort=field order` or `sort=field`. | String
`order` | Criteria used to order the results. Possible values: `ASC` to sort results in ascending order or `DESC` to sort results in descending order| Boolean


### Search configuration
Sorting criteria (`fields`) can be defined in the JSON configuration file. If no default sorting criteria is included in the configuration file, the result set is sorted by **descending score**.

If you need to retrieve the scores for each product, set `scoreCalculation` as true.

::: develop 

The `scoreCalculation` property is useful when using the [Match All](search-type-features.md#match-all-search) search type.

:::

You use the `whitelist` parameter to set fields as *sortable*. Otherwise, 400 Bad Request error code is returned.

**Config parameters**

Field | Description | Type | Default value
--- | --- | --- | ---
`whitelist` | List of allowed fields to sort the results by. `Text` type fields in index mappings cannot be configured as _sortable_. | Array | Empty list
`fields` | 	List of fields to be used for sorting. Used as the default option when no sorting options are included in the request | Array | Empty list
`defaultOrder` | Default order criteria to use when no order is included in the request. Possible values: `ASC` to sort results in ascending order or `DESC` to sort results in descending order  | Boolean | `ASC`

**Fields parameters**

Field | Description | Type | Default value
--- | --- | --- | ---
`field` | Field to be used to sort the results |  | ---
`order` | Criteria used to order the results. Possible values: `ASC` to sort results in ascending order or `DESC` to sort results in descending order | Boolean | ---
`scoreCalculation` | Determines whether the score is calculated for the product. If set `true`, the score of each product is returned in the response | Boolean | `false` 

**Configuration example**
```json
{
  "name": "sorting",
  "config": {
    "whitelist": [
      "brand",
      "size",
      "price"
    ],
    "fields": [
      {
        "field": "price",
        "order": "ASC"
      }
    ],
    "defaultOrder": "DESC",
    "scoreCalculation": true
  }
}
```

<!--
::: details Sorting request and response example

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


## Pagination
The **Pagination** (`pagination`) response customization feature lets you [paginate the results](/explore-empathy-platform/overview/pagination-overview.md) returned in the response by splitting them into subsets (pages) of results to improve loading performance when displaying results. You can choose to display a specific number of results (`rows`) per subset.

Pagination can be determined using:

- **[Query parameters](#query-parameters-2)**
- **[Search configuration file](#search-configuration-2)**

The order of preference is query parameters first, and then Search configuration file. The pagination values are set up in the Search configuration.


### Query parameters
The `start` query parameter in the request is used to send the pagination options, determining how results are grouped into subsets. To pass pagination options, use the format `start=n&rows=m`.

If no pagination parameters are sent in the request, the default pagination options in the configuration are used. 

Field | Description | Type
--- | --- | --- |
`start` | Determines the starting result. The value can range from `0` to `1000` | Integer |
`rows` | Determines the number of results returned for each subset. The value should be greater than `0` | Integer |


### Search configuration
In the JSON configuration file, you can limit the size for the result subset (`rowsLimit`), i.e. the number of rows (`rows`) per page to be displayed in the SERP.

If there is no pagination set up in the configuration file, the results are grouped using default values.

**Config parameters**

Field | Description | Type | Default value
--- | --- | --- | ---
`start` | Position in the result set of the first element returned. Minimum value: `0`. Maximum value: `1000` | Integer | `0`
`rows` | Number of elements returned | Integer | `10`
`rowsLimit` | Size limit for each subset | Integer | `500`

**Configuration example**

```json
{
  "name": "pagination",
  "config": {
    "start": 0,
    "rows": 20,
    "rowsLimit": 500
  }
}
```

<!--
::: details Pagination request and response example

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

## Grouping
The **Grouping** (`grouping`) response customization feature lets you group the result set by a field set in the configuration.

::: warning Important

**The Total hits feature depends on grouping**. For more information, see [Total hits](#total-hits).

:::

Grouping can be determined using:

- **[Query parameters](#query-parameters-3)**
- **[Search configuration](#search-configuration-3)**

The order of preference is query parameters first, and then Search configuration file. The fields to group the results by are set up in the Search configuration file.


### Query parameters  
You can send the `groupEnabled` parameter in the request to enable the grouping feature. When grouping is enabled, the results are automatically grouped by the field indicated in the Search configuration. The best matching results for each group are returned in the search engine response. 

If the request does not include the `groupEnabled` parameter, the value set up in the configuration file is used.

Field | Description | Type
--- | --- | --- |
`groupEnabled` | Determines if grouping is enabled or not. If `true`, the result set can be grouped (optional) | Boolean


### Search configuration  
In the JSON configuration file, you determine the field to group the results by. If there is no field set up in the configuration, an error is returned in the response when grouping is enabled. 

**Config parameters**

Field | Description | Type | Default value
--- | --- | --- | ---
`enable` | Determines if grouping should be enabled by default for every search request or only when requested by query parameter. Possible values: `true` or `false` (required) | Boolean | ---
`field` | Field to group the result set by (required) | String | ---

**Configuration example**

```json
{
  "name": "grouping",
  "config": {
    "enabled": true,
    "field": "brand"
  }
}
```

<!--
::: details Grouping request and response example

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


## Total Hits
The **Total Hits** (`totalHits`) response customization feature lets you include the total number of results in the search engine response.

::: develop Using Total Hits with Filtering and Grouping
When Total Hits is used with the [Filtering](search-query-settings.html#filtering) and [Grouping](#grouping) features, these features **should be executed first** before Total Hits so that cardinality of the result set can be correctly calculated.
:::

When the Total Hits feature is configured, the number of results found that match the query is indicated in the `numFound` property in the response.

If you use [Grouping](#grouping), the `numFound` response property represents the result of calculating the number of the different result groups. For performance reasons, the exact number of results is returned when the number of groups is lower than 3,000. If the number of groups is over 3,000, a slight deviation from the actual total number can be rendered.


### Search configuration
You can enable or disable (`disableTracking`) the Total hits feature in the configuration file.

**Config parameters**

Field | Description | Type | Default value
--- | --- | --- | ---
`disableTracking` | Determines if Total Hits is disabled or not. If `true`, the number of results found is not displayed on the SERP (optional)  | Boolean | `false`

**Configuration example**

```json
{
  "name": "totalHits",
  "config": {
    "disableTracking": false
  }
}
```

<!--
::: details Total Hits request and response example

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


## Search Hits
The **Search Hits** (`searchHits`) feature lets you specify the fields to be returned by the search engine. 

You configure the origin where the fields are retrieved. You can determine the origin as `SOURCE` (default) and `STORE`.

You can inform the list of fields to be returned in query parameters with the format `returnableFields=field1,field2,field3` or `returnableFields=field1, field2, field3`. When you determine the fields to be returned using query parameter, the fields specified as query parameters are returned together with the fields marked as mandatory in the configuration. 

If you do not configure the list of fields to return in the configuration or as a query parameter, the feature returns all fields from the location specified in the `origin` property of the configuration.

Field | Description | Type
--- | --- | --- |
`returnableFields` | Fields to be returned. Separate multiple fields with a comma. You can use spaces before or after the comma | String


### Search configuration
You can use placeholders that are replaced with the values of the query parameters. Placeholders have the format `{param}`, where `param` is the query parameter whose value is used as a replacement.

For example, with the configuration `price_{store}`, a request with a query parameter `store=X` gets the field `price_X`, while `store=Y` would fetch `price_Y`. Whether the results include the field or not depends on the underlying backend and the indexed document.

```
{
    "field" : "price_{store}"
}
```

::: develop

Curly brackets `{}` are special characters. Do not use these brackets in the field name or the parameter value. Escaping is not supported.

:::

You cannot use placeholders in values passed as query parameters. For example, if you send `returnableFields=field_{store}&store=X` as query parameters in the request, it won't return any field. What's more, if the query parameter contains multiple values (either `param=X&param=Y` or `param=X,Y`), only the first one is used.

::: warning Important 

If the query parameter is not included in the request, the placeholder won't be replaced. If you want to **force a parameter in the request**, use [Mandatory Parameters](search-query-settings.md#mandatory-parameters).

:::

**Config parameters**

Field | Description | Type | Default value
--- | --- | ---| ---
`origin` | The origin where the system searches for the fields to be returned. Available values: `SOURCE` and `STORE` (case-sensitive) | String | `SOURCE`
`returnableFields` | The list of stored fields to be returned | Array | ---

**Returnable Fields parameters**

Field | Description | Type | Default value 
--- | --- | --- | ---
`field` | Name of the field to return (required) | String | ---
`mandatory` | Indicates if the field is always returned. If `true`, the field is required. If `false`, the field can be omitted by query paramater (optional) | Boolean | `false`

**Configuration example**

```json
{
  "name":"searchHits",
  "config":{
    "origin" : "SOURCE",
    "returnableFields":[
      {
        "field" : "price",
        "mandatory": true
      },
      {
        "field" : "material",
        "mandatory" : false
      },
      {
        "field" : "category"
      }
    ]
  }
}
```

<!--
::: details Search Hits request and response example

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