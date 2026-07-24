import { RESPONSIVE, SPACING } from "@/lib/constants";
import {
  HARNESS_AGENT_ROLES,
  HARNESS_AGENT_ROLES_GROUP_TITLE,
} from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessAgentRoles() {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {HARNESS_AGENT_ROLES_GROUP_TITLE}
      </h3>
      <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-2 lg:grid-cols-3")}>
        {HARNESS_AGENT_ROLES.map((role) => (
          <div key={role.title} className={RESPONSIVE.caseStudyAnnotationCard}>
            <h4 className="text-sm font-semibold text-foreground sm:text-base">
              {role.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
              {role.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
