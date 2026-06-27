import { cn } from "@/lib/utils";

type OutlineTriangleProps = {
  className?: string;
};

function OutlineTriangle({ className }: OutlineTriangleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 4 20.5 19.5H3.5L12 4Z"
        className="stroke-portfolio-kg-teal/25"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const OUTLINE = {
  circle: "rounded-full border border-portfolio-kg-teal/25 bg-transparent",
  ring: "rounded-full border-2 border-portfolio-kg-teal/20 bg-transparent",
  square: "border border-portfolio-kg-teal/22 bg-transparent",
  rectangle: "border border-portfolio-kg-teal/20 bg-transparent",
  roundedSquare:
    "rounded-xl border border-portfolio-kg-teal/22 bg-transparent",
  pill: "rounded-full border border-portfolio-kg-teal/20 bg-transparent",
  diamond:
    "rotate-45 rounded-sm border border-portfolio-kg-teal/22 bg-transparent",
} as const;

export function AboutDecorativeShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Row 1 — ~6% */}
      <div
        className={cn("absolute top-[6%] -left-5 size-5 sm:size-6", OUTLINE.circle)}
      />
      <OutlineTriangle className="absolute top-[5%] left-[22%] size-4 rotate-[10deg] sm:size-5" />
      <div
        className={cn(
          "absolute top-[7%] left-[46%] size-3 sm:size-4",
          OUTLINE.diamond,
        )}
      />
      <div
        className={cn(
          "absolute top-[6%] left-[70%] h-2 w-8 rotate-[16deg] sm:w-10",
          OUTLINE.rectangle,
        )}
      />
      <div
        className={cn(
          "absolute -top-2 -right-6 size-10 sm:size-12",
          OUTLINE.ring,
        )}
      />

      {/* Row 2 — ~20% */}
      <div
        className={cn(
          "absolute top-[20%] left-[6%] size-4 rotate-6 sm:size-5",
          OUTLINE.square,
        )}
      />
      <div
        className={cn(
          "absolute top-[19%] left-[30%] size-5 sm:size-6",
          OUTLINE.circle,
        )}
      />
      <OutlineTriangle className="absolute top-[21%] left-[54%] size-4 -rotate-[14deg] sm:size-5" />
      <div
        className={cn(
          "absolute top-[20%] left-[78%] size-4 rotate-[-12deg] sm:size-5",
          OUTLINE.roundedSquare,
        )}
      />
      <div
        className={cn(
          "absolute top-[18%] -right-3 h-2 w-9 rotate-[22deg] sm:w-11",
          OUTLINE.pill,
        )}
      />

      {/* Row 3 — ~34% */}
      <div
        className={cn(
          "absolute top-[34%] -left-3 size-3 sm:size-4",
          OUTLINE.diamond,
        )}
      />
      <div
        className={cn(
          "absolute top-[33%] left-[18%] h-2.5 w-10 rotate-[-20deg] sm:w-12",
          OUTLINE.rectangle,
        )}
      />
      <div
        className={cn(
          "absolute top-[35%] left-[42%] size-6 sm:size-7",
          OUTLINE.ring,
        )}
      />
      <OutlineTriangle className="absolute top-[34%] left-[66%] size-5 rotate-[18deg]" />
      <div
        className={cn(
          "absolute top-[33%] left-[88%] size-4 sm:size-5",
          OUTLINE.circle,
        )}
      />

      {/* Row 4 — ~48% */}
      <div
        className={cn(
          "absolute top-[48%] left-[4%] size-4 rotate-12 sm:size-5",
          OUTLINE.roundedSquare,
        )}
      />
      <OutlineTriangle className="absolute top-[47%] left-[26%] size-4 -rotate-[8deg] sm:size-5" />
      <div
        className={cn(
          "absolute top-[49%] left-[50%] size-3 sm:size-4",
          OUTLINE.square,
        )}
      />
      <div
        className={cn(
          "absolute top-[48%] left-[74%] h-2 w-9 rotate-[28deg] sm:w-11",
          OUTLINE.pill,
        )}
      />
      <div
        className={cn(
          "absolute top-[47%] -right-4 size-5 sm:size-6",
          OUTLINE.diamond,
        )}
      />

      {/* Row 5 — ~62% */}
      <div
        className={cn(
          "absolute top-[62%] -left-4 size-7 sm:size-8",
          OUTLINE.ring,
        )}
      />
      <div
        className={cn(
          "absolute top-[61%] left-[20%] size-4 sm:size-5",
          OUTLINE.circle,
        )}
      />
      <div
        className={cn(
          "absolute top-[63%] left-[44%] h-3 w-12 rotate-[-24deg] sm:w-14",
          OUTLINE.rectangle,
        )}
      />
      <OutlineTriangle className="absolute top-[62%] left-[68%] size-4 rotate-[25deg] sm:size-5" />
      <div
        className={cn(
          "absolute top-[61%] left-[90%] size-4 rotate-[-6deg] sm:size-5",
          OUTLINE.square,
        )}
      />

      {/* Row 6 — ~76% */}
      <div
        className={cn(
          "absolute top-[76%] left-[8%] size-3 sm:size-4",
          OUTLINE.diamond,
        )}
      />
      <div
        className={cn(
          "absolute top-[75%] left-[32%] size-5 rotate-[15deg] sm:size-6",
          OUTLINE.roundedSquare,
        )}
      />
      <OutlineTriangle className="absolute top-[77%] left-[56%] size-5 -rotate-[12deg]" />
      <div
        className={cn(
          "absolute top-[76%] left-[80%] h-2 w-8 rotate-[8deg] sm:w-10",
          OUTLINE.pill,
        )}
      />
      <div
        className={cn(
          "absolute top-[75%] -right-5 size-4 sm:size-5",
          OUTLINE.circle,
        )}
      />

      {/* Row 7 — ~90% */}
      <div
        className={cn(
          "absolute top-[90%] -left-2 size-4 sm:size-5",
          OUTLINE.square,
        )}
      />
      <div
        className={cn(
          "absolute top-[89%] left-[24%] size-6 sm:size-7",
          OUTLINE.ring,
        )}
      />
      <div
        className={cn(
          "absolute top-[91%] left-[48%] size-3 sm:size-4",
          OUTLINE.diamond,
        )}
      />
      <OutlineTriangle className="absolute top-[90%] left-[72%] size-4 rotate-[6deg] sm:size-5" />
      <div
        className={cn(
          "absolute -bottom-2 -right-4 size-5 rotate-[-18deg] sm:size-6",
          OUTLINE.roundedSquare,
        )}
      />
    </div>
  );
}
