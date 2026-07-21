import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { NL_ROBOTICS_HERO } from "@/lib/portfolio/case-studies/nl-robotics";
import { cn } from "@/lib/utils";

export function CaseStudyNlRoboticsHero() {
  return (
    <section className={cn(SPACING.heroSectionPaddingY)}>
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <h1 className={RESPONSIVE.caseStudyHeroHeading}>
          {NL_ROBOTICS_HERO.title}
        </h1>
      </div>
    </section>
  );
}
