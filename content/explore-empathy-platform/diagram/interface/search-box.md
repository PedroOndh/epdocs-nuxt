---
title: Search box

---

::: slot description

</br>

:::

::: slot remark
**ALSO** *Search bar* *Search tool* *Search field* *Search input*

The Search Box is the user-facing bar where shoppers can type what they're looking for. It usually includes an input field, a search button or a magnifying glass icon to start the search, and a clear button to delete the search query.


<!-- Include link to component when available - <DetailSection tags="Microservices"> -->

<!-- **<RouterLink to="/explore-empathy-platform/diagram/microservices">Microservices</RouterLink>**   -->
Behind the scenes, the Search Box isn’t just the input point that triggers the [search process](../microservices/search-service), submitting a text-based query to a [product-based index](../microservices/index-service) to find the best matches. 

Despite its simplicity, the Search Box is also the most valuable source of information about shoppers and queries. It’s the touchpoint for converting the shopper interactions into [context information](../microservices/tagging-service/) used to build search experiences adapted to their needs. 

<!-- **Powered by** [Tagging microservices](../microservices/tagging-service/), Search microservice, Stats microservice -->

<!-- Include link to component when available - <DetailSection tags="Play"> -->
<!-- **<RouterLink to="/explore-empathy-platform/diagram/play/">Play</RouterLink>**   -->
From an analytics point of view, the Search Box opens the door to turning input queries into valuable data and metrics. With the Playboard [Analytics](../play/play-analytics) and [Insights](../play/play-insights) features, you get all the statistical data generated in the backend, shaped into search-based analytics and real-time insights. That way, you can discover real trends in your shop and analyse the performance of search. 

<!-- **Powered by** Playboard, Insights -->
:::

<MoreInfo>

<Flex theme="links">

<GoTo title="Exploring Search Box" to="/explore-empathy-platform/overview/search-box-overview"></GoTo>
<GoTo title="Search Box experience" to="/explore-empathy-platform/experience-search-and-discovery/search-box"></GoTo>

</Flex>

</MoreInfo>