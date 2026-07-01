import type { Metadata } from "next";

import { UKME_VOC_META } from "@/lib/portfolio/case-studies/ukme-voc";

export const metadata: Metadata = {
  title: UKME_VOC_META.pageTitle,
  description: UKME_VOC_META.description,
};

export default function UkgWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
