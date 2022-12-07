---
title: Integrate tagging using the Tagging API
---

This tutorial guides you through the process of integrating your store with the Tagging microservices to capture shopper interaction and behavior by making HTTP requests to the API.

:::note Before you begin

To call the Tagging API endpoints, you need to have an **instance ID**. Each Empathy Platform project is assigned an instance ID. If you do not have one, contact [Empathy Platform First Line Support](mailto:support@empathy.co).

:::

###### Steps to integrate with the Tagging API

1. Identify **where to trigger API calls**.

2. Determine **tagging filter values**.

3. Call the **Tagging API endpoints**.


## 1. Identify where to trigger API calls
The Tagging microservices let you track events resulting from search and navigation interactions. The data collected by each event depends on the event type and location. The location in your application where the event should be triggered depends on the specific interaction to be tracked. For example, a click event should be sent when shoppers click on a product in the results grid on the SERP after performing a query.

For example, in general terms you should perform a query call whenever you make a call to the Search microservice. For this reason, the query parameters accepted in the request are related to those used in calls to the Search microservice.

:::details Events to send by location

</br>

**All pages where the search box is present**
- `query`: when a shopper enters a query in the search input and sends a request to the Search microservice.

</br>

**Search Engine Results Page (SERP)**
- `click`: when a shopper clicks on a product on the results grid.
- `add2cart`: when a user clicks on an add-to-cart button shown in the product card on the SERP.

</br>

**Product Detail Page (PDP)**
- `add2cart`: when a shopper navigates to the PDP from the SERP and then adds the product to the cart. 
- `browseAdd2Cart`: when a shopper navigates to the PDP from a PLP and then adds the product to the cart.

</br>

**Final step of checkout process**
- `checkout`: when a shopper add the product to the cart from the SERP or the PDP (accessed by searching) and then clicks checkout. 
- `browseCheckout`: when a shopper adds the product to the cart from the PLP or the PDP (accessed by browsing) and then clicks checkout.

</br>

**Store catalogue menu**
- `browseCategory`: when a shopper selects a menu item to access a product listing page (PLP).

</br>

**Product Listing Page (PLP)**
- `browseProduct`: when a shopper clicks a product card in the PLP.
- `browseAdd2Cart`: when a shopper adds a product to cart from the PLP.
:::


## 2. Determine tagging filter values
Once you have identified the interactions and events that are required for your business objectives, you need to determine the tagging filter values to be returned as parameters.

Tagging filters allow you to segment the data collected for features such as analytics and contextual search features in the Empathy Platform Playboard. For example, it lets you visualize search terms that resulted in an add-to-cart action for the _SPAIN_ store.

The most common tagging filters in Empathy Platform are:

| Parameter |  Required | Description |
|---|---|---|
| `lang` | Required | Language of the query and catalogue (e.g. en, es, it, etc.) |
| `scope` | Optional | Device type from which the query is made (e.g. desktop, mobile, tablet) |
| `store` | Optional | ID of the store from which the query is made |
| `catalog` | Optional | Value of the catalogue assigned to the query |
| `section` | Optional | Section value assigned to the query. This refers to the different sections of the catalogue: e.g. men’s clothing, dairy products, etc . |

The filters are passed as individual parameters to the Tagging microservices. You must send the `lang` filter value in all requests to the API. All other filter parameters are optional depending on the event type and are determined by your specific implementation.

The values for the filters are set up in the tagging configuration during implementation. Custom filters can be set up for your specific implementation to allow you to filter tracked data according to your requirements. If you are unsure what values should be passed for the filters, contact the Empathy Platform integration team.

::: danger

If you do not provide the `lang` filter, the call triggers a “400 Bad Request. Some mandatory parameter is missing” error response. 

:::

::: warning

If you do not provide a valid value in the request for optional filters, the data is still collected with the value `ignored`. 

:::


## 3. Call the Tagging API endpoints
You do not need a specific API key to authenticate against the Tagging API. Calls to the API will be accepted provided a valid instance ID is passed as a parameter. 

You make GET or POST requests to different endpoints for each instrumented event, passing the data to be tracked as query parameters.

:::develop

Although no data is passed in the body, you can also use a POST method to make requests to the Tagging API endpoints. In any case, either HTTP method can be used as they are handled in the same way by the Tagging microservices.

:::

::: interact

For more information on the parameters accepted for each event in calls to the Tagging API, see the **[Tagging API reference](/develop-empathy-platform/api-reference/tagging-api)**.

:::     


### Example: Track a query event with the Tagging API
You want to track what your shoppers are searching for in your store, such as the search terms they use, the number of results shown for the search, the results page shown, etc. so you can see what your shoppers are interested in finding. To do this, you call the `query` endpoint. 
<!--Data received from Search as part of Search&Tagging-->

**Example request**

```
GET https://api.empathy.co/tagging/track/instanceId/query?q=pinstripe+trousers&totalHits=148&page=1&scope=desktop&lang=en
```

You replace the URL (https://api.empathy.co/tagging) and `instanceId` for the Empathy tagging endpoint URL and instance ID you’ve been provided. In this case, you want to track the search string used, the number of search results shown, the page displayed to the shopper, and the device the shopper used when performing the search, and pass these values in the `q`, `totalHits`, `page`, and `scope` query parameters, respectively.  Given that the search string is made up of two search terms, each search term is separated using the “+” symbol.

