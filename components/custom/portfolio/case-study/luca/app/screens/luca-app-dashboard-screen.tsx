import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_DASHBOARD } from "@/lib/portfolio/case-studies/luca-app";
import { LUCA_WELLNESS_MOCK_SCORES } from "@/lib/portfolio/case-studies/luca-wellness-radar";
import { cn } from "@/lib/utils";

import {
  LucaAppBottomNav,
  type LucaAppBottomNavItem,
} from "../luca-app-bottom-nav";
import { LucaAppPrimaryAction } from "../luca-app-primary-action";
import { LucaAppTextClearZone } from "../luca-app-text-clear-zone";
import { LucaAppWellnessRadarChart } from "../luca-app-wellness-radar-chart";

type LucaAppDashboardScreenProps = {
  assessmentCompleted: boolean;
  onStartAssessment: () => void;
  activeNavItem?: LucaAppBottomNavItem;
  onNavItemPress: (item: LucaAppBottomNavItem) => void;
};

export function LucaAppDashboardScreen({
  assessmentCompleted,
  onStartAssessment,
  activeNavItem,
  onNavItemPress,
}: LucaAppDashboardScreenProps) {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyLucaAppScreenShell,
        RESPONSIVE.caseStudyLucaAppPageInsetTop,
      )}
      aria-label="Student dashboard"
    >
      <div className={RESPONSIVE.caseStudyLucaAppScrollRegion}>
        <div className={RESPONSIVE.caseStudyLucaAppDashboardHeader}>
          <LucaAppTextClearZone inline>
            <h1 className={RESPONSIVE.caseStudyLucaAppHeadline}>
              {LUCA_APP_DASHBOARD.title}
            </h1>
          </LucaAppTextClearZone>
          <LucaAppTextClearZone inline>
            <p className={RESPONSIVE.caseStudyLucaAppBody}>
              {LUCA_APP_DASHBOARD.coachCtaSupport}
            </p>
          </LucaAppTextClearZone>
        </div>

        <div className={RESPONSIVE.caseStudyLucaAppDashboardActions}>
          <LucaAppPrimaryAction
            interactive={!assessmentCompleted}
            onClick={onStartAssessment}
          >
            {assessmentCompleted
              ? LUCA_APP_DASHBOARD.coachCtaPostAssessment
              : LUCA_APP_DASHBOARD.coachCtaPreAssessment}
          </LucaAppPrimaryAction>

          {assessmentCompleted ? (
            <div className={RESPONSIVE.caseStudyLucaAppSectionGap}>
              <LucaAppTextClearZone inline>
                <h2 className={RESPONSIVE.caseStudyLucaAppSectionTitle}>
                  {LUCA_APP_DASHBOARD.progressTitle}
                </h2>
              </LucaAppTextClearZone>
              <div className={RESPONSIVE.caseStudyLucaAppWellnessRadarSection}>
                <LucaAppWellnessRadarChart scores={LUCA_WELLNESS_MOCK_SCORES} />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <LucaAppBottomNav
        activeItem={activeNavItem}
        onItemPress={onNavItemPress}
      />
    </div>
  );
}
