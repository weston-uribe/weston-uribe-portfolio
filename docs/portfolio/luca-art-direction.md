# Luca Art Direction

Art bible for the Luca in-phone app prototype and generated asset library. For file naming, folder structure, and manifest wiring, see [`public/images/luca/agents.md`](../../public/images/luca/agents.md). For screen layout contracts, see [`lib/portfolio/case-studies/luca-screens.ts`](../../lib/portfolio/case-studies/luca-screens.ts).

## Visual world

Luca is a student wellness coaching platform. The visual world should feel welcoming, playful, and student-facing — not clinical, corporate, or overly cute. Students enter small wellness worlds inhabited by three mascot guides who represent different environments and coaching styles.

## Mascot trio

| Mascot | Environment | Personality |
|--------|-------------|-------------|
| **Otter** | Sea | Curious, energetic, action-oriented |
| **Owl** | Air | Thoughtful, reflective, wisdom-focused |
| **Fox** | Land | Grounded, nurturing, growth-oriented |

Each mascot lives in a distinct block-style environment. They appear as illustrated characters with clean linework — expressive but not kawaii.

## Environment concept

Three elemental blocks — **sea**, **air**, and **land** — form Luca's isometric world:

- Restrained isometric perspective, Minecraft-like world blocks
- Small scene fragments and world pieces compose larger illustrations
- Environments feel handcrafted, not procedurally random

## Tone and references

- **PostHog-inspired** clarity: colorful but controlled, friendly without being childish
- **Playful** but not saccharine; student-facing, not pediatric
- **Slightly isometric** world-building, not flat infographic
- **Not** a corporate wellness dashboard, generic meditation app, or kawaii mascot overload

## Palette

- **Primary accent:** portfolio teal (`#245757` / `--portfolio-kg-teal`)
- **Background:** warm speckled cream (`--luca-app-background`)
- **Surfaces:** soft paper and cream card tones (`--luca-app-surface`, `--luca-app-card`)
- **Earth tones:** controlled, natural complements to teal — not neon or pastel overload
- **Linework:** clean but hand-drawn enough to feel human; not vector-perfect sterile

## Perspective and composition

- Prefer restrained isometric / three-quarter views for world blocks
- Full-bleed phone screens: compose for **9:19.5** aspect ratio
- Leave safe zones for UI overlays (see screen contracts)
- Character cutouts: transparent PNG on neutral or cream background

## Avoid

- Generic wellness gradients (purple-to-blue blobs)
- Corporate dashboard aesthetics
- Kawaii / chibi overload
- Hyper-realistic 3D rendering
- Text-heavy poster compositions (copy lives in UI components)
- Random stickers or decor unless intentionally placed per screen contract

## Asset generation rules

1. Match the screen contract aspect ratio before generating
2. Full-bleed phone backgrounds: **9:19.5**
3. Character cutouts: transparent PNG, document intrinsic dimensions in manifest
4. Use warm speckled cream for illustration backgrounds where transparency is not needed
5. Version files (`v01`, `v02`) — never overwrite approved assets
6. Set manifest `status: "draft"` until reviewed; promote to `"approved"` for product use

## Naming convention

Pattern: `luca-{category}-{descriptor}-v{NN}.{ext}`

See [`public/images/luca/agents.md`](../../public/images/luca/agents.md) for folder mapping and examples.

## Integration workflow

1. Decide the screen job — consult `luca-screens.ts`
2. Choose asset type: full-bleed background, mascot cutout, environment piece, decor accent, or UI-first with art accent
3. Generate at the contract aspect ratio
4. Save to `public/images/luca/{category}/` with versioned filename
5. Register in `lib/portfolio/case-studies/luca-assets.ts`
6. Build screen in `components/custom/portfolio/case-study/luca/app/screens/` using `LucaArtAsset` and app tokens
7. Validate crop, safe zones, responsive behavior, and reduced-motion
8. Commit asset + manifest + code together

## Screen contracts summary

| Screen | Art layout | Primary asset role |
|--------|------------|-------------------|
| Onboarding welcome | Full-bleed cover | `onboarding-welcome-background` |
| Assessment | Contained accent | `assessment-accent` |
| Match | Contained mascot | `match-accent` |
| Booking | Layered decor | `booking-accent` |
| Session | UI-first, minimal art | `session-accent` |
| Progress | Layered illustration | `progress-accent` |

Full contracts: [`lib/portfolio/case-studies/luca-screens.ts`](../../lib/portfolio/case-studies/luca-screens.ts).

## Reference assets

Images in `public/images/luca/references/` are for internal art direction and generation context. Do not render them in product UI unless explicitly promoted to `approved` status and moved to a production folder.
