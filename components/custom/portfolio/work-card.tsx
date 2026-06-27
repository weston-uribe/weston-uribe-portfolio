import Link from "next/link";

import { RESPONSIVE } from "@/lib/constants";
import type { WorkItem } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

type WorkCardProps = {
  item: WorkItem;
};

const ACTIVE_CHIP_STYLE = "bg-chart-4/20 text-chart-4/90";
const INACTIVE_CHIP_STYLE = "bg-white/8 text-white/55";

function WorkCardContent({ item }: WorkCardProps) {
  const isActive = item.status === "active";

  return (
    <div className="relative z-10 flex h-full flex-col p-5">
      <div className="flex flex-col gap-1.5">
        <span className="text-base font-medium text-white/55">
          {item.contextLabel}
        </span>
        <h3 className="text-pretty text-xl font-semibold leading-snug text-white sm:text-2xl">
          {item.title}
        </h3>
      </div>

      {isActive ? (
        <div aria-hidden="true" className="min-h-0 flex-1" />
      ) : (
        <div className="flex min-h-0 flex-1 items-center justify-center px-4">
          <span className="text-center text-base font-medium tracking-wide text-white/30">
            Coming Soon
          </span>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <p className="text-base leading-relaxed text-white/60">
          {item.description}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                RESPONSIVE.workCardChip,
                isActive ? ACTIVE_CHIP_STYLE : INACTIVE_CHIP_STYLE
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const cardShellClasses = cn(
  RESPONSIVE.workCard,
  "relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/[0.06]"
);

const activeCardClasses = cn(
  cardShellClasses,
  "block transition-[background-color] duration-300",
  "hover:bg-white/[0.045] hover:ring-white/[0.08]",
  "focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
);

const inactiveCardClasses = cn(cardShellClasses, "opacity-80");

export function WorkCard({ item }: WorkCardProps) {
  if (item.status === "active" && item.href) {
    return (
      <Link href={item.href} className={activeCardClasses}>
        <WorkCardContent item={item} />
      </Link>
    );
  }

  return (
    <div role="group" aria-disabled="true" tabIndex={-1} className={inactiveCardClasses}>
      <WorkCardContent item={item} />
    </div>
  );
}
