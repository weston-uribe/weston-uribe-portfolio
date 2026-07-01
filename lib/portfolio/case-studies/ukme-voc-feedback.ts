import {
  ACCOUNTS,
  ARR_TIER_VALUES,
  ARR_TIERS,
  PERSONAS,
  PLATFORMS,
  PRODUCTS_BY_SOURCE,
} from "@/lib/portfolio/case-studies/ukme-voc-taxonomy";
import type {
  FeedbackSource,
  Sentiment,
  VocFeedbackRecord,
} from "@/lib/portfolio/case-studies/ukme-voc-types";

type SeedRecord = Omit<VocFeedbackRecord, "id">;

const SEED_RECORDS: readonly SeedRecord[] = [
  {
    date: "2025-06-12",
    source: "In-app",
    account: "Northbridge Healthcare",
    arrTier: "Enterprise",
    arrValue: 1_420_000,
    product: "Payroll",
    platform: "Desktop",
    persona: "Payroll Manager",
    theme: "Payroll Accuracy",
    subTheme: "Calculation error",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Retro pay adjustments are hard to validate because the system does not show calculation logic before payroll is finalized.",
  },
  {
    date: "2025-05-28",
    source: "In-app",
    account: "BrightPath Services",
    arrTier: "Mid-Market",
    arrValue: 310_000,
    product: "Time Tracking",
    platform: "Mobile",
    persona: "Store Manager",
    theme: "Mobile Experience",
    subTheme: "Confusing workflow",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Managers need to approve shift changes from mobile, but the approval button is buried three screens deep.",
  },
  {
    date: "2025-04-15",
    source: "In-app",
    account: "Summit Logistics",
    arrTier: "Enterprise",
    arrValue: 980_000,
    product: "Reporting",
    platform: "Desktop",
    persona: "Finance Manager",
    theme: "Reporting & Analytics",
    subTheme: "Export limitations",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Exports from the reporting module remove custom filters, forcing our analysts to rebuild reports manually.",
  },
  {
    date: "2025-03-22",
    source: "In-app",
    account: "PeopleFirst Retail",
    arrTier: "Enterprise",
    arrValue: 1_650_000,
    product: "Mobile App",
    platform: "Mobile",
    persona: "Store Manager",
    theme: "Mobile Experience",
    subTheme: "Offline access",
    sentiment: "Negative",
    csat: 1,
    feedback: "The mobile app needs work.",
  },
  {
    date: "2025-02-10",
    source: "In-app",
    account: "Horizon Education Group",
    arrTier: "Mid-Market",
    arrValue: 275_000,
    product: "Benefits",
    platform: "Both",
    persona: "Benefits Administrator",
    theme: "Usability",
    subTheme: "Confusing workflow",
    sentiment: "Neutral",
    csat: 3,
    feedback:
      "Open enrollment status is spread across three screens. We need a single enrollment health view.",
  },
  {
    date: "2025-01-18",
    source: "In-app",
    account: "CloudWave Industries",
    arrTier: "SMB",
    arrValue: 62_000,
    product: "Payroll",
    platform: "Desktop",
    persona: "Payroll Manager",
    theme: "Payroll Accuracy",
    subTheme: "Error messaging",
    sentiment: "Negative",
    csat: 2,
    feedback: "Payroll is always stressful in this system.",
  },
  {
    date: "2024-12-05",
    source: "In-app",
    account: "Vertex Financial",
    arrTier: "Enterprise",
    arrValue: 1_200_000,
    product: "Reporting",
    platform: "Desktop",
    persona: "HR Director",
    theme: "Reporting & Analytics",
    subTheme: "Missing filters",
    sentiment: "Neutral",
    csat: 3,
    feedback:
      "Executive dashboards lack persona-level rollups. I export to Excel to answer board questions.",
  },
  {
    date: "2024-11-20",
    source: "Community",
    account: "Meridian Manufacturing",
    arrTier: "Enterprise",
    arrValue: 1_100_000,
    product: "Payroll Hub",
    platform: "Desktop",
    persona: "Payroll Manager",
    theme: "Payroll Accuracy",
    subTheme: "Calculation error",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Year-end reconciliation still requires manual spot checks when tax tables update mid-cycle.",
  },
  {
    date: "2025-06-01",
    source: "Community",
    account: "Crestline Foods",
    arrTier: "Mid-Market",
    arrValue: 380_000,
    product: "Workforce Scheduler",
    platform: "Mobile",
    persona: "Operations Manager",
    theme: "Performance & Reliability",
    subTheme: "Slow load times",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Schedule view takes 15+ seconds to load during Monday morning peak across 40 locations.",
  },
  {
    date: "2025-05-14",
    source: "Community",
    account: "Eastbridge University",
    arrTier: "Enterprise",
    arrValue: 890_000,
    product: "People Analytics",
    platform: "Desktop",
    persona: "HR Director",
    theme: "Reporting & Analytics",
    subTheme: "Missing filters",
    sentiment: "Neutral",
    csat: 3,
    feedback:
      "Would love cohort filters by department and tenure in the analytics hub without custom SQL.",
  },
  {
    date: "2025-04-02",
    source: "Community",
    account: "BlueSky Hospitality",
    arrTier: "Mid-Market",
    arrValue: 220_000,
    product: "Employee Mobile",
    platform: "Mobile",
    persona: "Employee Experience Manager",
    theme: "Mobile Experience",
    subTheme: "Confusing workflow",
    sentiment: "Neutral",
    csat: 3,
    feedback:
      "Employees like the mobile app direction but onboarding prompts are easy to dismiss and never return.",
  },
  {
    date: "2025-03-08",
    source: "Community",
    account: "Redwood Health Partners",
    arrTier: "Enterprise",
    arrValue: 1_550_000,
    product: "Benefits Center",
    platform: "Both",
    persona: "Benefits Administrator",
    theme: "Integration",
    subTheme: "Sync failure",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Carrier file sync failed silently last enrollment, and we discovered it only when employees called.",
  },
  {
    date: "2025-02-19",
    source: "Community",
    account: "BrightPath Services",
    arrTier: "Mid-Market",
    arrValue: 310_000,
    product: "Payroll Hub",
    platform: "Desktop",
    persona: "Finance Manager",
    theme: "Reporting & Analytics",
    subTheme: "Export limitations",
    sentiment: "Negative",
    csat: 2,
    feedback: "This product is frustrating and takes too long to use.",
  },
  {
    date: "2025-06-18",
    source: "Support",
    account: "Northbridge Healthcare",
    arrTier: "Enterprise",
    arrValue: 1_420_000,
    product: "Payroll Processing",
    platform: "Desktop",
    persona: "Payroll Manager",
    theme: "Payroll Accuracy",
    subTheme: "Error messaging",
    sentiment: "Negative",
    csat: 1,
    feedback:
      "Error code PR-4421 appeared during close with no plain-language explanation of which employees were affected.",
  },
  {
    date: "2025-05-30",
    source: "Support",
    account: "Summit Logistics",
    arrTier: "Enterprise",
    arrValue: 980_000,
    product: "Time & Attendance",
    platform: "Both",
    persona: "Operations Manager",
    theme: "Performance & Reliability",
    subTheme: "Slow load times",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Bulk time edit grid freezes when filtering more than 500 rows, which makes it unusable during audit prep.",
  },
  {
    date: "2025-04-21",
    source: "Support",
    account: "CloudWave Industries",
    arrTier: "SMB",
    arrValue: 62_000,
    product: "Benefits Administration",
    platform: "Desktop",
    persona: "HR Administrator",
    theme: "Configuration & Setup",
    subTheme: "Setup complexity",
    sentiment: "Neutral",
    csat: 3,
    feedback:
      "New hire benefits setup requires eight manual steps that could be a guided wizard.",
  },
  {
    date: "2025-03-11",
    source: "Support",
    account: "Vertex Financial",
    arrTier: "Enterprise",
    arrValue: 1_200_000,
    product: "Reports & Exports",
    platform: "Desktop",
    persona: "Finance Manager",
    theme: "Reporting & Analytics",
    subTheme: "Export limitations",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Scheduled exports dropped benefit deduction columns after the March release.",
  },
  {
    date: "2025-02-04",
    source: "Support",
    account: "Horizon Education Group",
    arrTier: "Mid-Market",
    arrValue: 275_000,
    product: "Mobile Workforce",
    platform: "Mobile",
    persona: "Store Manager",
    theme: "Mobile Experience",
    subTheme: "Confusing workflow",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Clock-in reminders do not appear when managers switch between store profiles on one device.",
  },
  {
    date: "2025-01-25",
    source: "Support",
    account: "Meridian Manufacturing",
    arrTier: "Enterprise",
    arrValue: 1_100_000,
    product: "Payroll Processing",
    platform: "Desktop",
    persona: "IT Administrator",
    theme: "Integration",
    subTheme: "Sync failure",
    sentiment: "Negative",
    csat: 2,
    feedback:
      "Nightly GL sync to ERP failed three times this week with no retry visibility in the admin console.",
  },
];

const FEEDBACK_SNIPPETS: readonly {
  feedback: string;
  theme: string;
  subTheme: string;
  sentiment: Sentiment;
  csat: number;
}[] = [
  {
    feedback: "This product is frustrating and takes too long to use.",
    theme: "Usability",
    subTheme: "Confusing workflow",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback: "Payroll is always stressful in this system.",
    theme: "Payroll Accuracy",
    subTheme: "Error messaging",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback: "The mobile app needs work.",
    theme: "Mobile Experience",
    subTheme: "Confusing workflow",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Role permissions are inconsistent between admin and manager views.",
    theme: "Permissions & Security",
    subTheme: "Role permissions",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Initial tenant setup took three weeks because documentation gaps slowed our rollout.",
    theme: "Configuration & Setup",
    subTheme: "Setup complexity",
    sentiment: "Neutral",
    csat: 3,
  },
  {
    feedback:
      "Love the direction of unified reporting. Keep investing in filter persistence.",
    theme: "Reporting & Analytics",
    subTheme: "Missing filters",
    sentiment: "Positive",
    csat: 4,
  },
  {
    feedback:
      "Integration with our identity provider failed twice during SSO cutover.",
    theme: "Integration",
    subTheme: "Sync failure",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Managers need to approve shift changes from mobile, but the approval button is buried three screens deep.",
    theme: "Mobile Experience",
    subTheme: "Confusing workflow",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Retro pay adjustments are hard to validate because the system does not show calculation logic before payroll is finalized.",
    theme: "Payroll Accuracy",
    subTheme: "Calculation error",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Exports from the reporting module remove custom filters, forcing our analysts to rebuild reports manually.",
    theme: "Reporting & Analytics",
    subTheme: "Export limitations",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Dashboard load times spike above ten seconds when we filter by more than two dimensions.",
    theme: "Performance & Reliability",
    subTheme: "Slow load times",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Bulk employee import failed silently, and we only noticed when headcount was off by forty.",
    theme: "Configuration & Setup",
    subTheme: "Error messaging",
    sentiment: "Negative",
    csat: 1,
  },
  {
    feedback:
      "Would love a saved-view feature for recurring payroll exception reports.",
    theme: "Reporting & Analytics",
    subTheme: "Missing filters",
    sentiment: "Positive",
    csat: 4,
  },
  {
    feedback:
      "The new time-off request flow is much clearer, and our managers adopted it within a week.",
    theme: "Usability",
    subTheme: "Confusing workflow",
    sentiment: "Positive",
    csat: 5,
  },
  {
    feedback:
      "Benefits enrollment screens time out during open enrollment peak hours.",
    theme: "Performance & Reliability",
    subTheme: "Slow load times",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Need better API documentation for custom integrations with our scheduling tool.",
    theme: "Integration",
    subTheme: "Sync failure",
    sentiment: "Neutral",
    csat: 3,
  },
  {
    feedback:
      "Contractors cannot access pay stubs on mobile, so they have to call HR every cycle.",
    theme: "Mobile Experience",
    subTheme: "Offline access",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Audit logs for permission changes would help us pass our SOC 2 review.",
    theme: "Permissions & Security",
    subTheme: "Role permissions",
    sentiment: "Neutral",
    csat: 3,
  },
  {
    feedback:
      "Tax withholding previews are inaccurate for employees with multiple state assignments.",
    theme: "Payroll Accuracy",
    subTheme: "Calculation error",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Just frustrating overall. It is hard to tell if issues are us or the product.",
    theme: "Usability",
    subTheme: "Error messaging",
    sentiment: "Negative",
    csat: 2,
  },
  {
    feedback:
      "Self-service org chart updates would reduce tickets to our HR help desk.",
    theme: "Configuration & Setup",
    subTheme: "Setup complexity",
    sentiment: "Positive",
    csat: 4,
  },
];

function buildExpandedRecords(): VocFeedbackRecord[] {
  const sources = Object.keys(PRODUCTS_BY_SOURCE) as FeedbackSource[];
  const expanded: VocFeedbackRecord[] = SEED_RECORDS.map((record, index) => ({
    ...record,
    id: `voc-seed-${String(index + 1).padStart(3, "0")}`,
  }));

  let counter = expanded.length + 1;

  for (let index = 0; index < 206; index += 1) {
    const source = sources[index % sources.length];
    const products = PRODUCTS_BY_SOURCE[source];
    const persona = PERSONAS[index % PERSONAS.length];
    const account = ACCOUNTS[index % ACCOUNTS.length];
    const arrTier = ARR_TIERS[index % ARR_TIERS.length];
    const [minArr, maxArr] = ARR_TIER_VALUES[arrTier];
    const arrValue = minArr + ((index * 17_031) % (maxArr - minArr + 1));
    const snippet = FEEDBACK_SNIPPETS[index % FEEDBACK_SNIPPETS.length];
    const product = products[index % products.length];
    const platform = PLATFORMS[index % PLATFORMS.length];
    const month = (index % 12) + 1;
    const day = (index % 27) + 1;
    const year = index % 2 === 0 ? 2025 : 2024;

    expanded.push({
      id: `voc-gen-${String(counter).padStart(3, "0")}`,
      date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      source,
      account,
      arrTier,
      arrValue,
      product,
      platform,
      persona,
      theme: snippet.theme,
      subTheme: snippet.subTheme,
      sentiment: snippet.sentiment,
      csat: snippet.csat,
      feedback: snippet.feedback,
    });

    counter += 1;
  }

  return expanded;
}

export const UKME_VOC_FEEDBACK: readonly VocFeedbackRecord[] =
  buildExpandedRecords();

export const UKME_VOC_FEEDBACK_COUNT = UKME_VOC_FEEDBACK.length;
