import Image from "next/image";
import Link from "next/link";

import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { HERO, WESTON_PROFILE } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
] as const;

export function PortfolioNav() {
  return (
    <header className="sticky top-0 z-50 min-h-[var(--portfolio-nav-height)] border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div
        className={cn(
          LAYOUT.pageShell,
          SPACING.navBar,
          "flex h-full min-h-[var(--portfolio-nav-height)] items-center justify-between gap-4"
        )}
      >
        <div className={cn(SPACING.elementGap, "flex items-center")}>
          <Link
            href="/"
            className={cn(
              RESPONSIVE.uiText,
              SPACING.elementGap,
              "flex items-center font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
            )}
          >
            <Image
              src={WESTON_PROFILE.assetPath}
              alt=""
              width={36}
              height={36}
              className={cn(RESPONSIVE.navAvatar, RESPONSIVE.profileAvatarImage)}
            />
            {HERO.name}
          </Link>
          <span
            className={cn(
              RESPONSIVE.uiText,
              "font-semibold tracking-tight text-foreground"
            )}
          >
            Hi — Test 1
          </span>
        </div>
        <nav aria-label="Primary">
          <ul className="flex items-center justify-end gap-6 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    RESPONSIVE.uiText,
                    "text-muted-foreground transition-colors hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
