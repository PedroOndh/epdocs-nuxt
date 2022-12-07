---
title: Pagination

---

> Organize the results into easy-to-explore groups

Having numerous results for each search query can be overwhelming for shoppers. You can improve the search experience by separating large sets of results into easily navigable groups of products. 

Pagination separates the full list of results returned by the search engine into groups of results, spreading the product catalogue across several discrete pages.
You can configure the search engine to display a determined number of results per page for each search query.

![Pagination](~@assets/media/features/overview-pagination.svg)

Pagination can be implemented transparently to shoppers. You can display a “load more” button or numbered pagination buttons to allow shoppers to step successively to the next pages, or you can add numbered buttons or a dropdown list to allow them to jump to subsequent pages without any specific sequence. Alternatively, you can make pagination invisible to shoppers with features such as **infinite scroll**. With infinite scroll, as soon as shoppers scroll down to the end of the results, the next page of results retrieved by the search engine is automatically loaded together with the previous results without any intervention. 

While the pages may not appear to be there with infinite scroll, it does mean that they don’t exist. The results returned by the search engine are grouped into sets, nonetheless, to ensure the best performance in terms of page loading. Trying to load all the results at once would slow page loading considerably.

::: design

With the [SERP UI X&nbsp;Components](../experience-search-and-discovery/serp-ui.md), you can indicate the number of product results to render per page.

:::


## Spot the difference
While you may only associate queries with actions with the search box, pagination can also trigger a new query in the background. When shoppers load a new page, a new query may be triggered depending on your search implementation. In Empathy Platform, a **query** is any request to the search engine that returns a set of results. Query events are used to track search interactions and are triggered every time a search query is performed and results are displayed or updated. If the shopper clicks on a page to retrieve the results for a second page or scrolls down when infinite scroll is activated, a new query may be triggered.


## Use Pagination to… 
- Group large result sets into more user friendly pages.
- Give shoppers control over what number of results they see.
- Allow your shoppers to enjoy an enhanced frictionless experience with infinite scroll.

<!-- ## The inner workings of pagination
When a shopper submits a search query, results are returned by the search engine and displayed in the results grid. If pagination is implemented, when the shopper clicks to retrieve the next page of results, a request is sent to the search service with the number of results shown as part of page 1 and the starting result for page 2. By default, the number of results shown per page is determined by the Search configuration. However, this value can be changed by sending a parameter in the search query request to the search service. If there are no parameters in the search query, the default configuration is used. -->
