import { CaseStudyLucaPhonePrototype } from "@/components/custom/portfolio/case-study/luca/case-study-luca-phone-prototype";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { LUCA_PROTOTYPE } from "@/lib/portfolio/case-studies/luca";
import { cn } from "@/lib/utils";

type CaseStudyLucaPrototypeSectionProps = {
  embedded?: boolean;
};

export function CaseStudyLucaPrototypeSection({
  embedded = false,
}: CaseStudyLucaPrototypeSectionProps) {
  const Wrapper = embedded ? "div" : "section";

  return (
    <Wrapper
      id="interactive-prototype"
      className={cn(
        !embedded && SPACING.sectionJoinPaddingY,
        embedded && SPACING.sectionPaddingTop,
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
            embedded ? "w-full text-left" : RESPONSIVE.caseStudyProseColumn,
            SPACING.stackGap,
            "flex flex-col text-left",
          )}
        >
          <h2 className={cn(RESPONSIVE.sectionHeading, "w-full text-left")}>
            {LUCA_PROTOTYPE.title}
          </h2>
          {LUCA_PROTOTYPE.introParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={RESPONSIVE.caseStudyProse}
            >
              {paragraph}
            </p>
          ))}
          <p className={cn("text-muted-foreground", RESPONSIVE.sectionDisclaimer)}>
            {LUCA_PROTOTYPE.disclaimer}
          </p>
        </div>

        <div className={RESPONSIVE.caseStudyPhonePrototypeWrap}>
          <CaseStudyLucaPhonePrototype />
        </div>
      </div>
    </Wrapper>
  );
}
