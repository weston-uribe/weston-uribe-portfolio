import { RESPONSIVE, SPACING } from "@/lib/constants";
import { HARNESS_INSTALL_CALLOUT } from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessInstallCallout() {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyAnnotationCard,
        RESPONSIVE.caseStudyProseColumn,
        SPACING.stackGap,
        "flex flex-col",
      )}
    >
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {HARNESS_INSTALL_CALLOUT.title}
      </h3>
      <p className={RESPONSIVE.caseStudyProse}>{HARNESS_INSTALL_CALLOUT.body}</p>
      <pre
        className="overflow-x-auto rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed select-text"
        aria-label="Install command"
      >
        <code className="font-mono text-foreground">
          {HARNESS_INSTALL_CALLOUT.command}
        </code>
      </pre>
      <p className={RESPONSIVE.caseStudyProse}>
        {HARNESS_INSTALL_CALLOUT.supportingText}
      </p>
    </div>
  );
}
