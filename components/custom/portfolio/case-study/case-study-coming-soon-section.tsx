import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { UKME_VOC_COMING_SOON } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

type CaseStudyComingSoonSectionProps = {
  embedded?: boolean;
};

export function CaseStudyComingSoonSection({
  embedded = false,
}: CaseStudyComingSoonSectionProps) {
  return (
    <section
      id="coming-soon"
      className={cn(!embedded && SPACING.sectionJoinPaddingY)}
    >
      <div className={cn(!embedded && LAYOUT.pageShell)}>
        <div
          className={cn(
            RESPONSIVE.caseStudyComingSoonCard,
            RESPONSIVE.caseStudyProseColumn,
            SPACING.stackGap,
            "flex flex-col",
          )}
        >
          <span className={RESPONSIVE.caseStudyComingSoonBadge}>
            {UKME_VOC_COMING_SOON.badge}
          </span>
          <h2 className={RESPONSIVE.sectionHeading}>
            {UKME_VOC_COMING_SOON.title}
          </h2>
          {UKME_VOC_COMING_SOON.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={RESPONSIVE.caseStudyProse}
            >
              {paragraph}
            </p>
          ))}
          {UKME_VOC_COMING_SOON.bulletsIntro ? (
            <p className={RESPONSIVE.caseStudyProse}>
              {UKME_VOC_COMING_SOON.bulletsIntro}
            </p>
          ) : null}
          {UKME_VOC_COMING_SOON.bullets ? (
            <ul className="list-disc space-y-2 pl-5">
              {UKME_VOC_COMING_SOON.bullets.map((bullet) => (
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
      </div>
    </section>
  );
}
