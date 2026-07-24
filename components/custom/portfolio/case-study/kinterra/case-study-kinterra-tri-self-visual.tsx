import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CaseStudyKinterraTriSelfVisualProps = {
  className?: string;
  muted?: boolean;
};

const DOMAIN_LABELS = [
  "Work",
  "Family",
  "Relationships",
  "Personal growth",
] as const;

export function CaseStudyKinterraTriSelfVisual({
  className,
  muted = false,
}: CaseStudyKinterraTriSelfVisualProps) {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyHeroIllustrationShell,
        "flex items-center justify-center p-4 sm:p-6",
        muted && "opacity-60 saturate-50",
        className,
      )}
    >
      <svg
        role="img"
        aria-labelledby="kinterra-tri-self-title kinterra-tri-self-desc"
        viewBox="0 0 400 360"
        width={400}
        height={360}
        className="h-auto w-full max-w-sm"
      >
        <title id="kinterra-tri-self-title">
          Tri-self model diagram showing perceived, ideal, and actual self around
          a central self-concept model
        </title>
        <desc id="kinterra-tri-self-desc">
          Three perspectives—perceived, ideal, and actual—surround a central
          self-concept node with optional domain context labels for work, family,
          relationships, and personal growth.
        </desc>

        {/* Decorative connectors */}
        <g aria-hidden="true">
          <line
            x1="200"
            y1="175"
            x2="200"
            y2="70"
            className="stroke-border"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1="200"
            y1="175"
            x2="90"
            y2="280"
            className="stroke-border"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1="200"
            y1="175"
            x2="310"
            y2="280"
            className="stroke-border"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </g>

        {/* Perceived */}
        <rect
          x="155"
          y="40"
          width="90"
          height="36"
          rx="8"
          className="fill-muted stroke-border"
          strokeWidth="1"
        />
        <text
          x="200"
          y="63"
          textAnchor="middle"
          className="fill-foreground text-[13px] font-semibold"
        >
          Perceived
        </text>

        {/* Ideal */}
        <rect
          x="50"
          y="270"
          width="80"
          height="36"
          rx="8"
          className="fill-muted stroke-border"
          strokeWidth="1"
        />
        <text
          x="90"
          y="293"
          textAnchor="middle"
          className="fill-foreground text-[13px] font-semibold"
        >
          Ideal
        </text>

        {/* Actual */}
        <rect
          x="270"
          y="270"
          width="80"
          height="36"
          rx="8"
          className="fill-muted stroke-border"
          strokeWidth="1"
        />
        <text
          x="310"
          y="293"
          textAnchor="middle"
          className="fill-foreground text-[13px] font-semibold"
        >
          Actual
        </text>

        {/* Central self-concept */}
        <circle
          cx="200"
          cy="175"
          r="52"
          className="fill-background stroke-border"
          strokeWidth="2"
        />
        <text
          x="200"
          y="172"
          textAnchor="middle"
          className="fill-foreground text-[12px] font-semibold"
        >
          Self-concept
        </text>

        {/* Domain chips */}
        <g aria-hidden="true">
          {DOMAIN_LABELS.map((label, index) => {
            const positions = [
              { x: 60, y: 130 },
              { x: 300, y: 130 },
              { x: 60, y: 210 },
              { x: 300, y: 210 },
            ];
            const pos = positions[index];
            const width = label.length * 6.5 + 16;

            return (
              <g key={label}>
                <rect
                  x={pos.x - width / 2}
                  y={pos.y - 10}
                  width={width}
                  height="20"
                  rx="10"
                  className="fill-muted/60 stroke-border/60"
                  strokeWidth="0.75"
                />
                <text
                  x={pos.x}
                  y={pos.y + 4}
                  textAnchor="middle"
                  className="fill-foreground/70 text-[9px]"
                >
                  {label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
