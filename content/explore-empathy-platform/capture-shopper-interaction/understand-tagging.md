---
title: Understand how tagging works and why it matters
tags:
    - tagging
    - click events
    - browse events
    - navigation interaction
    - search interaction
---

Tagging involves adding snippets of code to your site to track specific shopper interactions. Each time a shopper interacts with your commerce site, such as launching a search query, an [event](interaction-events.md#about-the-tagging-events) is triggered via this code.   

![Understanding tagging](~@assets/media/tagging/capture-tagging-api.svg)

The Tagging microservices collect these events and basic data on when and where the events were triggered. They then categorize, filter, and enrich these events with additional data such as the product category and family or the event's timestamp, so they can be subsequently used by Empathy Platform’s other microservices to provide advanced search features such as suggestions about related search queries or trending items that may be of interest, for example.   

The Tagging microservices not only track the search terms shoppers enter in your search box or the search results shown, but also the extended *click stream*, for instance, when a shopper clicks “Add to wishlist” from a search result page, or chooses to add a product to cart from a product detail page. By tracking these interactions too, you can build a clearer picture of the products that interest your shoppers without requiring personally identifiable information.    


## Use tagging data for contextual services
The interaction data collected by Tagging is used to generate hints on how to refine searches with related tags to those shoppers who know exactly what they want, offer useful suggestions based on the search query to shoppers who are searching for a broader category, or highlight popular items based on real interaction data for those shoppers looking for inspiration.  
For more information about contextual search features such as Related Tags, Popular Searches, or Recommendations, see [Search and Discovery features](/explore-empathy-platform/features/readme.md).


<!-- Change this link when information on the search process is available. Include information on how to decipher the query syntax i.e. q= + to append terms, what is considered a query in Empathy, when a new query is sent, etc.
For more information, see Understand the Search Experience. -->


## Use tagging data for analytics & reporting
One of the main benefits of tagging is you can get a clearer insight into your shoppers’ collective behavior:

-   **Search funnel**: understand the conversion path directly from search, from the initial query to checkout. You can not only understand what’s going on in your search sessions, but also understand whether or not the success or conversion is directly caused by an effective search session.
-   **Detailed analysis by query**: a deep conversion path for each query. Which queries have the best or worst performance? Which ones are generating the majority of the revenue from search?
-   **Findability**: how much effort must your shoppers make to find what they’re looking for? This KPI allows you to understand how many of your search clicks take place in the first page of results.
-   **No Results analysis**: a detailed list of the top queries lacking results in your site and related trends. Is any term a candidate to be added to your catalogue?

::: note

Bear in mind that there are different ways to count search queries depending on the analytics platform used. Empathy Platform considers a query to be any request to the search engine that returns a set of results. See **[Frequently Asked Questions](../../faqs.md)**.

:::


## Privacy matters
Trust is key in building relationships with consumers, so how you handle the data that belongs to your shoppers is vital. When you track interactions using events in Empathy, you’re identifying **collective shopper behavior, rather than individual user behavior**. No personally identifiable information is stored. Undesired bot activity can be filtered out by IP address or user-agent, but IP addresses and user-agents are not logged by the tagging microservices. Once an event is captured, all association with the IP address or user-agent is lost.

::: interact 

To know more about the data stored locally, check out [Interface X data privacy and browser local storage](/explore-empathy-platform/experience-search-and-discovery/web-local-storage.md).

:::