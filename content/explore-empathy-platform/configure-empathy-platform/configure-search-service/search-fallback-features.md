---
title: Fallback features
tags:
  - configure search
  - configure search fallback
  - configure fallback features
  - configure spell check
  - configure spellcheck
  - configure partial results
  - search settings
  - search endpoint
  - search features
  - feature configuration
  - cmc
  - configuration management console
  - instance management

---

Fallback features are search options used in the event the search engine does not retrieve any results for the query. Empathy Platform offers these fallback features:

- **[Spell&nbsp;check](#spell-check)**: Performs a spell check on the original no-results query to find valid queries with results.
- **[Partial Results](#partial-results)**: Splits the original query into smaller queries to return those queries with results.

::: interact

For an explanation on how to set up the features in the Search microservice, see [Feature configuration](readme.md#feature-configuration).

:::


## Spell check
The **Spell check** (`spellcheck`) fallback feature lets you perform a spell check on the query using the search engine. When configured, spell check is automatically run after a query with no results is executed. In this scenario, a list of suggestions for the spell-checked query is obtained from Elasticsearch and the first one is selected. 

After this, the whole chain of processors is run again using the spell-checked query. A spell-checked field containing the spell-checked query is included in the response.

::: danger

This fallback feature requires the [`matchSearch`](search-type-features.md#match-search) and [`multiMatchSearch`](search-type-features.md#multi-match-search) **search type** features due to how the suggestions are retrieved. It is incompatible with other [search type features](search-type-features.md).

:::


### Search configuration
Since Spell check is a **fallback feature**, it must be configured in the `fallback` section of the configuration.

**Config parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`mainCollectionId` | Collection name used to compose the name of the index to search on (required) | String | ---
`secondaryCollectionId` | Secondary collection name used to compose the name of the index to search on (required) | String | ---
`collectionType` | Collection type. Available types: `CATALOG`, `EMPATHIZE`, `BOOSTS`, `QUERYSIGNALS` or `LINKS` (required) | String | ---
`enablePhraseSuggester` | Enables the [phrase suggester](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html#phrase-suggester) when performing a spell check on the query. If set to `false`, a [term suggester](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/search-suggesters.html#term-suggester) is used (required) | Boolean | ---
`redisTTL` | Time to live for the data in Redis cache, in seconds (optional) | Integer | ---
`redisCached` | Enables the Redis cache (optional) | Boolean | ---

::: warning Important

-  If you want to use the Spell check feature, you must set up **all fields that can be spell-checked** with a `copyTo` to a "spell-checked" field in the index mapping. <br>

- If you want to use the Elasticsearch [`phrase suggester`](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html#phrase-suggester) feature, you need to define a **shingle configuration** in the settings of the index.

:::

**Configuration example**
```json
{
  "name": "spellcheck",
  "config": {
    "collectionType": "CATALOG",
    "mainCollectionId": "collection",
    "secondaryCollectionId": "secondaryCollection",
    "enablePhraseSuggester": true,
    "redisCached": true,
    "redisTTL": 1200
  }
}
```

<!--
::: details Spell check request and response example

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


## Partial Results
The **Partial Results** (`partials`) fallback feature lets you split the original query into smaller queries, search for results using those partial queries, and return them into the main response. This way, shoppers are offered similar queries that might have results.

When configured, Partial Results is automatically run after a query is performed with no results. In this scenario, a list of partial queries is generated, and a query to Elasticsearch is run to retrieve results for each of them. After this, the partial queries with the response are added to the main result. The order of the partial results returned is: partial queries with the highest number of terms and then partial queries with more results.

::: danger

This fallback feature requires the [`multiMatchSearch`](search-type-features.md#multi-match-search) search type feature due to how the query to Elasticsearch is formed to retrieve results for partial results. It is incompatible with other [search type features](search-type-features.md). 

:::


### Search configuration
Since Partial Results is a **fallback feature**, it must be configured in the `fallback` section of the configuration.

**Config parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`mainCollectionId` | Collection name used to compose the name of the index to search on (required)  | String | ---
`secondaryCollectionId` | Secondary collection name used to compose the name of the index to search on (optional) | String | ---
`collectionType` | Collection type. Available types are: `CATALOG`, `EMPATHIZE`, `BOOSTS`, `QUERYSIGNALS` or `LINKS` (required) | String | ---
`redisTTL` | Time to live for the data in Redis cache, in seconds (optional) | Integer | ---
`redisCached` | Enables the Redis cache (optional) | Boolean | ---
`returnableFields` | Fields to return in the response content of each partial result (required) | Array | ---
`maxNumberOfPartials` | Maximum number of partial queries to be returned (optional) | Integer | `2`
`maxNumberOfDocsPerPartial` | Maximum number of documents to be returned for each partial query. If you set to 0, no documents are returned (optional) | Integer | `5`
`minTermLength` | Minimum length that a term must have to be partial query candidate (optional) | Integer | `0`
`maxTermsPerPartial` | Maximum number of terms that a partial query must have (optional) | Integer | `4`


```json
{
  "name": "partials",
  "config": {
    "collectionType": "CATALOG",
    "mainCollectionId": "collection",
    "secondaryCollectionId": "secondaryCollection",
    "redisCached": true,
    "redisTTL": 1200,
    "returnableFields": [
      "field1",
      "field2"
    ],
    "maxNumberOfPartials": 3,
    "maxNumberOfDocsPerPartial": 4,
    "minTermLength": 0,
    "maxTermsPerPartial": 3
  }
}
```

<!--
::: details Partial Results request and response example


**Request sent to the endpoint**

```

```

**Elasticsearch query with fields**

```json


```

**Response returned to client**

```json
{
	"catalog": {
		"partials": [{
				"term": "term1 term2 term3",
				"numFound": 3000
			},
			{
				"term": "term1 term2 term3",
				"numFound": 1000
			},
			{
				"term": "term1 term2",
				"numFound": 2000
			},
			{
				"term": "term1 term3",
				"numFound": 1000
			}
		]
	}
}
```
:::
--> 

<!--- Add explanation of example/image included here: https://github.com/empathyco/search-service/blob/main/docs/features/partials/partials-feature.md#configuration -->