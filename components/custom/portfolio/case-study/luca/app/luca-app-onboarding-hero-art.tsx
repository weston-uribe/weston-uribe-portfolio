import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_ONBOARDING } from "@/lib/portfolio/case-studies/luca-app";
import { cn } from "@/lib/utils";

import { LucaArtAsset } from "./luca-art-asset";
import { LucaAppPrimaryAction } from "./luca-app-primary-action";

/**
 * Full-width hero stage: CTA uses the shared text rail; fox hugs the screen
 * edge (right-0) without negative offsets that cause horizontal scroll.
 */
export function LucaAppOnboardingHeroArt({
  onStartAssessment,
}: {
  onStartAssessment: () => void;
}) {
  return (
    <div className={RESPONSIVE.caseStudyLucaAppHeroArtZone}>
      <div
        className={cn(
          RESPONSIVE.caseStudyLucaAppHeroArtFigure,
          RESPONSIVE.caseStudyLucaAppHeroFoxFigureEdge,
        )}
      >
        <LucaArtAsset
          assetId="character-fox-garden-welcome-v01"
          fill
          decorative
          sizes="176px"
        />
      </div>
      <div className={RESPONSIVE.caseStudyLucaAppHeroArtCta}>
        <LucaAppPrimaryAction onClick={onStartAssessment}>
          {LUCA_APP_ONBOARDING.secondaryCta}
        </LucaAppPrimaryAction>
      </div>
    </div>
  );
}
