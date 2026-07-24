import { RESPONSIVE, SPACING } from "@/lib/constants";
import {
  HARNESS_REQUIREMENT_CARDS,
  HARNESS_REQUIREMENTS_GROUP_TITLE,
} from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessRequirementsGrid() {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {HARNESS_REQUIREMENTS_GROUP_TITLE}
      </h3>
      <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-3")}>
        {HARNESS_REQUIREMENT_CARDS.map((card) => (
          <div key={card.title} className={RESPONSIVE.caseStudyAnnotationCard}>
            <h4 className="text-sm font-semibold text-foreground sm:text-base">
              {card.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
