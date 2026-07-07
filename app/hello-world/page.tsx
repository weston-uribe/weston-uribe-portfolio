import { PortfolioFooter } from "@/components/custom/portfolio/portfolio-footer";
import { PortfolioNav } from "@/components/custom/portfolio/portfolio-nav";
import { LAYOUT, SPACING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function HelloWorldPage() {
  return (
    <>
      <PortfolioNav />
      <main className={cn(SPACING.pageAnchorScrollBuffer, LAYOUT.pageCenter)}>
        <div className={cn(LAYOUT.container, LAYOUT.stack, "py-16")}>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Hello World
          </h1>
          <p className="mt-4 text-muted-foreground">
            Temporary page for WES-13 integration testing.
          </p>
        </div>
      </main>
      <PortfolioFooter />
    </>
  );
}
