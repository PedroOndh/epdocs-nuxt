---
title: Spell Check
tags:
    - zero results
    - no results
    - spellcheck
    - typos
---
  
> What do you mean?

Usually, shoppers make typos when typing search terms leading in most cases to zero results or irrelevant occurrences; more and more search tools are implementing features to detect errors and mistakes during search to enhance user experience. 

However, Spell Check for Empathy Platform goes beyond a common query correction feature as it comes into play only when **no results** are returned and a query correction is available. Then, it shows results for an **alternative query** that is close in terms of spelling to the original query. For example, if a shopper types in the input field “bisiuts” instead of “biscuits”, Spell Check will detect the typo and return results according to the corrected alternative search term, only if the original query returns no results.

![Spell Check](~@assets/media/features/overview-spell-check.svg)
</br>

Spell Check supports multi-term queries. For example, the composite query “blu shrt” with no results is spell checked to “blue shirt”.

:::warning  
Spell Check is not triggered if the current query returns any results despite being misspelled or mistyped.  
:::

When Spell Check is used, a message can appear on the SERP to warn shoppers that the original query has returned no results, showing the closest alternative that replaces the wrongly-spelled search term.

You can identify Spell Check mostly under messages such as _Did you mean…?_ or _There were no results for “bisiuts”. Showing results from “biscuits”_. 

::: note

You can offer the right search results for common misspelled search terms using the [Synonyms](synonyms-overview.md) feature from the Empathy Platform Playboard. Use this option only with search terms that Spell Check is consistently unable to handle, e.g. “sorts” instead of “shorts”, or “ifone” instead of “iphone”.

:::


## Spot the difference 
Spell Check comes into play when it considers that the input query might have been misspelled, leading to no results, by replacing the original query for an alternative search term right after having been submitted. Spell Check doesn't recommend any search term suggestions; don't confuse it with the [Query Suggestions](query-suggestions-overview.md) feature that provides a list of suggestions to predict your shoppers’ intent as they type, refining and improving query formulation. 

::: note

Remember that other features such as [Recommendations](recommendations-overview.md) and [Partial Results](partial-results-overview.md) help you to prevent zero results pages and minimize your shopper’s frustration.

:::


## Try Spell Check to…  
- Help your users to find what they’re looking for despite spelling mistakes.
- Skip the frustrating *No results found* page and suggest close search terms that match your shoppers’ intent. 
- Leverage zero results search and avoid abandonment.
- Provide a smooth shopping experience when faced with zero results.


## The inner workings of Spell Check  
When there is no exact match in your product catalogue due to a typo during query formulation that leads to no results, the Search microservice looks for and compares close terms that approximately matches the original search term to invisibly launch a new alternative query and offer relevant results. 

The alternative term used is calculated using approximate string matching algorithms to determine the similarity or distance with the original search term and find correct spellings of the misspelled term that have a significant number of results. The lower the distance between the original search term and the alternative one is, the more similar they are.

:::warning

Spell Check depends on the data set indexed by the Index microservice to determine the closest alternative term. <!-- include link to Index when doc is available -->

:::

:::warning

Make sure Spell Check is enabled for your current implementation.

:::


