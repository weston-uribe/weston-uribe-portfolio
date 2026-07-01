# lib/ — Utilities and Constants

## Purpose

Shared logic, helper functions, and design system constants live here. Nothing in `lib/` should be React-component-specific — it is for pure logic and configuration.

## Directory Structure

| Path                     | Purpose                                              |
|--------------------------|------------------------------------------------------|
| `utils.ts`               | `cn()` — Tailwind class merging via clsx + twMerge   |
| `constants/index.ts`     | Barrel export for all constant modules               |
| `constants/spacing.ts`   | Semantic spacing tokens (Tailwind class strings)     |
| `constants/layout.ts`    | Semantic layout tokens (containers, pageShell)        |
| `constants/breakpoints.ts` | Breakpoint docs + responsive layout/typography tokens |
| `portfolio/content.ts`   | Portfolio landing page copy, work items, `LOGO_AFFILIATIONS`, and `buildMarqueeGroupItems()` for the marquee |
| `portfolio/case-studies/` | Case-study-specific copy and structured content (one module per project, e.g. `ukme-voc.ts`) |

## Constants System

Constants export **complete, static Tailwind class strings** — never raw numbers or fragments. This keeps Tailwind's static analysis happy and prevents magic numbers.

```ts
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";

// Section shell:
<section className={cn(RESPONSIVE.sectionAnchor, SPACING.sectionPaddingY, SPACING.pagePaddingX)}>
```

### Responsive breakpoints

Use Tailwind's default breakpoints, mobile-first:

| Name    | Prefix | Min width |
|---------|--------|-----------|
| Mobile  | (none) | `< 768px` |
| Tablet  | `md:`  | `768px`   |
| Desktop | `lg:`  | `1024px`  |

Large phones may use `sm:` (`640px`) for minor typography or padding tweaks inside `RESPONSIVE` tokens.

- **`LAYOUT.pageShell`** — shared horizontal inset + max width for nav and every section (keeps left edges aligned)
- **`SPACING.sectionPaddingY`** — vertical section rhythm
- **`SPACING.marqueeSectionY`** / **`SPACING.marqueeItemGap`** — logo marquee vertical padding and horizontal item spacing
- **`RESPONSIVE.*`** — grid, typography, carousel, marquee, CTA, and case-study layout patterns that change by breakpoint

Add new responsive patterns to `constants/breakpoints.ts` rather than duplicating `md:` / `lg:` strings in components.

### How to Add a New Constant

1. Decide if it belongs in `spacing.ts`, `layout.ts`, or `breakpoints.ts` (responsive).
2. Export a descriptive key with a full Tailwind class string as the value.
3. Add the new module to `constants/index.ts` if you created a new file.
4. Update this agents.md to reflect the addition.

## Where Logic Should Live

- **Pure helpers** (formatting, validation, data transforms): add to `lib/` as a new file or extend `utils.ts`.
- **React hooks**: create a `hooks/` directory at the project root (not inside `lib/`).
- **API/data fetching**: create a `lib/api/` or `lib/data/` subdirectory when needed.
- **Avoid duplication**: before creating a new utility, check if the behavior already exists in `lib/`.

## Portfolio marquee content

- **`LOGO_AFFILIATIONS`** — canonical 5-logo order (UCLA → Freedom Robotics → Cambridge → UKG → UC Irvine)
- **`MARQUEE_GROUP_REPEATS`** — how many times that sequence repeats inside each animated half (default `4`, keeps each group wider than the viewport)
- **`buildMarqueeGroupItems()`** — returns the expanded flat list used by both duplicated marquee groups

## Case study content

- One file per case study under `portfolio/case-studies/` (e.g. `ukme-voc.ts`)
- Export typed sections: meta, hero, framing note, prose sections, insight block, before-state assets/annotations, transition teaser, prototype section copy, constrained-redesign transition
- **UKMe VoC prototype data** (synthetic, static): `ukme-voc-feedback.ts`, `ukme-voc-taxonomy.ts`, `ukme-voc-types.ts`, `ukme-voc-persona-insights.ts`, `ukme-voc-analytics.ts`, `ukme-voc-filter-utils.ts` — pure TypeScript, no API calls
- Asset paths reference files under `public/images/`; components handle missing assets with placeholders at build time
