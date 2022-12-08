import { RawIssue } from '@theme/types/Roadmap';
import fs from 'fs';
import { COLORS, OUTPUT_THEMES, ThemeConfig } from './config';

const getProductTheme = (issue: any): { id: number; summary: string } => {
  return {
    id: issue.fields.customfield_10600.data?.id,
    summary: issue.fields.customfield_10600.data?.summary.toLowerCase().replace('product: ', '')
  };
};

export const generateThemesPalette = (roadmapThemes: { id: number; summary: string }[]): void => {
  // Sorting from smaller to bigger id
  const themes: string[] = [];
  roadmapThemes.sort((a, b) => a.id - b.id);
  for (const roadmapTheme of roadmapThemes) {
    if (!themes.includes(roadmapTheme.summary)) {
      themes.push(roadmapTheme.summary);
    }
  }

  const coloredThemes: Array<ThemeConfig> = themes.reduce(
    (coloredThemes, theme, index) => [
      ...coloredThemes,
      { theme: theme, color: COLORS[index % COLORS.length] }
    ],
    [] as Array<ThemeConfig>
  );

  fs.writeFileSync(OUTPUT_THEMES, JSON.stringify(coloredThemes));
};

export const themesAdapter = (roadmapData: any): { id: number; summary: string }[] => {
  return roadmapData.map((issue: any) => getProductTheme(issue));
};

export const roadmapAdapter = (roadmapData: any): RawIssue[] => {
  return roadmapData.map((issue: any) => {
    return {
      issueId: issue.id,
      taskId: issue.key,
      title: issue.fields.summary,
      description: issue.renderedFields.description,
      status: issue.fields.status.name,
      labels: issue.fields.labels,
      productTheme: getProductTheme(issue).summary
    };
  });
};
