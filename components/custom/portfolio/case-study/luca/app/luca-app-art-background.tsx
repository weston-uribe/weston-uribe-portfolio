import type { ReactNode } from "react";

import { RESPONSIVE } from "@/lib/constants";
import type { LucaAssetId } from "@/lib/portfolio/case-studies/luca-assets";
import { cn } from "@/lib/utils";

import { LucaArtAsset } from "./luca-art-asset";

type LucaAppArtBackgroundProps = {
  assetId: LucaAssetId;
  children?: ReactNode;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function LucaAppArtBackground({
  assetId,
  children,
  className,
  priority,
  sizes,
}: LucaAppArtBackgroundProps) {
  return (
    <div className={cn(RESPONSIVE.caseStudyLucaAppArtBackground, className)}>
      <LucaArtAsset
        assetId={assetId}
        fill
        priority={priority}
        sizes={sizes}
        decorative
      />
      {children}
    </div>
  );
}
