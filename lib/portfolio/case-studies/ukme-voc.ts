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

export const UKME_VOC_META = {
  title: "AI-Powered Voice of Customer Dashboard",
  pageTitle: "AI-Powered Voice of Customer Dashboard · Weston Uribe",
  description:
    "Case study on turning fragmented customer feedback into clearer roadmap evidence for product managers at UKMe, a fictional HCM SaaS company.",
  company: "UKMe",
  projectType: "Internship case study and extended portfolio prototype",
  primaryUsers: "Product managers",
  domain: "Human Capital Management",
  focus: "Voice of Customer and AI decision support",
} as const;

export const UKME_VOC_HERO = {
  title: "AI-Powered Voice of Customer Dashboard",
  subtitle:
    "Turning fragmented customer feedback into clearer roadmap evidence for product managers.",
  tags: [
    "AI Decision Support",
    "Voice of Customer",
    "Product Strategy",
    "Enterprise UX",
    "HCM SaaS",
    "Roadmap Planning",
  ],
} as const;

export const UKME_VOC_FRAMING = {
  paragraphs: [
    "This case study is a fictionalized and extended version of work from my UKG internship. UKMe stands in for a large HCM SaaS company. All company names, customer details, and feedback examples are synthetic.",
    "The shipped redesign reflects the work I delivered during the internship. The future section shows how I would extend the product today with a more AI-native architecture.",
  ],
} as const;

export const UKME_VOC_PHASES = {
  context: {
    id: "phase-context",
    number: "01",
    title: "Context",
  },
  research: {
    id: "phase-research",
    number: "02",
    title: "Research and discovery",
  },
  design: {
    id: "phase-design",
    number: "03",
    title: "Design and implementation",
  },
  future: {
    id: "phase-future",
    number: "04",
    title: "Future direction",
  },
} as const satisfies Record<string, CaseStudyPhase>;

export const UKME_VOC_OPENING_SECTIONS: readonly CaseStudyProseSection[] = [
  {
    id: "business-context",
    title: "Business context",
    paragraphs: [
      "UKMe is a large HCM SaaS company serving enterprise customers across payroll, HR, workforce management, time tracking, reporting, benefits, and employee experience.",
      "Product teams needed a clearer way to understand customer feedback across fragmented channels, including in-app feedback, customer community posts, support tickets, Salesforce notes, and account-facing feedback.",
      "The challenge was not collecting more feedback. It was making the feedback useful for roadmap planning.",
    ],
  },
  {
    id: "the-problem",
    title: "The problem",
    paragraphs: [
      "Before I joined, the team had already centralized multi-channel feedback and used AI to generate tags, summaries, and categories.",
      "The ingredients were there: customer feedback, account context, AI tagging, and a dashboard for product managers.",
      "But the experience still felt like a static report. PMs could see feedback, but it was hard to tell what was actionable, which accounts were affected, or whether a pattern deserved roadmap attention.",
    ],
  },
  {
    id: "what-i-was-asked",
    title: "What I was asked to do",
    paragraphs: [
      "I was asked to design the UX/UI for the internal dashboard, define the experience, and help the team ship it.",
      "The initial ask was simple: make the existing reporting experience clearer and easier for product managers to use.",
    ],
  },
] as const;

export const UKME_VOC_RESEARCH_SECTION: CaseStudyProseSection = {
  id: "research-and-discovery",
  title: "Research and discovery",
  paragraphs: [
    "I interviewed more than 50 internal product managers to understand how they used customer feedback and what would make the dashboard useful.",
    "The clearest theme was actionability. PMs did not want more raw feedback. They wanted clear signals they could bring into roadmap planning.",
  ],
  bullets: [
    "What problem keeps showing up?",
    "Which personas and accounts are affected?",
    "What feedback supports the pattern?",
  ],
};

export const UKME_VOC_DISCOVERY = {
  title: "What I discovered",
  paragraphs: [
    "The AI tagging was not the main problem. The internal Pendo team had created a theme and sub-theme taxonomy, and AI classified feedback against it. PMs generally trusted those tags.",
    "The bigger issue was the product experience around the tags. The dashboard did not connect themes, personas, account value, and raw comments into a clear product signal.",
    "I also found two constraints: product naming differed across sources, and summaries were batch-generated. That meant the shipped version needed to improve decision-making inside the current architecture without pretending to solve the long-term AI architecture problem.",
  ],
} as const;

export const UKME_VOC_BEFORE_STATE = {
  title: "The starting point",
  introParagraphs: [
    "The original experience was a Power BI-style dashboard built around source-specific tabs, static summaries, and spreadsheet-like feedback tables.",
  ],
  assetPath: "/images/ukme-voc-before-dashboard.png",
  assetPathRetina: "/images/ukme-voc-before-dashboard@2x.png",
  assetFilename: "ukme-voc-before-dashboard.png",
  assetWidth: 1024,
  assetHeight: 576,
  alt: "Before-state dashboard reconstruction showing source-specific navigation, limited filters, dense summaries, and raw feedback tables.",
  caption:
    "Before-state dashboard reconstruction showing source-specific navigation, limited filters, dense summaries, and raw feedback tables.",
  placeholderLabel: "Before-state dashboard screenshot",
  annotations: [
    {
      id: "source-tabs",
      text: "Feedback sources were separated into source-specific tabs, so PMs could only inspect one channel at a time.",
    },
    {
      id: "limited-filters",
      text: "The main filters were date range and ARR tier.",
    },
    {
      id: "spreadsheet-tables",
      text: "The dashboard was dominated by spreadsheet-style tables and static summaries.",
    },
    {
      id: "hover-summaries",
      text: "AI summaries appeared as dense hover text and were hard to interpret.",
    },
    {
      id: "no-decisions",
      text: "PMs could see feedback, but it was difficult to translate it into roadmap evidence.",
    },
    {
      id: "batch-generated",
      text: "Insights were batch-generated, so the system could not answer a PM's specific question on demand.",
    },
  ] satisfies readonly CaseStudyAnnotation[],
} as const;

export const UKME_VOC_DESIGN_SECTIONS: readonly CaseStudyProseSection[] = [
  {
    id: "design-strategy",
    title: "Design strategy",
    paragraphs: [
      "The redesign shifted the experience from feedback visibility to roadmap evidence.",
      "I kept the source-by-source structure, moved filters into a right-side drawer, surfaced the top three personas in the filtered dataset, and paired each persona summary with business context like feedback volume, ARR, satisfaction, and account impact.",
      "The raw feedback table stayed in place so PMs could validate the summaries against the source comments.",
    ],
  },
  {
    id: "delivery-and-execution",
    title: "Delivery and execution",
    paragraphs: [
      "I also helped create the delivery structure needed to ship the redesign.",
      "The implementation team included two data analysts, so I set up a lightweight product workflow in Confluence and Jira. I created the PRD, organized the work under an epic, broke the redesign into stories and tasks, added estimates and assignments, and linked Figma screens directly inside tickets.",
      "That gave the team one shared source of truth across research, design, requirements, and implementation.",
    ],
  },
  {
    id: "what-shipped",
    title: "What shipped",
    paragraphs: [
      "The redesigned dashboard shipped during my 10-week internship.",
      "It cleaned up the interface, introduced a better filter workflow, centered the experience around persona-based AI insight cards, and kept the raw feedback table available for evidence.",
      "The biggest change was the information hierarchy. The original dashboard led with rows and columns. The redesign led with who was speaking, what they were saying, and why it might matter.",
    ],
  },
] as const;

export const UKME_VOC_CONSTRAINED_TRANSITION = {
  title: "Why the shipped version was intentionally constrained",
  paragraphs: [
    "The shipped version still worked within Power BI and batch-processing limits.",
    "Feedback sources remained separated because product naming differed across channels. AI summaries were still precomputed, so the dashboard could show useful static insights, but it could not generate a custom answer for every PM question in real time.",
    "That constraint was intentional. The goal was to ship the best usable version inside the current system, not overpromise a capability the platform could not support.",
  ],
} as const;

export const UKME_VOC_PROTOTYPE = {
  title: "Interactive prototype: shipped redesign",
  introParagraphs: [
    "This prototype recreates the constrained redesign I delivered during my internship.",
    "It preserves source-specific navigation, adds a cleaner filter workflow, surfaces persona-based AI insight cards, and keeps the raw feedback table available for validation.",
    "This is a static portfolio prototype. It does not include live AI, backend logic, or API calls.",
  ],
  jumpLinkLabel: "Jump to interactive prototype",
  jumpLinkHref: "#interactive-prototype",
} as const;

export const UKME_VOC_RESULTS: CaseStudyProseSection = {
  id: "results",
  title: "Results",
  paragraphs: [
    "The redesigned dashboard shipped while I was still at UKG.",
    "After launch, dashboard usage, measured by views, increased 340% over five weeks. Product managers responded positively to the redesigned experience, and the work created additional leadership interest in applying the same product design approach to other internal tools.",
    "The result reinforced the core lesson: the value was not just collecting feedback or adding AI tags. The value came from shaping that information into a workflow product managers could actually use.",
  ],
};

export const UKME_VOC_COMING_SOON = {
  badge: "Coming soon",
  title: "Coming soon: AI-native product vision",
  paragraphs: [
    "Coming soon: an AI-native version of the Voice of Customer dashboard.",
    "The next prototype will explore what this product could become with dynamic retrieval, normalized taxonomy, cross-source synthesis, and AI-generated answers grounded in supporting feedback.",
  ],
  bulletsIntro: "Possible future workflow:",
  bullets: [
    "Ask a focused product question.",
    "Retrieve relevant feedback across channels.",
    "Normalize product names and metadata.",
    "Summarize the signal by persona, theme, account impact, and business context.",
    "Show the raw feedback behind the answer.",
    "Help PMs decide whether the issue belongs in roadmap planning.",
  ],
} as const;

export const UKME_VOC_FUTURE_SECTIONS: readonly CaseStudyProseSection[] = [
  {
    id: "beyond-the-shipped-version",
    title: "Beyond the shipped version",
    paragraphs: [
      "The shipped redesign made the dashboard more usable, but it still operated inside the original constraints.",
      "Looking back, I now see the larger opportunity differently. The long-term product should not be a static dashboard with precomputed summaries. It should be an AI-assisted decision system that retrieves the right feedback, applies the right context, and helps PMs reason through specific roadmap questions.",
    ],
  },
  {
    id: "the-product-lesson",
    title: "The product lesson",
    paragraphs: [
      "This project taught me that AI is only useful when it is connected to a real decision.",
      "The original system had data, AI tagging, and a dashboard, but PMs still had to do too much interpretation themselves.",
      "My redesign made the feedback more structured, contextual, and usable inside real enterprise constraints. The future product opportunity is to move from reporting what customers said to helping product managers understand what deserves attention.",
    ],
  },
] as const;
