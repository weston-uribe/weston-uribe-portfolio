import { RESPONSIVE } from "@/lib/constants";
import { KINTERRA_IN_DEPTH } from "@/lib/portfolio/case-studies/kinterra";

export function CaseStudyKinterraInDepthTransition() {
  return (
    <div className={RESPONSIVE.caseStudyInDepthTransition}>
      <h2 className={RESPONSIVE.sectionHeading}>{KINTERRA_IN_DEPTH.title}</h2>
      <p className={RESPONSIVE.caseStudyInDepthSubtitle}>
        {KINTERRA_IN_DEPTH.subtitle}
      </p>
    </div>
  );
}
