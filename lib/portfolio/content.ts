export type WorkItem = {
  id: string;
  contextLabel: string;
  title: string;
  description: string;
  tags: string[];
  status: "active" | "coming-soon";
  href?: string;
  previewImage?: {
    assetPath: string;
    alt: string;
  };
};

export type LogoAffiliation = {
  id: string;
  name: string;
  assetPath: string;
  assetWidth?: number;
  assetHeight?: number;
  monogram: string;
  variant: "standard" | "freedom-robotics";
  accentClasses: string;
  markClasses: string;
  logoImageClasses?: string;
  hasAsset: boolean;
};

export const Y_COMBINATOR_LOGO = {
  assetPath: "/logos/y-combinator.svg",
  assetWidth: 145,
  assetHeight: 30,
} as const;

export const WESTON_PROFILE = {
  assetPath: "/profile/weston-profile.png",
  alt: "Weston Uribe",
  assetWidth: 682,
  assetHeight: 1024,
} as const;

export const ABOUT_ANIMALS_ILLUSTRATION = {
  assetPath: "/about/about-animals.png",
  alt: "Illustrated fox, owl, and otter in teal line art",
  assetWidth: 1024,
  assetHeight: 1024,
} as const;

export const HERO = {
  name: "Weston Uribe",
  headline: "I turn messy problems into beautiful, intuitive user experiences.",
  subheadline:
    "I'm a product person and builder who starts with people, clarifies the problem, and prototypes quickly until the right experience becomes obvious.",
} as const;

export const LOGO_AFFILIATIONS: LogoAffiliation[] = [
  {
    id: "ucla",
    name: "UCLA",
    assetPath: "/logos/ucla.svg",
    assetWidth: 248,
    assetHeight: 119,
    monogram: "UCLA",
    variant: "standard",
    accentClasses: "text-chart-1",
    markClasses: "bg-chart-1/20 ring-chart-1/40 text-chart-1",
    hasAsset: true,
  },
  {
    id: "freedom-robotics",
    name: "Freedom Robotics",
    assetPath: "/logos/freedom-robotics.svg",
    assetWidth: 53,
    assetHeight: 53,
    monogram: "FR",
    variant: "freedom-robotics",
    accentClasses: "text-chart-2",
    markClasses: "bg-chart-2/20 ring-chart-2/40 text-chart-2",
    logoImageClasses:
      "block h-5 w-auto max-w-none shrink-0 object-contain md:h-6",
    hasAsset: true,
  },
  {
    id: "cambridge",
    name: "University of Cambridge",
    assetPath: "/logos/cambridge.svg",
    assetWidth: 1159,
    assetHeight: 239,
    monogram: "CAM",
    variant: "standard",
    accentClasses: "text-chart-3",
    markClasses: "bg-chart-3/20 ring-chart-3/40 text-chart-3",
    hasAsset: true,
  },
  {
    id: "ukg",
    name: "UKG",
    assetPath: "/logos/ukg.svg",
    assetWidth: 2500,
    assetHeight: 780,
    monogram: "UKG",
    variant: "standard",
    accentClasses: "text-chart-4",
    markClasses: "bg-chart-4/20 ring-chart-4/40 text-chart-4",
    hasAsset: true,
  },
  {
    id: "uci",
    name: "UC Irvine",
    assetPath: "/logos/uci.svg",
    assetWidth: 857,
    assetHeight: 153,
    monogram: "UCI",
    variant: "standard",
    accentClasses: "text-chart-5",
    markClasses: "bg-chart-5/20 ring-chart-5/40 text-chart-5",
    hasAsset: true,
  },
];

/** Repeats per animated group; must keep each group wider than the viewport */
export const MARQUEE_GROUP_REPEATS = 4;

export function buildMarqueeGroupItems(): LogoAffiliation[] {
  return Array.from({ length: MARQUEE_GROUP_REPEATS }, () => LOGO_AFFILIATIONS).flat();
}

export const ABOUT_PARAGRAPHS = [
  "I studied psychology because I wanted to understand people, then moved into technology because I wanted to solve human problems at scale. That lens still shapes how I work: start with people, clarify the problem, and build toward something useful.",
  "My path has taken me through product ownership, design, startups, robotics, and enterprise software. I've owned complex technical products, worked closely with engineering teams, designed product experiences from the ground up, and learned how to move from ambiguity to execution when there is no perfect playbook.",
  "I'm strongest when I can combine strategy, storytelling, and rapid prototyping. I like mapping how people, workflows, and technology fit together, then turning that understanding into software that feels clear, polished, and easy to use.",
] as const;

export const UKME_VOC_WORK_CARD_IMAGE = {
  assetPath: "/images/ukme-voc-work-card.png",
  alt: "UKMe Voice of Customer dashboard prototype showing persona insight cards",
} as const;

export const WORK_SECTION = {
  subheadline: "Selected projects, experiments, and case studies.",
  disclaimer:
    "Portfolio demos are intentionally built as static product prototypes. They focus on product thinking, UX flows, and interface design rather than live backends, production databases, or real customer data.",
} as const;

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "ukg",
    contextLabel: "UKMe",
    title: "AI-Powered Voice of Customer Dashboard",
    description:
      "Internal tool that uses AI to turn multi-channel customer feedback into actionable roadmap decisions",
    tags: ["Product Design", "UX/UI", "AI"],
    status: "active",
    href: "/work/ukg",
    previewImage: UKME_VOC_WORK_CARD_IMAGE,
  },
  {
    id: "luca",
    contextLabel: "Luca",
    title: "Finding the Real Constraint in Student Wellness",
    description:
      "Founder case study: discovery, paid pilot, Bubble MVP, and marketplace partnerships.",
    tags: ["Founder", "Product Strategy", "MVP"],
    status: "active",
    href: "/work/luca",
  },
  {
    id: "kinterra",
    contextLabel: "Kinterra",
    title: "Self-Concept-as-Infrastructure for AI Agents.",
    description: "AI memory and identity graph concept.",
    tags: ["AI Product", "Systems Design"],
    status: "coming-soon",
  },
  {
    id: "nl-robotics",
    contextLabel: "Natural Language Robotics",
    title: "A Technical Feasibility Experiment",
    description:
      "Interface concept for teaching robots new tasks through natural language.",
    tags: ["AI UX", "Robotics"],
    status: "coming-soon",
  },
  {
    id: "product-teardown",
    contextLabel: "Undecided",
    title: "Product Teardown",
    description: "Redesign of a real-world product workflow.",
    tags: ["UX Audit", "Redesign"],
    status: "coming-soon",
  },
];

export const CONTACT = {
  title: "Contact",
  subtitle:
    "Reach out for product design collaborations, strategy conversations, or new opportunities.",
  email: "westonuribe99@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/westonuribe",
  location: "Orange County, California",
} as const;

export const RESUME = {
  assetPath: "/resume/weston-uribe-resume.pdf",
  downloadFilename: "weston-uribe-resume.pdf",
} as const;

export const FOOTER_TEXT = "© 2026 Weston Uribe. Built with care.";
