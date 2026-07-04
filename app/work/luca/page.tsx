import { CaseStudyLucaCallout } from "@/components/custom/portfolio/case-study/luca/case-study-luca-callout";
import { CaseStudyLucaFeatureGrid } from "@/components/custom/portfolio/case-study/luca/case-study-luca-feature-grid";
import { CaseStudyLucaHero } from "@/components/custom/portfolio/case-study/luca/case-study-luca-hero";
import { CaseStudyLucaInDepthTransition } from "@/components/custom/portfolio/case-study/luca/case-study-luca-in-depth-transition";
import { CaseStudyLucaOutcomes } from "@/components/custom/portfolio/case-study/luca/case-study-luca-outcomes";
import { CaseStudyLucaTrustCards } from "@/components/custom/portfolio/case-study/luca/case-study-luca-trust-cards";
import { CaseStudyPhaseSection } from "@/components/custom/portfolio/case-study/case-study-phase-section";
import { CaseStudyProseSection } from "@/components/custom/portfolio/case-study/case-study-prose-section";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";
import { SPACING } from "@/lib/constants";
import {
  LUCA_MANUAL_PILOT_CALLOUT,
  LUCA_PHASES,
  LUCA_PRODUCT_FEATURES,
  LUCA_SECTIONS,
  LUCA_TRUST_CARDS,
} from "@/lib/portfolio/case-studies/luca";
import { cn } from "@/lib/utils";

export default function LucaWorkPage() {
  return (
    <>
      <PortfolioNav />
      <main className={cn(SPACING.pageAnchorScrollBuffer)}>
        <CaseStudyLucaHero />
        <CaseStudyLucaOutcomes />

        <CaseStudyPhaseSection
          phase={LUCA_PHASES.context}
          tone="muted"
          lead={<CaseStudyLucaInDepthTransition />}
        >
          <CaseStudyProseSection section={LUCA_SECTIONS.context} embedded />
          <CaseStudyProseSection section={LUCA_SECTIONS.hypothesis1} embedded />
          <CaseStudyProseSection
            section={LUCA_SECTIONS.constraintShift}
            embedded
          />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={LUCA_PHASES.pilot} tone="dark">
          <CaseStudyProseSection section={LUCA_SECTIONS.hypothesis2} embedded />
          <CaseStudyProseSection section={LUCA_SECTIONS.manualPilot} embedded />
          <CaseStudyLucaCallout text={LUCA_MANUAL_PILOT_CALLOUT} />
          <CaseStudyProseSection section={LUCA_SECTIONS.pilotResults} embedded />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={LUCA_PHASES.product} tone="muted">
          <CaseStudyProseSection
            section={LUCA_SECTIONS.productRebuild}
            embedded
          />
          <CaseStudyLucaFeatureGrid groups={LUCA_PRODUCT_FEATURES} />
          <CaseStudyProseSection
            section={LUCA_SECTIONS.trustCompliance}
            embedded
          />
          <CaseStudyLucaTrustCards cards={LUCA_TRUST_CARDS} />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={LUCA_PHASES.marketplace} tone="dark">
          <CaseStudyProseSection
            section={LUCA_SECTIONS.marketplaceConstraint}
            embedded
          />
          <CaseStudyProseSection section={LUCA_SECTIONS.growth} embedded />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={LUCA_PHASES.shutdown} tone="muted">
          <CaseStudyProseSection section={LUCA_SECTIONS.shutdown} embedded />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={LUCA_PHASES.lessons} tone="dark">
          <CaseStudyProseSection section={LUCA_SECTIONS.lessons} embedded />
        </CaseStudyPhaseSection>
      </main>
      <PortfolioFooter />
    </>
  );
}
