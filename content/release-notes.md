---
title: Empathy Platform Release Notes
subtitle: Check out the newest features and enhancements
toc: extended
---
<SeasonalRelease :title="'Summer release'" :date="'September 30, 2022'" :season="'summer'">

### Query Results Preview
<PillTheme>PRIVATE, TRUSTED & JOYFUL EXPERIENCE</PillTheme>

Empathy Platform offers a wide catalogue of search and discovery features to anticipate shoppers’ intentions. The **Query Results Preview** feature is now available to drive shoppers to your brand's favorite trends. Now, your search strategy meets your business needs while providing shoppers with new ways to discover products.

With Query Results Preview, you define a query that meets your brand strategy so that shoppers can **preview the related product results at any stage of the search process**: before shoppers type a query, as they type, or even when they come across a search dead end on the results page. 

Version 3.0.0 of the Interface X Components library already supports the related [**UI components**](https://github.com/empathyco/x/blob/main/packages/x-components/src/x-modules/queries-preview/components/query-preview.vue) on GitHub, so that you can layout query results in multiple ways: carousel, grid, list, etc. Offer your shoppers a new search and discovery experience while meeting your business needs. 

**Services impacted:** Interface X for Web

### My History for Web
<PillTheme>PRIVATE, TRUSTED & JOYFUL EXPERIENCE</PillTheme>

After the release of My History for Android, a multichannel search experience is on track to let your shoppers keep playing a totally different game now that the **[My History dashboard](/explore-empathy-platform/features/my-history-overview.html) is supported on desktop devices**. 

Up until now, shoppers had their latest search activity available with [History Queries](/explore-empathy-platform/features/history-queries-overview.html). Now they have their **entire search history** at hand! They can access all their history queries from the very beginning of their relationship with your commerce store. 

My History puts shoppers in [**control of their search history data**](/explore-empathy-platform/features/my-history-overview.html#shopper-s-privacy-matters). They can decide whether they want to store history queries locally on their devices, clear the full list of history queries, or delete just those history queries that are not worth remembering. 

Just upgrade the open-source [Interface X Components for Web library](https://github.com/empathyco/x/tree/main/packages/x-components) to get the new components ready for your store's frontend and [customize the search history experience](/explore-empathy-platform/experience-search-and-discovery/my-history.html#tailor-the-web-experience) at your ease. 

**Services impacted:** Interface X for Web

### Next Queries Preview   
<PillTheme>PRIVATE, TRUSTED & JOYFUL EXPERIENCE</PillTheme>

When dealing with a large set of search results, shoppers presumably have not found what they’re looking for after scrolling the search results for a while. What about amazing them by offering inspiration directly on the SERP using **Next Queries Preview**? 

Next Queries were initially designed to give ideas about what [query to look for next](/explore-empathy-platform/features/next-queries-overview.md). But now, you can **provide inspiration with products that shoppers may be interested in, based on a given next query**. Thus, shoppers can either check a specific next-query product result on the fly, see all the results for the new next query, or stay on the same page and continue scrolling through the initial search results.

The new [**UI component**](https://github.com/empathyco/x/blob/main/packages/x-components/src/x-modules/next-queries/components/next-query-preview.vue) is available on the Interface X Components library on GitHub. Just choose the number of product results you want to appear in the preview and the layout that best suits your needs (list, grid, carousel, etc.) to **make next-query products stand out on the SERP** on desktop and mobile devices.

**Services impacted:** Interface X for Web



### Dark mode in Android
<PillTheme>PRIVATE, TRUSTED & JOYFUL EXPERIENCE</PillTheme>

Dark mode is probably one of the most popular features in terms of UI. Even though dark mode is not for everyone, it has charisma and evokes particular emotions in people (like the search & discovery solutions in Empathy Platform do!). As dark mode As dark mode has become a sought-after feature for everything from apps to operating systems and smartphones to laptops, **Interface X for Android now supports a dark theme for your commerce search app**.

From release 3.0.0, the Interface X for Android library includes **two palette modes: light and dark**. Initially, the library relies on the device’s operating system settings to use a light or dark theme. However, you can make your commerce search app use the dark theme by default, regardless of the shoppers’ preferences. 
Make the search experience more comfortable and enjoyable for those who love shopping from the comfort of their beds or in dimly lit environments by simply supporting a change of the color scheme! 

**Services impacted:** Interface X for Android

### Promotion Management Tool
<PillTheme>MERCHANDISER CENTRICITY</PillTheme>

When dealing with long lists of search results, you may want to highlight and promote certain results on the SERP to feature any ​​advertising campaigns you’re currently running. [**Promotions**](/explore-empathy-platform/features/promotions-overview.md) is then the perfect feature for you! 

Until now, with the [**Promotion management tool**](/explore-empathy-platform/fine-tune-search-and-discovery/use-promotions.md) in the Empathy Platform Playboard, you used to create either **[promotion banners](/explore-empathy-platform/features/promotions-overview.md#promotion-banners) or [promoted results](/explore-empathy-platform/features/promotions-overview.md#promoted-results) on top of the SERP** to redirect your shoppers to specific products, product categories, or promotional landing pages.  

The **new release** of the Promotion management tool now lets you **decide which position** in the search results should occupy, in order to make your promotion stand out. Other configuration options are still available so you can schedule a promotion to run for a determined period, or even disable it temporarily for later use. Start using the Promotions management tool now to directly answer shoppers’ queries and align with your marketing strategy.

**Services impacted:** Playboard | Play user service | Play service

### My Highlights
<PillTheme>MERCHANDISER CENTRICITY</PillTheme>

When it comes to humanizing technology, Empathy.co actively encourages designing enjoyable and human-centered experiences, not only for shoppers but also for merchants. Now, Empathy Platform Playboard includes **My Highlights**, a dashboard that provides a more **personalized and actionable** experience to make the most of your commerce search and discovery.

A new homepage in the Playboard welcomes you with a personalized view that includes different customizable widgets to check what’s happening in your commerce search and take action. You can directly **access your preferred tools** to fine-tune the search experience. Also, you can spot **opportunities** to improve search performance, identify key findings on **search KPIs**, and gain **insight** into the most popular or no-results searches, for example. My Highlights is a personalizable dashboard to display only the widgets and data that are the most suitable for your needs. Now everyone gets a **more human and personal Playboard experience**!

**Services impacted:** Playboard | Statistics service | Statistics batches

### Explain granularity
<PillTheme>MERCHANDISER CENTRICITY</PillTheme>

Explainability is key for merchants and analysts to better understand their commerce search and discovery experiences. The Empathy Platform Playboard’s Explain tool shows you exactly how and which search configurations influence product ranking on the SERP. Playboard version 2.33.0 includes new improvements on the **Expain tool usability and product scoring explainability** that help you perform a deeper analysis of search performance and product discoverability.

Now, you can learn which specific catalogue configurations and business rules applied using the Empathy Platform Playboard tools are affecting product scoring. The **bar chart** in the Explain tool provides a quick view of product ranking with a color-coded breakdown of product scoring just by hovering. **Product cards** offer information on product position, product scoring criteria, and overall product scoring. The **product score panel** provides a granular breakdown of scoring criteria.  **The more product scoring granularity, the better** to understand the whys of product ranking and take action to create a more relevant search and discovery experience.

**Services impacted:** Playboard | Search service

### Equalize revamp
<PillTheme>MERCHANDISER CENTRICITY</PillTheme>

The Equalize tool in the Empathy Platform Playboard is all about transparency and merchant centricity, exposing the search configurations available to optimize search and discovery relevance with no-code controls. Now, Equalize includes new **configuration settings and criteria** to give you even more control over the products your shoppers see for any query and their position on the results page.

Until now, Equalize essentially allowed you to set weights to multiple product catalogue attributes and preview how products were sorted based on those **weight criteria**. The Equalize configuration tool has evolved so that you can create and run **multiple equalize configurations simultaneously** based on specific scenarios. All this is done while implementing **three ranking criteria**: textual match, global business rules, and function score. 

Note that all improvements and new implementations fit seamlessly in the Equalize UI, thanks to a **renewed interface design** that eases your search configuration experience with a **new results preview** to test how efficiently your business strategy aligns with your shoppers’ needs. Now, you can enjoy improving product findability and relevance with a better product ranking configuration that goes beyond just keyword matching.

**Services impacted:** Playboard | Search service


### Empathy Platform Roadmap
<PillTheme>TEAM & TECH PRESENTATION</PillTheme>

**Transparency** is a core value at Empathy.co that is used to **build trust**. There’s no better way to cultivate our trustworthy relationship with you than sharing our **vision for the future** of Empathy Platform. You are welcome to discover our development strategy by exploring the **[Empathy Platform Product Roadmap](/roadmap)**, which is available in the Empathy Platform Docs portal. 

The product roadmap sheds light on the vision and the direction for Empathy Platform and how it has evolved over time. Two different views (radar and list) allow you to check out the most important development initiatives **Empathy is working on to enhance Empathy Platform**, see the **ideas that Empathy is exploring** to push the limits of the search and discovery experience, and discover the **evolutions that have already been implemented** and are now part of the Empathy Platform’s features catalogue. The roadmap is the **source of truth** about how Empathy Platform continues to develop commerce search and discovery experiences built for trust. 

**Services impacted:** Empathy Platform Docs  

<CloseLink title="Learn more about the Summer release" to="/changelog.html?start=2022-07-01&end=2022-09-30"></CloseLink> 

<!--

### Privacy Board
<PillTheme>PRIVATE, TRUSTED & JOYFUL EXPERIENCE</PillTheme>  

You know that Empathy Platform is the only **privacy-first search & discovery platform** that builds brand trust. It gives your shoppers the power to decide what, when, and how to share their data when using your commerce search. But now it also offers you the tools to prioritize your shoppers’ privacy and build relationships based on trust and transparency: **the new Privacy Board in Empathy Platform Playboard**!

You can analyze your privacy performance, identify potential risks, and highlight areas for improvement to walk the privacy walk. You can scan your commerce site for trackers and check your **tracking compliance**. Access a detailed **privacy timeline** with the most relevant developments around privacy. Check out the **newsfeed** for privacy-related tips and resources. You can even get in touch with **privacy experts** to ask about privacy-related matters. In other words, get insights on data protection and privacy policies to **turn privacy into an opportunity**, not a blocker when building unique and respectful search experiences for your shoppers.

**Services impacted**: Playboard

-->

</SeasonalRelease>

<SeasonalRelease :title="'Spring release'" :date="'June 30, 2022'" :season="'spring'">

### My History
<PillTheme>PRIVATE, TRUSTED & JOYFUL EXPERIENCE</PillTheme>  

When dealing with large product catalogues, sometimes shoppers’ journey to a product isn’t a straight one, making it hard to remember which products they found and the search trail several days after. It becomes even more complicated when only a limited number of the most recent searches are shown in the search predictive layer. My History provides your shoppers with a **complete list of all their previous searches** and helps them to easily find products they liked in the past. 

My History allows shoppers to **have full control of their history data**. They can choose whether they want to turn on or off history data. Search history is only **stored locally** on the browser storage; it never travels outside of the shopper’s device. If My History is disabled, new queries are no longer stored and the current history is fully cleared.

Search history data is displayed by date. Shoppers only need to scroll down the search history and select the query they were looking for to get to the products they want. They can clear the complete list of history queries or just delete one or more specific queries. Let your shoppers decide **when and which search history entries are worth remembering**.    

**Services impacted:** Interface&nbsp;X&nbsp;for&nbsp;Android


### Accessibility in Interface X
<PillTheme>PRIVATE, TRUSTED & JOYFUL EXPERIENCE</PillTheme>  

Interface‌‌&nbsp;X for Web is evolving with accessibility in mind. Web accessibility refers to the practice of building websites that can be used by anyone—be that people with disabilities, a slow connection, outdated or broken hardware, or simply someone in an unfavorable environment. **Interface&nbsp;X for Web has been upgraded** to include the [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) plugin in the Interface&nbsp;X [ESLint package](https://github.com/empathyco/x/tree/main/packages/eslint-plugin-x) for **checking accessibility rules in your search UI project**.

Now, you can automatically **surface any accessibility** issues as they pop up when building your search UI with Interface X Archetype and Interface&nbsp;X&nbsp;Components. It’s time to make your commerce search fully **compliant with web content accessibility principles**!

**Services impacted:** Interface&nbsp;X&nbsp;for&nbsp;Web

### Related Tags: graph algorithm and fallback
<PillTheme>PRIVATE, TRUSTED & JOYFUL EXPERIENCE</PillTheme>  

Offering relevant suggestions makes the difference between an average shopping experience and a truly great experience. The Related Tags feature has been enhanced to include a **new algorithm for generating organic related tags** and a **fallback solution to enrich the number of related tags** offered. 

Until now, organic related tags were calculated based on **direct query pairs** (two consecutive queries) used in a single shopper session. While this approach increased the specificity of the suggestions generated, it limited any derivations that could be made from shopper behavior, and in short, limited the number of organic related tags generated. The new graph algorithm in the Query Signals batch process results in **new relationships between queries that previously weren’t considered**, as well as the possibility of wider step size. This means that exploring the entire graph of connections between queries increases significantly the extent of related tags, leading thus to new discoveries for shoppers. 

A fallback mechanism has now been introduced in the Beacon API to **increase the number of related tags displayed to shoppers**. Previously, if there were no organic related tags or curated related tags from the Empathy Platform Playboard for the query, no search refinement suggestions were shown, leading to lower queries per session and less shopper guidance. The new function takes **top attributes from contextualization** in the event of no organic or curated related tags are available for the query and adds them as **enriched related tags**.

**Services impacted**: Beacon API | QuerySignals batch process

### Contextualize search with pivots
<PillTheme>PRIVATE, TRUSTED & JOYFUL EXPERIENCE</PillTheme>  

When talking about truly anonymized search experiences, the **Contextualize** service is the cherry on top of Empathy Platform. Contextualize allows you to develop **dynamic relevance models**, based on behavioral patterns, to **match your shoppers’ intent**. 

Up until now, you could use interaction data for each query to discover the most valued product attributes (e.g. the most popular _sizes_ and _colors_ for the query _jeans_). Now, the Contextualize service has been **enhanced to support pivots that narrow data down into even more discrete groups**. It means you can now **dig even deeper into data** and get query context information broken down by a particular pivot, for example, a specific category. Data can now tell you which sizes and colors are the most popular for the category _woman_, _man_, or _kids_, regarding the query _jeans_. So, the products that match the query and meet your shoppers' preferences will rank higher on the SERP, depending on whether they are for women, men, or kids. In other words, using pivots in the contextualization process translates into an **improved product positioning to best align with your shoppers’ intent**. 

**Services impacted**: Contextualize service | Contextualize batch process | Search service

### Activity Stream: Playboard engagement
<PillTheme>MERCHANDISER CENTRICITY</PillTheme>  

Transparency is key to grasping the whole picture, and with the Activity Stream Engagement Metrics, there are no mysteries as to where modifications come from. The Activity Stream shows a **complete audit history** of all the actions performed by users in your organization in the Empathy Platform Playboard, all in an intuitive interface. 

The Activity Stream has been updated to allow you to view, for example, who edited an Equalize configuration last, when a synonym configuration was deleted, and even which Playboard tools are used most. 

You can **filter engagement metrics by date range, tool, and action**. You can explore engagement with Analytics, Insights, Explain, and Play tooling, viewing the number of **interactions and views** of each tool or data visualization. What’s more, you can use the search box to **quickly pinpoint actions** performed by specific users or in given tools.

All actions are listed in the stream, giving you **concrete data on the who, when, and what**. In other words, discover who performed the action, the type of action, the time when it was done, and more importantly, the **attribute or attributes that have been changed**. Greater transparency over your merchandising tools means greater control over your search and discovery experience!

**Services impacted**: Playboard | Play user service | Play service

### Query Ranking enhancements  
<PillTheme>MERCHANDISER CENTRICITY</PillTheme>  

Query Ranking is the core of the Merchandiser’s toolkit. So what better way to empower merchandisers than to level up its performance!

When it comes to the online search experience, speed is of the essence. Previously, merchandisers could only boost or bury products one by one from the Preview grid, slowing down their response to changing shopping/merchandising conditions. With [**Quick Boosting**](/explore-empathy-platform/fine-tune-search-and-discovery/use-query-ranking.md), merchandisers can now **boost or bury multiple products at the same time**, choosing specific filters and schedules that apply to all the products in the selection. Merchandisers can then select a date and filters in the Preview grid to get a snapshot of the product ranking in the search experience on the date selected.

For greater control over the ranking experience, merchandisers can now limit **query ranking configurations by role**. Until now, permissions to access the feature were determined at a global level for all users, meaning that any user with access to the feature could add, edit, or delete a query ranking configuration. By turning on the Restricted switch, merchandisers can now **lock specific configurations** so that only users with the same level of permissions or the admin can make changes to existing query ranking configurations. 

**Services impacted**: Playboard | Play user service | Play service

### Performance by Category
<PillTheme>MERCHANDISER CENTRICITY</PillTheme>  

As a merchandiser, you need to know the **most clicked products for a category** to detect any possible downward trends in product performance before they happen so you can take action quickly. 

The Insights **Performance by Category** data viz **displays queries by category** in an interactive tree map. You can explore the query breakdown by subcategories, quickly identify the top search terms for the category, and **see the category’s performance** for each query in terms of **findability** and **add-to-cart**. What’s more, you can **download the data** for any category for reporting purposes.

**Services impacted**: Playboard | Statistics service

### Navigation Metrics  
<PillTheme>MERCHANDISER CENTRICITY</PillTheme>   

The search experience is not the only way for shoppers to reach out for the products they are looking for. Navigation is indeed a powerful tool! So, aren’t you curious about **how the discovery experience is performing in your commerce store**? Now, you can access browsing-related data and analytics with the new **Navigation Metrics tool**.

The new analytics tool in the Empathy Platform Playboard’s Discovery tab displays the **top product categories** in your commerce store in an interactive tree map. You can analyze product categories based on **views, average click position, interactions, findability, add-to-cart, and checkout**. What’s more, switch to the Table view to see the metrics for all product categories and download an **effective analytics report**. Use Navigation Analytics to truly **optimize your shoppers’ discovery experience** and meet your business needs at a time! 

**Services impacted**: Playboard | Statistics service

### Instance Management   
<PillTheme>TIME TO PRODUCTION</PillTheme>  

By empowering Empathy partners to **extend the platform beyond the core functionality** to respond to the market’s requirements, Empathy Platform allows brands to craft personalized search and discovery experiences. 

The [**Instance Management**](/explore-empathy-platform/configure-empathy-platform/) tool is the first step to allowing partners to build a tailored solution. The **no-code experience tool** lets partners configure and set up the Empathy Platform instance, including the individual microservices such as the Tagging and Search microservices, the Playboard, and the Conversational services.

Partners can request a new instance for a client directly from the Empathy Platform Playboard, [configure the data that the Tagging microservice](/explore-empathy-platform/configure-empathy-platform/configure-tagging.md) will receive from the frontend, and view the [settings used to calculate reporting metrics](/explore-empathy-platform/configure-empathy-platform/configure-reporting-settings.md) such as queries, clicks, add-to-carts, and keywords. They can personalize the Playboard with the brand identity, [set up the Playboard](/explore-empathy-platform/configure-empathy-platform/configure-playboard.md) to connect to the Search microservice, and choose the features to be used. They can determine [how the Conversational services generate suggestions](/explore-empathy-platform/configure-empathy-platform/configure-conversational-services.md), and build the entire [configuration of the Search service](/explore-empathy-platform/configure-empathy-platform/configure-search-service.md) from scratch.

**Services impacted**: Playboard | Play service | Search plugin | Search service | QuerySignals batch process | Empathize batch process | Contextualize batch process
| Statistics batches | Tagging service

### X Adapter & X Adapter for Platform
<PillTheme>TIME TO PRODUCTION</PillTheme>

Every search ecosystem needs a UI for a successful conversation between shoppers and the search engine. This conversation happens thanks to a **search adapter that connects the frontend components to any API to retrieve search data**. That’s why the search adapter has been revamped to support Empathy Platform out of the box. Now, the search adapter is **Empathy Platform ready**! 

Two search adapter libraries are available: **X&nbsp;Adapter** and **X&nbsp;Adapter for Platform**. If you are implementing the full Empathy Platform ecosystem, you use the X Adapter for Platform to connect the Interface&nbsp;X&nbsp;Components with the Empathy Platform microservices. But if you want to use the Interface&nbsp;X&nbsp;Components with any other search API, you need the X&nbsp;Adapter.
 
The adapter is divided into different pieces to reduce the bundle size: **one piece per endpoint**. The bundle now includes just the components and endpoint connections you need. What’s more, the adapter has been refactored to allow mapping functions based on schemas. In other words, you now can **easily configure** the adapter according to your requirements.

**Services impacted:** Interface&nbsp;X&nbsp;for&nbsp;Web

<CloseLink title="Learn more about the Spring release" to="/changelog.html?start=2022-04-01&end=2022-06-30"></CloseLink>  

</SeasonalRelease>