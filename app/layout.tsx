import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource/source-sans-pro/latin-400.css";
import "@fontsource/source-sans-pro/latin-600.css";
import "@fontsource/source-sans-pro/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meditate with Brahma Kumaris | Vancouver, Surrey & Abbotsford",
  description:
    "Try guided meditation and find a Brahma Kumaris center in Vancouver, Surrey, Abbotsford, Victoria, Parksville, or Prince George.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
