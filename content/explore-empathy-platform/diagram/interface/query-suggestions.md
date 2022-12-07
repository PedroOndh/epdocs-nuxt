---
title: Query Suggestions

---

::: slot description

</br>

:::

::: slot remark

**ALSO** _Search suggestions_, _Search-as-you-type suggestions_

List of predictions of what the shopper might be searching for that are usually displayed below the search box. It's instantly populated from the very first keystroke so that shoppers receive help on how to construct or complete their search and get relevant results without needing to keep typing.

<!-- Include link to component when available - <DetailSection tags="Microservices"> -->

<!-- **<RouterLink to="/explore-empathy-platform/diagram/microservices">Microservices</RouterLink>**  -->
Shoppers have relevant search suggestions on the fly thanks to [UI event tracking](./../explore-empathy-platform/capture-shopper-interaction). The underlying [Search](../microservices/search-service) and [Contextualize](../microservices/contextualize-service) microservices go over every interaction and understand contextual information to anticipate what shoppers might be after.

<!-- **Powered by** [Tagging microservices](../microservices/tagging-service/), Search microservice -->

[//]: # 'Include link to component when available - <DetailSection tags="Play">'

<!-- **<RouterLink to="/explore-empathy-platform/diagram/play/">Play</RouterLink>**  --> 
Whatever the logic behind, you can use the [Empathy Playboard](../play/) to configure the content displayed through suggestions and blacklist search terms without involving IT.

<!-- **Powered by** Playboard -->
:::

<MoreInfo>

<Flex theme="links">

<GoTo title="Exploring Query Suggestions" to="/explore-empathy-platform/features/query-suggestions-overview"></GoTo>
<GoTo title="Query Suggestions experience" to="../../explore-empathy-platform/experience-search-and-discovery/query-suggestions"></GoTo>

</Flex>

</MoreInfo>

