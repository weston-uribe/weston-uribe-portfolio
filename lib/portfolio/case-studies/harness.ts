import type {
  CaseStudyAtAGlanceStoryBlock,
  CaseStudyInfoCard,
  CaseStudyPhase,
  CaseStudyProseSection,
} from "./types";

export type HarnessNumberedStep = {
  number: string;
  title: string;
  body: string;
};

export type HarnessHeroAction = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type HarnessHeroMetadataItem = {
  label: string;
  values: readonly string[];
};

export type HarnessCapabilityItem = { type: "text"; text: string };

export const HARNESS_META = {
  pageTitle: "Litharis · Weston Uribe",
  description:
    "Case study on Litharis, a cloud-hosted product-development control layer that lets a non-technical product manager start from a PRD. Cursor is the live coding harness. Codex is a planned adapter. Not shipped.",
} as const;

export const HARNESS_HERO = {
  title: "Litharis",
  subtitle:
    "A cloud-hosted product development system so a non-technical product manager can turn a PRD into reviewed software without living in the terminal. I am building it end to end as an AI-native product engineer, and using it to build itself.",
  illustration: {
    assetPath: "/images/harness-work-card.png",
    assetWidth: 1024,
    assetHeight: 509,
    alt: "Litharis interface showing stages of a durable product-development workflow.",
  },
} as const;

export const HARNESS_HERO_ACTIONS = [] as const satisfies readonly HarnessHeroAction[];

export const HARNESS_HERO_METADATA = [
  {
    label: "Primary users",
    values: ["Non-technical product managers"],
  },
  {
    label: "Domain",
    values: ["AI developer tooling", "Product operations"],
  },
  {
    label: "Focus",
    values: [
      "Harness of harnesses",
      "Durable product workflow",
      "Human-gated delivery",
    ],
  },
] as const satisfies readonly HarnessHeroMetadataItem[];

export const HARNESS_AT_A_GLANCE = {
  title: "Case study at a glance",
  storyBlocks: [
    {
      id: "why-i-built-it",
      title: "Why I built it",
      body: "Cursor, Codex, and similar tools still require a product manager to know about branches, worktrees, commits, CI, secrets, and which review loops to turn on. I wanted a product that hides that toolchain, and I needed proof I can ship as an AI-native product engineer.",
    },
    {
      id: "what-i-built",
      title: "What I built",
      body: "Litharis is a hosted control layer around coding harnesses, not another coding agent. You start from a PRD. The product owns intent, a native issue system, durable workflow, evidence, and optional human gates. Cursor is the live harness. Codex and other adapters are planned, not selectable today.",
    },
    {
      id: "how-it-changes-pm-workflow",
      title: "How it changes the PM workflow",
      body: "The product manager does not have to operate git, CI, or an agent IDE. A standard path can run underneath. People who want control can change prompts, skills, and gates. Prototype and production share one system, so the work does not stop at a demo.",
    },
    {
      id: "where-it-is-now",
      title: "Where it is now",
      body: "The control plane exists. I am the first user, and I am using Litharis to build Litharis. The happy path is not closed. It is not in other people's hands yet. Next is a private beta with a short list of non-technical product managers. A no-code evaluation laboratory is a later module.",
    },
  ] satisfies readonly CaseStudyAtAGlanceStoryBlock[],
} as const;

export const HARNESS_PROTOTYPE_PLACEHOLDER = {
  title: "Interactive product walkthrough",
  body: "A guided walkthrough will be added after the happy path is closed and the private beta begins.",
  badge: "Coming soon",
  previewImage: {
    assetPath: "/images/harness-work-card.png",
    alt: "Static preview of the Litharis workflow interface.",
  },
} as const;

export const HARNESS_IN_DEPTH = {
  title: "In-Depth Case Study",
  subtitle:
    "How I turned the gap between product intent and production software into a cloud product—and why evaluation waits until the harness itself is trustworthy.",
} as const;

export const HARNESS_PHASES = {
  context: { id: "context", number: "01", title: "Context" },
  strategy: { id: "strategy", number: "02", title: "Product strategy" },
  workflow: { id: "workflow", number: "03", title: "Product-manager workflow" },
  system: { id: "system", number: "04", title: "Control plane" },
  evaluation: { id: "evaluation", number: "05", title: "Evaluation laboratory" },
  roadmap: { id: "roadmap", number: "06", title: "Current state and roadmap" },
} as const satisfies Record<string, CaseStudyPhase>;

export const HARNESS_SECTIONS = {
  portfolioRequirements: {
    id: "portfolio-requirements",
    title: "A product with real requirements, not a demo",
    paragraphs: [
      "I wanted a project that could demonstrate more than strategy, design, or a prototype. As an AI product manager becoming an AI-native product engineer, I needed to own the path from a product requirement to software another person could actually run.",
      "Earlier projects taught me how to coordinate agents. Litharis is the attempt to productize that around a broader problem: helping a non-technical product manager ship without living in the terminal.",
      "This page is the public record of that work. The source is private. There is no public install. The honest status is that I am still closing the happy path.",
    ],
  },
  myRole: {
    id: "my-role",
    title: "My role as an AI product manager and product engineer",
    paragraphs: [
      "I am the sole human product owner and contributor. I define the product direction, requirements, workflow behavior, acceptance criteria, and review decisions. I use ChatGPT and Cursor as development agents to inspect the system, propose technical plans, implement changes, and return evidence for review.",
      "The project is intentionally transparent about that operating model. The skill I am demonstrating is not manual line-by-line coding. It is the ability to direct AI systems, make product and architecture decisions, and validate whether the result behaves as intended.",
    ],
  },
  productizingWorkflow: {
    id: "productizing-workflow",
    title: "Productizing the workflow I was already using",
    paragraphs: [
      "Before Litharis, I coordinated development by hand. I worked through product direction in ChatGPT, copied a specification into Cursor, brought Cursor's plan back for review, returned corrections, ran the implementation, then repeated the same loop with the execution report and any bugs I found while dogfooding.",
      "The workflow produced working software, but I was the integration layer. I moved context between tools, waited on each intermediate step, and reconstructed delivery history after the fact.",
      "Litharis turns that loop into a durable hosted workflow. A native issue carries the requirements and acceptance criteria. Cursor performs the engineering. The product owns orchestration, evidence, optional human gates, and delivery. I still own product judgment, but the system carries the context and execution between meaningful gates.",
    ],
  },
  hideTheToolchain: {
    id: "hide-the-toolchain",
    title: "Hide the toolchain, keep the judgment",
    paragraphs: [
      "Coding harnesses can complete a task. They still leave the hard part on the user. You have to know about branches, worktrees, commits, CI, secrets, security review, code review, and which automations to keep running. Even conversational tools like Codex still live next to a terminal.",
      "Litharis sits above those harnesses. You start from a PRD. The product owns intent, issues, durable workflow, evidence, and optional human gates you can switch on or off. A standard path can run without the user knowing the machinery exists. An advanced surface will exist for people who do want to change it.",
      "Cursor is the only coding harness wired today. Codex and other adapters are future work behind the same boundary. Prototype tools stop at a demo. Litharis is meant to take the same intent through to software you can run.",
      "The design goal is to interrupt the human only at a real blocker or a meaningful review gate, not at every intermediate agent step.",
    ],
  },
  humanReviewFeature: {
    id: "human-review-feature",
    title: "Human review is a feature",
    paragraphs: [
      "Automated tests, browser checks, and agent code review can catch a great deal. They still cannot fully replace product taste, contextual judgment, or the experience of actually using the feature.",
      "The system therefore automates execution while preserving human authority over progression. Gates can be turned on or off. A preview gives the product manager something concrete to evaluate before the work advances.",
      "Dogfooding is the final product check: does the feature behave as intended, feel coherent, and solve the problem that was actually specified?",
    ],
  },
  specializedAgents: {
    id: "specialized-agents",
    title: "A control plane, not one enormous prompt",
    paragraphs: [
      "Litharis separates planning, implementation, code review, revision, integration repair, and delivery into distinct responsibilities with durable state.",
      "Each phase receives the context it needs, writes artifacts, and advances through explicit transitions. This keeps agents focused while making the system easier to inspect, recover, and eventually evaluate.",
      "The architecture does not assume that one enormous prompt is the product. The workflow, artifacts, gates, authorization, audit history, and recovery behavior are part of the product too.",
    ],
  },
  cloudHostedControlLayer: {
    id: "cloud-hosted-control-layer",
    title: "Cloud-hosted by design",
    paragraphs: [
      "Litharis is a hosted SaaS product. It is not a local npm package, not a configuration GUI, and not a plugin that lives inside a coding tool.",
      "The product owns durable product state. PostgreSQL holds product records. Durable workflows carry long-running work so the system can continue after I close a laptop. Authorization, audit history, CI validation, supervision, and deployment infrastructure are part of the same surface.",
      "Cursor is the first production harness because it is what I can actually run today. The architecture leaves room for Codex and other harnesses later. Users cannot select those adapters yet because I have not built them.",
    ],
  },
  intuitionToEvidence: {
    id: "intuition-to-evidence",
    title: "From intuition to evidence, later",
    paragraphs: [
      "Building the delivery workflow exposed the next product constraint: I could change prompts, skills, models, and phase structure, but I had no reliable way to know whether those changes produced better software for less time and cost.",
      "The evaluation laboratory is how that question gets answered. It is a later module. The harness itself has to be trustworthy first. I have not fully designed the lab yet.",
      "When it exists, a non-technical operator should be able to change the product and see the effect on reliability, cost, speed, and quality of the software the system produces. That includes experiments on skills, agent workflows, or an entire pipeline.",
    ],
  },
  evaluationEnables: {
    id: "evaluation-enables",
    title: "What the evaluation layer should enable",
    paragraphs: [
      "Once the harness is good enough, I want non-technical people to run experiments on things they are building, including any GitHub repository.",
      "That makes it possible to ask whether a change to a skill, a workflow, or a model actually improved review outcomes, reduced cost, or saved time without lowering quality.",
    ],
  },
  whatWorksToday: {
    id: "what-works-today",
    title: "What exists today",
    paragraphs: [
      "The control plane exists: native issues, durable orchestration, authorization, audit, CI, supervision, deployment, and a Cursor-backed path through planning, implementation, review, and delivery. I am bug-fixing the happy path. A stranger cannot use it yet.",
    ],
  },
  whereGoing: {
    id: "where-going",
    title: "Where the system is going",
    paragraphs: [
      "Close the happy path. Private beta with a short list of non-technical product managers. Then an evaluation laboratory. Then update this page with usage, if there is any.",
    ],
  },
  conclusion: {
    id: "conclusion",
    title: "What I am ultimately trying to prove",
    paragraphs: [
      "The long-term goal is not to remove engineers or human judgment. It is to help product managers contribute production-quality work in a form engineers can review, trust, and merge, so product managers and engineers can ship together.",
      "For me, Litharis is both a product and a learning system: a way to get closer to the code as an AI-native product engineer, and a way to develop the evaluation discipline required to improve AI products with evidence.",
    ],
  },
} as const satisfies Record<string, CaseStudyProseSection>;

export type HarnessSectionId = keyof typeof HARNESS_SECTIONS;

export const HARNESS_REQUIREMENTS_GROUP_TITLE =
  "Requirements that shaped the product" as const;

export const HARNESS_REQUIREMENT_CARDS = [
  {
    title: "Usable without the terminal",
    body: "A product manager who is not comfortable with git, CI, or an agent IDE still has to be able to start from a PRD.",
  },
  {
    title: "Durable",
    body: "Product intent, workflow, evidence, and decisions have to survive after a conversation ends or a laptop closes.",
  },
  {
    title: "Governed",
    body: "Authorization, audit history, and optional human gates have to be part of the product, not a later apology.",
  },
  {
    title: "Hosted",
    body: "This had to be cloud software a person can sign into, not a local package they have to install and operate.",
  },
  {
    title: "Measurable later",
    body: "The system needs an evaluation laboratory so changes can be judged on reliability, cost, speed, and quality. That module waits until the harness works.",
  },
] as const satisfies readonly CaseStudyInfoCard[];

export const HARNESS_OPERATOR_GROUP_TITLE = "The operator workflow" as const;

export const HARNESS_OPERATOR_STEPS = [
  {
    number: "1",
    title: "Write the intent",
    body: "Start from a PRD in the native issue system: problem, desired behavior, acceptance criteria, scope, and constraints.",
  },
  {
    number: "2",
    title: "Start the workflow",
    body: "Run the work through Litharis. A standard path can stay on. Gates can be switched on or off.",
  },
  {
    number: "3",
    title: "Let the system execute",
    body: "Cursor performs the engineering under Litharis control. Durable state, artifacts, and supervision stay in the product.",
  },
  {
    number: "4",
    title: "Review the result",
    body: "Inspect the preview, the evidence, and the software. The product manager does not have to reconstruct what happened in a terminal.",
  },
  {
    number: "5",
    title: "Route the decision",
    body: "Leave revision feedback, approve the next gated step, or let an ungated path continue.",
  },
] as const satisfies readonly HarnessNumberedStep[];

export const HARNESS_AGENT_ROLES_GROUP_TITLE = "Agent responsibilities" as const;

export const HARNESS_AGENT_ROLES = [
  {
    title: "Planner",
    body: "Translates the issue and repository state into a complete implementation plan that can be reviewed before code changes begin.",
  },
  {
    title: "Implementer",
    body: "Executes the approved plan, validates the changed behavior, and records implementation evidence.",
  },
  {
    title: "Code reviewer",
    body: "Inspects the implementation, acceptance evidence, architecture, and risks, then returns concrete findings rather than a generic approval.",
  },
  {
    title: "Reviser",
    body: "Applies product or technical review feedback while preserving the original issue intent and revalidating affected behavior.",
  },
  {
    title: "Integration repair",
    body: "Diagnoses and repairs merge, branch, CI, or integration failures without bypassing evidence and safety requirements.",
  },
  {
    title: "Merge and delivery",
    body: "Advances approved work through the delivery path while preserving the issue, validation, and deployment record.",
  },
] as const satisfies readonly CaseStudyInfoCard[];

export const HARNESS_INSTALL_CALLOUT = {
  title: "No public install",
  body: "Litharis is cloud-hosted software. There is no npm package and no public repository to clone.",
  supportingText:
    "I am dogfooding it on itself while I close the happy path. A private beta with a short list of non-technical product managers is next.",
} as const;

export const HARNESS_AUDIENCE_GROUP_TITLE =
  "Built for people in tech who do not live in the terminal" as const;

export const HARNESS_AUDIENCE_CARDS = [
  {
    title: "Product managers",
    body: "Start from a PRD, leave a standard path on, and review software without operating git, CI, or a coding harness. Change prompts, skills, and gates if you want to.",
  },
  {
    title: "Technical builders",
    body: "Use the same system with the advanced surface: harness choice later, workflow and skill control, and eventually experiments in the evaluation laboratory.",
  },
] as const satisfies readonly CaseStudyInfoCard[];

export const HARNESS_EVALUATION_DIMENSIONS_GROUP_TITLE =
  "What better needs to mean" as const;

export const HARNESS_EVALUATION_DIMENSIONS = [
  {
    title: "Quality",
    body: "Did the plan and implementation satisfy the product requirements and expected engineering standards?",
  },
  {
    title: "Reliability",
    body: "Did the workflow complete correctly, preserve state, recover safely, and avoid duplicated or contradictory outcomes?",
  },
  {
    title: "Speed",
    body: "How long did each phase and the complete issue lifecycle take?",
  },
  {
    title: "Cost",
    body: "What model usage and token cost were required to produce the outcome?",
  },
] as const satisfies readonly CaseStudyInfoCard[];

export const HARNESS_EVALUATION_STATUS_CALLOUT =
  "The evaluation laboratory is a later module. I have not fully designed it yet. Litharis can already capture execution evidence, but comparative experiments, a no-code operator surface, and trustworthy quality, reliability, speed, and cost analysis are not built." as const;

export const HARNESS_EVIDENCE_MODEL = {
  label: "Evidence model",
  body: "Canonical run evidence stays in Litharis. Langfuse is used as a projection layer for traces, not as the product evaluation laboratory.",
} as const;

export const HARNESS_CAPABILITIES_GROUP_TITLE =
  "Current capabilities" as const;

export const HARNESS_CURRENT_CAPABILITIES = [
  { type: "text", text: "Cloud-hosted control plane" },
  { type: "text", text: "Native issue system" },
  { type: "text", text: "Durable product state, orchestration, and recovery" },
  { type: "text", text: "Authorization, audit history, and optional human gates" },
  {
    type: "text",
    text: "Planning, implementation, review, revision, and delivery phases",
  },
  { type: "text", text: "Cursor as the live coding harness" },
  { type: "text", text: "CI validation, supervision, and deployment infrastructure" },
  { type: "text", text: "Dogfooding Litharis on itself" },
] as const satisfies readonly HarnessCapabilityItem[];

export const HARNESS_DOGFOODING_PARAGRAPH =
  "I am the first user. Litharis is the target of its own workflow. This portfolio is no longer the dogfood surface." as const;

export const HARNESS_CURRENT_SCOPE_NOTE =
  "Current scope: early-stage cloud SaaS, Cursor-first, invitation-only, happy path not closed, not in users' hands. Codex and other harness adapters are future work. Evaluation laboratory is later. No public source or install." as const;

export const HARNESS_ROADMAP_ITEMS = [
  {
    number: "1",
    title: "Close the happy path",
    body: "Make the end-to-end flow work for a stranger with a PRD, then start a private beta with a short list of non-technical product managers.",
  },
  {
    number: "2",
    title: "Add the evaluation laboratory",
    body: "After the harness is trustworthy, let a non-technical operator change the product and see the effect on reliability, cost, speed, and quality.",
  },
  {
    number: "3",
    title: "Add more harnesses",
    body: "Wire Codex and other coding harnesses behind the same adapter boundary so the user can choose the engine without leaving Litharis.",
  },
] as const satisfies readonly HarnessNumberedStep[];
