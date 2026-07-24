import { RESPONSIVE, SPACING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CaseStudyKinterraDeltaVisual() {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <div
        className={cn(
          RESPONSIVE.caseStudyAnnotationCard,
          "flex items-center justify-center p-4 sm:p-6",
        )}
      >
        <svg
          role="img"
          aria-labelledby="kinterra-delta-title kinterra-delta-desc"
          viewBox="0 0 360 300"
          width={360}
          height={300}
          className="h-auto w-full max-w-md"
        >
          <title id="kinterra-delta-title">
            Alignment triangle showing perceived, ideal, and actual self with
            alignment and tension signals
          </title>
          <desc id="kinterra-delta-desc">
            An explanatory diagram with perceived, ideal, and actual vertices.
            Smaller divergence represents greater alignment; larger divergence
            represents greater tension. No numerical scores are shown.
          </desc>

          <g aria-hidden="true">
            <polygon
              points="180,50 60,250 300,250"
              className="fill-muted/30 stroke-border"
              strokeWidth="1.5"
            />
            <line
              x1="180"
              y1="50"
              x2="180"
              y2="170"
              className="stroke-foreground/30"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <line
              x1="60"
              y1="250"
              x2="180"
              y2="170"
              className="stroke-foreground/20"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="250"
              x2="180"
              y2="170"
              className="stroke-foreground/50"
              strokeWidth="3"
            />
          </g>

          <text
            x="180"
            y="38"
            textAnchor="middle"
            className="fill-foreground text-[13px] font-semibold"
          >
            Perceived
          </text>
          <text
            x="48"
            y="268"
            textAnchor="middle"
            className="fill-foreground text-[13px] font-semibold"
          >
            Ideal
          </text>
          <text
            x="312"
            y="268"
            textAnchor="middle"
            className="fill-foreground text-[13px] font-semibold"
          >
            Actual
          </text>

          <text
            x="180"
            y="185"
            textAnchor="middle"
            className="fill-foreground/80 text-[11px] font-medium"
          >
            Alignment
          </text>
          <text
            x="240"
            y="210"
            textAnchor="middle"
            className="fill-foreground/60 text-[10px]"
          >
            Tension
          </text>
        </svg>
      </div>
    </div>
  );
}
