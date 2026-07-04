import {
  BookOpenIcon as BookOpenOutlineIcon,
  ChatBubbleOvalLeftIcon as ChatBubbleOvalLeftOutlineIcon,
  Squares2X2Icon as Squares2X2OutlineIcon,
  UserGroupIcon as UserGroupOutlineIcon,
} from "@heroicons/react/24/outline";
import {
  BookOpenIcon as BookOpenSolidIcon,
  ChatBubbleOvalLeftIcon as ChatBubbleOvalLeftSolidIcon,
  Squares2X2Icon as Squares2X2SolidIcon,
  UserGroupIcon as UserGroupSolidIcon,
} from "@heroicons/react/24/solid";

import type { LucaAppBottomNavItem } from "./luca-app-bottom-nav";

type NavIconItem = Exclude<LucaAppBottomNavItem, "profile">;

type LucaAppBottomNavIconProps = {
  item: NavIconItem;
  variant: "line" | "solid";
  className?: string;
};

const OUTLINE_ICONS = {
  dashboard: Squares2X2OutlineIcon,
  coaching: ChatBubbleOvalLeftOutlineIcon,
  resources: BookOpenOutlineIcon,
  community: UserGroupOutlineIcon,
} as const;

const SOLID_ICONS = {
  dashboard: Squares2X2SolidIcon,
  coaching: ChatBubbleOvalLeftSolidIcon,
  resources: BookOpenSolidIcon,
  community: UserGroupSolidIcon,
} as const;

export function LucaAppBottomNavIcon({
  item,
  variant,
  className,
}: LucaAppBottomNavIconProps) {
  const Icon = variant === "line" ? OUTLINE_ICONS[item] : SOLID_ICONS[item];

  return <Icon className={className} aria-hidden="true" />;
}
