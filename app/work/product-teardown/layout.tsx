import type { Metadata } from "next";

import { PRODUCT_TEARDOWN_META } from "@/lib/portfolio/case-studies/product-teardown";

export const metadata: Metadata = {
  title: PRODUCT_TEARDOWN_META.pageTitle,
  description: PRODUCT_TEARDOWN_META.description,
};

export default function ProductTeardownWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
