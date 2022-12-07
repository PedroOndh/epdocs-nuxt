---
title: Partial Results
tags:
    - partials
    - zero results
    - no results
---

> Oh, there are no results for “cocktail dressings”, but maybe I’ll find what I’m looking for in “dressings”

Zero results represent a roadblock to any search journey. Shoppers feel frustrated when their search query offers no products, often forcing them to leave the site to look elsewhere. Partial Results helps to minimize shopper frustration and abandonment by displaying results that match a section of the shopper’s search query.
<br/>

![Partial Results](~@assets/media/features/overview-partials-results.svg) 

Partial Results comes into play when there are no results that **exactly match** the entered search query. It displays results for a query that **closest matches** the original query entered so shoppers can continue the shopping experience. For example, when a shopper enters a search query consisting of several terms such as “chickpea veggie burger”, it can show results for “veggie burgers”, “chickpea burgers”, “chickpea veggie”, “burgers”, “veggie”, or even “chickpea”.

You can notify your shoppers that the search query has not returned any exact matches, clearly indicate the **original search query** that failed to provide results, and show the **alternative query** that has been used for the results shown. By showing shoppers the alternative query used to get relevant results, you can guide shoppers in formulating better queries the next time they search on your site. 

You can identify Partial Results by sentences like _We don’t have “chickpea veggie burgers”, maybe you are interested in… “veggie burgers”_.

::: note

Partial Results are one of the features you can use to minimize shopper frustration when faced with zero results, but **[Spell Check](spellcheck-overview.md)** can also work invisibly behind the scenes to help provide useful results, correcting misspelled terms used as part of the search query and offer relevant results. Alternatively, use **[Synonyms](synonyms-overview.md)** to associate alternative keywords to no result queries to always give relevant results.

:::

## Use Partial Results to…
- Minimize shopper frustration with zero results. 
- Reduce abandonment resulting from unsuccessful searches.
- Offer potentially interesting results for closely related search terms.
- Guide shoppers in formulating better search queries in the future.


<!-- (The inner workings of Partial Results. When there are no results in your product catalogue that exactly match the full search query, a tokenised version of the search query the query is broken down into separate terms or tokens e.g. “sundried tomato paste” is broken into “sundried”, “tomato”, and “paste” is used to create alternative search terms. The Search microservice performs new search queries using these alternative terms. By combining the terms in different combinations or using them separately, the Search microservice determines whether there are any results for the alternative queries, and in the case that there are results, the number of results available. It then calculates the similarity score for each alternative query, that is to say, the similarity or distance with the original query.  It checks whether the alternative query is not blacklisted, and then discards those alternative queries that do not comply with the required criteria. Finally, it displays some of the results for the chosen alternative query on the SERP.-->
