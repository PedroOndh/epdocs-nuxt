---
title: Beacon microservice

---

::: slot description

Connecting shoppers with the product catalogue in understandable ways

:::

::: slot remark

The Beacon microservice provides search intelligence data to deliver and control **advanced search capabilities** based on anonymized behavioral data collected by the [Tagging microservices](tagging-service.md).

The Beacon microservice acts as a radio beacon that gathers the *signals* sent by the [Query Signals batch process](query-signals-batch.md) and the [Play microservice](play-service) to deliver contextual search and discovery experiences, such as helping shoppers to formulate more useful queries with [**related tags**](../interface/related-tags.md) or inspiring them on what to look for next with [**next queries**](../interface/next-queries.md). 

The related tags and next queries generated organically during the Query Signals batch proccess are collected and stored by the Beacon microservice, and then retrieved via its [API](/develop-empathy-platform/api-reference/beacon-api.md) by the frontend in the commerce store after the initial search. The Beacon microservice also receives and stores the related tags and next queries that have been **created and curated manually** by merchandisers using the [**configuration tools**](../play/play-tooling.md) in Empathy Platform Playboard to provide a really meaningful and profitable shopping experience.  

:::
<MoreInfo>
<Flex theme="links">

<GoTo title="Beacon API" to="/develop-empathy-platform/api-reference/beacon-api"></GoTo>

</Flex>
</MoreInfo>