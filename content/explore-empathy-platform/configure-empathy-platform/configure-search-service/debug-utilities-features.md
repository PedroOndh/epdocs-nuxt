---
title: Debug utilities features
tags:
- configure search
- configure debug utilities features
- configure debug
- configure elastic explain
- search settings
- search endpoint
- search features
- feature configuration
---

Debug utilities search features provide additional information for administration purposes. Empathy Platform includes these debug utilities features:

- [**Debug**](#debug): allows including detailed information about the query in the response.
- [**Elastic Explain**](#elastic-explain): allows adding scoring explanation from Elasticsearch for each document in the response.

::: interact

For an explanation on how to set up the features in the Search microservice, see [Feature configuration](readme.md#feature-configuration).

:::


## Debug
The **Debug** (`debug`) feature lets you add information about the query to the response. Only the data from the last chain of processors executed can be added to the response as debug information.

You must send the `debugEnabled` query parameter set to `true` to include debug information in the response.

Field | Description | Type | Default value
--- | --- | --- | ---
`debugEnabled` | Determines whether the feature is enabled. If `true`, a `debug` object is included in the response with debug information | Boolean | ---


**Response debug object parameters**

Field | Description | Type | Default value
--- | --- | --- | ---
`query` | Stores relevant information from a particular processor | String | ---
`internalQuery` | Query executed against `Elasticsearch` | String | ---

::: details Debug response returned to client

```json
{
  ...
  "debug": {
    "query": {},
    "internalQuery": {}
  }
}
```
:::


### Search configuration
There are no additional parameters to configure this feature. 

**Configuration example**  

```json
{
  "name": "debug"
}
```


## Elastic Explain
The **Elastic Explain** (`elasticExplain`) feature lets you add scoring information from Elasticsearch for each document to the response in order to get a detailed explanation of the relevancy score.

You must send the `elasticExplainEnabled` query parameter set to `true` to include scoring information in the response.

Field | Description | Type | Default value
--- | --- | --- | ---
`elasticExplainEnabled` | Determines whether the feature is enabled. If `true`, an `elasticExplain` object is included in the response with scoring information | Boolean | ---

**elasticExplain response object parameters**  

Field | Description | Type | Default value
--- | --- | --- | ---
`match` | Indicates whether the document matches or not the query. If  `true`, there's a match, and details on the document score are returned | Boolean | ---
`value` | Relevancy score of the document | Number | ---
`description` | Overview of how the score was computed | String | --- 
`details` | Lists how the score was calculated with details for sub-calculations | Array | ---

::: details Elastic Explain response returned to client

```json
{
  ...
  "elasticExplain": {
    "match": true,
    "value": 26.05,
    "description": "sum of:",
    "details": [
    	{
    	  "match": true,
    	  "value": 6.05,
    	  "description": "max plus 0.5 times others of:",
    	  "details": [ ... ]
        }
    ]
}

```
:::


### Search configuration  
There are no additional parameters to configure this feature. 

**Configuration example**  

```json
{
  "name": "debug"
}
```

::: warning

You need to configure the `elasticExplain` post-processor in the Search endpoint for the correct performance of the Elastic Explain feature.

:::

<!-- Include link to post-processor doc when ready -->









