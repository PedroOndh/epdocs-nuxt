---
title: Visualize search trends with Terms
tags:
    - terms
    - trends

---

Terms is the Empathy Platform Playboard data visualization tool used to detect trending search terms that shoppers use in your commerce store. 

You access Terms through the **[Insights](/explore-empathy-platform/features/insights-overview.md)** landing page in the Playboard.

::: note Try Terms to…

- Spot search trends. Monitor the most important searched terms and their evolution over time.
- Discover new search terms that are growing in popularity. Detect new trends even before they become a trend.
- Identify terms to add to your catalogue to help bring products to the surface.

:::


## Getting started with Terms
The Terms data visualization shows the top ten terms for the date range selected.   

![Terms main screen](~@assets/media/analytics/how-to-terms.svg)

<FootNote>

**Terms data visualization** - (A) Header, (B) Stream graph, (C) Term detail panel, (D) Search box, and (E) Graph selector.

</FootNote> 
</br>

The data visualization has three main sections:

- [**Header**](#header)
- [**Stream graph**](#stream-graph)
- [**Term detail panel**](#term-detail-panel)
  

### Header
The header (A) includes the date selector, the filters for the data (if applicable), and the search box (D). 
The date selector is used to determine the date range for which the terms are presented. There are four different options:

- **Today**: current day
- **Week**: last 7 days (default)
- **Month**: last 30 days
- **Custom date**: any time period since the visualization is implemented

You can use the search box (D) to enter specific terms that you want to display in the stream graph below.


### Stream graph
Term includes two stream graphs, Growth and Popularity. Use the graph selector (E) on the right side to switch between the two graphs:

- **Growth**: represents the top ten fastest-growing terms for a date range.
- **Popularity**: represents the top ten most popular terms by query volume for a date range.

The vertical axis of the graph represents the top ten terms. 
The horizontal axis displays the date range. Each section represents a time interval for the date range. Depending on the option you selected in the date selector, the sections on the horizontal axis can represent different time intervals:

- **Today**: a single section that represents the current day.
- **Week**: each section represents a day of the week.
- **Month**: each section represents a week.
- **Custom date**: the intervals depend on the selected date range.
    - < 14 days: each section represents a day.
    - ≥ 14 days: each section represents a week (starting on Monday).
    - ≤ 57 days: each section represents a month (starting on Day 1).
 
When you hover the cursor over a stream representing a term, it is highlighted. The vertical axis shows the total number of queries for the term. When you hover the cursor over each section in a stream, a tooltip shows the date and number of queries.

If you search for a term in the search box, it is represented as a stream in the stream graph section.

### Term detail panel
When you click on a term stream in the graph, or search for a term in the seatch box, the term detail panel (C) appears on the right side of the screen with detailed information on the term. 

The panel shows the top five search queries that include the term selected. A bar beside each query indicates the number of searches performed using that query and the percentage that the query represents over the total of queries for the term. 

Use the down arrow beside the number of queries to expand and show more data:

- **Findability**: represents the number of clicks in the first page of the SERP.
- **Add-2-Cart**: represents the number of times a product searched using that term has been added to the cart.
- **No Results**: represents the number of times that searching for that term led to no results.

If you click on more than one term in the stream graph, the term detail panel shows data for all of the terms selected. To close the detailed view of a term in the panel, click on the X icon next to the term in the stream graph section.


## Viewing terms
Terms is used to visualize search trends in your commerce store. When you first enter the page, it shows the Growth stream graph with the results for the last week. To view trends:

1. Select a date range in the date selector.

2. Choose between the **Popularity** and **Growth** graphs.

3. In the stream graph section, click on a stream to open the term detail panel.

4. View the search query information for the term.

5. Click on more terms in the stream graph to add their details to the panel.


## Viewing details for a specific term
Apart from the top ten terms displayed in the stream graph, you can use the search box to search for specific terms. To view them:

1. Select a date range in the date selector.

2. Enter the term in the search box and click the result.

3. Click the term in the stream graph to open the detail panel.

::: note Tip

You can also compare the terms in the stream graph with a specific term. Click a term in the stream graph and then use the search box to look for a specific term and select it. The stream graph and the detail panel are updated to show information for both terms.

:::