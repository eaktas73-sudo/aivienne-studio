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

// 1. Organization & ProfessionalService Hibrit Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "AI.VIENNE Studio+",
  alternateName: ["AI.VIENNE", "AI Vienne Studio"],
  url: "https://aivienne.com",
  logo: "https://aivienne.com/logo.png",
  image: "https://aivienne.com/logo.png",
  description:
    "AI-native luxury visual production studio specializing in high fashion, fine jewelry, horology, and digital character campaigns.",
  priceRange: "$$$$",
  founder: {
    "@type": "Person",
    name: "E. Aktaş",
    jobTitle: "Founder & Creative Director",
    sameAs: "https://linkedin.com/in/e-aktas-aivienne"
  },
  sameAs: [
    "https://instagram.com/ai.vienne",
    "https://linkedin.com/in/e-aktas-aivienne"
  ],
  email: "info@aivienne.com",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Worldwide"
  },
  knowsAbout: [
    "AI-Assisted Visual Production",
    "Haute Couture Campaigns",
    "Fine Jewelry Visualization",
    "Haute Horlogerie Rendering",
    "Digital Brand Ambassador Design",
    "Cinematic Brand Films"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Strategic Visual Production Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Haute Couture & Seasonal Campaigns",
          description: "Seasonal fashion campaigns and editorial imagery directed without physical location shoots."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Haute Horlogerie & Fine Jewelry",
          description: "High-magnification luxury watch and jewelry visualization with specular reflection and caustics control."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Persistent Brand Ambassadors",
          description: "Bespoke digital brand faces engineered with reference-guided identity retention across campaigns."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Heritage & Flagship Films",
          description: "High-fidelity cinematic motion narratives for digital flagships and large-format displays."
        }
      }
    ]
  }
};

// 2. WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI.VIENNE Studio+",
  url: "https://aivienne.com",
  description: "AI-Native Luxury Visual Production House"
};

// 3. FAQPage Schema (Google Arama Zengin Snippet'ları İçin)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does AI.VIENNE ensure character consistency across campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI.VIENNE utilizes a reference-guided identity retention pipeline combined with layered skin calibration. This prevents facial drift and preserves facial structure across diverse lighting setups, wardrobe changes, and camera angles."
      }
    },
    {
      "@type": "Question",
      name: "What are the master resolution standards for delivered visual assets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deliverables are produced at genuine master resolutions up to 8K for print and digital flagship displays, alongside high-frame-rate uncompressed cinematic motion masters calibrated for luxury broadcast."
      }
    },
    {
      "@type": "Question",
      name: "Are client references and assets protected under NDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All client briefs, collection sketches, and proprietary references are protected under Mutual Non-Disclosure Agreements (NDA) and processed in isolated environments with zero training on public AI models."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Tarayıcı yüklendiğinde localStorage'dan dil ve yön tercihini anında uygulayan script (Hydration hatasını sıfırlar) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedLang = localStorage.getItem("aivienne_lang");
                  if (savedLang === "AR") {
                    document.documentElement.setAttribute("dir", "rtl");
                    document.documentElement.setAttribute("lang", "ar");
                  } else if (savedLang === "TR") {
                    document.documentElement.setAttribute("dir", "ltr");
                    document.documentElement.setAttribute("lang", "tr");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-neutral-950 text-neutral-100 antialiased selection:bg-amber-500/20 selection:text-amber-200">
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