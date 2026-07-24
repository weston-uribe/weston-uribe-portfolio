import type {
  CaseStudyAtAGlanceStoryBlock,
  CaseStudyInfoCard,
  CaseStudyPhase,
  CaseStudyProseSection,
} from "./types";

export type KinterraNumberedStep = {
  number: string;
  title: string;
  body: string;
};

export type KinterraHeroMetadataItem = {
  label: string;
  values: readonly string[];
};

export type KinterraStrategyStage = {
  label: string;
  title: string;
  body: string;
};

export type KinterraLesson = {
  title: string;
  body: string;
};

export type KinterraLabeledCallout = {
  label: string;
  body: string;
};

type KinterraSectionKey =
  | "makingIdentityVisible"
  | "myRole"
  | "infrastructureStrategy"
  | "individualizedStructure"
  | "alignmentMeasurement"
  | "streamingAgent"
  | "privacy"
  | "whatShipped"
  | "whereItIsNow"
  | "conclusion";

type KinterraSections = {
  readonly [Key in KinterraSectionKey]: CaseStudyProseSection;
};

type KinterraPhaseKey =
  | "context"
  | "strategy"
  | "identityModel"
  | "deltaEngine"
  | "agentSystem"
  | "outcomes";

type KinterraPhases = {
  readonly [Key in KinterraPhaseKey]: CaseStudyPhase;
};

export const KINTERRA_META = {
  pageTitle: "Kinterra — Self-concept infrastructure for AI products",
  description:
    "A deployed AI system that turns conversations and imported data into an inspectable model of self-concept and measurable alignment signals.",
} as const;

export const KINTERRA_HERO = {
  title: "Kinterra",
  subtitle:
    "I built a full-stack AI system that turns conversations and imported digital history into a living model of self-concept—then uses deterministic analytics to reveal the gap between who someone believes they are, who they want to become, and how they actually show up.",
} as const;

export const KINTERRA_TRI_SELF_ILLUSTRATION = {
  assetPath: "/images/kinterra/kinterra-tri-self.svg",
  assetWidth: 400,
  assetHeight: 360,
  alt: "Tri-self model showing perceived, ideal, and actual self connected to a central self-concept model.",
} as const;

export const KINTERRA_HERO_METADATA = [
  {
    label: "Primary users",
    values: [
      "Individuals pursuing self-development",
      "Coaches and coaching organizations",
      "AI product teams",
    ],
  },
  {
    label: "Domain",
    values: ["Personal AI", "Coaching technology", "Identity infrastructure"],
  },
  {
    label: "Focus",
    values: [
      "Semantic identity modeling",
      "Deterministic alignment analytics",
      "Streaming agent tools",
    ],
  },
] as const satisfies readonly KinterraHeroMetadataItem[];

export const KINTERRA_AT_A_GLANCE = {
  title: "Project at a Glance",
  storyBlocks: [
    {
      id: "the-problem",
      title: "The problem",
      body: "AI conversations could help someone explore a problem, but the insight remained trapped in transcripts or opaque memory. There was no durable place to inspect identity, see change over time, or decide what to work on next.",
    },
    {
      id: "the-product",
      title: "The product",
      body: "Kinterra builds a living model of self-concept from conversations and imported history. Users can inspect, edit, and develop the beliefs, goals, domains, and evidence that shape how they understand themselves.",
    },
    {
      id: "the-system",
      title: "The system",
      body: "LLMs extract meaning; embeddings retrieve individualized relationships; deterministic routing and scoring keep the system repeatable, inspectable, and economical; streaming agents use the result through tools.",
    },
    {
      id: "the-outcome",
      title: "The outcome",
      body: "The production application supported more than 800 user messages in one month. User learning shifted the strategy from another consumer chatbot toward self-concept infrastructure for coaching and AI products.",
    },
  ] satisfies readonly CaseStudyAtAGlanceStoryBlock[],
} as const;

export const KINTERRA_PROTOTYPE_PLACEHOLDER = {
  badge: "Coming soon",
  title: "Interactive product walkthrough",
  body: "A guided walkthrough of Kinterra’s streaming agent, identity analytics, and alignment views will be added here using synthetic data. The production application remains private and is not linked from this portfolio.",
} as const;

export const KINTERRA_IN_DEPTH = {
  title: "In-Depth Project Details",
  subtitle:
    "The full story behind the product strategy, identity model, deterministic analytics, streaming agent system, and lessons from taking Kinterra to production.",
} as const;

export const KINTERRA_PHASES = {
  context: { id: "context", number: "01", title: "Context" },
  strategy: { id: "strategy", number: "02", title: "Product strategy" },
  identityModel: {
    id: "identity-model",
    number: "03",
    title: "Identity model",
  },
  deltaEngine: { id: "delta-engine", number: "04", title: "Delta Engine" },
  agentSystem: { id: "agent-system", number: "05", title: "Agent system" },
  outcomes: {
    id: "outcomes",
    number: "06",
    title: "Outcomes and lessons",
  },
} as const satisfies KinterraPhases;

export const KINTERRA_SECTIONS = {
  makingIdentityVisible: {
    id: "making-identity-visible",
    title: "Making identity visible",
    paragraphs: [
      "ChatGPT could help me explore a problem, but the insight disappeared into a transcript or stayed inside opaque model memory. I had no durable place to see who I used to be, who I believed I was now, who I was trying to become, or how those representations changed over time.",
      "That made self-improvement harder to direct. Missing areas stayed unexplored, contradictions were difficult to trace, and every new conversation had to reconstruct context before reaching the underlying issue.",
      "Kinterra began with a simple product thesis: identity should be a living model a person can inspect, challenge, edit, and develop—not a hidden summary generated by an AI.",
    ],
  },
  myRole: {
    id: "my-role",
    title: "My role",
    paragraphs: [
      "I defined the product thesis, tri-self model, experience, data semantics, system requirements, privacy boundaries, scoring behavior, and release decisions. I also designed the interaction patterns and iterated the conversational system until its behavior matched the intended coaching philosophy.",
      "I used ChatGPT and Cursor as development agents. They generated much of the code and prompt text; I directed the architecture, specified the product in detail, tested and edited the prompts, reviewed plans and implementations, and decided what was ready to ship.",
    ],
  },
  infrastructureStrategy: {
    id: "infrastructure-strategy",
    title: "From another chatbot to self-concept infrastructure",
    paragraphs: [
      "The first version asked individuals to work directly with a purpose-built identity assistant. Conversation was a natural way to explore a problem, and the system automatically converted what someone said into a structured identity model.",
      "Real usage exposed a strategic constraint: people were already overloaded with chatbots and did not want to move their reflective work into another destination. Many preferred Claude, ChatGPT, a coach, or the tools they already used.",
      "A Claude conversation import changed the product thesis. Instead of requiring users to start inside Kinterra, the system could ingest existing history and construct the model in the background. The longer-term opportunity became connecting the places where identity is already expressed—conversations, calendars, messages, work channels, and other digital activity.",
      "That led to a broader position: Kinterra was not the final coaching, education, or career product. It was self-concept infrastructure that those products could use to understand a person with greater continuity, context, and precision.",
    ],
  },
  individualizedStructure: {
    id: "individualized-structure",
    title: "Turning language into individualized structure",
    paragraphs: [
      "Kinterra organizes self-concept through a tri-self model: perceived self, ideal self, and actual self. The model captures who someone believes they are, who they want to become, and how they report showing up in the world.",
      "Identity is also domain-specific. A person may understand resilience differently at work, within a family, or in a relationship. Concepts and domains are not imposed from a universal taxonomy; they are discovered from each person’s language and represented individually.",
      "The system uses an LLM where semantic interpretation is required, embeddings where similarity and retrieval matter, and deterministic rules wherever the decision can be made reliably without another model call.",
    ],
  },
  alignmentMeasurement: {
    id: "alignment-measurement",
    title: "Making self-concept measurable",
    paragraphs: [
      "Once the tri-self model existed, the next question was where the largest gap lived. Kinterra represents perceived, ideal, and actual self-views as semantic and scalar vectors, then computes the distance and geometry among them.",
      "The Delta Engine produces alignment and tension signals at the concept, domain, and whole-person levels. A gap around resilience at work can therefore be distinguished from resilience in family life, then compared with the broader identity model.",
      "The calculation is deterministic by design. Once meaning has been extracted and embedded, the same inputs produce the same output without paying an LLM to reinterpret the person every time.",
      "The result is a prioritization signal: a person, coach, or agent can focus on the areas where stated identity, desired identity, and observed behavior diverge most.",
    ],
  },
  streamingAgent: {
    id: "streaming-agent",
    title: "Closing the loop with a streaming agent",
    paragraphs: [
      "The identity model became useful when the assistant could retrieve it during a live conversation. Kinterra’s agent streams responses through a single server-sent event session, announces its plan, invokes internal tools, and continues answering with the retrieved context.",
      "The shipped read tools can search identity concepts, retrieve a detailed concept dossier, and load alignment snapshots. This helps the agent reach the relevant issue faster without placing the entire identity model into every prompt.",
      "The conversation product also supports attachments, speech-to-text, text-to-speech, imported conversation history, and structured calendar or CSV workflows. OpenAI requests are configured not to store conversation state, while Kinterra retains the user-controlled model in its own encrypted system.",
    ],
  },
  privacy: {
    id: "privacy",
    title: "Private by design",
    paragraphs: [
      "Identity content is among the most sensitive data a product can hold. Kinterra encrypts protected user text at rest with AES-256-GCM, uses encrypted transport, applies row-level authorization, and preserves source provenance behind identity assertions.",
      "I could measure usage volume, but the system was not designed for me to read people’s private identity data. This case study therefore uses only aggregate counts, public product copy, original diagrams, and anonymized feedback.",
    ],
  },
  whatShipped: {
    id: "what-shipped",
    title: "What shipped",
    paragraphs: [
      "Kinterra became a functioning production application rather than a static prototype. It included anonymous preview, accounts, subscriptions, identity extraction and editing, conflict resolution, alignment scoring, recommendations, streaming agent tools, relationship and coaching flows, email ingestion, Claude history import, and calendar and CSV workflows.",
      "More than 800 user messages were sent through the in-app assistant in one month by invited users recruited through friends, family, campus outreach, and referrals.",
    ],
  },
  whereItIsNow: {
    id: "where-it-is-now",
    title: "Where it is now",
    paragraphs: [
      "Kinterra is paused, not abandoned. The production system and core self-concept infrastructure work, and the technical learning now informs the products I build.",
      "Creating a complete business would require choosing and supporting a focused vertical application on top of the infrastructure. I paused active development to focus on my AI product portfolio and on building new capabilities, including evaluation systems.",
    ],
  },
  conclusion: {
    id: "conclusion",
    title: "What Kinterra proved",
    paragraphs: [
      "Kinterra taught me how to translate an ambiguous psychological idea into a production AI system with explicit data contracts, measurable outputs, user control, and privacy boundaries. The core infrastructure is working; the next constraint is not another technical subsystem, but choosing the application and customer worth building around it.",
    ],
  },
} as const satisfies KinterraSections;

export const KINTERRA_CORE_QUESTION_CARDS = [
  {
    title: "Who do I believe I am?",
    body: "Make the perceived self visible instead of leaving it implicit inside conversations.",
  },
  {
    title: "Who do I want to become?",
    body: "Preserve goals, values, and the ideal self as a model that can develop over time.",
  },
  {
    title: "How do I actually show up?",
    body: "Compare identity claims with the person’s reported actions, evidence, and lived context.",
  },
  {
    title: "What should I work on next?",
    body: "Find the largest unresolved gaps rather than restarting from a blank conversation.",
  },
] as const satisfies readonly [
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
];

export const KINTERRA_STRATEGY_STAGES = [
  {
    label: "01",
    title: "Identity conversation",
    body: "A consumer application where a purpose-built assistant helped individuals explore themselves and automatically built the model.",
  },
  {
    label: "02",
    title: "Integrated history",
    body: "Imports proved that the model could be created from work users had already done elsewhere instead of demanding another chatbot habit.",
  },
  {
    label: "03",
    title: "Infrastructure layer",
    body: "Coaching organizations and AI products could use the same identity system while owning their own workflow, expertise, and user outcome.",
  },
] as const satisfies readonly [
  KinterraStrategyStage,
  KinterraStrategyStage,
  KinterraStrategyStage,
];

export const KINTERRA_STRATEGY_CALLOUT =
  "The insight was not that conversation failed. Conversation became one input among many." as const;

export const KINTERRA_MODEL_LAYER_CARDS = [
  {
    title: "Concept",
    body: "An individualized idea such as resilience, belonging, leadership, or independence.",
  },
  {
    title: "Domain",
    body: "The life context in which a concept appears, such as work, family, relationships, or personal growth.",
  },
  {
    title: "Assertion",
    body: "A specific claim about a concept, tied to a self-view and domain rather than treated as universal truth.",
  },
  {
    title: "Evidence",
    body: "The source-backed language or observation that explains why an assertion exists.",
  },
] as const satisfies readonly [
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
];

export const KINTERRA_IDENTITY_PIPELINE_GROUP_TITLE =
  "From language to an inspectable model" as const;

export const KINTERRA_IDENTITY_PIPELINE_STEPS = [
  {
    number: "01",
    title: "Extract",
    body: "A language model converts conversation or imported history into structured concepts, assertions, self-views, domains, and evidence.",
  },
  {
    number: "02",
    title: "Retrieve",
    body: "Embeddings find related concepts and assertions within the individual user’s model.",
  },
  {
    number: "03",
    title: "Route",
    body: "High-confidence matches are reused deterministically; ambiguous cases receive a bounded LLM decision; low-confidence items create new structure.",
  },
  {
    number: "04",
    title: "Preserve",
    body: "Atomic writes retain evidence provenance and explicit evolution rather than silently overwriting meaning.",
  },
  {
    number: "05",
    title: "Inspect",
    body: "The analytics surface lets users search, edit, merge, and refine the model as their understanding changes.",
  },
] as const satisfies readonly [
  KinterraNumberedStep,
  KinterraNumberedStep,
  KinterraNumberedStep,
  KinterraNumberedStep,
  KinterraNumberedStep,
];

export const KINTERRA_PRODUCT_PRINCIPLE_CALLOUT =
  "Kinterra treats every extracted insight as a hypothesis, not a verdict. Users can challenge the model, correct it, and watch it change as they do." as const;

export const KINTERRA_MEASUREMENT_LEVEL_CARDS = [
  {
    title: "Concept and domain",
    body: "Measures one identity concept inside one life context, such as resilience at work.",
  },
  {
    title: "Concept",
    body: "Combines the same identity concept across the domains in which it appears.",
  },
  {
    title: "Domain",
    body: "Shows alignment patterns across the concepts that shape one area of life.",
  },
  {
    title: "Global",
    body: "Aggregates the broader identity model into a whole-person alignment signal.",
  },
] as const satisfies readonly [
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
];

export const KINTERRA_MEASUREMENT_CALLOUT =
  "The alignment score is not a diagnosis or objective truth. It is an experimental, inspectable model for making divergence visible and deciding what deserves attention." as const;

export const KINTERRA_AGENT_CAPABILITY_CARDS = [
  {
    title: "Streaming conversation",
    body: "Responses, status updates, plans, and tool activity arrive incrementally instead of waiting for a fully buffered answer.",
  },
  {
    title: "Identity search",
    body: "The agent retrieves relevant concepts without loading the entire identity model into every request.",
  },
  {
    title: "Concept dossiers",
    body: "A focused tool returns the assertions, domains, evidence, and context behind one identity concept.",
  },
  {
    title: "Alignment snapshots",
    body: "The agent can retrieve current alignment signals and focus the conversation on meaningful divergence.",
  },
  {
    title: "Multimodal input",
    body: "Attachments, speech-to-text, and text-to-speech make the conversational surface more flexible.",
  },
  {
    title: "Imported context",
    body: "Claude history, email ingestion, and structured workflows let the model use information created outside the in-app chat.",
  },
] as const satisfies readonly [
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
];

export const KINTERRA_SHIPPED_CAPABILITIES_GROUP_TITLE =
  "Shipped capabilities" as const;

export const KINTERRA_SHIPPED_CAPABILITIES = [
  "Anonymous preview",
  "Accounts and entitlements",
  "Streaming AI conversation",
  "Identity extraction",
  "Editable identity analytics",
  "Conflict-resolution workflows",
  "Alignment scoring",
  "Recommendations",
  "Streaming agent read tools",
  "Claude history import",
  "Email ingestion",
  "Relationship and coaching flows",
  "Attachments and voice",
  "Calendar and CSV workflows",
  "Encrypted identity data",
] as const satisfies readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

export const KINTERRA_EARLY_FEEDBACK = {
  label: "Early feedback",
  body: "One early user reported that a personal problem they had carried for roughly ten years became solvable in less than an hour.",
} as const satisfies KinterraLabeledCallout;

export const KINTERRA_PRODUCT_LESSONS_GROUP_TITLE =
  "What I learned" as const;

export const KINTERRA_PRODUCT_LESSONS = [
  {
    title: "The interface is part of the operating model",
    body: "The original zoomable graph matched the conceptual data structure, but it overwhelmed users and created large maintenance costs. Replacing it with a hierarchical table made the model easier to inspect and much easier to evolve.",
  },
  {
    title: "Every shipped feature creates a support obligation",
    body: "The animated graph required layout logic, motion behavior, and continual updates whenever the model changed. I learned to evaluate features not only by what they demonstrate, but by whether I am prepared to maintain them.",
  },
  {
    title: "Infrastructure still needs an application",
    body: "The self-concept layer became technically substantial, but a complete product still requires a focused user, workflow, and outcome. Coaching, education, and career products could each use the infrastructure, but each would be its own business and product commitment.",
  },
] as const satisfies readonly [KinterraLesson, KinterraLesson, KinterraLesson];

export const KINTERRA_CURRENT_SCOPE_CALLOUT =
  "Not shipped: automated learning of the next best action, agent write tools, and a production connection between the completed MCP implementation and external clients such as Claude." as const;
