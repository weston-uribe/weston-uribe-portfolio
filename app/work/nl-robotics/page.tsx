import { CaseStudyPhaseSection } from "@/components/custom/portfolio/case-study/case-study-phase-section";
import { CaseStudyProseSection } from "@/components/custom/portfolio/case-study/case-study-prose-section";
import { CaseStudyNlRoboticsAtAGlance } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-at-a-glance";
import { CaseStudyNlRoboticsCallout } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-callout";
import { CaseStudyNlRoboticsDemos } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-demos";
import { CaseStudyNlRoboticsFactoryFlow } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-factory-flow";
import { CaseStudyNlRoboticsHero } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-hero";
import { CaseStudyNlRoboticsInDepthTransition } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-in-depth-transition";
import { CaseStudyNlRoboticsRelatedHarness } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-related-harness";
import { CaseStudyNlRoboticsRunComparison } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-run-comparison";
import { CaseStudyNlRoboticsTechnicalStack } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-technical-stack";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";
import { SPACING } from "@/lib/constants";
import {
  NL_ROBOTICS_FACTORY_CALLOUT,
  NL_ROBOTICS_PHASES,
  NL_ROBOTICS_SECTIONS,
} from "@/lib/portfolio/case-studies/nl-robotics";
import { cn } from "@/lib/utils";

export default function NlRoboticsWorkPage() {
  return (
    <>
      <PortfolioNav />
      <main className={cn(SPACING.pageAnchorScrollBuffer)}>
        <CaseStudyNlRoboticsHero />
        <CaseStudyNlRoboticsAtAGlance />
        <CaseStudyNlRoboticsDemos />

        <CaseStudyPhaseSection
          phase={NL_ROBOTICS_PHASES.technicalFeasibility}
          tone="muted"
          lead={<CaseStudyNlRoboticsInDepthTransition />}
        >
          <CaseStudyProseSection
            section={NL_ROBOTICS_SECTIONS.technicalFeasibility}
            embedded
          />
          <CaseStudyProseSection section={NL_ROBOTICS_SECTIONS.myRole} embedded />
          <CaseStudyNlRoboticsTechnicalStack />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection
          phase={NL_ROBOTICS_PHASES.capabilityFactory}
          tone="dark"
        >
          <CaseStudyProseSection
            section={NL_ROBOTICS_SECTIONS.capabilityFactory}
            embedded
          />
          <CaseStudyNlRoboticsFactoryFlow />
          <CaseStudyNlRoboticsCallout text={NL_ROBOTICS_FACTORY_CALLOUT} />
        </CaseStudyPhaseSection>

        <CaseStudyPhaseSection
          phase={NL_ROBOTICS_PHASES.evaluationLessons}
          tone="muted"
        >
          <CaseStudyProseSection
            section={NL_ROBOTICS_SECTIONS.evaluationLessons}
            embedded
          />
          <CaseStudyNlRoboticsRunComparison />
          <CaseStudyProseSection
            section={NL_ROBOTICS_SECTIONS.conclusion}
            embedded
          />
        </CaseStudyPhaseSection>

        <CaseStudyNlRoboticsRelatedHarness />
      </main>
      <PortfolioFooter />
    </>
  );
}
