"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Ensures route changes without a hash fragment start at the top of the page.
 * Hash links (/#about, /#work, /#contact) are left to native browser scroll behavior.
 */
export function PortfolioScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
