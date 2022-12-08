<template>
  <div>
    <h2 v-for="issue in data">{{ issue.title }}</h2>
  </div>
</template>

<script setup lang="ts">
  import { roadmapAdapter } from '~/scripts/roadmap/utils';
  const { data } = await useFetch('/api/roadmap');
</script>