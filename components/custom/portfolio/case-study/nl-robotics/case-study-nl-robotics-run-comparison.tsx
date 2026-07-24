import { RESPONSIVE } from "@/lib/constants";
import { NL_ROBOTICS_COMPARISON_CARDS } from "@/lib/portfolio/case-studies/nl-robotics";
import { cn } from "@/lib/utils";

export function CaseStudyNlRoboticsRunComparison() {
  return (
    <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-3")}>
      {NL_ROBOTICS_COMPARISON_CARDS.map((card) => (
        <div key={card.eyebrow} className={RESPONSIVE.caseStudyAnnotationCard}>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {card.eyebrow}
          </p>
          <h4 className="mt-2 text-sm font-semibold text-foreground sm:text-base">
            {card.title}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
            {card.body}
          </p>
        </div>
      ))}
    </div>
  );
}
