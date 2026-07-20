import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { KINTERRA_HERO } from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

export function CaseStudyKinterraHero() {
  return (
    <section className={cn(SPACING.heroSectionPaddingY)}>
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <h1 className={RESPONSIVE.caseStudyHeroHeading}>{KINTERRA_HERO.title}</h1>
      </div>
    </section>
  );
}
