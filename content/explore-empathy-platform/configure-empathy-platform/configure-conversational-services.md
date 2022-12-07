---
title: Configure conversational services
tags: 
    - topclicked batch
    - empathize batch
    - querysignals batch
    - contextualize batch
    - configuration management console
    - cmc
    - instance management
---

The Conversational services are about the [Contextualize](/explore-empathy-platform/diagram/microservices/contextualize-service.md), [Empathize](/explore-empathy-platform/diagram/microservices/empathize-batch.md), [Query&nbsp;Signals](/explore-empathy-platform/diagram/microservices/query-signals-batch.md), and [Top&nbsp;Clicked](/explore-empathy-platform/diagram/microservices/top-clicked-batch.md) batch processes.   
The batch processes take the raw pre-aggregation data from the Tagging microservice and generate a set of suggestions. The output depends on the individual batch process, e.g. Empathize generates [query suggestions](/explore-empathy-platform/features/query-suggestions-overview.md) and [popular searches](/explore-empathy-platform/features/query-suggestions-overview.md). 

You find the corresponding batch processes sections on the side menu to configure the settings for each batch process.

::: warning

Only Playboard users with **permissions for Instance Management** can set up and edit the batch process settings. 

:::

When you access the Conversational Services configuration forms for the first time, the **Disabled** label appears beside the corresponding sections in the side menu. This means that there is no active configuration for the batch process. Once you have created the configuration, you need to **[enable the configuration](#enabling-the-batch-process-configuration)**.

To set up the Conversational service batch processes, you complete these steps:

1. Determine the **configuration values for the batch process** and click **Save**.   
    - [Contextualize](#configuring-the-contextualize-batch-process)
    - [Empathize](#configuring-the-empathize-batch-process)   
    - [Query&nbsp;Signals](#configuring-the-query-signals-batch-process)   
    - [Top&nbsp;Clicked](#configuring-the-top-clicked-batch-process)  
2. **[Enable the configuration](#enabling-the-batch-process-configuration)** for the batch process.

::: danger Important

 Before you can run the batch processes, you must **[implement tagging events](configure-tagging.md)** with all required parameters in the commerce store and **index the product catalogue**. 

:::


## Configuring the Contextualize batch process
The [Contextualize batch process](/explore-empathy-platform/diagram/microservices/contextualize-service.md) generates the intent models that are accessed by the Search microservice.  These relevancy models are used to enhance relevancy when shoppers perform a search. You configure the product catalogue languages, the days to be used in the batch process, the events, and the query context fields.   

![Configure Contextualize](~@assets/media/instance-mgt/config-contextualize.svg)

You can configure the **events used in the batch process** to customize the generation of the intent models according to the specific characteristics of the customer. You can determine the events taken in generating the intent model and assign a representative weighting to each event. The weighting is used to calculate the importance of the event type in the intent model. For example, in some commerce stores, the checkout event may represent a low percentage of the traffic on the site, so a checkout event may not add value or may contribute a low value compared to other events. In this case, a click event may provide better signal of intent, so you assign a higher weighting value to click events.   

Pivot field segment the data according to a specific context (e.g. by language, country, or section) and determine the collection targeted by the search engine when retrieving product information. 

Query context fields are used by the batch process to perform the aggregation calculations. The fields indicated in this section are product fields within the customer's product catalogue. 

<!-- Include explanation of information retrieval term "collection" -->

::: note 

If you are unsure of the **fields to add for contextualization**, contact [Partner Enablement](mailto:enablement_partners@empathy.co).

:::

You can configure these settings for the Contextualize batch process:

- **Language**: List of allowed languages. Only terms belonging to the listed languages are processed. All other languages are discarded.  
    The languages must match those defined in the [Tagging](configure-tagging.md) microservice and in the [Playboard](configure-playboard.md).
- **Pivot fields**: Product catalogue fields to be used as pivots to retrieve product information from the collection.   
    These fields must have been indexed and should match the **Filters** defined in the [Tagging](configure-tagging.md) microservice and the **Pivot fields** defined in the [Playboard](configure-playboard.md).
- **Days**: Number of days to be processed in the job.   
    This determines the date range for which the pre-aggregation data are selected. By default, the batch process takes data for the previous 7 days. However, you can set up to 30 days (i.e. previous 30 days) where you find there is insufficient data.
- **Events**: Events to be taken during data enrichment and the weighting applied per event in calculating the intent model.   
    In **event type**, Select `click`, `add2cart`, or `checkout`, according to the event type you want to use to generate the model. You can add more than one event type.   
    For each event type, you establish a **weight** to be applied to events of that type. By default, the weight is `1`, but you can enter a value ranging from `1` to `5` depending on the importance of the field.   
- **Query context fields**: Fields to be taken into account to generate the intent model.
    Enter the ID of the product catalogue field to be used as filter. For example, `familyName`, `subFamilyName`, etc. The ID must exactly match the product catalogue field.  


## Configuring the Empathize batch process
The [Empathize batch process](/explore-empathy-platform/diagram/microservices/empathize-batch.md) generates a list of possible search queries ([query suggestions](/explore-empathy-platform/features/query-suggestions-overview.md) & [popular searches](/explore-empathy-platform/features/popular-searches-overview.md)). The batch process algorithm selects the candidate terms according to the number of repetitions. Therefore, the higher the number of repetitions, the higher the candidate term position in the list.   

![Configure Empathize](~@assets/media/instance-mgt/config-empathize.svg)

This section determines the basic settings for the job, the pivots and filters applied to candidate queries for greater or less refinement of the suggestions, and the number of suggestions to be generated in the output list.

Pivot fields let you segment the data (in this case, candidate terms) according to a specific context, e.g. by language, country or section. These pivots can then be set up as filters to refine the data. All filters are also created as pivots for the batch process; however, you may decide not to set up a pivot as a filter. The batch process pivots usually correspond to the Tagging microservice's filters.

<!-- TODO Include further explanation on how the Expand and De-duplication batch filters works. See https://github.com/empathyco/ether-batch-common-filters/blob/main/docs/filters.md -->

You can configure these settings for the Empathize batch process:

- **Days**: Number of days to be processed in the job.   
    This determines the date range for which the pre-aggregation data are selected. By default, the batch process takes data for the previous seven days. However, you can set up to 30 days (i.e. previous 30 days) where you find there is insufficient data.
- **Index token**: Token used to authenticate with the Index microservice.   
    Since the output is indexed and stored by the Index service to be retrieved by the frontend, you need to enter a valid token for authentication. If you are unsure of this value, contact [Partner Enablement](mailto:enablement_partners@empathy.co). 
- **Pivot fields**: Product catalogue fields to be used to segment the data used to generate the candidate terms.   
    These fields must have been indexed and should match the **Filters** defined in the [Tagging](configure-tagging.md) microservice and the **Pivot fields** defined in the [Playboard](configure-playboard.md).
    You must include at least **`lang` (language)** as a pivot field.
- **Filter fields**: Product catalogue fields to be used to filter the candidate terms.   
    These fields must have been indexed and have been included as a pivot field in **Pivot fields**, and should match those defined in the [Tagging](configure-tagging.md) and [Playboard](configure-playboard.md) sections. You must include at least **`lang` (language)** as a filter field.
- **Product ID field name**: Name of the product ID field in the product catalogue. The product ID field is used to consult the most clicked products for the terms generated. 
    Here, it must exactly match the field name used in the indexed product catalogue. The default value is `product_id`, but it can be changed according to requirements.
- **Enabled batch filters**: Batch filters to be used to refine the job output for greater precision. Each filter is applied as an independent step in the process. For some filters, you may need to configure additional fields to determine the behavior. 
    - **Blacklist filter**: Excludes any terms that contain a forbidden term from the candidate term list.
    - **Expand term filter**: Expands any partial terms to its closest full term.   
    - **De-duplication filter**: Excludes any duplicated terms from the candidate term list.   
        If you enable this filter, you need to determine the **Similarity threshold**.
    - **Discard filter**: Excludes terms with no results from the candidate term list.

    ::: warning

   Select **at least one batch filter** from the list to refine the job output successfully. Otherwise, all batch filters are enabled by default, which may affect the job results depending on the [tagging events](/explore-empathy-platform/capture-shopper-interaction/interaction-events.html#about-the-tagging-events) captured.

    :::

- **Similarity threshold**: Minimum threshold value to determine whether a term is considered a duplicate or not. By default, the value is `90`; however, you can choose a value between `85` and `100`, as appropriate.   
    You must enter a value for this field if you choose to enable the de-duplication filter.
- **Valid languages**: Languages allowed for the candidate term list.
    This field determines the languages to be used in the job output. It generates a single list of terms for all the languages defined here. You can leave this field empty to generate suggestions for all languages for which there is data. However, ideally it should only contain the language or languages required to avoid unnecessary generation. The language format must match that defined in the [Tagging](configure-tagging.md) microservice and in the [Playboard](configure-playboard.md) configurations.
- **Number of terms to generate**: Determines the number of suggestions created in the output. It limits the number of results by group of pivots. The default value for this field is `2048`. You can enter a value ranging from `512` to `4096` to optimize the batch process, though bear in mind a higher value may cause greater noise.


## Configuring the Query Signals batch process
The [Query Signals batch process](/explore-empathy-platform/diagram/microservices/query-signals-batch.md) generates a list of conversational search suggestions ([next queries](/explore-empathy-platform/features/next-queries-overview.md) and [related tags](/explore-empathy-platform/features/related-tags-overview.md)).

![Configure Query Signals](~@assets/media/instance-mgt/config-query-signals.svg)

This section determines the basic settings for the job, and the pivots and filters applied to candidate queries for greater or less refinement of the conversational search suggestions.

Pivot fields let you segment the data (in this case, candidate terms) according to a specific context, e.g. by language, country or section. These pivots can then be set up as filters to refine the data. All filters are also created as pivots for the batch process; however, you may decide not to set up a pivot as a filter. The batch process pivots usually correspond to the Tagging microservice's filters.

<!-- TODO Include further explanation on how the Expand and De-duplication batch filters works. See https://github.com/empathyco/ether-batch-common-filters/blob/main/docs/filters.md -->

You can configure these settings for the Query Signals batch process:

- **Days**: Number of days to be processed in the job.   
    This determines the date range for which the pre-aggregation data are selected. By default, the batch process takes data for the previous 7 days. However, you can set up to 30 days (i.e. previous 30 days) where you find there is insufficient data.
- **Minimum session count**: Minimum number of sessions in which candidate terms must be used to be considered valid.   
    By default, the candidate term must have been used at least two times in multiple sessions to be included in the list. However, you can set a value as low as `1` (where there are few results), or as high as `5` (where there is too much noise in the results).
- **Index token**: Token used to authenticate with the Index microservice.   
    Since the output is indexed and stored by the Index service to be retrieved by the frontend, enter a valid token for authentication. If you are unsure of this value, contact [Partner Enablement](mailto:enablement_partners@empathy.co). 
- **Pivot fields**: Product catalogue fields to be used as pivots to group the candidate terms.   
    These fields must have been indexed and should match those defined in the [Tagging](configure-tagging.md) and [Playboard](configure-playboard.md) sections. You must include at least **`lang` (language)** as a pivot field.
- **Filter fields**: Product catalogue fields to be used to filter the candidate terms.   
    These fields must have been indexed and have been included as a pivot field in **Pivot fields**, and should match those defined in the [Tagging](configure-tagging.md) and [Playboard](configure-playboard.md) sections. You must include at least **`lang` (language)** as a filter field.
- **Product ID field name**: Name of the product ID field in the product catalogue.
    Here it must exactly match the field name used in the indexed product catalogue. The product ID field is used to consult the most clicked products for the terms generated. The default value is `product_id`, but it can be changed according to requirements.
- **Enabled batch filters**: Batch filters to be used to refine the job output for greater precision. Each filter is applied as an independent step in the process. For some filters, you may need to configure additional fields to determine the behavior.   
    - **Blacklist filter**: Excludes any terms that contain a forbidden term from the candidate term list.
    - **Expand term filter**: Expands any partial terms to its closest full term.
    - **De-duplication filter**: Excludes any duplicated terms from the candidate term list.   
        If you enable this filter, you need to determine the **Similarity threshold**.
    - **Discard filter**: Excludes terms with no results from the candidate term list.

    ::: warning

    Select **at least one batch filter** from the list to refine the job output successfully. Otherwise, all batch filters are enabled by default, which may affect the job results depending on the [tagging events](/explore-empathy-platform/capture-shopper-interaction/interaction-events.html#about-the-tagging-events) captured.

    :::

- **Similarity threshold**: Minimum threshold value to determine whether a term is considered a duplicate or not.   
    By default, the value is `90`; however, you can choose a value between 85 and 100, as appropriate.   
    You must enter a value for this field if you choose to enable the de-duplication filter.
- **Valid languages**: Languages allowed for the candidate term list.
    This field determines the languages to be used in the job output. It generates a single list of terms for all the languages defined here. You can leave this field empty to generate suggestions for all languages for which there is data. However, ideally it should only contain the language or languages required to avoid unnecessary generation.  The language format must match that defined in the [Tagging](configure-tagging.md) microservice and in the [Playboard](configure-playboard.md) configurations.


## Configuring the Top Clicked batch process
The [Top&nbsp;Clicked](/explore-empathy-platform/diagram/microservices/top-clicked-batch.md) batch process generates a feed based on the data included in the Statistics microservice's top&nbsp;clicked report. It generates a list of [recommendations](/explore-empathy-platform/features/recommendations-overview.md) by consolidating the top-clicked products for shoppers and saving the feed in the Index microservice.   

![Configure Contextualize](~@assets/media/instance-mgt/config-top-clicked.svg)

This section determines the basic settings for the job, and the number of results to be generated in the output list.

You can configure these settings for the Top Clicked batch process:

- **Days**: Number of days to be processed in the job.   
    This determines the date range for which the pre-aggregation data are selected. By default, the batch process takes data for the previous 7 days. However, you can set up to 30 days (i.e. previous 30 days) where you find there is insufficient data.
- **Index token**: Token used to authenticate with the Index microservice.   
    Since the output is indexed and stored by the Index service to be retrieved by the frontend, enter a valid token for authentication. If you are unsure of this value, contact [Partner Enablement](mailto:enablement_partners@empathy.co). 
- **Pivot fields**: Product catalogue fields to be used as pivots to group the candidate products.   
    These fields must have been indexed and should match those defined in the [Tagging](configure-tagging.md) and [Playboard](configure-playboard.md) sections. You must include at least **`lang` (language)** as a pivot field.
- **Number of terms to generate**: Determines the number of suggestions created in the output. It limits the number of results by group of pivots. 
    The default value for this field is `2048`. You can enter a value ranging from `128` to `4096` to optimize the batch process, though bear in mind a higher value may cause greater noise.


## Enabling the batch process configuration
Once you have updated the configuration for the specific batch process and clicked **Save**, you need to enable the new configuration by turning on the **Enabled** toggle switch. 



