import { Button } from "@/components/ui/button";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import {
  UKME_VOC_HERO,
  UKME_VOC_META,
  UKME_VOC_PROTOTYPE,
} from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

const CHIP_STYLE = "bg-chart-4/20 text-chart-4/90";

const HERO_METADATA = [
  { label: "Primary users", value: UKME_VOC_META.primaryUsers },
  { label: "Domain", value: UKME_VOC_META.domain },
  { label: "Focus", value: UKME_VOC_META.focus },
] as const;

export function CaseStudyHero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        SPACING.heroSectionPaddingY,
        SPACING.sectionPaddingBottom,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 size-72 rounded-full bg-primary/10 blur-3xl sm:size-80 md:size-96"
      />
      <div className={cn(LAYOUT.pageShell, "relative", SPACING.stackGap, "flex flex-col")}>
        <h1 className={RESPONSIVE.caseStudyHeroHeading}>{UKME_VOC_HERO.title}</h1>
        <p className={RESPONSIVE.caseStudyHeroSubhead}>{UKME_VOC_HERO.subtitle}</p>
        <div className="flex flex-wrap items-center gap-2">
          {UKME_VOC_HERO.tags.map((tag) => (
            <span
              key={tag}
              className={cn(RESPONSIVE.caseStudyChip, CHIP_STYLE)}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={RESPONSIVE.ctaRow}>
          <Button
            render={<a href={UKME_VOC_PROTOTYPE.jumpLinkHref} />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className={RESPONSIVE.ctaButton}
          >
            {UKME_VOC_PROTOTYPE.jumpLinkLabel}
          </Button>
        </div>
        <div className={RESPONSIVE.caseStudyMetaGrid}>
          {HERO_METADATA.map((item) => (
            <div
              key={item.label}
              className={RESPONSIVE.caseStudyMetaCard}
            >
              <p className={RESPONSIVE.caseStudyMetaLabel}>{item.label}</p>
              <p className={RESPONSIVE.caseStudyMetaValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
