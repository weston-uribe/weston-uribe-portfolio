import { RESPONSIVE } from "@/lib/constants";
import { KINTERRA_TRI_SELF_ILLUSTRATION } from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

type CaseStudyKinterraTriSelfVisualProps = {
  className?: string;
  muted?: boolean;
};

export function CaseStudyKinterraTriSelfVisual({
  className,
  muted = false,
}: CaseStudyKinterraTriSelfVisualProps) {
  const { assetPath, alt, assetWidth, assetHeight } =
    KINTERRA_TRI_SELF_ILLUSTRATION;

  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyHeroIllustrationShell,
        "flex items-center justify-center p-4 sm:p-6",
        muted && "opacity-60 saturate-50",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- shared tri-self SVG asset */}
      <img
        src={assetPath}
        alt={alt}
        width={assetWidth}
        height={assetHeight}
        decoding="async"
        className="h-auto w-full max-w-sm"
      />
    </div>
  );
}
