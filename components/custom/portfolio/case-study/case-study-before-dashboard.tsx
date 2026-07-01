import fs from "node:fs";
import path from "node:path";

import { ImageIcon } from "lucide-react";

import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { UKME_VOC_BEFORE_STATE } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

const screenshotAvailable = fs.existsSync(
  path.join(process.cwd(), "public/images", UKME_VOC_BEFORE_STATE.assetFilename),
);

export function CaseStudyBeforeDashboard({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  return (
    <section
      id="before-state"
      className={cn(!embedded && SPACING.sectionJoinPaddingY)}
    >
      <div
        className={cn(
          !embedded && LAYOUT.pageShell,
          SPACING.stackGap,
          "flex flex-col",
        )}
      >
        <div
          className={cn(
            RESPONSIVE.caseStudyProseColumn,
            SPACING.stackGap,
            "flex flex-col text-left",
          )}
        >
          <h2 className={RESPONSIVE.sectionHeading}>
            {UKME_VOC_BEFORE_STATE.title}
          </h2>
          {UKME_VOC_BEFORE_STATE.introParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={RESPONSIVE.caseStudyProse}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className={RESPONSIVE.caseStudyScreenshotFrame}>
          {screenshotAvailable ? (
            <div className={RESPONSIVE.caseStudyScreenshotShell}>
              {/* eslint-disable-next-line @next/next/no-img-element -- native screenshot dimensions with srcset for retina */}
              <img
                src={UKME_VOC_BEFORE_STATE.assetPath}
                srcSet={`${UKME_VOC_BEFORE_STATE.assetPath} 1x, ${UKME_VOC_BEFORE_STATE.assetPathRetina} 2x`}
                alt={UKME_VOC_BEFORE_STATE.alt}
                width={UKME_VOC_BEFORE_STATE.assetWidth}
                height={UKME_VOC_BEFORE_STATE.assetHeight}
                decoding="async"
                className={RESPONSIVE.caseStudyScreenshotImage}
              />
            </div>
          ) : (
            <div className={RESPONSIVE.caseStudyScreenshotPlaceholder}>
              <ImageIcon
                aria-hidden="true"
                className="size-10 text-white/25 sm:size-12"
              />
              <p className={cn(RESPONSIVE.bodyText, "text-center text-foreground/70")}>
                {UKME_VOC_BEFORE_STATE.placeholderLabel}
              </p>
            </div>
          )}
        </div>

        <div className={RESPONSIVE.caseStudyAnnotationGrid}>
          {UKME_VOC_BEFORE_STATE.annotations.map((annotation) => (
            <div
              key={annotation.id}
              className={RESPONSIVE.caseStudyAnnotationCard}
            >
              <p className={RESPONSIVE.caseStudyProse}>
                {annotation.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
