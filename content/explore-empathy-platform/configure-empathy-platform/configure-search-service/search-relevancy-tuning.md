---
title: Relevancy tuning
tags:
  - configure search
  - configure relevancy tunning
  - configure boosting
  - configure function score
  - configure contextualize search feature
  - configure contextualize
  - search settings
  - search endpoint
  - search features
  - feature configuration

---

Relevancy tuning search features determine how results are ranked within the search engine results page (SERP). Empathy Platform includes these relevancy tuning features:

- **[Boosting](#boosting)**: Adds boost and bury information to the query.
- **[Function Score](#function-score)**: Modifies the score of a product.
- **[Contextualize](#contextualize)**: Adds context information to the query to boost products or product attributes.

::: interact

For an explanation on how to set up the features in the Search microservice, see [Feature configuration](readme.md#feature-configuration).

:::


## Boosting
The **Boosting** (`boosting`) feature lets you add information to the query that determines whether a product or attribute should be boosted or buried in the SERP. When a product in the results is boosted or buried, it appears first on the results (if boosted), or in the last position (if buried).   

You can **[boost or bury specific products](/explore-empathy-platform/features/product-ranking-overview.md)** or **[boost and bury product attributes](/explore-empathy-platform/features/attribute-ranking-overview.md)**, which means that a group of products with that attribute in the product catalogue are boosted or buried. Product boosting or burying is stronger than attribute boosting or burying.

Boosting information can be determined and retrieved using: 

- [Query parameters](#query-parameters)
- [Empathy Platform Playboard configuration](#playboard-configuration)
- [Search configuration file](#search-configuration)

The order of preference is query parameters first, then Empathy Platform Playboard, and finally, search configuration file.


### Query parameters
To preview search results, you can send boosting and burying information as query parameters in the request. For example, you can specify the field to be used to boost the product, and specify a product to be boosted. Query parameters are used to display a preview of the search results in the Query Ranking tool in the Empathy Platform Playboard.

| Field | Description | Type | Default value |
| --- | --- | --- | --- |
| `productsRankingField` | Field to be used to boost or bury a product | String | --- |
| `productsRankingBoostsIds` | ID of the product to be boosted. Products are separated by commas | String | --- |
| `productsRankingBuriesIds` | ID of the product to be buried. Products are separated by commas | String | --- |
| `attributesRankingBoosts` | Attribute field and value to be used to boost a product by attribute | String | --- |
| `attributesRankingBuries` | Attribute field and value to be used to bury a product by attribute | String | --- |

**Request with product boosting parameters - example**
```
productsRankingField=groupId&productsRankingBoostsId=10456

```

You can boost or bury a group of products based on a specific attribute field and its value. For example, you can boost all products that have the color attribute *red*.

**Request with attribute boosting parameters - example**

```
attributesRankingBoosts=color:red

```

### Playboard configuration
The Empathy Platform Playboard lets merchandisers create boost and bury configurations for product and product attributes. When a merchandiser creates a boost or bury using the **Query Ranking tool**, the Playboard configuration is saved and indexed so that the Search microservice can access it.

The Playboard uses **boost multipliers** to modify the organic score of the product. Depending on whether you want to boost or bury the product or products, boost multipliers can be **positive** or **negative**, in that they are added to the organic score or reduces the organic score.

- **Boosting**: Increases product scoring
  - Boosting by product: adds 1_000_000 to the product
  - Boosting by attribute: adds 20 for every product with that attribute

- **Burying**: Reduces product scoring. Elasticsearch [`function_score`](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html) feature is used to apply burying. It multiplies the organic score of the result with a constant value, which reduces the organic score for a given result.
  - Burying by product: 0.0001 is used as a multiplier.
  - Burying by attribute: 0.2 is used as a multiplier.

::: note

Burying by attribute **does not maintain the order of the elements**, as in this case, it's not relevant.

:::

This example shows a general approach to burying. Basically, it adds a [`function_score`](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html), which wraps the entire query (it could even wrap another `function_score` query from the [`functionScore`](#function-score) feature).

```json
{
  "query": {
    "function_score": {
      "query": {},
      "functions": [
        {
          "filter": {
            "term": {
              "groupId": {
                "value": "51333",
                "boost": 1,
                "_name": "random_boost"
              }
            }
          },
          "weight": 0.01
        },
        {
          "filter": {
            "term": {
              "gender": {
                "value": "men",
                "boost": 1,
                "_name": "boost_men"
              }
            }
          },
          "weight": 0.00001
        }
      ],
      "score_mode": "sum",
      "boost_mode": "multiply",
      "max_boost": 3.4028235e+38,
      "boost": 1
    }
  }
}
```

With this approach, a multiplier of 0.01 is applied to documents that match `groupId=51333` <!-- (product boost) --> and a score multiplier of 0.00001 is applied to documents that match `gender:men`<!-- (attribute boost)-->.

In this case, as the opposite to the boosting feature, the resulting score is not an addition, but rather a multiplication.

::: warning
Boosting and burying can only be applied to **keyword-type fields**.

:::

<!-- Hide this for now until post-processors are covered
### Explain

Information about boosts applied in each product is being added to the Explain section.
See [Explain documentation](../../postprocessors/explain.md)
for more info.

**NOTE:** Bury information is missing in the Explain ATM.
-->

::: warning Using boosting in the Playboard

To use the boosting search feature, you must also set up the Query Ranking tool in the Playboard:
1. Turn on the [Query Ranking feature](../configure-playboard.md#search-features). 
2. Set the [product catalogue fields](../configure-playboard.md#linking-the-catalogue) you want merchandisers to use as attributes for boosting and burying as *rankable*.
3. Set up the [feature with the pivot fields required](../configure-playboard.md#setting-up-playboard-features).

:::


### Search configuration
Depending on the context configured, boosting and burying information is retrieved from one of these two indexes in Elasticsearch:

- **Search**: Use this context when adding a search endpoint. Boost and bury configuration is retrieved from `searchconfiguration`
- **Browse**: Use this context when adding a navigation endpoint. Boost and bury configuration is retrieved from `browseconfiguration`

**Config parameters**  

| Field | Description | Type | Default value |
|-------|----------|----------|----------|
| `context` | Determines the context to use: `SEARCH` or `BROWSE` (required) | Boolean | --- |
| `mainCollectionId` | Collection name used to compose the name of the index to search on (required) | String | --- |
| `secondaryCollectionId` | Secondary collection name used to compose the name of the index to search on (required) |  String | --- |
| `boosts` | Configures global boosts and buries (optional). If defined, it must not be empty | Array | --- |

**Boosts properties**  

Field | Description | Default value |
--- | --- | --- |
`field` | Name of the field to apply boost or bury (required) | --- |
`value` | Value of the field that must match for the action to apply (required) | --- |
`boostFactor` | Strength of the boost or bury. It cannot be negative. See [**Boost factor**](#boost-factor) to understand how the values work (required) | --- |
`action` | Determines the type of action to be done: `BOOST` or `BURY`. It cannot be null (required) (**case-sensitive**) | --- |

**Configuration example**
```json
{
  "name": "boosting",
  "config": {
    "context": "SEARCH",
    "mainCollectionId": "collection",
    "secondaryCollectionId": "secondaryCollection",
    "boosts": [
      {
        "field": "color",
        "value": "red",
        "boostFactor": 10.0,
        "action": "BOOST"
      },
      {
        "field": "category",
        "value": "food",
        "boostFactor": 0.01,
        "action": "BURY"
      }
    ]
  }
}
```

::: warning Using Boosting with Contextualize

If you are using Boosting in conjunction with **[Contextualize](#contextualize)**, you must apply Contextualize first as **it expects the query to be a specific boolean query**.

:::

::: warning Using Boosting with Function Score

If you are using Boosting in conjunction with **[Function Score](#function-score)**, you must apply the Function Score feature first as **the `boosting` or `bury` applied must be absolute.**

:::

<!--
:::details Boosting request and response example

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

:::details Burying request and response example

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

###### Boost factor
The `action` property determines how _value_ influences the final score.

If the `action` property is **BOOST**:
- The matching document score is added to the _value_ specified in `boostFactor`.
- The _value_ must be greater than or equal to `1`.

If the `action` property is **BURY**:
- The matching document score is multiplied by the _value_ specified in `boostFactor`.
- The _value_ must be from `0` up to but not including `1`.


## Function Score
The **Function Score** (`functionScore`) feature lets you modify the organic score of a product retrieved by a query to change its ranking on the SERP. Elasticsearch  [`field_value_factor`](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html#function-field-value-factor) score function is used to apply Function Score. It uses a field from a document to influence the product score.

You can send the `fieldValueFactorEnabled` parameter in the request to enable the feature. If the request does not include the `fieldValueFactorEnabled` parameter, the value set up in the [configuration file](#search-configuration-2) is used. You can send the following parameters in the request to override configuration values.

| Field | Description | Type | Default value |
| --- | --- | --- | --- |
| `fieldValueFactorEnabled` | Determines if function score is enabled or not. Possible values: `true` (enabled) or `false`(disabled) (optional) | Boolean | --- |
|`fieldValueFactorFieldName` | Overrides the value set in the `fieldName` configuration field (optional) | String | --- |
| `fieldValueFactorValue` | Overrides the value set in the `FactorValue` configuration field (optional) | Integer | ---  |
| `fieldValueFactorModifier` | Overrides the value set in the `FactorModifier` configuration field (optional) | String | ---  |
| `functionScoreBoostMode` | Overrides the value set in the `BoostMode` configuration field (optional) | String | ---  |


### Search configuration

**Config parameters**
| Field | Description | Type | Default value |
|-------|----------|----------| ----------|
| `enabled` | Determines whether `functionScore` is enabled so that it applies to all search requests by default (required) | Boolean | --- |
| `fieldName` | Field used to apply `functionScore` to influence the product score (required) |String | --- |
| `factorValue` | Multiplier of the function score field | Integer | `1` |
| `modifier` | Modifier that applies to the function score field value. Possible values: `none`, `log`, `log1p`, `log2p`, `ln`, `ln1p`, `ln2p`, `square`, `sqrt`, or `reciprocal` (optional) <br> For more information, see [modifiers](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html#function-field-value-factor) for Elasticsearch `field_value_factor` score function | String | `Modifier.NONE` | 
| `boostMode` | Defines how the _new_ score of the field combines with the score of the query. Possible values: `multiply`, `replace`, `sum`, `avg`, `max`, `min` (optional) </br> For more information, see [boost modes](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html#function-field-value-factor) for Elasticsearch `field_value_factor` score function | String | `CombineFunction.MULTIPLY` | 

::: warning

Scores produced by Function Score **must be non-negative**. Otherwise, an error will be triggered. The `log` and `ln` modifier parameters produce negative values when used on values between 0 and 1. Limit the values of the field with a range filter or use `log1p` and `ln1p` instead.

:::

**Configuration example**

```json
{
  "name": "functionScore",
  "config": {
    "enabled": true,
    "fieldName": "popularity",
    "factorValue": 1, 
    "modifier": "none",
    "boostMode": "sum"
  }
}
```

::: warning Using Function Score with Boosting

If you are using Function Score in conjunction with [**Boosting**](#boosting), you must apply the Function Score feature first as **bury actions are implemented as function score operations**.

:::

<!--
:::details Function Score request and response example

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


## Contextualize
The **Contextualize** (`contextualize`) feature lets you boost specific products or product attributes on the results for a given query, based on the information retrieved from the [Contextualize microservice](/explore-empathy-platform/diagram/microservices/contextualize-service.html). Contextualize information allows you to apply specific weights to products or product attributes to influence their organic score. 

Contextualize information can be determined and retrieved using: 

- [Query parameters](#query-parameters-2)
- [Search configuration](#search-configuration-3)

The order of preference is query parameters first, and then configuration file.

::: danger

For the correct performance of the Contextualize feature, you **must first set up and enable the Contextualize batch process in the Configuration Management Console**. For more information, see [Configuring the Contextualize batch process](/explore-empathy-platform/configure-empathy-platform/configure-conversational-services.md#configuring-the-contextualize-batch-process).

:::


### Query parameters  
To preview search results in the Empathy Platform Playboard, you can send contextualize information as query parameters in the request. For example, you use Query parameters to display a preview of the search results in the Query Ranking tool.

The Contextualize microservice returns a JSON object with a collection of product IDs, fields (attributes) and values, and the related weight. The related weight is applied to all products with a query match for that field-value or product ID.

::: warning

Query (`query`) and language (`lang`) must be sent as parameters in the request with the format `query=sample_query&lang=language`. Otherwise, a _404 not found_ error is generated.

::: 

| Field | Description | Type | Default value |
| ---- | ---- | ---- | ---- |
| `contextualizeEnabled`| Determines whether Contextualize is enabled or not. Possible values: `true` (enabled) and `false` (disabled) (optional) | Boolean | `True` |
| `contextualizeQueryFields` | Field to be used to boost product attributes. It is sent as an **encoded JSON string**. See example below (optional) | String | --- |
| `contextualizeQueryProducts` | Field to be used to boost a product. It's sent as an **encoded JSON string**. See example below (optional) | String | --- |
| `queryContextFieldsMultiplier` | Field-multiplier pair to be used to boost the field weight (optional) | Integer | The value set in the configuration file | 
| `queryContextProductsMultiplier` | Multiplier to be used to boost the weight of the configured product’s ID (optional) | Integer | The value set in the configuration file |
| `contextualizeQueryFieldsRows` | Number of field values to be returned (optional) | Integer | `5` |
| `contextualizeQueryProductsRows` | Number of product ID values to be returned (optional) | Integer | `5`|

The weights for the fields are calculated based on the multiplier set, using the formula: `queryContextMultiplier * fieldValueWeight`. 

**JSON format for contextualizeQueryFields - example**:
```json
{
  "topAttributes": [
    {
      "field": "fieldName",
      "values": [
        {
          "value": "fieldValue",
          "weight": 5
        }
      ]
    }
  ]
}
```

**JSON format for contextualizeQueryProducts - example**:
```json
{
  "topProducts": [
    {
      "value": "fieldValue",
      "weight": 5
    }
  ]
}
```
::: warning

Contextualize information can only be applied to **keyword-type fields**.

:::


### Search configuration

**Config parameters**

| Field | Description | Type | Default value | 
| ---- | ---- | ---- | ---- | 
| `minEvents` | Minimum number of events that the contextualized fields must have (optional) | Integer | `1`| 
| `topAttributes` | Determines the configuration for the contextualized attributes (fields) (optional) | Array | --- | 
| `topProducts` | Determines the configuration for the contextualized products (required) | Array | --- | 

#### TopAttributes parameters  

| Field | Description | Type | Default value |
| ---- | ---- | ---- | ---- |
| `fields` | List of fields that have a different multiplier than the default one (optional) | Array | --- | 
| `rows` | Number of values to be returned for each field (optional) | Integer | `5` |

**Fields parameters**

| Field | Description | Type | Default value | 
| ---- | ---- | ---- | ---- |
| `name` | Field (attribute) which the multiplier is applied to (optional) | String | --- | 
| `multiplier` | Value to be used to increase the field weight (required) | Integer | --- | 


#### TopProducts parameters

| Field | Description | Type | Default value |
| ---- | ---- | ---- | ---- | 
| `fieldId` | Field which the multiplier is applied to. It must indicate the ID of the product to be contextualized (required) | String | --- | 
| `multiplier` | Value to be used to increase the field weight (optional) | Integer | `1` | 
| `rows` | Number of values to be returned for each field (optional) | Integer | `5` |

**Configuration example**

```json
{
  "name": "contextualize",
  "config": {
    "minEvents": 1,
    "topAttributes": {
      "fields": [
        {
          "name": "brand",
          "multiplier": 2
        }
      ],
      "rows": 3
    },
    "topProducts": {
      "fieldId": "upc",
      "multiplier": 2,
      "rows": 3
    }
  }
}
```

::: warning Using Contextualize with Boosting

If you are using Contextualize in conjunction with [**Boosting**](#boosting), you must apply Contextualize first as **it expects the query to be a specific boolean query**.

:::

<!--
::: details Contextualize request and response example
 
**Request sent to endpoint** 

```
query=text&lang=english&contextualizeEnabled=true
&contextualizeQueryFields=%7B%22topAttributes%22%3A%5B%7B%22field%22%3A%22color%22%2C%22values%22%3A%5B%7B%22value%22%3A%22azul%22%2C%22weight%22%3A5%7D%5D%7D%5D%7D%22
&contextualizeQueryProducts=%7B%22topProducts%22%3A%20%5B%7B%22value%22%3A%20%221234%22%2C%22weight%22%3A%202%7D%5D%7D
&queryContextFieldsMultiplier=color:3
&queryContextProductsMultiplier=6
&contextualizeQueryFieldsRows=2
&contextualizeQueryProductsRows=7
```

The `contextualizeQueryFields` and `contextualizeQueryProducts`parameters contain an encoded JSON string with the following information:

- Encoded JSON string for `contextualizeQueryFields`:  

  ```json
  {
    "topAttributes": [
      {
        "field": "color",
        "values": [
          {
            "value": "azul",
            "weight": 5
          }
        ]
      }
    ]
  }
  ```

- Encoded JSON string for `contextualizeQueryProducts`:

  ```json
  {
    "topProducts": [
      {
        "value": "1234",
        "weight": 2
      }
    ]
  }
  ```

**Elasticsearch query with fields** 

```json
{
  "query": {
    "bool": {
      "should": [
        {
          "constant_score": {
            "filter": {
              "term": {
                "upc": {
                  "value": "1234"
                }
              }
            },
            "boost": 12.0,
            "_name": "QueryContext_upc_1234"
          }
        },
        {
          "constant_score": {
            "filter": {
              "term": {
                "color": {
                  "value": "azul"
                }
              }
            },
            "boost": 15.0,
            "_name": "QueryContext_color_azul"
          }
        }
      ]
    }
  }
}
```
**Response returned to client** 
```json
```
:::
-->







