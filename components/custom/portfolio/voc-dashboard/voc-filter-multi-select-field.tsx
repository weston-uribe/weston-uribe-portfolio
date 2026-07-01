"use client";

import { useEffect, useId, useRef } from "react";
import { ChevronDown } from "lucide-react";

import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type VocFilterMultiSelectFieldProps<T extends string> = {
  fieldId: string;
  label: string;
  emptyLabel: string;
  options: readonly T[];
  selected: readonly T[];
  openFieldId: string | null;
  onOpenChange: (fieldId: string | null) => void;
  onToggle: (value: T) => void;
};

export function VocFilterMultiSelectField<T extends string>({
  fieldId,
  label,
  emptyLabel,
  options,
  selected,
  openFieldId,
  onOpenChange,
  onToggle,
}: VocFilterMultiSelectFieldProps<T>) {
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const isOpen = openFieldId === fieldId;

  const summary =
    selected.length === 0
      ? emptyLabel
      : selected.length === 1
        ? selected[0]
        : `${selected.length} selected`;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onOpenChange(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onOpenChange]);

  return (
    <div className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-foreground">{label}</span>
      <div ref={containerRef} className="relative">
        <button
          type="button"
          className={cn(
            RESPONSIVE.caseStudyPrototypeFilterSelect,
            RESPONSIVE.caseStudyPrototypeInteractive,
            "flex items-center justify-between gap-2 text-left",
          )}
          aria-expanded={isOpen}
          aria-controls={listboxId}
          onClick={() => onOpenChange(isOpen ? null : fieldId)}
        >
          <span className="truncate">{summary}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </button>

        {isOpen ? (
          <div
            id={listboxId}
            role="listbox"
            aria-label={label}
            aria-multiselectable="true"
            className="absolute top-full z-50 mt-1 flex max-h-44 w-full flex-col gap-1 overflow-y-auto rounded-lg border border-white/[0.1] bg-popover p-2 shadow-lg"
          >
            {options.map((option) => {
              const checked = selected.includes(option);

              return (
                <label
                  key={option}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-white/[0.04]",
                    RESPONSIVE.caseStudyPrototypeInteractive,
                  )}
                >
                  <input
                    type="checkbox"
                    className={cn(
                      "size-4 rounded border-white/20",
                      RESPONSIVE.caseStudyPrototypeInteractive,
                    )}
                    checked={checked}
                    onChange={() => onToggle(option)}
                  />
                  <span className="text-sm text-foreground">{option}</span>
                </label>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
