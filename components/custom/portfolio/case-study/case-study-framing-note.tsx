import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { UKME_VOC_FRAMING } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

export function CaseStudyFramingNote() {
  return (
    <section className={cn(SPACING.sectionJoinPaddingBottom)}>
      <div className={LAYOUT.pageShell}>
        <div
          className={cn(
            RESPONSIVE.caseStudyFramingCard,
            RESPONSIVE.caseStudyProseColumn,
            SPACING.stackGap,
            "flex flex-col",
          )}
        >
          {UKME_VOC_FRAMING.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={cn(
                RESPONSIVE.caseStudyProse,
                "not-italic sm:text-base",
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
