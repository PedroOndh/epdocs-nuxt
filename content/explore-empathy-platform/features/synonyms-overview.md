---
title: Synonyms
tags:
   - synonymize
---

> I need “garbage bags”... <br>Results for “trash sacks” – that’s what I really meant!

Synonyms are alternative search terms that shoppers can use to find the same results. Usually these terms have a similar meaning for shoppers and can be used interchangeably. For example, “billfold” might be a synonym for “wallet”. 

Synonyms are the best solution for those search queries that do not return products because the search term entered does not match any text in your product catalogue but has a similar meaning of a term that does appear in your catalogue. 

![Synonyms](~@assets/media/features/overview-synonyms.svg)
</br>

**Types of synonyms**  
Empathy Platform handles two types of synonyms:

   - **Equivalent terms**, meaning that there is a one-to-one equal match relationship between the terms, i.e. any searches for “crimson” also return results containing “red”, and vice versa.
   - **One-way match terms**, where terms only match in one direction, i.e. “food storage box” may return results like “food container” and “tupperware”, but “tupperware” only returns results containing that exact brand name.

<!-- Move to how to section: With synonyms, you can set up **individual synonyms**, e.g. “shirt” = “blouse”, or “candle" to return “candle” and “tealight” results, whereas "tealight” returns only "tealight” results, and **group synonyms** that can contain both equivalent terms and one-way match terms, e.g. equivalent terms “phone”, “telephone”, “mobile phone”, “smartphone” and one-way match terms “iphone”, “samsung galaxy”. -->

:::warning

Synonyms should be used with caution according to your specific business case as it can impact product relevance. You can create and manage synonyms in the Empathy Playboard. <!-- add link to how to when available -->

:::

## Use Synonyms for...

- Differences in language variants, e.g. American English “pants” vs. British English “trousers”.
- Broad terms versus narrower terms, e.g. “backpack” for “office backpack”, “commuter backpack”, “laptop backpack”, “school backpack”, and “work backpack”.
- Trademarks used for generic products, e.g. “tupperware” for “food storage boxes”.
- Multiple words for the same meaning or usage, e.g. “tee shirt”, “t-shirt”, “t shirt”, “tshirt”, “tee”.
- Category names, e.g. “sneakers”, “runners”, and “training shoes” for the “sports shoes” category.
- Abbreviations, e.g. “HP” for “Hewlett Packard”.
- Short versions for product names, e.g. “coke” for “coca-cola”.
- Slang or specific jargon, e.g. “lewk” or “OOTD” for “outfit”.
- Correction of misspelled words where the distance between the misspelled word and the desired word is greater than that managed by [Spell Check](spellcheck-overview.md), e.g. “sorts” instead of “shorts”, or “ifone” instead of “iphone”.
- Plurals with irregular patterns, e.g. man for men.

::: note

You do not need to use Synonyms for basic pluralization rules (e.g. t-shirt for t-shirts) or related forms of the same term (e.g. waist for waisted) as Empathy Platform search microservice handles these variations in the term. In any case, you should test the results obtained with such plural forms.

:::

:::warning

Terms are matched against synonyms in the exact order in which they appear. For example, to provide results for the synonym pair “high top pants = high waisted trousers”, shoppers must search for that exact search term and not any other combination, i.e. “trousers high waisted” does not provide synonym matching.

:::

<!-- ## Spot the difference

Synonyms and keyword tags have different functions. Synonyms are designed to facilitate query formulation for shoppers, always providing results for terms that have a similar meaning and minimizing any frustration caused by zero results pages. Whereas, keyword tags are assigned as specific attributes (or searchable fields) in your product catalogue. Rather than including the keyword in the product description so it can be indexed and searched, the keyword tag is associated at the level of product attributes, allowing shoppers to search for an exact match of that attribute. Merchandisers can use these keyword tags to display a group of products, e.g. a merchandising campaign or sales promotion. For example, show a list of specific products for the search query “valentines day gifts”.
-->


## Try Synonyms to…

- Redirect shoppers to qualified results where the search term doesn’t appear in your product catalogue.
- Enrich shoppers’ search queries with more results that may be relevant to their search.
- Show the right results for typos and misspelled words that can’t be easily corrected with [Spell Check](spellcheck-overview.md).
- Improve findability by multiple ways of searching for products.

::: note

Use the Playboard Synonymize tool to add and modify the synonyms and group synonyms for your search. <!-- add link when how to is available -->

::: 

<!--
## The inner workings of Synonyms

Synonyms are created in the Playboard and handled by the Index microservice. A list of synonyms is created in the Playboard and stored as a separate feed by the Index Builder. When shoppers perform a search, the search engine. -->
<!-- ::: note
Bear in mind that creating a synonym does not mean that the results are identical or displayed in the same order. The results shown depend on the overall attribute ranking used (determined by Equalize), product ranking (business rules), and other factors such as the wisdom of the crowd. For example, if you set up an equivalent term pair “pants” and “trousers”, the results shown may display results containing “pants” before those for “trousers”, as pants appears as part of the product name that has a higher weighting in Equalize).  The results are ordered according to the score of each individual product. For more information on how products are ordered in the search results, see [Product Scoring](/explore-empathy-platform/overview/product-scoring.md). ::: -->

