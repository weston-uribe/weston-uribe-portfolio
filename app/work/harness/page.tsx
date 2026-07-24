import { CaseStudyHarnessAgentRoles } from "@/components/custom/portfolio/case-study/harness/case-study-harness-agent-roles";
import { CaseStudyHarnessAtAGlance } from "@/components/custom/portfolio/case-study/harness/case-study-harness-at-a-glance";
import { CaseStudyHarnessAudienceCards } from "@/components/custom/portfolio/case-study/harness/case-study-harness-audience-cards";
import { CaseStudyHarnessCallout } from "@/components/custom/portfolio/case-study/harness/case-study-harness-callout";
import { CaseStudyHarnessCapabilities } from "@/components/custom/portfolio/case-study/harness/case-study-harness-capabilities";
import { CaseStudyHarnessEvaluationGrid } from "@/components/custom/portfolio/case-study/harness/case-study-harness-evaluation-grid";
import { CaseStudyHarnessEvidenceModel } from "@/components/custom/portfolio/case-study/harness/case-study-harness-evidence-model";
import { CaseStudyHarnessHero } from "@/components/custom/portfolio/case-study/harness/case-study-harness-hero";
import { CaseStudyHarnessInDepthTransition } from "@/components/custom/portfolio/case-study/harness/case-study-harness-in-depth-transition";
import { CaseStudyHarnessInstallCallout } from "@/components/custom/portfolio/case-study/harness/case-study-harness-install-callout";
import { CaseStudyHarnessOperatorSteps } from "@/components/custom/portfolio/case-study/harness/case-study-harness-operator-steps";
import { CaseStudyHarnessRequirementsGrid } from "@/components/custom/portfolio/case-study/harness/case-study-harness-requirements-grid";
import { CaseStudyHarnessRoadmap } from "@/components/custom/portfolio/case-study/harness/case-study-harness-roadmap";
import { CaseStudyPhaseSection } from "@/components/custom/portfolio/case-study/case-study-phase-section";
import { CaseStudyProseSection } from "@/components/custom/portfolio/case-study/case-study-prose-section";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";
import { SPACING } from "@/lib/constants";
import {
  HARNESS_CURRENT_SCOPE_NOTE,
  HARNESS_EVALUATION_STATUS_CALLOUT,
  HARNESS_PHASES,
  HARNESS_SECTIONS,
} from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export default function HarnessWorkPage() {
  return (
    <>
      <PortfolioNav />
      <main className={cn(SPACING.pageAnchorScrollBuffer)}>
        <CaseStudyHarnessHero />
        <CaseStudyHarnessAtAGlance />

        <CaseStudyPhaseSection
          phase={HARNESS_PHASES.context}
          tone="muted"
          lead={<CaseStudyHarnessInDepthTransition />}
        >
          <CaseStudyProseSection
            section={HARNESS_SECTIONS.portfolioRequirements}
            embedded
          />
          <CaseStudyHarnessRequirementsGrid />
          <CaseStudyProseSection section={HARNESS_SECTIONS.myRole} embedded />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={HARNESS_PHASES.strategy} tone="dark">
          <CaseStudyProseSection
            section={HARNESS_SECTIONS.productizingWorkflow}
            embedded
          />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={HARNESS_PHASES.workflow} tone="muted">
          <CaseStudyProseSection
            section={HARNESS_SECTIONS.stayInLinear}
            embedded
          />
          <CaseStudyHarnessOperatorSteps />
          <CaseStudyProseSection
            section={HARNESS_SECTIONS.humanReviewFeature}
            embedded
          />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={HARNESS_PHASES.system} tone="dark">
          <CaseStudyProseSection
            section={HARNESS_SECTIONS.specializedAgents}
            embedded
          />
          <CaseStudyHarnessAgentRoles />
          <CaseStudyProseSection
            section={HARNESS_SECTIONS.openSourceLocalFirst}
            embedded
          />
          <CaseStudyHarnessInstallCallout />
          <CaseStudyHarnessAudienceCards />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={HARNESS_PHASES.evaluation} tone="muted">
          <CaseStudyProseSection
            section={HARNESS_SECTIONS.intuitionToEvidence}
            embedded
          />
          <CaseStudyHarnessEvaluationGrid />
          <CaseStudyProseSection
            section={HARNESS_SECTIONS.evaluationEnables}
            embedded
          />
          <CaseStudyHarnessCallout text={HARNESS_EVALUATION_STATUS_CALLOUT} />
          <CaseStudyHarnessEvidenceModel />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection phase={HARNESS_PHASES.roadmap} tone="dark">
          <CaseStudyProseSection
            section={HARNESS_SECTIONS.whatWorksToday}
            embedded
          />
          <CaseStudyHarnessCapabilities />
          <CaseStudyHarnessCallout text={HARNESS_CURRENT_SCOPE_NOTE} />
          <CaseStudyProseSection section={HARNESS_SECTIONS.whereGoing} embedded />
          <CaseStudyHarnessRoadmap />
          <CaseStudyProseSection section={HARNESS_SECTIONS.conclusion} embedded />
        </CaseStudyPhaseSection>
      </main>
      <PortfolioFooter />
    </>
  );
}
