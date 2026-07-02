import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { UKME_VOC_BEFORE_STATE } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

import { CaseStudyBeforeScreenshot } from "@/components/custom/portfolio/case-study/case-study-before-screenshot";

export function CaseStudyBeforeDashboard({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  return (
    <section
      id="before-state"
      className={cn(!embedded && SPACING.sectionJoinPaddingY)}
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
            {UKME_VOC_BEFORE_STATE.title}
          </h2>
          {UKME_VOC_BEFORE_STATE.introParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={RESPONSIVE.caseStudyProse}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <CaseStudyBeforeScreenshot />

        <div className={RESPONSIVE.caseStudyAnnotationGrid}>
          {UKME_VOC_BEFORE_STATE.annotations.map((annotation) => (
            <div
              key={annotation.id}
              className={RESPONSIVE.caseStudyAnnotationCard}
            >
              <p className={RESPONSIVE.caseStudyProse}>
                {annotation.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
