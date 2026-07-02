import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type VocDashboardHeaderProps = {
  drawerOpen: boolean;
  onOpenFilters: () => void;
};

export function VocDashboardHeader({
  drawerOpen,
  onOpenFilters,
}: VocDashboardHeaderProps) {
  return (
    <header className={RESPONSIVE.caseStudyPrototypeDashboardHeader}>
      <h3 className="min-w-0 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        Voice of Customer Dashboard
      </h3>

      <Button
        type="button"
        variant="outline"
        className={cn(
          "w-fit self-end sm:self-auto",
          RESPONSIVE.caseStudyPrototypeInteractive,
        )}
        aria-expanded={drawerOpen}
        aria-controls="voc-filter-drawer"
        onClick={onOpenFilters}
      >
        <SlidersHorizontal aria-hidden="true" />
        Filters
      </Button>
    </header>
  );
}
