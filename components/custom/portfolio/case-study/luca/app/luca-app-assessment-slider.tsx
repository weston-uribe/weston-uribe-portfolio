"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SLIDER_MIN = 1;
const SLIDER_MAX = 10;
const SLIDER_THUMB_SIZE_PX = 28;

type LucaAppAssessmentSliderProps = {
  id: string;
  value: number | null;
  onChange: (value: number) => void;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  className?: string;
};

function valueFromPointer(clientX: number, rect: DOMRect) {
  const ratio = (clientX - rect.left) / rect.width;
  return Math.min(
    SLIDER_MAX,
    Math.max(SLIDER_MIN, Math.round(ratio * (SLIDER_MAX - SLIDER_MIN)) + SLIDER_MIN),
  );
}

function valueToPercent(value: number) {
  return ((value - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;
}

function thumbHalfPercent(trackWidth: number) {
  if (trackWidth <= 0) {
    return 0;
  }

  return (SLIDER_THUMB_SIZE_PX / 2 / trackWidth) * 100;
}

type SliderThumbProps = {
  value: number;
  variant: "active" | "ghost";
};

function SliderThumb({ value, variant }: SliderThumbProps) {
  const percent = valueToPercent(value);
  const isActive = variant === "active";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full",
        isActive
          ? cn("border-2", RESPONSIVE.caseStudyLucaAppSliderThumb)
          : RESPONSIVE.caseStudyLucaAppSliderThumbGhost,
      )}
      style={{ left: `${percent}%` }}
    >
      <span
        className={cn(
          RESPONSIVE.caseStudyLucaAppSliderThumbValue,
          !isActive && RESPONSIVE.caseStudyLucaAppSliderThumbValueGhost,
        )}
      >
        {value}
      </span>
    </div>
  );
}

export function LucaAppAssessmentSlider({
  id,
  value,
  onChange,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  className,
}: LucaAppAssessmentSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const [activePointerType, setActivePointerType] = useState("mouse");
  const [previewValue, setPreviewValue] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const measure = () => {
      setTrackWidth(track.getBoundingClientRect().width);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    return () => {
      observer.disconnect();
    };
  }, []);

  const updatePreview = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    setPreviewValue(valueFromPointer(clientX, track.getBoundingClientRect()));
  }, []);

  const clearPreview = useCallback(() => {
    if (!isDraggingRef.current) {
      setPreviewValue(null);
    }
  }, []);

  const commitValue = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      onChange(valueFromPointer(clientX, track.getBoundingClientRect()));
    },
    [onChange],
  );

  const endDrag = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isDraggingRef.current) {
        commitValue(event.clientX);
      }

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      isDraggingRef.current = false;
      setIsDragging(false);
      setPreviewValue(null);
    },
    [commitValue],
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      setActivePointerType(event.pointerType);
      event.currentTarget.setPointerCapture(event.pointerId);
      isDraggingRef.current = true;
      setIsDragging(true);
      updatePreview(event.clientX);
    },
    [updatePreview],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isDraggingRef.current || event.pointerType === "mouse") {
        updatePreview(event.clientX);
      }
    },
    [updatePreview],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onChange(value ?? Math.ceil((SLIDER_MIN + SLIDER_MAX) / 2));
        setPreviewValue(null);
      }
    },
    [onChange, value],
  );

  const committedValue = value;
  const isTouchDragging = isDragging && activePointerType !== "mouse";
  const showGhost =
    previewValue !== null &&
    (committedValue === null || previewValue !== committedValue);
  const showGhostPreview = !isTouchDragging && showGhost;

  const ghostStartPercent =
    committedValue === null ? 0 : valueToPercent(committedValue);
  const ghostEndPercent =
    previewValue === null ? 0 : valueToPercent(previewValue);
  const ghostLeftPercent = Math.min(ghostStartPercent, ghostEndPercent);
  const ghostWidthPercent = Math.abs(ghostEndPercent - ghostStartPercent);

  const thumbInset = thumbHalfPercent(trackWidth);
  let ghostFillLeft = ghostLeftPercent;
  let ghostFillWidth = ghostWidthPercent;

  if (showGhostPreview && previewValue !== null) {
    if (committedValue === null) {
      ghostFillLeft = 0;
      ghostFillWidth = Math.max(0, ghostEndPercent - thumbInset);
    } else if (previewValue > committedValue) {
      ghostFillLeft = ghostStartPercent;
      ghostFillWidth = Math.max(0, ghostWidthPercent - thumbInset);
    } else if (previewValue < committedValue) {
      ghostFillLeft = ghostLeftPercent + thumbInset;
      ghostFillWidth = Math.max(0, ghostWidthPercent - thumbInset);
    }
  }

  const committedWidthPercent =
    committedValue === null ? 0 : valueToPercent(committedValue);
  const touchDragWidthPercent =
    isTouchDragging && previewValue !== null
      ? valueToPercent(previewValue)
      : 0;

  const ariaValue =
    isTouchDragging && previewValue !== null
      ? previewValue
      : committedValue;

  return (
    <div
      id={id}
      role="slider"
      tabIndex={0}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-valuemin={SLIDER_MIN}
      aria-valuemax={SLIDER_MAX}
      aria-valuenow={ariaValue ?? undefined}
      aria-valuetext={
        ariaValue === null ? "Not selected" : String(ariaValue)
      }
      className={cn(
        RESPONSIVE.caseStudyLucaAppSliderInteraction,
        isDragging && RESPONSIVE.caseStudyLucaAppSliderInteractionDragging,
        RESPONSIVE.caseStudyPrototypeInteractive,
        className,
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerLeave={clearPreview}
      onPointerCancel={endDrag}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={trackRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-1/2 box-border h-2 w-full -translate-y-1/2 rounded-full",
          RESPONSIVE.caseStudyLucaAppSliderTrack,
        )}
      >
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {isTouchDragging && previewValue !== null ? (
            <div
              className={RESPONSIVE.caseStudyLucaAppSliderRange}
              style={{ width: `${touchDragWidthPercent}%` }}
            />
          ) : committedValue !== null ? (
            <div
              className={RESPONSIVE.caseStudyLucaAppSliderRange}
              style={{ width: `${committedWidthPercent}%` }}
            />
          ) : null}

          {showGhostPreview && previewValue !== null && ghostFillWidth > 0 ? (
            <div
              className={RESPONSIVE.caseStudyLucaAppSliderRangeGhost}
              style={{
                left: `${ghostFillLeft}%`,
                width: `${ghostFillWidth}%`,
              }}
            />
          ) : null}
        </div>
      </div>

      {isTouchDragging && previewValue !== null ? (
        <SliderThumb value={previewValue} variant="active" />
      ) : committedValue !== null ? (
        <SliderThumb value={committedValue} variant="active" />
      ) : null}

      {showGhostPreview && previewValue !== null ? (
        <SliderThumb value={previewValue} variant="ghost" />
      ) : null}
    </div>
  );
}
