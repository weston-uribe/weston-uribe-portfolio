import { RESPONSIVE } from "@/lib/constants";
import { NL_ROBOTICS_TECHNICAL_STACK } from "@/lib/portfolio/case-studies/nl-robotics";
import { cn } from "@/lib/utils";

export function CaseStudyNlRoboticsTechnicalStack() {
  return (
    <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-2")}>
      {NL_ROBOTICS_TECHNICAL_STACK.map((card) => (
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
  );
}
