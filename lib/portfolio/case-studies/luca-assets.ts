export type LucaAssetType =
  | "brand"
  | "screen"
  | "character"
  | "environment"
  | "decor"
  | "reference";

export type LucaAssetRole =
  | "app-icon"
  | "notification-icon"
  | "logo-mark"
  | "landing-background"
  | "onboarding-welcome-background"
  | "assessment-accent"
  | "match-accent"
  | "booking-accent"
  | "session-accent"
  | "progress-accent"
  | "mascot-cutout"
  | "environment-block"
  | "sticker"
  | "divider"
  | "empty-state"
  | "app-wallpaper-texture";

export type LucaAssetFit = "cover" | "contain" | "fill" | "intrinsic";
export type LucaAssetStatus = "draft" | "approved" | "deprecated" | "reference";

export type LucaAsset = {
  id: string;
  src: string;
  alt: string;
  type: LucaAssetType;
  role: LucaAssetRole;
  width?: number;
  height?: number;
  aspectRatio?: string;
  recommendedFit: LucaAssetFit;
  recommendedPosition?: string;
  safeZone?: string;
  backgroundColor?: string;
  status: LucaAssetStatus;
  unoptimized?: boolean;
};

export const LUCA_ASSETS = {
  "brand-app-icon-v01": {
    id: "brand-app-icon-v01",
    src: "/images/luca/brand/luca-brand-app-icon-v01.png",
    alt: "Luca app icon",
    type: "brand",
    role: "app-icon",
    width: 700,
    height: 700,
    aspectRatio: "1:1",
    recommendedFit: "contain",
    status: "approved",
    unoptimized: true,
  },
  "brand-notification-icon-v01": {
    id: "brand-notification-icon-v01",
    src: "/images/luca/brand/luca-brand-notification-icon-v01.png",
    alt: "Luca notification",
    type: "brand",
    role: "notification-icon",
    width: 64,
    height: 64,
    aspectRatio: "1:1",
    recommendedFit: "contain",
    status: "approved",
    unoptimized: true,
  },
  "brand-mark-circle-v01": {
    id: "brand-mark-circle-v01",
    src: "__inline-svg__",
    alt: "Luca logo mark",
    type: "brand",
    role: "logo-mark",
    aspectRatio: "1:1",
    recommendedFit: "intrinsic",
    status: "approved",
  },
  "screen-landing-v01": {
    id: "screen-landing-v01",
    src: "/images/luca/screens/luca-screen-landing-v01.png",
    alt: "Otter, owl, and fox mascots in small wellness worlds.",
    type: "screen",
    role: "landing-background",
    width: 819,
    height: 1024,
    aspectRatio: "9:19.5",
    recommendedFit: "cover",
    recommendedPosition: "[center_40%]",
    safeZone: "Bottom 20% reserved for caption headline overlay.",
    backgroundColor: "var(--luca-app-illustration-safe-bg)",
    status: "deprecated",
  },
  "screen-onboarding-welcome-v01": {
    id: "screen-onboarding-welcome-v01",
    src: "/images/luca/screens/luca-screen-onboarding-welcome-v01.png",
    alt: "Otter, owl, and fox mascots in a shared Luca wellness world.",
    type: "screen",
    role: "onboarding-welcome-background",
    width: 473,
    height: 1024,
    aspectRatio: "9:19.5",
    recommendedFit: "cover",
    recommendedPosition: "center",
    safeZone:
      "Superseded concept art — full-bleed illustration approach. Not used on the current onboarding screen. Do not wire into product UI without explicit promotion.",
    backgroundColor: "var(--luca-app-illustration-safe-bg)",
    status: "reference",
  },
  "character-fox-garden-welcome-v01": {
    id: "character-fox-garden-welcome-v01",
    src: "/images/luca/characters/luca-character-fox-garden-welcome-v01.png",
    alt: "Fox mascot welcoming students in a garden scene",
    type: "character",
    role: "mascot-cutout",
    width: 1006,
    height: 768,
    aspectRatio: "1006:768",
    recommendedFit: "contain",
    recommendedPosition: "bottom-right",
    safeZone:
      "CTA overlaps the lower-left sandy dirt patch (left rail). Fox figure bleeds toward the screen edge via negative right offset; tune vertical offsets only.",
    status: "approved",
    unoptimized: true,
  },
  "decor-paper-speckle-tile-v01": {
    id: "decor-paper-speckle-tile-v01",
    src: "/images/luca/decor/luca-paper-speckle-tile-v01.svg",
    alt: "",
    type: "decor",
    role: "app-wallpaper-texture",
    width: 512,
    height: 512,
    aspectRatio: "1:1",
    recommendedFit: "fill",
    backgroundColor: "var(--luca-app-background)",
    status: "approved",
    unoptimized: true,
  },
} as const satisfies Record<string, LucaAsset>;

/** Active in-app wallpaper texture tile. CSS `--luca-app-wallpaper-tile` must use the same `src`. */
export const LUCA_APP_WALLPAPER_TEXTURE_ID = "decor-paper-speckle-tile-v01" as const satisfies LucaAssetId;

export const LUCA_APP_WALLPAPER_TEXTURE =
  LUCA_ASSETS[LUCA_APP_WALLPAPER_TEXTURE_ID];

export type LucaAssetId = keyof typeof LUCA_ASSETS;

export function getLucaAsset(id: LucaAssetId): LucaAsset {
  return LUCA_ASSETS[id];
}

export function getLucaAssetsByRole(role: LucaAssetRole): LucaAsset[] {
  return Object.values(LUCA_ASSETS).filter((asset) => asset.role === role);
}

export function getApprovedLucaAsset(id: LucaAssetId): LucaAsset {
  const asset = getLucaAsset(id);
  if (asset.status !== "approved" && asset.status !== "reference") {
    throw new Error(
      `Luca asset "${id}" is not approved for product UI (status: ${asset.status}).`,
    );
  }
  if (asset.status === "reference") {
    throw new Error(
      `Luca asset "${id}" is a reference asset and must not be rendered in product UI.`,
    );
  }
  return asset;
}
