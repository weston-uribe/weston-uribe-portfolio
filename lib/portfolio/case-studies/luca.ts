import type {
  CaseStudyAtAGlanceStoryBlock,
  CaseStudyFeatureGroup,
  CaseStudyInfoCard,
  CaseStudyPhase,
  CaseStudyProseSection,
} from "./types";

export const LUCA_META = {
  pageTitle: "Luca · Weston Uribe",
  description:
    "Founder case study on moving from campus resource sharing to a wellness coaching marketplace through discovery, a paid pilot, low-code development, and partnerships.",
  primaryUsers: ["Students", "Wellness coaches", "University admin"] as const,
  domain: ["Education", "Wellness"] as const,
  focus: [
    "Consumer-facing mobile app",
    "Two-sided market",
    "Governance and compliance",
  ] as const,
} as const;

export const LUCA_HERO = {
  title: "Luca",
  subtitle:
    "I founded a startup that moved from campus resource sharing to a wellness coaching marketplace through discovery, a paid pilot, low-code development, and partnerships.",
  illustration: {
    assetPath: "/images/luca/luca-hero-ecosystem-v01.png",
    assetWidth: 1024,
    assetHeight: 576,
    alt: "Illustration of students, wellness coaches, and university partners connected through the Luca wellness coaching marketplace.",
  },
} as const;

export const LUCA_AT_A_GLANCE = {
  title: "Case study at a glance",
  storyBlocks: [
    {
      id: "where-i-started",
      title: "Where I started",
      body: "University wellness organizations had staff and resources, but the student experience was fragmented across websites, PDFs, and flyers. Luca began as a centralized resource hub to help schools organize support and help students find it more easily.",
    },
    {
      id: "what-i-found",
      title: "What I found",
      body: "Better access to resources solved part of the staff problem, but it didn't create strong student pull. The stronger need was guided support. Through a $10K pilot grant with 25 students and three certified wellness coaches, I learned that students wanted professional coaching to help them figure things out.",
    },
    {
      id: "what-i-built",
      title: "What I built",
      body: "After running the pilot manually, I rebuilt Luca myself in Bubble.io in roughly three weeks. The platform supported onboarding, assessments, matching, scheduling, in-app video sessions, and analytics. I also designed trust and safety workflows for coach verification, consent, privacy boundaries, and crisis escalation.",
    },
    {
      id: "result",
      title: "Result",
      body: "Students reported a 39% average reduction in anxiety, with broader wellness and academic engagement measures improving roughly 20 to 25%. When coach supply became the next constraint, I built partnerships with coach training organizations, helping total marketplace users grow 79% week over week for five consecutive weeks. I eventually shut Luca down when the product was working, but the higher education sales path was not viable within my runway.",
    },
  ] satisfies readonly CaseStudyAtAGlanceStoryBlock[],
} as const;

export const LUCA_SECTIONS = {
  context: {
    id: "context",
    title: "The starting problem",
    paragraphs: [
      "University wellness teams had support resources, programs, and staff, but the student experience was fragmented. Resources lived across WordPress pages, PDFs, spreadsheets, flyers, department sites, and one-off links. Staff felt overloaded by manual workflows and unsure whether students were engaging with what they published.",
    ],
  },
  hypothesis1: {
    id: "hypothesis-1",
    title: "Hypothesis 1: better access to resources",
    paragraphs: [
      "Luca began as a centralized wellness resource hub for universities. Staff from different departments could publish resources into one university space, control what was public or private, and give students a cleaner way to find support across campus. The product also supported university-specific spaces, organization-based access control, and public resources that could be shared across schools.",
    ],
  },
  constraintShift: {
    id: "constraint-shift",
    title: "What the first version taught me",
    paragraphs: [
      "The resource hub solved a real organizational problem, but it did not create strong enough pull. Staff adoption was weak, students were not naturally seeking static resources, and custom development moved too slowly against the Santa Clara University scope of work. The constraint was not access to information. Students needed guided support.",
    ],
  },
  hypothesis2: {
    id: "hypothesis-2",
    title: "Hypothesis 2: students needed a human guide",
    paragraphs: [
      "That led me to wellness coaching. I studied the field, took classes, joined conversations with coaches, and learned how universities already offered similar support through salaried wellness staff and basic booking pages. The model made sense, but the delivery system was expensive and hard to scale. Luca could test a lighter version: structured coaching, flexible supply, and software to handle the workflow.",
    ],
  },
  manualPilot: {
    id: "manual-pilot",
    title: "Testing the deeper need manually",
    paragraphs: [
      "Using a $10K 4.0 Schools grant, I ran the coaching model manually before rebuilding the product. I recruited college students through campus flyers, student organizations, and online outreach, hired three certified wellness coaches, matched students to coaches, coordinated five-session programs, and measured outcomes with pre/post surveys.",
    ],
  },
  pilotResults: {
    id: "pilot-results",
    title: "The signal was stronger than the original product",
    paragraphs: [
      "Students responded strongly to the coaching model. They wanted more sessions, wanted the program to continue, and wanted other students to access it. The strongest outcome was a 39% average self-reported reduction in anxiety, with broader wellness and academic engagement measures improving by roughly 20 to 25%.",
    ],
  },
  productRebuild: {
    id: "product-rebuild",
    title: "Removing the engineering bottleneck",
    paragraphs: [
      "After the manual pilot, I found Bubble and rebuilt the product myself. In roughly three weeks, Luca became an end-to-end coaching platform with onboarding, wellness assessments, coach matching, in-app scheduling, Twilio video sessions, coach notes, resource sharing, surveys, and progress analytics.",
    ],
  },
  trustCompliance: {
    id: "trust-compliance",
    title: "Designing trust into the service",
    paragraphs: [
      "Because Luca supported student wellness, the service needed clear boundaries. Coaches applied through a structured onboarding flow, submitted training or certification information, reviewed Luca's coaching standards, signed agreements, and completed an interview before approval. The product intentionally avoided clinical language and positioned the service as wellness coaching, not therapy.",
    ],
  },
  marketplaceConstraint: {
    id: "marketplace-constraint",
    title: "The next constraint: coach supply",
    paragraphs: [
      "Once the student-facing product worked, demand outpaced available coach supply. Certified coaches were expensive, students expected free access, and schools were the likely payer. Before university sales could scale, Luca needed a supply model that did not depend on me paying every coach directly.",
    ],
  },
  growth: {
    id: "growth",
    title: "Partnerships unlocked early growth",
    paragraphs: [
      "I contacted roughly 15 wellness coach training organizations and found a strong fit. Training coaches needed practice hours and real client experience. Luca had student demand, matching, scheduling, and a structured workflow. Around nine organizations responded positively, and two agreed to partner. After launching this channel, total marketplace users, including students and coaches, grew 79% week over week for five consecutive weeks.",
    ],
  },
  shutdown: {
    id: "shutdown",
    title: "Why I shut it down",
    paragraphs: [
      "By the end, the product and student demand were real, but the business constraint had moved again. Selling into higher education required long cycles, expensive relationship-based distribution, and competition with larger wellness platforms already selling to universities. Without a sustainable path to revenue within my runway, shutting Luca down was the right decision.",
    ],
  },
  lessons: {
    id: "lessons",
    title: "What Luca changed about how I build",
    paragraphs: [],
    bullets: [
      "Start with the constraint, not the feature idea.",
      "Validate manually before scaling software.",
      "Treat every product decision as an experiment.",
      "Move faster when evidence is weak.",
      "Distribution is part of product strategy.",
      "A working product is not the same as a viable business.",
      "The best pivot changes the system, not just the UI.",
    ],
  },
} as const satisfies Record<string, CaseStudyProseSection>;

export type LucaSectionId = keyof typeof LUCA_SECTIONS;

export const LUCA_IN_DEPTH = {
  title: "In-Depth Case Study",
  subtitle:
    "How discovery, a manual pilot, product rebuild, and marketplace partnerships shaped Luca.",
} as const;

export const LUCA_PHASES = {
  context: {
    id: "phase-context",
    number: "01",
    title: "Context",
  },
  pilot: {
    id: "phase-pilot",
    number: "02",
    title: "Pilot validation",
  },
  product: {
    id: "phase-product",
    number: "03",
    title: "Product and trust",
  },
  marketplace: {
    id: "phase-marketplace",
    number: "04",
    title: "Marketplace growth",
  },
  shutdown: {
    id: "phase-shutdown",
    number: "05",
    title: "Strategic decision",
  },
  lessons: {
    id: "phase-lessons",
    number: "06",
    title: "Lessons learned",
  },
  prototype: {
    id: "phase-prototype",
    number: "07",
    title: "Interactive prototype",
  },
} as const satisfies Record<string, CaseStudyPhase>;

export const LUCA_BANDS = {
  context: [
    "context",
    "hypothesis1",
    "constraintShift",
  ] as const satisfies readonly LucaSectionId[],
  pilot: [
    "hypothesis2",
    "manualPilot",
    "pilotResults",
  ] as const satisfies readonly LucaSectionId[],
  product: ["productRebuild", "trustCompliance"] as const satisfies readonly LucaSectionId[],
  marketplace: [
    "marketplaceConstraint",
    "growth",
  ] as const satisfies readonly LucaSectionId[],
  shutdown: ["shutdown"] as const satisfies readonly LucaSectionId[],
  lessons: ["lessons"] as const satisfies readonly LucaSectionId[],
} as const;

export const LUCA_MANUAL_PILOT_CALLOUT =
  "Manual first, software second. The pilot tested whether students wanted structured support before I invested in a larger platform.";

export const LUCA_PRODUCT_FEATURES = [
  {
    title: "Student experience",
    items: [
      "Onboarding",
      "Wellness assessment",
      "Coach matching",
      "Session booking",
      "Video sessions",
      "Progress tracking",
    ],
  },
  {
    title: "Coach experience",
    items: [
      "Availability",
      "Session notes",
      "Resource sharing",
      "Student progress",
      "Certification status",
    ],
  },
  {
    title: "Admin experience",
    items: [
      "Coach review",
      "User management",
      "Program oversight",
      "Survey analytics",
      "Marketplace health",
    ],
  },
] as const satisfies readonly CaseStudyFeatureGroup[];

export const LUCA_TRUST_CARDS = [
  {
    title: "Coach verification",
    body: "Training or certification review, interviews, agreements, and onboarding standards before approval.",
  },
  {
    title: "Student safety",
    body: "Consent language, clear disclaimers, and a crisis escalation protocol tied to campus resources.",
  },
  {
    title: "Privacy boundaries",
    body: "Coach notes were private to the coach, and the product avoided clinical or medical positioning.",
  },
] as const satisfies readonly CaseStudyInfoCard[];

export const LUCA_PROTOTYPE = {
  title: "Interactive prototype",
  introParagraphs: [
    "The prototype focuses on the student experience: onboarding, wellness assessment, coach matching, booking, session flow, resource sharing, and progress tracking. Coach and admin workflows existed behind the scenes, but the student journey is the clearest way to show the product's value.",
  ],
  disclaimer:
    "This prototype uses mock data and is still a work in progress. Any inputs are stored only temporarily in your browser session and reset on refresh. Some screens and interactions may lead to unfinished paths.",
  previewScreenshot: {
    assetPath: "/images/luca/luca-work-card-v01.png",
    alt: "Luca student app prototype welcome screen preview",
    width: 464,
    height: 1024,
  },
} as const;

export const LUCA_APP_LANDING = {
  headline: "Welcome to Luca",
} as const;

export const LUCA_HERO_METADATA = [
  { label: "Primary users", values: LUCA_META.primaryUsers },
  { label: "Domain", values: LUCA_META.domain },
  { label: "Focus", values: LUCA_META.focus },
] as const;
