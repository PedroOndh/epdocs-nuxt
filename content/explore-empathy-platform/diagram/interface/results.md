---
title: Results

---

::: slot description

</br>

:::

::: slot remark
**ALSO** *Results grid*, *SERP*, *search engine results page*

The results page displays all relevant product results, letting shoppers navigate and interact with the resulting products. 

Results can display in different ways, such as pictures, links, and banners. You can extend the experience as well, by adding product-related information (description, size, price, etc.) and other navigation experiences (faceting, rating, add-to-cart and wishlist buttons, etc.).

<!-- Include link to component when available - <DetailSection tags="Microservices"> -->

<!--**<RouterLink to="/explore-empathy-platform/diagram/microservices">Microservices</RouterLink>**  --> 
The results page retrieves the data from the [search process](../microservices/search-service) itself, displaying the results that best match the query according to relevancy and contextual information. 

Like the search box, the results page becomes a valuable source of information about shopper behaviour and search performance. This touchpoint collects [event data](../microservices/tagging-service) about shopper interaction with each result. That’s how the underlying [Contextualize microservice](../microservices/contextualize-service) can build search experiences that meet your shopper needs.  

<!-- **Powered by** [Tagging microservices](../microservices/tagging-service/), Search microservice, Stats microservice -->

<!-- Include link to component when available - <DetailSection tags="Play"> -->
<!-- **<RouterLink to="/explore-empathy-platform/diagram/play/">Play</RouterLink>**   -->
With the [Empathy Playboard](../play/) you can orchestrate product results ranking and relevance by applying no-code configurations. Take control of the result display to boost specific products, create links and banners for special promotions, and set synonyms to get relevant results. 

What’s more, contextual data tracked in the background also helps you know [what’s happening at your shop](../play/play-insights). Now with streaming reports, you can better understand the shopper behaviour, the performance of results, and how well the result-related features work.

<!-- **Powered by** Playboard, Insights -->

:::

<MoreInfo>

<Flex theme="links">

<GoTo title="Exploring Results in SERP" to="/explore-empathy-platform/overview/results-overview"></GoTo>
<GoTo title="Exploring Product Results" to="/explore-empathy-platform/overview/product-results-overview"></GoTo>
<GoTo title="Layout experience" to="/explore-empathy-platform/experience-search-and-discovery/serp-ui"></GoTo>
<GoTo title="Display experience" to="/explore-empathy-platform/experience-search-and-discovery/product-results-ui"></GoTo>

</Flex>

</MoreInfo>