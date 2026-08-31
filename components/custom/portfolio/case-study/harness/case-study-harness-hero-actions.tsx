"use client";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RESPONSIVE } from "@/lib/constants";
import { HARNESS_HERO_ACTIONS } from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessHeroActions() {
  if (HARNESS_HERO_ACTIONS.length === 0) {
    return null;
  }

  return (
    <div className={cn(RESPONSIVE.ctaRow, "mt-2")}>
      {HARNESS_HERO_ACTIONS.map((action) => (
        <Button
          key={action.href}
          render={
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={action.ariaLabel}
            />
          }
          nativeButton={false}
          variant="outline"
          size="lg"
          className={RESPONSIVE.ctaButton}
        >
          {action.label}
          <ExternalLink aria-hidden="true" />
        </Button>
      ))}
    </div>
  );
}
