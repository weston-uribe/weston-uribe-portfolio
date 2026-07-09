import { CaseStudyHarnessHero } from "@/components/custom/portfolio/case-study/harness/case-study-harness-hero";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";
import { SPACING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function HarnessWorkPage() {
  return (
    <>
      <PortfolioNav />
      <main className={cn(SPACING.pageAnchorScrollBuffer)}>
        <CaseStudyHarnessHero />
      </main>
      <PortfolioFooter />
    </>
  );
}
