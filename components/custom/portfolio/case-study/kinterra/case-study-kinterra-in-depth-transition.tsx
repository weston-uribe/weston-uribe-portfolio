import { RESPONSIVE } from "@/lib/constants";
import { KINTERRA_IN_DEPTH } from "@/lib/portfolio/case-studies/kinterra";

export function CaseStudyKinterraInDepthTransition() {
  return (
    <div className={RESPONSIVE.caseStudyInDepthTransition}>
      <p className="text-sm font-medium uppercase tracking-wide text-foreground/70">
        {KINTERRA_IN_DEPTH.eyebrow}
      </p>
      <h2 className={RESPONSIVE.sectionHeading}>{KINTERRA_IN_DEPTH.title}</h2>
      <p className={RESPONSIVE.caseStudyInDepthSubtitle}>
        {KINTERRA_IN_DEPTH.body}
      </p>
    </div>
  );
}
