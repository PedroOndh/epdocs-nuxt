---
title: Configure Empathy Platform
tags:
    - instance management
    - configuration management
    - configuration management tool
    - configuration management console
    - CMC
---

Instance Management is a **no-code experience tool** included in the [Empathy Platform Playboard](/explore-empathy-platform/overview/playboard-overview.md). It lets you configure and set up the Empathy Platform instance, including the microservices.

An instance represents a customer implementation or one of the customer’s product catalogues.

::: warning Important

This tool is available for **Empathy Partners only**. Check with your Empathy Alliance representative if you think you should be able to access this tool.

:::

<br>

![Instance Management](~@assets/media/instance-mgt/config-EP.svg)


## Getting started with Instance Management

The Instance Management tool in the Empathy Platform Playboard lets you request a new Empathy Platform instance for a customer and configure the settings for the Tagging, Statistics, Conversational, and Search microservices. You can set up the Playboard and adjust the features available. You can view and manage the configuration of existing instances as required.

::: warning
Only Playboard users with **administrator permissions for Instance Management** can request and edit instance configurations.
:::

To facilitate the process in setting up each microservice, instance configuration is divided into five key areas:
- **Tagging**: Determines the parameters sent in the events to the Tagging microservice and the validations performed on [tagging events](/explore-empathy-platform/capture-shopper-interaction/interaction-events.md). 
- **Statistics**: Displays the settings that are used to report metrics in the Statistics microservice.
- **Playboard**: Customizes the dashboard for the customer and links the Playboard to the Search & Tagging microservices.
- **Conversational services**: Determines the settings for the batch processes that generate suggestions and intent models for contextualization.
- **Search**: Configures the features and endpoints to be used by the Search microservice. 

In some cases, you may only need to complete the fields when you configure the microservices for the first time. In other cases, you can change the settings as required to modify the microservice’s behavior.

The **Instance ID** for the customer’s implementation is displayed in the right side of the window.

::: warning Important
The microservices that have not be configured and enabled are indicated in the side menu as **Disabled**. As you complete the configuration for each microservice, you need to enable each microservice individually using the **Enabled** toggle switch. If you choose to disable a microservice at any stage (e.g. you don’t want to use the conversational services), the status of the corresponding microservice is indicated in the side menu.
:::

:::interact
For a snapshot of how the microservices interact in Empathy Platform, check out the **[interactive map](/explore-empathy-platform/diagram/microservices)**.
:::


### Steps to request and set up the instance
If you want to create an instance for a new customer, you need to complete these steps:

1. **[Request a new instance](request-instance.md)**
2. **[Configure the tagging settings](configure-tagging.md)**
3. **[View reporting settings for Stats API](configure-reporting-settings.md)**
4. **[Configure the Playboard](configure-playboard.md)**
5. **[Configure the conversational services](configure-conversational-services.md)**
6. **[Configure the search microservice](configure-search-service/readme.md)**  