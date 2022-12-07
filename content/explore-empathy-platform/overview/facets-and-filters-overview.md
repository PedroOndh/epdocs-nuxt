---
title: Facets & Filters
tags:
    - faceted search
    - faceted navigation
    - faceted
---

> I need a pair of shoes that goes with a dress for a wedding. I’d like to wear high-heels… leather... and red! But I can’t afford more than €100! 

Faceted search and navigation is an advanced filtering system that uses different categories or dimensions of product properties as criteria to narrow down your catalogue. Specifically, Facets in a **search context** help shoppers to find what they are looking for more efficiently when search queries are broad and return a large number of results. Facets for **navigation**, in turn, help shoppers to explore and discover; they guide shoppers in understanding how the product catalogue is organized and what options are available.

![Facets and Filters](~@assets/media/features/overview-facets.svg)

Conducting a simple search or picking a category might not be enough for your shoppers to find exactly what they want. When dealing with a **huge catalogue** and different product categories, you need to enhance the product discovery experience to find the search product within a multitude. Simple filters can be used for wide searches to limit results to a certain category, brand, etc., but they can only be used one at a time. Faceted search allows your shoppers to narrow down product listing pages and search engine result pages by applying **multiple filters based on product attributes** simultaneously.

**Facet or filter?**  
Traditionally, it is assumed that Facets and Filters are synonyms, but they aren’t. Actually, they are closely related concepts: Facets are used to classify the products in your catalogue, that’s to say, organizing the products by categories or **attributes**, while filters are the **values** for such attributes that you can use to filter by. For example, the results of a certain query (e.g. trousers) can be classified by a set of facets such as “category”, “color”, “size”, “price”, or “brand”. In turn, shoppers can filter by the values available for each facet, such as “XS”, “S”, “M”, “L”, or “XL” for the facet size or “woman”, “man”, or “kids” for the facet category. Each time shoppers click a filter, the set of results is reduced to obtain more precise results.

<!-- facets vs filters static image. Facet menu pointing out both elements. Types of facets -->

Facets and filters are shown depending on product results. Mixing and matching different attributes and values helps your shoppers to progressively refine product listing pages until they get the most relevant products based on the selected criteria. 

The more specific the filters are, the more accurate and relevant the results will be and the more likely the shopper will find exactly what they’re looking for.

Filters can be **dynamic**; they adjust according to the shopper’s selection to guide them to relevant results. For example, a shopper searches for “earrings” in a jewelry store. The filter values for the *Material* facet include “Silver”, “Gold”, “Vermeil”, “Titanium”, and “Steel”. If the shopper refines the price from €50 to €100, *material* filter values will display only three values (“Silver”, “Vermeil”, and “Steel”), returning only earrings that meet the chosen price range. Any of the filter values displayed can be selected to keep drilling down and narrowing search results.

## Types of facets  
The Empathy Platform supports three types of facets and filters:

- **Standard** facets, intended for simple categories, showing a list of values for an attribute. For example, “red”, “white”, “blue”, or “black” for color.
- **Hierarchical** facets allow you to organize categories into subfacets for a more granular filtering experience. They establish a parent-child relationship between facets that allows shoppers to drill down from a general category to a more specific category. When looking for “shoes” in a retail shop, for example, shoppers can refine the search results by choosing “Women > Sale > Trainers”.
- **Range** facets present filter values on a range basis, between the least and greatest values. For example, you can offer products grouped by prices between € 0-5, € 5-10, and so on.

**Advanced options**  
Apart from the types of facets supported by Empathy Platform, you can offer advanced options for a full faceted search and navigation experience. Implement **multi-selection filters** so that shoppers can select more than one filter at the same time.  

Include a search box when dealing with large facet lists so that shoppers can quickly find the desired values to filter by, instead of browsing through the full list. Or show just a predetermined number of filters in a collapsed facet, allowing shoppers to expand the full list of filters when desired to see more options. 


::: note

You can update the properties and display of the existing facets for navigation with the Playboard tool. <!-- Include link to playboard when how to's are available--> Facet properties for search are managed directly from the backend services.

:::


## Spot the difference
Use Facets and Filters to narrow down a product listing page for both search and navigation. Whereas, [Related Tags](/explore-empathy-platform/features/related-tags-overview.md) refines and complements the search query. Both features complement each other as you can conduct a search (e.g. milk), select a related tag to refine the query (e.g. lactose-free), and finally narrow down the results by selecting the available facets and filters for the query (e.g. “Nestlé” for brand, “1 kg” for size, “€0 - €10” for price).


## Try Facets and Filters to...  
- Help your shoppers to narrow down the search results when dealing with a large product catalogue. Your shoppers browse the most relevant results available and select the ones from a dozen options as opposed to thousands.
- Enhance the discovery experience. Allow your shoppers to navigate through product listing or category pages.
- Reduce discovery time and frustration. Help your shoppers to spend less time scrolling page after page of your product catalogue and quickly find what they are looking for.
- Offer a new way to search products by multiple attributes simultaneously, leading to a better understanding of your product catalogue.
- Improve findability as Facets and Filters are based on product results and attributes, there should always be at least one product that matches the selected criteria.

::: interact

Explore the [interactive map](/explore-empathy-platform/diagram/interface/facets.md) to see how Facets and Filters relate to the other Empathy Platform features and microservices.  

:::

::: interact

Learn more about the [configuration options](/explore-empathy-platform/experience-search-and-discovery/facets-and-filters.md) to build a faceted experience in your commerce store with Empathy Platform Interface&nbsp;X.

:::
