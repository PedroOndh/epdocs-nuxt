---
title: Previous Weekly Updates
if_true: dev
---

## December 30, 2021

- Updated **[UI reference](/develop-empathy-platform/ui-reference)** including new modules and X Components (*content available in Production*)
- Updated links in **[Build your search UI for web](/develop-empathy-platform/build-search-ui/)** (*content available in Production*) 
- Updated content on **[Terms data visualization](/explore-empathy-platform/analyze-search-and-discovery/use-terms.md)**, including graphical assets (*content now available in Production*)
- New graphical assets for  **[Insights](/explore-empathy-platform/features/insights-overview.md)** and **[Prepare to capture shopper interaction](/explore-empathy-platform/capture-shopper-interaction/prepare-tagging.html)** (*content available in Production*)
- New **[interactive map layer for Infrastructure](/explore-empathy-platform/diagram/infrastructure/)** (*content available in Production*)
- New **hover animation** for the homepage 
- Updated **sidebar sections and URLs** for an improved user experience 
- **Code refactor** for interactive map to improve code readability and performance
- Added **feature flags** that condition content visibility according to Next / Previous page navigation
- Improved behavior of **Next page/Previous page navigation elements** to disable page navigation for featured content pages or sections
- New **staging environment** to test feature flags performance and preview production environment


## December 16, 2021

- Updated **[API reference](/develop-empathy-platform/api-reference)** landing page to feature published APIs (*content now available in Production*)
    - New **[IndexBuilder API](/develop-empathy-platform/api-reference/index-api.md)**
- New content on **Insights** and **Terms** data visualization:
    - New page **[Visualizing search trends with Terms](/explore-empathy-platform/analyze-search-and-discovery/use-terms.md)**
    - New page **[Insights](/explore-empathy-platform/features/insights-overview.md)**
- Updated content on the **[Explain](/explore-empathy-platform/analyze-search-and-discovery/use-explain.md)** tool, including graphical assets (*content now available in Production*)
- Updated **[Integrate Tagging API](/develop-empathy-platform/capture-interaction-signals/tagging-api-guide.md)** page to mention recommendations on the events to incorporate in each location 
- Updated **[Latest News](/latest-updates.md)** page to feature the Explain tool 
- Updated design and behavior of **Next page / Previous page navigation element** to navigate between content for the same section only
- Added **feature flags** that determines content visibility by environment:
    - Content conditioning at block and page level
    - Conditioned pages hidden from sidebar and shown as 404 page
- Improved **usability of long titles** & other issues in the sidebar
- Bug fixes: header remains static when readers scroll slightly


## December 2, 2021

- New page **[Analyze search & discovery experience](/explore-empathy-platform/analyze-search-and-discovery/README.md)**, incorporating information on analytics and insights tools. (*content available in Dev environment only*)
- New & updated content on the **Explain** tool and product scoring.(*content available in Dev environment only*)
    - New page **[Explain overview](/explore-empathy-platform/features/explain-overview.md)**
    - New page **[Understand search results using Explain](/explore-empathy-platform/analyze-search-and-discovery/use-explain.md)**
    - Updated content in **[Product scoring](/explore-empathy-platform/overview/product-scoring.md)** page
- Updated design in **[About Empathy Platform](/about-empathy-platform.md)** page
- New link in the sidebar to the **Empathy Github** account
- Updated **[Latest News](/latest-updates.md)** page to feature tagging integration


## November 18, 2021

- New & updated content on **tagging** (*available in Production*): 
    - New page **[Prepare to capture shopper interaction](/explore-empathy-platform/capture-shopper-interaction/prepare-tagging.md)**
    - Updated **[Capture shopper interactions and behavior](/explore-empathy-platform/capture-shopper-interaction/)** landing page
    - Restructured **[Understand how tagging works and why it matters](/explore-empathy-platform/capture-shopper-interaction/understand-tagging.md)** 
    - Updated **[Capture interactions with the Tagging API](/develop-empathy-platform/capture-interaction-signals/)** landing page with revised content and graphical asset 
    - Updated content in **[Integrate Tagging using API](/develop-empathy-platform/capture-interaction-signals/tagging-rest-api-guide.md)** page
- New **[About Empathy Platform](/about-empathy-platform.md)** page linked from the main sidebar, incorporating information on platform infrastructure and Empathy Platform Docs. New logo for Empathy Platform docs
- Improved user experience:
    - New **[Develop Empathy Platform](/develop-empathy-platform/)** landing page, featuring cards to link to each topic
    - New card to link to the Tagging API in the **[API reference](/develop-empathy-platform/api-reference)** landing page (*content now available in Prod environment*)
    - New cards to link to topics in the **[Explore Empathy Platform](/explore-empathy-platform/)** landing page.
- API Reference: 
    - Added **[Search API](/develop-empathy-platform/api-reference/search-api.md)** (content in *as-is* state and *available in Dev environment only*)
    - Removed irrelevant Beacon API documentation to include only the **[Beacon API reference](/develop-empathy-platform/api-reference/beacon-api.md)** (*content available in Dev environment only*)
- Bug fixes: 
    - Clarified text regarding the **[use of IP addresses by the Tagging microservices](/explore-empathy-platform/capture-shopper-interaction/understand-tagging.md#privacy-matters)** to indicate that IP addresses and user-agents are not logged by the service.

## November 4, 2021

- New section **[Capture shopper interaction using the Tagging API](/develop-empathy-platform/capture-interaction-signals/)**, including [Integrate Tagging using REST API](/develop-empathy-platform/capture-interaction-signals/tagging-rest-api-guide.md) (*content available in Dev environment only*)
- Updated **[eDocs home page](/readme.md)** so that users can select the types of content they are interested in: Explore or Develop Empathy Platform
- New **[Explore Empathy Platform](/explore-empathy-platform/)** landing page, including Empathy Platform interactive map.
- Updated **custom blocks** component to better understand the type of information contained in special notices such as notes and warnings
- Added **[Beacon API](/develop-empathy-platform/api-reference/beacon-api.md)** (content in *as-is* state and *available in Dev environment only*)
- Bug fixes: now carousel feature allows interaction and navigate to the corresponding detail page when there are more than three carousel elements displayed

## October 21, 2021

- Add new section **[Build your search UI for native apps](/develop-empathy-platform/build-search-ui-apps/)**, including [Integrate Interface X Archetype for Android](/develop-empathy-platform/build-search-ui-apps/apps-x-archetype-integration-android.md), [Integrate Interface X Components for Android](/develop-empathy-platform/build-search-ui-apps/apps-x-components-integration-android.md), and [Use Interface X Components for Android library](/develop-empathy-platform/build-search-ui-apps/apps-use-x-components-android.md)
- Updated **[Experience Search & Discovery](/explore-empathy-platform/experience-search-and-discovery)** landing page and subpages to mention Interface&nbsp;X&nbsp;Components for Apps
- Updated **[Latest News](latest-updates.md)** to feature Interface&nbsp;X&nbsp;Components for Apps
- Updated **[Build your search UI for web](/develop-empathy-platform/build-search-ui/)** landing page to include new graphical asset and layout
- Added **[Statistics API](/develop-empathy-platform/api-reference/statistics-api.md)** (content in *as-is* state and *available in Dev environment only*)
- Updated **[Synonyms](/explore-empathy-platform/features/synonyms-overview.md)** and **[Spellcheck](/explore-empathy-platform/features/spellcheck-overview.md)** overview pages to incorporate SME feedback
- New **[video component](/develop-empathy-platform/build-search-ui/web-x-components-integration-guide.md#next-steps)** that handles both local hosted videos in MP3 & WEBM format and external video links and features text and links
- Bug fixes: Interactive map now scales correctly in iOS mobile, sidebar automatically omits empty contents  


## October 7, 2021

- Added **[Beacon API](/develop-empathy-platform/api-reference/beacon)** and associated documentation (content in *as-is* state and *available in Dev environment only*)
- Added **[Play API](/develop-empathy-platform/api-reference/play-api.md)** (content in *as-is* state and *available in Dev environment only*)
- Updated **[Tagging API](/develop-empathy-platform/api-reference/tagging-api.md)** to change to read-only format, i.e. no server information or test option (*available in Dev environment only*)
- Updated **[X Archetype project integration](/develop-empathy-platform/build-search-ui/web-archetype-integration-guide.md)** and **[X Components library integration](/develop-empathy-platform/build-search-ui/web-x-components-integration-guide.md)** guides
- Sidebar is now automatically updated when new content is added
- Informational message added to search bar to indicate when no page titles have been found that match the search query entered
- New feature carousel implemented in **[Search Basics](/explore-empathy-platform/overview/)** & **[Search Features](/explore-empathy-platform/features/)** pages with interaction tracking
- New graphical asset in [Pagination](/explore-empathy-platform/overview/pagination-overview.md)
- New functionality to allow **selective deployment** of contents in Production environment
- *Bug fix*: Fixed the interaction in the live examples in the [UI Reference](/develop-empathy-platform/ui-reference) so that when the user clears the search box using the backspace, the first character is not automatically populated.  


## September 23, 2021

- Updated **[Build your Search UI for web](/develop-empathy-platform/build-search-ui)** landing page to incorporate new archetype integration, including: [X Archetype project integration guide](/develop-empathy-platform/build-search-ui/web-archetype-integration-guide.md), [X Components library integration guide](/develop-empathy-platform/build-search-ui/web-x-components-integration-guide.md) and [Use & configure X Components](/develop-empathy-platform/build-search-ui/web-use-x-components-guide.md)    
- Minor revision of updated **[UI Reference](/develop-empathy-platform/ui-reference)** documentation for X Components to remove broken links and add section landing pages (content in *as-is* state)
- **[Tagging API](/develop-empathy-platform/api-reference/tagging-api.md)** updated to include filter parameter definition (*available on Dev environment only*)
- New go-to-top feature in eDocs portal for desktop and mobile devices. 
- New graphical assets included in [Facets & filters](/explore-empathy-platform/overview/facets-and-filters-overview.md), [Facets & Filters UI](/explore-empathy-platform/experience-search-and-discovery/facets-and-filters.md), [Equalize](/explore-empathy-platform/features/equalize-overview.md), [Sorting](/explore-empathy-platform/overview/sorting-overview.md), [Search Bar UI](/explore-empathy-platform/experience-search-and-discovery/search-box.md) 
- *Bug fixes*: attribute ranking GIF image fixed and broken link in the Play layer of the interactive map corrected

## September 9, 2021

- New overview content for [Blacklist](/explore-empathy-platform/features/blacklist-overview.md) search feature
- [UI Reference](/develop-empathy-platform/ui-reference/) content is now automatically synchronized with [X GitHub repository](https://github.com/empathyco/x) documentation for X Components. Documentation shown in *as-is* state and may be incomplete
- Sidebar updated to match the structure of the retrieved technical documentation
- Updated SFC syntax component that allows developers to copy code written in UI Reference live examples
- New Cookie-free & Beta banners that appear when user visits the site the first time

## August 26, 2021

- New overview content for Search features:   
    [Sorting](/explore-empathy-platform/overview/sorting-overview.md)   
    [Pagination](/explore-empathy-platform/overview/pagination-overview.md)
- Updated [Facets & Filters](/explore-empathy-platform/overview/facets-and-filters-overview.md) overview
- Updated [Facets & Filters](/explore-empathy-platform/experience-search-and-discovery/facets-and-filters.md) X&nbsp;Component overview
- New API reference for [Tagging](/develop-empathy-platform/api-reference/tagging-api.md)
- Improvements in the search tool in mobile devices
- The in-page navigation menu now is static when scrolling in desktop devices
- Improvements in readability of the interactive map thumbnails

## August 12, 2021

- Release to [Production](https://docs.empathy.co/) of the eDocs portal
- New overview content for Search features:
    [Equalize](/explore-empathy-platform/features/equalize-overview.md)
- New content to explain how product scores are calculated: [Product Scoring](/explore-empathy-platform/overview/product-scoring.md)
- Improvements in responsive design of the interactive map
- New graphic assets for [Product ranking](/explore-empathy-platform/features/product-ranking-overview.md), [Attribute ranking](/explore-empathy-platform/features/attribute-ranking-overview.md), [Synonyms](/explore-empathy-platform/features/synonyms-overview.md), [ID Results](/explore-empathy-platform/experience-search-and-discovery/id-results.md), [Recommendations](/explore-empathy-platform/experience-search-and-discovery/recommendations.md),  [Popular Searches](/explore-empathy-platform/experience-search-and-discovery/popular-searches.md), and [History Queries](/explore-empathy-platform/experience-search-and-discovery/history-queries.md).
- Proposal for automatic synchronization of dev repository documentation


## July 29, 2021
- New content in the Empathy Platform Interactive Map   
    - **[Microservices layer](/explore-empathy-platform/diagram/microservices)** ([Index service](/explore-empathy-platform/diagram/microservices/index-service.md), [Search service](/explore-empathy-platform/diagram/microservices/search-service.md), [Contextualize service](/explore-empathy-platform/diagram/microservices/contextualize-service.md), [Tagging service](/explore-empathy-platform/diagram/microservices/tagging-service.md), [Statistics service](/explore-empathy-platform/diagram/microservices/stats-service.md), [Play service](/explore-empathy-platform/diagram/microservices/play-service.md))   
    - **[Play layer](/explore-empathy-platform/diagram/play)** ([Analytics](/explore-empathy-platform/diagram/play/play-analytics.md), [Insights](/explore-empathy-platform/diagram/play/play-insights.md), [Tooling](/explore-empathy-platform/diagram/play/play-tooling.md), [Explainability](/explore-empathy-platform/diagram/play/play-explainability.md), [Navigation](/explore-empathy-platform/diagram/play/play-navigation.md)) 
- New graphic assets for [Spellcheck](/explore-empathy-platform/features/spellcheck-overview.md), [Predictive Layer](/explore-empathy-platform/overview/predictive-layer.md), [Next Queries](/explore-empathy-platform/experience-search-and-discovery/next-queries.md), [Related Tags](/explore-empathy-platform/experience-search-and-discovery/related-tags.md), and [Empathize](/explore-empathy-platform/experience-search-and-discovery/empathize.md).    
- Improvements to the interactive map (UI/UX interaction, implementation of new logic, visual design).
- Incorporation of site usage tracking & analytics using Fathom. 

## July 15, 2021
- New overview sections for Search features:   
    [Predictive layer](/explore-empathy-platform/overview/predictive-layer.md)   
    [Synonyms](/explore-empathy-platform/features/synonyms-overview.md)   
    [Product ranking](/explore-empathy-platform/features/product-ranking-overview.md)   
    [Attribute ranking](/explore-empathy-platform/features/attribute-ranking-overview.md)   
- Updated [Search basics](/explore-empathy-platform/overview/) landing page.
- New section on X&nbsp;Components for [Facets & Filters](/explore-empathy-platform/experience-search-and-discovery/facets-and-filters.md).
- Updated [Empathize](/explore-empathy-platform/experience-search-and-discovery/empathize.md) X&nbsp;Component overview.
- Updated [Related Tags](/develop-empathy-platform/ui-reference/) X&nbsp;Component module content.
- New graphic assets for [Promotions](/explore-empathy-platform/features/promotions-overview.md), [Redirections](/explore-empathy-platform/features/redirections-overview.md), [Product Listings](/explore-empathy-platform/overview/product-listings.md), [Results on the SERP](/explore-empathy-platform/overview/results-overview.md), [Shopper interactions tracked in your store](/explore-empathy-platform/capture-shopper-interaction/interaction-events.md).
- Updated [interactive map](/explore-empathy-platform/) design.
- Design improvements: Updated sidebar layout & responsive design for mobile & tablet.  

## July 1, 2021
- New overview sections for Results features:   
    [Promotions](/explore-empathy-platform/features/promotions-overview.md)   
    [Redirections](/explore-empathy-platform/features/redirections-overview.md)   
    [Partial Results](/explore-empathy-platform/features/partial-results-overview.md)   
- New overview sections for Search features:   
    [Facets & filters](/explore-empathy-platform/overview/facets-and-filters-overview.md)   
    [Spellcheck](/explore-empathy-platform/features/spellcheck-overview.md)   

- Updated [Query Suggestions](/develop-empathy-platform/ui-reference/) X&nbsp;Component module content.
- Design improvements:   
    Column-type page layout of the portal   
    In-page navigation menu   
    Layout for functional and technical landing pages   
- New banner implemented for the beta version of the portal.
- New link to previous API documentation on the Empathy.co/docs site (*not hosted on eDocs until revised*).
- Sidebar now shows the correct path when the user navigates to a new page. 

## June 17, 2021
- New sections in Empathy Platform features: [Commerce search and discovery features](/explore-empathy-platform/features)
- Updated [Experience search & discovery](/explore-empathy-platform/experience-search-and-discovery) landing page
- New sections on Results:   
    [Result types on the SERP](/explore-empathy-platform/features/results-overview.md)   
    [Product listings](/explore-empathy-platform/features/product-listings.md)   
    [Results display](/explore-empathy-platform/experience-search-and-discovery/results-display.md) in the UI   
    [Results layout](/explore-empathy-platform/experience-search-and-discovery/results-layout.md) in the UI  
- New [UI Reference](/develop-empathy-platform/ui-reference) landing page.
- New graphic assets for [What is tagging](/explore-empathy-platform/capture-shopper-interaction/) explanation
- Aligned [What’s eDocs](whats-edocs.md) page with new Empathy’s branding style.


## June 3, 2021
- New technical information for [Identifier Results](/develop-empathy-platform/ui-reference/identifer-results/identifer-results.md) and [Next Queries](/develop-empathy-platform/ui-reference/next-queries/next-queries.md) X&nbsp;Component modules.
- New section on tagging shopper interactions: [Shopper interactions tracked in your store](/explore-empathy-platform/capture-shopper-interaction/interaction-events.md).
- Updated the examples in the UI Reference to allow users to edit the example live.
- Added a clear button to the search box.

## May 19, 2021
- New technical information for [Popular Searches](/develop-empathy-platform/ui-reference/popular-searches/popular-searches.md) and [History Queries](/develop-empathy-platform/ui-reference/history-queries/history-queries.md) X Component modules.
- New section on [Empathize](/explore-empathy-platform/experience-search-and-discovery/empathize.md) X Component.
- New section on tagging shopper interactions: [Capture shopper interactions and behaviour](/explore-empathy-platform/capture-shopper-interaction/). 
