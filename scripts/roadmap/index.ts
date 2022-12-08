import * as fs from 'fs';
import fetch from 'node-fetch';
import { exitError, JIRA_TOKEN } from '../utils';
import { FIELDS, BASE_URL, OUTPUT_ROADMAP, LABEL } from './config';
import { roadmapAdapter, generateThemesPalette, themesAdapter } from './utils';

const getJira = async (): Promise<any> => {
  try {
    const response = await fetch(
      `${BASE_URL}?maxResults=200&expand=renderedFields&fields=${FIELDS.toString()}&jql=labels=${LABEL}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${Buffer.from(JIRA_TOKEN as string).toString('base64')}`
        }
      }
    );
    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}: ${response.url}`);
    }
    const jsonResponse = await response.json();
    const adaptedData = roadmapAdapter(jsonResponse.issues);
    return adaptedData;
  } catch (e) {
    exitError('Error getting Roadmap specs from Jira', e);
  }
};

export default getJira;
