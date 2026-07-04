import { RESPONSIVE } from "@/lib/constants";
import { LUCA_APP_MATCH } from "@/lib/portfolio/case-studies/luca-app";
import { cn } from "@/lib/utils";

import { LucaAppBackButton } from "../luca-app-back-button";

type LucaAppMatchScreenProps = {
  onBack: () => void;
};

export function LucaAppMatchScreen({ onBack }: LucaAppMatchScreenProps) {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyLucaAppScrollContent,
        RESPONSIVE.caseStudyLucaAppPageInsetTop,
      )}
      aria-label={LUCA_APP_MATCH.title}
    >
      <div className={RESPONSIVE.caseStudyLucaAppContentPaddingTight}>
        <div className={RESPONSIVE.caseStudyLucaAppBackButtonAlign}>
          <LucaAppBackButton onClick={onBack} />
        </div>
      </div>
    </div>
  );
}
