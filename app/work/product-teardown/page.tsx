import { CaseStudyProductTeardownHero } from "@/components/custom/portfolio/case-study/product-teardown/case-study-product-teardown-hero";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";

export default function ProductTeardownWorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PortfolioNav />
      <main className="flex-1">
        <CaseStudyProductTeardownHero />
      </main>
      <PortfolioFooter />
    </div>
  );
}
