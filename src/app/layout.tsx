import type { Metadata } from "next";
import Script from "next/script";
import AIChatConcierge from "./components/AIChatConcierge";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aivienne.com"),
  title: {
    default: "AI.VIENNE Studio+ | AI-Native Luxury Visual Production House",
    template: "%s | AI.VIENNE Studio+"
  },
  description:
    "AI.VIENNE Studio+ is an AI-native luxury visual production house creating campaign imagery, cinematic motion, luxury product visualization and consistent digital characters for fashion, jewelry, horology and beauty brands.",
  keywords: [
    "AI-Native Luxury Visual Production House",
    "Luxury AI Studio",
    "AI Fashion Campaigns",
    "High Jewelry Rendering",
    "Digital Brand Ambassador",
    "Persistent Digital Characters",
    "Haute Horlogerie Visualization",
    "Cinematic AI Films",
    "AI.VIENNE Studio"
  ],
  authors: [{ name: "AI.VIENNE Studio+" }],
  creator: "AI.VIENNE Studio+",
  publisher: "AI.VIENNE Studio+",
  alternates: {
    canonical: "https://aivienne.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "AI.VIENNE Studio+ | AI-Native Luxury Visual Production House",
    description:
      "AI-assisted campaign imagery, cinematic motion, luxury product visualization and consistent digital characters — directed for brands that demand precision.",
    url: "https://aivienne.com",
    siteName: "AI.VIENNE Studio+",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "AI.VIENNE Studio+ Luxury Visual Production"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI.VIENNE Studio+ | AI-Native Luxury Visual Production House",
    description:
      "Neural Craftsmanship for High Fashion, Fine Jewelry & Swiss Horlogerie.",
    images: ["/logo.png"],
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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-neutral-950 text-neutral-100 antialiased selection:bg-amber-500/20 selection:text-amber-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <AIChatConcierge />
        <Script
          src="https://assets.lemonsqueezy.com/lemon.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}