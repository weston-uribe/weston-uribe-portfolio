import { Button } from "@/components/ui/button";
import { RESPONSIVE } from "@/lib/constants";

type VocEmptyStateProps = {
  onResetFilters: () => void;
};

export function VocEmptyState({ onResetFilters }: VocEmptyStateProps) {
  return (
    <div className={RESPONSIVE.caseStudyPrototypeEmptyState}>
      <p className="text-base font-medium text-foreground">
        No feedback matches these filters.
      </p>
      <p className="max-w-md text-sm text-muted-foreground">
        Try widening the date range or clearing product and theme filters to see
        more records from this source.
      </p>
      <Button
        type="button"
        variant="outline"
        className={RESPONSIVE.caseStudyPrototypeInteractive}
        onClick={onResetFilters}
      >
        Reset filters
      </Button>
    </div>
  );
}
