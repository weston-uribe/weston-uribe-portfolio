# styles/ — Global CSS

## Purpose

This directory owns the global stylesheet that configures Tailwind CSS, the shadcn/ui theme, and any base-level styling.

## Files

| File          | Purpose                                                         |
|---------------|-----------------------------------------------------------------|
| `globals.css` | Tailwind imports, CSS custom properties (theme), base layer rules |

## How Tailwind v4 Theming Works

Tailwind v4 uses CSS-native configuration instead of a `tailwind.config.ts` file. Theme tokens are declared directly in `globals.css`:

- **`@theme inline { ... }`** — maps CSS custom properties to Tailwind utilities (e.g., `--color-primary` becomes `bg-primary`, `text-primary`, etc.).
- **`:root { ... }`** and **`.dark { ... }`** — define the actual color values for light and dark modes using `oklch()`.
- **`@layer base { ... }`** — applies default styles to `body`, `html`, and resets.

## Conventions

- All color tokens are defined as CSS custom properties and mapped in `@theme`. Do not use arbitrary color values like `bg-[#ff0000]` — add a new token instead.
- Spacing and layout tokens live in `lib/constants/` as Tailwind class strings, not in this CSS file.
- The font stack is loaded via `next/font/google` in `app/layout.tsx` and connected to Tailwind through the `--font-sans` CSS variable.

## How to Extend the Theme

1. Add a new CSS custom property in `:root` (and `.dark` if it differs).
2. Map it in the `@theme inline` block so Tailwind generates the corresponding utility classes.
3. Document the new token in this file.
