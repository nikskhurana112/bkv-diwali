import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meditate with Brahma Kumaris | Vancouver, Surrey & Abbotsford",
  description:
    "Discover Raja Yoga, try a guided meditation, and find your Brahma Kumaris centre in Vancouver, Surrey, or Abbotsford.",
};

export const viewport: Viewport = {
  themeColor: "#f9f5ef",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
