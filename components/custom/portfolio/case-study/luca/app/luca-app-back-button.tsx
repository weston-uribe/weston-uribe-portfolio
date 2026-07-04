import { ArrowLeft } from "lucide-react";

import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_ASSESSMENT } from "@/lib/portfolio/case-studies/luca-app";
import { cn } from "@/lib/utils";

import { LucaAppTextClearZone } from "./luca-app-text-clear-zone";

type LucaAppBackButtonProps = {
  onClick: () => void;
  variant?: "default" | "footer";
  className?: string;
};

export function LucaAppBackButton({
  onClick,
  variant = "default",
  className,
}: LucaAppBackButtonProps) {
  if (variant === "footer") {
    return (
      <LucaAppTextClearZone
        inline
        className={RESPONSIVE.caseStudyLucaAppBackButtonFooterClearZone}
      >
        <button
          type="button"
          onClick={onClick}
          className={cn(
            RESPONSIVE.caseStudyLucaAppBackButtonFooter,
            RESPONSIVE.caseStudyPrototypeInteractive,
            className,
          )}
        >
          <span className={RESPONSIVE.caseStudyLucaAppBackButtonFooterLabel}>
            {LUCA_APP_ASSESSMENT.backCta}
          </span>
          <ArrowLeft
            className={RESPONSIVE.caseStudyLucaAppBackButtonFooterIcon}
            aria-hidden="true"
          />
        </button>
      </LucaAppTextClearZone>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        RESPONSIVE.caseStudyLucaAppBackButton,
        RESPONSIVE.caseStudyPrototypeInteractive,
        className,
      )}
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      {LUCA_APP_ASSESSMENT.backCta}
    </button>
  );
}
