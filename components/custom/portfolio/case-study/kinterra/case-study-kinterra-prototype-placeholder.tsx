import { CaseStudyKinterraTriSelfVisual } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-tri-self-visual";
import { RESPONSIVE, SPACING } from "@/lib/constants";
import { KINTERRA_PROTOTYPE_PLACEHOLDER } from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

export function CaseStudyKinterraPrototypePlaceholder() {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyComingSoonCard,
        SPACING.stackGap,
        "flex flex-col",
      )}
    >
      <span className={RESPONSIVE.caseStudyComingSoonBadge}>
        {KINTERRA_PROTOTYPE_PLACEHOLDER.badge}
      </span>
      <h2 className={RESPONSIVE.sectionHeading}>
        {KINTERRA_PROTOTYPE_PLACEHOLDER.title}
      </h2>
      <p className={RESPONSIVE.caseStudyProse}>
        {KINTERRA_PROTOTYPE_PLACEHOLDER.body}
      </p>

      <div className="relative">
        <CaseStudyKinterraTriSelfVisual muted />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl bg-background/20"
        />
      </div>
    </div>
  );
}
