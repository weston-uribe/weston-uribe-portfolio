import { WorkCarousel } from "@/components/custom/portfolio/work-carousel";
import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { WORK_ITEMS, WORK_SECTION } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

export function WorkSection() {
  return (
    <section
      id="work"
      className={cn(RESPONSIVE.sectionAnchor, SPACING.sectionJoinPaddingY)}
    >
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <div>
          <h2 className={RESPONSIVE.sectionHeading}>Work</h2>
          <div className={cn("mt-4 flex max-w-2xl flex-col", SPACING.elementGap)}>
            <p className={cn("text-muted-foreground", RESPONSIVE.bodyText)}>
              {WORK_SECTION.subheadline}
            </p>
            <p className={cn("text-muted-foreground", RESPONSIVE.sectionDisclaimer)}>
              *{WORK_SECTION.disclaimer}
            </p>
          </div>
        </div>

        <WorkCarousel items={WORK_ITEMS} />
      </div>
    </section>
  );
}
