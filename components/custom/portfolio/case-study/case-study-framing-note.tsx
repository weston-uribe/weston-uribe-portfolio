import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { UKME_VOC_FRAMING } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

export function CaseStudyFramingNote() {
  return (
    <section className={cn(SPACING.caseStudyFramingNotePaddingY)}>
      <div className={LAYOUT.pageShell}>
        <p className={cn(RESPONSIVE.caseStudyFramingNote, "w-full")}>
          {UKME_VOC_FRAMING.text}
        </p>
      </div>
    </section>
  );
}
