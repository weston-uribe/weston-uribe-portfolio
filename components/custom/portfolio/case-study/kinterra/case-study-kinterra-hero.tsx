import { CaseStudyKinterraTriSelfVisual } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-tri-self-visual";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import {
  KINTERRA_HERO,
  KINTERRA_HERO_METADATA,
} from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

export function CaseStudyKinterraHero() {
  return (
    <section className={cn(SPACING.heroSectionPaddingY)}>
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <div className={RESPONSIVE.caseStudyHeroGrid}>
          <div
            className={cn(RESPONSIVE.caseStudyHeroTextColumn, SPACING.stackGap)}
          >
            <h1 className={RESPONSIVE.caseStudyHeroHeading}>
              {KINTERRA_HERO.title}
            </h1>
            <p className={RESPONSIVE.caseStudyHeroSubhead}>
              {KINTERRA_HERO.subtitle}
            </p>
          </div>

          <div className={RESPONSIVE.caseStudyHeroIllustrationColumn}>
            <CaseStudyKinterraTriSelfVisual />
          </div>
        </div>

        <div className={RESPONSIVE.caseStudyMetaGrid}>
          {KINTERRA_HERO_METADATA.map((item) => (
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
