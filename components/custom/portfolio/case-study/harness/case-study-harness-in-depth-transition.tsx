import { RESPONSIVE } from "@/lib/constants";
import { HARNESS_IN_DEPTH } from "@/lib/portfolio/case-studies/harness";

export function CaseStudyHarnessInDepthTransition() {
  return (
    <div className={RESPONSIVE.caseStudyInDepthTransition}>
      <h2 className={RESPONSIVE.sectionHeading}>{HARNESS_IN_DEPTH.title}</h2>
      <p className={RESPONSIVE.caseStudyInDepthSubtitle}>
        {HARNESS_IN_DEPTH.subtitle}
      </p>
    </div>
  );
}
