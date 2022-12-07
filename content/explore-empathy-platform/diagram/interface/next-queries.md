---
title: Next Queries

---


::: slot description
</br>


:::

::: slot remark
**ALSO** *Popular Next Queries*, *What’s Next*


The Next Queries feature displays hints about what to look for next after performing a search. This type of suggestion anticipates new search ideas as it shows the search queries that other shoppers have made after the current search. Next queries can adopt different layouts, such as a dropdown list beneath the search box or a carousel on the search results page.

<env if-false="dev">

Behind the scenes, Next Queries come from the most repeated search terms after performing a given search in the same session. The [Tagging microservices](../microservices/tagging-service/) collect and analyze every interaction and contextual data to return a set of relevant matching queries. That’s how shopper anticipation arises.

The contextual data also helps to generate statistical reports about query pairs for a given period. So, you can learn which search terms follow others, analyze the most repeated behavior in your shop, and understand the shopper journey to enhance query performance according to your business needs based on actual [statistical](../microservices/stats-service/) information.

You can control how next queries are experienced and configure their content with the <RouterLink to="/explore-empathy-platform/diagram/play/">Empathy Platform Playboard</RouterLink>. For example, you can blacklist search terms so that they can’t figure as next queries.

</env>

<env if-true="dev">

<!--- Next Queries  --->

Behind the scenes, two types of next queries are combined to offer the full experience. **Organic next queries** come from the most repeated search terms after performing a given search in the same session. The <RouterLink to="/explore-empathy-platform/diagram/microservices/tagging-service">Tagging microservices</RouterLink> collect and analyze every interaction and contextual data to return a set of relevant matching queries. That’s how shopper anticipation arises.

Meanwhile, **curated next queries** allow merchandisers to tailor the experience using the <RouterLink to="/explore-empathy-platform/diagram/play/play-tooling">Empathy Platform Playboard tooling</RouterLink>. Merchandisers can create curated next queries to offer suggestions to shoppers on their search journey, choose which organic next queries to show, and even opt to distinguish curated next queries from organic next queries in the search experience, transparently showing to shoppers curated and organic suggestions.


</env>

:::


<MoreInfo>
<Flex theme="links">

<GoTo title="Exploring Next Queries" to="/explore-empathy-platform/features/next-queries-overview"></GoTo>
<GoTo title="Next Queries experience" to="/explore-empathy-platform/experience-search-and-discovery/next-queries"></GoTo>


</Flex>
</MoreInfo>

