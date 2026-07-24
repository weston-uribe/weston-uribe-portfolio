import { CaseStudyKinterraAgentCapabilities } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-agent-capabilities";
import { CaseStudyKinterraAtAGlance } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-at-a-glance";
import { CaseStudyKinterraCallout } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-callout";
import { CaseStudyKinterraCapabilities } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-capabilities";
import { CaseStudyKinterraCoreQuestions } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-core-questions";
import { CaseStudyKinterraDeltaVisual } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-delta-visual";
import { CaseStudyKinterraHero } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-hero";
import { CaseStudyKinterraIdentityPipeline } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-identity-pipeline";
import { CaseStudyKinterraInDepthTransition } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-in-depth-transition";
import { CaseStudyKinterraMeasurementLevels } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-measurement-levels";
import { CaseStudyKinterraModelLayers } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-model-layers";
import { CaseStudyKinterraProductLessons } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-product-lessons";
import { CaseStudyKinterraStrategyEvolution } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-strategy-evolution";
import { CaseStudyPhaseSection } from "@/components/custom/portfolio/case-study/case-study-phase-section";
import { CaseStudyProseSection } from "@/components/custom/portfolio/case-study/case-study-prose-section";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";
import { SPACING } from "@/lib/constants";
import {
  KINTERRA_CURRENT_SCOPE_CALLOUT,
  KINTERRA_EARLY_FEEDBACK,
  KINTERRA_MEASUREMENT_CALLOUT,
  KINTERRA_PHASES,
  KINTERRA_PRODUCT_PRINCIPLE_CALLOUT,
  KINTERRA_SECTIONS,
  KINTERRA_STRATEGY_CALLOUT,
} from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

export default function KinterraWorkPage() {
  return (
    <>
      <PortfolioNav />
      <main className={cn(SPACING.pageAnchorScrollBuffer)}>
        <CaseStudyKinterraHero />
        <CaseStudyKinterraAtAGlance />

        <CaseStudyPhaseSection
          phase={KINTERRA_PHASES.context}
          tone="muted"
          lead={<CaseStudyKinterraInDepthTransition />}
        >
          <CaseStudyProseSection
            section={KINTERRA_SECTIONS.makingIdentityVisible}
            embedded
          />
          <CaseStudyKinterraCoreQuestions />
          <CaseStudyProseSection section={KINTERRA_SECTIONS.myRole} embedded />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={KINTERRA_PHASES.strategy} tone="dark">
          <CaseStudyProseSection
            section={KINTERRA_SECTIONS.infrastructureStrategy}
            embedded
          />
          <CaseStudyKinterraStrategyEvolution />
          <CaseStudyKinterraCallout text={KINTERRA_STRATEGY_CALLOUT} />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection
          phase={KINTERRA_PHASES.identityModel}
          tone="muted"
        >
          <CaseStudyProseSection
            section={KINTERRA_SECTIONS.individualizedStructure}
            embedded
          />
          <CaseStudyKinterraModelLayers />
          <CaseStudyKinterraIdentityPipeline />
          <CaseStudyKinterraCallout text={KINTERRA_PRODUCT_PRINCIPLE_CALLOUT} />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={KINTERRA_PHASES.deltaEngine} tone="dark">
          <CaseStudyProseSection
            section={KINTERRA_SECTIONS.alignmentMeasurement}
            embedded
          />
          <CaseStudyKinterraDeltaVisual />
          <CaseStudyKinterraMeasurementLevels />
          <CaseStudyKinterraCallout text={KINTERRA_MEASUREMENT_CALLOUT} />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection
          phase={KINTERRA_PHASES.agentSystem}
          tone="muted"
        >
          <CaseStudyProseSection
            section={KINTERRA_SECTIONS.streamingAgent}
            embedded
          />
          <CaseStudyKinterraAgentCapabilities />
          <CaseStudyProseSection section={KINTERRA_SECTIONS.privacy} embedded />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={KINTERRA_PHASES.outcomes} tone="dark">
          <CaseStudyProseSection
            section={KINTERRA_SECTIONS.whatShipped}
            embedded
          />
          <CaseStudyKinterraCapabilities />
          <CaseStudyKinterraCallout
            label={KINTERRA_EARLY_FEEDBACK.label}
            body={KINTERRA_EARLY_FEEDBACK.body}
          />
          <CaseStudyKinterraProductLessons />
          <CaseStudyProseSection
            section={KINTERRA_SECTIONS.whereItIsNow}
            embedded
          />
          <CaseStudyKinterraCallout text={KINTERRA_CURRENT_SCOPE_CALLOUT} />
          <CaseStudyProseSection
            section={KINTERRA_SECTIONS.conclusion}
            embedded
          />
        </CaseStudyPhaseSection>
      </main>
      <PortfolioFooter />
    </>
  );
}
