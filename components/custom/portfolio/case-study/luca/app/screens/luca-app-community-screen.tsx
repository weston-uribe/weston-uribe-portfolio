"use client";

import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_COMMUNITY } from "@/lib/portfolio/case-studies/luca-app";
import { cn } from "@/lib/utils";

import {
  LucaAppBottomNav,
  type LucaAppBottomNavItem,
} from "../luca-app-bottom-nav";
import { LucaAppCommunityCarousel } from "../luca-app-community-carousel";
import { LucaAppTextClearZone } from "../luca-app-text-clear-zone";

type LucaAppCommunityScreenProps = {
  activeNavItem?: LucaAppBottomNavItem;
  onNavItemPress: (item: LucaAppBottomNavItem) => void;
};

export function LucaAppCommunityScreen({
  activeNavItem,
  onNavItemPress,
}: LucaAppCommunityScreenProps) {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyLucaAppScreenShell,
        RESPONSIVE.caseStudyLucaAppPageInsetTop,
      )}
      aria-label="Community"
    >
      <div className={RESPONSIVE.caseStudyLucaAppScrollRegion}>
        <div className={RESPONSIVE.caseStudyLucaAppDashboardHeader}>
          <LucaAppTextClearZone inline>
            <h1 className={RESPONSIVE.caseStudyLucaAppHeadline}>
              {LUCA_APP_COMMUNITY.title}
            </h1>
          </LucaAppTextClearZone>
        </div>

        <LucaAppCommunityCarousel />
      </div>

      <LucaAppBottomNav
        activeItem={activeNavItem}
        onItemPress={onNavItemPress}
      />
    </div>
  );
}
