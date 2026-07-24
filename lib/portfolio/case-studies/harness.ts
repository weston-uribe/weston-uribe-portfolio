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

export type HarnessCapabilityItem =
  | { type: "text"; text: string }
  | { type: "npmPackage"; prefix: string; packageName: string; suffix: string };

export const HARNESS_META = {
  pageTitle: "Product Development Harness · Weston Uribe",
  description:
    "Case study on building an open-source, human-gated multi-agent product development system for non-technical product managers, with an evaluation pipeline for quality, reliability, speed, and cost.",
} as const;

export const HARNESS_HERO = {
  title: "Product Development Harness",
  subtitle:
    "I built an open-source, human-gated multi-agent system that turns product requirements into reviewed, deployed software—and I'm building the evaluation layer needed to improve its quality, reliability, speed, and cost.",
  illustration: {
    assetPath: "/images/harness-work-card.png",
    assetWidth: 1024,
    assetHeight: 509,
    alt: "Product Development Harness interface showing the stages of a multi-agent product development workflow.",
  },
} as const;

export const HARNESS_HERO_ACTIONS = [
  {
    label: "View source",
    href: "https://github.com/weston-uribe/agentic-product-development-harness",
    ariaLabel: "View Product Development Harness source on GitHub",
  },
  {
    label: "View npm package",
    href: "https://www.npmjs.com/package/p-dev-harness",
    ariaLabel: "View the p-dev-harness package on npm",
  },
] as const satisfies readonly HarnessHeroAction[];

export const HARNESS_HERO_METADATA = [
  {
    label: "Primary users",
    values: ["Product managers", "Technical builders"],
  },
  {
    label: "Domain",
    values: ["AI developer tooling", "Product operations"],
  },
  {
    label: "Focus",
    values: [
      "Multi-agent orchestration",
      "Human-in-the-loop delivery",
      "Evaluation infrastructure",
    ],
  },
] as const satisfies readonly HarnessHeroMetadataItem[];

export const HARNESS_AT_A_GLANCE = {
  title: "Case study at a glance",
  storyBlocks: [
    {
      id: "why-i-built-it",
      title: "Why I built it",
      body: "I wanted to prove that a non-technical product manager could direct the delivery of functioning software—not just create prototypes—and give hiring managers something they could inspect, install, and use.",
    },
    {
      id: "what-i-built",
      title: "What I built",
      body: "A Cursor-first, open-source workflow that turns structured Linear issues into plans, code, pull requests, review artifacts, Vercel previews, revisions, and merge decisions through specialized agents and human gates.",
    },
    {
      id: "how-it-changes-pm-workflow",
      title: "How it changes the PM workflow",
      body: "The product manager can work from a prioritized Linear backlog, move an issue into development, and return when a deployed preview is ready. Feedback and progression decisions stay in the issue instead of being copied between tools.",
    },
    {
      id: "where-it-is-now",
      title: "Where it is now",
      body: "The npm package, local configuration GUI, and Linear-to-GitHub delivery workflow are functioning and are being dogfooded on this portfolio. The end-to-end evaluation pipeline is substantial work in progress, not a completed release gate.",
    },
  ] satisfies readonly CaseStudyAtAGlanceStoryBlock[],
} as const;

export const HARNESS_PROTOTYPE_PLACEHOLDER = {
  title: "Interactive product walkthrough",
  body: "A guided walkthrough of setup, workflow controls, and the Linear-to-preview review loop will be added here.",
  badge: "Coming soon",
  previewImage: {
    assetPath: "/images/harness-work-card.png",
    alt: "Static preview of the Product Development Harness setup and workflow interface.",
  },
} as const;

export const HARNESS_IN_DEPTH = {
  title: "In-Depth Case Study",
  subtitle:
    "How I turned my own AI-assisted development process into an open-source product workflow—and why evaluation became the next product constraint.",
} as const;

export const HARNESS_PHASES = {
  context: { id: "context", number: "01", title: "Context" },
  strategy: { id: "strategy", number: "02", title: "Product strategy" },
  workflow: { id: "workflow", number: "03", title: "Product-manager workflow" },
  system: { id: "system", number: "04", title: "Multi-agent system" },
  evaluation: { id: "evaluation", number: "05", title: "Evaluation pipeline" },
  roadmap: { id: "roadmap", number: "06", title: "Current state and roadmap" },
} as const satisfies Record<string, CaseStudyPhase>;

export const HARNESS_SECTIONS = {
  portfolioRequirements: {
    id: "portfolio-requirements",
    title: "A portfolio project with product requirements",
    paragraphs: [
      "I wanted a portfolio project that could demonstrate more than strategy, design, or technical experimentation. As a non-technical product manager, I wanted to show that I could own the path from a product requirement to functioning software that another person could run.",
      "Earlier projects taught me how to coordinate multiple agents, but they were specialized experiments. The Product Development Harness became the opportunity to productize that capability around a broader problem: helping product managers ship.",
      "The portfolio itself acted like a stakeholder. A hiring manager needed to be able to inspect the code, install the product, understand the workflow, and see evidence that I could direct software delivery end to end.",
    ],
  },
  myRole: {
    id: "my-role",
    title: "My role as an AI product manager",
    paragraphs: [
      "I am the sole human product owner and contributor. I define the product direction, requirements, workflow behavior, acceptance criteria, and review decisions. I use ChatGPT and Cursor as development agents to inspect the system, propose technical plans, implement changes, and return evidence for review.",
      "The project is intentionally transparent about that operating model. The skill I am demonstrating is not manual line-by-line coding. It is the ability to direct AI systems, make product and architecture decisions, and validate whether the result behaves as intended.",
    ],
  },
  productizingWorkflow: {
    id: "productizing-workflow",
    title: "Productizing the workflow I was already using",
    paragraphs: [
      "Before the Harness, I coordinated development by hand. I worked through product direction in ChatGPT, copied a specification into Cursor, brought Cursor's plan back for review, returned corrections, ran the implementation, then repeated the same loop with the execution report and any bugs I found while dogfooding.",
      "The workflow produced working software, but I was the integration layer. I moved context between tools, waited on each intermediate step, tracked the roadmap in a notepad, and reconstructed delivery history after the fact.",
      "The Harness turns that loop into a durable workflow centered on a Linear issue. The issue carries the requirements and acceptance criteria; specialized agents plan, implement, review, and repair the work; GitHub preserves the branch, pull request, checks, and artifacts; and a Vercel preview returns to Linear for a human decision. I still own product judgment, but the system carries the context and execution between meaningful gates.",
    ],
  },
  stayInLinear: {
    id: "stay-in-linear",
    title: "Let the product manager stay in Linear",
    paragraphs: [
      "Linear became the operator interface because it matches how product managers already manage backlogs, priorities, requirements, acceptance criteria, and delivery status.",
      "A status change triggers the appropriate GitHub Actions workflow. Specialized Cursor agents plan and build in the target repository, open a pull request, run validation, and capture a Vercel preview. When the issue reaches PM Review, the preview link and implementation evidence are waiting in the Linear comments.",
      "From there, I can dogfood the product, leave revision feedback in the issue, move it to Needs Revision, or approve it for merge. The system handles the next phase and preserves the delivery history in one place.",
      "The design goal is to interrupt the human only at a real blocker or a meaningful review gate—not at every intermediate agent step.",
    ],
  },
  humanReviewFeature: {
    id: "human-review-feature",
    title: "Human review is a feature",
    paragraphs: [
      "Automated tests, browser checks, and agent code review can catch a great deal. They still cannot fully replace product taste, contextual judgment, or the experience of actually using the feature.",
      "The system therefore automates execution while preserving human authority over progression. A deployed preview gives the product manager something concrete to evaluate before the work advances.",
      "Dogfooding is the final product check: does the feature behave as intended, feel coherent, and solve the problem that was actually specified?",
    ],
  },
  specializedAgents: {
    id: "specialized-agents",
    title: "Specialized agents with bounded context",
    paragraphs: [
      "The Harness separates planning, implementation, code review, revision, integration repair, merge, and production synchronization into distinct responsibilities.",
      "Each phase receives the context and skills it needs, writes durable artifacts, and advances through explicit state transitions. This keeps agents focused while making the system easier to inspect, test, recover, and evaluate.",
      "The architecture does not assume that one enormous prompt is the product. The workflow, artifacts, gates, and recovery behavior are part of the product too.",
    ],
  },
  openSourceLocalFirst: {
    id: "open-source-local-first",
    title: "Open-source and local-first by design",
    paragraphs: [
      "The product is published as an open-source npm package. It launches a local configuration GUI and provisions the user's own workflow infrastructure instead of depending on a hosted control plane that I maintain.",
      "Linear provides the product control plane, GitHub and GitHub Actions provide source control and cloud execution, and Vercel provides previews and the webhook bridge. Users bring their own service credentials and Cursor account.",
      "Cursor is the first implemented agent provider because it makes repeated multi-agent development economically practical while still producing strong code. The architecture exposes provider boundaries, but the product should be described honestly as Cursor-first today.",
    ],
  },
  intuitionToEvidence: {
    id: "intuition-to-evidence",
    title: "From intuition to evidence",
    paragraphs: [
      "Building the delivery workflow exposed the next product constraint: I could change prompts, skills, models, and phase structure, but I had no reliable way to know whether those changes produced better code for less time and cost.",
      "The evaluation pipeline is the central learning objective of the project. It is designed to preserve execution evidence, correlate complete issue lifecycles, define stable reviewable subjects, apply versioned rubrics, and project traces into Langfuse without making Langfuse the canonical source of truth.",
      "The goal is to compare workflow configurations and improve the Harness with evidence instead of intuition.",
    ],
  },
  evaluationEnables: {
    id: "evaluation-enables",
    title: "What the evaluation layer should enable",
    paragraphs: [
      "Once the evidence is complete enough, I want to A/B test agent skills, model choices, prompt versions, and workflow structures.",
      "That makes it possible to ask product questions such as whether a more expensive model actually improves review outcomes, whether a specialized skill reduces revision cycles, or whether a workflow change saves time without lowering quality.",
    ],
  },
  whatWorksToday: {
    id: "what-works-today",
    title: "What works today",
    paragraphs: [
      "The functioning product already connects issue intake, agent execution, source control, previews, and human review into one delivery workflow.",
    ],
  },
  whereGoing: {
    id: "where-going",
    title: "Where the system is going",
    paragraphs: [
      "The roadmap moves from proving the current workflow to measuring it, fitting it into engineering review, and allowing it to manage larger product outcomes.",
    ],
  },
  conclusion: {
    id: "conclusion",
    title: "What I am ultimately trying to prove",
    paragraphs: [
      "The long-term goal is not to remove engineers or human judgment. It is to help product managers contribute production-quality work in a form engineers can review, trust, and merge.",
      "For me, the Harness is both a product and a learning system: a way to ship software end to end, and a way to develop the evaluation discipline required to improve AI products responsibly.",
    ],
  },
} as const satisfies Record<string, CaseStudyProseSection>;

export type HarnessSectionId = keyof typeof HARNESS_SECTIONS;

export const HARNESS_REQUIREMENTS_GROUP_TITLE =
  "Requirements shaped by the portfolio" as const;

export const HARNESS_REQUIREMENT_CARDS = [
  {
    title: "Inspectable",
    body: "The source needed to be public so a hiring manager or technical reviewer could examine the actual implementation.",
  },
  {
    title: "Usable",
    body: "The result needed to be installable software, not only a concept, mockup, or private experiment.",
  },
  {
    title: "Accessible",
    body: "The product needed to avoid a hosted control plane that I would have to finance and operate for every user.",
  },
  {
    title: "Production-oriented",
    body: "The workflow needed to move beyond prototype generation toward code that could survive review, validation, and deployment.",
  },
  {
    title: "Measurable",
    body: "The system needed an evaluation layer so changes to agents, skills, models, and workflows could eventually be judged with evidence.",
  },
] as const satisfies readonly CaseStudyInfoCard[];

export const HARNESS_OPERATOR_GROUP_TITLE = "The operator workflow" as const;

export const HARNESS_OPERATOR_STEPS = [
  {
    number: "1",
    title: "Define the issue",
    body: "Write the problem, desired behavior, acceptance criteria, scope, and constraints in Linear.",
  },
  {
    number: "2",
    title: "Start the workflow",
    body: "Move the issue into the appropriate status to trigger planning or implementation.",
  },
  {
    number: "3",
    title: "Let the system execute",
    body: "Agents work in the target repository while GitHub Actions coordinates the phase and preserves artifacts.",
  },
  {
    number: "4",
    title: "Review the preview",
    body: "Open the Vercel preview directly from the Linear issue when the work reaches PM Review.",
  },
  {
    number: "5",
    title: "Route the decision",
    body: "Leave revision feedback or approve the issue for the next gated step.",
  },
] as const satisfies readonly HarnessNumberedStep[];

export const HARNESS_AGENT_ROLES_GROUP_TITLE = "Agent responsibilities" as const;

export const HARNESS_AGENT_ROLES = [
  {
    title: "Planner",
    body: "Translates the Linear issue and repository state into a complete implementation plan that can be reviewed before code changes begin.",
  },
  {
    title: "Implementer",
    body: "Executes the approved plan on the feature branch, validates the changed behavior, and records implementation evidence.",
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
    body: "Diagnoses and repairs merge, branch, CI, or integration failures without bypassing the workflow's evidence and safety requirements.",
  },
  {
    title: "Merge and delivery",
    body: "Advances approved work through the merge and delivery path while preserving the issue, pull request, validation, and deployment record.",
  },
] as const satisfies readonly CaseStudyInfoCard[];

export const HARNESS_INSTALL_CALLOUT = {
  title: "Install locally",
  body: "The public package launches the guided setup experience:",
  command: "npx --yes p-dev-harness",
  supportingText:
    "Users connect their own Linear, GitHub, Vercel, and Cursor accounts.",
} as const;

export const HARNESS_INSTALL_COMMAND = "npx --yes p-dev-harness" as const;

export const HARNESS_AUDIENCE_GROUP_TITLE =
  "Built for two kinds of users" as const;

export const HARNESS_AUDIENCE_CARDS = [
  {
    title: "Product managers",
    body: "Install and configure the Harness, manage a prioritized backlog in Linear, review deployed previews, and direct revisions without living in the command line or an agent IDE.",
  },
  {
    title: "Technical builders",
    body: "Inspect and extend the open-source agents, skills, models, workflows, evaluation contracts, and provider boundaries.",
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
  "I am currently building this layer. The Harness can already deliver software and capture meaningful execution evidence, but comparative experiments, mature datasets, complete cost attribution, dashboards, and automated quality judging are still in development." as const;

export const HARNESS_EVIDENCE_MODEL = {
  label: "Evidence model",
  body: "Canonical run evidence remains in durable local artifacts. Langfuse is used as a projection and inspection layer for traces and evaluation views.",
} as const;

export const HARNESS_CAPABILITIES_GROUP_TITLE =
  "Current capabilities" as const;

export const HARNESS_CURRENT_CAPABILITIES = [
  { type: "text", text: "Public open-source repository" },
  {
    type: "npmPackage",
    prefix: "Public ",
    packageName: "p-dev-harness",
    suffix: " npm package",
  },
  { type: "text", text: "Local guided configuration GUI" },
  { type: "text", text: "Structured issue intake and validation" },
  { type: "text", text: "Linear status-triggered automation" },
  {
    type: "text",
    text: "Planning, implementation, handoff, revision, merge, and production-sync phases",
  },
  {
    type: "text",
    text: "GitHub branches, pull requests, checks, and durable run artifacts",
  },
  {
    type: "text",
    text: "Vercel previews surfaced in Linear for product review",
  },
  { type: "text", text: "Human-controlled revision and merge gates" },
  {
    type: "text",
    text: "Dogfooding against the portfolio repository",
  },
] as const satisfies readonly HarnessCapabilityItem[];

export const HARNESS_DOGFOODING_PARAGRAPH =
  "The portfolio is becoming the primary dogfood target. Parts of the site are already being delivered through the Harness, and the goal is to move more of the portfolio workflow into the system as its reliability and evaluation coverage improve." as const;

export const HARNESS_CURRENT_SCOPE_NOTE =
  "Current scope: early-stage, Cursor-first, Linear + GitHub + GitHub Actions + Vercel, and not production SaaS." as const;

export const HARNESS_ROADMAP_ITEMS = [
  {
    number: "1",
    title: "Complete the evaluation loop",
    body: "Finish comparative experiments, datasets, dashboards, and trustworthy quality, reliability, speed, and cost analysis across complete issue lifecycles.",
  },
  {
    number: "2",
    title: "Make PM-authored work engineer-ready",
    body: "Generate small, reviewable PR slices that fit engineering expectations, add an explicit engineering-review gate, and route review feedback back through the Harness until the work is mergeable.",
  },
  {
    number: "3",
    title: "Orchestrate larger product goals",
    body: "Allow a parent Linear issue to own a broad outcome, create and coordinate child issues, handle research and bug-fixing work, adapt as new information appears, and return to the human only at meaningful gates or real blockers.",
  },
] as const satisfies readonly HarnessNumberedStep[];

export const HARNESS_EXTERNAL_LINKS = {
  github: "https://github.com/weston-uribe/agentic-product-development-harness",
  npm: "https://www.npmjs.com/package/p-dev-harness",
} as const;
