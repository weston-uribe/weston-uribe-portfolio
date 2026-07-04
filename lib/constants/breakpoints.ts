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
  profileAvatarImage: "object-cover object-[center_30%]",
  navAvatar: "size-9 shrink-0 rounded-full",
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
  caseStudyPhonePrototypeWrap: "flex justify-center overflow-visible",
  caseStudyPhonePrototypeLaunchCtaWrap:
    "flex flex-col items-start gap-4 md:hidden",
  caseStudyPhonePrototypeInlineWrap: "hidden md:block",
  caseStudyLucaPrototypePreviewButton:
    "w-full max-w-xs overflow-hidden rounded-3xl ring-1 ring-portfolio-phone-shell-border transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
  caseStudyLucaPrototypePreviewImage: "block h-auto w-full",
  caseStudyLucaPrototypeOverlay:
    "fixed inset-0 z-[60] flex min-h-0 flex-col bg-background",
  caseStudyLucaPrototypeOverlayHeader:
    "flex shrink-0 items-center px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2",
  caseStudyLucaPrototypeOverlayExit:
    "inline-flex min-h-11 items-center gap-1 rounded-md px-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
  caseStudyLucaPrototypeOverlayExitIcon: "size-4 shrink-0",
  caseStudyLucaPrototypeOverlayStage:
    "flex min-h-0 flex-1 items-center justify-center overflow-hidden px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
  caseStudyPhoneFrame:
    "relative w-full max-w-64 overflow-visible rounded-3xl border border-portfolio-phone-shell-border bg-zinc-950 p-2 sm:max-w-72 md:max-w-80",
  caseStudyPhoneFrameOverlay:
    "relative w-[min(90vw,400px,calc((100dvh-6.5rem)*9/19.5))] overflow-visible rounded-3xl border border-portfolio-phone-shell-border bg-zinc-950 p-2",
  caseStudyPhonePowerButton:
    "pointer-events-none absolute top-[18%] right-0 z-40 h-9 w-1 translate-x-full rounded-r-sm bg-zinc-900 ring-1 ring-zinc-950",
  caseStudyPhoneVolumeButton:
    "pointer-events-none absolute top-[27%] right-0 z-40 h-[4.5rem] w-1 translate-x-full rounded-r-sm bg-zinc-900 ring-1 ring-zinc-950",
  caseStudyPhoneScreen:
    "relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-2xl",
  caseStudyPhoneStatusBar:
    "relative z-10 flex h-9 shrink-0 items-center justify-between bg-transparent px-5 pt-2.5 text-xs font-medium text-foreground/80 sm:px-6",
  caseStudyPhoneHomeWallpaper:
    "flex min-h-0 flex-1 flex-col bg-gradient-to-b from-portfolio-kg-teal/15 via-card to-card",
  caseStudyPhoneHomeWallpaperBg:
    "bg-gradient-to-b from-portfolio-kg-teal/15 via-card to-card",
  caseStudyPhoneHomeIconArea:
    "flex justify-start px-5 pb-2 pt-5",
  caseStudyPhoneHomeContent:
    "flex min-h-0 flex-1 flex-col justify-end gap-6 pb-6",
  caseStudyPhoneAppBar:
    "flex h-11 shrink-0 items-center gap-1 border-b border-white/[0.08] px-2",
  caseStudyPhoneDock: "flex shrink-0 flex-col gap-3 px-4",
  caseStudyPhoneGoogleSearch:
    "flex h-10 items-center justify-between gap-3 rounded-full bg-white/[0.08] px-4 ring-1 ring-white/[0.06]",
  caseStudyPhoneGoogleSearchActions: "flex items-center gap-3",
  caseStudyPhoneNavBar:
    "relative z-20 flex h-6 shrink-0 items-center justify-center pb-1",
  caseStudyPhoneNavBarOverlay:
    "absolute inset-x-0 bottom-0 z-30",
  caseStudyPhoneGesturePill:
    "block h-1 w-24 rounded-full bg-phone-gesture-pill sm:w-28",
  caseStudyPhoneLucaIcon:
    "size-14 shrink-0 transition-transform group-hover:scale-105",
  caseStudyPhoneLucaIconButton:
    "group h-auto flex-col gap-2 p-0 hover:bg-transparent dark:hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent",
  caseStudyPhoneLucaNotification:
    "inline-block size-4 shrink-0 rounded-full",
  caseStudyPhoneFlyingLogo:
    "pointer-events-none absolute inset-0 z-20 flex items-center justify-center",
  caseStudyPhoneAppContent:
    "relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden text-luca-app-foreground",
  caseStudyPhoneAppScene:
    "relative min-h-0 flex-1 overflow-hidden",
  caseStudyPhoneStatusBarLight:
    "relative z-10 flex h-9 shrink-0 items-center justify-between bg-transparent px-5 pt-2.5 text-xs font-medium text-luca-app-status-bar-fg sm:px-6",
  caseStudyPhoneSignalBars: "flex h-3.5 items-end gap-0.5",
  caseStudyPhoneSignalBar: "w-0.5 rounded-full",
  caseStudyPhoneBatteryWrap: "inline-flex translate-y-px items-center gap-px text-current",
  caseStudyPhoneBattery:
    "flex h-3 w-6 shrink-0 rounded-[2px] border-[0.5px] border-current p-px",
  caseStudyPhoneBatteryFill:
    "h-full min-w-0 basis-[88%] rounded-[0.5px] bg-current",
  caseStudyPhoneBatteryCap:
    "h-0.5 w-px shrink-0 rounded-r-[0.5px] bg-current",
  caseStudyLucaAppBackground:
    "bg-luca-app-background text-luca-app-foreground",
  caseStudyLucaAppSandySurface:
    "luca-app-sandy-surface text-luca-app-foreground",
  caseStudyLucaAppScene:
    "relative min-h-0 flex-1 overflow-hidden",
  caseStudyLucaAppStatusBar:
    "relative z-10 flex h-9 shrink-0 items-center justify-between bg-transparent px-[var(--luca-app-rail-x)] pt-2.5 text-xs font-medium text-luca-app-status-bar-fg sm:px-6",
  caseStudyLucaAppGesturePill:
    "block h-1 w-24 rounded-full bg-luca-app-gesture-pill sm:w-28",
  caseStudyLucaAppCaption:
    "pointer-events-none absolute inset-x-0 bottom-10 z-10 text-center text-xs font-medium tracking-wide text-luca-app-art-overlay-fg",
  caseStudyLucaAppCaptionPill:
    "inline-flex rounded-full bg-luca-app-caption-surface px-4 py-1.5 text-xs font-medium tracking-wide text-luca-app-art-overlay-fg",
  caseStudyLucaAppScreenPadding: "px-[var(--luca-app-rail-x)] py-4",
  caseStudyLucaAppPrimaryActionWrap:
    "px-[var(--luca-app-rail-x)] pb-2 pt-2",
  caseStudyLucaAppPrimaryAction:
    "h-10 w-full rounded-xl bg-luca-app-button-bg text-sm font-semibold text-luca-app-button-fg transition-all hover:scale-[1.01] hover:bg-luca-app-button-bg hover:brightness-105",
  caseStudyLucaAppScrollContent:
    "relative flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto pb-8",
  caseStudyLucaAppContentPadding:
    "flex flex-col gap-4 px-[var(--luca-app-rail-x)] pb-2 pt-3",
  caseStudyLucaAppContentPaddingTight:
    "flex flex-col gap-4 px-[var(--luca-app-rail-x)] pt-3",
  caseStudyLucaAppBackButtonAlign: "px-2",
  caseStudyLucaAppTextClearZone:
    "rounded-md bg-luca-app-background px-2 py-1",
  caseStudyLucaAppTextClearZoneHeadline:
    "rounded-md bg-luca-app-background px-0 py-1",
  caseStudyLucaAppTextClearZoneInline: "w-fit max-w-full px-1.5 py-0.5",
  caseStudyLucaAppHeadline:
    "text-lg font-semibold leading-snug tracking-tight text-luca-app-foreground",
  caseStudyLucaAppBody: "text-sm leading-relaxed text-luca-app-foreground/90",
  caseStudyLucaAppSectionLabel:
    "text-xs font-semibold uppercase tracking-wide text-luca-app-foreground/75",
  caseStudyLucaAppSectionTitle:
    "text-sm font-semibold leading-snug text-luca-app-foreground",
  caseStudyLucaAppHeaderRow: "flex items-start justify-between gap-3",
  caseStudyLucaAppSectionGap: "flex flex-col gap-1.5",
  caseStudyLucaAppSections: "flex flex-col gap-5",
  caseStudyLucaAppDashboardHeader:
    "flex flex-col gap-1.5 px-[var(--luca-app-rail-x)] pt-3",
  caseStudyLucaAppDashboardActions:
    "flex flex-col gap-5 px-[var(--luca-app-rail-x)] pb-2 pt-8",
  caseStudyLucaAppHeroArtZone: "relative h-40 w-full shrink-0 overflow-x-hidden",
  caseStudyLucaAppHeroArtFigure:
    "pointer-events-none absolute -top-3 z-0 h-36 w-44 [&_img]:pointer-events-none",
  caseStudyLucaAppHeroFoxFigureEdge: "right-0",
  caseStudyLucaAppHeroArtCta:
    "absolute bottom-10 left-[var(--luca-app-rail-x)] z-10 w-40",
  caseStudyLucaAppOpenArea: "min-h-2",
  caseStudyLucaAppPageInsetTop: "pt-1.5",
  caseStudyLucaAppAvatar:
    "flex size-8 shrink-0 items-center justify-center rounded-full border border-luca-app-avatar-border bg-luca-app-control-surface text-xs font-semibold text-luca-app-accent",
  caseStudyLucaAppArtBackground:
    "relative min-h-0 flex-1 overflow-hidden bg-luca-app-illustration-safe-bg",
  caseStudyLucaAppValidationError:
    "text-sm font-normal text-luca-app-error-fg",
  caseStudyLucaAppValidationErrorSlot:
    "grid transition-[grid-template-rows] duration-200 ease-out",
  caseStudyLucaAppValidationErrorSlotOpen: "grid-rows-[1fr]",
  caseStudyLucaAppValidationErrorSlotClosed: "grid-rows-[0fr]",
  caseStudyLucaAppValidationErrorSlotInner: "min-h-0 overflow-hidden",
  caseStudyLucaAppBackButton:
    "inline-flex items-center gap-1 border-0 bg-transparent p-0 text-sm font-medium text-luca-app-foreground/90 hover:text-luca-app-foreground",
  caseStudyLucaAppBackButtonFooter:
    "relative inline-flex min-w-20 items-center justify-center border-0 bg-transparent px-6 py-0 text-sm font-medium text-luca-app-foreground/90 hover:text-luca-app-foreground",
  caseStudyLucaAppBackButtonFooterLabel: "text-center",
  caseStudyLucaAppBackButtonFooterIcon:
    "absolute top-1/2 left-[calc(50%-2.25rem)] size-4 -translate-y-1/2",
  caseStudyLucaAppBackButtonFooterClearZone: "inline-flex",
  caseStudyLucaAppBackButtonFooterWrap: "flex w-full justify-center pt-3",
  caseStudyLucaAppFooterActions:
    "mt-4 flex flex-col items-stretch gap-2 px-[var(--luca-app-rail-x)] pb-2 pt-2",
  caseStudyLucaAppAssessmentQuestion:
    "flex flex-col gap-2",
  caseStudyLucaAppSliderWrap: "px-2",
  caseStudyLucaAppSliderInteraction:
    "relative h-7 w-full touch-pan-y select-none",
  caseStudyLucaAppSliderInteractionDragging: "touch-none",
  caseStudyLucaAppSliderEmptyTrack:
    "h-2 w-full rounded-full border border-luca-app-control-border bg-luca-app-control-surface",
  caseStudyLucaAppSliderTrack:
    "relative border border-luca-app-slider-track-border bg-luca-app-control-surface",
  caseStudyLucaAppSliderRange:
    "absolute inset-y-0 left-0 rounded-full bg-luca-app-button-bg",
  caseStudyLucaAppSliderRangeGhost:
    "absolute inset-y-0 rounded-full bg-luca-app-button-bg/35",
  caseStudyLucaAppSliderThumb:
    "flex items-center justify-center border-luca-app-button-bg bg-luca-app-button-bg text-luca-app-button-fg shadow-sm",
  caseStudyLucaAppSliderThumbGhost:
    "flex items-center justify-center border-0 bg-luca-app-button-bg/35 text-luca-app-button-fg/90",
  caseStudyLucaAppSliderThumbValue:
    "text-[0.65rem] font-semibold leading-none tabular-nums text-luca-app-button-fg",
  caseStudyLucaAppSliderThumbValueGhost:
    "text-luca-app-button-fg/90",
  caseStudyLucaAppScreenShell: "flex min-h-0 flex-1 flex-col",
  caseStudyLucaAppScrollRegion:
    "relative flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto",
  caseStudyLucaAppPlaceholderBody:
    "text-sm leading-relaxed text-luca-app-muted-foreground",
  caseStudyLucaAppWellnessRadarWrap:
    "relative mx-auto w-full max-w-none py-0.5",
  caseStudyLucaAppWellnessRadarSection:
    "-mx-1 px-1",
  caseStudyLucaAppWellnessRadarLabel:
    "fill-luca-app-foreground text-xs font-semibold",
  caseStudyLucaAppWellnessRadarLabelValue:
    "fill-luca-app-muted-foreground text-[0.6875rem] font-medium tabular-nums",
  caseStudyLucaAppWellnessRadarLabelChip:
    "fill-luca-app-background",
  caseStudyLucaAppWellnessRadarPolygonShadow:
    "fill-luca-app-accent/10",
  caseStudyLucaAppWellnessRadarPolygonVellum:
    "fill-luca-app-slider-fill/38",
  caseStudyLucaAppWellnessRadarPolygonBody:
    "fill-luca-app-accent/48",
  caseStudyLucaAppWellnessRadarPolygonInner:
    "fill-luca-app-slider-fill/18",
  caseStudyLucaAppWellnessRadarPolygonEdgeSoft:
    "fill-none stroke-luca-app-accent/16",
  caseStudyLucaAppWellnessRadarPolygonEdge:
    "fill-none stroke-luca-app-accent/62",
  caseStudyLucaAppBottomNav:
    "shrink-0 bg-luca-app-background px-2 pt-1",
  caseStudyLucaAppBottomNavSafeInset: "pb-5",
  caseStudyLucaAppBottomNavList: "grid grid-cols-5 gap-0.5",
  caseStudyLucaAppBottomNavItem:
    "flex cursor-pointer flex-col items-center justify-center gap-0.5 py-1",
  caseStudyLucaAppBottomNavIcon: "size-[1.125rem] shrink-0",
  caseStudyLucaAppBottomNavLabel: "text-[0.625rem] font-medium leading-none",
  caseStudyLucaAppBottomNavAvatar:
    "flex size-[1.125rem] shrink-0 items-center justify-center rounded-full border border-luca-app-avatar-border bg-luca-app-control-surface text-[0.625rem] font-semibold text-luca-app-accent",
  caseStudyLucaAppBottomNavAvatarImage: "size-full rounded-full",
  caseStudyLucaAppBottomNavAvatarWrap:
    "flex size-[1.125rem] shrink-0 items-center justify-center overflow-hidden rounded-full border border-luca-app-avatar-border",
  caseStudyLucaAppBottomNavAvatarActive: "ring-1 ring-luca-app-accent/60",
  caseStudyLucaAppBottomNavItemActive: "text-luca-app-accent",
  caseStudyLucaAppBottomNavItemInactive: "text-luca-app-foreground/80",
  caseStudyLucaAppFooterActionsWithNav:
    "mt-4 flex flex-col items-stretch gap-2 px-[var(--luca-app-rail-x)] pb-1 pt-2",
} as const;
