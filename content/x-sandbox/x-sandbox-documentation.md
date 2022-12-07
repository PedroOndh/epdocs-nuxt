---
title: X Sandbox documentation
if_true: dev
---

::: warning The sandbox supports Vue 2 version

:::

## What is this sandbox?

The purpose of the sandbox is to have a page with just the component which allows rendering Vue code in the browser and 
some explanatory text next to the example companion it.
It also gives some context or tips on the usage of the component as we will use across the examples in the documentation.

It was done this way in order to have a playground ready for the Empathy X team, (or anyone who wanted to test some Vue code),
so they can test their code examples before seeing that documentation uploaded to the production environment.
It means that you could prevent rendering errors of your code before uploading it.  

## What is this component?

The sandbox comes with a component for rendering Vue code directly in the browser.  
The component will be used across the portal in UI documentation.
It will be used as a playground of Vue components to test technical details, components behaviour or simply play with some code.

## How the component works?

There are two supported ways of working with the component:

1. SFC Full syntax support
2. Simple components syntax


### Single File Component Syntax.

If you plan to use the component in the full syntax way, you would use it by writing Vue code that you would normally type 
inside a Single File Component (`.vue` extension file).

```vue live
<template>
  <div class="root">
    <h2>
      {{ formattedTitle }}
    </h2>
    <button @click="resetTitle">reset</button>
  </div>
</template>

<script>
  export default {
    name: "SFCDocumentationDemo",
    data() {
      return { title: '' };
    },
    mounted() {
      this.title = 'Test whatever you want';
    },
    methods: {
       resetTitle() {
        this.title =  'reset';
      }
    },
    computed: {
      formattedTitle() {
        return this.title + '!';
      }
    },
  }
</script>
<style>
.root{
  display: flex;
}
</style>
```

### Simple component syntax.

It is also possible to create a basic component with no logic in it by defining only the code that you would use inside the `template`
tag from a SFC (Single File Component).  
This is pretty convenient for smaller documentation examples preventing boilerplate code.

```vue live
<p>This is a <i>simple</i> component example</p>
```


## Importing behaviour.

You could test some Vue code with standard DOM tags, but if you want to create a far more complex code example, 
most probably you would use other components inside your code examples

But if you plan to use a component from an external library, you would need to import it first.

In order to import components we would do it as we would normally do it with a `.vue` file.


::: note

The component uses the [local registration](https://v2.vuejs.org/v2/guide/components-registration.html#Local-Registration-in-a-Module-System).  
You need to register components this way because the live coding component detects the modules that are imported using this method. 

:::

Following the recommended style guides we would define the imports in the first code lines that are between `<script>` tags.
Once we have the component that we want to use imported, we would define it inside the `components` field of the module.

After all that registration and importing thing, we are ready to use those components in the `<template>`.  


::: interact

There is no need for refreshing the page when you import a component, if you type it up it should be 
already available in the example for usage.

:::

``` vue live
<template>
  <div>
     <SearchInput />
     <ClearSearchInput />
  </div>
</template>

<script>
  import { SearchInput, ClearSearchInput } from "@empathyco/x-components/search-box";
  export default {
    name: "ImportingDemo",
    components: {
      SearchInput,
      ClearSearchInput
    }
  }
</script>
```

::: danger 

There are some components from `x-components` that had been overwritten by Empathy Docs team

:::

### Components that might not need to be imported.

Some components do not need to be imported as we are already registering it globally in the client.
Those components were registered and overwritten by the Empathy Docs team in order to fit team needs
of implementation, design needs or some tweaks that the components needed to work fine in the portal.

<Flex>
<div>

The `x-components` that may not need to be imported:

* `SearchInput`
* `Recommendations`
* `PopularSearches`
* `PopularSearch`

</div>

```typescript
import { SearchInput, ClearSearchInput } from "@empathyco/x-components/search-box";
/*       ^
 *       SearchInput do not need to be imported, but we import it even so
 */
  export default {
    name: "ImportingDemo",
    components: {
      SearchInput,
      ClearSearchInput
    }
  }
```

</Flex>

::: develop

There would be no errors if you try to import them.  
Even if it is not necessary to import it, we encourage to still write down the import so any client could use that code in their own project.

:::

### Components that do need to be imported.

Any component from `x-components` can be imported but the excluded ones.  
As we bundle and deliver in the client code the `x-components` library, the dynamic importing of these components can be done.

::: danger

Importing any other component outside `x-components` repository is not supported.

:::

### Animations 🚧

Currently animations components are not being recognized when passed as a prop and registered in scripts, so we have registered globally the following ones:

- `FadeAndSlide`
- `StaggeringTransitionGroup`
- `StaggeredFadeAndSlide`
- `TranslateFromLeft`
- `TranslateFromRight`

For the moment we are writing this approach in the `<script>` but it's merely decorative right now, as we are getting it from the "global":

```vue live
<template>
  <div>
    <SearchInput />
    <QuerySuggestions :animation="'StaggeredFadeAndSlide'" />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { QuerySuggestions } from '@empathyco/x-components/query-suggestions';
  import { SearchInput } from '@empathyco/x-components/search-box';
  import { StaggeredFadeAndSlide } from '@empathyco/x-components';

  // Registering the animation as a global component
  Vue.component('StaggeredFadeAndSlide', StaggeredFadeAndSlide);
  export default {
    name: 'QuerySuggestionsDemo',
    components: {
      QuerySuggestions,
      SearchInput
    }
  };
</script>
```

## Styling 

Regarding styling, there are two things that you may want to know before getting into action with the component.

### Empathy Docs default styles

Empathy Docs team set some styles for the x-components by default in order to fit portal design guidelines.
As these designs are being maintained by the team, they might change in the future.

``` vue live
 <SearchInput />
```

### `<style>` tag 🚧

::: danger

The `<style>` tag is not working at the moment.
but we are working on it...

:::

### Inline Styles

As the `<style>` tag is not working at the moment, You can use a workaround by using inline styles.

``` vue live
<template>
  <div style="display: flex;">
     <SearchInput />
     <ClearSearchInput />
  </div>
</template>

<script>
  import { SearchInput, ClearSearchInput } from "@empathyco/x-components/search-box";
  export default {
    name: "StylingDemo",
    components: {
      SearchInput,
      ClearSearchInput
    }
  }
</script>
```


