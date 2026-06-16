/**
 * Semantic spacing tokens as complete Tailwind class strings.
 *
 * These are full, static class values — never interpolate them inside
 * template literals like `p-${value}` because Tailwind cannot detect
 * dynamically-constructed class names at build time.
 */

export const SPACING = {
  pagePadding: "px-6 py-10",
  sectionGap: "gap-8",
  stackGap: "gap-6",
  inlineGap: "gap-4",
  elementGap: "gap-2",
} as const;
