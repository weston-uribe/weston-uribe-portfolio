"use client";

import { motion, useReducedMotion } from "motion/react";

import { RESPONSIVE } from "@/lib/constants";
import {
  dimensionToAngle,
  formatWellnessRadarSummary,
  getRadarLabelChips,
  getRadarPoints,
  LUCA_WELLNESS_DIMENSIONS,
  pointsToPolygonString,
  polarToCartesian,
  WELLNESS_RADAR_CENTER_X,
  WELLNESS_RADAR_CENTER_Y,
  WELLNESS_RADAR_LABEL_LINE_HEIGHT,
  WELLNESS_RADAR_MAX_RADIUS,
  WELLNESS_RADAR_RING_LEVELS,
  WELLNESS_RADAR_VIEW_HEIGHT,
  WELLNESS_RADAR_VIEW_WIDTH,
  type WellnessScores,
} from "@/lib/portfolio/case-studies/luca-wellness-radar";
import { cn } from "@/lib/utils";

type LucaAppWellnessRadarChartProps = {
  scores: WellnessScores;
  className?: string;
};

const GRID_EASE = [0.25, 0.1, 0.25, 1] as const;
const POLYGON_EASE = [0.12, 1, 0.32, 1] as const;
const LABEL_EASE = [0.22, 1, 0.36, 1] as const;

const PAPER_SHADOW_FILTER_ID = "luca-wellness-radar-paper-shadow";

export function LucaAppWellnessRadarChart({
  scores,
  className,
}: LucaAppWellnessRadarChartProps) {
  const shouldReduceMotion = useReducedMotion();
  const polygonPoints = pointsToPolygonString(getRadarPoints(scores));
  const labelChips = getRadarLabelChips(scores);
  const summary = formatWellnessRadarSummary(scores);

  const gridTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 1.05, ease: GRID_EASE };

  const polygonTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 1.9, delay: 0.45, ease: POLYGON_EASE };

  const labelTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.9, delay: 1.35, ease: LABEL_EASE };

  return (
    <figure
      className={cn(RESPONSIVE.caseStudyLucaAppWellnessRadarWrap, className)}
      aria-label={`Wellness radar. ${summary}.`}
    >
      <svg
        viewBox={`0 0 ${WELLNESS_RADAR_VIEW_WIDTH} ${WELLNESS_RADAR_VIEW_HEIGHT}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-hidden="true"
        className="block min-h-56 overflow-visible sm:min-h-60"
      >
        <defs>
          <filter
            id={PAPER_SHADOW_FILTER_ID}
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#245757"
              floodOpacity="0.14"
            />
          </filter>
        </defs>

        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={gridTransition}
        >
          {WELLNESS_RADAR_RING_LEVELS.map((level) => (
            <circle
              key={level}
              cx={WELLNESS_RADAR_CENTER_X}
              cy={WELLNESS_RADAR_CENTER_Y}
              r={WELLNESS_RADAR_MAX_RADIUS * level}
              className="fill-none stroke-luca-app-control-border/38"
              strokeWidth={level === 1 ? 1.2 : 1}
            />
          ))}

          {LUCA_WELLNESS_DIMENSIONS.map((dimension, index) => {
            const angle = dimensionToAngle(index);
            const axisEnd = polarToCartesian(angle, WELLNESS_RADAR_MAX_RADIUS);

            return (
              <line
                key={dimension.id}
                x1={WELLNESS_RADAR_CENTER_X}
                y1={WELLNESS_RADAR_CENTER_Y}
                x2={axisEnd.x}
                y2={axisEnd.y}
                className="stroke-luca-app-control-border/42"
                strokeWidth={1}
              />
            );
          })}
        </motion.g>

        <motion.g
          initial={shouldReduceMotion ? false : { scale: 0, opacity: 0.45 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={polygonTransition}
          style={{
            transformOrigin: `${WELLNESS_RADAR_CENTER_X}px ${WELLNESS_RADAR_CENTER_Y}px`,
            transformBox: "fill-box",
          }}
        >
          <polygon
            points={polygonPoints}
            className={RESPONSIVE.caseStudyLucaAppWellnessRadarPolygonShadow}
            filter={`url(#${PAPER_SHADOW_FILTER_ID})`}
          />
          <polygon
            points={polygonPoints}
            className={RESPONSIVE.caseStudyLucaAppWellnessRadarPolygonVellum}
          />
          <polygon
            points={polygonPoints}
            className={RESPONSIVE.caseStudyLucaAppWellnessRadarPolygonBody}
          />
          <polygon
            points={polygonPoints}
            className={RESPONSIVE.caseStudyLucaAppWellnessRadarPolygonInner}
          />
          <polygon
            points={polygonPoints}
            className={RESPONSIVE.caseStudyLucaAppWellnessRadarPolygonEdgeSoft}
            strokeWidth={3.5}
            strokeLinejoin="round"
          />
          <polygon
            points={polygonPoints}
            className={RESPONSIVE.caseStudyLucaAppWellnessRadarPolygonEdge}
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={labelTransition}
        >
          {labelChips.map((chip) => {
            const labelY =
              chip.chipY +
              chip.chipHeight / 2 -
              WELLNESS_RADAR_LABEL_LINE_HEIGHT / 2 -
              1;
            const valueY = labelY + WELLNESS_RADAR_LABEL_LINE_HEIGHT + 1;
            const textX = chip.chipX + chip.chipWidth / 2;

            return (
              <g key={chip.label}>
                <rect
                  x={chip.chipX}
                  y={chip.chipY}
                  width={chip.chipWidth}
                  height={chip.chipHeight}
                  rx={4}
                  className={RESPONSIVE.caseStudyLucaAppWellnessRadarLabelChip}
                />
                <text
                  x={textX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={RESPONSIVE.caseStudyLucaAppWellnessRadarLabel}
                >
                  {chip.label}
                </text>
                <text
                  x={textX}
                  y={valueY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={RESPONSIVE.caseStudyLucaAppWellnessRadarLabelValue}
                >
                  {chip.value}
                </text>
              </g>
            );
          })}
        </motion.g>
      </svg>

      <figcaption className="sr-only">{summary}</figcaption>
    </figure>
  );
}
