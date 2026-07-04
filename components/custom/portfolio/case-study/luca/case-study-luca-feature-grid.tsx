import { RESPONSIVE } from "@/lib/constants";
import type { CaseStudyFeatureGroup } from "@/lib/portfolio/case-studies/types";
import { cn } from "@/lib/utils";

type CaseStudyLucaFeatureGridProps = {
  groups: readonly CaseStudyFeatureGroup[];
};

export function CaseStudyLucaFeatureGrid({
  groups,
}: CaseStudyLucaFeatureGridProps) {
  return (
    <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-3")}>
      {groups.map((group) => (
        <div key={group.title} className={RESPONSIVE.caseStudyAnnotationCard}>
          <h3 className="text-sm font-semibold text-foreground sm:text-base">
            {group.title}
          </h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-4">
            {group.items.map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed text-foreground/85 sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
