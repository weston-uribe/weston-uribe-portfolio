"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { WorkCard } from "@/components/custom/portfolio/work-card";
import { Button } from "@/components/ui/button";
import { RESPONSIVE, SPACING } from "@/lib/constants";
import type { WorkItem } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

type WorkCarouselProps = {
  items: WorkItem[];
};

type CarouselState = {
  activePage: number;
  pageCount: number;
};

function getCarouselMetrics(track: HTMLDivElement): Pick<CarouselState, "pageCount"> {
  const cards = Array.from(track.children) as HTMLElement[];

  if (cards.length === 0) {
    return { pageCount: 0 };
  }

  if (cards.length === 1) {
    return { pageCount: 1 };
  }

  const step = cards[1].offsetLeft - cards[0].offsetLeft;
  if (step <= 0) {
    return { pageCount: 1 };
  }

  const visibleCount = Math.max(1, Math.floor(track.clientWidth / step));
  const pageCount = Math.max(1, cards.length - visibleCount + 1);

  return { pageCount };
}

export function WorkCarousel({ items }: WorkCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [{ activePage, pageCount }, setCarouselState] = useState<CarouselState>({
    activePage: 0,
    pageCount: 1,
  });

  const updateCarouselState = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length === 0) {
      return;
    }

    const { pageCount: nextPageCount } = getCarouselMetrics(track);
    const step =
      cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth;
    const scrollIndex =
      step > 0 ? Math.round(track.scrollLeft / step) : 0;
    const nextActivePage = Math.min(
      Math.max(0, scrollIndex),
      Math.max(nextPageCount - 1, 0)
    );

    setCarouselState({
      activePage: nextActivePage,
      pageCount: nextPageCount,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    updateCarouselState();
    track.addEventListener("scroll", updateCarouselState, { passive: true });
    window.addEventListener("resize", updateCarouselState);

    return () => {
      track.removeEventListener("scroll", updateCarouselState);
      window.removeEventListener("resize", updateCarouselState);
    };
  }, [updateCarouselState]);

  const scrollToPage = (pageIndex: number) => {
    const track = trackRef.current;
    const card = track?.children[pageIndex] as HTMLElement | undefined;
    if (!track || !card) {
      return;
    }

    const nextPage = Math.max(0, Math.min(pageCount - 1, pageIndex));

    setCarouselState((prev) => ({
      ...prev,
      activePage: nextPage,
    }));

    track.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  const scrollByStep = (direction: -1 | 1) => {
    scrollToPage(activePage + direction);
  };

  const canScrollPrev = activePage > 0;
  const canScrollNext = activePage < pageCount - 1;

  const navButtonClasses = (enabled: boolean) =>
    cn(
      "text-base",
      enabled ? "cursor-pointer" : "cursor-default disabled:pointer-events-auto"
    );

  return (
    <div className={cn("flex flex-col", SPACING.stackGap)}>
      <div className={cn(RESPONSIVE.horizontalScrollBleed, RESPONSIVE.workCarouselViewport)}>
        <div className={cn(RESPONSIVE.workTrack)} ref={trackRef}>
          {items.map((item) => (
            <div key={item.id} className={RESPONSIVE.workCardSlide}>
              <WorkCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex items-center justify-center gap-4"
        aria-label="Work carousel controls"
      >
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className={navButtonClasses(canScrollPrev)}
          aria-label="Previous project"
          disabled={!canScrollPrev}
          onClick={() => {
            scrollByStep(-1);
          }}
        >
          <ChevronLeft className="size-5" />
        </Button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Carousel pages">
          {Array.from({ length: pageCount }, (_, pageIndex) => (
            <button
              key={pageIndex}
              type="button"
              role="tab"
              aria-label={`Go to page ${pageIndex + 1}`}
              aria-selected={activePage === pageIndex}
              className={cn(
                "size-2.5 rounded-full transition-colors",
                activePage === pageIndex
                  ? "bg-primary"
                  : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
              )}
              onClick={() => {
                scrollToPage(pageIndex);
              }}
            />
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className={navButtonClasses(canScrollNext)}
          aria-label="Next project"
          disabled={!canScrollNext}
          onClick={() => {
            scrollByStep(1);
          }}
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}
