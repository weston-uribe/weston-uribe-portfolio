import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import type { CaseStudyPhase } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

type CaseStudySurfaceTone = "dark" | "muted";

type CaseStudyPhaseSectionProps = {
  phase: CaseStudyPhase;
  tone?: CaseStudySurfaceTone;
  variant?: "default" | "future";
  children: React.ReactNode;
};

function getPhaseSurfaceClass(
  tone: CaseStudySurfaceTone,
  variant: "default" | "future",
): string {
  if (variant === "future") {
    return RESPONSIVE.caseStudyPhaseBandFuture;
  }

  return tone === "dark"
    ? RESPONSIVE.caseStudySectionSurfaceDark
    : RESPONSIVE.caseStudySectionSurfaceMuted;
}

export function CaseStudyPhaseSection({
  phase,
  tone = "muted",
  variant = "default",
  children,
}: CaseStudyPhaseSectionProps) {
  return (
    <section
      id={phase.id}
      className={cn(getPhaseSurfaceClass(tone, variant))}
    >
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <div
          className={cn(
            RESPONSIVE.caseStudyProseColumn,
            RESPONSIVE.caseStudyPhaseHeader,
          )}
        >
          <p className={RESPONSIVE.caseStudyPhaseNumber}>
            {phase.number} {phase.title}
          </p>
        </div>
        <div className={RESPONSIVE.caseStudyPhaseContent}>{children}</div>
      </div>
    </section>
  );
}

type CaseStudySectionBandProps = {
  tone: CaseStudySurfaceTone;
  children: React.ReactNode;
};

export function CaseStudySectionBand({
  tone,
  children,
}: CaseStudySectionBandProps) {
  return (
    <section
      className={cn(
        tone === "dark"
          ? RESPONSIVE.caseStudySectionSurfaceDark
          : RESPONSIVE.caseStudySectionSurfaceMuted,
      )}
    >
      {children}
    </section>
  );
}
