"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";

import { VocDateRangePicker } from "@/components/custom/portfolio/voc-dashboard/voc-date-range-picker";
import { VocFilterMultiSelectField } from "@/components/custom/portfolio/voc-dashboard/voc-filter-multi-select-field";
import { VocSectionFilterChips } from "@/components/custom/portfolio/voc-dashboard/voc-section-filter-chips";
import { Button } from "@/components/ui/button";
import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { getProductOptions } from "@/lib/portfolio/case-studies/ukme-voc-analytics";
import {
  ARR_TIERS,
  PLATFORMS,
  SUB_THEMES,
  THEMES,
} from "@/lib/portfolio/case-studies/ukme-voc-taxonomy";
import {
  getFilterChipsForCategory,
  removeFilterChip,
  toggleArrayFilterValue,
} from "@/lib/portfolio/case-studies/ukme-voc-filter-utils";
import type {
  FeedbackSource,
  VocFilterState,
} from "@/lib/portfolio/case-studies/ukme-voc-types";

type VocFilterDrawerProps = {
  open: boolean;
  selectedSource: FeedbackSource;
  draftFilters: VocFilterState;
  draftResultCount: number;
  onClose: () => void;
  onDraftChange: (filters: VocFilterState) => void;
  onApply: () => void;
  onReset: () => void;
};

export function VocFilterDrawer({
  open,
  selectedSource,
  draftFilters,
  draftResultCount,
  onClose,
  onDraftChange,
  onApply,
  onReset,
}: VocFilterDrawerProps) {
  const [openFieldId, setOpenFieldId] = useState<string | null>(null);
  const productOptions = getProductOptions(selectedSource);

  const handleRemoveDraftChip = (chipId: string) => {
    onDraftChange(removeFilterChip(draftFilters, chipId));
  };

  const applyLabel = useMemo(() => {
    const countLabel =
      draftResultCount === 1
        ? "1 feedback item"
        : `${draftResultCount} feedback items`;

    return `Show ${countLabel}`;
  }, [draftResultCount]);

  if (!open) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close filters panel"
        className={cn(
          RESPONSIVE.caseStudyPrototypeFilterBackdrop,
          RESPONSIVE.caseStudyPrototypeInteractive,
        )}
        onClick={onClose}
      />

      <aside
        id="voc-filter-drawer"
        aria-label="Filters"
        className={RESPONSIVE.caseStudyPrototypeFilterPanel}
      >
        <div className="flex items-start justify-between border-b border-border p-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-medium text-foreground">Filters</h3>
            <p className="text-sm text-muted-foreground">
              Narrow feedback for {selectedSource}.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className={RESPONSIVE.caseStudyPrototypeInteractive}
            aria-label="Close filters"
            onClick={onClose}
          >
            <X aria-hidden="true" />
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-medium text-foreground">Date</span>
            <VocDateRangePicker
              dateFrom={draftFilters.dateFrom}
              dateTo={draftFilters.dateTo}
              onChange={(dateFrom, dateTo) =>
                onDraftChange({ ...draftFilters, dateFrom, dateTo })
              }
            />
            <VocSectionFilterChips
              chips={getFilterChipsForCategory(draftFilters, "dateRange")}
              onRemove={handleRemoveDraftChip}
            />
          </div>

          <div className="flex flex-col gap-2">
            <VocFilterMultiSelectField
              fieldId="arrTiers"
              label="ARR"
              emptyLabel="All ARR"
              options={ARR_TIERS}
              selected={draftFilters.arrTiers}
              openFieldId={openFieldId}
              onOpenChange={setOpenFieldId}
              onToggle={(value) =>
                onDraftChange({
                  ...draftFilters,
                  arrTiers: toggleArrayFilterValue(draftFilters.arrTiers, value),
                })
              }
            />
            <VocSectionFilterChips
              chips={getFilterChipsForCategory(draftFilters, "arrTiers")}
              onRemove={handleRemoveDraftChip}
            />
          </div>

          <div className="flex flex-col gap-2">
            <VocFilterMultiSelectField
              fieldId="products"
              label="Product"
              emptyLabel="All products"
              options={productOptions}
              selected={draftFilters.products}
              openFieldId={openFieldId}
              onOpenChange={setOpenFieldId}
              onToggle={(value) =>
                onDraftChange({
                  ...draftFilters,
                  products: toggleArrayFilterValue(draftFilters.products, value),
                })
              }
            />
            <VocSectionFilterChips
              chips={getFilterChipsForCategory(draftFilters, "products")}
              onRemove={handleRemoveDraftChip}
            />
          </div>

          <div className="flex flex-col gap-2">
            <VocFilterMultiSelectField
              fieldId="themes"
              label="Theme"
              emptyLabel="All themes"
              options={THEMES}
              selected={draftFilters.themes}
              openFieldId={openFieldId}
              onOpenChange={setOpenFieldId}
              onToggle={(value) =>
                onDraftChange({
                  ...draftFilters,
                  themes: toggleArrayFilterValue(draftFilters.themes, value),
                })
              }
            />
            <VocSectionFilterChips
              chips={getFilterChipsForCategory(draftFilters, "themes")}
              onRemove={handleRemoveDraftChip}
            />
          </div>

          <div className="flex flex-col gap-2">
            <VocFilterMultiSelectField
              fieldId="subThemes"
              label="Sub-theme"
              emptyLabel="All sub-themes"
              options={SUB_THEMES}
              selected={draftFilters.subThemes}
              openFieldId={openFieldId}
              onOpenChange={setOpenFieldId}
              onToggle={(value) =>
                onDraftChange({
                  ...draftFilters,
                  subThemes: toggleArrayFilterValue(
                    draftFilters.subThemes,
                    value,
                  ),
                })
              }
            />
            <VocSectionFilterChips
              chips={getFilterChipsForCategory(draftFilters, "subThemes")}
              onRemove={handleRemoveDraftChip}
            />
          </div>

          <div className="flex flex-col gap-2">
            <VocFilterMultiSelectField
              fieldId="platforms"
              label="Platform"
              emptyLabel="All platforms"
              options={PLATFORMS}
              selected={draftFilters.platforms}
              openFieldId={openFieldId}
              onOpenChange={setOpenFieldId}
              onToggle={(value) =>
                onDraftChange({
                  ...draftFilters,
                  platforms: toggleArrayFilterValue(
                    draftFilters.platforms,
                    value,
                  ),
                })
              }
            />
            <VocSectionFilterChips
              chips={getFilterChipsForCategory(draftFilters, "platforms")}
              onRemove={handleRemoveDraftChip}
            />
          </div>

          <div className="flex flex-col gap-2 border-t border-border pt-4">
            <Button
              type="button"
              className={RESPONSIVE.caseStudyPrototypeInteractive}
              onClick={onApply}
            >
              {applyLabel}
            </Button>
            <Button
              type="button"
              variant="outline"
              className={RESPONSIVE.caseStudyPrototypeInteractive}
              onClick={onReset}
            >
              Reset filters
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
