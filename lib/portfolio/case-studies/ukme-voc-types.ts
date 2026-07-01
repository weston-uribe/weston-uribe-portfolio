export type FeedbackSource = "In-app" | "Community" | "Support";

export type ArrTier = "Enterprise" | "Mid-Market" | "SMB";

export type Platform = "Desktop" | "Mobile" | "Both";

export type Sentiment = "Positive" | "Neutral" | "Negative";

export type VocFeedbackRecord = {
  id: string;
  date: string;
  source: FeedbackSource;
  account: string;
  arrTier: ArrTier;
  arrValue: number;
  product: string;
  platform: Platform;
  persona: string;
  theme: string;
  subTheme: string;
  sentiment: Sentiment;
  csat: number;
  feedback: string;
};

export type VocFilterState = {
  dateFrom: string | null;
  dateTo: string | null;
  arrTiers: ArrTier[];
  products: string[];
  themes: string[];
  subThemes: string[];
  platforms: Platform[];
};

export type FilterChip = {
  id: string;
  label: string;
  category: keyof VocFilterState | "dateRange";
};

export type PersonaRankEntry = {
  persona: string;
  count: number;
  uniqueAccounts: number;
  averageArr: number;
  averageCsat: number;
  topTheme: string;
  topSubTheme: string;
  negativeCount: number;
  neutralCount: number;
  positiveCount: number;
};

export type DashboardMetrics = {
  totalRecords: number;
  uniqueAccounts: number;
  averageArr: number;
  averageCsat: number;
  negativeSentimentPercent: number;
  topTheme: string;
};
