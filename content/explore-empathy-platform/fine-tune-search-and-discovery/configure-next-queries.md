---
title: Configure next queries
tags:
- next queries
- curated next queries
- curated
- NQs
- organic next queries
- organic
- organic NQs
- curated NQs

---

The Next Queries management tool lets you customize the next queries experience offered to your shoppers based on business needs. 

You can preview organic next queries that are displayed in the store for a query. You can add curated next queries and  arrange them to determine their order of appearance, listing them before any organic next queries. 

::: interact

Unsure about the difference between curated and organic next queries? See [Next Queries](../features/next-queries-overview.md) overview.

:::

You create a next query configuration to determine the next queries (curated & organic) to display in the commerce store after shoppers perform a search using a query. Configurations are set up by **query context**: language <!--(and context filters/pivots, if implemented)--> and query. There can only be one configuration per query context combination. However, you can create multiple next query configurations. 

<!-- Context filters/pivots refer to the product catalogue and language, as well as any other filters such as store, device, etc. that you may set up for your implementation.-->


## Getting started with the Next Queries tool
When you access the Next Queries management tool, you view a list of all existing next query configurations for the instance. If you have not created any configurations, the list does not contain any rows.

![List view of the Next Queries management tool](~@assets/media/play/how-to-NQ-list.svg)


<FootNote>

**List view of the Next Queries management tool** - (A) Action tools, (B) Row selector, (C) Page navigation options.

</FootNote> 

</br>

The list table displays the details of the next query configurations:

- **Query**: the initial query that shoppers must use to search before the next query is displayed.
- **Language**: the language set up for your implementation, if applicable.
- **Curated**: top five next queries created for the query
- **Inactive organic**: organic next queries hidden in the store
- **Total organic**: the total number of organic next queries available for the query.
- **Updated on/by**: the user who performed the last changes on the configuration.

You can select the number of configurations to be displayed in the list with the row selector (B) in the bottom left corner of the screen. You can navigate to other pages in the configuration list using the page navigation options (C) in the bottom right corner of the screen.

To add a new configuration from the list screen, click the **+ NEW** button.

To edit or delete a configuration, select the corresponding checkbox next to the configuration you want to modify and use the action tools (A).

:::note Tip

Hover over the values in the **Curated** and **Inactive organic** columns to view the complete list of curated and inactive organic next queries.

:::


## Creating a next query configuration
To add a new configuration from the list screen, click the **+ NEW** button.

![Add view of the Next Queries management tool](~@assets/media/play/how-to-NQ-new.svg)

<FootNote>

**Next Queries management tool** - (A) Search box, (B) Preview, (C) Organic next queries.

</FootNote>
</br>

The **search box** (A) is used to define the initial query associated with the configuration. Shoppers must use this query before the next queries for the configuration are displayed. If you change the query in the search box, any unsaved changes for the configuration are lost. 

The **preview** (B) shows the product results that are returned by the search engine for the query to help you to identify what next queries shoppers might associate with the results. It displays a thumbnail of the product, the product name, and the product ID. 

The **list of organic next queries** (C) associated with the initial query is shown below the preview. You can use the left and right arrows to scroll through the organic next queries available. Organic next queries are displayed as tags. 


To create a configuration:

1. Enter the initial query in the search box.

2. [Add curated next queries](#creating-a-curated-next-query), or [hide or show organic next queries](#showing-and-hiding-next-queries) as appropriate.   
    You can create a configuration that contains only organic next queries, a combination of organic and curated next queries, or only curated next queries (hiding all organic next queries).

3. Click **Save**.


## Creating a curated next query
You can customize the next query experience by adding curated next queries (C) that are displayed before any organic next queries (D) in the commerce store.

</br>

![Edit view of the Next Queries management tool](~@assets/media/play/how-to-NQ-edition.svg)

<FootNote>

**Edit view of the Next Queries management tool** - (A) Search box, (B) Preview, (C) Curated next queries, (D) Organic next queries.

</FootNote>
</br>

Rules for curated next queries:   

- Curated next queries must not contain the same term as the initial query.
- Curated next queries cannot be duplicated.
- Curated next queries must have results.   


To prevent shoppers from being redirected to a page with no results for the next query, every time you create a new curated next query, a request is sent to the search engine to check whether there are results in the product catalogue. If there are no results, you cannot save it.

Since organic next queries may change over time depending on shopper behavior, you can choose to create a curated next query that is identical to an organic next query. A warning message appears to tell you that an organic next query already exists, but you can save the curated next query.

Similarly, if you edit an existing configuration containing curated next queries and these next queries have become organic next queries thanks to shopper interaction, a warning message appears to help you identify the curated next queries so you can choose to delete them or hide the organic next query instead.

Curated next queries have an icon to identify them (C). All curated next queries are listed before any organic next queries. 

::: note Tip

To feature an organic next query higher in the list, you can add it as a curated next query. This way, the query always appears in the first positions of the list despite any changes in shopper behavior. However, it is important to remember to hide the organic next query so shoppers won’t see the next query twice.

:::

To add a curated next query:

1. Click **+ New** or select a configuration to edit.

2. Click the **+** icon next to the  list of next queries.

3. Enter the new query you want to use as a next query and press Enter.   
    The curated next query appears at the beginning of the list.

4. Click **Save**. 


## Changing the order of next queries
Curated next queries always appear before organic next queries. You cannot alternate curated and organic next queries in the list. The order of organic next queries cannot be changed as it is determined by the volume of shopper searches. 

You can change the order in which curated next queries appear to shoppers: 

1. In the next queries carousel, drag and drop the curated next query to the corresponding position.

2. Click **Save**.


## Showing and hiding next queries
Next queries can be displayed in multiple locations in your search experience. You can decide which organic next queries to show, as well as displaying any curated next queries you create. You can even choose to offer shoppers a different experience with each type, transparently highlighting curated next queries with a “promoted” icon in the frontend.

To hide an organic next query:

1. In the next queries carousel, scroll to the organic next query you want to hide.

2. Click the X icon to the right of the query string in the organic next query tag.   
    All hidden organic queries appear as the last items in the next query carousel.

3. Click **Save**. 
    

To show a hidden organic next query:

1. Scroll to the end of the next queries carousel to locate the organic next query you want to show again.

2. Click the arrow icon to the right of the query string in the organic next query tag.   
    The newly activated organic next query moves to its organic position in the list.

3. Click **Save**.


::: design

As well as determining the number of next queries you display in the commerce store, you can choose to differentiate between curated and organic next queries in your store by using the highlight option in the Next Query components.   
For more information, see [Next Query UI](/explore-empathy-platform/experience-search-and-discovery/next-queries.md).

:::

