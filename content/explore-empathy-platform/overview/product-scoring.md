---
title: Product scoring
tags:
    - product scoring
    - product ranking
    - points
    - scoring criteria
    - catalogue definition
    - business rules
    - wisdom of the crowd
    - tiebreak
---
<!-- Move this section to Understanding Search when available-->

> How products are ranked in the results

The order in which products are ranked on the search engine results page (SERP) <!-- or in the product listing page (PLP) --> is not random. Products are ranked internally by calculating a product score. Product scores are used by the search engine to order the product results.

![Product Scoring](~@assets/media/features/overview-product-scoring.svg)

</br>

Every time a shopper performs a search using a specific query to return results, points are calculated for the product based on three key scoring criteria: 

1. **Catalogue definition**: the importance of the product attribute where the search term was found. The weighting of the product attribute is determined by the [Equalize](../features/equalize-overview.md) tool in the Empathy Platform Playboard. <!-- , or other rules that are defined in the configuration on a global level for all queries.-->
2. **Business rules**: specific business rules that the product meets if there are any defined, e.g. query ranking rules that boost the product to the top or bottom of the results. 
3. **Wisdom of the crowd**: where Contextualize is used, the products and product types that shoppers has interacted with.

<!-- include information about global tooling business rules established in plugin for a specific search implementation:
"or other rules that are defined in the configuration on a global level for all queries"
-->

Business rule points and wisdom of the crowd points are associated with the product itself, while catalogue definition relevance points are associated with the fields defined as searchable fields in the catalogue feed. 

If you have set up specific business rules for your implementation, any points resulting from this search customization are reflected as a **custom score** criterion and added to the points for the other criteria to give the product's overall score.

The points for each criterion are added up to give the product’s overall score:

<FootNote>

**Catalogue definition points + Business rules points + Wisdom of the crowd points = Product’s overall score**

</FootNote>


</br>

The products are then ranked in order using the overall score, from highest to lowest. Where there is more than one product with the same overall score, **[tiebreakers](#tiebreakers)** are used as a backup criterion to break any ties between identical or similar products.

::: note Tip

See how product scores affect product ranking in real time by using the [Explain](../features/explain-overview.md) tool in the Empathy Platform Playboard. 

:::


## Catalogue definition 
The Catalogue definition criterion calculates points for textual relevance. In other words, it calculates points for each search term in a query that **matches a word found in a product catalogue field**. It determines the product's organic position within the results based on exact matching with the search query.  
Catalogue definition is associated with the fields that have been determined as **searchable fields**, i.e. feed fields that have been indexed and indicated as searchable by the search engine during the indexing process. The search engine looks in these fields to find words that match the search term or terms. The importance and the weighting of the field in the calculation is determined by [Equalize](../features/equalize-overview.md). 

<!-- Include Textual Relevance image here -->

For example, if a search query contains more than one search term, it adds up the different points for each term found in any of the searchable fields to determine the overall catalogue definition points for the product.

If the search term appears in more than one field, only the field with the highest weighing in Equalize determines the points for that search term; it does not add up the points for each field where the term is present.

<!--TermPosition not currently supported by Search.
You can configure your search implementation to add additional points depending on the position of the term within the searchable field; for example, adding extra points where the query term is the second word in the description field as opposed to the tenth word. -- MISSLEADING! Now, term position means tha search terms appear in the searchable fields in the same position as the query. Ej. milk chocolate / chocolate milk. Term position is now a single/extra criteria (not included in EQ or textual relevance criteria)
 -->

<!-- Now EQ also includes glogal business rules: configuration in implementation that affects the whole catalogue/all queries, not only a specific query -->

With broad search terms, i.e. T-shirt or milk, the number of product score ties resulting from catalogue definition points is very high; therefore, Empathy Platform uses business rules, wisdom of the crowd, and tiebreaker scoring criteria to break any ties.

::: details Calculating catalogue definition points

To make it easier to understand, here is an example of how the points for textual relevance are calculated. In this example, points are referred to as being similar to values in the Equalize; however, in reality, the points usually contain decimals and are between 0 and 2. Note that textual relevance fields should have a weighting of between 8 to 10 in Equalize for best performance.  

</br>

If the configuration of the product attribute weighting in Equalize is that shown in the table:

</br>

| Field          | Weight |
|----------------|--------|
| Name           | 10     |
| Reference      | 5      |
| Color          | 1      |
| RootCategories | 1      |

</br>

**Example 1: Single term present in one field**  

A shopper searches for the term “T-shirt”. The search engine finds matches in a single filed for each product:

</br>

| Item         | Field |
|----------------|--------|
| Product A      | Reference  |
| Product B      | RootCategories      |
| Product C      | Name      |

</br>  

The products are ordered as first Product C, then Product A, and finally Product B.

</br>

![Textual relevance for single term](~@assets/media/features/product-scoring-textual-relevance-single.svg)

</br>

**Example 2: Single term present in multiple fields**   

A shopper searches for the term “T-shirt”. The term is found in the fields:

</br>

| Item         | Field |
|----------------|--------|
| Product A      | Name <br> Reference  |
| Product B      | Reference      |
| Product C      | RootCategories      |
| Product D      | Name <br> Reference <br> RootCategories |

</br>

The points for each product are:

</br>

| Product   | Score |
|-----------|-------|
| Product A | 10    |
| Product B | 5     |
| Product C | 1     |
| Product D | 10    |

</br>

In this case, a tie-break occurs between Product A and D, however usually it's resolved by context or business rules. Product B is listed third, and finally, Product C.

</br>

![Textual relevance for multiple matches](~@assets/media/features/product-scoring-textual-relevance-multiple.svg)

</br>

**Example 3: Multiple terms found in one or more fields**    

A shopper searches for the terms “graphic” and “T-shirt”:

</br>

| Item      | Term    | Field          |
|-----------|---------|----------------|
| Product A | T-shirt<br><br><br> graphic | Name <br> Reference<br><br>Reference           |
| Product B | T-shirt<br><br>graphic | Reference<br><br>Reference      |
| Product C | T-shirt | RootCategories |
| Product D | T-shirt | Name  <br> Reference <br> RootCategories          |

</br>

The scores for each product are:

</br>

| Product   | Score        |
|-----------|--------------|
| Product A | 10 + 10 = 20 |
| Product B | 5 + 5 = 10   |
| Product C | 1            |
| Product D | 10           |

</br>

In this case, Product A is listed in the first position. Although, Product D and Product B have the same textual score, Product D is listed next since the T-shirt term is found in the Name field, which has a higher relevancy.

</br>

![Textual relevance for multiple term match](~@assets/media/features/product-scoring-text-rel-multiple-queries-matches.svg)

<!--TermPosition not currently supported by Search.
Example 4: Term position within the field
A shopper searches for the term “T-shirt”. The search engine has been configured to add additional points for exact matches with the second position in description fields. 
The search engine finds the term as an exact match that appears in the second word of the description, e.g. “This T-shirt is made of polyester…”.
This example should be changed to match current term position definition and moved to the bottom of the page-->

:::


## Business rules
The business rules criterion covers additional points that are added to the product’s score to cover **business rule scenarios** that the product meets. 

When shoppers perform a search, after calculating the catalogue definition points for the products that contain the search term, the search engine checks to see whether the products meet any business rules and the value assigned in Equalize. These additional points are added to the product’s overall score. If the product does not comply with any of the business rules, no additional points are added.

Business rule points are only added to those **products that contain the searched term** in one of the searchable fields of the product catalogue index. Therefore, the products are always those that are relevant to a given search query; the business rule points are only used to lift those products that meet the business rule criteria. For example, if you search for “T-shirt”, “trousers” results do not appear even though they may comply with the business rules established, as they were not included initially in the results set for the search.

Business rule points are associated with business logic: **product and attribute ranking** business rules for a specific product or group of products.
<!-- Global tooling not currently supported by Search
and global business rules that are applied to all queries performed. This should be moved up to EQ criteria-->

<!-- Include Business Rules image here -->

Products are boosted or buried on the SERP <!--or the PLP--> using product and attribute ranking business rules. For more information on how boosting or burying products affects the product score, see **[Product Ranking](../features/product-ranking-overview.md)**. For groups of products with boosted product attributes, see **[Attribute Ranking](../features/attribute-ranking-overview.md)**.

<!--
Global business rules can be defined for the product catalogue index. These rules are used to boost or bury specific product categories regardless of the query used. The weighting of global business rules is specific to your search implementation. To include in EQ criteria -->

## Wisdom of the crowd  
The wisdom of the crowd criterion determines the dynamic relevance of the product. It calculates the additional points to be included in the overall score for products based on context, in other words, for products with which shoppers have had some type of interaction in the previous days, whether they are specific products or products with similar attributes. These shopper intent interactions are used to give an extra boost to products. If context is not enabled, then no additional points are added in the overall score.

![Product scores for Context](~@assets/media/features/product-scoring-context.svg)

There are two context types that can be used: 
- Context that affects **specific products**
- Context that affects **products with similar attributes**

<!-- For more information, see Contextualize. Link when available-->

### Specific product context
For each search query, Empathy Platform stores a list of the products that shoppers have had some type of interaction with during the day and assigns them points according to whether shoppers have clicked, added to the cart, or purchased the product.

For example, possible points for interactions might include:
- **Clicks**: 1 point per interaction
- **Add-to-cart**: 2 points per interaction
- **Checkout**: 3 points per interaction

::: interact 

For more information on how product interactions are gathered, see [Shopper interactions tracked in your store](../capture-shopper-interaction/interaction-events.md).

:::

These interaction points are added for a given product and added to the product's overall score. Often points given for context do not modify the product’s position significantly. For example, a highly clicked product for a given query might result in the product receiving additional points equivalent to a business rule that has a weighting of 1 in Equalize.

### Similar attributes context
Depending on each product catalogue feed and business scenario, you can configure the fields relevant for identifying products such as family, subfamily, and product attributes. 

For each search, Empathy Platform stores shopper interactions with family, subfamily, and attribute values, storing values of these fields rather than product IDs themselves.

For example, a shopper searches for “T-shirt” and clicks on Product A, which comes from the “T-shirt” family, “Basic T-shirts” subfamily, and “Sleeveless” attribute. 

Contextualize stores the interactions with these T-shirt types and builds intent models similar to the table below for the “T-shirt” query, where depending on the type of interaction, the points are added up for each family, subfamily, and attribute.

| Family       | Context points | Subfamily        | Context points | Attribute    | Context points |
|--------------|-----------------------|------------------|-----------------------|--------------|-----------------------|
| T-shirt      | 18,856                | Basic t-shirts   | 10,856                | Short sleeve | 12,856                |
| Baby t-shirt | 1,567                 | Graphic t-shirts | 7,567                 | Sleeveless   | 9,567                 |
| Tops         | 1,096                 | W-B t-shirts     | 6,096                 | Patterned    | 3,096                 |

<!-- include image for similar attributes context here-->

With context enabled and for a given search query, additional points are awarded to each product that has one of the popular values in the Context intent model. By default, the top 5 most popular values are taken. For example, if Product A belongs to the Graphic t-shirts subfamily, additional points are awarded.

The points depend on the popularity of the search term. The equivalent weighting in Equalize would be a value of between 0 and 1 (remember usually these values are decimal numbers).


## Tiebreakers
There are times where the catalogue definition criteron may result in many products with an identical overall score. This usually happens where there are few or no business rules and context is not active. 

In these cases, backup criteria should be determined to decide which product should be ranked first or second. Tiebreakers are applied after the points for catalogue definition, business rules, and wisdom of the crowd have been added up.

Fields that are commonly used to resolve tiebreaks are numerical fields:
- Price 
- Created on
- Business margin
- Stock level

If a tiebreaker is not set up to resolve conflicts resulting from identical product overall scores, products are shown in the order in which they are indexed by the search engine. Generally speaking, if business rules and context are set up for the product catalogue, few tiebreak situations will occur; however, it's a good best practice to set up a tiebreaker to cover any eventualities.
