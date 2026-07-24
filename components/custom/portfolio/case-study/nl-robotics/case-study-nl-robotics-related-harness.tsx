import Link from "next/link";

import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { NL_ROBOTICS_RELATED_HARNESS } from "@/lib/portfolio/case-studies/nl-robotics";
import { cn } from "@/lib/utils";

export function CaseStudyNlRoboticsRelatedHarness() {
  return (
    <section className={cn(RESPONSIVE.caseStudySectionSurfaceMuted)}>
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <div
          className={cn(
            RESPONSIVE.caseStudyAnnotationCard,
            RESPONSIVE.caseStudyProseColumn,
            SPACING.stackGap,
            "flex flex-col",
          )}
        >
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            {NL_ROBOTICS_RELATED_HARNESS.title}
          </h2>
          <p className={RESPONSIVE.caseStudyProse}>
            {NL_ROBOTICS_RELATED_HARNESS.body}
          </p>
          <p className={RESPONSIVE.caseStudyProse}>
            {NL_ROBOTICS_RELATED_HARNESS.supporting}
          </p>
          <Link
            href={NL_ROBOTICS_RELATED_HARNESS.href}
            className="text-sm font-medium text-chart-4 underline-offset-4 hover:underline sm:text-base"
          >
            {NL_ROBOTICS_RELATED_HARNESS.linkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
