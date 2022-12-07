---
title: Frequently Asked Questions (FAQ)
subtitle: Can't find what you're looking for? Maybe you can find answers to your questions here!
---

### Getting started with Empathy Platform

:::details What does Empathy Platform consider a query?

Any request to the search engine that returns a set of results. Query events are used to track search interactions and are triggered every time a search query is performed and results are displayed or updated.  
<br>
A query is counted every time:   
- A new term is entered in the search engine
- A page is changed manually or by scrolling
- The query is refined (with facets or related tags) or when a suggestion is clicked
- The user clicks the back button in the browser to return to the SERP

:::


:::details Are all queries unique searches?

No. Unique queries indicate the terms that users are looking for. Queries show the different calls made to the service, according to the search terms entered. For example, if you look for “jeans”, then “shirts”, and then “jeans” again, this results in two unique searches (jeans and shirts) and 3 queries (jeans, shirts, and jeans).

:::


:::details What’s the difference between unique searches, queries, and API calls?

Unique searches are different search terms used by users. In this sense, the `q` parameters of all the queries made is grouped to obtain unique search terms.

Queries track all calls to Empathy Platform microservices that get new product results.

API calls are made when the shopper interacts with the search engine or other tools provided by the search engine, generating a request to the Search service. The Search API is the service used to retrieve information that is indexed in the Empathy Platform servers.

:::


:::details What does Empathy Platform consider as a user?

A user is anyone who performs a search query. Each query contains a user ID. We aggregate all search queries by user IDs.

:::


:::details Why is the information shown in Google Analytics different to that shown in Empathy Platform?   

Google Analytics and Empathy Platform have different ways of collecting, processing, and visualizing data. Some of these differences include:
- **Queries in a single session**: Empathy Platform collects the total number of queries made for each search term, while Google Analytics collects unique queries per session. For example, if a user searches for the term shirt two times in the same session, Empathy Platform counts this as two searches (as two queries are performed), while Google Analytics counts only one.
- **Source of the query**: Google Analytics only retrieves the queries performed based on a parameter in the URL when a page is reloaded. In Empathy Platform, any search performed, whether as a direct search, from filters or from any other source, is counted as a query.

:::


:::details Is a query event sent even when there is a cache?

Yes. Generally speaking, when a shopper clicks the Back button or scrolls the page to view more results in a SERP, a new query is sent even if the query is in the cache. However, this depends on your implementation.

:::


:::details What is findability?

Findability is a metric to measure whether shoppers find what they are looking for in your online store. Currently, it is defined as the number of clicks on the first page of the SERP divided by the number of queries.

:::


### Creating and indexing your catalogue

:::details Why does my feed give an error when it's indexed?

The most common reasons why a feed may fail to index are:   
- Incorrect format/specification, i.e. invalid characters or missed open/end tags
- An unsupported item in the feed

To detect format/specification errors, check it in a JSON or XML validator to identify and correct any bugs. For unsupported items, contact [Empathy Platform First Line Support](http://support.empathy.co/) to review your feed to detect the exact item causing the problem and correct it.
:::


<!-- (launch a new index or reindex?) -->
:::details Can I remove a product that is indexed in the feed?

To remove a product, you need to contact the team responsible for generating the feed, as they have to launch a new index afterwards. If Empathy Platform has done this for you, contact [Empathy Platform First Line Support](http://support.empathy.co/).
:::


<!-- (NEW CONTENT BASED ON MOST COMMON QS PAGE) -->
:::details Do you use crawlers or spiders?   

Empathy Platform does not offer crawlers or spiders. We feel there are lots of appropriate tools already on the market for gathering data from sites. 

If you are looking to crawl/spider your own sites as a method to index the content, then there are likely to be much more controlled methods to access the data. For more information, please contact our Growth team.

:::


### Using the Playboard

:::details An error occurs when I create a new synonym. What should I do?   

In this case, check that the new synonym is not already active in the synonyms you've created previously.  

:::


:::details Why isn't the synonym I've just created working?   

Every time a new synonym is added, the feed needs to be reindexed in order for it to take effect.  

:::

:::details I have created a link but it doesn't work. What should I do?   

Check that you have completed all mandatory fields, marked with an asterisk `*`, on the link creation page.  

:::

:::details Why is there a query in “No Results” on the dashboard?  

There may be multiple reasons. However, bear in mind that some terms may appear in the **No Results** column due to specific errors when running filters, of the man/woman section or even momentary server communication failures.  

:::

:::details Why can't I create a boost?  

Check that the product has not been already included in a previous boost.  

:::

### Configuring your search 

:::details Why don't the same products appear in the search engine as those shown in navigation?  

The products that appear in the search engine are those included as data in the feed you sent to Empathy. These products are not necessarily the same as those shown in the navigation. You may need to check that product is included in the feed.  

:::


:::details Why do I search for “bags” and see “t-shirts”?  
There are cases where the categories indicated in the feed are *merged*. If you're indexing *merged* categories, it can affect the user experience, showing different products for exact queries.  
For example:  

```
<arr name="categories_30359498_34009450">
<str>WOMEN</str>
<str>EDITORIAL</str>
<str>Summer Pleasures</str>
<str>COLLECTION</str>
<str>Shirts & Bags</str>
<str>Blouses</str>
<str> </str>
<str>New In</str>
<str>White Shirts</str>
<str>View all</str>
````

:::  


:::details Why do products appear that are not related to the search query?   

Some synonyms may have been created for that query at some point and are still active. Check the synonyms section in the EB Admin.  
Remember, Empathy doesn't not always control the frontend. In these cases, use the browser's inspector tool to extract a search API call and see which products Empathy returns. If you need assistance using the tool, contact [Empathy Platform First Line Support](http://support.empathy.co/).  

:::  

### Issues with user credentials

:::details I can't access the Service Desk platform. What should I do?   

If you're unable to log into our Service Desk platform, contact us via [support@empathy.co](mailto:support@empathy.co), specifying the incident, and we'll send you a link to reset your password.   
**Important**: the password reset link expires within 48 hours.  

:::

:::details I can't access the Playboard platform. What should I do?  

If you're unable to log into the [Empathy Platform Playboard](https://playboard.empathy.co/), [open a support ticket](http://support.empathy.co/). Empathy Platform First Line Support will contact you as soon as possible.  

:::


---   

::: note Need help?   

If you didn't find an answer to your question, [open a support ticket](http://support.empathy.co/) or contact us at [support@empathy.co](mailto:support@empathy.co).

:::