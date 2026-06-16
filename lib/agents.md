# lib/ — Utilities and Constants

## Purpose

Shared logic, helper functions, and design system constants live here. Nothing in `lib/` should be React-component-specific — it is for pure logic and configuration.

## Directory Structure

| Path                  | Purpose                                           |
|-----------------------|---------------------------------------------------|
| `utils.ts`            | `cn()` — Tailwind class merging via clsx + twMerge |
| `constants/index.ts`  | Barrel export for all constant modules             |
| `constants/spacing.ts`| Semantic spacing tokens (Tailwind class strings)   |
| `constants/layout.ts` | Semantic layout tokens (containers, centering)     |

## Constants System

Constants export **complete, static Tailwind class strings** — never raw numbers or fragments. This keeps Tailwind's static analysis happy and prevents magic numbers.

```ts
import { LAYOUT, SPACING } from "@/lib/constants";

// Use in JSX:
<main className={cn(LAYOUT.pageCenter, SPACING.pagePadding)}>
```

### How to Add a New Constant

1. Decide if it belongs in an existing module (`spacing.ts`, `layout.ts`) or needs a new one.
2. Export a descriptive key with a full Tailwind class string as the value.
3. Add the new module to `constants/index.ts` if you created a new file.
4. Update this agents.md to reflect the addition.

## Where Logic Should Live

- **Pure helpers** (formatting, validation, data transforms): add to `lib/` as a new file or extend `utils.ts`.
- **React hooks**: create a `hooks/` directory at the project root (not inside `lib/`).
- **API/data fetching**: create a `lib/api/` or `lib/data/` subdirectory when needed.
- **Avoid duplication**: before creating a new utility, check if the behavior already exists in `lib/`.
