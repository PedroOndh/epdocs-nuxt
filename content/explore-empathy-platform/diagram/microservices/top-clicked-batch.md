---
title: Top Clicked batch process

---

::: slot description

Inspiring shoppers with product discovery recommendations

:::

::: slot remark

Top Clicked is a batch process responsible for gathering the most clicked products in the commerce store, similar to the [**recommendations**](../interface/recommendations.md) a personal shopper would suggest, so that shoppers discover products they haven't previously considered. 

Anonymized contextual data (shopper queries, product clicks, and purchases) collected by the [Tagging microservices](tagging-service.md) is analyzed and processed by the [Statistics microservice](stats-service.md) to generate a report with the top-clicked products for a selected date range. 

The Top Clicked batch process accesses this report and generates a **feed of the top-clicked products**. The feed is then indexed and saved by the [Index](index-service.md) and [Search](search-service.md) microservices. The list of top products can be retrieved in the commerce store in all stages of the search journey: pre-search, during the search, and post-search.


:::
<MoreInfo>
<Flex theme="links">

<GoTo title="The inner workings of Recommendations" to="/explore-empathy-platform/features/recommendations-overview.html#the-inner-workings-of-recommendations"></GoTo>

</Flex>
</MoreInfo>