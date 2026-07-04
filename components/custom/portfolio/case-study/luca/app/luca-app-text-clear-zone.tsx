import type { ReactNode } from "react";

import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LucaAppTextClearZoneProps = {
  children: ReactNode;
  className?: string;
  inline?: boolean;
};

/**
 * Solid sandy mask over the speckle wallpaper so text sits on a clean cream field.
 * Matches `--luca-app-background` / `.luca-app-sandy-surface` base color.
 */
export function LucaAppTextClearZone({
  children,
  className,
  inline = false,
}: LucaAppTextClearZoneProps) {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyLucaAppTextClearZone,
        inline && RESPONSIVE.caseStudyLucaAppTextClearZoneInline,
        className,
      )}
    >
      {children}
    </div>
  );
}
