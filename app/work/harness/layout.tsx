import type { Metadata } from "next";

import { HARNESS_META } from "@/lib/portfolio/case-studies/harness";

export const metadata: Metadata = {
  title: HARNESS_META.pageTitle,
  description: HARNESS_META.description,
};

export default function HarnessWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
