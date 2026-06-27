import { RESPONSIVE, SPACING } from "@/lib/constants";
import {
  buildMarqueeGroupItems,
  Y_COMBINATOR_LOGO,
  type LogoAffiliation,
} from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

type LogoImageProps = {
  affiliation: LogoAffiliation;
};

function LogoImage({ affiliation }: LogoImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local SVG marquee assets avoid next/image gray flash during transform animation
    <img
      src={affiliation.assetPath}
      alt=""
      width={affiliation.assetWidth ?? 248}
      height={affiliation.assetHeight ?? 119}
      decoding="async"
      aria-hidden
      className={affiliation.logoImageClasses ?? RESPONSIVE.marqueeLogoImage}
    />
  );
}

function YCombinatorBadge() {
  return (
    <span className={cn(RESPONSIVE.marqueeYcBadge, RESPONSIVE.uiText, "font-medium text-muted-foreground")}>
      <span aria-hidden>A</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={Y_COMBINATOR_LOGO.assetPath}
        alt=""
        width={Y_COMBINATOR_LOGO.assetWidth}
        height={Y_COMBINATOR_LOGO.assetHeight}
        decoding="async"
        aria-hidden
        className={RESPONSIVE.marqueeYcBadgeImage}
      />
      <span aria-hidden>Company</span>
      <span className="sr-only">A Y Combinator Company</span>
    </span>
  );
}

type StandardLogoItemProps = {
  affiliation: LogoAffiliation;
};

function StandardLogoItem({ affiliation }: StandardLogoItemProps) {
  if (affiliation.hasAsset) {
    return (
      <div className={cn(RESPONSIVE.marqueeItem, RESPONSIVE.marqueeItemHeight)}>
        <LogoImage affiliation={affiliation} />
        <span className="sr-only">{affiliation.name}</span>
      </div>
    );
  }

  return (
    <div className={cn(RESPONSIVE.marqueeItem, RESPONSIVE.marqueeItemHeight)}>
      <span
        className={cn(
          RESPONSIVE.uiText,
          "font-semibold whitespace-nowrap",
          affiliation.accentClasses
        )}
      >
        {affiliation.name}
      </span>
    </div>
  );
}

type FreedomRoboticsItemProps = {
  affiliation: LogoAffiliation;
};

function FreedomRoboticsItem({ affiliation }: FreedomRoboticsItemProps) {
  return (
    <div
      className={cn(
        RESPONSIVE.marqueeItem,
        RESPONSIVE.marqueeItemHeight,
        RESPONSIVE.marqueeFreedomStack
      )}
    >
      <div className={RESPONSIVE.marqueeFreedomRow}>
        {affiliation.hasAsset ? (
          <LogoImage affiliation={affiliation} />
        ) : (
          <span
            aria-hidden
            className={cn("text-sm font-bold", affiliation.accentClasses)}
          >
            {affiliation.monogram}
          </span>
        )}
        <span
          className={cn(
            RESPONSIVE.uiText,
            "font-medium whitespace-nowrap leading-none",
            affiliation.accentClasses
          )}
        >
          {affiliation.name}
        </span>
      </div>
      <YCombinatorBadge />
    </div>
  );
}

type LogoMarqueeItemProps = {
  affiliation: LogoAffiliation;
};

function LogoMarqueeItem({ affiliation }: LogoMarqueeItemProps) {
  if (affiliation.variant === "freedom-robotics") {
    return <FreedomRoboticsItem affiliation={affiliation} />;
  }

  return <StandardLogoItem affiliation={affiliation} />;
}

type LogoMarqueeGroupProps = {
  items: LogoAffiliation[];
  duplicate?: boolean;
};

function LogoMarqueeGroup({ items, duplicate = false }: LogoMarqueeGroupProps) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className={cn(
        RESPONSIVE.marqueeGroup,
        SPACING.marqueeItemGap,
        SPACING.marqueeGroupEnd
      )}
    >
      {items.map((affiliation, index) => (
        <LogoMarqueeItem
          key={`${duplicate ? "dup-" : ""}${affiliation.id}-${index}`}
          affiliation={affiliation}
        />
      ))}
    </div>
  );
}

export function LogoMarquee() {
  const groupItems = buildMarqueeGroupItems();

  return (
    <section
      aria-label="Education and work affiliations"
      className={SPACING.marqueeSectionY}
    >
      <div className="logo-marquee-viewport w-full overflow-hidden">
        <div className={RESPONSIVE.marqueeTrack}>
          <LogoMarqueeGroup items={groupItems} />
          <LogoMarqueeGroup items={groupItems} duplicate />
        </div>
      </div>
    </section>
  );
}
