import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { PortfolioScrollRestoration } from "@/components/custom/portfolio/portfolio-scroll-restoration";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body className="overflow-x-clip antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PortfolioScrollRestoration />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
