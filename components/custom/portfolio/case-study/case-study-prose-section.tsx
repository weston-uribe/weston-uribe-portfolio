import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import type { CaseStudyProseSection } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

type CaseStudyProseSectionProps = {
  section: CaseStudyProseSection;
  embedded?: boolean;
};

export function CaseStudyProseSection({
  section,
  embedded = false,
}: CaseStudyProseSectionProps) {
  return (
    <section
      id={section.id}
      className={cn(!embedded && SPACING.sectionJoinPaddingY)}
    >
      <div
        className={cn(
          !embedded && LAYOUT.pageShell,
          RESPONSIVE.caseStudyProseColumn,
          SPACING.stackGap,
          "flex flex-col",
        )}
      >
        <h2 className={RESPONSIVE.sectionHeading}>{section.title}</h2>
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className={RESPONSIVE.caseStudyProse}
          >
            {paragraph}
          </p>
        ))}
        {section.bulletsIntro ? (
          <p className={RESPONSIVE.caseStudyProse}>{section.bulletsIntro}</p>
        ) : null}
        {section.bullets ? (
          <ul className="list-disc space-y-2 pl-5">
            {section.bullets.map((bullet) => (
              <li
                key={bullet}
                className={RESPONSIVE.caseStudyProse}
              >
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
