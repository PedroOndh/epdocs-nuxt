<template>
  <div>
    <h2 v-for="issue in roadmapAdapter(data.issues)">{{ issue.title }}</h2>
  </div>
</template>

<script setup lang="ts">
  import { roadmapAdapter } from '~/scripts/roadmap/utils';
  import { BASE_URL, FIELDS, LABEL } from '~/scripts/roadmap/config';
  import { JIRA_TOKEN } from '~/scripts/utils';
  const { data, error } = await useAsyncData(
    'roadmap',
    () => $fetch(`${BASE_URL}?maxResults=200&expand=renderedFields&fields=${FIELDS.toString()}&jql=labels=${LABEL}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${Buffer.from(JIRA_TOKEN as string).toString('base64')}`
      }
    })
  );
</script>