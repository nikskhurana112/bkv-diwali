import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meditate with Brahma Kumaris | Vancouver, Surrey & Abbotsford",
  description:
    "Try guided meditation and find a Brahma Kumaris center in Vancouver, Surrey, Abbotsford, Victoria, Parksville, or Prince George.",
};

export const viewport: Viewport = {
  themeColor: "#fbf8f3",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
