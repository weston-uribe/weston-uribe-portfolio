import { RESPONSIVE, SPACING } from "@/lib/constants";
import {
  KINTERRA_IDENTITY_PIPELINE_GROUP_TITLE,
  KINTERRA_IDENTITY_PIPELINE_STEPS,
} from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

export function CaseStudyKinterraIdentityPipeline() {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {KINTERRA_IDENTITY_PIPELINE_GROUP_TITLE}
      </h3>
      <ol className="grid list-none gap-4 md:grid-cols-2 lg:grid-cols-3">
        {KINTERRA_IDENTITY_PIPELINE_STEPS.map((step) => (
          <li
            key={step.number}
            className={cn(RESPONSIVE.caseStudyAnnotationCard, "flex gap-3")}
          >
            <span
              className={cn(
                RESPONSIVE.caseStudyPhaseNumber,
                "shrink-0 pt-0.5 tabular-nums",
              )}
            >
              {step.number}
            </span>
            <div className="flex min-w-0 flex-col gap-1">
              <p className="text-sm font-semibold text-foreground sm:text-base">
                {step.title}
              </p>
              <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
