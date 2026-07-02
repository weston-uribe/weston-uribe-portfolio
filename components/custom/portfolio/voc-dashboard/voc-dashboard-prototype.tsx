"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";

import { VocDashboardHeader } from "@/components/custom/portfolio/voc-dashboard/voc-dashboard-header";
import { VocEmptyState } from "@/components/custom/portfolio/voc-dashboard/voc-empty-state";
import { VocFeedbackTable } from "@/components/custom/portfolio/voc-dashboard/voc-feedback-table";
import { VocFilterChips } from "@/components/custom/portfolio/voc-dashboard/voc-filter-chips";
import { VocFilterDrawer } from "@/components/custom/portfolio/voc-dashboard/voc-filter-drawer";
import { VocMetricsRow } from "@/components/custom/portfolio/voc-dashboard/voc-metrics-row";
import { VocPersonaCards } from "@/components/custom/portfolio/voc-dashboard/voc-persona-cards";
import { VocSourceSidebar } from "@/components/custom/portfolio/voc-dashboard/voc-source-sidebar";
import { RESPONSIVE } from "@/lib/constants";
import {
  computeDashboardMetrics,
  createDefaultFilters,
  filterFeedback,
  rankTopPersonas,
} from "@/lib/portfolio/case-studies/ukme-voc-analytics";
import { UKME_VOC_FEEDBACK } from "@/lib/portfolio/case-studies/ukme-voc-feedback";
import {
  getFilterChips,
  hasActiveFilters,
  removeFilterChip,
} from "@/lib/portfolio/case-studies/ukme-voc-filter-utils";
import type {
  FeedbackSource,
  VocFilterState,
} from "@/lib/portfolio/case-studies/ukme-voc-types";

const TABLE_PAGE_SIZE = 5;

function subscribeToLgUp(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(min-width: 1024px)");
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getLgUpSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getLgUpServerSnapshot() {
  return false;
}

export function VocDashboardPrototype() {
  const [selectedSource, setSelectedSource] = useState<FeedbackSource>("In-app");
  const [appliedFilters, setAppliedFilters] = useState<VocFilterState>(
    createDefaultFilters(),
  );
  const [draftFilters, setDraftFilters] = useState<VocFilterState>(
    createDefaultFilters(),
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isLgUp = useSyncExternalStore(
    subscribeToLgUp,
    getLgUpSnapshot,
    getLgUpServerSnapshot,
  );
  const [sourcePanelPinned, setSourcePanelPinned] = useState<boolean | null>(
    null,
  );
  const sourcePanelOpen = sourcePanelPinned ?? isLgUp;
  const [tablePage, setTablePage] = useState(1);

  const filteredRecords = useMemo(
    () => filterFeedback(UKME_VOC_FEEDBACK, selectedSource, appliedFilters),
    [selectedSource, appliedFilters],
  );

  const draftFilteredRecords = useMemo(
    () => filterFeedback(UKME_VOC_FEEDBACK, selectedSource, draftFilters),
    [selectedSource, draftFilters],
  );

  const metrics = useMemo(
    () => computeDashboardMetrics(filteredRecords),
    [filteredRecords],
  );

  const topPersonas = useMemo(
    () => rankTopPersonas(filteredRecords, 3),
    [filteredRecords],
  );

  const appliedChips = useMemo(
    () => getFilterChips(appliedFilters),
    [appliedFilters],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRecords.length / TABLE_PAGE_SIZE),
  );
  const safeTablePage = Math.min(tablePage, totalPages);

  const paginatedRecords = useMemo(() => {
    const start = (safeTablePage - 1) * TABLE_PAGE_SIZE;
    return filteredRecords.slice(start, start + TABLE_PAGE_SIZE);
  }, [filteredRecords, safeTablePage]);

  const handleSelectSource = useCallback((source: FeedbackSource) => {
    setSelectedSource(source);
    setTablePage(1);
    const nextFilters = createDefaultFilters();
    setAppliedFilters(nextFilters);
    setDraftFilters(nextFilters);
  }, []);

  const handleOpenFilters = useCallback(() => {
    setDraftFilters({
      ...appliedFilters,
      arrTiers: [...appliedFilters.arrTiers],
      products: [...appliedFilters.products],
      themes: [...appliedFilters.themes],
      subThemes: [...appliedFilters.subThemes],
      platforms: [...appliedFilters.platforms],
    });
    setDrawerOpen(true);
  }, [appliedFilters]);

  const handleCloseFilters = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const handleApplyFilters = useCallback(() => {
    setAppliedFilters({
      ...draftFilters,
      arrTiers: [...draftFilters.arrTiers],
      products: [...draftFilters.products],
      themes: [...draftFilters.themes],
      subThemes: [...draftFilters.subThemes],
      platforms: [...draftFilters.platforms],
    });
    setTablePage(1);
    setDrawerOpen(false);
  }, [draftFilters]);

  const handleResetFilters = useCallback(() => {
    const nextFilters = createDefaultFilters();
    setAppliedFilters(nextFilters);
    setDraftFilters(nextFilters);
    setTablePage(1);
  }, []);

  const handleRemoveAppliedChip = useCallback((chipId: string) => {
    setAppliedFilters((current) => removeFilterChip(current, chipId));
    setDraftFilters((current) => removeFilterChip(current, chipId));
    setTablePage(1);
  }, []);

  const handleToggleSourcePanel = useCallback(() => {
    setSourcePanelPinned((current) => !(current ?? isLgUp));
  }, [isLgUp]);

  const isEmpty = filteredRecords.length === 0;

  return (
    <div className={RESPONSIVE.caseStudyPrototypeShell}>
      <VocSourceSidebar
        selectedSource={selectedSource}
        sourcePanelOpen={sourcePanelOpen}
        onTogglePanel={handleToggleSourcePanel}
        onSelectSource={handleSelectSource}
      />

      <div className={RESPONSIVE.caseStudyPrototypeContentColumn}>
        <div className={RESPONSIVE.caseStudyPrototypeHeader}>
          <VocDashboardHeader
            drawerOpen={drawerOpen}
            onOpenFilters={handleOpenFilters}
          />
        </div>

        <main className={RESPONSIVE.caseStudyPrototypeMain}>
          {hasActiveFilters(appliedFilters) ? (
            <VocFilterChips
              chips={appliedChips}
              onRemove={handleRemoveAppliedChip}
            />
          ) : null}

          {isEmpty ? (
            <VocEmptyState onResetFilters={handleResetFilters} />
          ) : (
            <>
              <VocMetricsRow metrics={metrics} />
              <VocPersonaCards source={selectedSource} personas={topPersonas} />
              <VocFeedbackTable
                records={paginatedRecords}
                totalCount={filteredRecords.length}
                page={safeTablePage}
                pageSize={TABLE_PAGE_SIZE}
                onPageChange={setTablePage}
              />
            </>
          )}
        </main>
      </div>

      <VocFilterDrawer
        open={drawerOpen}
        selectedSource={selectedSource}
        draftFilters={draftFilters}
        draftResultCount={draftFilteredRecords.length}
        onClose={handleCloseFilters}
        onDraftChange={setDraftFilters}
        onApply={handleApplyFilters}
        onReset={handleResetFilters}
      />
    </div>
  );
}
