---
title: X Sandbox
if_true: dev
---

::: note

In order to solve your doubts about the usage of the below component take a look at the documentation

<GoTo :to="'./x-sandbox-documentation'" :title="'Getting Started'"/>

:::

Copy and paste your code in the editor below to test the correct behaviour of your Live Example.

_Type 'sandal', 'bra', 'trousers', 'lipstick' or any other fashion related term!_

```vue live
<template>
  <div>
    <h3 style="margin-top: 0;">
      {{ title }}
    </h3>
    <div style="display: flex; justify-content: space-between">
      <span><strong>Title length: </strong> {{ titleLength }}</span>
      <strong @click="eraseLetter">Erase letter</strong>
      <strong @click="resetTitle">Reset title</strong>
    </div>
    <br />
    <div style="display: flex;">
      <SearchInput />
      <ClearSearchInput>Clear</ClearSearchInput>
    </div>
    <QuerySuggestions :maxItemsToRender="6" />
    <RelatedTags />
    <NextQueries :maxItemsToRender="4" />
  </div>
</template>

<script>
  import { SearchInput, ClearSearchInput } from "@empathyco/x-components/search-box";
  import { QuerySuggestions } from "@empathyco/x-components/query-suggestions";
  import { RelatedTags } from "@empathyco/x-components/related-tags";
  import { NextQueries } from "@empathyco/x-components/next-queries";

  export default {
    name: "QuerySuggestionsDemo",
    components: {
      SearchInput,
      ClearSearchInput,
      QuerySuggestions,
      RelatedTags,
      NextQueries
    },
    data() {
      return { title: 'Loading...' };
    },
    mounted() {
      this.title = 'Test whatever you want';
    },
    methods: {
      resetTitle() {
        this.title =  'Test whatever you want';
      },
      eraseLetter() {
        this.title =  this.title.slice(0, -1);
      }
    },
    computed: {
      titleLength() {
        return this.title.length;
      }
    },
    watch: {
      title(newTitle, oldTitle){
        console.log(`${oldTitle} --> ${newTitle}`);
      }
    }
  }
</script>
```
