import { CaseStudyLucaPrototypeSection } from "@/components/custom/portfolio/case-study/luca/case-study-luca-prototype-section";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { LUCA_AT_A_GLANCE } from "@/lib/portfolio/case-studies/luca";
import { cn } from "@/lib/utils";

export function CaseStudyLucaOutcomes() {
  return (
    <section
      id="at-a-glance"
      className={cn(SPACING.caseStudyAtAGlanceSectionY)}
    >
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <h2 className={cn(RESPONSIVE.sectionHeading, "w-full text-left")}>
          {LUCA_AT_A_GLANCE.title}
        </h2>

        <div className={RESPONSIVE.caseStudyAtAGlanceStoryGrid}>
          {LUCA_AT_A_GLANCE.storyBlocks.map((block) => (
            <div
              key={block.id}
              className={RESPONSIVE.caseStudyAtAGlanceStoryCard}
            >
              <h3 className={RESPONSIVE.caseStudyAtAGlanceStoryTitle}>
                {block.title}
              </h3>
              {block.body ? (
                <p className={RESPONSIVE.caseStudyProse}>{block.body}</p>
              ) : null}
            </div>
          ))}
        </div>

        <CaseStudyLucaPrototypeSection embedded />
      </div>
    </section>
  );
}
