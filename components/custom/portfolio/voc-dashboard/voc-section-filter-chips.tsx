"use client";

import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { RESPONSIVE } from "@/lib/constants";
import type { FilterChip } from "@/lib/portfolio/case-studies/ukme-voc-types";
import { cn } from "@/lib/utils";

type VocSectionFilterChipsProps = {
  chips: FilterChip[];
  onRemove: (chipId: string) => void;
  className?: string;
};

export function VocSectionFilterChips({
  chips,
  onRemove,
  className,
}: VocSectionFilterChipsProps) {
  if (chips.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {chips.map((chip) => (
        <Badge
          key={chip.id}
          variant="outline"
          className={cn(
            "h-6 gap-1 rounded-full px-2 py-0.5 text-xs",
            RESPONSIVE.caseStudyPrototypeFilterChipActive,
          )}
        >
          <span>{chip.label}</span>
          <button
            type="button"
            className={cn(
              "rounded-full p-0.5 hover:bg-chart-4/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
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
  );
}
