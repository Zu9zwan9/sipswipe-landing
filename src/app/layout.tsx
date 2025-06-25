import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SipSwipe – Beer Dating App | Connect. Sip. Swipe.",
  description:
    "SipSwipe – the ultimate Tinder-inspired beer dating app connecting singles in bars across USA, Canada & Europe. Download now for real-time bar matching!",
  keywords: [
    "beer dating app",
    "bar meetup app",
    "SipSwipe",
    "dating",
    "beer lovers",
    "bar dating",
  ],
  openGraph: {
    title: "SipSwipe – Beer Dating App | Connect. Sip. Swipe.",
    description:
      "Download SipSwipe – match with beer lovers in bars across USA, Canada & Europe.",
    url: "https://sipswipe.app",
    siteName: "SipSwipe",
    images: [
      {
        url: "https://sipswipe.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SipSwipe App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SipSwipe – Beer Dating App | Connect. Sip. Swipe.",
    description: "Meet singles at your favorite bar with SipSwipe – the beer dating app.",
    images: ["https://sipswipe.app/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
