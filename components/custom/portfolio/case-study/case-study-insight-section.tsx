import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { UKME_VOC_DISCOVERY } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

type CaseStudyInsightSectionProps = {
  embedded?: boolean;
};

export function CaseStudyInsightSection({
  embedded = false,
}: CaseStudyInsightSectionProps) {
  return (
    <section
      id="discovery"
      className={cn(!embedded && SPACING.sectionJoinPaddingY)}
    >
      <div className={cn(!embedded && LAYOUT.pageShell)}>
        <div
          className={cn(
            RESPONSIVE.caseStudyInsightCard,
            RESPONSIVE.caseStudyProseColumn,
            SPACING.stackGap,
            "flex flex-col",
          )}
        >
          <h2 className={RESPONSIVE.sectionHeading}>{UKME_VOC_DISCOVERY.title}</h2>
          {UKME_VOC_DISCOVERY.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={RESPONSIVE.caseStudyProse}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
