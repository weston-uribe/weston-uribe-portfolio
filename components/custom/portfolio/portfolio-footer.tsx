import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { FOOTER_TEXT } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

export function PortfolioFooter() {
  return (
    <footer
      className={cn(
        "border-t border-border/60 pt-6 pb-8 sm:pt-8 sm:pb-10",
        SPACING.footerContactPullUp,
      )}
    >
      <div className={LAYOUT.pageShell}>
        <p className={cn("text-muted-foreground", RESPONSIVE.bodyText)}>{FOOTER_TEXT}</p>
      </div>
    </footer>
  );
}
