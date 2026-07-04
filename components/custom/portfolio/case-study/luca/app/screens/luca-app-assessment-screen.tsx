"use client";

import { useCallback, useState } from "react";

import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_ASSESSMENT } from "@/lib/portfolio/case-studies/luca-app";
import { cn } from "@/lib/utils";

import { LucaAppAssessmentQuestion } from "../luca-app-assessment-question";
import { LucaAppBackButton } from "../luca-app-back-button";
import { LucaAppBottomNav, type LucaAppBottomNavItem } from "../luca-app-bottom-nav";
import { LucaAppPrimaryAction } from "../luca-app-primary-action";
import { LucaAppTextClearZone } from "../luca-app-text-clear-zone";

type LucaAppAssessmentScreenProps = {
  onBack: () => void;
  onSubmit: () => void;
  activeNavItem?: LucaAppBottomNavItem;
  onNavItemPress: (item: LucaAppBottomNavItem) => void;
};

export function LucaAppAssessmentScreen({
  onBack,
  onSubmit,
  activeNavItem,
  onNavItemPress,
}: LucaAppAssessmentScreenProps) {
  const [physicalValue, setPhysicalValue] = useState<number | null>(null);
  const [physicalAnswered, setPhysicalAnswered] = useState(false);
  const [socialValue, setSocialValue] = useState<number | null>(null);
  const [socialAnswered, setSocialAnswered] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handlePhysicalChange = useCallback((value: number) => {
    setPhysicalValue(value);
    setPhysicalAnswered(true);
  }, []);

  const handleSocialChange = useCallback((value: number) => {
    setSocialValue(value);
    setSocialAnswered(true);
  }, []);

  const handleSubmit = useCallback(() => {
    if (physicalAnswered && socialAnswered) {
      onSubmit();
      return;
    }

    setShowValidation(true);
  }, [onSubmit, physicalAnswered, socialAnswered]);

  const showPhysicalError = showValidation && !physicalAnswered;
  const showSocialError = showValidation && !socialAnswered;

  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyLucaAppScreenShell,
        RESPONSIVE.caseStudyLucaAppPageInsetTop,
      )}
      aria-label="Wellness assessment"
    >
      <div className={RESPONSIVE.caseStudyLucaAppScrollRegion}>
        <div className={RESPONSIVE.caseStudyLucaAppContentPaddingTight}>
          <div className={RESPONSIVE.caseStudyLucaAppBackButtonAlign}>
            <LucaAppTextClearZone inline>
              <LucaAppBackButton onClick={onBack} />
            </LucaAppTextClearZone>
          </div>
        </div>

        <div className={RESPONSIVE.caseStudyLucaAppContentPadding}>
          <div className={RESPONSIVE.caseStudyLucaAppSectionGap}>
            <LucaAppTextClearZone inline>
              <h1 className={RESPONSIVE.caseStudyLucaAppHeadline}>
                {LUCA_APP_ASSESSMENT.title}
              </h1>
            </LucaAppTextClearZone>
            <LucaAppTextClearZone inline>
              <p className={RESPONSIVE.caseStudyLucaAppBody}>
                {LUCA_APP_ASSESSMENT.intro}
              </p>
            </LucaAppTextClearZone>
          </div>

          <div className={RESPONSIVE.caseStudyLucaAppSections}>
            <LucaAppAssessmentQuestion
              question={LUCA_APP_ASSESSMENT.physicalQuestion}
              value={physicalValue}
              showError={showPhysicalError}
              onChange={handlePhysicalChange}
            />
            <LucaAppAssessmentQuestion
              question={LUCA_APP_ASSESSMENT.socialQuestion}
              value={socialValue}
              showError={showSocialError}
              onChange={handleSocialChange}
            />
          </div>
        </div>

        <div className={RESPONSIVE.caseStudyLucaAppFooterActionsWithNav}>
          <LucaAppPrimaryAction onClick={handleSubmit}>
            {LUCA_APP_ASSESSMENT.submitCta}
          </LucaAppPrimaryAction>
          <div className={RESPONSIVE.caseStudyLucaAppBackButtonFooterWrap}>
            <LucaAppBackButton onClick={onBack} variant="footer" />
          </div>
        </div>
      </div>

      <LucaAppBottomNav
        activeItem={activeNavItem}
        onItemPress={onNavItemPress}
      />
    </div>
  );
}
