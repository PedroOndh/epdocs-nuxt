<template>
  <figure class="edoc-decorations">
    <div
      :style="{ top: props.topFromViewport }"
      class="edoc-decorations__background edoc-full-screen-wrapper"
    >
      <slot name="background"></slot>
    </div>
    <div class="edoc-decorations__foreground">
      <slot name="foreground"></slot>
    </div>
  </figure>
</template>

<script setup>
  const props = defineProps({
    topFromViewport: String
  });
</script>

<style lang="scss" scoped>
  .edoc-decorations {
    margin: 0 0 6%;
    &__background {
      z-index: -1;
    }
    &__foreground {
      position: relative;
      display: flex;
      justify-content: center;
    }
  }
</style>
