import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NODES = [
  { id: "objective", label: "Objective", x: 80, y: 120 },
  { id: "planner", label: "Planner", x: 240, y: 60 },
  { id: "implementer", label: "Implementer", x: 400, y: 120 },
  { id: "isaac", label: "Isaac + ROS", x: 560, y: 60 },
  { id: "evidence", label: "Evidence", x: 720, y: 120 },
  { id: "human", label: "Human escalation", x: 400, y: 220 },
] as const;

export function CaseStudyNlRoboticsFactoryVisual() {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyHeroIllustrationShell,
        "flex items-center justify-center p-4 sm:p-6",
      )}
    >
      <svg
        viewBox="0 0 800 280"
        width="800"
        height="280"
        role="img"
        aria-labelledby="nl-robotics-factory-loop-title"
        className="h-auto w-full max-w-2xl text-foreground"
      >
        <title id="nl-robotics-factory-loop-title">
          Capability factory loop from objective through planner, implementer,
          Isaac and ROS, and evidence, returning to planner or human escalation
        </title>

        <g aria-hidden="true" className="stroke-border">
          <defs>
            <marker
              id="nl-robotics-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" className="fill-muted-foreground" />
            </marker>
          </defs>

          <path
            d="M 140 120 H 190 M 310 85 L 360 105 M 470 120 H 520 M 640 85 L 690 105"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-border"
            markerEnd="url(#nl-robotics-arrow)"
          />
          <path
            d="M 720 145 Q 720 200 480 220 H 470"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-border"
            markerEnd="url(#nl-robotics-arrow)"
          />
          <path
            d="M 240 95 Q 160 140 140 145"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-border"
            markerEnd="url(#nl-robotics-arrow)"
          />
          <path
            d="M 400 175 V 155"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-border"
            markerEnd="url(#nl-robotics-arrow)"
          />
        </g>

        {NODES.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x - 56}
              y={node.y - 22}
              width="112"
              height="44"
              rx="10"
              className="fill-card stroke-border"
              strokeWidth="1.5"
              aria-hidden="true"
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              className="fill-foreground text-[11px] font-semibold sm:text-xs"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
