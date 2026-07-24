import { CaseStudyHarnessPrototypePlaceholder } from "@/components/custom/portfolio/case-study/harness/case-study-harness-prototype-placeholder";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { HARNESS_AT_A_GLANCE } from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessAtAGlance() {
  return (
    <section
      id="at-a-glance"
      className={cn(SPACING.caseStudyAtAGlanceSectionY)}
    >
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <h2 className={cn(RESPONSIVE.sectionHeading, "w-full text-left")}>
          {HARNESS_AT_A_GLANCE.title}
        </h2>

        <div className={RESPONSIVE.caseStudyAtAGlanceStoryGrid}>
          {HARNESS_AT_A_GLANCE.storyBlocks.map((block) => (
            <div
              key={block.id}
              className={RESPONSIVE.caseStudyAtAGlanceStoryCard}
            >
              <h3 className={RESPONSIVE.caseStudyAtAGlanceStoryTitle}>
                {block.title}
              </h3>
              <p className={RESPONSIVE.caseStudyProse}>{block.body}</p>
            </div>
          ))}
        </div>

        <CaseStudyHarnessPrototypePlaceholder />
      </div>
    </section>
  );
}
