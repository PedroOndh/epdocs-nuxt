---
title: Feature promotions on the SERP
tags:
    - promotions
    - promotion
    - feature product
    - SERP
    - use promotion
    - how to promote a product
    - how to create a promotion
---

To highlight certain search results or direct shoppers to a specific URL from the search engine results page (SERP), you use the **Promotion** tool from the Empathy Platform Playboard. 

You configure a promotion to determine advertisement campaigns and promotional landing pages in your commerce store or help your shoppers discover specific products or product categories when searching.

You can define **promotion banners** and **promoted results** to customize search results and make them stand out on the SERP. Banners occupy the full width of the results grid, while promoted results occupy just one single cell of the results grid, like an organic search result.

::: interact

Don't you get the difference between promotion banners and promoted results? See the [Promotions](/explore-empathy-platform/features/promotions-overview.md) overview.

:::


## Getting started with the Promotion management tool
When you access the **Promotion management tool** in the Empathy Platform Playboard, you view the list of promotions that have been created for your commerce store. The list displays all enabled and disabled promotions, details on when the promotion was last modified, and options to search and filter the list. If no promotions have been created yet, the list does not contain any rows.

You can **create**, **edit**, **delete**, or even temporarily **disable** a promotion without having to delete it. You can also **schedule** a promotion to appear in the results at a future date.

![List view of the Promotion management tool](~@assets/media/play/how-to-promotion-list.svg)

<FootNote>

**List view of the Promotion management tool** - (A) Filter selector, (B) Search box, (C) Action tools, (D) Promotions list, (E) Row selector, (F) Page navigation options.

</FootNote> 

<br>

The promotions list (D) displays the details of the configured promotions:

- **Type**: type of promotion configured (promotion banner or promoted result).
- **Title**: the identifying name for the configured promotion.
- **Language**: the language set up for your implementation. 
- **Queries**: query or queries that shoppers must search for to display the configured promotion on the SERP.
- **Image**: URL of the image used to display on the SERP for the configured promotion.
- **Scheduled**: period set for running the promotion. 
- **Updated on**: the date and time when the last change on the configuration was made. 
- **Enabled**: the status of the configuration. It shows whether the promotion is turned on or off.

You can filter the promotions set in the list with the **filter selector** (A) in the upper left corner of the screen. You can search for any configured promotion in the list using the **search box** (B). 

In the bottom left corner of the screen, you can use the **row selector** (E) to select the number of promotions to be displayed in the list. If there is more than one page of promotion configurations, you can navigate to other pages in the promotions list using the **page navigation options** (F) in the bottom left corner of the screen.

To **add** a new promotion, click the **+&nbsp;NEW** button from the promotion list screen. To **edit**, **clone**, **delete**, or **enable/disable** a promotion, check the promotion you want to modify and use the corresponding **action tools** (C) in the menu that displays.


## Creating a promotion
You create a new promotion from the promotion list screen. Click the **+&nbsp;NEW** button.

![Edition view of the Promotion management tool](~@assets/media/play/how-to-promotion-edition.svg)

<FootNote>

**Edit view of the Promotion management tool** - (A) Activation panel, (B) Filters, (C) Queries, (D) Promotion settings.

</FootNote>

<br>

To create a new promotion, follow the steps below:

1. Decide whether you want the promotion to be enabled and running for the search queries you set (A). Toggle the **Enabled** button off if you want the promotion to be temporarily disabled. 

    ::: note
    
    If you disable the promotion, you can enable it later on using the **action tools** in the promotion list screen. 
    
    :::

2. Define the period for the promotion to be enabled: **always active** (default) or **scheduled** for a specific time range.

    ::: note
    
    By default, promotions are set up to be always active. To schedule a promotion to run for a specific period, see [Scheduling a promotion](#scheduling-a-promotion).

    :::

3. Select the **filters** (B) to determine the scenarios where the promotion is displayed (i.e. desktop or mobile devices, specific divisions only, language, etc.). Filters are determined by your implementation.


4. Enter the **search query or queries** (C) for which you want to display the promotion in the **Queries** field. To include multiple queries, add search terms separated by semicolons (`;`) and press **Enter**. If you want to display the promotion for **all searches**, select the **Match All Queries** checkbox. 

    ::: warning No-result queries

    Research the search results that a query retrieves to formulate the queries for the promotion accordingly. Consider not setting up a promotion for queries that actually return no results.

    :::

5. Define the configuration options for the promotion in the **Settings** section (D). Depending on your implementation, you can define only promotion banners, promoted results, or both. When both promotion types can be configured, select the **type of promotion** you want to create: 
    
    - **Banner**: to display a promotion banner. I.e. a full-width image with a link, positioned by default at the top of the SERP.
    - **Promoted**: to display a promoted result. I.e. an image with a link that appears within the results grid, as any other search result.

6. Indicate the location for the promotion to be displayed on the SERP. For promoted results, indicate the **position** in the results grid. For promotion banners, indicate the **row** to occupy in the grid. See [Changing the location of a promotion](#changing-the-location-of-a-promotion) for more details.

7. Indicate a **name** in the **Title** field to identify the promotion in the promotion list (optional).

8. Enter the **URL** to which the promotion will redirect (e.g. www.example.com/mothers-day).
    
    ::: note Using relative URLs

    If your organization is a multi-brand company, i.e. it has several brands in its portfolio, Empathy Platform supports creating a single promotion to be featured in all commerce stores of the brands at a time. You can enter a **relative URL** for the promotion, skipping the domain details (e.g. /mothers-day). Check with your Empathy representative if your implementation supports defining relative URLs.

    :::

9. Enter the **URL of the image** to be displayed on the SERP for the promotion. For best results on image rendering, see [Image aspect ratios](#best-practices-image-aspect-ratios).

10. Click **Save**. If you have already enabled the promotion, it will be shown in the search results for the queries set in a matter of seconds.


## Scheduling a promotion
Promotions can be set to be always active and running indefinitely. But you can schedule a configured promotion for a specific period (e.g. seasonal sales, special dates such as Valentine’s Day or Mother’s day).

To schedule a promotion:

1. Check the promotion you want to schedule in the promotion list screen.

2. Click the **pencil** icon to edit the selected promotion. 

    ::: note  

    To schedule a new promotion, use the **+&nbsp;NEW** button on the promotion list screen. See the [Creating a promotion](#creating-a-promotion) section.

    :::

3. Toggle the **Enabled** switch button on to activate the promotion.

4. Select the **Scheduled** option.

5. Enter the range of **dates and times** for the promotion in the **Active from** and **Active to** fields. 

6. Click **Save**.

    ::: warning

    If you do not enter an end date, the promotion will be always active and appear in the search results.

    :::

## Disabling a promotion
You can configure a promotion and disable it temporarily, without having to delete it, so that you can reuse it on future occasions.

To disable an existing promotion:

1. Check the promotion you want to disable in the promotion list screen.

2. Click the **disabled** icon to deactivate the selected promotion. A confirmation message appears.   

::: note

You can disable an existing promotion using the **Enabled** toggle switch on the Edit promotion screen. Use the **pencil** icon on the promotion list screen to start editing the promotion. To disable a new promotion, use the **+&nbsp;NEW** button on the promotion list screen. See the [Creating a promotion](#creating-a-promotion) section.

:::

## Changing the location of a promotion
By default, promotion banners appear on top of the results grid, occupying an entire row, and promoted results appear in the first position of the results grid. However, both banners and promoted results can be **displayed in multiple locations** within the results grid, especially when multiple promotions are displayed at the same time.

To change the location of an existing promotion:

1. Check the promotion you want to relocate in the promotion list screen.

2. Click the **pencil** icon to edit the existing promotion.

3. Define the position for the promotion in the **Settings** section from the Edit promotion view:
    - **Promotion banners**: use the **Show banner in row** selector to indicate the **row of the grid** in which the banner will be displayed. 
    - **Promoted results**: use the **Show Promoted position** selector to indicate the **cell in the results grid** in which the promoted result will be displayed. 

4. Click **Save**.

---

###### Best practices: Image aspect ratios
**The image aspect ratio for a promotion may vary depending on the screen size**. However, the image aspect ratio is calculated by dividing the width by the height of the image visible on the screen and is usually expressed as Y:Z. In short, the calculation of the ratio of 1:X is X=Y/Z. 

**Promotion banners** are displayed at 100% width across the results grid. There is no default height for banners. Use the height of the image to determine the correct ratio. 

The images for **promoted results** are displayed at 100% width in the results grid cell. The aspect ratio for a promoted result should be identical to that used for the entire product card. 


