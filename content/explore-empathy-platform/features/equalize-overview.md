---
title: Equalize
tags: 
    - textual relevance
    - textual match
    - global business rules
    - function score
---

> Manage the search ranking criteria for your product catalogue with no-code controls

Equalize allows you to configure the weighting of the product attributes used for ranking product results in the search engine. It determines the relevance and importance of the searchable product catalogue fields where search terms are found.

![Equalize](~@assets/media/features/overview-equalize.svg) <br>

Should color be more relevant than specific product features? Should any terms found in the product description take preference over the name? Equalize helps you determine which product attributes the search engine takes as more relevant when ranking the results.   

It's used to calculate the **textual relevance** points and the **global business rule** points of the product’s overall score. <!-- update with function score -->

::: interact 

For more information on how products are ranked in the results, see [Product Scoring](../overview/product-scoring.md). 

:::

Equalize can be used to change search engine ranking according to  merchandising goals.    
For example, when setting up your product catalogue you may have included several keywords in the product description for SEO purposes. However, you don’t want these keywords to “contaminate” the results with irrelevant products. You set the Name field with a higher weighting in Equalize than Description to give preference to search terms found in the Name field.
During Black Friday sales, you modify the product description to include the term “black friday” and “sales”. You can adjust the weighting for the Description field so the search engine now takes into account descriptions temporarily. 


:::warning

Adjusting Equalize values changes the search engine behavior for **all product results**.

:::


## Spot the difference
Equalize and [Attribute Ranking](attribute-ranking-overview.md) both use the product attributes of your product catalogue to determine the ranking of results. However, their purpose and function is different. Equalize determines the overall importance of the product catalogue attribute in the search, used as the weighting for calculating the product scoring. Whereas, Attribute Ranking changes the order in which products appear according to a specific product attribute, boosting or burying products with that specific product attribute higher or lower in the results.

::: note

You can only have one Equalize configuration active in the Empathy Playboard at a time. To boost a specific attribute without changing the overall search engine ranking behavior, use **[Attribute Ranking](attribute-ranking-overview.md)**. <!-- check this. Now different configurations at a time are available if they apply to different scenarios -->

:::

## Use Equalize to…
- Adjust the search ranking criteria according to merchandising goals, e.g. show in-stock products higher in the search results.
- Improve findability by making sure the right type of products are listed first.
- Determine the weighting of product attribute fields in product score calculation.
