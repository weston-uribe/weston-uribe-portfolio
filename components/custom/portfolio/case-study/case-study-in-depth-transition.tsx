import { RESPONSIVE } from "@/lib/constants";
import { UKME_VOC_IN_DEPTH } from "@/lib/portfolio/case-studies/ukme-voc";

export function CaseStudyInDepthTransition() {
  return (
    <div className={RESPONSIVE.caseStudyInDepthTransition}>
      <h2 className={RESPONSIVE.sectionHeading}>{UKME_VOC_IN_DEPTH.title}</h2>
      <p className={RESPONSIVE.caseStudyInDepthSubtitle}>
        {UKME_VOC_IN_DEPTH.subtitle}
      </p>
    </div>
  );
}
