import { CaseStudyHarnessHeroActions } from "@/components/custom/portfolio/case-study/harness/case-study-harness-hero-actions";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import {
  HARNESS_HERO,
  HARNESS_HERO_METADATA,
} from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

export function CaseStudyHarnessHero() {
  const { illustration } = HARNESS_HERO;

  return (
    <section className={cn(SPACING.heroSectionPaddingY)}>
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <div className={RESPONSIVE.caseStudyHeroGrid}>
          <div
            className={cn(RESPONSIVE.caseStudyHeroTextColumn, SPACING.stackGap)}
          >
            <h1 className={RESPONSIVE.caseStudyHeroHeading}>
              {HARNESS_HERO.title}
            </h1>
            <p className={RESPONSIVE.caseStudyHeroSubhead}>
              {HARNESS_HERO.subtitle}
            </p>
            <CaseStudyHarnessHeroActions />
          </div>

          <div className={RESPONSIVE.caseStudyHeroIllustrationColumn}>
            <div className={RESPONSIVE.caseStudyHeroIllustrationShell}>
              {/* eslint-disable-next-line @next/next/no-img-element -- hero screenshot asset */}
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
          {HARNESS_HERO_METADATA.map((item) => (
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
