import type { Metadata } from "next";
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
  title: "Delulogic | Web Development & Paid Ad Growth Agency",
  description:
    "Delulogic is an elite web development, Google Ads & Meta Ads agency founded by Ashwin Soni and Anirudh Soni. We turn delusional ambition into high-converting logic.",
  keywords: [
    "Delulogic",
    "Web Development Agency",
    "Google Ads Management",
    "Meta Ads Agency",
    "Social Media Marketing",
    "Next.js Development",
    "Three.js Web Experiences",
    "Ashwin Soni",
    "Anirudh Soni",
  ],
  authors: [{ name: "Ashwin Soni" }, { name: "Anirudh Soni" }],
  openGraph: {
    title: "Delulogic | Turn Delusion Into Scalable Logic",
    description:
      "World-class Web Development & Performance Ads (Google Ads & Meta Ads) engineered for rapid global scale.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#0c0a09] text-[#faf7f2] font-sans antialiased selection:bg-[#facc15] selection:text-[#0c0a09]">
        {children}
        <OrganizationSchema />
      </body>
    </html>
  );
}
