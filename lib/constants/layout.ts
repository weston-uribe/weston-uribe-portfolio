/**
 * Semantic layout tokens as complete Tailwind class strings.
 *
 * Use these for page-level containers and centering. Keeping layout
 * constraints in one place prevents arbitrary max-width / margin
 * values from scattering across the codebase.
 */

export const LAYOUT = {
  container: "mx-auto w-full max-w-2xl",
  pageCenter: "flex min-h-svh items-center justify-center",
  stack: "flex flex-col items-center text-center",
} as const;
