import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { UKME_VOC_CONSTRAINED_TRANSITION } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

type CaseStudyConstrainedTransitionProps = {
  embedded?: boolean;
};

export function CaseStudyConstrainedTransition({
  embedded = false,
}: CaseStudyConstrainedTransitionProps) {
  return (
    <section
      id="constrained-redesign"
      className={cn(
        !embedded && SPACING.sectionJoinPaddingTop,
        !embedded && SPACING.sectionPaddingBottom,
      )}
    >
      <div
        className={cn(
          !embedded && LAYOUT.pageShell,
          RESPONSIVE.caseStudyProseColumn,
          SPACING.stackGap,
          "flex flex-col",
        )}
      >
        <h2 className={RESPONSIVE.sectionHeading}>
          {UKME_VOC_CONSTRAINED_TRANSITION.title}
        </h2>
        {UKME_VOC_CONSTRAINED_TRANSITION.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className={RESPONSIVE.caseStudyProse}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
