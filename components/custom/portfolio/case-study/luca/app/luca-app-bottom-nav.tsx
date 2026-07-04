"use client";

import Image from "next/image";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { useCallback } from "react";

import { RESPONSIVE } from "@/lib/constants";
import { WESTON_PROFILE } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

import { LucaAppBottomNavIcon } from "./luca-app-bottom-nav-icons";

export type LucaAppBottomNavItem =
  | "dashboard"
  | "coaching"
  | "resources"
  | "community"
  | "profile";

type NavItemConfig =
  | {
      id: Exclude<LucaAppBottomNavItem, "profile">;
      label: string;
    }
  | {
      id: "profile";
      label: "Profile";
    };

const NAV_ITEMS: readonly NavItemConfig[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "coaching", label: "Coaching" },
  { id: "resources", label: "Resources" },
  { id: "community", label: "Community" },
  { id: "profile", label: "Profile" },
] as const;

const PRESS_SCALE = 0.88;
const PRESS_DOWN_MS = 0.08;
const PRESS_UP_MS = 0.12;

type LucaAppBottomNavProps = {
  activeItem?: LucaAppBottomNavItem;
  onItemPress?: (item: LucaAppBottomNavItem) => void;
};

type LucaAppBottomNavItemButtonProps = {
  item: NavItemConfig;
  isActive: boolean;
  onItemPress?: (item: LucaAppBottomNavItem) => void;
};

function LucaAppBottomNavItemButton({
  item,
  isActive,
  onItemPress,
}: LucaAppBottomNavItemButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();

  const handleClick = useCallback(async () => {
    if (!onItemPress) {
      return;
    }

    if (shouldReduceMotion) {
      onItemPress(item.id);
      return;
    }

    await controls.start({
      scale: PRESS_SCALE,
      transition: { duration: PRESS_DOWN_MS, ease: "easeOut" },
    });
    onItemPress(item.id);
    await controls.start({
      scale: 1,
      transition: { duration: PRESS_UP_MS, ease: "easeOut" },
    });
  }, [controls, item.id, onItemPress, shouldReduceMotion]);

  const itemClassName = cn(
    RESPONSIVE.caseStudyLucaAppBottomNavItem,
    "w-full border-0 bg-transparent",
    isActive
      ? RESPONSIVE.caseStudyLucaAppBottomNavItemActive
      : RESPONSIVE.caseStudyLucaAppBottomNavItemInactive,
  );

  return (
    <li>
      <button
        type="button"
        aria-current={isActive ? "page" : undefined}
        aria-label={item.label}
        onClick={handleClick}
        className={itemClassName}
      >
        <motion.span
          animate={controls}
          initial={{ scale: 1 }}
          className="flex flex-col items-center justify-center gap-0.5"
        >
          {item.id === "profile" ? (
            <span
              className={cn(
                RESPONSIVE.caseStudyLucaAppBottomNavAvatarWrap,
                isActive && RESPONSIVE.caseStudyLucaAppBottomNavAvatarActive,
              )}
            >
              <Image
                src={WESTON_PROFILE.assetPath}
                alt=""
                width={18}
                height={18}
                className={cn(
                  RESPONSIVE.caseStudyLucaAppBottomNavAvatarImage,
                  RESPONSIVE.profileAvatarImage,
                )}
              />
            </span>
          ) : (
            <LucaAppBottomNavIcon
              item={item.id}
              variant={isActive ? "solid" : "line"}
              className={RESPONSIVE.caseStudyLucaAppBottomNavIcon}
            />
          )}
          <span className={RESPONSIVE.caseStudyLucaAppBottomNavLabel}>
            {item.label}
          </span>
        </motion.span>
      </button>
    </li>
  );
}

export function LucaAppBottomNav({
  activeItem,
  onItemPress,
}: LucaAppBottomNavProps) {
  return (
    <nav
      aria-label="App navigation"
      className={cn(
        RESPONSIVE.caseStudyLucaAppBottomNav,
        RESPONSIVE.caseStudyLucaAppBottomNavSafeInset,
      )}
    >
      <ul className={RESPONSIVE.caseStudyLucaAppBottomNavList}>
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem !== undefined && item.id === activeItem;

          return (
            <LucaAppBottomNavItemButton
              key={item.id}
              item={item}
              isActive={isActive}
              onItemPress={onItemPress}
            />
          );
        })}
      </ul>
    </nav>
  );
}
