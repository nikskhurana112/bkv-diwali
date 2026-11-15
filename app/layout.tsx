import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meditate with Brahma Kumaris | Vancouver, Surrey & Abbotsford",
  description:
    "Discover Raja Yoga, try a guided meditation, and find your Brahma Kumaris centre in Vancouver, Surrey, or Abbotsford.",
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
