import fs from "node:fs";
import path from "node:path";

import { ImageIcon } from "lucide-react";

import { RESPONSIVE } from "@/lib/constants";
import { UKME_VOC_BEFORE_STATE } from "@/lib/portfolio/case-studies/ukme-voc";
import { cn } from "@/lib/utils";

const screenshotAvailable = fs.existsSync(
  path.join(process.cwd(), "public/images", UKME_VOC_BEFORE_STATE.assetFilename),
);

type CaseStudyBeforeScreenshotProps = {
  shellClassName?: string;
};

export function CaseStudyBeforeScreenshot({
  shellClassName,
}: CaseStudyBeforeScreenshotProps) {
  return (
    <div className={RESPONSIVE.caseStudyScreenshotFrame}>
      {screenshotAvailable ? (
        <div
          className={cn(
            RESPONSIVE.caseStudyScreenshotShell,
            shellClassName,
          )}
        >
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
            className="size-10 text-muted-foreground/40 sm:size-12"
          />
          <p className={cn(RESPONSIVE.bodyText, "text-center text-foreground/70")}>
            {UKME_VOC_BEFORE_STATE.placeholderLabel}
          </p>
        </div>
      )}
    </div>
  );
}
