---
title: Use Quick Boosting
tags:
- query ranking
- product boost
- product bury
- how to boost
- how to bury
- how to

---

Quick Boosting in Query Ranking allows you to boost or bury more than one product at the same time for a query by using product IDs. You can select a specific date-time range for which you want to boost or bury the products. You can apply filters to determine the conditions when the boosted or buried products are shown.   

To access Quick Boosting, click the **Quick Boosting** button in the **Settings** section of the Query Ranking tool. 


## Getting started with Quick Boosting
When you click the **Quick Boosting** button in the **Settings** panel, a window appears in which you can boost or bury the products. You can cancel the action by clicking outside the window or clicking the **X** icon. You select the filters and schedule you want to apply **all products entered in the Product ID field** for the specified query. Once you have entered the list of the products you want to boost or bury, the products are displayed in the product list of the **Settings** section. 

For example, you select the device filters “iOS” and “Android”, add a schedule “02/05/2022 12:00 AM to 05/06/2022 12:00 AM”, enter the product IDs separated by semicolons as “3397;3398;3399”, and click **Boost** to boost products with IDs 3397, 3398, and 3399.
 
To boost or bury multiple products:

1. Select the **[filters to apply](#applying-filters-for-boosted-and-buried-products)** to all products, as required.  

2. Determine the **[schedule to apply](#scheduling-a-product-boost-or-bury)** for the boost or bury, if required.   

3. Enter the product ID for all the products to be boosted or buried.   
    To enter more than one product ID, use `;` as a separator.

4. Click **Boost** or **Bury** depending on whether you want to force the product to be listed first or last in the results.

5. When the Quick Boosting window closes, check that all products appear in the Settings panel and click **Save** to keep the configuration.

::: warning Important

Make sure you enter valid Product IDs. Product IDs are not checked against the product catalogue. **If you enter an invalid Product ID, it will be ignored.** All other valid product IDs are added to the product list. 

:::

::: note

Products with conflicts are highlighted in red. **A conflict may occur due to an existing product boost or bury**.   

For example: 
- A product may have been boosted with an always active schedule and you try to create a new boost or bury for the same product ID, duplicating the product boost. 
- A product may have been buried with a schedule and you try to create a new product bury with an always active schedule. You cannot boost or bury products with conflicts.

In these cases, you should remove the product from the Product ID field to save the configuration for the remaining products, and revise the existing configuration for the product ID in the product list.

:::


## Changing product boost and bury settings
In the product list of the **Settings** section, products that have a specific schedule or filter applied are identified with the **Calendar** and **Filter** icons. If you hover over the icon, you view the details of the schedule or filters that affect the product. You can edit the schedule or the filters applied to the product by clicking the **Edit** (pencil) icon. You can also **reorder the products listed**, determining the order in which a boosted or buried product appears in the results by dragging and dropping the product. 

::: warning Important

While Quick Boosting lets you boost or bury several products at the same time, if you want to change the schedule or filters applied to the products or remove the boost or bury after you create it, you must **edit or delete each product individually** in the product list.

:::


### Applying filters for boosted and buried products
Query Ranking lets you set up filters that determine whether a product boost or bury applies or not. The product boost or bury only applies when the conditions for the filter(s) are met.   
For example, you can set up a filter to boost the product “Classic Men's Polo Shirt” for the **Device** filter “mobile”. In this case, the product is only positioned in the first position of the results when the criterion is met; i.e. in mobile devices. You can set up more than one filter for boosted and buried products.

To add a filter to a product boost or bury:

1. Click the **Edit** icon beside the product in the product list.

2. Select the filter values in the Edit Product Ranking panel.

3. Click **Accept**.


### Scheduling boosted or buried products
Query Ranking lets you set a date and range for which the product boost or bury is applied. There are four types of schedule:   

- **Always active**: Products are boosted or buried for an indefinite period.    
    For example, you may want to display a specific product always at the top of the results page for merchandising reasons.   
- **Start date** and **end date**: Products are boosted or buried for the period selected. After the period has passed, the product is ranked according to the query relevancy.   
    For example, you may you want to boost specific products during a midseason sale, but want these products to return to the standard ranking after this period.
- **Start date only**: Products are boosted or buried from the date selected.   
    For example, you may want to set up an “always active” product boost to be applied at a future date.
- **End date only**: Products are boosted or buried until the date selected.
    For example, you may want to promote sales of a specific product for the next two weeks by listing it at the top of the results for the query.

To add a schedule to a product boost or bury:

1. Click the **Edit** icon beside the product in the product list.

2. Select the **Scheduled** option.

3. In the **Active from** and **Active to** fields, use the date picker to choose a start date and time and an end date and time (if required).

4. Click **Accept**.

::: note

Products **cannot have conflicting schedules for the same query**. For example, if you set up a product to be always boosted, you cannot boost the same product for the date range “01/03/2022 &#8211; 04/04/2022”.

:::


## Previewing boosted and buried products
The **Preview** section displays the results for the query, including those products you have boosted or buried. Boosted or buried products are highlighted with a green or red arrow icon, respectively. The Preview is updated when you finish entering the products in the Quick Boosting window and click **Boost** or **Bury**. 

If you have set up filters to apply the boosted or buried products, when you select a filter value in the Preview section, the order of the results reflects any filters applied. Similarly, if you have applied a boost schedule to specific products, you can select a date to preview how the products are ordered on that date.






