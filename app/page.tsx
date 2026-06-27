import { AboutSection } from "@/components/custom/portfolio/about-section";
import { ContactSection } from "@/components/custom/portfolio/contact-section";
import { HeroSection } from "@/components/custom/portfolio/hero-section";
import { LogoMarquee } from "@/components/custom/portfolio/logo-marquee";
import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";
import { WorkSection } from "@/components/custom/portfolio/work-section";
import { SPACING } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <PortfolioNav />
      <main className={SPACING.pageAnchorScrollBuffer}>
        <HeroSection />
        <LogoMarquee />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </>
  );
}
