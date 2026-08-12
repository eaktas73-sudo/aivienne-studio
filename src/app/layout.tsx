import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI.VIENNE Studio+ | AI-Powered Luxury Content Studio",
  description: "Cinematic campaigns, high jewelry imagery, haute couture films, and digital character worlds for luxury brands.",
  keywords: ["Luxury AI Studio", "AI Fashion Campaigns", "High Jewelry Rendering", "Digital Twins", "Cinematic AI Films"],
  openGraph: {
    title: "AI.VIENNE Studio+ | AI-Powered Luxury Content Studio",
    description: "Cinematic campaigns and high-end visual productions for luxury brands.",
    url: "https://aivienne.com",
    siteName: "AI.VIENNE Studio+",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}