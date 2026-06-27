import { AboutDecorativeShapes } from "@/components/custom/portfolio/about-decorative-shapes";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { ABOUT_ANIMALS_ILLUSTRATION, ABOUT_PARAGRAPHS } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section
      id="about"
      className={cn(
        "relative overflow-hidden",
        RESPONSIVE.sectionAnchor,
        SPACING.sectionJoinPaddingY,
      )}
    >
      <AboutDecorativeShapes />
      <div className={cn("relative z-10", LAYOUT.pageShell, RESPONSIVE.aboutGrid)}>
        <div className={RESPONSIVE.aboutIntroColumn}>
          <h2 className={RESPONSIVE.sectionHeading}>About</h2>
          <div className={RESPONSIVE.aboutIllustrationShell}>
            {/* eslint-disable-next-line @next/next/no-img-element -- raster illustration with fixed dimensions */}
            <img
              src={ABOUT_ANIMALS_ILLUSTRATION.assetPath}
              alt={ABOUT_ANIMALS_ILLUSTRATION.alt}
              width={ABOUT_ANIMALS_ILLUSTRATION.assetWidth}
              height={ABOUT_ANIMALS_ILLUSTRATION.assetHeight}
              decoding="async"
              className={RESPONSIVE.aboutIllustrationImage}
            />
          </div>
        </div>
        <div className={cn("lg:col-span-3", SPACING.stackGap, "flex flex-col")}>
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className={cn("text-muted-foreground", RESPONSIVE.aboutBodyText)}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
