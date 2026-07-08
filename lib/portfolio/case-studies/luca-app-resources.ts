export type LucaAppResource = {
  id: string;
  title: string;
  description: string;
  artworkSrc: string;
  artworkAlt: string;
  pdfSrc: string;
};

export const LUCA_APP_RESOURCE_ITEMS: readonly LucaAppResource[] = [
  {
    id: "stress-management-guide",
    title: "Stress management guide",
    description:
      "Short exercises and grounding prompts students can use between classes.",
    artworkSrc: "/images/luca/resources/luca-resource-art-stress-v01.svg",
    artworkAlt: "Illustration for the stress management guide",
    pdfSrc: "/documents/luca/resources/luca-resource-stress-management-guide.pdf",
  },
  {
    id: "sleep-hygiene-checklist",
    title: "Sleep hygiene checklist",
    description:
      "A printable checklist for building a healthier bedtime routine on campus.",
    artworkSrc: "/images/luca/resources/luca-resource-art-sleep-v01.svg",
    artworkAlt: "Illustration for the sleep hygiene checklist",
    pdfSrc: "/documents/luca/resources/luca-resource-sleep-hygiene-checklist.pdf",
  },
  {
    id: "campus-wellness-directory",
    title: "Campus wellness directory",
    description:
      "A quick reference for counseling, health services, and peer support offices.",
    artworkSrc: "/images/luca/resources/luca-resource-art-campus-v01.svg",
    artworkAlt: "Illustration for the campus wellness directory",
    pdfSrc: "/documents/luca/resources/luca-resource-campus-wellness-directory.pdf",
  },
] as const;
