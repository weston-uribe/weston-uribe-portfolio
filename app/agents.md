# app/ — Routing and Pages

## Purpose

This directory contains all routes, layouts, and pages managed by the Next.js App Router.

## Routing Conventions

- Each subdirectory of `app/` becomes a URL route segment.
- A `page.tsx` file inside a directory makes that route publicly accessible.
- A `layout.tsx` wraps all pages within its directory (and nested subdirectories).
- Use `loading.tsx` for Suspense boundaries, `error.tsx` for error boundaries, and `not-found.tsx` for 404 handling when needed.

## Current Structure

| File          | Route | Purpose                              |
|---------------|-------|--------------------------------------|
| `layout.tsx`  | —     | Root HTML shell, fonts, global CSS   |
| `page.tsx`    | `/`   | Landing page                         |

## Layout Responsibilities

- `layout.tsx` owns the `<html>` and `<body>` tags, font loading, and the global CSS import.
- It should not contain page-specific content — only structural wrappers shared by all routes.
- Use layout constants from `@/lib/constants` for any shared container or spacing decisions.

## Page Conventions

- Pages are React Server Components by default. Add `"use client"` only when the page needs client-side interactivity.
- Import shared layout tokens from `@/lib/constants` rather than hardcoding spacing.
- Use shadcn components from `@/components/ui` and project components from `@/components/custom`.

## How to Add a New Route

1. Create a new directory: `app/<route-name>/`.
2. Add a `page.tsx` inside it.
3. Optionally add a `layout.tsx` if the route needs its own wrapper.
4. Update this file to document the new route.
