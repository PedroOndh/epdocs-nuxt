---
title: Configure the Playboard
sidebar_title: Configure the Playboard
tags:
    - playboard setup
    - playboard configuration
    - playboard settings
    - playboard instance
    - playboard features
    - instance management
    - cmc
    - configuration management console

---

The Playboard section lets you configure the [Empathy Platform Playboard](/explore-empathy-platform/overview/playboard-overview.md).   

You can customize the Playboard for the customer, set up the filters that merchandisers and analysts use to narrow the data shown, determine the Playboard features to activate, and link the Playboard to the product catalogue.

::: warning

Only Playboard users with **permissions for Instance Management** can set up and edit the Playboard settings. 

:::

When you access the Playboard configuration form for the first time, the **Disabled** label appears beside the Playboard section in the side menu. This means that there is no active configuration for the service. Once you have created the configuration, you need to **[enable the Playboard microservice](#enabling-the-play-microservice)**.

To set up the Playboard, you complete these sections:

1. **Customize the dashboard** with your customer’s branding in the **[Customization](#customizing-the-dashboard)** section.
2. **Link the product catalogue** with the Playboard tools in the **[Catalogue](#linking-the-catalogue)** section.
3. **Grant permissions** for the Playboard features in the **[Permissions](#granting-playboard-permissions)** section.
4. **Set up filters** to narrow the data shown to merchandisers in the **[Filters](#setting-up-filters)** section.
5. **Chooose the KPIs** to display in the Playboard in the **[KPIs](#choosing-kpis)** section.
6. **Set up the Playboard features** available in the instance in the **[Features](#setting-up-playboard-features)** section .
7. **Enable the [Playboard microservice](#enabling-the-play-microservice)**.

The order doesn’t matter, but bear in mind that the information needs to be consistent (i.e. the IDs must match in multiple fields) to configure the microservice correctly.   


## Customizing the dashboard
This section lets you customize the Playboard in line with the company’s branding. You can change the display name that you provided when you requested the new instance. 
You can choose the logo used in the top left corner of the Playboard and that identifies the instance in the Instances landing page.

<br>

![Customization form](~@assets/media/instance-mgt/config-playboard-customization.svg)

- **Instance display name**: Descriptive name used for the instance. This is particularly useful when there are several instances for the same customer.
- **Logo URL**: Link to the logo to be used in the Playboard. The image is used in the Instance landing page, the [Instance panel](/explore-empathy-platform/overview/playboard-overview.html#instances) when you click the Instance selector, and as the logo in the top right corner of the Playboard.   
    The link must be a **public absolute path**. The image can be SVG, PNG, or JPG. If you leave this field empty, the Empathy logo is used in the top right corner and the Instance display name is used to identify the instance in the Instance landing page and the Instance panel.
- **Responsive logo URL**: Link to the isotype to be used in the Playboard. The image is displayed when the Playboard menu is minimized and in the Instance selector.   
    The link must be a **public absolute path**. The image can be SVG, PNG, or JPG. If you leave this field empty, the first two letters of the Instance display name are used.
- **Imagotype logo URL**: Link to the imagotype to be used in the Playboard. The link must be a **public absolute path**. The image can be SVG, PNG, or JPG. 

<!-- /(https?:\\/\\/.*\\.(?:svg|png|jpg|jpeg))/i-->

:::design Design tips

**Image format**   
Use SVG format for better rendering.

**Image size**   
The image occupies the available space depending on the location where it is used, usually according to maximum height and/or maximum width of the container.   
For example, in the Instance landing page, a 650&nbsp;x&nbsp;426px logo is rendered as approximately 188&nbsp;x&nbsp;125px, occupying the maximum height available in the container and calculating the width according to the image's aspect ratio.

**Isotypes as responsive logos**   
If your customer’s branding does not have a specific isotype and uses a wordmark or a combination mark only, use a fragment of that wordmark (i.e. the first letter) to represent the brand rather than the standard logo.

:::


## Linking the catalogue
This section connects the product catalogue with the Playboard. It determines the product fields to use with the different features in the Playboard. It also maps the fields used for product results from the Search microservice so they can be used in [Query Ranking](/explore-empathy-platform/fine-tune-search-and-discovery/use-query-ranking.md). 

![Catalogue form](~@assets/media/instance-mgt/config-playboard-catalogue.svg)

Product catalogue fields can be determined as:  

- **Searchable**: Allows the product catalogue field to be used in [Equalize](/explore-empathy-platform/features/equalize-overview.md). Merchandisers can determine the weighting given to this field in calculating the product score.
- **Rankable**: Allows the product catalogue field to be used in [Query Ranking](/explore-empathy-platform/features/attribute-ranking-overview.md). Merchandisers can use this attribute to boost or bury a range of products or a specific product by selecting the attribute and entering a value.
- **Facetable**: Allows the product catalogue field to be used as a navigation facet in the [Configuration tool](/explore-empathy-platform/overview/playboard-overview.md#navigation-features). Merchandisers can choose to display this attribute as a facet to allow shoppers to refine the products shown on the product category page.

For example, if you want to use _color_ as an attribute to boost or bury product results using the Query Ranking tool, you must include the **Color** field ID in this section and set it as rankable.

To configure the product catalogue fields:

1. Enter a valid ID in **Product catalogue field**.   
    :::note
    The IDs are case-sensitive. The Playboard ignores any unrecognized product catalogue field IDs.
    :::
2. If you want to display a **descriptive name** rather than the product catalogue field ID, enter a value in the **Name** field.
3. Select the **field type** by turning on or off the searchable, rankable, or facetable toggle.
    You can select more than one type for each product catalogue field.
4. Click the **+** icon to add the field. The field is displayed as a row below the Product catalogue fields section.

You also need to determine the **product result mapping** to retrieve the product ID, product name, and product image that are used to display the results in the Playboard. These fields are determined as:

- **Result ID**: Field in the product catalogue where the product ID is found.
- **Result name**: Field in the product catalogue where the product name is found.
- **Result image URL**: Field in the product catalogue where the product image URL is found.

::: note

All field names are case-sensitive. The Playboard ignores any unrecognized product catalogue fields. The field is not configured and no action is taken.

:::


## Granting Playboard permissions
This section lets you choose the features you want to turn on in the Playboard. 

<env if-false="dev">

![Permissions form](~@assets/media/instance-mgt/config-playboard-permissions_v1.svg)

</env>

<env if-true="dev">

![Permissions form](~@assets/media/instance-mgt/config-playboard-permissions_v2.svg)

</env>

The features are grouped into three domains:
- **[Search](#search-features)**: Determines features related to the search experience.
- **[Navigation](#navigation-features)**: Determines features related to the navigation experience.
- **[Global](#global-features)**: Determines features that apply to both search and navigation experiences in terms of Playboard administration.

::: note

You may need to configure some Playboard features in the [Features](#setting-up-playboard-features) section.

:::


### Search features
These features are shown on the [Search tab](/explore-empathy-platform/overview/playboard-overview.md#search-features) in the Playboard. The features are displayed in the order given here:

- **Analytics**: You can turn on **[Analytics](/explore-empathy-platform/analyze-search-and-discovery#analytics)**, which provides data on the evolution in search in terms of users, queries, and sessions, visualizing the [KPIs you choose to turn on in the Playboard](#choosing-kpis).

- **Insights**: You can turn on the data visualizations included as part of **[Insights](/explore-empathy-platform/features/insights-overview.md)** according to the customer’s needs. Some of the data visualizations use the metrics included as part of Analytics.
    - **Now**: Explore the queries shoppers used and performance in terms of results and clicks.
    - **Origins**: Understand whether shoppers used organic searches, predictive, or refinement features.
    - **Terms**: Detect popular terms used in search queries to offer relevant suggestions.
    - **Categories**: Explore success metrics accross product categories and visualize queries by categories to maximize performance.

- **Play**: You can enable multiple features to help merchandisers maximize findability and discoverability in the commerce store.   
    - **[Equalize](/explore-empathy-platform/features/equalize-overview.md)**: Configure the product attribute weighting used in ranking the results.
    - **[Promotion](/explore-empathy-platform/features/promotions-overview.md)**: Highlight specific products on the search engine results page (SERP). If you turn on this feature, you need to determine the type of promotion you want to use in the [Features](#setting-up-playboard-features) section.
    - **[Redirection](/explore-empathy-platform/features/redirections-overview.md)**: Send shoppers directly to specific URLs from the search box.
    - **Configuration**<!-- Ask dev/PO why it's call configuration instead of Query ranking -->: Change product ranking on the SERP based on [products](/explore-empathy-platform/features/product-ranking-overview.md) and [attributes](/explore-empathy-platform/features/attribute-ranking-overview.md). If you turn on this feature, you need to determine the pivot fields to be used in the [Features](#setting-up-playboard-features) section to restrict the impact of the tooling.
    - **[Explain](/explore-empathy-platform/features/explain-overview.md)**: Understand how products are ranked organically and view any configurations that may be affecting positioning.
    - **[Synonymize](/explore-empathy-platform/features/synonyms-overview.md)**: Set up alternative terms for search queries.
    - **[Blacklist](/explore-empathy-platform/features/blacklist-overview.md)**: Hide specific terms as search suggestions.
    - **[Related tags](/explore-empathy-platform/features/related-tags-overview.md)**: Create and configure related tags.
    - **[Next queries](/explore-empathy-platform/features/next-queries-overview.md)**: Create and configure next queries.


### Navigation features
These features are shown on the [Navigation tab](/explore-empathy-platform/overview/playboard-overview.md#navigation-features) in the Playboard.

- **Analytics**: You can turn on Analytics to access data on the evolution in navigation in terms of product categories.

- **Configuration**: You can enable multiple configuration features to help merchandisers maximize discoverability in the commerce store. You can change facet names and boost and bury products and product attributes in the navigation experience.


### Global features
<env if-false="dev">

This feature is used for Playboard administration and shown on [both tabs in the Playboard menu](/explore-empathy-platform/overview/playboard-overview.md#global-features).

</env>

<env if-true="dev">

This feature is used for Playboard administration to manage options performed in the Playboard. Some of them are shown on [both tabs in the Playboard menu](/explore-empathy-platform/overview/playboard-overview.md#global-features).

</env>

- **Activity stream**: Monitor all the changes performed in the Playboard.

<env if-true="dev">

- **Privacy board**: Analyze privacy performance in the commerce store and get privacy-related insights.

<!-- Remove first chunk of text with FF when privacy board tab is released -->
</env>


## Setting up filters
This section allows you to set up the filters that merchandisers and analysts use when visualizing [Analytics & Insights](/explore-empathy-platform/analyze-search-and-discovery/) or using the [Play tooling](/explore-empathy-platform/fine-tune-search-and-discovery) in the Playboard.   

![Filters form](~@assets/media/instance-mgt/config-playboard-filters.svg)

There are two types of filters that you can set up:

- **Languages**: Languages to be used as filters in the Playboard. The values selected here **must match the product catalogue languages**. 
- **Custom filter fields**: Additional filters that you may set up in the implementation of the Tagging and Search microservices. These filters are then used to narrow the data displayed in the Playboard.
<!-- Review Filters types description to match current layout -->
The filters set up in the Playboard should **match those used in the Tagging and Search microservices**. However, depending on your customer’s specific use case, the filters for the Search microservice may be different. You need to make sure the **Tagging ID** in this section matches that entered in the **[Name](configure-tagging.md#configuring-filter-settings)** field in the Tagging section and **ID** contains the filter entered in the [Search feature configuration](configure-search-service.md). For example, Tagging ID must be `store`, `catalog`, `scope`, or `section`; however, the corresponding ID used in Search for `section` may be `division`. If this is the case, you need to specify the IDs for Search and Tagging in the Playboard section.


::: warning

You must define **at least one language** as a filter. For example, set **Filter ID** as `lang` and add `EN` as a language in the **ID field for Filter value**.

:::


### Adding a custom filter
To configure a filter, you need to add **all the filter values for the filter** and then **add the filter itself**:

1. In the **Filter value**, enter the **ID** and **Tagging ID** and click **+**.   
    The **ID** and **Name** is added as a row below the **Filter value** section.  
    If the definition of the filters is different in the Search microservice, then enter the filter value ID for search in the **ID** field and the filter value ID for tagging in the **Tagging ID** field.  If the filters are the same for both tagging and search, then enter the ID in the **ID** field.
2. In the **Custom Filter Fields**, enter the **ID** and **Tagging ID** (if different from the ID used for Index & Search).   
    If the definition of the filters is different in the Search microservice, then enter the filter ID for search in the **ID** field and the filter ID for tagging in the **Tagging ID** field. If the filter IDs are the same for both tagging and search, then enter the ID in the **ID** field.   
    
    :::note
    
    The IDs are case-sensitive. The Playboard ignores any unrecognized field IDs. The field is not configured and no action is taken. 
    
    :::

3. If you want to set a default value that is used where no value is provided in the search request, enter the value in **Default value ID**.
4. Once you have added all the values for the filter, click **+** beside the Filter section.   
    The filter and filter values are shown as a row below the **Custom filter fields** section.

::: warning

**Existing filters and values cannot be edited**. To change a filter value, click the **X** icon beside the value or filter to remove the incorrect value and add the new value.

:::

::: develop

Use the **Name** field in this form to **change the labels for the filter and filter value** in the Playboard. For example, you enter _scope_ in the **ID** field, but you display this information as “Device” in the Playboard by entering _Device_ in the **Name** field.

:::


## Choosing KPIs
You can choose which KPIs to turn on globally for the instance and determine which metrics to display in the reports. 

![Features form](~@assets/media/instance-mgt/config-playboard-kpis.svg)

The metrics you can show or hide individually are: 

- **Query**: Metric to show the number of search requests performed.
- **No result**: Metric to show the number of queries that failed to provide results.
- **Click**: Metric to show the number of click actions on a product.
- **Findability**: Metric to show the number of clicks on the first page of SERP versus total queries.
- **Add-to-cart**: Metric to show the number of products added to the cart from a search result.
- **Checkout**: Metric to show the number of products purchased that were added to cart from a search result.
- **Session**: Metric to show the number of grouped shopper interactions performed within a given time frame.

::: warning

By default, **all metrics are shown in the Playboard**.   

If you choose to disable a specific metric, **the metric is no longer shown** in the [Analytics](/explore-empathy-platform/analyze-search-and-discovery#analytics) screens and in the [Insights](/explore-empathy-platform/analyze-search-and-discovery#insights) data visualizations in the Empathy Platform Playboard. However, the **data is still collected** to calculate the metrics. You can choose to turn on the metric again at any stage. The analytics shown will reflect the current situation.

:::


## Setting up Playboard features
Several of the Playboard features you can turn on in the [Permissions](#granting-playboard-permissions) section require additional configuration.

![Features form](~@assets/media/instance-mgt/config-playboard-features.svg)

You set up these features:

- **Promotion**: You need to determine the type of promotion you want to use. You can choose to use only **[promoted results](/explore-empathy-platform/features/promotions-overview.md#promoted-results)**, only **[promotion banners](/explore-empathy-platform/features/promotions-overview.md#promotion-banners)**, or **both** promoted results and banners.
- **Query ranking**: For [query ranking](/explore-empathy-platform/features/product-ranking-overview.md), you need to determine the **pivot fields** to be used to restrict the impact of the tooling. In this case, the pivot fields must match a field in the product catalogue and must be included as filters in the [Tagging section](configure-tagging.md#configuring-filter-settings).
- **Configuration**: For the navigation experience, you need to determine the **pivot fields** and **attributes** to be used with the tool.
    - **Pivot fields**: Product catalogue field to use to segment the data.
    - **Attributes**: Product catalogue field to use as an attribute. Merchandisers can use the fields indicated here to boost or bury the products within the navigation experience.   
    ::: note
    The **ID** field must **match the product catalogue field ID exactly**. You can choose a different display name in the **Name** field.
    :::


## Enabling the Play microservice
Once you have entered all required configuration for the Playboard and saved the form, you need to enable the Play microservice. To do this, click the **Enabled** toggle switch located at the bottom of the screen.   



