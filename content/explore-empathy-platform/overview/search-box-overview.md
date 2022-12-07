---
title: Search Box
tags: 
    - Search box
---

> The front door to your shopping experience

The Search&nbsp;Box is the main entry point for search where shoppers can type what they're looking for in your store. In short, the Search&nbsp;Box opens a line of communication between your shoppers and the search engine.  

![Search Box](~@assets/media/features/overview-search-box.svg) 

But it’s more than just a simple field, it can be populated with **suggestions and recommendations**. For example, if a shopper selects a query suggestion, the query is instantly updated in the input field to the selected suggestion and the search is launched.

<!-- How to trigger the search with the search&nbsp;box -->
Usually the Search&nbsp;Box includes a search button to launch the search. However, there are other ways to start a search without using that button to submit the query. You can also implement **instant search** so that the search process is submitted automatically after a given time if the shopper pauses while typing the query. Although this mechanism minimizes human action and speeds up the search, there’s still a lot of people that feel more comfortable in pressing the search button to start the search process.

Furthermore, the Search&nbsp;Box has become paramount in the context of commerce search. It’s a vital source of **information about shoppers and queries**, as shoppers enter their intent directly in the Search&nbsp;Box. Gather query-related data from the Search&nbsp;Box and create search experiences according to your shoppers’ preferences and intent, while obtaining useful statistics and insights.


## Spot the difference
The Search&nbsp;Box is generally recognized, especially in the context of search. But are you sure you know what the term _search&nbsp;box_ refers to? Some may call it the _search bar_, _search field_, _input field_, or even _input search_…  

Definitely, there are lots of terms you can use. So, let’s dot the i’s and cross the t’s: the text-field or bar that allows you to type a search term is what we specifically call the **input field** (A). This field can be combined together with a **search button** (B) to trigger the search, and a **clear icon or button** (C) to delete the search term query entered in the input field. So when we’re talking about the search&nbsp;box (D), we’re referring to the whole set of elements: the input field, the search button, and the clear button. 

![Parts of the search box](~@assets/media/interface/x-search-box-elements.svg)

<FootNote>

Parts in a search box - (A) Input field, (B) Search button, and (C) Clear icon or button

</FootNote>   

<br/>
  

## Placement matters
You can place the Search&nbsp;Box wherever you want. However, its location matters. As the Search&nbsp;Box links your shoppers with your product catalogue, it deserves a prime location that is easy to find for a maximum impact and usage. Imagine your shoppers having to search for the tool that allows them to search for?!    

UX research indicates that the Search&nbsp;Box should be placed towards the **top centre** or **top right** of the page where users can easily find it, highlighting the importance and value of search. Instead of using a huge and prominent search&nbsp;box, you can also position a relatively small search&nbsp;box where most shoppers expect to find it, and then expand it in a dedicated layer over your commerce website to create an immersive search experience when your shoppers use it.  

<!-- TO BE PUBLISHED IN FUTURE ITERATIONS WHEN THE SEARCH BOX POWER-UP ARE IMPLEMENTED: 

## Extend the performance 
Remember that you can mix and match X&nbsp;Components together to create different search experiences. You can add Query Suggestions into the mix to display the first suggestion in the input field as the shopper types. What’s more, combine the Search&nbsp;Box with Related Tags, so that the query syntax is  automatically modified in the Search&nbsp;Box when a related tag is selected.

-->

## Try Search Box to...   
-   Offer your shoppers a faster way to find the product they are looking for.
-   Provide an alternative way to discover your product catalogue rather than the product navigation tree.
-   Track the queries performed in your shop to anticipate your shoppers’ intent and create shopping experiences adapted to your shoppers’ needs.


## The inner workings of Search Box   
The Search&nbsp;Box is the starting point for the search. It launches the search process, submitting the query to an index of products to retrieve the best matches. 

But it's also an input point of information. Most of the behavioral information collected from the search UI by the [Tagging microservices](/explore-empathy-platform/capture-shopper-interaction/) comes from the Search&nbsp;Box. Any query launched is transformed into raw data by the Tagging microservices. This raw data is analyzed and refined to generate useful suggestions and recommendations to enhance your shoppers’ experience. What’s more, the data can be used to generate insights and statistical reports, allowing you to make important decisions about search configuration and management.

:::warning

For a correct performance, make sure that your current search service supports this type of feature.

:::

::: interact

Explore the [interactive map](/explore-empathy-platform/diagram/interface/search-box.md) to see how the Search&nbsp;Box relates to the other Empathy Platform features and microservices.  

:::



