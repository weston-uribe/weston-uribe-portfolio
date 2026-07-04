import type { LucaAssetId, LucaAssetRole } from "./luca-assets";

export type LucaAppScreenId =
  | "onboarding-welcome"
  | "assessment"
  | "match"
  | "booking"
  | "session"
  | "progress";

export type LucaArtLayout = "full-bleed" | "contained" | "layered" | "none";

export type LucaPrimaryAction = "none" | "inert" | "navigate" | "submit";

export type LucaAppScreenContract = {
  id: LucaAppScreenId;
  job: string;
  primaryAssetId?: LucaAssetId;
  primaryAssetRole: LucaAssetRole;
  aspectRatio: string;
  artLayout: LucaArtLayout;
  safeTextZones: string;
  overlays: readonly string[];
  primaryAction: LucaPrimaryAction;
  motionNotes?: string;
  fallbackAssetId?: LucaAssetId;
};

export const LUCA_APP_SCREENS = {
  "onboarding-welcome": {
    id: "onboarding-welcome",
    job: "Content-first student onboarding landing with fox garden mascot accent.",
    primaryAssetId: "character-fox-garden-welcome-v01",
    primaryAssetRole: "mascot-cutout",
    aspectRatio: "9:19.5",
    artLayout: "layered",
    safeTextZones:
      "Headline and avatar top; fox garden accent right with Get started CTA on dirt patch; explanatory copy below.",
    overlays: [
      "main headline",
      "avatar",
      "fox garden art",
      "secondary CTA on dirt patch",
      "wellness coaching",
      "how-it-works",
      "primary CTA",
    ],
    primaryAction: "inert",
    motionNotes: "Fade in on app reveal after launch animation.",
    fallbackAssetId: "brand-mark-circle-v01",
  },
  assessment: {
    id: "assessment",
    job: "Guide the student through a low-friction wellness check-in.",
    primaryAssetRole: "assessment-accent",
    aspectRatio: "1:1 or 4:3",
    artLayout: "contained",
    safeTextZones: "Center and lower third for form content; art in top or corner.",
    overlays: ["progress indicator", "question card"],
    primaryAction: "submit",
    motionNotes: "Slide transitions between questions.",
  },
  match: {
    id: "match",
    job: "Introduce the student to their matched coach.",
    primaryAssetRole: "match-accent",
    aspectRatio: "1:1",
    artLayout: "contained",
    safeTextZones: "Coach card center; mascot cutout left or right.",
    overlays: ["coach card", "bio snippet"],
    primaryAction: "navigate",
    motionNotes: "Subtle mascot entrance.",
  },
  booking: {
    id: "booking",
    job: "Help the student schedule their first session.",
    primaryAssetRole: "booking-accent",
    aspectRatio: "flexible",
    artLayout: "layered",
    safeTextZones: "Calendar and time slots occupy center; decor accents at edges.",
    overlays: ["time slots", "timezone selector"],
    primaryAction: "submit",
    motionNotes: "None required.",
  },
  session: {
    id: "session",
    job: "Support an active coaching session.",
    primaryAssetRole: "session-accent",
    aspectRatio: "flexible",
    artLayout: "none",
    safeTextZones: "Video or chat frame dominates; minimal decor.",
    overlays: ["session timer", "notes prompt"],
    primaryAction: "submit",
    motionNotes: "None required.",
  },
  progress: {
    id: "progress",
    job: "Show the student's wellness journey and gains.",
    primaryAssetRole: "progress-accent",
    aspectRatio: "flexible",
    artLayout: "layered",
    safeTextZones: "Metric cards and streak in center; environment blocks as accents.",
    overlays: ["metric cards", "streak indicator"],
    primaryAction: "navigate",
    motionNotes: "Optional confetti decor on milestone.",
  },
} as const satisfies Record<LucaAppScreenId, LucaAppScreenContract>;

export function getLucaAppScreen(id: LucaAppScreenId): LucaAppScreenContract {
  return LUCA_APP_SCREENS[id];
}
