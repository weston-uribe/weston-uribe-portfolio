import { CaseStudyBeforeScreenshot } from "@/components/custom/portfolio/case-study/case-study-before-screenshot";
import { CaseStudyVocDashboardEmbed } from "@/components/custom/portfolio/case-study/case-study-voc-dashboard-embed";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { UKME_VOC_AT_A_GLANCE } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

export function CaseStudyAtAGlance() {
  return (
    <section
      id="at-a-glance"
      className={cn(SPACING.caseStudyAtAGlanceSectionY)}
    >
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <h2 className={cn(RESPONSIVE.sectionHeading, "w-full text-left")}>
          {UKME_VOC_AT_A_GLANCE.title}
        </h2>

        <div
          className={cn(
            RESPONSIVE.caseStudyAtAGlanceCard,
            SPACING.stackGap,
            "flex flex-col",
          )}
        >
          <div className={RESPONSIVE.caseStudyAtAGlanceStoryGrid}>
            {UKME_VOC_AT_A_GLANCE.storyBlocks.map((block) => (
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

          <div className={RESPONSIVE.caseStudyAtAGlanceCompareStack}>
            <div className={RESPONSIVE.caseStudyAtAGlanceCompareBlock}>
              <h3 className={RESPONSIVE.caseStudyAtAGlanceCompareLabel}>
                {UKME_VOC_AT_A_GLANCE.before.label}
              </h3>
              <CaseStudyBeforeScreenshot
                shellClassName={RESPONSIVE.caseStudyAtAGlanceBeforePreviewShell}
              />
            </div>

            <div className={RESPONSIVE.caseStudyAtAGlanceCompareBlock}>
              <h3 className={RESPONSIVE.caseStudyAtAGlanceCompareLabel}>
                {UKME_VOC_AT_A_GLANCE.after.label}
              </h3>
              <CaseStudyVocDashboardEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
