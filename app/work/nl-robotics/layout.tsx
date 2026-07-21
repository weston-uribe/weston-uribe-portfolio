import type { Metadata } from "next";

import { NL_ROBOTICS_META } from "@/lib/portfolio/case-studies/nl-robotics";

export const metadata: Metadata = {
  title: NL_ROBOTICS_META.pageTitle,
  description: NL_ROBOTICS_META.description,
};

export default function NlRoboticsWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
