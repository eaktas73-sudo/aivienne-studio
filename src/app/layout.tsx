import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aivienne.com"),
  title: "AI.VIENNE Studio+ | AI-Native Luxury Visual Production House",
  description:
    "AI.VIENNE Studio+ is an AI-native luxury visual production house creating campaign imagery, cinematic motion, luxury product visualization and consistent digital characters for fashion, jewelry, horology and beauty brands.",
  keywords: [
    "AI-Native Luxury Visual Production House",
    "Luxury AI Studio",
    "AI Fashion Campaigns",
    "High Jewelry Rendering",
    "Digital Twins",
    "Cinematic AI Films",
  ],
  alternates: {
    canonical: "https://aivienne.com",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "AI.VIENNE Studio+ | AI-Native Luxury Visual Production House",
    description:
      "AI.VIENNE Studio+ is an AI-native luxury visual production house creating campaign imagery, cinematic motion, luxury product visualization and consistent digital characters for fashion, jewelry, horology and beauty brands.",
    url: "https://aivienne.com",
    siteName: "AI.VIENNE Studio+",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI.VIENNE Studio+ | AI-Native Luxury Visual Production House",
    description:
      "AI.VIENNE Studio+ is an AI-native luxury visual production house creating campaign imagery, cinematic motion, luxury product visualization and consistent digital characters for fashion, jewelry, horology and beauty brands.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI.VIENNE Studio+",
  alternateName: "AI.VIENNE",
  url: "https://aivienne.com",
  logo: "https://aivienne.com/logo.png",
  description:
    "AI-native luxury visual production studio specializing in high fashion, fine jewelry, horology, and digital character campaigns.",
  founder: {
    "@type": "Person",
    name: "E. Aktaş",
    jobTitle: "Founder & Creative Director",
  },
  sameAs: [
    "https://instagram.com/ai.vienne",
    "https://linkedin.com/in/e-aktas-aivienne",
  ],
  email: "info@aivienne.com",
  knowsAbout: [
    "AI-Assisted Visual Production",
    "Luxury Fashion Campaigns",
    "Fine Jewelry Visualization",
    "Horology Product Visualization",
    "Digital Character Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}