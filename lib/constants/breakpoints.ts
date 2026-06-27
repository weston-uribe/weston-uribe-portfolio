/**
 * Tailwind v4 default breakpoints used across the app.
 *
 * Apply mobile-first: unprefixed classes target phones, then layer tablet
 * (md:) and desktop (lg:) overrides through RESPONSIVE / SPACING tokens.
 */

export const BREAKPOINTS = {
  /** Default — phones and small screens (< 768px) */
  mobile: "640px (sm:) — large phones; base styles apply below md",
  /** Tablets and small laptops (>= 768px) */
  tablet: "768px (md:)",
  /** Desktop layouts (>= 1024px) */
  desktop: "1024px (lg:)",
} as const;

export const RESPONSIVE = {
  sectionAnchor: "scroll-mt-[calc(var(--portfolio-nav-height)+0.5rem)]",
  sectionHeading:
    "text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl",
  heroHeading:
    "max-w-none text-3xl leading-[1.15] font-semibold tracking-tight text-pretty text-portfolio-hero-heading sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem]",
  heroSubhead:
    "max-w-xl text-base text-muted-foreground text-pretty lg:max-w-2xl lg:text-lg",
  heroGrid:
    "grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16",
  heroTextColumn: "flex min-w-0 flex-col",
  heroAvatarColumn: "flex items-center justify-center lg:justify-end",
  heroPortraitShell:
    "relative mx-auto w-full max-w-[11rem] sm:max-w-[13rem] md:max-w-[15rem] lg:max-w-[17.5rem] xl:max-w-[20rem]",
  heroPortraitImage: "relative z-10 h-auto w-full object-contain object-bottom",
  navAvatar: "size-9 shrink-0 rounded-full object-cover object-center",
  aboutGrid: "grid gap-10 sm:gap-12 lg:grid-cols-5 lg:items-start lg:gap-16",
  aboutIntroColumn: "flex flex-col lg:col-span-2",
  aboutBodyText: "text-lg",
  aboutIllustrationShell:
    "relative mx-auto mt-6 flex w-full justify-center sm:mt-8 lg:mt-8",
  aboutIllustrationImage:
    "h-auto w-full max-w-[10rem] max-h-[9rem] object-contain sm:max-w-[11rem] sm:max-h-[10rem] lg:max-w-[12rem] lg:max-h-[11rem]",
  ctaRow:
    "flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4",
  ctaButton: "h-11 w-full px-6 text-base sm:w-auto",
  horizontalScrollBleed: "-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0",
  workCarouselViewport: "overflow-visible py-4",
  workTrack:
    "flex flex-nowrap snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-visible scroll-pl-1 scroll-pr-1 px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  workCardSlide: "shrink-0 snap-start p-2",
  workCard:
    "relative h-[26rem] w-64 sm:h-[28rem] sm:w-72",
  workCardChip:
    "rounded-full px-2.5 py-0.5 text-base font-medium backdrop-blur-sm",
  contactActionGrid: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
  contactActionCard:
    "flex min-h-[7.5rem] flex-col gap-3 rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/[0.06]",
  contactActionHeader:
    "flex shrink-0 items-start justify-between gap-3",
  contactActionSubtitle: "shrink-0 text-base text-muted-foreground",
  contactActionCardActive:
    "transition-[background-color,box-shadow] duration-300 hover:bg-white/[0.045] hover:ring-white/[0.08] focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
  contactActionCardDisabled: "cursor-default opacity-60",
  contactLocationRow:
    "flex items-center gap-2 text-base text-muted-foreground",
  bodyText: "text-base",
  sectionDisclaimer: "text-sm italic leading-relaxed",
  uiText: "text-base",
  badgeText: "text-base",
  marqueeItemHeight: "h-12 md:h-14",
  marqueeItem: "flex shrink-0 items-center pointer-events-none",
  marqueeLogoImage: "block h-12 w-auto max-w-none shrink-0 object-contain md:h-14",
  marqueeYcBadgeImage: "block h-3.5 w-auto max-w-none shrink-0 object-contain md:h-4",
  marqueeFreedomStack: "flex flex-col justify-center gap-0.5 leading-none",
  marqueeFreedomRow: "flex items-center gap-1.5 leading-none",
  marqueeYcBadge: "flex items-center gap-1 font-sans leading-none",
  marqueeTrack: "logo-marquee-track flex w-max items-center",
  marqueeGroup: "logo-marquee-group flex shrink-0 items-center",
} as const;
