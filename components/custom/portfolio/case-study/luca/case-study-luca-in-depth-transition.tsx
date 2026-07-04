import { RESPONSIVE } from "@/lib/constants";
import { LUCA_IN_DEPTH } from "@/lib/portfolio/case-studies/luca";

export function CaseStudyLucaInDepthTransition() {
  return (
    <div className={RESPONSIVE.caseStudyInDepthTransition}>
      <h2 className={RESPONSIVE.sectionHeading}>{LUCA_IN_DEPTH.title}</h2>
      <p className={RESPONSIVE.caseStudyInDepthSubtitle}>
        {LUCA_IN_DEPTH.subtitle}
      </p>
    </div>
  );
}
