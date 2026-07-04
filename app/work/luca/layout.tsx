import type { Metadata } from "next";

import { LUCA_META } from "@/lib/portfolio/case-studies/luca";

export const metadata: Metadata = {
  title: LUCA_META.pageTitle,
  description: LUCA_META.description,
};

export default function LucaWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
