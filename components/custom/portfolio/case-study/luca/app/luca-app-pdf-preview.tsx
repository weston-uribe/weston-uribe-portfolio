"use client";

import { RESPONSIVE } from "@/lib/constants";
import type { LucaAppResource } from "@/lib/portfolio/case-studies/luca-app-resources";

import { LucaAppBackButton } from "./luca-app-back-button";
import { LucaAppTextClearZone } from "./luca-app-text-clear-zone";

type LucaAppPdfPreviewProps = {
  resource: LucaAppResource;
  onClose: () => void;
};

export function LucaAppPdfPreview({ resource, onClose }: LucaAppPdfPreviewProps) {
  return (
    <div
      className={RESPONSIVE.caseStudyLucaAppPdfPreviewPage}
      aria-label={`${resource.title} preview`}
    >
      <div className={RESPONSIVE.caseStudyLucaAppContentPaddingTight}>
        <div className={RESPONSIVE.caseStudyLucaAppBackButtonAlign}>
          <LucaAppTextClearZone inline>
            <LucaAppBackButton onClick={onClose} />
          </LucaAppTextClearZone>
        </div>
      </div>

      <div className={RESPONSIVE.caseStudyLucaAppPdfPreviewHeader}>
        <h2 className={RESPONSIVE.caseStudyLucaAppPdfPreviewTitle}>
          {resource.title}
        </h2>
      </div>

      <div className={RESPONSIVE.caseStudyLucaAppPdfPreviewFrame}>
        <iframe
          title={`${resource.title} PDF preview`}
          src={resource.pdfSrc}
          className={RESPONSIVE.caseStudyLucaAppPdfPreviewDocument}
        />
      </div>
    </div>
  );
}
