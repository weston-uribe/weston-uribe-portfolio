import { RESPONSIVE, SPACING } from "@/lib/constants";
import {
  HARNESS_EVALUATION_DIMENSIONS,
  HARNESS_EVALUATION_DIMENSIONS_GROUP_TITLE,
} from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessEvaluationGrid() {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {HARNESS_EVALUATION_DIMENSIONS_GROUP_TITLE}
      </h3>
      <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-2")}>
        {HARNESS_EVALUATION_DIMENSIONS.map((dimension) => (
          <div
            key={dimension.title}
            className={RESPONSIVE.caseStudyAnnotationCard}
          >
            <h4 className="text-sm font-semibold text-foreground sm:text-base">
              {dimension.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
              {dimension.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
