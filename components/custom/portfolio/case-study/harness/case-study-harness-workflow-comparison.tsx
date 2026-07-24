import { RESPONSIVE, SPACING } from "@/lib/constants";
import { HARNESS_WORKFLOW_COMPARISON } from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

function WorkflowColumn({
  label,
  supportingLine,
  steps,
}: {
  label: string;
  supportingLine: string;
  steps: readonly { title: string; body: string }[];
}) {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className={RESPONSIVE.caseStudyAtAGlanceCompareLabel}>{label}</h3>
      <ol className="flex list-none flex-col gap-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={cn(RESPONSIVE.caseStudyAnnotationCard, "flex gap-3")}
          >
            <span
              className={cn(
                RESPONSIVE.caseStudyPhaseNumber,
                "shrink-0 pt-0.5 tabular-nums",
              )}
            >
              {String(index + 1).padStart(2, "0")}
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
      <p className={RESPONSIVE.caseStudyProse}>{supportingLine}</p>
    </div>
  );
}

export function CaseStudyHarnessWorkflowComparison() {
  const { title, before, after } = HARNESS_WORKFLOW_COMPARISON;

  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {title}
      </h3>
      <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "lg:grid-cols-2")}>
        <WorkflowColumn
          label={before.label}
          supportingLine={before.supportingLine}
          steps={before.steps}
        />
        <WorkflowColumn
          label={after.label}
          supportingLine={after.supportingLine}
          steps={after.steps}
        />
      </div>
    </div>
  );
}
