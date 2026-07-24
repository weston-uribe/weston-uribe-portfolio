import { RESPONSIVE, SPACING } from "@/lib/constants";
import { HARNESS_ROADMAP_ITEMS } from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessRoadmap() {
  return (
    <ol className={cn(SPACING.stackGap, "flex list-none flex-col gap-4")}>
      {HARNESS_ROADMAP_ITEMS.map((item) => (
        <li
          key={item.number}
          className={cn(RESPONSIVE.caseStudyAnnotationCard, "flex gap-3")}
        >
          <span
            className={cn(
              RESPONSIVE.caseStudyPhaseNumber,
              "shrink-0 pt-0.5 tabular-nums",
            )}
          >
            {item.number}
          </span>
          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-foreground sm:text-base">
              {item.title}
            </p>
            <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
