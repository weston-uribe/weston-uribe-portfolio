import { cn } from "@/lib/utils";

const VIEW_BOX = "0 0 100 100";

/**
 * Flat, stylized white "L" inside the teal circle.
 * Rounded top-left corner of the stem and rounded bottom-right corner of the
 * base; all other corners sharp. Even 16-unit stroke thickness on both arms.
 */
const L_FILL_PATH =
  "M34 30 " +
  "A4 4 0 0 1 38 26 " +
  "L46 26 " +
  "A4 4 0 0 1 50 30 " +
  "L50 58 " +
  "L70 58 " +
  "A4 4 0 0 1 74 62 " +
  "L74 70 " +
  "A4 4 0 0 1 70 74 " +
  "L34 74 " +
  "Z";

type LucaLogoMarkProps = {
  className?: string;
};

/**
 * Reusable flat Luca app mark: solid teal circle with a clean white L.
 * No shadows, gradients, borders, gloss, or 3D effects. Renders 1:1 so it is
 * never distorted regardless of the container aspect ratio.
 */
export function LucaLogoMark({ className }: LucaLogoMarkProps) {
  return (
    <svg
      viewBox={VIEW_BOX}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className={cn("block aspect-square", className)}
    >
      <circle cx="50" cy="50" r="50" className="fill-portfolio-kg-teal" />
      <path d={L_FILL_PATH} fill="white" />
    </svg>
  );
}
