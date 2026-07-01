import type {
  ArrTier,
  FeedbackSource,
  Platform,
  VocFilterState,
} from "@/lib/portfolio/case-studies/ukme-voc-types";

export const FEEDBACK_SOURCES = [
  "In-app",
  "Community",
  "Support",
] as const satisfies readonly FeedbackSource[];

export const ARR_TIERS = [
  "Enterprise",
  "Mid-Market",
  "SMB",
] as const satisfies readonly ArrTier[];

export const PLATFORMS = [
  "Desktop",
  "Mobile",
  "Both",
] as const satisfies readonly Platform[];

export const PERSONAS = [
  "Payroll Manager",
  "HR Administrator",
  "HR Director",
  "Benefits Administrator",
  "Store Manager",
  "Recruiter",
  "Employee Experience Manager",
  "IT Administrator",
  "Operations Manager",
  "Finance Manager",
] as const;

export const ACCOUNTS = [
  "BrightPath Services",
  "Northbridge Healthcare",
  "Summit Logistics",
  "Horizon Education Group",
  "CloudWave Industries",
  "PeopleFirst Retail",
  "Vertex Financial",
  "BlueSky Hospitality",
  "Meridian Manufacturing",
  "Crestline Foods",
  "Redwood Health Partners",
  "Eastbridge University",
  "Lakeside Community Bank",
  "Pioneer Energy Co-op",
] as const;

export const THEMES = [
  "Usability",
  "Performance & Reliability",
  "Payroll Accuracy",
  "Reporting & Analytics",
  "Integration",
  "Mobile Experience",
  "Permissions & Security",
  "Configuration & Setup",
] as const;

export const SUB_THEMES = [
  "Confusing workflow",
  "Slow load times",
  "Calculation error",
  "Missing filters",
  "Export limitations",
  "Sync failure",
  "Offline access",
  "Role permissions",
  "Setup complexity",
  "Error messaging",
] as const;

export const PRODUCTS_BY_SOURCE: Record<
  FeedbackSource,
  readonly string[]
> = {
  "In-app": [
    "Payroll",
    "Time Tracking",
    "Benefits",
    "Reporting",
    "Mobile App",
  ],
  Community: [
    "Payroll Hub",
    "Workforce Scheduler",
    "People Analytics",
    "Benefits Center",
    "Employee Mobile",
  ],
  Support: [
    "Payroll Processing",
    "Time & Attendance",
    "Benefits Administration",
    "Reports & Exports",
    "Mobile Workforce",
  ],
};

export const DEFAULT_FILTERS: VocFilterState = {
  dateFrom: null,
  dateTo: null,
  arrTiers: [],
  products: [],
  themes: [],
  subThemes: [],
  platforms: [],
};

export const ARR_TIER_VALUES: Record<ArrTier, readonly [number, number]> = {
  Enterprise: [750_000, 1_800_000],
  "Mid-Market": [150_000, 450_000],
  SMB: [25_000, 85_000],
};
