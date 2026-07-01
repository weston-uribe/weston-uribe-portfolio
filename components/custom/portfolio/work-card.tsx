import Image from "next/image";
import Link from "next/link";

import { RESPONSIVE } from "@/lib/constants";
import type { WorkItem } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

type WorkCardProps = {
  item: WorkItem;
};

type WorkCardPreviewProps = {
  image: NonNullable<WorkItem["previewImage"]>;
};

const ACTIVE_CHIP_STYLE = "bg-chart-4/20 text-chart-4/90";
const INACTIVE_CHIP_STYLE = "bg-white/8 text-white/55";

function WorkCardPreview({ image }: WorkCardPreviewProps) {
  return (
    <div className="relative my-3 flex min-h-0 w-full flex-1 flex-col items-center justify-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-20"
      >
        <Image
          src={image.assetPath}
          alt=""
          fill
          sizes="(max-width: 640px) 216px, 248px"
          className="scale-110 object-cover object-top blur-2xl"
        />
      </div>

      <div className="relative w-full overflow-hidden rounded-xl bg-white/[0.02] shadow-lg shadow-black/40 ring-1 ring-white/[0.08]">
        <div
          aria-hidden="true"
          className="flex h-5 items-center gap-1 border-b border-white/[0.08] px-2.5"
        >
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/15" />
          <span className="size-1.5 rounded-full bg-white/10" />
        </div>

        <div className="relative aspect-[2/1] w-full overflow-hidden">
          <Image
            src={image.assetPath}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 216px, 248px"
            className="object-cover object-top"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background/90 via-background/40 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}

function WorkCardContent({ item }: WorkCardProps) {
  const isActive = item.status === "active";
  const hasPreview = isActive && Boolean(item.previewImage);

  return (
    <div className="relative z-10 flex h-full flex-col p-5">
      <div className="shrink-0 flex flex-col gap-1.5">
        <span className="text-base font-medium text-white/55">
          {item.contextLabel}
        </span>
        <h3 className="text-pretty text-xl font-semibold leading-snug text-white sm:text-2xl">
          {item.title}
        </h3>
      </div>

      {hasPreview && item.previewImage ? (
        <WorkCardPreview image={item.previewImage} />
      ) : isActive ? (
        <div aria-hidden="true" className="min-h-0 flex-1" />
      ) : (
        <div className="flex min-h-0 flex-1 items-center justify-center px-4">
          <span className="text-center text-base font-medium tracking-wide text-white/30">
            Coming Soon
          </span>
        </div>
      )}

      <div className="shrink-0 flex flex-col gap-3">
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
  "group relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/[0.06]"
);

const activeCardClasses = cn(
  cardShellClasses,
  "block transition-[background-color,box-shadow] duration-300",
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
