import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import {
  NL_ROBOTICS_HERO,
  NL_ROBOTICS_HERO_METADATA,
} from "@/lib/portfolio/case-studies/nl-robotics";
import { cn } from "@/lib/utils";

export function CaseStudyNlRoboticsHero() {
  const { illustration } = NL_ROBOTICS_HERO;

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
            <div className={RESPONSIVE.caseStudyHeroIllustrationShell}>
              {/* eslint-disable-next-line @next/next/no-img-element -- hero illustration asset */}
              <img
                src={illustration.assetPath}
                alt={illustration.alt}
                width={illustration.assetWidth}
                height={illustration.assetHeight}
                decoding="async"
                fetchPriority="high"
                className={RESPONSIVE.caseStudyHeroIllustrationImage}
              />
            </div>
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
