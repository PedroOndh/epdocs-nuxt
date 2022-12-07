---
title: Understand search results using Explain
tags:
    - explain
    - product score
    - product scoring

---

Explain is the Empathy Platform Playboard tool used to visualize how product ranking determines the order of products on the search engine results page (SERP).
The Explain landing page shows an animation that summarizes how the product score is determined by the different scoring criteria. The landing page also has a search box where you enter the query you want to consult.

::: interact

For more information on the Explain feature, see [Explain](../features/explain-overview.md). 

:::


## Getting started with Explain
Once you have entered a query, the main screen opens. You can use the search box in the top right corner to consult another query. 

![Explain main screen](~@assets/media/analytics/how-to-explain.svg)

The main screen has three main sections where you can view the product score, the breakdown of that product score, and the position of the products on the SERP for the query:

- [**A. Bar chart**](#bar-chart)
- [**B. Results grid**](#results-grid)
- [**C. Product score panel**](#product-score-panel)


### Bar chart
The bar chart displays up to the first 24 results, in descending order, in line with the same way shoppers view the results. When you hover the cursor over a bar, the product image and score are shown. The bar chart has two views: 

- The **Global** view represents the overall score for the product result. 
- The **Detailed** view displays the points for different scoring criteria that make up the overall product score (catalogue definition, business rules, wisdom of the crowd, custom score). 

You can switch between the views using the icons in the top right corner of the graph. The bars shown in the chart have different colors, according to their status and origin:

- In the **Global** view:
    - Bars representing boosted products and products with boosted attributes are green and have an up arrow icon.
    - Bars representing buried products are red and have a down arrow icon.
    - Bars representing products that are not boosted or buried are blue.

- In the **Detailed** view: 
    - Each portion of the bar that represents the different scoring criteria are each presented in a different color. 
    - Bars representing boosted and buried products maintain the arrow icons.

You may find that boosted results with a lower score appear before non-boosted results with a higher one, or that buried products with higher scores appear after non-buried products with a lower one. Boosted or buried products always appear in the first or last positions of the chart, but the bars represent the score resulting from the catalogue definition points. 

::: note

If you boost or bury products or product attributes using Query Ranking, it may take several minutes for the changes to be reflected in the histogram. <!-- add link to query ranking overview or how to when available -->

:::


### Results grid
All search results for the query are shown in the grid below the bar chart, with detailed information on the product (product name, ID, and image) and the score. 

Each result also shows the icons associated with the scoring criteria used to determine the product’s overall score. Boosted and buried products also have an arrow icon representing their status. 

If you scroll down, the grid is refreshed and shows other products with a lower score. The bar chart does not change when scrolling through the grid. 

:::note

If you optimize the search results using the Playboard tooling, it may take several minutes for the changes to be reflected in the results grid.

:::


### Product score panel
If you click on a result from the grid, a panel on the right side appears with detailed information on the product scoring for that result.  
In this panel, the spider chart gives a visual representation of the points and the scoring criteria. You can select more than one product from the results grid or bar chart to compare results, however the spider chart is not shown.
Underneath the spider chart, the breakdown of points for each scoring criteria is listed, as well as the product’s overall score. These criteria are:

- **Catalogue definition (CD)**: points are calculated based on textual relevance and the values set in [Equalize](../features/equalize-overview.md). 
- **Business rules (BR)**: points are calculated based on rules set for all queries, specific queries, or specific products, such as boosting and burying rules for queries. 
- **Wisdom of the crowd (WC)**: points are calculated according to collective shopper behavior. For example, the more a product is clicked or added to cart by shoppers, the more points it gets.
- **Custom score (CS)**: score is calculated based on other specific customizations.

The product score panel also shows the **tiebreakers** for the product results, in the event there are any, as well as the value for each tiebreaker value.

::: interact

Get to know more about how product scoring is calculated in [Product Scoring](../overview/product-scoring.md).

:::

The **Optimize** section has shortcuts to other tools in the Playboard that can help you change and improve the product score of a search result. Each link takes you directly to the corresponding tool. The tools that can be accessed are Equalize, Synonymize, Blacklist, Promotion, Redirection, and Query Ranking.


## Visualizing search results
Explain is typically used to view search results for a given query. To view the results:

1. Enter a search query.

2. Check the bar chart and results grid to see the score and order of the products.

3. Click on a product to see the spider chart representing its score breakdown, the points corresponding to the scoring criteria, and the tiebreakers.

4. Take action on what you see using the Optimize tools.

For example, you enter a query for “almond milk” and you want to learn more about the product score of the first result, as you see in the bar chart and the results grid that it has a high score. You click on the product result in the grid to view the spider chart to understand how the different scoring criteria determine the product overall score, and the points associated with each criterion.  

::: note

Any changes to product ranking made using the Playboard tools may take several minutes to be reflected in Explain.
For example, if you apply a boost to a product or to product attribute using the Query Ranking tool, the boosted product may not appear as the first in the histogram if you check Explain straightaway.

:::


## Comparing multiple search results
Explain is not only used to visualize scores for individual products, but it can be used as well to compare two or more results. To compare more than one result:

1. Enter a search query.

2. Click on more than one product, either in the bar chart or the results grid.

3. View the product score panel to see the points for each scoring criteria, side by side.

4. Check the tiebreakers for the selected results, if there are any.

For example, let’s say you want to use the Explain tool to understand the product ranking for the query “dress”. Once the search results are presented in the bar chart and the grid, you compare the score of two results that have different scores despite having similar product names: “floral pattern dress” and “floral patterned dress”.

When you click on both results, the product score panel shows the points for each product by scoring criteria, so they can be compared side by side. 

As you want to learn why one result is ranked before the other, you check the tiebreakers for each product in the panel to see that price has been defined as a [tiebreaker](/explore-empathy-platform/overview/product-scoring.md#tiebreakers), forcing the “floral pattern dress” result to be ranked before the other result.
