import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";
import { LAYOUT, SPACING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function HelloWorldPage() {
  return (
    <>
      <PortfolioNav />
      <main
        className={cn(
          LAYOUT.pageShell,
          SPACING.pageAnchorScrollBuffer,
          "py-16"
        )}
      >
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Hello World
        </h1>
        <p className="mt-4 text-muted-foreground">
          Temporary page for WES-12 integration testing.
        </p>
      </main>
      <PortfolioFooter />
    </>
  );
}
