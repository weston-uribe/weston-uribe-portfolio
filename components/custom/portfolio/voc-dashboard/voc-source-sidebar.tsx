"use client";

import { useState } from "react";
import {
  Headphones,
  MessagesSquare,
  MousePointerClick,
  PanelLeftClose,
  PanelLeftOpen,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FEEDBACK_SOURCES } from "@/lib/portfolio/case-studies/ukme-voc-taxonomy";
import type { FeedbackSource } from "@/lib/portfolio/case-studies/ukme-voc-types";
import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SOURCE_ICONS: Record<FeedbackSource, LucideIcon> = {
  "In-app": MousePointerClick,
  Community: MessagesSquare,
  Support: Headphones,
};

type VocSourceSidebarProps = {
  id?: string;
  selectedSource: FeedbackSource;
  sourcePanelOpen: boolean;
  onTogglePanel: () => void;
  onSelectSource: (source: FeedbackSource) => void;
};

export function VocSourceSidebar({
  id = "voc-source-sidebar",
  selectedSource,
  sourcePanelOpen,
  onTogglePanel,
  onSelectSource,
}: VocSourceSidebarProps) {
  const [hoverExpanded, setHoverExpanded] = useState(false);
  const isPinned = sourcePanelOpen;
  const isVisuallyExpanded = isPinned || hoverExpanded;

  const handleMouseEnter = () => {
    if (!isPinned) {
      setHoverExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      setHoverExpanded(false);
    }
  };

  return (
    <aside
      id={id}
      data-expanded={isVisuallyExpanded ? "true" : "false"}
      data-pinned={isPinned ? "true" : "false"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        RESPONSIVE.caseStudyPrototypeSidebar,
        isVisuallyExpanded
          ? RESPONSIVE.caseStudyPrototypeSidebarExpandedWidth
          : RESPONSIVE.caseStudyPrototypeSidebarCollapsedWidth,
      )}
    >
      <div
        className={cn(
          RESPONSIVE.caseStudyPrototypeSidebarBrand,
          isVisuallyExpanded
            ? RESPONSIVE.caseStudyPrototypeSidebarBrandExpanded
            : RESPONSIVE.caseStudyPrototypeSidebarBrandCollapsed,
        )}
      >
        {isVisuallyExpanded ? (
          <>
            <span className="min-w-0 truncate text-sm font-semibold text-foreground">
              UKMe
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className={cn("shrink-0", RESPONSIVE.caseStudyPrototypeInteractive)}
              aria-label={
                isPinned
                  ? "Collapse feedback sources panel"
                  : "Pin feedback sources panel open"
              }
              aria-expanded={isVisuallyExpanded}
              aria-controls={id}
              onClick={onTogglePanel}
            >
              {isPinned ? (
                <PanelLeftClose aria-hidden="true" />
              ) : (
                <PanelLeftOpen aria-hidden="true" />
              )}
            </Button>
          </>
        ) : (
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className={cn("mx-auto shrink-0", RESPONSIVE.caseStudyPrototypeInteractive)}
            aria-label="Expand feedback sources panel"
            aria-expanded={isVisuallyExpanded}
            aria-controls={id}
            onClick={onTogglePanel}
          >
            <PanelLeftOpen aria-hidden="true" />
          </Button>
        )}
      </div>

      <nav
        aria-label="Feedback sources"
        className={cn(
          isVisuallyExpanded
            ? RESPONSIVE.caseStudyPrototypeSidebarNav
            : RESPONSIVE.caseStudyPrototypeSidebarNavCollapsed,
        )}
      >
        {FEEDBACK_SOURCES.map((source) => {
          const Icon = SOURCE_ICONS[source];
          const isActive = source === selectedSource;

          return (
            <button
              key={source}
              type="button"
              aria-current={isActive ? "page" : undefined}
              title={source}
              className={cn(
                RESPONSIVE.caseStudyPrototypeInteractive,
                isVisuallyExpanded
                  ? RESPONSIVE.caseStudyPrototypeSidebarItemExpanded
                  : RESPONSIVE.caseStudyPrototypeSidebarItemCollapsed,
                isActive
                  ? RESPONSIVE.caseStudyPrototypeSidebarItemActive
                  : RESPONSIVE.caseStudyPrototypeSidebarItemInactive,
              )}
              onClick={() => onSelectSource(source)}
            >
              <Icon aria-hidden="true" className="size-4 shrink-0" />
              {isVisuallyExpanded ? (
                <span className={RESPONSIVE.caseStudyPrototypeSidebarLabelVisible}>
                  {source}
                </span>
              ) : null}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
