import { BASE_URL, FIELDS, LABEL } from '~/scripts/roadmap/config';
import { roadmapAdapter } from '~/scripts/roadmap/utils';
import { JIRA_TOKEN } from '~/scripts/utils';

export default defineEventHandler(async (event) => {
  const response = await fetch(`${BASE_URL}?maxResults=200&expand=renderedFields&fields=${FIELDS.toString()}&jql=labels=${LABEL}`, {
  headers: {
    Accept: 'application/json',
    Authorization: `Basic ${JIRA_TOKEN}`
  }});
  const data = await response.json();
  const adaptedData = roadmapAdapter(data.issues);

  return adaptedData;
})