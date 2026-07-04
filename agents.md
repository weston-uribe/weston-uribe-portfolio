# Wedge-1 — Root Agent Guide

## What This App Is

Wedge-1 is a modular Next.js application designed for rapid product experimentation. It provides a production-grade scaffold that is self-describing and AI-navigable, so any agent or developer can orient themselves without external documentation.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React Server Components by default)
- **Language**: TypeScript with `strict: true`
- **Styling**: Tailwind CSS v4 (PostCSS plugin, `@theme` blocks in CSS)
- **UI Library**: shadcn/ui (base-nova style, Radix primitives)
- **Package Manager**: npm
- **Linting**: ESLint (Next.js defaults + Prettier integration)
- **Formatting**: Prettier

## Core Principles

1. **No magic numbers.** Never hardcode arbitrary pixel values or spacing. Use the semantic constants in `lib/constants/` or standard Tailwind scale tokens (`p-4`, `max-w-2xl`, etc.). If you need a new token, add it to the constants system — do not scatter one-off values.

2. **Design system first.** All spacing, layout, and typography decisions flow from centralized tokens. Extend `lib/constants/` or the Tailwind theme in `styles/globals.css` rather than inventing ad-hoc values.

3. **Composition over inheritance.** Keep components small, focused, and reusable. Prefer composing simple pieces over building monolithic ones.

4. **Static Tailwind classes only.** Tailwind purges unused classes at build time via static analysis. Never construct class names dynamically (e.g., `` `p-${value}` ``). Instead, use the `cn()` utility from `lib/utils` to conditionally join complete, static class strings.

5. **Mobile-first responsiveness.** Layouts default to mobile, then layer tablet (`md:`) and desktop (`lg:`) overrides through tokens in `lib/constants/breakpoints.ts` and responsive spacing in `lib/constants/spacing.ts`. Do not scatter breakpoint-specific class strings across components when a shared token fits.

## Coding Rules

- Use TypeScript strictly — no `any`, no `@ts-ignore` without justification.
- No inline `style={}` attributes. Use Tailwind classes exclusively.
- Prefer standard Tailwind scale values. If extending, define tokens in `styles/globals.css` under `@theme`.
- Extract reusable logic into `lib/`. Extract reusable UI into `components/custom/`.
- No dead imports, no unused files, no placeholder TODOs.

## Navigation Map

```
app/                → Routes, layouts, and pages (Next.js App Router)
  layout.tsx        → Root HTML shell, fonts, global wrapper
  page.tsx          → Weston Uribe portfolio landing page (route: /)
  agents.md         → Routing conventions and page patterns

components/         → All React components
  ui/               → shadcn/ui primitives (auto-generated, do not hand-edit)
  custom/           → Project-specific reusable components
    portfolio/      → Portfolio landing page sections

lib/                → Shared utilities and constants
  utils.ts          → cn() helper (Tailwind class merging)
  constants/        → Semantic design tokens (spacing, layout, breakpoints)
  portfolio/        → Portfolio landing page copy and structured content

styles/             → Global CSS
  globals.css       → Tailwind imports, CSS variables, theme config
  agents.md         → Styling conventions

public/
  logos/            → Official SVG logos for portfolio marquee (see agents.md)
  images/
    luca/           → Luca app prototype art library (see agents.md)
      agents.md     → Asset naming, folders, manifest workflow

docs/
  portfolio/        → Case study art direction docs (e.g. luca-art-direction.md)

agents.md           → This file (root orientation)
```

## How to Add a New Feature

1. Create a new route directory under `app/` (e.g., `app/dashboard/page.tsx`).
2. Build any feature-specific UI in `components/custom/`.
3. If the feature needs shared logic, add it to `lib/`.
4. If new spacing/layout tokens are needed, extend `lib/constants/`.
5. Update the relevant `agents.md` files to reflect the new structure.
