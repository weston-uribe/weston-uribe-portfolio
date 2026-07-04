export type CaseStudyProseSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bulletsIntro?: string;
  bullets?: readonly string[];
};

export type CaseStudyAnnotation = {
  id: string;
  text: string;
};

export type CaseStudyPhase = {
  id: string;
  number: string;
  title: string;
};

export type CaseStudyAtAGlanceStoryBlock = {
  id: string;
  title: string;
  body: string;
};

export type CaseStudyAtAGlanceComparePanel = {
  label: string;
};

export type CaseStudyMetric = {
  id: string;
  value: string;
  body: string;
};

export type CaseStudyFeatureGroup = {
  title: string;
  items: readonly string[];
};

export type CaseStudyInfoCard = {
  title: string;
  body: string;
};
