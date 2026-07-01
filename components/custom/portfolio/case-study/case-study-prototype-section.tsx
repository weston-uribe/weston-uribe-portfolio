import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { UKME_VOC_PROTOTYPE } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

import { VocDashboardPrototype } from "@/components/custom/portfolio/voc-dashboard/voc-dashboard-prototype";

export function CaseStudyPrototypeSection({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  return (
    <section
      id="interactive-prototype"
      className={cn(
        !embedded && RESPONSIVE.sectionAnchor,
        !embedded && SPACING.sectionJoinPaddingY,
      )}
    >
      <div
        className={cn(
          !embedded && LAYOUT.pageShell,
          SPACING.stackGap,
          "flex flex-col",
        )}
      >
        <div
          className={cn(
            RESPONSIVE.caseStudyProseColumn,
            SPACING.stackGap,
            "flex flex-col text-left",
          )}
        >
          <h2 className={RESPONSIVE.sectionHeading}>
            {UKME_VOC_PROTOTYPE.title}
          </h2>
          {UKME_VOC_PROTOTYPE.introParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={RESPONSIVE.caseStudyProse}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className={RESPONSIVE.caseStudyPrototypeFrame}>
          <VocDashboardPrototype />
        </div>
      </div>
    </section>
  );
}
