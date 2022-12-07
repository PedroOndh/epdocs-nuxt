---
title: Query settings features
tags:
  - configure search
  - configure query settings
  - configure faceting
  - configure filtering
  - configure mandatory parameters
  - configure mandatory params
  - search settings
  - search endpoint
  - search features
  - feature configuration
  - mandatory params

---

Query settings search features include options that determine what information should be sent in the query. Empathy Platform offers the following query settings features:  

- **[Faceting](#faceting)**: Categorizes the results based on fields sent in the request.
- **[Filtering](#filtering)**: Delimits the results based on field values sent in the request.
- **[Mandatory Parameters](#mandatory-parameters)**: Validates if a parameter has been included in the request.

::: interact

For an explanation on how to set up the features in the Search microservice, see [Feature configuration](readme.md#feature-configuration).

:::


## Faceting
The Faceting (`faceting`) feature offers the ability to create facets for specific fields. The Faceting feature supports [three types of facets](/explore-empathy-platform/overview/facets-and-filters-overview.html#types-of-facets): **value** (standard), **range**, and **hierarchical**.   

Facets can be determined using: 

- **[Query parameters](#query-parameters)**
- **[Empathy Platform Playboard configuration](#playboard-configuration)** (for navigation only)
- **[Search configuration file](#search-configuration)** 

The order of preference is query parameters, then Playboard configuration (for the navigation experience only), and finally, Search configuration file. All facetable fields must be set up in the [Search configuration file](#search-configuration). 

The order of the facets in the response is determined by the mechanism used for faceting. However, when using the query parameter, the order received in the service may not be the same as that the shopper sent in the request.

::: warning Important

You must have set up either a **searchconfiguration** or **browseconfiguration** collection in Elasticsearch, depending on the context (navigation or search). The endpoint returns a _500 Internal Server_ error code if the collection does not exist.

:::


### Query parameters
You can pass the facet to return in the response by using the `facet` query parameter. For example, to return the facet _gender_, use `facet=gender`. To return multiple facets, use multiple `facet` parameters, e.g. `facet=gender&facet=brand`.

You can disable facets for a single request by using the `facets` query parameter. 

::: note

The `facets` query parameter overrides the `enabled` property in the [Search configuration](#search-configuration).

:::

If the `facet` parameter is informed in the request, you can **boost or bury facet values** by adding the parameters `f.{FACET_FIELD}.boosts` and `f.{FACET_FIELD}.buries`, respectively (where `{FACET_FIELD}` represents the value of the name of the facet field). For example, to boost the gender facet field *women*, you use the query parameters `facet=gender&f.gender.boosts=women`.   

To **boost or bury multiple values**, you separate the values by commas. The order of the values is maintained in the response. When boosting, the *first* value is the *first* one in the response. When burying, the *first* value is the *last* one in the response.   
For example, to boost the brands *nike* and *addidas* in the Brand facet, where Nike appears before Addidas: `facet=brand&f.brand.boosts=nike,addidas`. 

You can use the `f.{FACET_FIELD}.sort` parameter to **sort each facet value** in the request, either alphabetically or by the number of filters. For example, to sort gender facet values alphabetically: `facet=gender&f.gender.sort=ALPHABETICALLY`.

::: warning Important

All facet fields must be set up in the [Search configuration](#search-configuration) to operate as query parameters. Otherwise, a 400 Bad Request error code is returned by the endpoint.

:::

Field | Description | Type
--- | --- | --- | ---
`facet` | Facet field to return in the response | String
`facets` | Determines whether facets are enabled or not (case-insensitive). If it is set to `false`, the response won't include the `facets` section. If no value is set, the facets are returned. If you enter a value other than those accepted, the endpoint returns an exception. | Boolean
`f.{FACET_FIELD}.boosts` | Boosts the facet fields specified. Fields are separated by commas | Array
`f.{FACET_FIELD}.buries` | Buries the facet field specified. Fields are separated by commas | Array
`f.{FACET_FIELD}.sort` | Sorts the facets in the order specified. Facets can be sorted by `RESULTS_NUMBER` or `ALPHABETICALLY` | String


### Playboard configuration
The Empathy Platform Playboard lets merchandisers configure the facets displayed in the Navigation experience using the [Navigation configuration tool](/explore-empathy-platform/overview/playboard-overview.md#navigation-features).    

To determine the fields that can be used as facets in the Playboard:

- the context must be set as `Browse`, 
- the facet field must be set up in the `field` parameter in the [search configuration file](#search-configuration), and 
- the field must be [linked as a facetable field in the Playboard configuration](/explore-empathy-platform/configure-empathy-platform/configure-playboard.html#linking-the-catalogue). 

Facet configuration for navigation can be applied hierarchically, so a parent configuration is applied over children where there is no specific configuration for the children. You can sort facet values by number of results or alphabetically. You can also you boost or bury specific facet values, so they appear at the top or at the bottom of the list in the Empathy Platform Playboard Configuration tool.

::: develop Using Faceting with Browsing Search

To retrieve the Playboard configuration of the navigation experience, you must pass the `browseField` and `browseValue` query parameters in the request. The `browseField` parameter must contain the field used for navigation and `browseValue` must contain the value of the navigation field. To set up the navigation experience, see [Browsing Search](search-type-features.md#browsing-search).

:::

<!--
::: details Navigation request and response using the Playboard configuration
In the Empathy Platform Playboard, the merchandiser has configured the _Gender_ facet for the category *b08648dbd* so that when shoppers view the category page, the gender facet is displayed.


**Request sent to endpoint**

```

browseField=categoryIds&browseValue=b08648dbd&lang=en

```


**Response returned to client**

```json

{
    "catalog": {
       "content": [
          {
             "image": "https://assets.empathy.co/images-demo/17334.jpg",
             "gender": "Unisex",
             "color": "Brown",
             "year": "2016",
             "categoryPaths": [
                "/Accessories|b08648dbd",
                "b08648dbd/Eyewear|b08648dbd__0efba610a"
             ],
             "usage": "Casual",
             "groupId": "17334",
             "store": [
                "001"
             ],
             "type": "Sunglasses",
             "url": "https://assets.empathy.co/images-demo/17334.jpg",
             "_jobProperties": {
                "jobId": "958347e7-5a3f-4cd4-bc11-229f0880739b",
                "_eb_date_": "2022-05-26T11:09:23.448Z"
             },
             "score": 101,
             "categoryIds": [
                "b08648dbd",
                "b08648dbd__0efba610a"
             ],
             "size": "U",
             "price_001": 58.75,
             "price": 25.99,
             "popularity": 5,
             "name": "Pepe Jeans Unisex Casual Sunglasses",
             "season": "Winter",
             "id": "17334-U",
             "categories": [
                "Accessories",
                "Eyewear"
             ],
             "indexMetrics": {
                "generatedTime": "2022-05-26T11:09:23.359Z",
                "readTime": "2022-05-26T11:09:23.359Z",
                "transformedTime": "2022-05-26T11:09:24.550Z",
                "deploymentTime": "2022-05-26T11:09:39.595Z"
             }
          },
          {
             "gender": "Men",
             "color": "Brown",
             "year": "2013",
             "categoryPaths": [
                "/Accessories|b08648dbd",
                "b08648dbd/Belts|b08648dbd__36223cfa9"
             ],
             "usage": "Casual",
             "groupId": "27822",
             "type": "Belts",
             "_jobProperties": {
                "jobId": "958347e7-5a3f-4cd4-bc11-229f0880739b",
                "_eb_date_": "2022-05-26T11:09:23.448Z"
             },
             "score": 101,
             "price": 36.75,
             "popularity": 9,
             "season": "Summer",
             "id": "27822-U",
             "categories": [
                "Accessories",
                "Belts"
             ],
             "indexMetrics": {
                "generatedTime": "2022-05-26T11:09:23.359Z",
                "readTime": "2022-05-26T11:09:23.359Z",
                "transformedTime": "2022-05-26T11:09:24.550Z",
                "deploymentTime": "2022-05-26T11:09:39.596Z"
             },
             "image": "https://assets.empathy.co/images-demo/27822.jpg",
             "store": [
                "001",
                "002",
                "003",
                "004"
             ],
             "url": "https://assets.empathy.co/images-demo/27822.jpg",
             "price_004": 41.75,
             "categoryIds": [
                "b08648dbd",
                "b08648dbd__36223cfa9"
             ],
             "price_003": 51.95,
             "price_002": 73.75,
             "size": "U",
             "price_001": 42.95,
             "name": "Bulchee Men Brown Leather Belt"
          },
          {
             "image": "https://assets.empathy.co/images-demo/28411.jpg",
             "gender": "Men",
             "color": "Copper",
             "year": "2016",
             "categoryPaths": [
                "/Accessories|b08648dbd",
                "b08648dbd/Eyewear|b08648dbd__0efba610a"
             ],
             "usage": "Casual",
             "groupId": "28411",
             "store": [
                "001",
                "002"
             ],
             "type": "Sunglasses",
             "url": "https://assets.empathy.co/images-demo/28411.jpg",
             "_jobProperties": {
                "jobId": "958347e7-5a3f-4cd4-bc11-229f0880739b",
                "_eb_date_": "2022-05-26T11:09:23.448Z"
             },
             "score": 101,
             "categoryIds": [
                "b08648dbd",
                "b08648dbd__0efba610a"
             ],
             "price_002": 16.95,
             "size": "U",
             "price_001": 63.75,
             "price": 43.75,
             "popularity": 1,
             "name": "Idee Men Copper Sunglasses",
             "season": "Winter",
             "id": "28411-U",
             "categories": [
                "Accessories",
                "Eyewear"
             ],
             "indexMetrics": {
                "generatedTime": "2022-05-26T11:09:23.359Z",
                "readTime": "2022-05-26T11:09:23.359Z",
                "transformedTime": "2022-05-26T11:09:24.551Z",
                "deploymentTime": "2022-05-26T11:09:39.596Z"
             }
          },
          {
             "image": "https://assets.empathy.co/images-demo/51628.jpg",
             "gender": "Women",
             "color": "White",
             "year": "2016",
             "categoryPaths": [
                "/Accessories|b08648dbd",
                "b08648dbd/Watches|b08648dbd__0da94d9f2"
             ],
             "usage": "Casual",
             "groupId": "51628",
             "store": [
                "001"
             ],
             "type": "Watches",
             "url": "https://assets.empathy.co/images-demo/51628.jpg",
             "_jobProperties": {
                "jobId": "958347e7-5a3f-4cd4-bc11-229f0880739b",
                "_eb_date_": "2022-05-26T11:09:23.448Z"
             },
             "score": 101,
             "categoryIds": [
                "b08648dbd",
                "b08648dbd__0da94d9f2"
             ],
             "size": "U",
             "price_001": 19.75,
             "price": 88.99,
             "popularity": 9,
             "name": "Fossil Women White Dial Chronograph Watch ES2997",
             "season": "Winter",
             "id": "51628-U",
             "categories": [
                "Accessories",
                "Watches"
             ],
             "indexMetrics": {
                "generatedTime": "2022-05-26T11:09:23.359Z",
                "readTime": "2022-05-26T11:09:23.359Z",
                "transformedTime": "2022-05-26T11:09:24.551Z",
                "deploymentTime": "2022-05-26T11:09:39.596Z"
             }
          },
          {
             "image": "https://assets.empathy.co/images-demo/11217.jpg",
             "gender": "Men",
             "color": "Steel",
             "year": "2016",
             "categoryPaths": [
                "/Accessories|b08648dbd",
                "b08648dbd/Watches|b08648dbd__0da94d9f2"
             ],
             "usage": "Casual",
             "groupId": "11217",
             "store": [
                "001",
                "002"
             ],
             "type": "Watches",
             "url": "https://assets.empathy.co/images-demo/11217.jpg",
             "_jobProperties": {
                "jobId": "958347e7-5a3f-4cd4-bc11-229f0880739b",
                "_eb_date_": "2022-05-26T11:09:23.448Z"
             },
             "score": 101,
             "categoryIds": [
                "b08648dbd",
                "b08648dbd__0da94d9f2"
             ],
             "price_002": 16.75,
             "size": "U",
             "price_001": 31,
             "price": 86.99,
             "popularity": 2,
             "name": "Esprit Men Athletic Silver Black Steel Watches",
             "season": "Winter",
             "id": "11217-U",
             "categories": [
                "Accessories",
                "Watches"
             ],
             "indexMetrics": {
                "generatedTime": "2022-05-26T11:09:23.359Z",
                "readTime": "2022-05-26T11:09:23.359Z",
                "transformedTime": "2022-05-26T11:09:24.582Z",
                "deploymentTime": "2022-05-26T11:09:39.597Z"
             }
          }
       ],
       "numFound": 5,
       "facets": [
          {
             "facet": "gender",
             "values": [
                {
                   "id": "unisex",
                   "value": "unisex",
                   "count": 1497,
                   "filter": "gender:unisex"
                },
                {
                   "id": "boys",
                   "value": "boys",
                   "count": 17,
                   "filter": "gender:boys"
                },
                {
                   "id": "girls",
                   "value": "girls",
                   "count": 28,
                   "filter": "gender:girls"
                },
                {
                   "id": "men",
                   "value": "men",
                   "count": 4428,
                   "filter": "gender:men"
                },
                {
                   "id": "women",
                   "value": "women",
                   "count": 5321,
                   "filter": "gender:women"
                }
             ]
          }
       ]
    }
 }
```

:::
-->


### Search configuration
The Search configuration file contains the default configuration that is used where no values are passed as query parameters or retrieved from the Empathy Platform Playboard.

All facetable fields **must be included in the Search configuration file** in the `facets` parameter. If the field is not present in the configuration and a request is sent with a `facet` query parameter, a 400 Bad Request error code is returned. 

The `facetableFields` parameter determines the type of facet used: **[value](#value-facets)**, **[range](#range-facets)**, or **[hierarchical](#hierarchical-facets)**. You must indicate a value for `facetableFields`. Within each facet type, you determine the name of the field to be used as a facet in the `field` parameter and the name of the filter field in `filterField`.

::: develop Using Faceting with Filtering

When faceting is used with [filtering](#filtering), **filtering should be executed first** so that the filters are also applied to facets. Filter queries must have the same name as the filtered field. This means that `filterField` must use the same name as the `queryParam` configured in the filtering feature.

:::

To be able to retrieve the facets set up in the Search configuration file in the Empathy Platform Playboard so they can be configured, you must set the `context` of the request and include all the required parameters. The context should be set as `BROWSE` when adding a navigation endpoint.   
The `SEARCH` context is used for facets for the search experience and must be associated with a search endpoint. The `query` parameter is required for the search experience.    

**Config parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`context` | Determines the context to use: `SEARCH` or `BROWSE` (required) | String | --- 
`facetableFields` | List of allowed fields to be used as facets (optional) | Array | --- 
`facets` | List of fields to be configured as facets (optional) | Array | Empty list
`enabled` | Enables or disables facets (required) | Boolean | --- 
`mainCollectionId` | Collection name used to compose the name of the index collection to search on (required) | String | ---
`secondaryCollectionId` | Secondary collection name used to compose the name of the index collection to search on (required) | String | ---

**Facetable Fields parameters** 

Field | Description | Type | Default value
--- | --- | --- | ---
`rangeFacets` | List of allowed fields to be used as range facets | Array | Empty list
`valueFacets` | List of allowed fields to be used as value facets | Array | Empty list
`hierarchicalFacets` | List of allowed fields to be used as hierarchical facets | Array | Empty list


#### Value facets
Value facets (`valueFacets`) show a list of textual values for an attribute. You determine the `field` and `filterField` values, and indicate the number of values to be returned (`minCount`, `size`).

**Value Facets parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`field` | Name of the field to facet. Fields must be `keyword` type in the index | String | ---
`filterField` | Name of the field to filter the facet. Fields must be `keyword` type in the index | String | ---
`minCount` | Minimum number of results for each facet value to appear in the response | Integer | 1
`size` | Maximum number of facet values to appear in the response | Integer | 100

**Configuration example**

```json
{
  "name": "faceting",
  "config": {
    "context": "SEARCH",
    "mainCollectionId": "collection",
    "secondaryCollectionId": "secondaryCollection",
    "enabled": true,
    "facetableFields": {
      "valueFacets": [
        {
          "field": "field1",
          "filterField": "filterField1",
          "size": 100,
          "minCount": 1
        }
      ]
    },
    "facets": [
      "field1"
    ]
  }
}
```

#### Range facets
Range facets (`rangeFacets`) present facet values on a range. Range facets use numeric values. You determine the `field` and `filterField` values and establish the upper and lower limits for the range (`ranges`).

**Range Facets parameters**

Field | Description | Type | Default value
--- | --- | --- | ---
`field` | Name of the field to facet. Field must be `numeric` type in the index | String | ---
`filterField` | Name of the field to filter the facet. Fields must be `keyword` type in the index | String | ---
`ranges` | List of ranges to be applied | Array | ---

**Ranges parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`from` | Lower limit to use for a range | Integer | ---
`to` | Upper limit to use for a range | Integer | ---
`gap` | Interval used to divide up the range. Only used if `from` and `to` are informed | Integer | ---

**Configuration example**

```json
{
  "name": "faceting",
  "config": {
    "context": "SEARCH",
    "mainCollectionId": "collection",
    "secondaryCollectionId": "secondaryCollection",
    "enabled": true,
    "facetableFields": {
      "rangeFacets": [
        {
          "field": "numericField",
          "ranges": [
            {
              "to": 10,
              "gap": 10
            },
            {
              "from": 10,
              "to": 100,
              "gap": 50
            },
            {
              "from": 100,
              "gap": 10
            }
          ]
        }
      ]
    },
    "facets": [
      "numericField"
    ]
  }
}
```

<!--
::: details Value and Range facet request and response example

**Endpoint request**
```

query=text&filter=brand:brandA&filter=price:0.0-10.0&facet=brandName&facet=category&facet=price&f.brandName.sort=ALPHABETICALLY

```

**Elasticsearch aggregations**
```json
{
  "aggregations": {
    "all_filter_agg": {
      "filter": {
        "bool": {
          "filter": [
            {
              "terms": {
                "brandName": [
                  "brandA"
                ],
                "_name": "brand"
              }
            },
            {
              "bool": {
                "should": [
                  {
                    "range": {
                      "price": {
                        "from": 0.0,
                        "to": 10.0,
                        "include_lower": true,
                        "include_upper": false
                      }
                    }
                  }
                ],
                "_name": "price"
              }
            }
          ]
        }
      },
      "aggregations": {
        "category": {
          "terms": {
            "field": "category"
          }
        }
      }
    },
    "filtered_brandName": {
      "filter": {
        "bool": {
          "filter": [
            {
              "bool": {
                "should": [
                  {
                    "range": {
                      "price": {
                        "from": 0.0,
                        "to": 10.0,
                        "include_lower": true,
                        "include_upper": false
                      }
                    }
                  }
                ],
                "_name": "price"
              }
            }
          ]
        }
      },
      "aggregations": {
        "brandName": {
          "terms": {
            "field": "brandName"
          }
        }
      }
    },
    "filtered_price": {
      "filter": {
        "bool": {
          "filter": [
            {
              "terms": {
                "brandName": [
                  "brandA"
                ],
                "_name": "brand"
              }
            }
          ]
        }
      },
      "aggregations": {
        "price": {
          "range": {
            "field": "price",
            "ranges": [
              {
                "from": 0.0,
                "to": 10.0
              },
              {
                "from": 10.0,
                "to": 50.0
              },
              {
                "from": 50.0,
                "to": 100.0
              },
              {
                "from": 100.0
              }
            ]
          }
        }
      }
    }
  }
}
```

**Response to client**
```json
{
  "facets": [
    {
      "facet": "brandName",
      "value": [
        {
          "value": "brandA",
          "count": 10,
          "filter": "brand:brandA"
        },
        {
          "value": "brandB",
          "count": 13,
          "filter": "brand:brandB"
        }
      ]
    },
    {
      "facet": "category",
      "value": [
        {
          "value": "01",
          "count": 2,
          "filter": "category:01"
        },
        {
          "value": "02",
          "count": 5,
          "filter": "category:02"
        },
        {
          "value": "03",
          "count": 7,
          "filter": "category:03"
        }
      ]
    },
    {
      "facet": "price",
      "values": [
        {
          "value": "0.0-10.0",
          "count": 49,
          "filter": "price:0.0-10.0"
        },
        {
          "value": "10.0-50.0",
          "count": 91,
          "filter": "price:10.0-50.0"
        }
      ]
    }
  ]
}
```
:::
-->

#### Hierarchical facets
Hierachical facets organize categories into subfacets for a more granular filtering experience. They establish a parent-child relationship between facets that allows shoppers to drill down from a general category to a more specific category. For hierarchical facets, each value in the hierarchy must have a name and an ID. For example:  

```
- Pantry:01
  - Baking+%26+Cooking: 01012
    - Cake+%26+Brownie+Mix: 0101200004
```
  
The `field` must be stored in the index according to a specific format:

```json
"facetField": [
"/Pantry|01",
"01/Baking+%26+Cooking|01__01012",
"01__01012/Cake+%26+Brownie+Mix|01__01012__0101200004"
]
```

This block indicates the path where the document belongs. It contains the following information: 

- Items that start with `/` are the **first level of items**. 
- The **ID of the parent item** is found before the `/` symbol (e.g. 01). 
- The **escaped value** of the facet is found after the `/` (e.g. Pantry). 
- The separator `|` is used after the value, followed by the **ID corresponding to that item** (e.g. 01012). 
- The stored ID must contain **all the IDs from the root to the current value**, separated by double underscore `__`.

::: develop

As the characters `/`, `|` and `__` have a special meaning for hierarchical facets, make sure facet fields do not contain them as part of their names or IDs. In that case, you should process those characters using the client index plugin.

:::

**Hierarchical Facets parameters**
Field | Description | Type | Default value
--- | --- | --- | ---
`field` | Name of the field to facet. Fields must be `keyword` type in the index | String | -
`filterField` | Name of the field to filter the facet. Fields must be `keyword` type in the index | String | -
`minCount` | Minimum number of results for each facet value to appear in the response | Integer | 1
`size` | Maximum number of facet values that will appear in the response | Integer | 100

To facilitate the filtering of the facet, a separated `filterField` is used, where only IDs are stored. For example:

```json
"filterField": [
"01",
"01__01012",
"01__01012__0101200004"
]
```

<!--
::: details Hierarchical facet request and response example

**Endpoint request**

```
query=text&facet=category&filter=category:01&filter=category:01012
```

**Elasticsearch aggregations**

```json
{
  "aggregations": {
    "all_filter_agg": {
      "filter": {
        ...
      }
    },
    "filtered_category": {
      "filter": {
        ...
      },
      "aggregations": {
        "category": {
          "terms": {
            "field": "category",
            "include": "/.*",
            "exclude": ""
          }
        },
        "category_01": {
          "terms": {
            "field": "category",
            "include": "01/.*",
            "exclude": ""
          }
        },
        "category_01012": {
          "terms": {
            "field": "category",
            "include": "01012/.*",
            "exclude": ""
          }
        }
      }
    }
  }
}
```

**Response to client**

```json
{
  "facets": [
    {
      "facet": "category",
      "values": [
        {
          "id": "23",
          "value": "Candy",
          "count": 50,
          "filter": "category:23"
        },
        {
          "id": "01",
          "value": "Pantry",
          "count": 60,
          "filter": "category:01",
          "children": {
            "facet": "category_01",
            "values": [
              {
                "id": "01012",
                "value": "Baking & Cooking",
                "count": 30,
                "filter": "category:01012",
                "children": {
                  "facet": "category_01012",
                  "values": [
                    {
                      "id": "0101200007",
                      "value": "Canned & Dry Milk",
                      "count": 20,
                      "filter": "category:0101200007"
                    },
                    {
                      "id": "0101200011",
                      "value": "Frosting & Decorations",
                      "count": 10,
                      "filter": "category:0101200011"
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  ]
}
```
:::
-->


## Filtering
The Filtering (`filtering`) feature adds the ability to filter the results based on field-value and numeric range criteria.

::: warning Important

**Faceting and Total hits features depend on filtering**. For more information, see [Faceting](#faceting) and [Total hits](response-customization-features.md#total-hits).

:::

Filters can be sent in two ways:

- **`filter` parameter value**: using the format: `filter=field:value` or `filter=field:from-to`. 
- **Query parameter**: using the format `field=value` or `field=from-to`. 

If a request contains filters in two formats, the values inside `filter` parameter have preference. For example, if the color is sent as a query parameter (`color=red`) and as a `filter` parameter (`filter=color:blue`) in the request `color=red&filter=color:blue`, only the `blue` color is filtered. 

If the request contains **multiple filters on various attributes**, all of filters are evaluated (`AND` operation relationship). For example, if the request contains `filter=color:red&filter=size:L&filter=price:5-5.99`, the results are filtered to show only those that match the color red, size L, *and* a price range of €5 to €5.99. 

For **multi-value/multi-range filters**, by default a single match is enough to consider the result valid (OR relationship). You can change this behavior using the `operation` configuration parameter. For example, if you configure the `operation` parameter as `OR`, when the request is `filter=color:red&filter=color:blue`, it shows results that match either the color red *or* the color blue.

If you want to use **exclude results using filters**, you need to send an exclusion filter in the request in the format `exclude_configuredFieldName`. For example, to filter results by color, showing those that match red and strictly excluding any results that match blue, the parameters are `filter=color:red&filter=exclude_color:blue`.

Field | Description | Type
--- | --- | --- |
`filter` | Field to be used as filter. Available formats: `filter=field:value` or `filter=field:from-to` | String
`exclude_` | Field to be used to exclude. Format: `filter=exclude_field:value` | String


### Search configuration
The fields used to filter the results are configured either in the request or in the JSON configuration file of the feature. If a required filter is not included in the request, a bad request error is returned in the response.

**Config parameters**

Field | Description | Type | Default value
--- | --- | --- | ---
`fields` | List of allowed fields to be used as filter. It cannot be null or empty (required) |  Array  | - 

**Fields parameters**

Field | Description | Type | Default value
--- | --- | --- | ---
`name` | Name of the field to filter. It cannot be null or empty (required) | String | -
`queryParam` | Name of the query parameter (optional) | String | The value specified in `name`
`type` | Type of the filter. It can be either `VALUE` or `RANGE`. It cannot be null. It must be written in **upper case** (required) | String | -
`mandatory` | Specifies if the filter must be provided in the request. Possible values: `true` (the filter is included in all the requests) or `false` (the filter is not included in all the requests)  (optional) | Boolean | `false`
`exclusion` | Specifies if the filter is an exclusion filter. Possible values: `true` or `false` (optional) | Boolean | `false` 
`operation` | Operation to be applied to different values of the same filter. It can be `AND` or `OR` | String | `OR`

**Configuration example**
```json
{
  "name": "filtering",
  "config": {
    "fields": [
      {
        "name": "brandCode",
        "queryParam": "brand",
        "type": "VALUE",
        "operation": "OR"
      },
      {
        "name": "price",
        "type": "RANGE",
        "mandatory": true
      },
      {
        "name": "brandName",
        "type": "VALUE",
        "exclusion": true
      }
    ]
  }
}
```

<!--
:::details Filtering request and response example

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

## Mandatory Parameters
The Mandatory Parameters (`mandatoryparameters`) feature adds the ability to check if a given parameter has been included in the request. It returns an 400 Bad Request error 
if the parameter missing.


### Search configuration
The fields to be validated as mandatory are included in the `mandatoryFields` parameter.

Field | Description | Type | Default value
--- | --- | --- | ---
`mandatoryFields` | List of fields that must be present in the request | Array | Empty list

**Configuration example**
```json
{
  "name": "mandatoryparameters",
  "config": {
    "mandatoryFields": [
      "store",
      "lang"
    ]
  }
}
```

<!--
:::details Mandatory Parameters request and response example

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