---
title: Blacklist
tags: 
   - stopwords
---

> Stop undesired search terms from appearing as search suggestions

Shoppers use multiple search terms to search for products in your shop. With advanced search capabilities that use collective shopper intent, at times the variety of terms used organically by shoppers can mean that these **suggestions can become diluted with unuseful search queries** that don’t necessarily reflect your product catalogue or your branding strategy. For example, competitor brand names, irrelevant terms, or profanity. 

Blacklist lets you **remove those search terms for use as suggestions** in your advanced search experience. With the Empathy Playboard, you create a list of search terms that you do not want to use to generate [Related Tags](related-tags-overview.md), [Query Suggestions](query-suggestions-overview.md), and [Next Queries](next-queries-overview.md). 

![Blacklist](~@assets/media/features/overview-blacklist.svg)" </br>

For example, an online electronics store may sell smartphones but not sell the brand Apple due to licensing reasons. Since it is likely that shoppers may search for smartphones using the “iphone” search query, collective shopper intent may mean that “iphone” appears as a Query Suggestion due to the frequency with which shoppers use the term. The store’s merchandiser can decide to not show the “iphone” term as a suggestion to shoppers.


## Spot the difference
Don’t confuse blacklisted terms with stopwords. Stopwords are terms that the search engine is instructed to ignore when matching shoppers’ search queries against words in your product catalogue. For example, typical stopwords that you configure in the search engine are “and”, “an”, and “the”. 

Blacklist terms, on the other hand, are search terms that you don’t want to use in generating search suggestions for your shoppers. The blacklist **doesn’t prevent the shopper from searching using those ‘forbidden’ terms in their search query**. The search engine still returns results for that query if it finds a match in your product catalogue. It just means that the term does not appear as a suggestion or a related tag for refining the initial search query.


::: note 

If you don’t want a given search query to give results, you can use [Redirections](redirections-overview.md) to send shoppers searching with that search query to a specific URL.

:::

## Use Blacklist to…
-  Prevent specific search terms and queries from being used as suggestions, related tags, and next queries.

<!--- Include link to related tag management tool in Playboard when available-->

## The Inner workings of Blacklist
Blacklisted terms are configured in the Empathy Playboard. The blacklist is stored in a configuration file that is consulted by the Empathize, Query Signals, and Top Clicked batch processes when generating the Query Suggestions, Next Queries, and Related Tags. If the query suggestion or related tag generated by one of the batch processes matches a term on the blacklist, it is discarded. 
