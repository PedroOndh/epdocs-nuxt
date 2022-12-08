export const BASE_URL = 'https://searchbroker.atlassian.net/rest/agile/1.0/board/196/issue';
export const FIELDS = [
  'created',
  'summary',
  'description',
  'labels',
  'status',
  'customfield_10600'
];
export const LABEL = 'publicroadmap';
export const OUTPUT_ROADMAP = './src/.vuepress/config/roadmap.json';
export const OUTPUT_THEMES = './src/.vuepress/config/themes.json';
export const COLORS = ['purple', 'orange', 'yellow', 'green', 'red', 'light-blue'] as const;
export const DEFAULT_COLOR = 'grey';
export type ThemeColors = typeof COLORS[number] | typeof DEFAULT_COLOR;
export type ThemeConfig = { theme: string; color: ThemeColors };
