---
title: Query Signals batch process 

---

::: slot description

Embracing shoppers' intent with conversational search suggestions

:::

::: slot remark

Query Signals is a batch process responsible for generating the organic [**related tags**](../interface/related-tags.md) and [**next queries**](../interface/next-queries.md) suggestions that will guide shoppers in their product discovery experience, leading a conversational approach.

Anonymized contextual data (shopper queries, product clicks, and purchases) collected by the [Tagging microservices](tagging-service.md) is analyzed and processed in the Query Signals batch process to extract the most relevant data for a specific query, i.e. query-pair candidates for related tags and next queries. For example, to generate a list of next query candidates, it takes all queries performed in succession, either before or after another, during the same session, and compiles a **candidate list** of query pairs.


Then, the batch process applies a **set of filters** to the candidate list to check the quality of the collected data, ensure query performance and product findability, and apply any business rules defined. Now, the most relevant search suggestions are ready to be stored by the [Beacon microservice](beacon-service.md). After the initial search, Empathy Platform [Interface X](../interface/) retrieves, via the [Beacon API](/develop-empathy-platform/api-reference/beacon-api), the list of related tags or next queries associated with the query and displays it in the commerce store.

:::
<MoreInfo>
<Flex theme="links">

<GoTo title="The inner workings of Related Tags" to="/explore-empathy-platform/features/related-tags-overview.html#the-inner-workings-of-related-tags"></GoTo>

<GoTo title="The inner workings of Next Queries" to="/explore-empathy-platform/features/next-queries-overview.html#the-inner-workings-of-next-queries-2"></GoTo>

</Flex>
</MoreInfo>