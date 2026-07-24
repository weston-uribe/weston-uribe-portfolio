import { RESPONSIVE, SPACING } from "@/lib/constants";
import { NL_ROBOTICS_FACTORY_FLOW } from "@/lib/portfolio/case-studies/nl-robotics";
import { cn } from "@/lib/utils";

export function CaseStudyNlRoboticsFactoryFlow() {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {NL_ROBOTICS_FACTORY_FLOW.title}
      </h3>
      <ol className="grid list-none gap-4 md:grid-cols-2 lg:grid-cols-3">
        {NL_ROBOTICS_FACTORY_FLOW.steps.map((step) => (
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
