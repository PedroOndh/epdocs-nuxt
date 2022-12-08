export const roadmapAdapter = (roadmapData: any): any[] => {
  return roadmapData.map((issue: any) => {
    return {
      issueId: issue.id,
      taskId: issue.key,
      title: issue.fields.summary,
      description: issue.renderedFields.description,
      status: issue.fields.status.name,
      labels: issue.fields.labels,
      productTheme: 'ÑA'
    };
  });
};
