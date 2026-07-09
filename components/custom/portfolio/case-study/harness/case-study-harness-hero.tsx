import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { HARNESS_HERO } from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessHero() {
  return (
    <section className={cn(SPACING.heroSectionPaddingY)}>
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <h1 className={RESPONSIVE.caseStudyHeroHeading}>{HARNESS_HERO.title}</h1>
      </div>
    </section>
  );
}
