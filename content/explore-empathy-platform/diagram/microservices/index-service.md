---
title: Index microservice

---

::: slot description

Organizing your product catalogue 

:::

::: slot remark

Before shoppers can start a search, you need to make your product catalogue available to the search engine. The Index microservice is responsible for receiving and managing the products from your catalogue in **feeds**. The feed is like an inventory of the products, where relevant information needed for search, i.e. characteristics and attributes, is provided in specific fields. So, all products stored in the feed can potentially be displayed as a result to relevant queries.  

The Index microservice takes the product feed and transforms it into an index file to make the indexed fields understandable, searchable, and retrievable by the search engine. Once the index is ready, it is stored by the search engine, ready for the [Search service](search-service) to find the correct matches for a query.

The Index microservice not only handles feeds (either full or partial) for your product catalogue, but also other types of feeds that support **advanced search features** generated during the [Empathize](empathize-batch) and [Top Clicked](top-clicked-batch) batch processes and **product and attribute ranking configurations** managed via the [Empathy Platform Playboard's tools](../play/play-tooling). That’s to say, the Index microservice also stores different indexes containing [query suggestions](../interface/query-suggestions), [recommendations](../interface/recommendations), and [popular searches](../interface/popular-searches), as well as product & attribute ranking and link (redirections & promotions) configurations. 

:::
<MoreInfo>
<Flex theme="links">

<GoTo title="Index Builder API" to="/develop-empathy-platform/api-reference/index-api"></GoTo>

</Flex>
</MoreInfo>