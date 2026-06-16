# Wedge-1

A modular Next.js application designed for rapid product experimentation. The codebase is self-describing and AI-navigable via `agents.md` files at every level.

## Quickstart

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                        |
|------------------|------------------------------------|
| `npm run dev`    | Start development server           |
| `npm run build`  | Production build                   |
| `npm run start`  | Serve production build             |
| `npm run lint`   | Run ESLint                         |
| `npm run format` | Format all files with Prettier     |

## Architecture

```
app/            → Routes and pages (Next.js App Router)
components/ui/  → shadcn/ui primitives (Button, Card)
components/custom/ → Project-specific reusable components
lib/constants/  → Semantic design tokens (spacing, layout)
lib/utils.ts    → Tailwind class merging helper (cn)
styles/         → Global CSS and Tailwind theme
```

## AI Navigation

Every major directory contains an `agents.md` file that explains what lives there, how to extend it, and what conventions to follow. Start with the root [`agents.md`](agents.md) for the full orientation.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- shadcn/ui
- ESLint + Prettier
