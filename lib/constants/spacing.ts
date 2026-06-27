/**
 * Semantic spacing tokens as complete Tailwind class strings.
 *
 * These are full, static class values — never interpolate them inside
 * template literals like `p-${value}` because Tailwind cannot detect
 * dynamically-constructed class names at build time.
 */

export const SPACING = {
  pagePaddingX: "px-4 sm:px-6 lg:px-8",
  navBar: "py-4",
  sectionPaddingY: "py-16 sm:py-20 md:py-24 lg:py-28",
  sectionPaddingTop: "pt-16 sm:pt-20 md:pt-24 lg:pt-28",
  sectionPaddingBottom: "pb-16 sm:pb-20 md:pb-24 lg:pb-28",
  /** Tighter vertical rhythm between adjacent mid-page sections (About → Work → Contact) */
  sectionJoinPaddingY: "py-8 sm:py-10 md:py-12 lg:py-14",
  sectionJoinPaddingTop: "pt-8 sm:pt-10 md:pt-12 lg:pt-14",
  sectionJoinPaddingBottom: "pb-8 sm:pb-10 md:pb-12 lg:pb-14",
  heroSectionPaddingY: "py-10 sm:py-12 md:py-14 lg:py-16",
  sectionGap: "gap-8 lg:gap-10",
  stackGap: "gap-6 lg:gap-8",
  inlineGap: "gap-4",
  elementGap: "gap-2",
  marqueeSectionY: "py-10 sm:py-12 md:py-14 lg:py-16",
  marqueeItemGap: "gap-10 sm:gap-12 md:gap-14",
  /** Trailing inset on each marquee group — matches marqueeItemGap for seamless loop */
  marqueeGroupEnd: "pr-10 sm:pr-12 md:pr-14",
  pageAnchorScrollBuffer: "pb-48 sm:pb-52 lg:pb-56",
  /** Pull footer up on desktop into main scroll buffer without shifting section anchors */
  footerContactPullUp: "lg:-mt-8",
} as const;
