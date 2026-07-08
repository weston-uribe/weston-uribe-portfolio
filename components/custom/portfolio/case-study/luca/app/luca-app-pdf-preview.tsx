"use client";

import { X } from "lucide-react";

import { RESPONSIVE } from "@/lib/constants";
import type { LucaAppResource } from "@/lib/portfolio/case-studies/luca-app-resources";
import { cn } from "@/lib/utils";

type LucaAppPdfPreviewProps = {
  resource: LucaAppResource;
  onClose: () => void;
};

export function LucaAppPdfPreview({ resource, onClose }: LucaAppPdfPreviewProps) {
  return (
    <div
      className={RESPONSIVE.caseStudyLucaAppPdfPreviewOverlay}
      role="dialog"
      aria-modal="true"
      aria-label={`${resource.title} preview`}
    >
      <div className={RESPONSIVE.caseStudyLucaAppPdfPreviewHeader}>
        <h2 className={RESPONSIVE.caseStudyLucaAppPdfPreviewTitle}>
          {resource.title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close PDF preview and return to Resources"
          className={cn(
            RESPONSIVE.caseStudyLucaAppPdfPreviewCloseButton,
            RESPONSIVE.caseStudyPrototypeInteractive,
          )}
        >
          <X className="size-3.5" aria-hidden="true" />
          Close
        </button>
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
