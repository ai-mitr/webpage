import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "AI Content Generator - Create Personalized Content Effortlessly",
  description:
    "Generate posts, posters, invitation cards, and more with AI-driven creativity. Personalized content generation made simple.",
  openGraph: {
    title: "AI Content Generator - Create Personalized Content Effortlessly",
    description:
      "Generate posts, posters, invitation cards, and more with AI-driven creativity. Personalized content generation made simple.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Content Generator",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
