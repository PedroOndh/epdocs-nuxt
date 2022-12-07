---
title: Empathize batch process

---

::: slot description

Understanding what shoppers are looking for

:::

::: slot remark

Empathize is a batch process responsible for generating a list of possible search queries to help and inspire shoppers on what to look for. With the purpose of making shoppers feel understood, Empathize features two types of search suggestions based on shoppers’ behavior: [**query suggestions**](../interface/query-suggestions.md) to give hints on query formulation, and [**popular searches**](../interface/popular-searches.md) to provide search ideas based on top searches made in the commerce store. 

Anonymized contextual data (shopper queries, product clicks, and purchases) collected by the [Tagging microservices](tagging-service.md) is analyzed and processed in the Empathize batch process to extract the most relevant query data for a specific query, i.e. partial search terms, and generate a list of **search suggestion candidates** that match the shopper intent. 

At this point, the batch process applies a **set of filters** to the candidate list to check the quality of the collected data, ensure query performance and product findability, and apply any business rules defined. Now, the most relevant search suggestions are ready to go. 

They are indexed by the [Index microservice](index-service.md) to be stored by the search engine. Finally, Empathy Platform [Interface X](../interface/) retrieves the list of suggestions that best meet the shopper intention at query time from the [Search microservice](search-service.md).


:::
<MoreInfo>
<Flex theme="links">

<GoTo title="The inner workings of Query Suggestions" to="/explore-empathy-platform/features/query-suggestions-overview.html#the-inner-workings-of-query-suggestions"></GoTo>

<GoTo title="The inner workings of Popular Searches" to="/explore-empathy-platform/features/popular-searches-overview.html#the-inner-workings-of-popular-searches"></GoTo>

</Flex>
</MoreInfo>