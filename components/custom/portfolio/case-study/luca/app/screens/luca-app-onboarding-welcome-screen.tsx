import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_ONBOARDING } from "@/lib/portfolio/case-studies/luca-app";
import { cn } from "@/lib/utils";

import { LucaAppBottomNav, type LucaAppBottomNavItem } from "../luca-app-bottom-nav";
import { LucaAppOnboardingHeroArt } from "../luca-app-onboarding-hero-art";
import { LucaAppPrimaryAction } from "../luca-app-primary-action";
import { LucaAppTextClearZone } from "../luca-app-text-clear-zone";

export function LucaAppOnboardingWelcomeScreen({
  onStartAssessment,
  activeNavItem,
  onNavItemPress,
}: {
  onStartAssessment: () => void;
  activeNavItem?: LucaAppBottomNavItem;
  onNavItemPress: (item: LucaAppBottomNavItem) => void;
}) {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyLucaAppScreenShell,
        RESPONSIVE.caseStudyLucaAppPageInsetTop,
      )}
    >
      <div className={RESPONSIVE.caseStudyLucaAppScrollRegion}>
        <div className={RESPONSIVE.caseStudyLucaAppContentPaddingTight}>
          <LucaAppTextClearZone inline>
            <h1 className={RESPONSIVE.caseStudyLucaAppHeadline}>
              {LUCA_APP_ONBOARDING.mainHeadline}
            </h1>
          </LucaAppTextClearZone>
        </div>

        <LucaAppOnboardingHeroArt onStartAssessment={onStartAssessment} />

        <div className={RESPONSIVE.caseStudyLucaAppContentPadding}>
          <div className={RESPONSIVE.caseStudyLucaAppSections}>
            <div className={RESPONSIVE.caseStudyLucaAppSectionGap}>
              <LucaAppTextClearZone inline>
                <h2 className={RESPONSIVE.caseStudyLucaAppSectionTitle}>
                  {LUCA_APP_ONBOARDING.coachingExplainerLabel}
                </h2>
              </LucaAppTextClearZone>
              <LucaAppTextClearZone inline>
                <p className={RESPONSIVE.caseStudyLucaAppBody}>
                  {LUCA_APP_ONBOARDING.coachingExplainer}
                </p>
              </LucaAppTextClearZone>
            </div>

            <div className={RESPONSIVE.caseStudyLucaAppSectionGap}>
              <LucaAppTextClearZone inline>
                <h2 className={RESPONSIVE.caseStudyLucaAppSectionTitle}>
                  {LUCA_APP_ONBOARDING.howItWorksLabel}
                </h2>
              </LucaAppTextClearZone>
              <LucaAppTextClearZone inline>
                <p className={RESPONSIVE.caseStudyLucaAppBody}>
                  {LUCA_APP_ONBOARDING.howItWorksBody}
                </p>
              </LucaAppTextClearZone>
            </div>
          </div>

          <div
            className={RESPONSIVE.caseStudyLucaAppOpenArea}
            aria-hidden="true"
          />
        </div>

        <div className={RESPONSIVE.caseStudyLucaAppPrimaryActionWrap}>
          <LucaAppPrimaryAction onClick={onStartAssessment}>
            {LUCA_APP_ONBOARDING.primaryCta}
          </LucaAppPrimaryAction>
        </div>
      </div>

      <LucaAppBottomNav
        activeItem={activeNavItem}
        onItemPress={onNavItemPress}
      />
    </div>
  );
}
