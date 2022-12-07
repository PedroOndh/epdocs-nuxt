---
title: Track shopper interactions in your store
tags:
- tagging
- click events
- browse events
- navigation
---

The Tagging service tracks two types of interaction in your store: 

* interaction with the **[search tool](interaction-events.md#search-interactions)** 
* interaction with **[product navigation](interaction-events.md#browse-interactions)**  

![Search and browse interactions](~@assets/media/tagging/tagging-func-events.svg)

<FootNote>

**Search and browse interactions** <br/> (A) Query, (B) Click for search and Product for navigation, (C) Add-to-cart, (D) Checkout, and (E) Category

</FootNote> 
<!-- (E) Add-to-wish list -->

## Search interactions    
These involve actions using the search box or any other action performed immediately after performing a search query. These interactions may occur on the search engine results page (SERP) itself or any other page shoppers may click after a search, such as the product detail page (PDP) or the checkout page.   

More specifically, the Tagging service can track events triggered by these search interactions:

- **[Query](interaction-events.md#query-events)**: when shoppers enter a search term in the search box and launch a search.&nbsp;(A)
- **[Click](interaction-events.md#click-events)**: when shoppers click on a result from the SERP.&nbsp;(B)
- **[Add-to-cart](interaction-events.md#add-to-cart-events)**: when shoppers add a product to the shopping cart, either from the SERP or the PDP after performing a search.&nbsp;(C)
- **[Checkout](interaction-events.md#checkout-events)**: when shoppers finalize the purchase of an item that was selected on the SERP or the PDP after performing a search.&nbsp;(D)
<!-- * **[Add-to-wishlist](./interaction-events.md#add-to-wishlist-events)**: when shoppers add a product to their wishlist after performing a search or from a PDP.&nbsp;(E)-->


## Browse interactions
This involves any interaction performed by shoppers using the navigation menu in your store. These interactions may occur on the product listing page (PLP), the product detail page (PDP), or the checkout page.   

More specifically, the Tagging service can track events triggered by these browse interactions:

- **[Category](interaction-events.md#category-event)**: when shoppers view a PLP by clicking on a category in the navigation menu.&nbsp;(E)
- **[Product](interaction-events.md#click-events)**: when shoppers view and click through to a PDP from the PLP.&nbsp;(B)
- **[Add-to-cart](interaction-events.md#add-to-cart-events)**: when shoppers add a product to the shopping cart from the PLP or PDP.&nbsp;(C)
- **[Checkout](interaction-events.md#checkout-events)**: when shoppers finalize the purchase of an item that was clicked from a PLP or PDP.&nbsp;(D)


## About the tagging events
These events are used by Empathy’s other microservices to provide results, offer autocomplete and other search suggestions, trending products and searches, and dynamic relevance, as well as statistical reports on shopper behavior, for example.

::: note Spot the difference  
An event and a query aren’t the same thing. An event is a **signal of user interaction** that is sent to the Empathy Platform's microservices, while a [search query](interaction-events.md#query-events) is the search carried out by the shopper to find a specific product, service, or information.  

</br>

For example, shoppers may trigger several different events during a session as they use your commerce site, i.e. if they add a product to the cart from the list of results, while they browse the product categories, etc. but they may only launch a single search query to get a list of results during their time on your site. 
:::

<!-- Future - Include specific details about features powered by tagging -->


### Query events
A query collects information related to the search, such as search terms, and number of results returned. Where shoppers select one of the suggestions or refine their search using a related tag, a new query event is triggered. 

::: interact 

For more information on search queries, see [Frequently Asked Questions](../../faqs.md).

:::

<!-- Replace FAQ link with link to For more information on how queries are tagged and counted, see Understand the Search Experience. -->


### Click events
A click event is triggered when a shopper clicks on a product in a SERP or from a product category. It collects information on the product clicked (e.g. product ID, title, and URL). Where the click event was triggered from a search interaction, it collects the search results shown at the time (e.g. position of the product on the page and the exact page number of the total results pages available), as well as the query term. In the case of navigation interactions, it collects information on the category (ID, page, and position on the page). This click represents the second step of the search funnel. It is measured through the CTR and helps to determine the product's findability, as well as provide trending products and popular searches. 

::: interact

For more information on findability, see [Frequently Asked Questions](../../faqs.md).

:::

<!-- FUTURE LINK TO TOP CLICKED: For more information on how click events are used to generate trending products and searches, see Understand Search Experience.-->


### Add-to-cart events
An add-to-cart event is triggered when shoppers click a button to add the product viewed to their shopping cart. These interactions can happen either directly from the SERP, from the PDP after having clicked a product on the SERP, or from a PLP. When this interaction occurs, information on the product clicked (e.g. product ID, title, and URL) is collected, as well as information relating to the search if the event was triggered after performing a query. These events are usually considered as having greater weight than query and click events in generating suggestions, as they are a measure of whether the search or browse process has been successful.

<!-- FUTURE LINK TO CONTEXTUALIZE: For more information, see How user and query context search results are calculated. -->


### Checkout events
A checkout event is triggered during the final stage of the shopper’s journey in your store. It tracks the products that are ultimately purchased. It is triggered as many times as products in the shopping cart that have come from the SERP or the PLP once the order completion page is loaded. It collects the same product information as the add-to-cart event, but these events usually have key importance in providing insights into attribution, into the purchases and the revenue derived from the search and discovery experience.

<!-- FUTURE LINK: Measure your Search Experience - information that enables you to determine what queries resulted in checkout events so you can optimize the search -->


### Category event
A browse category event is triggered when shoppers use the navigation menu to access a product category. It tracks impressions of the product listing pages. It collects information related to the category viewed, as well as category ID and the number of products displayed. The information provided by these events can be used to optimize product display.

---

:::develop

Ready to get started with Tagging? Check out **[Capture interactions with the Tagging API](/develop-empathy-platform/capture-interaction-signals/)**.

:::


<!--- Removed on 7.12.2021, according to Pedro Facal's indication that this event is to be deprecated 
### Add-to-wishlist events
An add-to-wishlist event is triggered when shoppers click an add-to-wishlist button either from the SERP or from the PDP. It collects information on the product (category ID, title, and URL) and is usually enriched with data on the product category for that product. These events are usually considered fuzzy signals of shopper intent, as not all items added to wishlist are ultimately purchased.


::: warning
To track these interactions, a wishlist feature that allows shoppers to add, remove, and consult wishlist products must have been implemented.
::: 
-->
