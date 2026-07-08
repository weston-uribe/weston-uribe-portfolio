"use client";

import { useState } from "react";

import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_RESOURCES } from "@/lib/portfolio/case-studies/luca-app";
import type { LucaAppResource } from "@/lib/portfolio/case-studies/luca-app-resources";
import { cn } from "@/lib/utils";

import {
  LucaAppBottomNav,
  type LucaAppBottomNavItem,
} from "../luca-app-bottom-nav";
import { LucaAppPdfPreview } from "../luca-app-pdf-preview";
import { LucaAppResourcesCarousel } from "../luca-app-resources-carousel";
import { LucaAppTextClearZone } from "../luca-app-text-clear-zone";

type LucaAppResourcesScreenProps = {
  activeNavItem?: LucaAppBottomNavItem;
  onNavItemPress: (item: LucaAppBottomNavItem) => void;
};

export function LucaAppResourcesScreen({
  activeNavItem,
  onNavItemPress,
}: LucaAppResourcesScreenProps) {
  const [previewResource, setPreviewResource] = useState<LucaAppResource | null>(
    null,
  );

  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyLucaAppScreenShell,
        RESPONSIVE.caseStudyLucaAppPageInsetTop,
      )}
      aria-label="Resources"
    >
      <div className={cn(RESPONSIVE.caseStudyLucaAppScrollRegion, "relative")}>
        {previewResource ? (
          <LucaAppPdfPreview
            resource={previewResource}
            onClose={() => {
              setPreviewResource(null);
            }}
          />
        ) : (
          <>
            <div className={RESPONSIVE.caseStudyLucaAppDashboardHeader}>
              <LucaAppTextClearZone inline>
                <h1 className={RESPONSIVE.caseStudyLucaAppHeadline}>
                  {LUCA_APP_RESOURCES.title}
                </h1>
              </LucaAppTextClearZone>
            </div>

            <LucaAppResourcesCarousel
              onResourceSelect={(resource) => {
                setPreviewResource(resource);
              }}
            />
          </>
        )}
      </div>

      <LucaAppBottomNav
        activeItem={activeNavItem}
        onItemPress={onNavItemPress}
      />
    </div>
  );
}
