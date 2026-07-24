import { RESPONSIVE } from "@/lib/constants";
import { KINTERRA_STRATEGY_STAGES } from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

export function CaseStudyKinterraStrategyEvolution() {
  return (
    <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-3")}>
      {KINTERRA_STRATEGY_STAGES.map((stage) => (
        <div key={stage.label} className={RESPONSIVE.caseStudyAnnotationCard}>
          <div className="flex items-start gap-3">
            <span
              className={cn(
                RESPONSIVE.caseStudyPhaseNumber,
                "shrink-0 pt-0.5 tabular-nums",
              )}
            >
              {stage.label}
            </span>
            <div className="flex min-w-0 flex-col gap-1">
              <h4 className="text-sm font-semibold text-foreground sm:text-base">
                {stage.title}
              </h4>
              <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                {stage.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
