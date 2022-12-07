---
title: Capture interactions with the Tagging API
tags:
    - tagging api
    - shopper interaction
    - search events
    - browse events
---

::: slot right-intro-column

<img :src="$withBase('/assets/media/tagging/capture-tagging-api.svg')" alt="Capture shopper interaction with the Tagging API">

:::


## Getting started with Tagging
Start capturing shopper interaction in your commerce store:

- Learn more [about the Tagging API](#about-the-tagging-api)
- [Integrate](#integrate-with-the-tagging-api) with the Tagging API

<!-- - Check your tagging integration -->
<!--  - Use the Tagging REST API -->


## About the Tagging API
Tagging is the method used to track shopper behavior in a store by adding snippets of code to the site to capture certain events. The Tagging API is in charge of collecting these events and data, which are in turn used to refine Empathy Platform’s contextual and analytics services, and enrich features such as related tags, suggestions, and popular searches.

You can trigger two types of events:

-   **Search tagging events** track interactions with the search engine, including launching a query from the search box, clicking on a product from the search engine results page (SERP), adding a product to the cart, or finalizing a purchase of a product from the SERP or product detail page (PDP) after a search.
-   **Browse tagging events** track interactions with site navigation that happens without launching queries. These include viewing categories in the navigation menu, clicking products, adding products to the cart and checkout.

Depending on the search and discovery features to be supported or the analytics you want to obtain, you may need to integrate search events, browse events, or both.

:::details Search events

</br>

| Event | Description |
|---|---|
| `query` | Data on the search query entered (e.g. terms used, number of results) |
| `click` | Data on the item from the query that shoppers clicked (e.g. product ID, title, and URL) |
| `add2cart` | Data on the item added to the cart (e.g. product ID, title, and URL) |
| `checkout` | Data on the products purchased in the checkout flow, usually triggered for each item in the cart |

:::

:::details Browse events

</br>

| Event | Description |
|---|---|
| `browseCategory` | Data on product category impression (e.g. category ID & number of products displayed) |
|`browseProduct` | Data on the item clicked from a product category (e.g. product ID, title, and URL) |
| `browseAdd2Cart` | Data on the item added to the cart (e.g. product ID, title, and URL) |
| `browseCheckout` | Data on the products purchased in the checkout flow, usually triggered for each item in the cart |

:::


::: interact

To learn more about search and browse tagging events, see [Track shopper interactions in your store](/explore-empathy-platform/capture-shopper-interaction/interaction-events.md).

:::


## Integrate with the Tagging API
Once you know the events you need to collect, you can use Empathy Platform Tagging API to implement event tracking in your store. See **[Integrate Tagging using API](/develop-empathy-platform/capture-interaction-signals/tagging-api-guide.md)**.

:::interact

Explore the tagging API endpoints in the [Tagging API reference](/develop-empathy-platform/api-reference/tagging-api.md).

:::

<!--There are 5 different ways you can integrate the Tagging API in your store:-->
<!--[Tagging API](/develop-empathy-platform/tagging-api/tagging-rest-api-guide.md): perform an HTTP request to an endpoint for each instrumented event.-->
<!--Search & tag: use the data returned by the search engine to track interactions directly.-->
<!--Interface X Components: if you use the Interface X Components as your frontend, the components are responsible for send events to the tagging microservice. No additional implementation is required.-->
<!--Empathy JavaScript Tagging Library: perform a Javascript function call for each one of the events by using a custom Javascript library.-->
<!--Google Tag Manager: Add the Tagging Tag Template to your Google Tag Manager implementation. -->


<!-- 
## Check your integration

After having implemented Tagging events in your store, you need to validate that the data of the expected events are being collected correctly. 

## Use the Tagging REST API

Now, you’re ready to use the Tagging API to…
See an example of how to … using the Tagging API.
-->
