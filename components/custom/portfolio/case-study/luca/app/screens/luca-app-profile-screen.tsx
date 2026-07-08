"use client";

import { useRef } from "react";

import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_PROFILE } from "@/lib/portfolio/case-studies/luca-app";
import { cn } from "@/lib/utils";

import { LucaAppBackButton } from "../luca-app-back-button";
import {
  LucaAppBottomNav,
  type LucaAppBottomNavItem,
} from "../luca-app-bottom-nav";
import { LucaAppProfileAvatarImage } from "../luca-app-profile-avatar-image";
import { useLucaAppSession } from "../luca-app-session-context";
import { LucaAppTextClearZone } from "../luca-app-text-clear-zone";

type LucaAppProfileScreenProps = {
  onBack: () => void;
  activeNavItem?: LucaAppBottomNavItem;
  onNavItemPress: (item: LucaAppBottomNavItem) => void;
};

export function LucaAppProfileScreen({
  onBack,
  activeNavItem,
  onNavItemPress,
}: LucaAppProfileScreenProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { profileAvatarSrc, updateProfileAvatar } = useLucaAppSession();

  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyLucaAppScreenShell,
        RESPONSIVE.caseStudyLucaAppPageInsetTop,
      )}
      aria-label="Profile"
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
          <LucaAppTextClearZone inline>
            <h1 className={RESPONSIVE.caseStudyLucaAppHeadline}>
              {LUCA_APP_PROFILE.title}
            </h1>
          </LucaAppTextClearZone>

          <div className={RESPONSIVE.caseStudyLucaAppProfileAvatarSection}>
            <LucaAppTextClearZone inline>
              <h2 className={RESPONSIVE.caseStudyLucaAppSectionTitle}>
                {LUCA_APP_PROFILE.avatarSectionTitle}
              </h2>
            </LucaAppTextClearZone>
            <div className="flex justify-center">
              <button
                type="button"
                aria-label="Update profile photo"
                className={cn(
                  RESPONSIVE.caseStudyLucaAppProfileAvatarButton,
                  RESPONSIVE.caseStudyPrototypeInteractive,
                )}
                onClick={() => {
                  fileInputRef.current?.click();
                }}
              >
                <span className={RESPONSIVE.caseStudyLucaAppProfileAvatarWrap}>
                  <LucaAppProfileAvatarImage
                    src={profileAvatarSrc}
                    width={80}
                    height={80}
                  />
                </span>
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  updateProfileAvatar(file);
                }

                event.target.value = "";
              }}
            />
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
