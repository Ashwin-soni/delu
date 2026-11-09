
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "./organization-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.delulogic.in"),

  title: {
    default: "DeluLogic | Website Development & Digital Marketing",
    template: "%s | DeluLogic",
  },

  description:
    "DeluLogic helps businesses grow with professional website development, Google Ads, Meta Ads and social media management. Turn your ideas into reality.",

  applicationName: "DeluLogic",

  authors: [
    { name: "Ashwin Soni" },
    { name: "Anirudh Soni" },
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "DeluLogic | Website Development & Digital Marketing",
    description:
      "Transform your business with professional website development and performance marketing solutions.",
    url: "https://www.delulogic.in/",
    siteName: "DeluLogic",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DeluLogic | Website Development & Digital Marketing",
    description:
      "Professional websites, Google Ads, Meta Ads and digital growth solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#0c0a09] text-[#faf7f2] font-sans antialiased selection:bg-[#facc15] selection:text-[#0c0a09]">
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
