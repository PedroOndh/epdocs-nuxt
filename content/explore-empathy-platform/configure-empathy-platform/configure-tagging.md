---
title: Configure tagging settings
sidebar_title: Configure tagging
tags:
    - tagging
    - instance management
    - tagging settings
    - cmc
    - configuration management console

---

The Tagging section lets you configure the settings for the Tagging microservice that is responsible for [capturing shopper interaction in the commerce store](/explore-empathy-platform/capture-shopper-interaction/).    

![Configure Tagging in Instance Management](~@assets/media/instance-mgt/config-tagging.svg)

::: warning

Only Playboard users with **permissions for Instance Management** can set up and edit the Tagging settings. 

:::

When you access the Tagging configuration form for the first time, the **Disabled** label appears beside the Tagging section in the side menu. This means that there is no active configuration for the service. Once you have created the configuration, you need to **[enable the microservice](#enabling-the-tagging-microservice)**.

To set up the Tagging microservice, you complete these steps:

1. Determine the **[filter settings](#configuring-filter-settings)** to be used.
2. Determine the **[data validations](#configuring-tagging-data-validations)** to be performed (if required).
3. Disable **[query transformation](#disabling-query-transformations)** options.
4. Save the configuration and **[enable the microservice](#enabling-the-tagging-microservice)**.

::: danger

You must set up the Tagging microservice **before starting to send tagging events** to the Tagging API.

:::

## Configuring filter settings

Filters are passed as parameters in the events sent to the Tagging microservice from the commerce store to allow customers to filter and segment the data in the Empathy Platform Playboard. 

**Considerations to take into account**   
The Tagging microservice accepts five filters: **language**, **scope**, **catalog**, **store**, and **section**. The **Language** filter is **mandatory** and must be passed in all calls to the microservice. The values entered for the filters in Tagging must also be entered in the [Search](configure-search-service.md) and [Playboard settings](configure-playboard.md#setting-up-filters). 
  
- **Languages** (required): Language(s) to be passed in tagging events. The language(s) selected here **must match the product catalogue language(s)**. For example, if the Index plugin and microservice store the product catalogue language Spanish as “es”, then enter “es” here.
    
    ::: warning Important

    The `lang` parameter must be included in all calls to the Tagging API. Otherwise, it returns a bad request. See [Determine tagging filter values](/develop-empathy-platform/capture-interaction-signals/tagging-api-guide.md#_2-determine-tagging-filter-values).    

    If value passed in the `lang` parameter **does not match the language value determined in the tagging configuration**, the event is logged as “ignored”.
    
    :::

    ::: develop
    
    To make it easier to set up the languages, use **[ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)**. If you use two letter codes, it's recommended that you implement _store_ to track specific usage where the language is used in multiple countries. For _store_, you can use the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) two letter codes.   
    If you don't want to implement _store_, then you can use four letter codes (e.g. EN-GB, EN-IE, EN-US).   

    However, bear in mind that the **language code format must be identical throughout the implementation** (Index plugin, product catalogue, Playboard).
    
    ::: 

- **Filters** (optional): Additional filters to be used to classify the tagging data. Here you can set up four different filters:
    - **Scope**: Can be used to track the device that shoppers use to interact with the store. For example, _desktop_, _tablet_, _mobile_, _mobileapp_, etc. are common values passed in this filter. It can also be used to track specific operating systems, such as _ios_, _android_, etc. 
    - **Catalog**: Can be used to track interaction with specific categories of the product catalogue. For example, _food_, _non-food_, _homeware_, etc.
    - **Store**: Can be used to track shopper interaction with specific stores in a global site. For example, _ES_, _US_, _UK_, _EU_, INTL or internal warehouse IDs to track stores for specific countries or a generic Europe or international store.
    - **Section**: Can be used to track interaction with specific sections of the store. For example, _women_, _men_, _kids_, etc.    


You can choose to implement all or none of these filter types. Adapt the values for each filter to reflect the customer's specific requirements. The Tagging API **accepts any value**.

::: note

Event calls to the Tagging API with a **value that does not match the Filter value** are still collected, but with the value “ignored”. 

:::

To add a filter, you need to **add all the values for the filter**, and then **add the filter**:
1. Enter a value in the **Values** field and click **+**.
    The filter value is displayed below the **Values** field.
2. Select the filter type in the **Name** field and click the **+** icon for the Filters section.   
3. Click **Save** to keep the changes.

::: note

To add more values, enter another value in the **Values** field and click the **+** icon. If you want to change a value for the filter, click the **X** icon to remove the value and then enter a new value in the **Values** field.

:::

## Configuring tagging data validations
Validations are performed on all tagging events to remove undesired activity, such bot actions that trigger events, which may cause unnecessary noise in the data collected, or to retrieve mandatory parameters such as product IDs.

- **Banned IP addresses** (optional): Source IP addresses to be ignored by the Tagging microservice. Any events from the IP addresses listed here are removed before processing.   
    ::: develop

    Use [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) to specify a range of IP addresses. For example, 92.0.2.0/24 bans all addresses from 192.0.2.0 to 192.0.2.255.
    
    :::

- **Product ID regex** (optional): Regular expression used as a fallback product ID locator when the `product_id` parameter is not available.
    If the product ID is not provided, the regular expression entered in this field is used to retrieve the product ID from the URL.   
    For example, you may want to use a regular expression such as `p(\\d+)` to indicate that in the URL http://www.example.com/p12345, `p12345` is the product ID.


## Disabling query transformations
During tagging enrichment, some query transformation processes are performed such as **query stemming** or normalization. You apply stemming to queries to **normalize the plural of search terms to their singular form** (e.g. shoes - shoe) and ensure **term variants match** during data transformation. When the Tagging Enrichment microservice receives, for example, the term _dresses_ as `query` parameter, it can be normalized to _dress_ for easier consumption by other Empathy Platform's services.
 
- **Disable stemming**: Allows to disable query stemming for incoming queries. When the Disable stemming toggle switch is **turned on, no query transformation** process is performed. In other words, search terms in plural are not transformed into their singular form. 


## Enabling the Tagging microservice
Once you have updated the configuration and clicked **Save**, you need to enable the Tagging microservice by turning on the **Enabled** toggle switch. 

The Tagging microservice is then ready to start receiving events from the commerce store. To learn how to integrate the tagging events in the presentation layer, see **[Capture interactions with the Tagging API](/develop-empathy-platform/capture-interaction-signals/)**.

<!--Next step in terms of tagging is to integrate and then set up the tagging enrichment process with the product id (linked with the id field in Indexed feed). 
Then check in Grafana that the events are being sent correctly to the staging and/or production environment

Include Link to information about how to check tagging events (hosted within the Develop EP > Capture-interaction section) -->  