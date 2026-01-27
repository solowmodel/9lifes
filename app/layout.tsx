import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 1. THIS FIXES THE MOBILE ZOOM ISSUE
// We export 'viewport' separately from 'metadata'
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// 2. YOUR SITE INFO
export const metadata: Metadata = {
  title: "N9NE LIFES CLO",
  description: "N9NE LIFES CLOTHING BRAND.  STREET WEAR AND LIFESTLYE CLOTHING BRAND",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}