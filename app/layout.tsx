import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { PortfolioScrollRestoration } from "@/components/custom/portfolio/portfolio-scroll-restoration";
import "@/styles/globals.css";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Weston Uribe",
  description:
    "Product owner and UX/UI designer focused on product strategy, rapid prototyping, and polished user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${roboto.variable}`}>
      <body className="overflow-x-clip antialiased">
        <PortfolioScrollRestoration />
        {children}
      </body>
    </html>
  );
}
