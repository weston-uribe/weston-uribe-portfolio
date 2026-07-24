import { RESPONSIVE } from "@/lib/constants";
import { KINTERRA_MODEL_LAYER_CARDS } from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

export function CaseStudyKinterraModelLayers() {
  return (
    <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-2")}>
      {KINTERRA_MODEL_LAYER_CARDS.map((card) => (
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
