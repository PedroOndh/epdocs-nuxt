---
title: Getting started with the Playboard
sidebar_title: Playboard
tags:
    - playboard
    - instance
    - permission

---

The Empathy Platform Playboard is the set of tools to adapt, understand, and optimize your search and discovery experience. It allows merchandisers to play with the commerce search and discovery experience and adapt it to their business needs, reducing the distance between shoppers and the catalogue.


![Empathy Platform Playboard](~@assets/media/features/overview-playboard.svg)

<FootNote>

**Playboard layout** - (A) Catalogues (instances), (B) Playboard menu, (C) Account, and (D) Logout.

</FootNote> 
</br>

The Playboard layout has three main sections:
- [**Instances**](#instances)
- [**Playboard menu**](#playboard-menu)
- [**Account & Logout**](#global-features)


## Instances
Click the **Instance tab** in the top right corner of the Playboard to display the **Instance panel** with all the available instances (A). You can also click the icon in the top left corner above the Playboard menu to return to the **Instance landing page**.

Some organizations may have several product catalogues. Each catalogue is represented by an instance in the Playboard. You can have as many instances as catalogues you have access to.


## Playboard menu
The left-side menu serves as the entry point for all of the Playboard’s tools and features (B). The menu is divided by two tabs: [**Search**](#search-features) and [**Navigation**](#navigation-features). Each of them have their own set of tools. Use the arrow icon on the upper right side of the menu to collapse or expand it.

::: note

According to your role, you may have access to different features, and have permissions to perform certain actions. See [Notes on Playboard permissions](#notes-on-playboard-permissions) to learn more.

:::

### Search features
All the analytics, insights, and tools related to search are displayed together in the Search tab of the Playboard menu. They are grouped by type: 

- [**Analytics**](/explore-empathy-platform/analyze-search-and-discovery/README.md#analytics): Provides useful metrics and KPIs to view users, queries, and sessions in your search. Analytics includes the **Overall** and **Queries** reports.

- [**Insights**](/explore-empathy-platform/analyze-search-and-discovery/README.md#insights): Offers powerful and inspiring data visualizations that will help you understand search better and provide an upper-hand on trends to help you make informed decisions. The Insights landing page includes data visualizations such as **Now**, **Origins**, and **Terms**.

- [**Play**](/explore-empathy-platform/fine-tune-search-and-discovery/README.md): Includes tools to control search configurations and impact search rules and the organic order of search results. The Play tools include **Equalize**, **Synonymize**, **Blacklist**, **Promotion**, **Redirection**, **Query ranking**, **Related tags**, and **Next Queries**.

- [**Explain**](/explore-empathy-platform/analyze-search-and-discovery/use-explain.md): Gives detailed information on each product’s score and shows how shoppers see the results on the SERP, so you can take the necessary actions in case you need to alter how search products are ranked.

### Navigation features
Navigation is another of the main aspects of your commerce store. Use the Playboard to monitorize and fine-tune the navigation experience in your store.

- [**Play**](/explore-empathy-platform/fine-tune-search-and-discovery/README.md#navigation-experience-configuration-tools): Includes the **Configuration** tool, which you can use to modify facet names and boost and bury products and product attributes on the page navigation.


## Global features
Apart from the specific Search and Navigation features, the Playboard includes tools to manage actions performed in the Playboard. 

- **Activity Stream**: Shows all the actions performed in the Playboard by users in your organization. These actions include changes made using the Search and Navigation tools, importing new catalogues, and modifications to the instance configuration.

- **[Instance management](/explore-empathy-platform/configure-empathy-platform)**: Lets you configure and set up the Empathy Platform instance, including all microservices.   
    ::: warning
    This tool is available for **Empathy Partners only**. Check with your Empathy Alliance representative if you think you should be able to access this tool.
    :::

- **Account**: Lets you edit your user account for the Playboard (C). Set up your first name, last name, and password.

- **Logout**: Closes your user session in the Playboard (D).

---

## Notes on Playboard permissions
Depending on the features you have enabled in your Empathy Platform implementation, the Playboard displays different features. Access to these features is determined at instance and feature level. In other words, for each instance, access to each feature is determined separately.        

Your organization decides the roles and permissions assigned to each user. All Playboard implementations have an admin role that provides access to all features. However, organizations may decide to create additional user roles as required and assign feature permissions to that role accordingly.
There are three permission levels that can be assigned for each feature:

- **Write**: you can view and perform actions.
- **Read**: you can view the screen, but cannot perform any actions.
- **No access**: you cannot access or view the screen. 

For example, if you are a merchandiser, you may have write permissions for a number of features like Synonymize and Related Tags, but no access to the Insights data visualizations. If you are an analyst, you may have full access to features that provide data such as Analytics, Insights, and Explain, but no access to Play tools.

::: note Important 

The Empathy Platform Playboard may look different according to the permissions assigned to your role.

::: 

