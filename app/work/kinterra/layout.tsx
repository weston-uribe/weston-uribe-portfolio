import type { Metadata } from "next";

import { KINTERRA_META } from "@/lib/portfolio/case-studies/kinterra";

export const metadata: Metadata = {
  title: KINTERRA_META.pageTitle,
  description: KINTERRA_META.description,
};

export default function KinterraWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
