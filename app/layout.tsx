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
  title: {
    default: "AmrSec.Study | JNTUH Study Guides",
    template: "%s | AmrSec.Study",
  },
  description:
    "Prepare smarter for JNTUH semester exams with easy-to-understand, exam-focused study guides, theory notes, and programming examples by Amer.",
  applicationName: "AmrSec.Study",
  keywords: [
    "JNTUH study material",
    "JNTUH exam preparation",
    "BTech study guides",
    "PPS notes",
    "Programming for Problem Solving",
    "AmrSec Study",
  ],
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
