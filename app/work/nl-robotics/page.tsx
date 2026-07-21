import { CaseStudyNlRoboticsHero } from "@/components/custom/portfolio/case-study/nl-robotics/case-study-nl-robotics-hero";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";

export default function NlRoboticsWorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PortfolioNav />
      <main className="flex-1">
        <CaseStudyNlRoboticsHero />
      </main>
      <PortfolioFooter />
    </div>
  );
}
