import { CaseStudyKinterraHero } from "@/components/custom/portfolio/case-study/kinterra/case-study-kinterra-hero";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";

export default function KinterraWorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PortfolioNav />
      <main className="flex-1">
        <CaseStudyKinterraHero />
      </main>
      <PortfolioFooter />
    </div>
  );
}
