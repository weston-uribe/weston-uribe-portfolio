"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Camera, Mic } from "lucide-react";

import { LucaAppOnboardingWelcomeScreen } from "@/components/custom/portfolio/case-study/luca/app/screens/luca-app-onboarding-welcome-screen";
import { LucaAppMatchScreen } from "@/components/custom/portfolio/case-study/luca/app/screens/luca-app-match-screen";
import { LucaAppDashboardScreen } from "@/components/custom/portfolio/case-study/luca/app/screens/luca-app-dashboard-screen";
import { LucaAppResourcesScreen } from "@/components/custom/portfolio/case-study/luca/app/screens/luca-app-resources-screen";
import { LucaAppAssessmentScreen } from "@/components/custom/portfolio/case-study/luca/app/screens/luca-app-assessment-screen";
import { LucaAppWallpaper } from "@/components/custom/portfolio/case-study/luca/app/luca-app-wallpaper";
import { LucaArtAsset } from "@/components/custom/portfolio/case-study/luca/app/luca-art-asset";
import { LucaAppProfileScreen } from "@/components/custom/portfolio/case-study/luca/app/screens/luca-app-profile-screen";
import { LucaAppSessionProvider } from "@/components/custom/portfolio/case-study/luca/app/luca-app-session-context";
import type { LucaAppBottomNavItem } from "@/components/custom/portfolio/case-study/luca/app/luca-app-bottom-nav";
import { Button } from "@/components/ui/button";
import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LucaPhoneScreen = "home" | "launching" | "splash" | "app";
type LucaAppRoute =
  | "onboarding"
  | "assessment"
  | "dashboard"
  | "match"
  | "resources"
  | "profile";

type FlightGeometry = {
  targetSize: number;
  startX: number;
  startY: number;
  startScale: number;
};

const FLIGHT_DURATION = 0.6;
const SPLASH_HOLD_MS = 750;
const APP_REVEAL_DURATION = 0.3;

const SIGNAL_BAR_HEIGHTS = ["h-1", "h-1.5", "h-2", "h-2.5", "h-3"] as const;
const SIGNAL_BARS_FILLED = 4;

function formatPhoneTime(date: Date) {
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function usePhoneTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(formatPhoneTime(new Date()));
    updateTime();
    const intervalId = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(intervalId);
  }, []);

  return time;
}

function GoogleIcon() {
  return (
    <svg
      className="size-4 shrink-0 sm:size-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.38998L19.8553 3.13C17.6853 1.16002 15.0053 0 12.0003 0C7.3103 0 3.25527 2.69 1.28027 6.61L5.02027 9.47C6.01527 6.65 8.8103 4.75 12.0003 4.75Z"
        fill="#EA4335"
      />
      <path
        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.275 10H12V14.255H18.47C18.185 15.745 17.395 16.98 16.225 17.785L19.665 20.535C21.915 18.445 23.49 15.685 23.49 12.275Z"
        fill="#4285F4"
      />
      <path
        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.525 6.83504C0.775 8.37004 0.375 10.125 0.375 11.9999C0.375 13.8749 0.775 15.6299 1.525 17.1649L5.26498 14.2949Z"
        fill="#FBBC05"
      />
      <path
        d="M12.0003 24.0001C15.0453 24.0001 17.6053 22.935 19.6853 21.095L16.1953 18.095C15.1553 18.825 13.8753 19.245 12.0003 19.245C8.8103 19.245 6.01527 17.345 5.02027 14.525L1.28027 17.385C3.25527 21.305 7.3103 24.0001 12.0003 24.0001Z"
        fill="#34A853"
      />
    </svg>
  );
}

function PhoneSignalBars() {
  return (
    <span
      className={RESPONSIVE.caseStudyPhoneSignalBars}
      aria-hidden="true"
      title="Signal strength"
    >
      {SIGNAL_BAR_HEIGHTS.map((heightClass, index) => (
        <span
          key={heightClass}
          className={cn(
            RESPONSIVE.caseStudyPhoneSignalBar,
            heightClass,
            index < SIGNAL_BARS_FILLED ? "bg-current" : "bg-current/30",
          )}
        />
      ))}
    </span>
  );
}

function PhoneBatteryIndicator() {
  return (
    <span
      className={RESPONSIVE.caseStudyPhoneBatteryWrap}
      aria-hidden="true"
      title="Battery"
    >
      <span className={RESPONSIVE.caseStudyPhoneBattery}>
        <span className={RESPONSIVE.caseStudyPhoneBatteryFill} />
      </span>
      <span className={RESPONSIVE.caseStudyPhoneBatteryCap} />
    </span>
  );
}

function LucaAppIcon({ className }: { className?: string }) {
  return (
    <LucaArtAsset
      assetId="brand-app-icon-v01"
      sizes="128px"
      decorative
      className={cn("block aspect-square size-full object-contain", className)}
    />
  );
}

function LucaNotificationIcon() {
  return (
    <LucaArtAsset
      assetId="brand-notification-icon-v01"
      sizes="16px"
      decorative
      className={RESPONSIVE.caseStudyPhoneLucaNotification}
    />
  );
}

function PhoneStatusBar({
  variant = "dark",
  showNotification = true,
}: {
  variant?: "dark" | "light";
  showNotification?: boolean;
}) {
  const time = usePhoneTime();
  const light = variant === "light";

  return (
    <div
      className={
        light
          ? RESPONSIVE.caseStudyPhoneStatusBarLight
          : RESPONSIVE.caseStudyPhoneStatusBar
      }
    >
      <span className="flex items-center gap-2">
        <span suppressHydrationWarning>{time ?? "\u00a0"}</span>
        {showNotification ? <LucaNotificationIcon /> : null}
      </span>
      <span className="flex items-center gap-2">
        <PhoneSignalBars />
        <PhoneBatteryIndicator />
      </span>
    </div>
  );
}

function GoogleSearchPill() {
  return (
    <div
      className={RESPONSIVE.caseStudyPhoneGoogleSearch}
      aria-hidden="true"
      title="Google Search"
    >
      <GoogleIcon />
      <span className={RESPONSIVE.caseStudyPhoneGoogleSearchActions}>
        <Mic className="size-4 shrink-0 text-muted-foreground sm:size-5" />
        <Camera className="size-4 shrink-0 text-muted-foreground sm:size-5" />
      </span>
    </div>
  );
}

function PhoneNavBar({
  onNavigateHome,
  light,
  overlay,
}: {
  onNavigateHome?: () => void;
  light?: boolean;
  overlay?: boolean;
}) {
  const gesturePill = (
    <span
      className={cn(
        light
          ? RESPONSIVE.caseStudyLucaAppGesturePill
          : RESPONSIVE.caseStudyPhoneGesturePill,
      )}
    />
  );

  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyPhoneNavBar,
        overlay && RESPONSIVE.caseStudyPhoneNavBarOverlay,
      )}
    >
      {onNavigateHome ? (
        <button
          type="button"
          aria-label="Back to home screen"
          className={cn(
            "relative z-40 flex min-h-6 min-w-24 items-center justify-center",
            RESPONSIVE.caseStudyPrototypeInteractive,
          )}
          onClick={onNavigateHome}
        >
          {gesturePill}
        </button>
      ) : (
        <span aria-hidden="true">{gesturePill}</span>
      )}
    </div>
  );
}

export function CaseStudyLucaPhonePrototype({
  variant = "embedded",
}: {
  variant?: "embedded" | "overlay";
}) {
  const shouldReduceMotion = useReducedMotion();
  const [screen, setScreen] = useState<LucaPhoneScreen>("home");
  const [appRoute, setAppRoute] = useState<LucaAppRoute>("onboarding");
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);
  const [bottomNavActiveItem, setBottomNavActiveItem] = useState<
    LucaAppBottomNavItem | undefined
  >(undefined);
  const [launchKey, setLaunchKey] = useState(0);
  const [flight, setFlight] = useState<FlightGeometry | null>(null);

  const screenRef = useRef<HTMLDivElement>(null);
  const homeIconRef = useRef<HTMLSpanElement>(null);
  const splashTimerRef = useRef<number | null>(null);

  const isHome = screen === "home";
  const isLaunching = screen === "launching";
  const isSplash = screen === "splash";
  const isApp = screen === "app";
  const showFlyingLogo =
    !isHome && !isApp && (isLaunching || isSplash) && flight !== null;

  useEffect(() => {
    return () => {
      if (splashTimerRef.current !== null) {
        window.clearTimeout(splashTimerRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (!isSplash) {
      return;
    }

    splashTimerRef.current = window.setTimeout(() => {
      setFlight(null);
      setScreen("app");
    }, SPLASH_HOLD_MS);

    return () => {
      if (splashTimerRef.current !== null) {
        window.clearTimeout(splashTimerRef.current);
        splashTimerRef.current = null;
      }
    };
  }, [isSplash]);

  const handleOpenLuca = useCallback(() => {
    setAppRoute("onboarding");

    if (shouldReduceMotion) {
      setLaunchKey((key) => key + 1);
      setScreen("app");
      return;
    }

    const screenEl = screenRef.current;
    const iconEl = homeIconRef.current;
    if (!screenEl || !iconEl) {
      setLaunchKey((key) => key + 1);
      setScreen("app");
      return;
    }

    const screenRect = screenEl.getBoundingClientRect();
    const iconRect = iconEl.getBoundingClientRect();
    const iconSize = iconRect.width;
    const targetSize = screenRect.width * 0.42;

    const iconCenterX = iconRect.left + iconRect.width / 2;
    const iconCenterY = iconRect.top + iconRect.height / 2;
    const screenCenterX = screenRect.left + screenRect.width / 2;
    const screenCenterY = screenRect.top + screenRect.height / 2;

    setLaunchKey((key) => key + 1);
    setFlight({
      targetSize,
      startX: iconCenterX - screenCenterX,
      startY: iconCenterY - screenCenterY,
      startScale: iconSize / targetSize,
    });
    setScreen("launching");
  }, [shouldReduceMotion]);

  const handleNavigateHome = useCallback(() => {
    if (splashTimerRef.current !== null) {
      window.clearTimeout(splashTimerRef.current);
      splashTimerRef.current = null;
    }
    setFlight(null);
    setAppRoute("onboarding");
    setScreen("home");
  }, []);

  const handleStartAssessment = useCallback(() => {
    setAppRoute("assessment");
  }, []);

  const handleBackToOnboarding = useCallback(() => {
    setAppRoute("onboarding");
  }, []);

  const handleCompleteAssessment = useCallback(() => {
    setAssessmentCompleted(true);
    setAppRoute("dashboard");
    setBottomNavActiveItem("dashboard");
  }, []);

  const handleNavItemPress = useCallback((item: LucaAppBottomNavItem) => {
    setBottomNavActiveItem(item);

    if (item === "dashboard") {
      setAppRoute("dashboard");
    } else if (item === "resources") {
      setAppRoute("resources");
    } else if (item === "profile") {
      setAppRoute("profile");
    }
  }, []);

  const handleBackFromProfile = useCallback(() => {
    setAppRoute("dashboard");
    setBottomNavActiveItem("dashboard");
  }, []);

  const handleBackToDashboard = useCallback(() => {
    setAppRoute("dashboard");
  }, []);

  const handleFlightComplete = useCallback(() => {
    setScreen((current) => (current === "launching" ? "splash" : current));
  }, []);

  const frameClass =
    variant === "overlay"
      ? RESPONSIVE.caseStudyPhoneFrameOverlay
      : RESPONSIVE.caseStudyPhoneFrame;

  return (
    <div className={frameClass}>
      <span
        aria-hidden="true"
        className={RESPONSIVE.caseStudyPhonePowerButton}
        title="Power button"
      />
      <span
        aria-hidden="true"
        className={RESPONSIVE.caseStudyPhoneVolumeButton}
        title="Volume button"
      />

      <div ref={screenRef} className={RESPONSIVE.caseStudyPhoneScreen}>
        {!isApp ? (
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0",
              isHome ? RESPONSIVE.caseStudyPhoneHomeWallpaperBg : "bg-card",
            )}
          />
        ) : null}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-3 left-1/2 z-30 size-2 -translate-x-1/2 rounded-full bg-zinc-800 ring-1 ring-white/10"
        />

        {isApp ? (
          <LucaAppSessionProvider>
            <LucaAppWallpaper className="relative z-10">
              <PhoneStatusBar variant="light" showNotification={false} />

              <motion.div
                key={`app-${launchKey}-${appRoute}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: APP_REVEAL_DURATION, ease: "easeOut" }}
                className={RESPONSIVE.caseStudyPhoneAppContent}
              >
                {appRoute === "onboarding" ? (
                  <LucaAppOnboardingWelcomeScreen
                    onStartAssessment={handleStartAssessment}
                    activeNavItem={bottomNavActiveItem}
                    onNavItemPress={handleNavItemPress}
                  />
                ) : appRoute === "assessment" ? (
                  <LucaAppAssessmentScreen
                    onBack={handleBackToOnboarding}
                    onSubmit={handleCompleteAssessment}
                    activeNavItem={bottomNavActiveItem}
                    onNavItemPress={handleNavItemPress}
                  />
                ) : appRoute === "match" ? (
                  <LucaAppMatchScreen onBack={handleBackToDashboard} />
                ) : appRoute === "resources" ? (
                  <LucaAppResourcesScreen
                    activeNavItem={bottomNavActiveItem}
                    onNavItemPress={handleNavItemPress}
                  />
                ) : appRoute === "profile" ? (
                  <LucaAppProfileScreen
                    onBack={handleBackFromProfile}
                    activeNavItem={bottomNavActiveItem}
                    onNavItemPress={handleNavItemPress}
                  />
                ) : (
                  <LucaAppDashboardScreen
                    assessmentCompleted={assessmentCompleted}
                    onStartAssessment={handleStartAssessment}
                    activeNavItem={bottomNavActiveItem}
                    onNavItemPress={handleNavItemPress}
                  />
                )}
              </motion.div>

              <PhoneNavBar light overlay onNavigateHome={handleNavigateHome} />
            </LucaAppWallpaper>
          </LucaAppSessionProvider>
        ) : (
          <>
            <PhoneStatusBar variant="dark" showNotification />

            <div className="relative z-10 flex min-h-0 flex-1 flex-col">
              {isHome ? (
                <div className={RESPONSIVE.caseStudyPhoneHomeContent}>
                  <div className={RESPONSIVE.caseStudyPhoneHomeIconArea}>
                    <Button
                      type="button"
                      variant="ghost"
                      aria-label="Open Luca app"
                      className={cn(
                        RESPONSIVE.caseStudyPhoneLucaIconButton,
                        RESPONSIVE.caseStudyPrototypeInteractive,
                      )}
                      onClick={handleOpenLuca}
                    >
                      <span
                        ref={homeIconRef}
                        aria-hidden="true"
                        className={RESPONSIVE.caseStudyPhoneLucaIcon}
                      >
                        <LucaAppIcon />
                      </span>
                      <span className="text-xs font-medium text-foreground/90">
                        Luca
                      </span>
                    </Button>
                  </div>
                  <div className={RESPONSIVE.caseStudyPhoneDock}>
                    <GoogleSearchPill />
                  </div>
                </div>
              ) : null}

              {showFlyingLogo && flight ? (
                <div className={RESPONSIVE.caseStudyPhoneFlyingLogo}>
                  <motion.div
                    key={`flight-${launchKey}`}
                    aria-hidden="true"
                    className="aspect-square"
                    style={{ width: flight.targetSize, height: flight.targetSize }}
                    initial={{
                      x: flight.startX,
                      y: flight.startY,
                      scale: flight.startScale,
                    }}
                    animate={{ x: 0, y: 0, scale: 1 }}
                    transition={{
                      duration: FLIGHT_DURATION,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onAnimationComplete={handleFlightComplete}
                  >
                    <LucaAppIcon />
                  </motion.div>
                </div>
              ) : null}
            </div>

            <PhoneNavBar />
          </>
        )}
      </div>
    </div>
  );
}
