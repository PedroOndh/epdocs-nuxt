---
title: ID Results
tags:
    - identifier results

---

> This cereal is delicious! But I can’t find it again. Maybe entering the reference number from the package…

ID Results lets shoppers search for a product using a reference code. When they start typing, a reference code query type is detected, and a list displays instantly with results that match the query. When shoppers select a suggestion from the list, they go directly to the product’s description page on the fly. 

![ID Results](~@assets/media/features/overview-id-results.svg)

::: note

ID Results are not only intended for your shoppers. It is a great shortcut for your organization to speed up finding products.

:::

## Spot the difference  
ID Results refer to results themselves. So, they’re different from [Query Suggestions](/explore-empathy-platform/features/query-suggestions-overview.md). Remember that query suggestions fine-tune the query and start a new search, while ID Results suggestions display matching results. So, there’s no chance for query reformulation. 

For example, shoppers who start typing “0003” in the search box receive a list of products that contain such combinations in their reference number. If they select an ID result suggestion, the product’s description page displays, without needing to complete the query or navigate the SERP.

::: note

Remember that other features such as [Recommendations](/explore-empathy-platform/features/recommendations-overview.md) can redirect shoppers to specific products as well. 

:::

## Try ID Results to...   
-   Understand and recognize product reference codes as valid queries.
-   Speed up query entry, especially for mobile devices.
-   Improve product findability. Guide shoppers to the exact product they want.


## The inner workings of ID Results
ID Results are generated thanks to the [Search microservice](/explore-empathy-platform/diagram/microservices/search-service.md) that searches the product catalogue by product ID or SKU (stock-keeping unit). When shoppers enter a product ID in the search box, a query is sent to the Search microservice. The Search microservice processes the query, and using its Skusearch endpoint searches the catalogue to find product IDs that match the query, and then retrieves that product, together with all its associated product information. Depending on the Search implementation, partial matches of the product ID can be made.

:::warning

For correct performance, make sure that your current search service supports search by SKU or product ID.

:::


