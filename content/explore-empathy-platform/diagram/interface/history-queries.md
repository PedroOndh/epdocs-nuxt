---
title: History Queries

---

::: slot description
</br>
:::

::: slot remark
**ALSO** *Previous searches*, *Latest searches*, *Search history*, *Historic*, *Recent searches*

The History Queries feature presents last searches to shoppers. That’s the list of recently searched terms that let shoppers repeat a search in one click and get to the results faster, without writing down any query.

The history list can appear before or during query formulation, arranging records always by the most recent, even though shoppers can opt to delete a single history entry or the complete search history.


<!-- Include link to component when available - <DetailSection tags="Microservices"> -->


<!-- **<RouterLink to="/explore-empathy-platform/diagram/microservices">Microservices</RouterLink>**  -->
Since Empathy doesn’t store cookies, the underlying microservices don’t take part in data history processing. In fact, the one in charge of feeding the shopper’s search history is the [browser’s local web storage](/explore-empathy-platform/experience-search-and-discovery/web-local-storage.md). Despite this, as search suggestions are based on shopper behaviour, history suggestions are also eligible for [data tracking purposes](../microservices/tagging-service/).

<!-- **Powered by** Browser's local web storage, [Tagging microservices](../microservices/tagging-service/), Search microservice -->

:::

<MoreInfo>
<Flex theme="links">

<GoTo title="Exploring History Queries" to="/explore-empathy-platform/features/history-queries-overview"></GoTo>
<GoTo title="History Queries experience" to="../../explore-empathy-platform/experience-search-and-discovery/history-queries"></GoTo>

</Flex>
</MoreInfo>