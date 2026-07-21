import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { PRODUCT_TEARDOWN_HERO } from "@/lib/portfolio/case-studies/product-teardown";
import { cn } from "@/lib/utils";

export function CaseStudyProductTeardownHero() {
  return (
    <section className={cn(SPACING.heroSectionPaddingY)}>
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <h1 className={RESPONSIVE.caseStudyHeroHeading}>
          {PRODUCT_TEARDOWN_HERO.title}
        </h1>
      </div>
    </section>
  );
}
