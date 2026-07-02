import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import {
  UKME_VOC_HERO,
  UKME_VOC_META,
} from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

const HERO_METADATA = [
  { label: "Primary users", value: UKME_VOC_META.primaryUsers },
  { label: "Domain", value: UKME_VOC_META.domain },
  { label: "Focus", value: UKME_VOC_META.focus },
] as const;

export function CaseStudyHero() {
  const { illustration } = UKME_VOC_HERO;

  return (
    <section className={cn(SPACING.heroSectionPaddingY)}>
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <div className={RESPONSIVE.caseStudyHeroGrid}>
          <div
            className={cn(RESPONSIVE.caseStudyHeroTextColumn, SPACING.stackGap)}
          >
            <h1 className={RESPONSIVE.caseStudyHeroHeading}>
              {UKME_VOC_HERO.title}
            </h1>
            <p className={RESPONSIVE.caseStudyHeroSubhead}>
              {UKME_VOC_HERO.subtitle}
            </p>
          </div>

          <div className={RESPONSIVE.caseStudyHeroIllustrationColumn}>
            <div className={RESPONSIVE.caseStudyHeroIllustrationShell}>
              {/* eslint-disable-next-line @next/next/no-img-element -- transparent PNG hero illustration */}
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
          {HERO_METADATA.map((item) => (
            <div key={item.label} className={RESPONSIVE.caseStudyMetaCard}>
              <p className={RESPONSIVE.caseStudyMetaLabel}>{item.label}</p>
              <p className={RESPONSIVE.caseStudyMetaValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
