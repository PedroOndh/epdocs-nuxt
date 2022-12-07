---
title: Contextualize microservice

---

::: slot description

Improving shopper experience with dynamic relevance

:::

::: slot remark
The Contextualize microservice customizes the discovery experience by presenting the perfect set of relevant results through **dynamic relevance models**. These relevance models, called **intent models**, improve the positioning of products so that shoppers can find what they are looking for based on the wisdom of the crowd. 

The intent models are based on two dimensions for a given query: **returning top product** and **top product attribute** weighted models. 

Based on the product attributes that are considered to be more significant for your business needs, the Contextualize microservice, via the Contextualize batch process, generates the relevancy models for a query using the anonymized information collected by the [Tagging microservices](tagging-service) on product interaction, through searches and navigation. Contextualize then determines the values or attributes that should be weighted higher for such fields, calculating specific product scores for the wisdom of the crowd. Once the different intent models are generated, they are ready to be accessed by the [Search microservice](search-service), to be applied at query time and dynamically change the ordering of the results.

Additionally, you can **adapt product relevancy** to connect shoppers with your product catalogue using the [Empathy Platform Playboard's tools](../play/play-tooling). Change the order of product results on the search engine results page by modifying the weight of different product attributes and boosting and burying product positioning, for example.

::: 

