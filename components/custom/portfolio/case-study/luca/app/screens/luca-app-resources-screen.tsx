import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_RESOURCES } from "@/lib/portfolio/case-studies/luca-app";
import { cn } from "@/lib/utils";

import {
  LucaAppBottomNav,
  type LucaAppBottomNavItem,
} from "../luca-app-bottom-nav";
import { LucaAppTextClearZone } from "../luca-app-text-clear-zone";

type LucaAppResourcesScreenProps = {
  activeNavItem?: LucaAppBottomNavItem;
  onNavItemPress: (item: LucaAppBottomNavItem) => void;
};

export function LucaAppResourcesScreen({
  activeNavItem,
  onNavItemPress,
}: LucaAppResourcesScreenProps) {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyLucaAppScreenShell,
        RESPONSIVE.caseStudyLucaAppPageInsetTop,
      )}
      aria-label="Resources"
    >
      <div className={RESPONSIVE.caseStudyLucaAppScrollRegion}>
        <div className={RESPONSIVE.caseStudyLucaAppDashboardHeader}>
          <LucaAppTextClearZone inline>
            <h1 className={RESPONSIVE.caseStudyLucaAppHeadline}>
              {LUCA_APP_RESOURCES.title}
            </h1>
          </LucaAppTextClearZone>
        </div>
      </div>

      <LucaAppBottomNav
        activeItem={activeNavItem}
        onItemPress={onNavItemPress}
      />
    </div>
  );
}
