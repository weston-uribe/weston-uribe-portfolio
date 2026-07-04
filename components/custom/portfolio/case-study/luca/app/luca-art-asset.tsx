import Image from "next/image";

import {
  getApprovedLucaAsset,
  type LucaAssetFit,
  type LucaAssetId,
} from "@/lib/portfolio/case-studies/luca-assets";
import { cn } from "@/lib/utils";

const FIT_CLASSES: Record<LucaAssetFit, string> = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
  intrinsic: "object-contain",
};

const POSITION_CLASSES: Record<string, string> = {
  center: "object-center",
  right: "object-right",
  "bottom-right": "object-right object-bottom",
  "[center_40%]": "object-[center_40%]",
};

type LucaArtAssetProps = {
  assetId: LucaAssetId;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  decorative?: boolean;
};

export function LucaArtAsset({
  assetId,
  className,
  priority,
  sizes = "320px",
  fill = false,
  decorative = false,
}: LucaArtAssetProps) {
  const asset = getApprovedLucaAsset(assetId);

  if (asset.src === "__inline-svg__") {
    return null;
  }

  const fitClass = FIT_CLASSES[asset.recommendedFit];
  const positionClass = asset.recommendedPosition
    ? POSITION_CLASSES[asset.recommendedPosition] ?? "object-center"
    : "object-center";

  const imageClassName = cn(
    fitClass,
    positionClass,
    fill && "size-full",
    className,
  );

  if (fill) {
    return (
      <Image
        src={asset.src}
        alt={decorative ? "" : asset.alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized={asset.unoptimized}
        className={imageClassName}
        aria-hidden={decorative ? true : undefined}
      />
    );
  }

  if (!asset.width || !asset.height) {
    return null;
  }

  return (
    <Image
      src={asset.src}
      alt={decorative ? "" : asset.alt}
      width={asset.width}
      height={asset.height}
      sizes={sizes}
      priority={priority}
      unoptimized={asset.unoptimized}
      className={cn("block aspect-square size-full", imageClassName, className)}
      aria-hidden={decorative ? true : undefined}
    />
  );
}
