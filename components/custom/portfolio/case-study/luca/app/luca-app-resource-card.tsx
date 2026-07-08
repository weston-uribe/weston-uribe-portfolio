import Image from "next/image";

import { RESPONSIVE } from "@/lib/constants";
import type { LucaAppResource } from "@/lib/portfolio/case-studies/luca-app-resources";
import { cn } from "@/lib/utils";

type LucaAppResourceCardProps = {
  resource: LucaAppResource;
};

export function LucaAppResourceCard({ resource }: LucaAppResourceCardProps) {
  return (
    <article
      aria-label={resource.title}
      className={cn(
        RESPONSIVE.caseStudyLucaAppResourceCard,
        RESPONSIVE.caseStudyPrototypeInteractive,
        "select-none",
      )}
    >
      <div
        className={cn(RESPONSIVE.caseStudyLucaAppResourceCardArt, "relative")}
        aria-hidden="true"
      >
        <Image
          src={resource.artworkSrc}
          alt=""
          fill
          sizes="240px"
          draggable={false}
          className="pointer-events-none object-cover select-none"
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
    </article>
  );
}
