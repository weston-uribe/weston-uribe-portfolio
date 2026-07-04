# public/images/luca/ — Luca Visual Asset Library

## Purpose

Production and reference art for the Luca in-phone app prototype inside the `/work/luca` case study. All paths are registered in `lib/portfolio/case-studies/luca-assets.ts` — **do not hardcode image paths in components**.

## Folder structure

| Folder | Contents |
|--------|----------|
| `brand/` | Logo marks, app icon, notification icon |
| `screens/` | Phone-native full-screen backgrounds per app screen |
| `characters/` | Otter, owl, fox — poses, expressions, transparent cutouts |
| `environments/` | Sea, air, land blocks; isometric world pieces |
| `decor/` | Stars, plants, stickers, props, divider art |
| `references/` | Style and art-direction refs — **not rendered in product UI** |

## Naming convention

Pattern: `luca-{category}-{descriptor}-v{NN}.{ext}`

Examples:
- `luca-brand-app-icon-v01.png`
- `luca-screen-onboarding-welcome-v01.png`
- `luca-character-otter-writing-v01.png`
- `luca-env-sea-block-v01.png`
- `luca-decor-star-soft-v01.png`
- `luca-character-fox-garden-welcome-v01.png` — Fox garden welcome cutout for onboarding hero (manifest: `character-fox-garden-welcome-v01`)
- `luca-decor-paper-speckle-tile-v01.svg` — seamless 640x640 in-app wallpaper texture, PostHog-inspired pseudo-random speckled paper grain (manifest: `decor-paper-speckle-tile-v01`)
- `luca-ref-style-isometric-v01.png`

Rules:
- Lowercase kebab-case; increment version on revision (`v01`, `v02`) — do not overwrite
- No vague names (`final.png`, `imagegen.png`)
- Full-bleed phone screens: target **9:19.5** aspect ratio (matches phone prototype frame)
- Reference assets: prefix `luca-ref-*`, set `status: "reference"` in manifest

## Wiring new assets

1. Save file to the correct subfolder with a versioned name
2. Add entry to `lib/portfolio/case-studies/luca-assets.ts` with full metadata (`id`, `src`, `alt`, `type`, `role`, `recommendedFit`, etc.)
3. Set `status: "draft"` until reviewed; promote to `"approved"` before use in product UI
4. Build or update screen in `components/custom/portfolio/case-study/luca/app/screens/` using `LucaArtAsset` and manifest IDs
5. Commit asset file + manifest + component changes together

## Reference assets

Files in `references/` are for internal art direction and generation context only. Do not import them in components unless explicitly promoted to `approved` status and moved to a production folder.

**Concept art in `screens/`:** `luca-screen-onboarding-welcome-v01.png` is registered as `status: "reference"` — superseded full-bleed illustration concept, not the active onboarding background. The current onboarding screen uses CSS sandy paper-grain + UI copy only.

## Related docs

- Art direction bible: `docs/portfolio/luca-art-direction.md`
- Screen contracts: `lib/portfolio/case-studies/luca-screens.ts`
- In-phone components: `components/custom/portfolio/case-study/luca/app/`
- Copy (not assets): `lib/portfolio/case-studies/luca.ts` (case study narrative), `lib/portfolio/case-studies/luca-app.ts` (in-phone prototype copy)

## Agent rules

- Use manifest IDs (`LucaAssetId`), never raw `/images/luca/` paths in components
- Prefer phone-native art ratios for full-bleed phone screens
- Do not paste square art full-bleed unless the screen contract specifies `contained`
- Preserve the Pixel phone shell and launch animation unless the task is specifically about them
- Do not change Luca case study copy when working on the app prototype unless requested
