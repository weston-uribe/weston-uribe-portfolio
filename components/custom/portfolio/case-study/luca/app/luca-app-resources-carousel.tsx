"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { RESPONSIVE } from "@/lib/constants";
import {
  LUCA_APP_RESOURCE_ITEMS,
  type LucaAppResource,
} from "@/lib/portfolio/case-studies/luca-app-resources";
import { cn } from "@/lib/utils";

import { LucaAppResourceCard } from "./luca-app-resource-card";

const DRAG_THRESHOLD_PX = 8;

type LucaAppResourcesCarouselProps = {
  onResourceSelect: (resource: LucaAppResource) => void;
};

export function LucaAppResourcesCarousel({
  onResourceSelect,
}: LucaAppResourcesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDragging: false,
    hasMoved: false,
    startX: 0,
    scrollLeft: 0,
    pointerId: -1,
  });
  const suppressClickRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const slides = Array.from(track.children) as HTMLElement[];
    if (slides.length === 0) {
      return;
    }

    const trackLeft = track.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      track.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || event.pointerType === "touch") {
      return;
    }

    dragStateRef.current = {
      isDragging: true,
      hasMoved: false,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
      pointerId: event.pointerId,
    };
    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.isDragging || dragState.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    if (!dragState.hasMoved && Math.abs(deltaX) < DRAG_THRESHOLD_PX) {
      return;
    }

    dragState.hasMoved = true;
    track.scrollLeft = dragState.scrollLeft - deltaX;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.isDragging || dragState.pointerId !== event.pointerId) {
      return;
    }

    if (dragState.hasMoved) {
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
      updateActiveIndex();
    }

    dragStateRef.current.isDragging = false;
    track.releasePointerCapture(event.pointerId);
  };

  const handleResourceSelect = (resource: LucaAppResource) => {
    if (suppressClickRef.current) {
      return;
    }

    onResourceSelect(resource);
  };

  return (
    <section
      aria-label="Wellness resource library"
      className={RESPONSIVE.caseStudyLucaAppResourcesCarouselSection}
    >
      <div
        ref={trackRef}
        className={RESPONSIVE.caseStudyLucaAppResourcesCarouselTrack}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {LUCA_APP_RESOURCE_ITEMS.map((resource) => (
          <div
            key={resource.id}
            className={RESPONSIVE.caseStudyLucaAppResourcesCarouselSlide}
          >
            <LucaAppResourceCard
              resource={resource}
              onSelect={handleResourceSelect}
            />
          </div>
        ))}
      </div>

      <div
        className={RESPONSIVE.caseStudyLucaAppResourcesCarouselDots}
        aria-hidden="true"
      >
        {LUCA_APP_RESOURCE_ITEMS.map((resource, index) => (
          <span
            key={resource.id}
            className={cn(
              RESPONSIVE.caseStudyLucaAppResourcesCarouselDot,
              index === activeIndex
                ? RESPONSIVE.caseStudyLucaAppResourcesCarouselDotActive
                : RESPONSIVE.caseStudyLucaAppResourcesCarouselDotInactive,
            )}
          />
        ))}
      </div>
    </section>
  );
}
