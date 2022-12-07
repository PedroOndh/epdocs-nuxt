---
title: Tagging microservices

---

::: slot description

Capturing the interaction data needed to enhance your search and discovery experience

:::

::: slot remark

This is the first step in building your Empathy commerce search and discovery experience; without it, you won’t be able to build a meaningful conversation with shoppers.  

The Tagging microservices are responsible for [capturing shopper behavior](../../capture-shopper-interaction). Every shopper search query, click, and purchase generates a signal. These signals are collected, processed, and filtered by the Tagging microservices. They represent the starting point for providing **advanced search capabilities** using the Empathy batch processes, such as helping shoppers to formulate more useful queries and offering suggestions, as well as providing you with **context-rich insights** into shopper intent using the [Statistics microservice](stats-service) and [Play](../play/).

The Tagging microservices, via its [API](/develop-empathy-platform/api-reference/tagging-api.md), collect **search queries** launched by shoppers from the [search box](../interface/search-box.md), track the **clicks** on [recommendations](../interface/recommendations.md) and [popular searches](../interface/popular-searches.md), and provide the information needed to generate different **shopper suggestions** ([query suggestions](../interface/query-suggestions.md), [next queries](../interface/next-queries.md), etc.), and refine **new searches** using [related tags](../interface/related-tags.md), for example.

:::
<MoreInfo>
<Flex theme="links">

<GoTo title="Capture shopper interaction and behavior" to="../../capture-shopper-interaction"></GoTo>
<GoTo title="Capture shopper interaction using the Tagging API" to="/develop-empathy-platform/capture-interaction-signals"></GoTo>
<GoTo title="Tagging API" to="/develop-empathy-platform/api-reference/tagging-api"></GoTo>
<GoTo title="Empathize batch process" to="empathize-batch"></GoTo>
<GoTo title="Query Signals batch process" to="query-signals-batch"></GoTo>
<GoTo title="Top Clicked batch process" to="top-clicked-batch"></GoTo>
</Flex>
</MoreInfo>