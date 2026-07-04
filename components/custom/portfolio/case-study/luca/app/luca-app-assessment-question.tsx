"use client";

import { useId } from "react";

import { Label } from "@/components/ui/label";
import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_ASSESSMENT } from "@/lib/portfolio/case-studies/luca-app";
import { cn } from "@/lib/utils";

import { LucaAppAssessmentSlider } from "./luca-app-assessment-slider";
import { LucaAppTextClearZone } from "./luca-app-text-clear-zone";

type LucaAppAssessmentQuestionProps = {
  question: string;
  value: number | null;
  showError: boolean;
  onChange: (value: number) => void;
  className?: string;
};

export function LucaAppAssessmentQuestion({
  question,
  value,
  showError,
  onChange,
  className,
}: LucaAppAssessmentQuestionProps) {
  const baseId = useId();
  const labelId = `${baseId}-label`;
  const errorId = `${baseId}-error`;

  return (
    <div
      className={cn(RESPONSIVE.caseStudyLucaAppAssessmentQuestion, className)}
    >
      <LucaAppTextClearZone inline>
        <Label
          id={labelId}
          htmlFor={baseId}
          className={cn(
            "text-sm font-medium leading-snug text-luca-app-foreground",
            "whitespace-normal",
          )}
        >
          {question}
        </Label>
      </LucaAppTextClearZone>

      <div
        className={cn(
          RESPONSIVE.caseStudyLucaAppValidationErrorSlot,
          showError
            ? RESPONSIVE.caseStudyLucaAppValidationErrorSlotOpen
            : RESPONSIVE.caseStudyLucaAppValidationErrorSlotClosed,
        )}
        aria-hidden={showError ? undefined : true}
      >
        <div className={RESPONSIVE.caseStudyLucaAppValidationErrorSlotInner}>
          <LucaAppTextClearZone inline>
            <p
              id={errorId}
              role={showError ? "alert" : undefined}
              className={RESPONSIVE.caseStudyLucaAppValidationError}
            >
              {LUCA_APP_ASSESSMENT.validationError}
            </p>
          </LucaAppTextClearZone>
        </div>
      </div>

      <div className={RESPONSIVE.caseStudyLucaAppSliderWrap}>
        <LucaAppAssessmentSlider
          id={baseId}
          value={value}
          onChange={onChange}
          aria-labelledby={labelId}
          aria-describedby={showError ? errorId : undefined}
        />
      </div>
    </div>
  );
}
