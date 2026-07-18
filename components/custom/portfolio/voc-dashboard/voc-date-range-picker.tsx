"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RESPONSIVE } from "@/lib/constants";
import { formatDate } from "@/lib/portfolio/case-studies/ukme-voc-analytics";
import { cn } from "@/lib/utils";

type VocDateRangePickerProps = {
  dateFrom: string | null;
  dateTo: string | null;
  onChange: (dateFrom: string | null, dateTo: string | null) => void;
};

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;

function toIsoDate(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function parseIsoDate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getDisplayLabel(dateFrom: string | null, dateTo: string | null): string {
  if (dateFrom && dateTo) {
    return `${formatDate(dateFrom)} – ${formatDate(dateTo)}`;
  }

  if (dateFrom) {
    return `${formatDate(dateFrom)} – Select end`;
  }

  return "Select date range";
}

function getDayHighlightState(
  isoDate: string,
  start: string | null,
  end: string | null,
  hoverDate: string | null,
): "endpoint" | "in-range" | "preview-range" | "none" {
  if (start && end) {
    const [rangeStart, rangeEnd] = start <= end ? [start, end] : [end, start];

    if (isoDate === rangeStart || isoDate === rangeEnd) {
      return "endpoint";
    }

    if (isoDate >= rangeStart && isoDate <= rangeEnd) {
      return "in-range";
    }

    return "none";
  }

  if (start && hoverDate) {
    const [rangeStart, rangeEnd] = start <= hoverDate ? [start, hoverDate] : [hoverDate, start];

    if (isoDate === rangeStart || isoDate === rangeEnd) {
      return "endpoint";
    }

    if (isoDate >= rangeStart && isoDate <= rangeEnd) {
      return "preview-range";
    }

    return "none";
  }

  if (start && isoDate === start) {
    return "endpoint";
  }

  return "none";
}

export function VocDateRangePicker({
  dateFrom,
  dateTo,
  onChange,
}: VocDateRangePickerProps) {
  const initialMonth = dateFrom ? parseIsoDate(dateFrom) : new Date(2025, 0, 1);
  const [viewYear, setViewYear] = useState(initialMonth.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialMonth.getMonth());
  const [pendingStart, setPendingStart] = useState<string | null>(null);
  const [hoverDate, setHoverDate] = useState<string | null>(null);

  const days = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    const startOffset = firstDay.getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    return Array.from({ length: startOffset + daysInMonth }, (_, index) => {
      if (index < startOffset) {
        return null;
      }

      const day = index - startOffset + 1;
      return toIsoDate(viewYear, viewMonth, day);
    });
  }, [viewMonth, viewYear]);

  const handleSelectDay = (isoDate: string) => {
    if (dateFrom && dateTo && !pendingStart) {
      setPendingStart(isoDate);
      onChange(isoDate, null);
      setHoverDate(null);
      return;
    }

    if (!pendingStart && !dateFrom) {
      setPendingStart(isoDate);
      onChange(isoDate, null);
      setHoverDate(null);
      return;
    }

    const start = pendingStart ?? dateFrom;
    if (!start) {
      setPendingStart(isoDate);
      onChange(isoDate, null);
      setHoverDate(null);
      return;
    }

    if (isoDate < start) {
      onChange(isoDate, start);
    } else {
      onChange(start, isoDate);
    }

    setPendingStart(null);
    setHoverDate(null);
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewYear((year) => year - 1);
      setViewMonth(11);
      return;
    }

    setViewMonth((month) => month - 1);
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewYear((year) => year + 1);
      setViewMonth(0);
      return;
    }

    setViewMonth((month) => month + 1);
  };

  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const effectiveStart = pendingStart ?? dateFrom;
  const isSelectingEnd = Boolean(effectiveStart && !dateTo);

  return (
    <Popover>
      <PopoverTrigger
        render={
          <button
            type="button"
            className={cn(
              RESPONSIVE.caseStudyPrototypeFilterSelect,
              RESPONSIVE.caseStudyPrototypeInteractive,
              "flex items-center gap-2 text-left font-normal",
            )}
          />
        }
      >
        <CalendarDays aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
        <span className={cn("truncate", !dateFrom && !dateTo && "text-muted-foreground")}>
          {getDisplayLabel(dateFrom, dateTo)}
        </span>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 p-3">
        <div className="mb-3 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className={RESPONSIVE.caseStudyPrototypeInteractive}
            onClick={handlePrevMonth}
          >
            <ChevronLeft aria-hidden="true" />
            <span className="sr-only">Previous month</span>
          </Button>
          <p className="text-sm font-medium">{monthLabel}</p>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className={RESPONSIVE.caseStudyPrototypeInteractive}
            onClick={handleNextMonth}
          >
            <ChevronRight aria-hidden="true" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
          {WEEKDAY_LABELS.map((label) => (
            <span key={label} className="py-1 font-medium">
              {label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((isoDate, index) =>
            isoDate ? (
              <button
                key={isoDate}
                type="button"
                className={cn(
                  RESPONSIVE.caseStudyPrototypeInteractive,
                  "h-8 rounded-md text-sm transition-colors hover:bg-muted/60",
                  (() => {
                    const highlight = getDayHighlightState(
                      isoDate,
                      effectiveStart,
                      dateTo,
                      isSelectingEnd ? hoverDate : null,
                    );

                    switch (highlight) {
                      case "endpoint":
                        return "bg-chart-4/20 font-medium text-chart-4";
                      case "in-range":
                      case "preview-range":
                        return "bg-chart-4/10 text-foreground";
                      default:
                        return "text-foreground";
                    }
                  })(),
                )}
                onClick={() => handleSelectDay(isoDate)}
                onMouseEnter={() => {
                  if (isSelectingEnd) {
                    setHoverDate(isoDate);
                  }
                }}
                onMouseLeave={() => {
                  if (isSelectingEnd) {
                    setHoverDate(null);
                  }
                }}
              >
                {parseIsoDate(isoDate).getDate()}
              </button>
            ) : (
              <span key={`empty-${index}`} />
            ),
          )}
        </div>

        <div className="mt-3 flex justify-end gap-2 border-t border-border pt-3">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className={RESPONSIVE.caseStudyPrototypeInteractive}
            onClick={() => {
              setPendingStart(null);
              setHoverDate(null);
              onChange(null, null);
            }}
          >
            Clear
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
