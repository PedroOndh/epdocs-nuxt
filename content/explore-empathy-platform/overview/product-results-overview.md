---
title: Product results
tags:
    - results order
    - results elements
---

> The answers to your shopper’s requests   

Product results are the collection of products that naturally match the criteria of a search query. In other words, they are the products in your catalogue that best correspond to what shoppers are looking for.

![Product result elements](~@assets/media/features/overview-product-results-card.svg)

<FootNote>

**Product result elements** <br/> (A) Image, (B) Product information, (C) Price, (D) PDP Link, (E) Rating, (F) Add to cart

</FootNote>    

## Tailoring product results 
A product result is like a business card for each product in your catalogue, where every detail matters in presenting the product information attractively. What would you add to your product result? A picture that represents the product, a short description, or maybe its price? You have a bunch of components to paint your results:

- Include an **image** of the product for better recognition, because a picture is worth a thousand words.&nbsp;(A)
- Decide the **information to display** about the product –name, description, reference, brand, category, season...&nbsp;(B)
- Indicate the **price** of the product: the original or current one, discounts, and special prices.&nbsp;(C)
- Directly link your shoppers to the **product detail page** (PDP).&nbsp;(D)
- Show **how valued** a product is among your shoppers.&nbsp;(E)
- Speed up conversion and allow your shoppers to **add a product to the cart** from the SERP, without going through the PDP.&nbsp;(F)

::: note  

In Empathy, the concept of results goes beyond product results as they are also used to leverage advanced search features, such as [Recommendations](/explore-empathy-platform/experience-search-and-discovery/discover-x-components/recommendations.md) and [ID Results](/explore-empathy-platform/experience-search-and-discovery/discover-x-components/id-results.md). These features use result data to suggest products that may be of interest to your shoppers. So, if results are being used to populate these kinds of recommendations, you can use the same elements for depicting the products.

:::


## Spot the difference
Commonly, the search engine results page makes us think of the list of results. However, that list is not the SERP itself, but a **results grid**. The grid represents the collection of results —no matter the type— displayed on the SERP. However, the **SERP** goes beyond the results layout. It closely relates to the grid, but also to those discovery tools that help shoppers find the proper product, such as sorting, filtering, pagination or infinite scrolling, and even advanced search features such as [Related Tags](/explore-empathy-platform/features/related-tags-overview.md). 


## The inner workings of results 
As the search box is the starting point for search, results are often the end point of the search lifecycle. As a most basic and high-level description of how search works, a search query starts the search process, crawling the product index to find a set of products that best match the query, and finally, the product results are returned on the SERP. Basically, the search UI communicates with the backend Search microservice to retrieve the matching results. 
<!-- Add link to product scoring when ready --> 

However, a quality search experience encompasses more than the search process itself. It also involves getting **significant results** and using **advanced search features**. So it goes without saying that your search UI should act as a touchpoint that collects shoppers' interactions. The search UI triggers events that contain valuable behavioral information that is sent to the [Tagging microservices](/explore-empathy-platform/capture-shopper-interaction/README.md). These microservices convert the information into raw data and refine it to generate helpful search suggestions and recommendations to enhance your shoppers’ experience and contextualize the search results.

::: interact

Explore the [interactive map](/explore-empathy-platform/diagram/interface/results.md) to see how product results relate to the other Empathy Platform features and microservices.   

:::


**The order matters**  
Every result page is unique, even for search queries performed on the same search engine using the same search terms or queries. Results can change or display in a different order. This is because of three key factors, **textual relevance**, **business rules**, and **context**, determining results relevancy. 

<!-- Note that the Empathy [Contextualize microservice](/explore-empathy-platform/diagram/microservices/contextualize-service.md) customizes the discovery experience presenting the perfect set of relevant results. This personalization process goes beyond the search terms as it's based on a range of factors (query and category) called signals. -->

::: interact 

For more information on how products are ranked in the results, see [Product Scoring](product-scoring.md). 

:::

::: note 

Remember you can [boost & bury](/explore-empathy-platform/features/product-ranking-overview.md) and even adjust the weight of product results with the Empathy Playboard tool and modify the natural order in which results are presented. 

:::

