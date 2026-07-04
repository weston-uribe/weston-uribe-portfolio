import { RESPONSIVE } from "@/lib/constants";
import type { CaseStudyInfoCard } from "@/lib/portfolio/case-studies/types";
import { cn } from "@/lib/utils";

type CaseStudyLucaTrustCardsProps = {
  cards: readonly CaseStudyInfoCard[];
};

export function CaseStudyLucaTrustCards({ cards }: CaseStudyLucaTrustCardsProps) {
  return (
    <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-3")}>
      {cards.map((card) => (
        <div key={card.title} className={RESPONSIVE.caseStudyAnnotationCard}>
          <h3 className="text-sm font-semibold text-foreground sm:text-base">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
            {card.body}
          </p>
        </div>
      ))}
    </div>
  );
}
