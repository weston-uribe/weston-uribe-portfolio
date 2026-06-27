import { Button } from "@/components/ui/button";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { HERO, WESTON_PROFILE } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className={cn("relative overflow-hidden", SPACING.heroSectionPaddingY)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 size-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:size-72 md:size-80 lg:size-96"
      />
      <div className={cn(LAYOUT.pageShell, "relative", RESPONSIVE.heroGrid)}>
        <div className={cn(RESPONSIVE.heroTextColumn, SPACING.stackGap)}>
          <h1 className={RESPONSIVE.heroHeading}>{HERO.headline}</h1>
          <p className={RESPONSIVE.heroSubhead}>{HERO.subheadline}</p>
          <div className={RESPONSIVE.ctaRow}>
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              className={RESPONSIVE.ctaButton}
            >
              Contact Me
            </Button>
            <Button
              render={<a href="#work" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className={RESPONSIVE.ctaButton}
            >
              View my work
            </Button>
          </div>
        </div>

        <div className={RESPONSIVE.heroAvatarColumn}>
          <div className={RESPONSIVE.heroPortraitShell}>
            <div aria-hidden="true" className="hero-portrait-glow" />
            <div className="hero-portrait-frame relative">
              {/* eslint-disable-next-line @next/next/no-img-element -- CSS mask must target the native img element directly */}
              <img
                src={WESTON_PROFILE.assetPath}
                alt={WESTON_PROFILE.alt}
                width={WESTON_PROFILE.assetWidth}
                height={WESTON_PROFILE.assetHeight}
                decoding="async"
                fetchPriority="high"
                className={cn(RESPONSIVE.heroPortraitImage, "hero-portrait-img")}
              />
              <div aria-hidden="true" className="hero-portrait-edge-fade">
                <div className="hero-portrait-fade-top" />
                <div className="hero-portrait-fade-bottom" />
                <div className="hero-portrait-fade-left" />
                <div className="hero-portrait-fade-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
