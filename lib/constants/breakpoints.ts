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
  caseStudyHeroHeading:
    "max-w-4xl text-3xl leading-[1.12] font-semibold tracking-tight text-pretty text-portfolio-hero-heading sm:text-4xl md:text-[2.75rem] lg:text-5xl",
  caseStudyHeroSubhead:
    "max-w-3xl text-base text-foreground/80 text-pretty lg:text-lg lg:leading-relaxed",
  caseStudyHeroGrid:
    "grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16",
  caseStudyHeroTextColumn: "flex min-w-0 flex-col",
  caseStudyHeroIllustrationColumn:
    "flex items-center justify-center lg:justify-end",
  caseStudyHeroIllustrationShell:
    "relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl",
  caseStudyHeroIllustrationImage:
    "relative z-10 h-auto w-full object-contain",
  caseStudyMetaRow: "text-sm text-muted-foreground sm:text-base",
  caseStudyMetaGrid: "grid gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-6",
  caseStudyMetaCard:
    "rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 ring-1 ring-white/[0.06] sm:p-5",
  caseStudyMetaLabel:
    "text-xs font-medium tracking-wide text-muted-foreground uppercase",
  caseStudyMetaValue: "mt-1.5 text-sm text-foreground/90 sm:text-base",
  caseStudyProse:
    "text-base leading-relaxed text-foreground/85 lg:text-lg lg:leading-relaxed",
  caseStudyProseNarrow: "max-w-3xl",
  caseStudyProseColumn: "mx-auto w-full max-w-3xl",
  caseStudyChip:
    "rounded-full px-2.5 py-0.5 text-sm font-medium backdrop-blur-sm sm:text-base",
  caseStudyAnnotationGrid: "grid gap-4 md:grid-cols-2",
  caseStudyScreenshotFrame:
    "overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/[0.06]",
  caseStudyScreenshotShell: "mx-auto w-full max-w-4xl",
  caseStudyScreenshotImage: "block h-auto w-full object-contain object-top",
  caseStudyScreenshotPlaceholder:
    "flex min-h-[16rem] flex-col items-center justify-center gap-3 bg-white/[0.02] p-8 sm:min-h-[20rem] md:min-h-[24rem]",
  caseStudyAnnotationCard:
    "rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/[0.06] sm:p-5",
  caseStudyInsightCard:
    "rounded-3xl bg-gradient-to-br from-portfolio-kg-teal/10 via-white/[0.03] to-white/[0.02] p-6 ring-1 ring-portfolio-kg-teal/20 sm:p-8",
  caseStudyFramingCard:
    "rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 ring-1 ring-white/[0.06] sm:p-6",
  caseStudyFramingNote:
    "border-l-2 border-portfolio-kg-teal/25 pl-4 text-sm italic leading-relaxed text-muted-foreground sm:pl-5 sm:text-base",
  caseStudyInDepthTransition:
    "flex flex-col gap-2 sm:gap-3",
  caseStudyInDepthSubtitle:
    "text-base leading-relaxed text-muted-foreground lg:text-lg",
  caseStudyAtAGlanceCard:
    "rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 ring-1 ring-white/[0.06] sm:p-8 md:p-10",
  caseStudyAtAGlanceStoryGrid: "grid gap-4 md:grid-cols-2 md:gap-5",
  caseStudyAtAGlanceStoryCard:
    "flex flex-col gap-2 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/[0.06] sm:p-5",
  caseStudyAtAGlanceStoryTitle: "text-sm font-semibold text-foreground sm:text-base",
  caseStudyAtAGlanceCompareStack: "flex flex-col gap-8 sm:gap-10",
  caseStudyAtAGlanceCompareBlock: "flex flex-col gap-3",
  caseStudyAtAGlanceCompareLabel:
    "text-lg font-semibold tracking-tight text-portfolio-kg-teal sm:text-xl",
  caseStudyAtAGlanceBeforePreviewShell: "mx-auto w-full max-w-2xl",
  caseStudyPhaseBand:
    "border-t border-white/[0.06] bg-white/[0.02] py-10 sm:py-12 md:py-14 lg:py-16",
  caseStudySectionSurfaceDark:
    "border-t border-white/[0.06] bg-background py-10 sm:py-12 md:py-14 lg:py-16",
  caseStudySectionSurfaceMuted:
    "border-t border-white/[0.06] bg-white/[0.02] py-10 sm:py-12 md:py-14 lg:py-16",
  caseStudyPhaseBandFuture:
    "border-t border-dashed border-portfolio-kg-teal/25 bg-gradient-to-b from-portfolio-kg-teal/10 via-white/[0.02] to-transparent py-10 sm:py-12 md:py-14 lg:py-16",
  caseStudyPhaseHeader: "flex flex-col gap-1",
  caseStudyPhaseNumber:
    "text-xs font-semibold tracking-[0.2em] text-portfolio-kg-teal uppercase",
  caseStudyPhaseTitle: "text-lg font-medium text-foreground/90 sm:text-xl",
  caseStudyPhaseContent: "flex flex-col gap-8 sm:gap-10 md:gap-12",
  caseStudyComingSoonCard:
    "rounded-3xl border border-dashed border-portfolio-kg-teal/30 bg-gradient-to-br from-portfolio-kg-teal/10 via-white/[0.03] to-white/[0.02] p-6 ring-1 ring-portfolio-kg-teal/15 sm:p-8",
  caseStudyComingSoonBadge:
    "inline-flex w-fit rounded-full border border-portfolio-kg-teal/30 bg-portfolio-kg-teal/15 px-2.5 py-0.5 text-xs font-medium tracking-wide text-portfolio-kg-teal uppercase",
  caseStudyTransitionDivider:
    "border-t border-dashed border-white/[0.12] pt-10 sm:pt-12",
  caseStudyNextTeaser:
    "rounded-2xl border border-dashed border-white/[0.1] bg-white/[0.02] px-5 py-4 text-center sm:px-6 sm:py-5",
  caseStudyPrototypeFrame:
    "overflow-hidden rounded-3xl bg-card ring-1 ring-white/[0.08]",
  caseStudyPrototypeShell:
    "relative flex min-h-[32rem] min-w-0 overflow-hidden",
  caseStudyPrototypeContentColumn:
    "relative flex min-h-0 min-w-0 flex-1 flex-col",
  caseStudyPrototypeHeader:
    "border-b border-white/[0.08] px-4 py-4 sm:px-6 sm:py-5",
  caseStudyPrototypeSidebar:
    "group/sidebar flex shrink-0 flex-col self-stretch border-white/[0.08] bg-card transition-[width] duration-200 ease-out border-r",
  caseStudyPrototypeSidebarBrand:
    "flex shrink-0 items-center justify-center gap-2 py-2 lg:py-3",
  caseStudyPrototypeSidebarBrandCollapsed:
    "px-2 lg:px-3",
  caseStudyPrototypeSidebarBrandExpanded:
    "justify-between border-b border-white/[0.08] pl-3 pr-2 lg:pl-4 lg:pr-2",
  caseStudyPrototypeSidebarLogo:
    "size-7 shrink-0 sm:size-8",
  caseStudyPrototypeSidebarWordmark:
    "text-base font-semibold text-portfolio-kg-teal sm:text-lg",
  caseStudyPrototypeSidebarToggle:
    "shrink-0 text-muted-foreground hover:bg-white/[0.04] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 aria-expanded:bg-transparent dark:hover:bg-muted/50",
  caseStudyPrototypeSidebarExpanded: "w-full lg:w-48",
  caseStudyPrototypeSidebarExpandedWidth: "w-48",
  caseStudyPrototypeSidebarCollapsedWidth: "w-12",
  caseStudyPrototypeSidebarCollapsed:
    "flex w-12 overflow-visible",
  caseStudyPrototypeSidebarMobileOpen:
    "w-12 lg:w-48 lg:static",
  caseStudyPrototypeSidebarNav:
    "flex flex-1 flex-col gap-1 overflow-y-auto p-2 lg:py-3 lg:pr-2 lg:pl-1",
  caseStudyPrototypeSidebarNavCollapsed:
    "flex flex-1 flex-col gap-1 overflow-y-auto px-1.5 py-2",
  caseStudyPrototypeSidebarItemExpanded:
    "mx-2 flex w-auto items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
  caseStudyPrototypeSidebarItemCollapsed:
    "mx-auto flex size-9 shrink-0 items-center justify-center rounded-lg p-0 text-sm font-medium transition-colors",
  caseStudyPrototypeSidebarItemActive:
    "bg-portfolio-kg-teal/15 text-portfolio-kg-teal ring-1 ring-portfolio-kg-teal/30",
  caseStudyPrototypeSidebarItemInactive:
    "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground",
  caseStudyPrototypeInteractive: "cursor-pointer",
  caseStudyPrototypeSidebarLabelVisible: "truncate",
  caseStudyPrototypeMain:
    "flex min-w-0 flex-1 flex-col gap-6 p-4 sm:p-6 lg:min-h-0",
  caseStudyPrototypeFilterBackdrop:
    "absolute inset-0 z-30 bg-black/20 supports-backdrop-filter:backdrop-blur-[1px]",
  caseStudyPrototypeFilterPanel:
    "absolute inset-y-0 right-0 z-40 flex w-[66vw] min-w-[12rem] max-w-md flex-col border-l border-white/[0.08] bg-card shadow-xl lg:w-full",
  caseStudyPrototypeFilterChipActive:
    "border border-portfolio-kg-teal/30 bg-portfolio-kg-teal/15 text-portfolio-kg-teal ring-0",
  caseStudyPrototypeFilterSelect:
    "h-10 w-full rounded-lg border border-white/[0.1] bg-background py-2 pl-3 pr-3 text-sm text-foreground",
  caseStudyPrototypePersonaGrid: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
  caseStudyPrototypePersonaCard:
    "flex flex-col gap-3 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/[0.06] sm:p-5",
  caseStudyPrototypeMetricsRow:
    "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
  caseStudyPrototypeMetricItem: "flex flex-col gap-1",
  caseStudyPrototypeMetricLabel:
    "text-xs font-medium tracking-wide text-muted-foreground uppercase",
  caseStudyPrototypeSectionLabel:
    "text-sm font-semibold tracking-wide text-foreground uppercase",
  caseStudyPrototypeMetricValue: "text-base font-medium text-foreground",
  caseStudyPrototypeThemeRow:
    "flex items-center gap-3 text-sm",
  caseStudyPrototypeThemeBar: "h-2 rounded-full bg-chart-4/70",
  caseStudyPrototypeTableWrap: "min-w-0 overflow-x-auto rounded-xl ring-1 ring-white/[0.06]",
  caseStudyPrototypeDashboardHeader:
    "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
  caseStudyPrototypeEmptyState:
    "flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.02] px-6 py-12 text-center",
} as const;
