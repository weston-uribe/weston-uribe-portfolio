import { RESPONSIVE, SPACING } from "@/lib/constants";
import { HARNESS_PROTOTYPE_PLACEHOLDER } from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessPrototypePlaceholder() {
  const { previewImage } = HARNESS_PROTOTYPE_PLACEHOLDER;

  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyComingSoonCard,
        SPACING.stackGap,
        "flex flex-col",
      )}
    >
      <span className={RESPONSIVE.caseStudyComingSoonBadge}>
        {HARNESS_PROTOTYPE_PLACEHOLDER.badge}
      </span>
      <h2 className={RESPONSIVE.sectionHeading}>
        {HARNESS_PROTOTYPE_PLACEHOLDER.title}
      </h2>
      <p className={RESPONSIVE.caseStudyProse}>
        {HARNESS_PROTOTYPE_PLACEHOLDER.body}
      </p>

      <div className={cn(RESPONSIVE.caseStudyScreenshotShell, "relative")}>
        <div className={RESPONSIVE.caseStudyScreenshotFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element -- static preview asset */}
          <img
            src={previewImage.assetPath}
            alt={previewImage.alt}
            className={cn(
              RESPONSIVE.caseStudyScreenshotImage,
              "opacity-60 saturate-50",
            )}
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl bg-background/20"
        />
      </div>
    </div>
  );
}
