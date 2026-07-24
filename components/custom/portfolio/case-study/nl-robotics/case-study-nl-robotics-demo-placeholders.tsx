import Image from "next/image";

import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { NL_ROBOTICS_DEMOS } from "@/lib/portfolio/case-studies/nl-robotics";
import { cn } from "@/lib/utils";

export function CaseStudyNlRoboticsDemoPlaceholders() {
  return (
    <section
      id="simulation-demonstrations"
      className={cn(SPACING.caseStudyAtAGlanceSectionY)}
    >
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <div className={cn(SPACING.stackGap, "flex flex-col")}>
          <h2 className={cn(RESPONSIVE.sectionHeading, "w-full text-left")}>
            {NL_ROBOTICS_DEMOS.title}
          </h2>
          <p className={RESPONSIVE.caseStudyProse}>{NL_ROBOTICS_DEMOS.intro}</p>
        </div>

        <div className={cn(SPACING.stackGap, "flex flex-col")}>
          {NL_ROBOTICS_DEMOS.demos.map((demo) => (
            <figure
              key={demo.id}
              className={cn(
                RESPONSIVE.caseStudyAnnotationCard,
                SPACING.stackGap,
                "flex flex-col overflow-hidden p-0",
              )}
            >
              <div className="relative aspect-[2/1] w-full overflow-hidden bg-muted/30">
                <Image
                  src={demo.placeholderAssetPath}
                  alt={demo.placeholderAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className={cn(SPACING.stackGap, "flex flex-col p-5")}>
                <span className={RESPONSIVE.caseStudyComingSoonBadge}>
                  {NL_ROBOTICS_DEMOS.comingSoonBadge}
                </span>
                <p className="text-sm font-medium text-muted-foreground">
                  {demo.eyebrow}
                </p>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                  {demo.title}
                </h3>
                <p className={RESPONSIVE.caseStudyProse}>{demo.body}</p>
                <ul className="flex flex-wrap gap-2 list-none">
                  {demo.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          className={cn(
            RESPONSIVE.caseStudyInsightCard,
            RESPONSIVE.caseStudyProseColumn,
          )}
        >
          <p
            className={cn(
              RESPONSIVE.caseStudyProse,
              "font-medium text-foreground/90",
            )}
          >
            {NL_ROBOTICS_DEMOS.boundaryCallout}
          </p>
        </div>
      </div>
    </section>
  );
}
