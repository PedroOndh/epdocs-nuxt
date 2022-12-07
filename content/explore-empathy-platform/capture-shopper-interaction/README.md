---
title: Capture shopper interaction and behavior
tags:
- tagging
- click events
- browse events
- navigation interaction
- search interaction
---

One of the first steps in building a successful, personalized relationship with consumers is to establish shopping preferences and infer shopper intent. These relationships can be inferred by intelligently examining brand shoppers’ aggregate shopping practices while [preserving shopper privacy](understand-tagging.md#privacy-matters).

However, to reach that point where you can examine their behavior, you need to gather data on **what they’re actually doing** in your commerce store, on the **searches they perform**, and **how they navigate your site** —all the signals regarding their behavior that shoppers leave on their journey.

With Empathy, these signals are captured unobtrusively during the tagging process to provide a truly anonymized yet tailored, contextual experience for shoppers. Tagging is the foundation for insights and analytics, and advanced search & discovery features such as contextual search.	

![What is tagging](~@assets/media/tagging/tagging-intro.svg)

To get started with Empathy Platform, first you need to implement tagging: 

1.   [Understand the tagging process](#understand-the-tagging-process)

2.   [Prepare for tagging](#prepare-for-tagging)

3.   [Track shopper interactions](#track-shopper-interactions)

4.   [Integrate tagging in your commerce store](#integrate-tagging-in-your-commerce-store)

::: design TIP

If you want to use **contextual search features** and establish a **baseline to measure search performance**, start collecting data from your current search engine (e.g. most searched terms, clicks, etc.) **before implementing Empathy Platform search**.

:::


## Understand the tagging process
Tagging involves adding snippets of code to your site to track specific shopper interactions. There are multiple benefits to using tagging:

*   Offer advanced search experiences in your store.
*   Get interaction analytics such as CTR, findability, and check-out ratio.
*   Build highly relevant, unique and personalized results based on user affinities, user preferred categories, and last viewed and last purchased products.
*   Collect data so you can infer search intent patterns for each query by analyzing collective behavior.				
*   Track users-on-page behavior to detect patterns and generate relevant products and content for future visitors. 

Curious to learn more? See **[Understand how tagging works and why it matters](understand-tagging.md)**. 


## Prepare for tagging
When preparing your commerce store for tagging, you need to think about what search features you want to use, what interactions you want to collect, and what information you want to be able to analyze and track before integrating in your application.

To get ready for tagging, see **[Prepare to capture shopper interaction](/explore-empathy-platform/capture-shopper-interaction/prepare-tagging.md)**.


## Track shopper interactions 
Once you understand why you need tagging and what information you want to track, you need to identify the types of interactions that best suit your requirements and the events you need to track these interactions.

To learn more about the events you can use for tracking, see **[Track shopper interactions in your store](interaction-events.md)**.


## Integrate tagging in your commerce store
You can integrate with the Tagging microservices using the Tagging REST API. 

<!--
**, via **Javascript library**, or using a **Google Tag Manager template**. How you choose to implement tracking depends on your application and strategy.--> 

For more information, see **[Capture interaction using the Tagging API](/develop-empathy-platform/capture-interaction-signals/README.md)**.

<!-- change note when Interface X supports automatically tagging events -->

::: design TIP  

If you are using the Empathy Platform Interface&nbsp;X frontend, you should add the tagging events when you build your interface.	

:::

::: interact

Check out the [Tagging API reference](/empathy-for-developers/api-reference/tagging-api.md) for a complete reference documentation.

:::


