"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_COMMUNITY_MEMBERS } from "@/lib/portfolio/case-studies/luca-app-community";
import { cn } from "@/lib/utils";

import { LucaAppCommunityMemberCard } from "./luca-app-community-member-card";

const DRAG_THRESHOLD_PX = 8;

export function LucaAppCommunityCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDragging: false,
    hasMoved: false,
    startX: 0,
    scrollLeft: 0,
    pointerId: -1,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const getClosestIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return 0;
    }

    const slides = Array.from(track.children) as HTMLElement[];
    if (slides.length === 0) {
      return 0;
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

    return closestIndex;
  }, []);

  const updateActiveIndex = useCallback(() => {
    setActiveIndex(getClosestIndex());
  }, [getClosestIndex]);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const track = trackRef.current;
      const slide = track?.children[index] as HTMLElement | undefined;
      slide?.scrollIntoView({
        behavior,
        block: "nearest",
        inline: "start",
      });
    },
    [],
  );

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

    if (!dragState.hasMoved) {
      dragState.hasMoved = true;
      track.setPointerCapture(event.pointerId);
    }

    track.scrollLeft = dragState.scrollLeft - deltaX;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.isDragging || dragState.pointerId !== event.pointerId) {
      return;
    }

    if (dragState.hasMoved) {
      scrollToIndex(getClosestIndex(), "smooth");
    }

    dragStateRef.current.isDragging = false;
    if (dragState.hasMoved && track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <section
      aria-label="Community members"
      className={RESPONSIVE.caseStudyLucaAppResourcesCarouselSection}
    >
      <div
        ref={trackRef}
        className={RESPONSIVE.caseStudyLucaAppResourcesCarouselTrack}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDragStart={handleDragStart}
      >
        {LUCA_APP_COMMUNITY_MEMBERS.map((member) => (
          <div
            key={member.id}
            data-member-id={member.id}
            className={RESPONSIVE.caseStudyLucaAppResourcesCarouselSlide}
          >
            <LucaAppCommunityMemberCard member={member} />
          </div>
        ))}
      </div>

      <div
        className={RESPONSIVE.caseStudyLucaAppResourcesCarouselDots}
        aria-hidden="true"
      >
        {LUCA_APP_COMMUNITY_MEMBERS.map((member, index) => (
          <span
            key={member.id}
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
