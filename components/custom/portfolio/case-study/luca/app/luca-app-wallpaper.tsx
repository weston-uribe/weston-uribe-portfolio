import type { ReactNode } from "react";

import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LucaAppWallpaperProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Sandy base + repeating paper-speckle tile from manifest decor asset
 * `decor-paper-speckle-tile-v01` (see luca-assets.ts + globals.css).
 */
export function LucaAppWallpaper({ children, className }: LucaAppWallpaperProps) {
  return (
    <div
      className={cn(
        lucaAppWallpaperSurfaceClassName(),
        "relative flex min-h-0 flex-1 flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Sandy base + speckle tile combined (e.g. full phone screen in app mode). */
export function lucaAppWallpaperSurfaceClassName(className?: string) {
  return cn(
    RESPONSIVE.caseStudyLucaAppSandySurface,
    "luca-app-speckle-texture",
    className,
  );
}
