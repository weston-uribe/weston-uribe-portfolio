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
    if (!isDragging) {
      setPreviewValue(null);
    }
  }, [isDragging]);

  const commitValue = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      onChange(valueFromPointer(clientX, track.getBoundingClientRect()));
      setPreviewValue(null);
      setIsDragging(false);
    },
    [onChange],
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
      updatePreview(event.clientX);
    },
    [updatePreview],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging || event.pointerType === "mouse") {
        updatePreview(event.clientX);
      }
    },
    [isDragging, updatePreview],
  );

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging) {
        commitValue(event.clientX);
      }

      setIsDragging(false);
      setPreviewValue(null);
    },
    [commitValue, isDragging],
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
  const showGhost =
    previewValue !== null &&
    (committedValue === null || previewValue !== committedValue);

  const ghostStartPercent =
    committedValue === null ? 0 : valueToPercent(committedValue);
  const ghostEndPercent =
    previewValue === null ? 0 : valueToPercent(previewValue);
  const ghostLeftPercent = Math.min(ghostStartPercent, ghostEndPercent);
  const ghostWidthPercent = Math.abs(ghostEndPercent - ghostStartPercent);

  const thumbInset = thumbHalfPercent(trackWidth);
  let ghostFillLeft = ghostLeftPercent;
  let ghostFillWidth = ghostWidthPercent;

  if (showGhost && previewValue !== null) {
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

  const activeWidthPercent =
    committedValue === null ? 0 : valueToPercent(committedValue);

  return (
    <div className={cn("relative h-7 w-full", className)}>
      <div
        id={id}
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        aria-valuemin={SLIDER_MIN}
        aria-valuemax={SLIDER_MAX}
        aria-valuenow={committedValue ?? undefined}
        aria-valuetext={
          committedValue === null ? "Not selected" : String(committedValue)
        }
        className={cn(
          "absolute top-1/2 box-border h-2 w-full -translate-y-1/2 rounded-full",
          RESPONSIVE.caseStudyLucaAppSliderTrack,
          RESPONSIVE.caseStudyPrototypeInteractive,
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={clearPreview}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {committedValue !== null ? (
            <div
              aria-hidden="true"
              className={RESPONSIVE.caseStudyLucaAppSliderRange}
              style={{ width: `${activeWidthPercent}%` }}
            />
          ) : null}

          {showGhost && previewValue !== null && ghostFillWidth > 0 ? (
            <div
              aria-hidden="true"
              className={RESPONSIVE.caseStudyLucaAppSliderRangeGhost}
              style={{
                left: `${ghostFillLeft}%`,
                width: `${ghostFillWidth}%`,
              }}
            />
          ) : null}
        </div>
      </div>

      {committedValue !== null ? (
        <SliderThumb value={committedValue} variant="active" />
      ) : null}

      {showGhost && previewValue !== null ? (
        <SliderThumb value={previewValue} variant="ghost" />
      ) : null}
    </div>
  );
}
