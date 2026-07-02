import { CaseStudyAtAGlance } from "@/components/custom/portfolio/case-study/case-study-at-a-glance";
import { CaseStudyBeforeDashboard } from "@/components/custom/portfolio/case-study/case-study-before-dashboard";
import { CaseStudyComingSoonSection } from "@/components/custom/portfolio/case-study/case-study-coming-soon-section";
import { CaseStudyConstrainedTransition } from "@/components/custom/portfolio/case-study/case-study-constrained-transition";
import { CaseStudyFramingNote } from "@/components/custom/portfolio/case-study/case-study-framing-note";
import { CaseStudyHero } from "@/components/custom/portfolio/case-study/case-study-hero";
import { CaseStudyInDepthTransition } from "@/components/custom/portfolio/case-study/case-study-in-depth-transition";
import { CaseStudyInsightSection } from "@/components/custom/portfolio/case-study/case-study-insight-section";
import {
  CaseStudyPhaseSection,
  CaseStudySectionBand,
} from "@/components/custom/portfolio/case-study/case-study-phase-section";
import { CaseStudyProseSection } from "@/components/custom/portfolio/case-study/case-study-prose-section";
import { CaseStudyPrototypeSection } from "@/components/custom/portfolio/case-study/case-study-prototype-section";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";
import { SPACING } from "@/lib/constants";
import {
  UKME_VOC_DESIGN_SECTIONS,
  UKME_VOC_FUTURE_SECTIONS,
  UKME_VOC_OPENING_SECTIONS,
  UKME_VOC_PHASES,
  UKME_VOC_RESEARCH_SECTION,
  UKME_VOC_RESULTS,
} from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

export default function UkgWorkPage() {
  return (
    <>
      <PortfolioNav />
      <main className={cn(SPACING.pageAnchorScrollBuffer)}>
        <CaseStudyHero />
        <CaseStudyFramingNote />
        <CaseStudyAtAGlance />

        <CaseStudyPhaseSection
          phase={UKME_VOC_PHASES.context}
          tone="muted"
          lead={<CaseStudyInDepthTransition />}
        >
          {UKME_VOC_OPENING_SECTIONS.map((section) => (
            <CaseStudyProseSection
              key={section.id}
              section={section}
              embedded
            />
          ))}
          <CaseStudyBeforeDashboard embedded />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection
          phase={UKME_VOC_PHASES.research}
          tone="dark"
        >
          <CaseStudyProseSection
            section={UKME_VOC_RESEARCH_SECTION}
            embedded
          />
          <CaseStudyInsightSection embedded />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection
          phase={UKME_VOC_PHASES.design}
          tone="muted"
        >
          {UKME_VOC_DESIGN_SECTIONS.map((section) => (
            <CaseStudyProseSection
              key={section.id}
              section={section}
              embedded
            />
          ))}
          <CaseStudyConstrainedTransition embedded />
          <CaseStudyPrototypeSection embedded />
        </CaseStudyPhaseSection>

        <CaseStudySectionBand tone="dark">
          <CaseStudyProseSection
            section={UKME_VOC_RESULTS}
            embedded
          />
        </CaseStudySectionBand>

        <CaseStudyPhaseSection
          phase={UKME_VOC_PHASES.future}
          tone="muted"
          variant="future"
        >
          <CaseStudyProseSection
            section={UKME_VOC_FUTURE_SECTIONS[0]}
            embedded
          />
          <CaseStudyComingSoonSection embedded />
          <CaseStudyProseSection
            section={UKME_VOC_FUTURE_SECTIONS[1]}
            embedded
          />
        </CaseStudyPhaseSection>
      </main>
      <PortfolioFooter />
    </>
  );
}
