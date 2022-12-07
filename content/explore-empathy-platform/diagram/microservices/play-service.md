---
title: Play microservice

---

::: slot description

Configuring the way search and navigation behaves

:::

::: slot remark

The Play microservice allows you to adapt search results and product discovery to your business needs, monitoring all the tooling features used to **customize the search and navigation experiences** via the [Empathy Platform Playboard](../play).

Apart from managing and executing all configurations for search and navigation, such as **synonyms**, **blacklist** terms, **redirections**, **facets**, product & attribute **ranking**, product attribute **weighting**, or **curated related tags and next queries**, the Play microservice communicates with the corresponding Empathy microservices, i.e. [Index](index-service), [Search](search-service), and [Beacon](beacon-service), to commit and store all the configuration changes performed. Then, when a query is submitted, the Search or Beacon microservices can check if any configuration applies before displaying the results.

As well, the Play microservice retrieves the data stored in the [Statistics microservice](stats-service) to display it in the form of meaningful and insightful **reports** for you to better understand how your shoppers interact with your product catalogue. It also connects with the [Search](search-service) microservice to get information on **product scoring** to provide the hows and whys of the search: how does each configuration affect product scoring, how do business rules and wisdom of the crowd influence the final sorting, and why does each result appear in the position it is.   

::: 
<MoreInfo>
<Flex theme="links">

<GoTo title="Play API" to="/develop-empathy-platform/api-reference/play-api"></GoTo>

</Flex>

</MoreInfo>