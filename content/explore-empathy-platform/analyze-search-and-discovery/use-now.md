---
title: Visualize query performance with Now
tags:
    - now
    - dataviz
    - data visualization
    - insights
---

Now is the Empathy Platform Playboard data visualization tool to explore what is happening now in your commerce search. It displays the queries that shoppers have been using in your commerce store for up to the last 12 hours and reveals search performance in terms of clicks and no results. 

You access Now through the **[Insights](/explore-empathy-platform/features/insights-overview.md)** landing page in the Playboard.

::: note Try Now to...

- Create a clear picture of what’s happening in the search experience and how search is performing.
- Spot and monitor search trends and opportunities. 
- Identify gaps, issues, or any potential problems early to ensure immediate action. 
- React to any new shopper behavior.
- Discover patterns and relationships between different metrics.

:::


## Getting started with Now
The Now data visualization tool displays the queries made in the past few minutes or hours, and shows the queries that have translated into clicks, and those that gave no results. It allows you to easily visualize queries that are taking place in your commerce store as they happen in the form of animated bubble clusters.

![Now main screen](~@assets/media/analytics/how-to-now.svg)

<FootNote>

**Now data visualization** - (A) Header, (B) Summary bar, (C) Bubble chart, (D) Bubble cluster selector.

</FootNote> 

</br>

The data visualization has three main sections:

- **[Header](#header)**
- **[Summary bar](#summary-bar)**
- **[Bubble chart](#bubble-chart)**

::: note

Use the full screen option in the bottom right corner to focus on the data visualization without distractions.

:::


### Header  
The Header (A) includes the **real time selector** and the **filters** for the data (if applicable). 

The real time selector is used to determine the period used for the data. There are three different options:

- **Last 15 minutes**: shows all queries performed over the last 15 minutes.
- **Last 60 minutes**: shows all queries performed over the last hour.
- **Last 12 hours**: shows all queries performed over the last 12 hours.

The Now data visualization presents real-time searches. As query data is updated every 30 seconds, changes for the period selected are reflected by the varying-sized bubbles that move in and out constantly according to shoppers’ behavior and actions.

If your implementation includes **filters** (e.g. language, device, store, country, or catalogue), you can set a specific scenario to display query data. For example, filter query data to see the searches made in your commerce store across different stores and countries to detect disparities between locations.


### Summary bar
The summary bar (B) gives an overview of the top searched queries for the selected period in real time. Then, it drills down data into three different metrics: 

- **Results queries**: All search queries that returned results.
- **Clicks**: Search queries that have resulted in a click action on the SERP.
- **No results**: Search queries that didn't have results.

Each metric is expressed as a percentage of the total number of queries, giving you a clearer picture of the breakdown of queries with results versus those without results, and the percentage of queries that resulted in shoppers clicking on a result.


### Bubble chart
The bubble chart (C) shows three dimensions, grouped by color:  **Queries** (orange), **Clicks** (green), and **No results** (red). 

Each bubble represents a query. Its size is proportional to the volume of the query. The more searches made for a query, the larger the bubble is. 

When you roll over each query's bubble, you can view details on the volume for that query depending on the metric viewed.

You can use the **bubble cluster selector** (D) to hide or show the different bubble clusters, making it easier for you to analyze each metric individually or compare metrics with others. For example, you can hide No results queries to easily track which sucessful queries are transformed into clicks.

::: design

Depending on the screen size, a maximum of 50 bubbles can be plotted per dimension. For example, if your screen resolution is 1440px, up to 36 bubbles are displayed for result queries and 18 bubbles for both clicks and no results.

:::


