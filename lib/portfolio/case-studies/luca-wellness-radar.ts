export type WellnessDimensionId =
  | "emotional"
  | "occupational"
  | "physical"
  | "social"
  | "intellectual"
  | "spiritual";

export type WellnessScores = Record<WellnessDimensionId, number>;

export type WellnessDimension = {
  id: WellnessDimensionId;
  label: string;
};

export const WELLNESS_RADAR_MIN = 1;
export const WELLNESS_RADAR_MAX = 10;

export const WELLNESS_RADAR_VIEW_WIDTH = 360;
export const WELLNESS_RADAR_VIEW_HEIGHT = 340;
export const WELLNESS_RADAR_CENTER_X = WELLNESS_RADAR_VIEW_WIDTH / 2;
export const WELLNESS_RADAR_CENTER_Y = 158;
export const WELLNESS_RADAR_MAX_RADIUS = 122;
export const WELLNESS_RADAR_LABEL_OFFSET = 28;
export const WELLNESS_RADAR_RING_LEVELS = [0.25, 0.5, 0.75, 1] as const;
export const WELLNESS_RADAR_LABEL_CHAR_WIDTH = 6.5;
export const WELLNESS_RADAR_LABEL_CHIP_PADDING_X = 9;
export const WELLNESS_RADAR_LABEL_CHIP_PADDING_Y = 6;
export const WELLNESS_RADAR_LABEL_LINE_HEIGHT = 14;

export const LUCA_WELLNESS_DIMENSIONS: ReadonlyArray<WellnessDimension> = [
  { id: "emotional", label: "Emotional" },
  { id: "occupational", label: "Occupational" },
  { id: "physical", label: "Physical" },
  { id: "social", label: "Social" },
  { id: "intellectual", label: "Intellectual" },
  { id: "spiritual", label: "Spiritual" },
];

/** v1 mock data — single polygon only */
export const LUCA_WELLNESS_MOCK_SCORES: WellnessScores = {
  emotional: 6,
  occupational: 5,
  physical: 7,
  social: 4,
  intellectual: 8,
  spiritual: 5,
};

export type RadarPoint = {
  x: number;
  y: number;
};

export type RadarLabelPlacement = {
  x: number;
  y: number;
};

export type RadarLabelChip = RadarLabelPlacement & {
  label: string;
  value: number;
  chipWidth: number;
  chipHeight: number;
  chipX: number;
  chipY: number;
};

const DIMENSION_COUNT = LUCA_WELLNESS_DIMENSIONS.length;

export function dimensionToAngle(index: number, count = DIMENSION_COUNT) {
  return (Math.PI * 2 * index) / count - Math.PI / 2;
}

export function valueToRadius(
  value: number,
  maxRadius = WELLNESS_RADAR_MAX_RADIUS,
) {
  const clamped = Math.min(
    WELLNESS_RADAR_MAX,
    Math.max(WELLNESS_RADAR_MIN, value),
  );
  const normalized =
    (clamped - WELLNESS_RADAR_MIN) / (WELLNESS_RADAR_MAX - WELLNESS_RADAR_MIN);

  return normalized * maxRadius;
}

export function polarToCartesian(
  angle: number,
  radius: number,
  centerX = WELLNESS_RADAR_CENTER_X,
  centerY = WELLNESS_RADAR_CENTER_Y,
) {
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
}

export function getRadarPoints(scores: WellnessScores): RadarPoint[] {
  return LUCA_WELLNESS_DIMENSIONS.map((dimension, index) => {
    const angle = dimensionToAngle(index);
    const radius = valueToRadius(scores[dimension.id]);

    return polarToCartesian(angle, radius);
  });
}

export function pointsToPolygonString(points: RadarPoint[]) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

export function getRadarLabelPlacement(index: number): RadarLabelPlacement {
  const angle = dimensionToAngle(index);
  const labelRadius = WELLNESS_RADAR_MAX_RADIUS + WELLNESS_RADAR_LABEL_OFFSET;
  return polarToCartesian(angle, labelRadius);
}

function labelChipWidth(label: string) {
  return (
    label.length * WELLNESS_RADAR_LABEL_CHAR_WIDTH +
    WELLNESS_RADAR_LABEL_CHIP_PADDING_X * 2
  );
}

export function getRadarLabelChips(scores: WellnessScores): RadarLabelChip[] {
  return LUCA_WELLNESS_DIMENSIONS.map((dimension, index) => {
    const placement = getRadarLabelPlacement(index);
    const value = scores[dimension.id];
    const chipWidth = labelChipWidth(dimension.label);
    const chipHeight =
      WELLNESS_RADAR_LABEL_CHIP_PADDING_Y * 2 +
      WELLNESS_RADAR_LABEL_LINE_HEIGHT * 2;

    return {
      ...placement,
      label: dimension.label,
      value,
      chipWidth,
      chipHeight,
      chipX: placement.x - chipWidth / 2,
      chipY: placement.y - chipHeight / 2,
    };
  });
}

export function formatWellnessRadarSummary(scores: WellnessScores) {
  return LUCA_WELLNESS_DIMENSIONS.map(
    (dimension) =>
      `${dimension.label} ${scores[dimension.id]} of ${WELLNESS_RADAR_MAX}`,
  ).join(", ");
}
