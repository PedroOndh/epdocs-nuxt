---
title: View reporting settings for the Statistics microservice
sidebar_title: View reporting settings
tags:
    - stats
    - stats settings
    - configuration management console
    - cmc
    - instance management
---

The Statistics section determines the threshold settings used in the batch processes to **calculate queries, clicks, and terms in the Statistics microservice**. 

![View statistics](~@assets/media/instance-mgt/config-statistics.svg)

::: warning

Only Playboard users with **permissions for Instance Management** can enable the reporting settings. 

:::

The [Statistics batch processes](/explore-empathy-platform/diagram/microservices/stats-service.md) are aggregation and consolidation jobs responsible for compiling and cleaning up the data from the events received and enriched by the Tagging and Tagging Enrichment microservices. The clean data is then used by the Statistics microservice for metric reporting. 

::: danger

Changing these settings **affects the future reporting of metrics** such as query, keyword, click, add-to-cart, and any derived metrics such as CTR and findability in the Empathy Platform Playboard.    

It **does not impact any statistics that have already been calculated** up to the moment of the change. The impact must be assessed before making any changes.

If you need to adjust a parameter to **reduce the noise in metric calculation and reporting**, contact [Partner Enablement](mailto:enablement_partners@empathy.co).

:::


## Viewing the batch threshold settings
The Statistics batch process settings determine the threshold limits for data refinement in **query subset and click subset calculation**. Generally speaking, the higher the threshold value, the greater the refinement in the calculation of the metric, and hence, the lower number of results. The key is finding the balance between higher and lower values.   

For example, in commerce stores with high traffic and an extensive product catalogue, the value tends to be higher, as the noise in query count is often higher and doesn’t provide as much value for the business.

The batch threshold settings are **set to the default values** and are **displayed for your information**. You cannot edit these values:   

- **Query count threshold**: Determines the minimum number of times that a query must appear to considered in the job. The default value is `3`, i.e. the query must have been used 3 times to be considered in the analytics.   
    This setting affects the **Queries** analytics <!-- add link to Querys analytics doc when available --> within the Empathy Platform Playboard. For more information, see the [Queries endpoints in the Statistics API](/develop-empathy-platform/api-reference/statistics-api.md).    

- **Related count threshold**: Determines the minimum number of times during a specific period that a click must appear to be considered in the job. The default value is `0`, i.e. it counts from the first click.      
    Similar to **Query count threshold**, this setting is associated with the products that shoppers click for a query. The higher the value, the fewer number of products shown for a query. The lower the value, the greater number of products shown.   
    This setting affects the reporting of clicks, add-to-carts, checkouts, and wishlist events. More specifically, it affects the metrics shown in the term details panel in the [Terms](/explore-empathy-platform/analyze-search-and-discovery/use-terms.html) data visualization. For more information, see the [Related endpoints in the Statistics API](/develop-empathy-platform/api-reference/statistics-api.md).  

- **Query length threshold**: Determines the minimum character length for a query to be considered in the job. The default value is `3`, i.e. any queries of less than 3 characters are removed.   
    It's designed to remove those queries resulting from autocomplete, i.e. requests are launched by keystroke when the shopper enters “trouser”, resulting in queries such as “t”, “tr”, and “tro”, as well as “trousers”. The greater the value, the lower number of queries logged. The lower the value, the higher number of queries logged. It's not usually changed, but it can be refined as appropriate.   
    It affects the Queries analytics within the Empathy Platform Playboard. For more information, see the [Queries endpoints in the Statistics API](/develop-empathy-platform/api-reference/statistics-api.md). 

- **Next queries query length threshold**: Determines the minimum character length for a query to be considered in the job. The default value is `3`, i.e. it only counts queries of 3 characters or more. 
    Although it may appear identical to **Query length threshold**, this setting affects [next query](/explore-empathy-platform/features/next-queries-overview.md) reporting, rather than queries. The greater the value, the lower number of next queries. The lower the value, the higher number of next queries.  
    For more information, see the [Next Queries endpoint in the Statistics API](/develop-empathy-platform/api-reference/statistics-api.md).  

- **Keyword length threshold**: Determines the minimum character length for search terms to be considered in the job. The default value is `3`, i.e. any terms of less than 3 characters are removed.  
    Similar to **Query length threshold**, it calculates terms (i.e. keywords) rather than queries. It's designed to remove those terms resulting from autocomplete that may give terms such as “s”, “so”, and “sol”. The greater the value, the lower number of terms. The lower the value, the higher number of terms. It's not usually changed, but it can be refined as appropriate.    
    This setting affects the [Terms](/explore-empathy-platform/analyze-search-and-discovery/use-terms.html) data visualization within the Empathy Platform Playboard. For more information, see the [Keywords endpoints in the Statistics API](/develop-empathy-platform/api-reference/statistics-api.md).   

- **minClickCountCategoriesTreshold**: Determines the minimun clicks required for a category to be relevant. This setting affects the Categories data visualization within the Empathy Platform Playboard. For more information, see the [Categories endpoints in the Statistics API](/develop-empathy-platform/api-reference/statistics-api).   

<!-- provide further info on minClickCountCategories. Talk to dev team to change UI label and write "treshold" in a separate word -->


## Enabling the Statistics microservice
You only need to **enable the Statistics microservice configuration** if you change the default values. To enable the configuration, turn on the **Enabled** toggle switch. 
