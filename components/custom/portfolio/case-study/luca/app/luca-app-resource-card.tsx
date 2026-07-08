import Image from "next/image";

import { RESPONSIVE } from "@/lib/constants";
import type { LucaAppResource } from "@/lib/portfolio/case-studies/luca-app-resources";
import { cn } from "@/lib/utils";

type LucaAppResourceCardProps = {
  resource: LucaAppResource;
  onSelect: (resource: LucaAppResource) => void;
};

export function LucaAppResourceCard({
  resource,
  onSelect,
}: LucaAppResourceCardProps) {
  return (
    <button
      type="button"
      aria-label={`Open ${resource.title}`}
      onClick={() => {
        onSelect(resource);
      }}
      className={cn(
        RESPONSIVE.caseStudyLucaAppResourceCard,
        RESPONSIVE.caseStudyPrototypeInteractive,
      )}
    >
      <div className={cn(RESPONSIVE.caseStudyLucaAppResourceCardArt, "relative")}>
        <Image
          src={resource.artworkSrc}
          alt={resource.artworkAlt}
          fill
          sizes="240px"
          className="object-cover"
        />
      </div>
      <div className={RESPONSIVE.caseStudyLucaAppResourceCardBody}>
        <h2 className={RESPONSIVE.caseStudyLucaAppResourceCardTitle}>
          {resource.title}
        </h2>
        <p className={RESPONSIVE.caseStudyLucaAppResourceCardDescription}>
          {resource.description}
        </p>
      </div>
    </button>
  );
}
