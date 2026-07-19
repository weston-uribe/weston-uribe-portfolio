# Weston Uribe Portfolio

## Overview

This repository powers [Weston Uribe's product portfolio](https://weston-uribe-portfolio.vercel.app): an active, hiring-manager-facing site for product strategy, design, and AI-assisted prototyping work.

This portfolio is a modular Next.js application used as a living workspace for case studies, interactive product prototypes, and portfolio presentation. It is designed for rapid product experimentation with a consistent design system and structured content layer.

## Live site

**https://weston-uribe-portfolio.vercel.app**

The deployed site includes a portfolio landing page, selected work, about content, and interactive case study prototypes.

## What this repo contains

- **Portfolio landing page** (`app/page.tsx`) with hero, affiliations, about, work, and contact sections
- **Case study routes** under `app/work/`:
  - `/work/luca` — Luca founder case study and interactive student-app prototype
  - `/work/ukg` — UKMe AI Voice of Customer dashboard case study and interactive prototype
- **Structured portfolio content** in `lib/portfolio/` (copy, work items, and case study data)
- **Portfolio UI components** in `components/custom/portfolio/`
- **Design and asset documentation** in `docs/portfolio/` (including Luca art direction)
- **Public assets** for logos, case study imagery, resume, and Luca prototype art in `public/`

Portfolio demos are intentionally built as static product prototypes. They focus on product thinking, UX flows, and interface design rather than live backends, production databases, or real customer data.

## Current focus

This repo is actively evolving as the main surface for Weston's product portfolio and case study work. Current emphasis includes:

- Expanding interactive case study prototypes and narrative content
- Refining portfolio presentation for hiring managers and product reviewers
- Using the repo as a practical workspace for AI-assisted product development, where requirements, prototypes, and reviewable outputs can move quickly from idea to inspectable UI

Planned work items in the portfolio include Kinterra, a natural-language robotics concept, and additional product teardowns (currently marked coming soon in the site content).

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, React Server Components) |
| Language | TypeScript (strict) |
| UI | React 19, shadcn/ui, Tailwind CSS v4 |
| Motion | Motion |
| Tooling | ESLint, Prettier |
| Deployment | Vercel |

## Selected product work

### Luca — wellness coaching marketplace (founder case study)

**Route:** `/work/luca`

A founder-led case study on moving from campus resource sharing to a wellness coaching marketplace. Covers discovery, a paid manual pilot, product rebuild, trust and safety design, marketplace partnerships, and strategic shutdown.

The case study includes narrative content and an interactive student-app prototype with mock data (onboarding, assessment, matching, booking, and session flow).

### UKMe — AI-Powered Voice of Customer dashboard

**Route:** `/work/ukg`

A case study on turning fragmented multi-channel customer feedback into clearer roadmap evidence for product managers. This is a fictionalized version of work done during a UKG internship, built as an extended portfolio prototype for an enterprise HCM context.

The prototype recreates a shipped dashboard redesign with persona-based AI insight cards, filter workflows, and a raw feedback table for validation. It uses static portfolio data — no live AI, backend, or API calls.

### Additional portfolio items (in progress)

The site also lists coming-soon work areas including Kinterra (AI memory and identity graph concept), a natural-language robotics feasibility experiment, and a product teardown — not yet published as full case studies.

## Development approach

- **Product-first requirements** — start from the user problem, workflow constraint, or product decision before building UI
- **Rapid prototyping** — ship inspectable interfaces quickly to test narrative, information hierarchy, and interaction design
- **AI-assisted implementation** — use AI agents to accelerate research, content structuring, component work, and iteration
- **Human review for product quality** — keep product judgment, risk assessment, and merge readiness in human hands; prototypes are evidence for decisions, not decoration

Internal agent-oriented documentation lives in `agents.md` files throughout the repo. Those files support AI-assisted development workflows and are not intended as end-user documentation.

## Status

**Active and evolving.** This is a living portfolio repository. Case studies, prototypes, and site content are updated as work progresses. Some routes and prototypes are intentionally marked as works in progress.

---

Langfuse Milestone 1 dogfood ran successfully (temporary harness documentation).

M8 agent revalidation smoke test. Verified through the automatic watcher.

PDev Milestone 2 validates revision and merge outcome tracing.

## Chunk8C live emit

Chunk 8C live Langfuse emission canary (temporary harness documentation).
