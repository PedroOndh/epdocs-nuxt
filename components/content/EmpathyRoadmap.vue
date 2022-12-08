<template>
  <div>
    <h2 v-for="issue in data">{{ issue.title }}</h2>
  </div>
</template>

<script setup lang="ts">
  import getJira from '../../scripts/roadmap';
  const { data } = await useAsyncData(
    'roadmap',
    getJira
  )
</script>