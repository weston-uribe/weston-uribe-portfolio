import { RESPONSIVE } from "@/lib/constants";
import { HARNESS_EVIDENCE_MODEL } from "@/lib/portfolio/case-studies/harness";

export function CaseStudyHarnessEvidenceModel() {
  return (
    <div className={RESPONSIVE.caseStudyProseColumn}>
      <p className="text-sm font-semibold text-foreground sm:text-base">
        {HARNESS_EVIDENCE_MODEL.label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
        {HARNESS_EVIDENCE_MODEL.body}
      </p>
    </div>
  );
}
