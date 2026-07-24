import { RESPONSIVE } from "@/lib/constants";
import { NL_ROBOTICS_IN_DEPTH } from "@/lib/portfolio/case-studies/nl-robotics";

export function CaseStudyNlRoboticsInDepthTransition() {
  return (
    <div className={RESPONSIVE.caseStudyInDepthTransition}>
      <h2 className={RESPONSIVE.sectionHeading}>{NL_ROBOTICS_IN_DEPTH.title}</h2>
      <p className={RESPONSIVE.caseStudyInDepthSubtitle}>
        {NL_ROBOTICS_IN_DEPTH.subtitle}
      </p>
    </div>
  );
}
