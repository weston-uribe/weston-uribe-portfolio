"use client";

import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { RESPONSIVE } from "@/lib/constants";
import type { FilterChip } from "@/lib/portfolio/case-studies/ukme-voc-types";
import { cn } from "@/lib/utils";

type VocFilterChipsProps = {
  chips: FilterChip[];
  onRemove: (chipId: string) => void;
  className?: string;
};

export function VocFilterChips({
  chips,
  onRemove,
  className,
}: VocFilterChipsProps) {
  if (chips.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p className="text-sm font-medium text-foreground">Filters active:</p>
      <div
        className="flex flex-wrap items-center gap-2"
        aria-label="Active filters"
      >
        {chips.map((chip) => (
          <Badge
            key={chip.id}
            variant="outline"
            className={cn(
              "h-7 gap-1 rounded-full px-2.5 py-1 text-xs",
              RESPONSIVE.caseStudyPrototypeFilterChipActive,
            )}
          >
            <span>{chip.label}</span>
            <button
              type="button"
              className={cn(
                "rounded-full p-0.5 hover:bg-portfolio-kg-teal/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                RESPONSIVE.caseStudyPrototypeInteractive,
              )}
              aria-label={`Remove filter ${chip.label}`}
              onClick={() => onRemove(chip.id)}
            >
              <X aria-hidden="true" className="size-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}
