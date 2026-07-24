import type {
  CaseStudyAtAGlanceStoryBlock,
  CaseStudyInfoCard,
  CaseStudyPhase,
  CaseStudyProseSection,
} from "./types";

export type NlRoboticsNumberedStep = {
  number: string;
  title: string;
  body: string;
};

export type NlRoboticsHeroMetadataItem = {
  label: string;
  values: readonly string[];
};

export type NlRoboticsDemo = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  technologies: readonly string[];
  placeholderAssetPath: string;
  placeholderAlt: string;
};

export type NlRoboticsComparisonCard = {
  eyebrow: string;
  title: string;
  body: string;
};

type NlRoboticsSectionKey =
  | "technicalFeasibility"
  | "myRole"
  | "capabilityFactory"
  | "evaluationLessons"
  | "conclusion";

type NlRoboticsSections = {
  readonly [Key in NlRoboticsSectionKey]: CaseStudyProseSection;
};

type NlRoboticsPhaseKey =
  | "technicalFeasibility"
  | "capabilityFactory"
  | "evaluationLessons";

type NlRoboticsPhases = {
  readonly [Key in NlRoboticsPhaseKey]: CaseStudyPhase;
};

export const NL_ROBOTICS_META = {
  pageTitle: "Natural Language Robotics — A multi-agent capability factory",
  description:
    "A local multi-agent system that translated high-level robotics objectives into validated SLAM navigation and pick-and-place behaviors in NVIDIA Isaac Sim.",
} as const;

export const NL_ROBOTICS_HERO = {
  title: "Natural Language Robotics",
  subtitle:
    "I built a local multi-agent development system that translated high-level robotics objectives into iterative planning, implementation, and validation cycles—then used it to deliver autonomous SLAM navigation and robotic pick-and-place behaviors in NVIDIA Isaac Sim.",
} as const;

export const NL_ROBOTICS_HERO_METADATA = [
  {
    label: "Primary users",
    values: [
      "Robotics hobbyists",
      "University labs and courses",
      "Makerspaces",
    ],
  },
  {
    label: "Domain",
    values: [
      "Robotics simulation",
      "Capability development",
      "Multi-agent systems",
    ],
  },
  {
    label: "Focus",
    values: [
      "SLAM navigation",
      "Mobile manipulation",
      "Artifact-backed validation",
    ],
  },
] as const satisfies readonly NlRoboticsHeroMetadataItem[];

export const NL_ROBOTICS_AT_A_GLANCE = {
  title: "Project at a Glance",
  storyBlocks: [
    {
      id: "the-problem",
      title: "The problem",
      body: "Useful robot behavior spans more than one algorithm. A single mission can depend on simulation assets, ROS processes, navigation, manipulation, hardware-specific interfaces, and evidence that the robot actually completed the task.",
    },
    {
      id: "the-experiment",
      title: "The experiment",
      body: "I wanted to test whether agents could take a long-term robotics objective, determine the missing foundational capabilities, implement them in sequence, and keep iterating until the behavior passed a real simulation gate.",
    },
    {
      id: "the-system",
      title: "The system",
      body: "The result was a local planner–implementer factory that authored bounded PRDs, changed the repository, launched Isaac Sim and ROS validation, recorded artifacts, and selected the next technical step.",
    },
    {
      id: "the-outcome",
      title: "The outcome",
      body: "The system ran autonomously for up to eight hours and delivered the intended capability. A separate run continued for roughly fourteen hours without a usable result, exposing the need for better checkpoint design and human escalation.",
    },
  ] satisfies readonly CaseStudyAtAGlanceStoryBlock[],
} as const;

export const NL_ROBOTICS_DEMOS = {
  title: "Simulation demonstrations",
  intro:
    "Two validated missions anchor the technical story across autonomous navigation and manipulation. Demo videos will be added here after the source files are staged.",
  boundaryCallout:
    "These are simulation feasibility proofs. Mission 004 uses synthetic LiDAR and ground-truth odometry; Mission 007 uses a known cube position and scripted joint-space control. Neither video is a physical-robot or generalized autonomy claim.",
  comingSoonBadge: "Demo video coming soon",
  demos: [
    {
      id: "mission004",
      eyebrow: "Mission 004",
      title: "Autonomous SLAM navigation",
      body: "A TurtleBot3 Waffle starts in a procedurally generated maze with no map. Synthetic LiDAR feeds SLAM Toolbox; Nav2 and frontier exploration uncover a route to a known goal, then the robot follows recorded breadcrumbs back to the dock.",
      technologies: [
        "NVIDIA Isaac Sim",
        "ROS 2",
        "Nav2",
        "SLAM Toolbox",
      ],
      placeholderAssetPath:
        "/images/nl-robotics/mission-004-slam-navigation-placeholder.svg",
      placeholderAlt:
        "Illustrated placeholder for the Mission 004 autonomous SLAM navigation demonstration.",
    },
    {
      id: "mission007",
      eyebrow: "Mission 007",
      title: "Mobile-manipulator pick-and-place",
      body: "A TurtleBot3 Waffle with an OpenMANIPULATOR-X arm drives toward a known cube, executes a staged joint-space pick-and-place sequence, and validates that the object was lifted and released within the target tolerance. The mission served as the proof run for a six-stage capability-acquisition workflow.",
      technologies: [
        "TurtleBot3 Waffle",
        "OpenMANIPULATOR-X",
        "Joint-space control",
        "Mission validation",
      ],
      placeholderAssetPath:
        "/images/nl-robotics/mission-007-pick-and-place-placeholder.svg",
      placeholderAlt:
        "Illustrated placeholder for the Mission 007 mobile-manipulator pick-and-place demonstration.",
    },
  ] satisfies readonly [NlRoboticsDemo, NlRoboticsDemo],
} as const;

/**
 * Reserved future media paths for the deferred video-drop workflow.
 * Do NOT reference these in img, video, preload, or metadata markup.
 * Source files stage in `.local-media/nl-robotics/` before import.
 */
export const NL_ROBOTICS_FUTURE_MEDIA_PATHS = {
  mission004Video: "/videos/nl-robotics/mission-004-slam-navigation.mp4",
  mission007Video: "/videos/nl-robotics/mission-007-pick-and-place.mp4",
  mission004Poster:
    "/images/nl-robotics/mission-004-slam-navigation-poster.jpg",
  mission007Poster:
    "/images/nl-robotics/mission-007-pick-and-place-poster.jpg",
} as const;

export const NL_ROBOTICS_IN_DEPTH = {
  title: "In-Depth Project Details",
  subtitle:
    "How a robotics feasibility experiment became a technical study in long-running agents, simulation orchestration, and artifact-backed validation.",
} as const;

export const NL_ROBOTICS_PHASES = {
  technicalFeasibility: {
    id: "technical-feasibility",
    number: "01",
    title: "Technical feasibility",
  },
  capabilityFactory: {
    id: "capability-factory",
    number: "02",
    title: "Capability factory",
  },
  evaluationLessons: {
    id: "evaluation-lessons",
    number: "03",
    title: "Evaluation lessons",
  },
} as const satisfies NlRoboticsPhases;

export const NL_ROBOTICS_SECTIONS = {
  technicalFeasibility: {
    id: "technical-feasibility",
    title: "Can agents build robot capabilities from a mission?",
    paragraphs: [
      "I began with a long-term objective rather than a fixed implementation plan: create a robot system that could acquire the foundational capabilities required to complete increasingly difficult missions in simulation.",
      "The work crossed NVIDIA Isaac Sim, Windows, WSL2, ROS 2, Nav2, SLAM Toolbox, a TurtleBot3 Waffle, and an OpenMANIPULATOR-X arm. The technical question was not whether an agent could write one script. It was whether a system of agents could decide what needed to exist, build it in the right order, and prove that it worked.",
      "The broader product vision was natural-language robot teaching for hobbyists and educational institutions. This project focused on the infrastructure required to make that promise credible: capability acquisition, execution, validation, and reuse.",
    ],
  },
  myRole: {
    id: "my-role",
    title: "My role",
    paragraphs: [
      "I defined the product direction, missions, architecture constraints, success criteria, and agent workflow. Cursor agents generated much of the implementation; I reviewed evidence, corrected the system, and decided when a capability was actually usable.",
    ],
  },
  capabilityFactory: {
    id: "capability-factory",
    title: "A local planner–implementer capability factory",
    paragraphs: [
      "The first version let agents work for too long at the level of one implementation problem. I replaced that open-ended loop with explicit roles and durable handoffs.",
      "A planner read the current milestone and evidence, chose the next bounded checkpoint, and authored one PRD with one primary gate. An implementer changed the repository and ran the approved validation on the Isaac-capable machine.",
      "Each cycle wrote its reasoning and result back into the repository: capability requests, PRDs, implementation reports, pass/fail sentinels, metrics, and catalog entries. Chat history was disposable; artifacts were the source of truth.",
      "The system treated failed simulations as information. Missing dependencies, blocked paths, and unsuccessful behaviors were classified honestly instead of being converted into progress.",
    ],
  },
  evaluationLessons: {
    id: "evaluation-lessons",
    title: "Long-running agents need perspective, not just persistence",
    paragraphs: [
      "One autonomous run continued for roughly fourteen hours without producing a usable result. The problem was not insufficient persistence. The agents had become absorbed in a local implementation detail and kept optimizing it without re-evaluating whether the work advanced the mission.",
      "I changed the operating philosophy around a stable North Star and a checkpoint ladder. Every robotics PRD had to advance one checkpoint through one primary gate, preferably tied to the user-visible outcome. Repeated failure on a proxy metric triggered reassessment instead of another tuning loop.",
      "The factory also separated recoverable infrastructure or validation failures from decisions that required human judgment. It could retry technical failures within a bounded budget, but it needed to surface product, architecture, scope, or exhausted-recovery decisions to an external evaluator.",
      "After those changes, a later run operated for roughly eight hours and delivered the intended capability. The lesson was that autonomy becomes useful only when the system can question its current approach, change the problem decomposition, and know when to ask for help.",
    ],
  },
  conclusion: {
    id: "conclusion",
    title: "What this proved",
    paragraphs: [
      "Natural Language Robotics proved that agents could orchestrate a complicated local robotics stack and produce validated behaviors over long execution windows. It also showed the boundary: the difficult part is not keeping agents running. It is designing the checkpoints, evidence, and escalation logic that keep them working on the right problem.",
    ],
  },
} as const satisfies NlRoboticsSections;

export const NL_ROBOTICS_TECHNICAL_STACK = [
  {
    title: "NVIDIA Isaac Sim",
    body: "Physics simulation, robot composition, procedural environments, and headless mission execution.",
  },
  {
    title: "ROS 2 stack",
    body: "Nav2, SLAM Toolbox, transforms, and action orchestration running inside WSL2.",
  },
  {
    title: "Process bridge",
    body: "A local UDP boundary connected the Windows simulation process to the isolated ROS runtime.",
  },
  {
    title: "Robot platform",
    body: "A TurtleBot3 Waffle mobile base combined with an OpenMANIPULATOR-X arm.",
  },
  {
    title: "Validation",
    body: "Operatorless commands, result sentinels, metrics, and per-run evidence determined whether a capability passed.",
  },
] as const satisfies readonly [
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
  CaseStudyInfoCard,
];

export const NL_ROBOTICS_FACTORY_FLOW = {
  title: "From objective to validated capability",
  steps: [
    {
      number: "01",
      title: "Objective",
      body: "Start from a high-level robotics outcome instead of a predetermined implementation.",
    },
    {
      number: "02",
      title: "Planner",
      body: "Read the current milestone and evidence, choose the next bounded checkpoint, and author one PRD with one primary gate.",
    },
    {
      number: "03",
      title: "Implementer",
      body: "Change the repository, launch the required simulation stack, and execute the approved validation.",
    },
    {
      number: "04",
      title: "Evidence",
      body: "Write pass/fail sentinels, metrics, reports, and catalog updates that the next planner can inspect.",
    },
    {
      number: "05",
      title: "Reassess",
      body: "Continue, change approach, or request human judgment based on user-outcome evidence—not agent confidence.",
    },
  ] satisfies readonly [
    NlRoboticsNumberedStep,
    NlRoboticsNumberedStep,
    NlRoboticsNumberedStep,
    NlRoboticsNumberedStep,
    NlRoboticsNumberedStep,
  ],
} as const;

export const NL_ROBOTICS_FACTORY_CALLOUT =
  "Autonomy was measured by time to a validated capability—not by how long the agents stayed busy." as const;

export const NL_ROBOTICS_COMPARISON_CARDS = [
  {
    eyebrow: "Fourteen-hour run",
    title: "Persistence without perspective",
    body: "The agents remained active but did not deliver a usable result. They became absorbed in a local implementation detail and failed to reconsider whether the work advanced the mission.",
  },
  {
    eyebrow: "System redesign",
    title: "Checkpoints and outcome gates",
    body: "I introduced a stable North Star, checkpoint decomposition, one outcome-aligned gate per PRD, proxy reassessment, failure classification, and explicit human escalation.",
  },
  {
    eyebrow: "Eight-hour run",
    title: "A validated outcome",
    body: "A later run operated for roughly eight hours and delivered the intended capability, showing that better control logic mattered more than raw runtime.",
  },
] as const satisfies readonly [
  NlRoboticsComparisonCard,
  NlRoboticsComparisonCard,
  NlRoboticsComparisonCard,
];

export const NL_ROBOTICS_RELATED_HARNESS = {
  title: "The same systems question, applied elsewhere",
  body: "Natural Language Robotics and the Product Development Harness are separate implementations. Both reflect my interest in how agents should plan, execute, evaluate their own work, and involve a human when local optimization stops serving the intended outcome.",
  supporting:
    "The Harness applies that question to product development, with a user interface, human review, and evaluation infrastructure.",
  linkLabel: "View the Product Development Harness",
  href: "/work/harness",
} as const;
