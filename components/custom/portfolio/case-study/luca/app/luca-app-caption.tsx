import type { ReactNode } from "react";

import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LucaAppCaptionProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "pill";
};

export function LucaAppCaption({
  children,
  className,
  variant = "default",
}: LucaAppCaptionProps) {
  if (variant === "pill") {
    return (
      <p className={cn(RESPONSIVE.caseStudyLucaAppCaption, className)}>
        <span className={RESPONSIVE.caseStudyLucaAppCaptionPill}>{children}</span>
      </p>
    );
  }

  return (
    <p className={cn(RESPONSIVE.caseStudyLucaAppCaption, className)}>
      {children}
    </p>
  );
}
