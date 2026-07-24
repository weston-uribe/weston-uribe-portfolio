import { CaseStudyNlRoboticsFactoryVisual } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-factory-visual";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import {
  NL_ROBOTICS_HERO,
  NL_ROBOTICS_HERO_METADATA,
} from "@/lib/portfolio/case-studies/nl-robotics";
import { cn } from "@/lib/utils";

export function CaseStudyNlRoboticsHero() {
  return (
    <section className={cn(SPACING.heroSectionPaddingY)}>
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <div className={RESPONSIVE.caseStudyHeroGrid}>
          <div
            className={cn(RESPONSIVE.caseStudyHeroTextColumn, SPACING.stackGap)}
          >
            <h1 className={RESPONSIVE.caseStudyHeroHeading}>
              {NL_ROBOTICS_HERO.title}
            </h1>
            <p className={RESPONSIVE.caseStudyHeroSubhead}>
              {NL_ROBOTICS_HERO.subtitle}
            </p>
          </div>

          <div className={RESPONSIVE.caseStudyHeroIllustrationColumn}>
            <CaseStudyNlRoboticsFactoryVisual />
          </div>
        </div>

        <div className={RESPONSIVE.caseStudyMetaGrid}>
          {NL_ROBOTICS_HERO_METADATA.map((item) => (
            <div key={item.label} className={RESPONSIVE.caseStudyMetaCard}>
              <p className={RESPONSIVE.caseStudyMetaLabel}>{item.label}</p>
              <ul className={cn(RESPONSIVE.caseStudyMetaValue, "list-none")}>
                {item.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
