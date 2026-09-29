"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "./components/FAQ";
import {
  Sparkles,
  ArrowRight,
  Play,
  Gem,
  ChevronDown,
  Mail,
  X,
  Send,
  ArrowUp,
  ShieldCheck,
  Glasses,
  Sparkle,
  Calculator,
  Layers,
  SlidersHorizontal,
  Activity,
  CheckCircle2,
  Zap,
  UploadCloud,
  Paperclip,
  Watch,
  Compass,
  Sliders,
  Cpu,
  CheckSquare,
  Globe,
  Film,
  UserCheck,
  LayoutGrid,
  Box,
  Smartphone,
  Tv,
  Lock,
  Briefcase,
  Clock,
  Info,
  Calendar,
  User,
  BookOpen,
  Volume2,
  VolumeX,
  Copy,
  Check,
  LucideIcon
} from "lucide-react";

function HeroDirectEmailAction({ label = "Direct Access:" }: { label?: string }) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const user = "info";
  const domain = "aivienne.com";
  const emailAddress = `${user}@${domain}`;

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-neutral-200 border border-neutral-800 bg-neutral-900/60 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-amber-400/50 hover:bg-neutral-900/90 group">
      <a
        href={mounted ? `mailto:${emailAddress}` : "#"}
        aria-label={`Send inquiry to ${emailAddress}`}
        className="inline-flex items-center gap-2.5 text-neutral-200 hover:text-amber-300 transition-colors focus:outline-none"
      >
        <Mail className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-neutral-400 font-light">{label}</span>
        <span className="font-mono text-amber-300 underline underline-offset-4 tracking-normal">
          {user}
          <span className="inline">@</span>
          {domain}
        </span>
      </a>

      <div className="h-4 w-[1px] bg-neutral-800 mx-1 hidden sm:block" />

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
        className="p-1.5 rounded-full text-neutral-400 hover:text-amber-300 hover:bg-neutral-800/80 transition-all cursor-pointer focus:outline-none"
        title="Copy email address"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
        ) : (
          <Copy className="w-3.5 h-3.5 group-hover:text-amber-400" />
        )}
      </button>
    </div>
  );
}

function SafeEmailLink({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const user = "info";
  const domain = "aivienne.com";
  const fullAddress = `${user}@${domain}`;

  return (
    <a
      href={mounted ? `mailto:${fullAddress}` : "#"}
      className={className}
      aria-label={`Send email to ${fullAddress}`}
    >
      {user}@{domain}
    </a>
  );
}

type TranslationRecord = Record<string, string>;

interface TranslationContent {
  nav: TranslationRecord;
  hero: TranslationRecord;
  manifesto: TranslationRecord;
  servicesPillars: TranslationRecord;
  capabilitiesSection: TranslationRecord;
  capabilitiesTech: TranslationRecord;
  system: TranslationRecord;
  studioSection: TranslationRecord;
  insights: TranslationRecord;
  portfolio: TranslationRecord;
  transformation: TranslationRecord;
  estimator: TranslationRecord;
  twinsSection: TranslationRecord;
  briefSection: TranslationRecord;
  chatConsole: TranslationRecord;
  contact: TranslationRecord;
  footerSection: TranslationRecord;
  modals: TranslationRecord;
  footer: string;
}

const TRANSLATIONS: Record<string, TranslationContent> = {
  EN: {
    nav: { portfolio: "Concept Archive", capabilities: "Capabilities", services: "Services", avatar: "Digital Characters", studio: "Studio", system: "Process", theStudio: "The Studio", transformation: "Refinement", roi: "Production Economics", journal: "Insights", contact: "Inquire", cta: "START A PROJECT" },
    hero: { badge: "AI-Native Luxury Visual Production House", titleStart: "Elevating High Fashion, Fine Jewelry & Horlogerie Through", titleGradient: "Neural Craftsmanship", desc: "AI-assisted campaign imagery, cinematic motion, luxury product visualization and consistent digital characters — directed for brands that demand precision.", btnPrimary: "Explore Concept Archive", directAccessLabel: "Direct Access:" },
    manifesto: { sub: "OUR CREATIVE CODEX", line1: "We do not adapt to fleeting digital trends.", line2: "WE ARCHITECT TIMELESS LUXURY UNIVERSES." },
    servicesPillars: {
      tag: "CORE PRODUCTION DISCIPLINES",
      title: "Strategic Production Services",
      desc: "Commissioned visual engagements designed to streamline visual production and elevate brand expression across physical and digital flagships.",
      leadTimeLabel: "Typical Lead Time",
      leadTimeNote: "Timing varies according to creative scope, asset volume, revision rounds and delivery requirements.",
      s1Tag: "CAMPAIGNS",
      s1Title: "Haute Couture & Seasonal Campaigns",
      s1Desc: "Seasonal fashion campaigns without the logistical constraints of conventional location shoots.",
      s1Capabilities: "Concept Direction · Editorial Imagery · Dynamic Fabric Movement · Campaign Systems",
      s1Deliverables: "Hero Stills · Lookbook Suites · Vertical Social Cuts · Motion Loops",
      s1Time: "7 – 10 Business Days",
      s2Tag: "OBJECT & HOROLOGY",
      s2Title: "Haute Horlogerie & Fine Jewelry",
      s2Desc: "Create high-magnification luxury watch and fine jewelry product campaigns with controlled specular reflection and gemstone light dispersion.",
      s2Capabilities: "Reference Alignment · Precision Lighting · Gemstone Refraction · Horological Detail Visualization",
      s2Deliverables: "Hero Product Stills · Macro Detail Series · Motion Loops · Cutout / E-Commerce Masters",
      s2Time: "5 – 8 Business Days",
      s3Tag: "DIGITAL CHARACTERS",
      s3Title: "Persistent Brand Ambassadors",
      s3Desc: "Bespoke digital brand faces engineered for consistent identity, facial geometry, and styling continuity across multiple campaigns.",
      s3Capabilities: "Identity Consistency · Layered Skin Calibration · Multi-Scene Wardrobe Adaptation · Pose & Motion Continuity",
      s3Deliverables: "Dedicated Brand Model Library · Multi-Environment Asset Suite · 4K Motion Loops",
      s3Time: "10 – 14 Business Days",
      s4Tag: "CINEMATIC MOTION",
      s4Title: "Brand Heritage & Flagship Films",
      s4Desc: "High-fidelity motion narratives engineered for digital flagships, large-format displays, and international digital campaign media.",
      s4Capabilities: "Cinematic Storyboarding · Volumetric Atmosphere · Multi-Aspect Formatting (16:9, 9:16, 32:9)",
      s4Deliverables: "24 / 30 / 60 FPS Masters · Platform-Specific Cutdowns · Custom Color-Graded Cinema Cuts",
      s4Time: "8 – 12 Business Days"
    },
    capabilitiesSection: {
      tag: "PRODUCTION CAPABILITIES",
      title: "Engineered Visual Capabilities",
      c1Num: "01", c1Title: "HAUTE COUTURE EDITORIALS", c1Desc: "Full-scale seasonal campaign imagery with natural textile weight, fluid movement, and atmospheric styling.",
      c2Num: "02", c2Title: "FINE JEWELRY & WATCHES", c2Desc: "Controlled light dispersion, diamond brilliance, sapphire crystal clarity, and micro-mechanical precision for high-end watch and jewelry campaigns.",
      c3Num: "03", c3Title: "CINEMATIC BRAND FILMS", c3Desc: "Emotion-led high-frame-rate motion visuals calibrated for luxury broadcast and retail flagships.",
      c4Num: "04", c4Title: "CONSISTENT DIGITAL CHARACTERS", c4Desc: "Reliable character continuity preserving facial structure, natural expression, and styling across diverse settings.",
      c5Num: "05", c5Title: "SCALABLE CAMPAIGN SYSTEMS", c5Desc: "Multi-channel visual systems delivering cohesive color grading and consistent brand DNA across all outputs."
    },
    capabilitiesTech: {
      tag: "TECHNICAL RIGOR",
      title: "AI-Assisted Production Workflow",
      desc: "Combining current generative tools, advanced compositing, and professional post-production for uncompromising luxury fidelity.",
      cap1Title: "High-Resolution Master Output", cap1Desc: "High-resolution master stills calibrated for large-format displays, print publications, and global digital flagships.", cap1Tag1: "OUTPUT SPEC", cap1Tag2: "UP TO 8K WHERE REQUIRED",
      cap2Title: "Advanced Skin & Material Shading", cap2Desc: "Multi-layered skin shading, micro-texture refinement, and natural translucency for authentic digital character portraits.", cap2Tag1: "SKIN FIDELITY", cap2Tag2: "NATURALISTIC SHADING",
      cap3Title: "Precision Material & Lighting", cap3Desc: "Controlled treatment of reflective metals, gemstones and transparent materials with carefully directed highlights, reflections and optical detail.", cap3Tag1: "MATERIAL FIDELITY", cap3Tag2: "CONTROLLED REFRACTION",
      cap4Title: "Identity Consistency Workflow", cap4Desc: "Reference-guided identity and facial consistency across multi-scene production runs without character distortion.", cap4Tag1: "CONTINUITY", cap4Tag2: "REFERENCE-GUIDED CONSISTENCY"
    },
    system: {
      tag: "THE AI.VIENNE WORKFLOW",
      title: "Five-Stage Production Protocol",
      sub: "DISCOVER · DIRECT · PRODUCE · REFINE · DELIVER",
      s1Num: "01", s1Title: "DISCOVER", s1Detail: "Brand identity, campaign objectives, product references, textile samples, and creative requirements.",
      s2Num: "02", s2Title: "DIRECT", s2Detail: "Art direction, lighting architecture, cinematic framing, visual language, and moodboard alignment.",
      s3Num: "03", s3Title: "PRODUCE", s3Detail: "AI-assisted visual generation, material synthesis, lighting direction, and high-resolution refinement.",
      s4Num: "04", s4Title: "REFINE", s4Detail: "Haute retouching, material refinement, chromatic calibration, gemstone clarity, and quality control.",
      s5Num: "05", s5Title: "DELIVER", s5Sub: "MASTER DEPLOYMENT", s5Detail: "Campaign-ready masters optimized for print, digital flagships, and platform-specific motion formats."
    },
    studioSection: {
      tag: "THE HOUSE",
      title: "AI-Native Luxury Visual Production House",
      desc: "AI.VIENNE Studio+ is an independent creative practice focused on the intersection of luxury art direction, AI-assisted visual production and emerging digital craft.",
      founderName: "E. AKTAŞ",
      founderTitle: "Founder & Creative Director",
      founderBio: "AI.VIENNE was founded to explore how emerging AI-assisted production can expand the creative possibilities of luxury visual storytelling while maintaining the discipline, restraint and detail expected by premium brands.",
      spec1: "Creative Direction",
      spec2: "Luxury Visual Systems",
      spec3: "AI-Assisted Production",
      opsTitle: "OPERATIONAL PROTOCOLS",
      opsVal1: "Independent Studio · Global Remote",
      opsVal2: "Confidentiality Protocols (Mutual NDA Available)"
    },
    insights: {
      tag: "RESEARCH & PERSPECTIVES",
      title: "AI.VIENNE Insights",
      desc: "Ideas on AI, luxury, visual production, and modern digital craftsmanship.",
      readMore: "Read Insight →",
      faqHeading: "Frequently Asked Inquiry",
      monograph: "AI.VIENNE Research & Monograph",
      requestPerspective: "Request Full Perspective",
      article1Tag: "FASHION ECONOMICS",
      article1Author: "E. Aktaş",
      article1Date: "August 2026",
      article1ReadTime: "6 Min Read",
      article1Title: "The Economics of Digital Couture: Compressing Campaign Cycles",
      article1Desc: "How modern fashion ateliers deploy AI-assisted visual pipelines to accelerate seasonal campaigns without diminishing brand prestige.",
      article1Body1: "Traditional luxury fashion production has historically been bound to extensive physical sampling, complex multi-country shoots, and long turnaround cycles. AI.VIENNE's structured workflow allows creative directors to test fabric draping, textures, and atmospheres before committing to physical assets.",
      article1Body2: "By blending AI synthesis with meticulous studio post-production, campaign timelines can be compressed from months into days, while ensuring color-accurate representation of haute couture creations.",
      article1FaqQ: "How does AI sampling compare to physical fabric prototypes?",
      article1FaqA: "AI sampling allows rapid iteration of lighting, draping, and styling angles, compressing approval timelines before final high-resolution masters are locked.",
      article2Tag: "DIGITAL IDENTITY",
      article2Author: "AI.VIENNE Editorial",
      article2Date: "August 2026",
      article2ReadTime: "8 Min Read",
      article2Title: "Character Consistency in Luxury AI Campaigns",
      article2Desc: "A technical examination of identity retention systems preventing facial morphing in recurring brand ambassadors.",
      article2Body1: "In luxury storytelling, model identity must remain immutable across scenes. Generic generative tools often suffer from drift between frames, which breaks brand cohesion.",
      article2Body2: "AI.VIENNE utilizes landmark retention and layered skin shading to ensure that facial structure, proportions, and expression remain consistent across diverse lighting conditions and camera lenses.",
      article2FaqQ: "Can a digital brand face be deployed across future seasonal campaigns?",
      article2FaqA: "Yes. By archiving model landmark configurations and skin shaders, character identity remains consistent across lookbooks, social, and global retail media.",
      article3Tag: "PRECISION RENDERING",
      article3Author: "AI.VIENNE Optics Lab",
      article3Date: "August 2026",
      article3ReadTime: "5 Min Read",
      article3Title: "Material Simulation: Gemstone & Watch Refraction",
      article3Desc: "Achieving controlled optical brilliance in macro jewelry and timepiece visualization.",
      article3Body1: "Macro photography of high jewelry presents extreme studio lighting challenges. Unwanted reflections and flare can obscure the natural fire of precious stones and the finishing of Swiss movements.",
      article3Body2: "Our pipeline allows precise control over reflection, dispersion, and surface textures, producing high-resolution macro visual assets ready for editorial print and digital flagships.",
      article3FaqQ: "How are internal reflections controlled on Swiss watch sapphire crystals?",
      article3FaqA: "We apply multi-layered anti-reflective optical passes combined with high-contrast chiaroscuro lighting to reveal dial mechanics clearly."
    },
    portfolio: { 
      tag: "AI.VIENNE CONCEPT ARCHIVE", 
      title: "Speculative Campaign Studies", 
      desc: "Explore curated speculative productions and vertical concept studies demonstrating our capabilities across high fashion, fine jewelry, and luxury watch visualization.", 
      filterAll: "All Concepts", 
      filter169: "16:9 Widescreen Concepts", 
      filter916: "9:16 Vertical Studies", 
      playVideo: "Inspect Speculative Study", 
      requestScope: "REQUEST SCOPE",
      closePreview: "CLOSE PREVIEW",
      disclaimer: "Speculative concept study created independently by AI.VIENNE Studio+. Not commissioned by or affiliated with any brand shown or referenced."
    },
    transformation: { 
      tag: "FROM CONCEPT TO MASTER", 
      title: "Visual Direction Refinement", 
      desc: "See how an initial visual direction evolves into a finished AI.VIENNE campaign master through iterative direction, synthesis, and manual refinement.", 
      beforeLabel: "Initial Visual Concept", 
      afterLabel: "AI.VIENNE Finished Master",
      s1: "01 · Direction", s2: "02 · Generation", s3: "03 · Refinement", s4: "04 · Final Master"
    },
    estimator: { 
      tag: "PRODUCTION ECONOMICS", 
      title: "Production Scope Preview", 
      desc: "Configure your project parameters to estimate production investment based on deliverables, volume, and timeline priority.", 
      deliverableType: "01 · Deliverable Type", 
      volumeLabel: "02 · Asset Volume", 
      complexityLabel: "03 · Production Complexity",
      timelineLabel: "04 · Schedule Priority", 
      optStill: "Stills (High-Resolution Visuals)", 
      optMotion: "Motion (Cinematic Loops & Cutdowns)", 
      optChar: "Digital Character (Model Suite)",
      optFull: "Full Campaign (Stills + Motion + Character)", 
      vol1: "1 Asset", 
      vol2: "5 Assets", 
      vol3: "10 Assets", 
      vol4: "25+ Assets",
      compStd: "Standard Refinement",
      compPrem: "Premium Detail",
      compCamp: "Campaign Grade",
      timeStd: "Standard (7 – 10 Business Days)", 
      timeExp: "Priority Delivery (3 – 5 Business Days)", 
      rangeTitle: "ESTIMATED PRODUCTION RANGE", 
      startingTier: "Estimated Investment Range",
      disclaimer: "Final investment is confirmed after creative scope review. Customized scopes are available for enterprise seasonal campaigns.", 
      breakdownFactors: "Scope Factors: Asset Volume · Motion Complexity · Material Refinement · Revision Cycles", 
      btnLock: "Request Official Scope Estimate"
    },
    twinsSection: { 
      tag: "DIGITAL CHARACTERS", 
      title: "Digital Character Showcase", 
      desc: "Bespoke digital brand faces engineered with character consistency, natural skin micro-texture, and refined luxury styling.", 
      identityTitle: "Character Consistency System", 
      identityDesc: "Designed to preserve facial structure, natural proportions, and distinct aesthetic presence across multiple seasonal environments.",
      useCasesTitle: "WHERE DIGITAL CHARACTERS CREATE VALUE",
      uc1: "Campaign Continuity", uc1Desc: "Maintain a recognizable visual identity across seasonal lookbooks.",
      uc2: "E-Commerce", uc2Desc: "Produce recurring, consistent product and model imagery across collections.",
      uc3: "Social Content", uc3Desc: "Generate ongoing editorial assets without rebuilding the model identity.",
      uc4: "Global Variations", uc4Desc: "Adapt environments, styling, and campaign contexts while preserving character geometry."
    },
    briefSection: { tag: "CREATIVE CONFIGURATOR", title: "Interactive Brief Architect", desc: "Select aesthetic parameters to formulate a tailored visual brief for your upcoming project.", s1: "1. Lighting Architecture", s2: "2. Industry Discipline", s3: "3. Spatial Atmosphere", applyBtn: "ADD TO PROJECT BRIEF", configLabel: "Configured Parameters:" },
    chatConsole: { title: "Project Desk", sub: "Confidential Consultation, Custom Scopes & Mutual NDA Requests", placeholder: "Detail your brand, launch date, or visual objectives...", send: "Transmit Brief", welcome: "Welcome to AI.VIENNE Studio+ Project Desk. Please detail your project scope. All inquiries are handled with strict commercial confidentiality." },
    contact: { 
      tag: "PROJECT INQUIRY", 
      title: "Initiate Your Project Brief", 
      desc: "Partner with AI.VIENNE Studio+ to engineer high-precision digital luxury campaigns tailored to your brand standards.", 
      namePlaceholder: "Contact Name & Organization *", 
      emailPlaceholder: "Corporate Email Address *", 
      websitePlaceholder: "Company Website (e.g., brand.com)", 
      datePlaceholder: "Target Launch Date / Timeline", 
      serviceLabel: "Select Production Discipline", 
      sOpt1: "Haute Couture & Seasonal Campaigns", 
      sOpt2: "Haute Horlogerie & Fine Jewelry Visualization (Luxury Watches & Jewelry)", 
      sOpt3: "Persistent Brand Ambassadors", 
      sOpt4: "Brand Heritage & Flagship Films", 
      sOpt5: "Haute Parfumerie & Prestige Beauty Campaign", 
      sOpt6: "Luxury Eyewear & Optics Production", 
      sOpt7: "Custom Multi-Channel Campaign Scope", 
      budgetLabel: "Estimated Production Budget (USD)", 
      bOpt1: "Starting Project Range: From $5,000", 
      bOpt2: "Seasonal Campaign Suite: $5,000 – $15,000", 
      bOpt3: "Full Motion & Character Ecosystem: $15,000 – $35,000+", 
      bOpt4: "Custom Production / Scoped to Requirements", 
      ndaLabel: "Require Mutual Non-Disclosure Agreement (NDA) prior to asset disclosure", 
      uploadTitle: "Upload Reference Files (Max 25MB)", 
      uploadHint: "Drag and drop reference files (PNG, JPG, PDF, ZIP). For larger video assets, please paste a Frame.io, Google Drive, Dropbox, or WeTransfer link in your message below.", 
      messagePlaceholder: "Outline your campaign goals, deliverables, aesthetic requirements, and timeline (include Cloud/WeTransfer video links here if applicable)...", 
      submitBtn: "Submit Confidential Brief", 
      directEmail: "Project Desk:",
      nextStepsTitle: "WHAT HAPPENS NEXT",
      ns1Title: "01 · REVIEW", ns1Desc: "We review your brief, aesthetic direction, and reference materials.",
      ns2Title: "02 · SCOPE", ns2Desc: "We define exact deliverables, schedule milestones, and production requirements.",
      ns3Title: "03 · PROPOSAL", ns3Desc: "You receive a tailored project scope and investment proposal under NDA.",
      ns4Title: "04 · PRODUCTION", ns4Desc: "Creative direction and visual production begin following mutual sign-off."
    },
    footerSection: { navTitle: "01 / NAVIGATION", dirTitle: "02 / DIRECTORY", netTitle: "03 / NETWORK", studio: "The Studio", works: "Concept Archive", initiate: "Start a Project", location: "Independent Studio · Global Remote", terms: "TERMS OF ENGAGEMENT", privacy: "CONFIDENTIALITY & PRIVACY" },
    modals: {
      termsTitle: "Terms of Engagement & Production Standards",
      termsP1Title: "1. INTELLECTUAL PROPERTY & USAGE RIGHTS",
      termsP1Body: "Upon full settlement of commercial production invoices, all delivered final master visual assets, motion files, and customized digital assets transition exclusively to the Client. The Client holds unrestricted worldwide commercial usage rights across digital flagships, broadcast television, print publications, and out-of-home media with zero perpetual royalty claims.",
      termsP2Title: "2. PRE-RELEASE CONFIDENTIALITY & MUTUAL NDA",
      termsP2Body: "All client briefs, moodboards, unreleased collection sketches, and proprietary brand assets are protected under Mutual Non-Disclosure Agreements upon request. AI.VIENNE Studio+ conducts production on isolated, secure compute environments to ensure confidentiality prior to official release.",
      termsP3Title: "3. CHROMATIC CALIBRATION & REVISIONS",
      termsP3Body: "Commissions include structured revision rounds covering chromatic balance, material shader tuning, reflection angles, and composition framing to guarantee adherence to the approved brief.",
      termsP4Title: "4. MASTER RESOLUTION STANDARDS",
      termsP4Body: "Primary campaign deliverables are output at genuine high resolutions (up to 8K master stills where required) or uncompressed high-frame-rate motion files calibrated for high-end digital displays and print media.",
      privacyTitle: "Confidentiality & Data Protection Protocol",
      privacyP1Title: "1. CORPORATE DATA INTEGRITY",
      privacyP1Body: "AI.VIENNE Studio+ collects and processes minimal corporate information strictly necessary for commercial correspondence, project brief formulation, and encrypted file transfer, adhering to international privacy standards.",
      privacyP2Title: "2. ZERO PUBLIC AI MODEL TRAINING",
      privacyP2Body: "Zero client media, reference drafts, or proprietary brand identities are ever submitted to or used to train public generative AI foundation models.",
      privacyP3Title: "3. HARDWARE-LEVEL ENCRYPTION, STORAGE & DATA PURGE",
      privacyP3Body: "All uploaded brief assets (PNG, JPG, MP4, MOV, PDF, ZIP) are stored in secure, encrypted storage with restricted access. Clients retain the contractual right to request the complete cryptographic purge of all project files and uploaded media upon project completion.",
      privacyP4Title: "4. SECURE FILE RETENTION & RESTRICTED ACCESS",
      privacyP4Body: "All uploaded project assets and reference media are isolated on encrypted volumes and never shared with third-party networks or aggregators."
    },
    footer: `© ${new Date().getFullYear()} AI.VIENNE Studio+. All rights reserved.`
  },
  TR: {
    nav: { portfolio: "Konsept Arşivi", capabilities: "Yetkinlikler", services: "Hizmetler", avatar: "Dijital Karakterler", studio: "Stüdyo", system: "Süreç", theStudio: "Stüdyomuz", transformation: "Dönüşüm", roi: "Üretim Ekonomisi", journal: "İçgörüler", contact: "Talep", cta: "PROJE BAŞLAT" },
    hero: { badge: "Yapay Zeka Destekli Lüks Görsel Prodüksiyon Evi", titleStart: "Yüksek Moda, Mücevher ve Saatçilikte", titleGradient: "Neural Zanaatkarlık", desc: "Hassasiyet ve mükemmellik talep eden markalar için yapay zeka destekli kampanya görselleri, sinematik videolar, lüks ürün görselleştirmeleri ve tutarlı dijital karakterler.", btnPrimary: "Konsept Arşivini İncele", directAccessLabel: "Doğrudan İletişim:" },
    manifesto: { sub: "KREATİF KODUMUZ", line1: "Geçici dijital trendlere uyum sağlamıyoruz.", line2: "ZAMANSIZ LÜKS EVRENLER İNŞA EDİYORUZ." },
    servicesPillars: {
      tag: "TEMEL PRODÜKSİYON DİSİPLİNLERİ",
      title: "Stratejik Prodüksiyon Hizmetleri",
      desc: "Görsel üretim süreçlerini kolaylaştırmak ve fiziksel ile dijital amiral gemilerinde marka ifadesini yükseltmek için tasarlanmış hizmetler.",
      leadTimeLabel: "Ortalama Teslim Süresi",
      leadTimeNote: "Süreler proje kapsamı, varlık adedi, revizyon döngüleri ve teslimat formatlarına göre değişiklik gösterebilir.",
      s1Tag: "KAMPANYALAR",
      s1Title: "Haute Couture & Sezonluk Kampanyalar",
      s1Desc: "Fiziksel mekan ve lojistik kısıtlamaları olmadan üretilen sezonluk moda kampanya görselleri ve editoryal stil anlatıları.",
      s1Capabilities: "Konsept Yönetimi · Editoryal Görseller · Kumaş Hareketi · Çoklu Kampanya Sistemleri",
      s1Deliverables: "Hero Görseller · Lookbook Paketleri · Dikey Sosyal Medya Kurguları · Video Döngüleri",
      s1Time: "7 – 10 İş Günü",
      s2Tag: "ÜRÜN VE SAATÇİLİK",
      s2Title: "Haute Horlogerie & Lüks Mücevherat",
      s2Desc: "Kontrollü ışık yansımaları, pırlanta kırılımları ve lüks saat mekanizması detaylarıyla makro ürün görselleştirmesi.",
      s2Capabilities: "Referans Hizalama · Hassas Işık Kontrolü · Değerli Taş Kırılımı · Horolojik Detay Görselleştirmesi",
      s2Deliverables: "Hero Ürün Görselleri · Makro Detay Serileri · Video Döngüleri · Dekupe E-Ticaret Masterları",
      s2Time: "5 – 8 İş Günü",
      s3Tag: "DİJİTAL KARAKTERLER",
      s3Title: "Kalıcı Marka Ambasadorları",
      s3Desc: "Sezonlar boyunca yüz oranlarını, cilt dokusunu ve stil tutarlılığını koruyan markaya özel dijital model üretimi.",
      s3Capabilities: "Kimlik Tutarlılığı · Çok Katmanlı Cilt Kalibrasyonu · Gardırop Uyarlaması · Poz ve Hareket Sürekliliği",
      s3Deliverables: "Markaya Özel Model Arşivi · Çok Ortamlı Görsel Kütüphane · 4K Video Döngüleri",
      s3Time: "10 – 14 İş Günü",
      s4Tag: "SİNEMATİK VİDEO",
      s4Title: "Marka Mirası & Flagship Filmleri",
      s4Desc: "Dijital amiral gemileri, dev ekranlar ve küresel dijital kanallar için hazırlanan yüksek kare hızlı marka filmleri.",
      s4Capabilities: "Sinematik Hikaye Kurgusu · Hacimsel Atmosfer · Çok Formatlı Uyarlama (16:9, 9:16, 32:9)",
      s4Deliverables: "24 / 30 / 60 FPS Master Dosyalar · Platforma Özel Kurgular · Sinema Standardında Renk Paketi",
      s4Time: "8 – 12 İş Günü"
    },
    capabilitiesSection: {
      tag: "PRODÜKSİYON STANDARTLARI",
      title: "Görsel Üretim Standartları",
      c1Num: "01", c1Title: "HAUTE COUTURE EDİTORYAL", c1Desc: "Doğal kumaş ağırlığı, akışkan döküm ve editoryal atmosfer ile tam kapsamlı sezonluk moda görselleri.",
      c2Num: "02", c2Title: "MÜCEVHER VE SAATÇİLİK", c2Desc: "Kontrollü ışık kırılımı, safir cam yansımaları, pırlanta ışıltısı ve lüks saat mekanizma detayları.",
      c3Num: "03", c3Title: "SİNEMATİK MARKA FİLMLERİ", c3Desc: "Lüks amiral mağaza ekranları ve küresel yayınlar için duygu odaklı sinematik video prodüksiyonları.",
      c4Num: "04", c4Title: "TUTARLI DİJİTAL KARAKTERLER", c4Desc: "Farklı çekim ortamlarında yüz kemik yapısını, ifadesini ve marka stilini tavizsiz koruyan karakter altyapısı.",
      c5Num: "05", c5Title: "ÖLÇEKLENEBİLİR KAMPANYA SİSTEMLERİ", c5Desc: "Tüm temas noktalarında kusursuz renk derecelendirme ve marka DNA tutarlılığı sunan görsel ekosistem."
    },
    capabilitiesTech: {
      tag: "TEKNİK DİSİPLİN",
      title: "Yapay Zeka Destekli Üretim Hattı",
      desc: "Güncel üretici yapay zeka araçları, profesyonel kompozit ve stüdyo post-prodüksiyonunun kusursuz birleşimi.",
      cap1Title: "Yüksek Çözünürlüklü Master Çıktı", cap1Desc: "Baskılı lüks yayınlar, dev açık hava panoları ve dijital amiral gemileri için yüksek çözünürlüklü master üretim.", cap1Tag1: "ÇIKIŞ FORMATI", cap1Tag2: "GEREKTİĞİNDE 8K'YA KADAR",
      cap2Title: "İleri Düzey Cilt ve Materyal Gölgelendirme", cap2Desc: "Doğal görünümlü dijital karakterler için çok katmanlı cilt geçirgenliği ve mikro-doku optimizasyonu.", cap2Tag1: "CİLT DOĞALLIĞI", cap2Tag2: "ORGANİK DOKU",
      cap3Title: "Hassas Materyal ve Işık Kontrolü", cap3Desc: "Yansıtıcı metaller, değerli taşlar ve şeffaf materyallerin dikkatle yönlendirilmiş parlama, yansıma ve optik detaylarla kontrollü işlenmesi.", cap3Tag1: "MATERYAL HAKİMİYETİ", cap3Tag2: "KONTROLLÜ KIRILMA",
      cap4Title: "Karakter Tutarlılık Sistemi", cap4Desc: "Referans kılavuzlu yüz yapısı, oran ve stil kontrolü ile çoklu sahnelerde model tutarlılığı.", cap4Tag1: "TUTARLILIK", cap4Tag2: "REFERANS KILAVUZLU TUTARLILIK"
    },
    system: {
      tag: "AI.VIENNE METODOLOJİSİ",
      title: "Beş Aşamalı Prodüksiyon Protokolü",
      sub: "KEŞİF · YÖNETİM · ÜRETİM · İŞLEME · TESLİMAT",
      s1Num: "01", s1Title: "KEŞİF (DISCOVER)", s1Detail: "Marka kimliği, kampanya hedefleri, kumaş numuneleri ve görsel gereksinimlerin analizi.",
      s2Num: "02", s2Title: "YÖNETİM (DIRECT)", s2Detail: "Sanat yönetimi, ışıklandırma mimarisi, sinematik kadrajlama, görsel dil ve moodboard hizalanması.",
      s3Num: "03", s3Title: "ÜRETİM (PRODUCE)", s3Detail: "Yapay zeka destekli görsel üretimi, materyal sentezi, ışık yönlendirmesi ve yüksek çözünürlüklü iyileştirme.",
      s4Num: "04", s4Title: "İŞLEME (REFINE)", s4Detail: "Haute retouching, materyal iyileştirmesi, renk kalibrasyonu, mücevher ışıltısı ve kalite kontrol.",
      s5Num: "05", s5Title: "TESLİMAT", s5Detail: "Baskıya, dijital amiral gemilerine ve platforma özel video kurgularına hazır master teslimatı."
    },
    studioSection: {
      tag: "STÜDYO",
      title: "AI-Native Lüks Görsel Prodüksiyon Evi",
      desc: "AI.VIENNE Studio+, lüks sanat yönetimi, yapay zeka destekli görsel prodüksiyon ve modern dijital zanaatkarlığın kesişim noktasına odaklanan bağımsız bir yaratıcı pratiktir.",
      founderName: "E. AKTAŞ",
      founderTitle: "Kurucu & Kreatif Direktör",
      founderBio: "AI.VIENNE temel bir ilke üzerine kuruldu: Gelişen yapay zeka destekli üretim teknolojileri, prestijli markaların beklediği titiz estetik disiplinden ve detay hassasiyetinden ödün vermeden kreatif sınırları genişletmelidir.",
      spec1: "Kreatif Direktörlük",
      spec2: "Lüks Görsel Sistemler",
      spec3: "AI Destekli Prodüksiyon",
      opsTitle: "OPERASYONEL PROTOKOLLER",
      opsVal1: "Bağımsız Stüdyo · Global / Uzaktan Erişim",
      opsVal2: "Gizlilik Protokolü (Karşılıklı NDA Güvencesi)"
    },
    insights: {
      tag: "ARAŞTIRMA VE PERSPEKTİFLER",
      title: "AI.VIENNE İçgörüler",
      desc: "Yapay zeka, lüks marka ekonomisi ve modern dijital zanaatkarlığa dair editoryal yazılar.",
      readMore: "İçgörüyü Oku →",
      faqHeading: "Sıkça Sorulan Sorular",
      monograph: "AI.VIENNE Araştırma & Monografi",
      requestPerspective: "Tam Perspektif Talep Et",
      article1Tag: "MODA EKONOMİSİ",
      article1Author: "E. Aktaş",
      article1Date: "Ağustos 2026",
      article1ReadTime: "6 Dk Okuma",
      article1Title: "Dijital Couture Ekonomisi: Kampanya Sürelerini Kısaltmak",
      article1Desc: "Lüks moda evlerinin marka prestijinden ödün vermeden sezonluk çekim sürelerini nasıl hızlandırdığına dair analiz.",
      article1Body1: "Geleneksel lüks moda takvimi kapsamlı fiziksel numune tedariki, çok lokasyonlu çekimler ve aylar süren lojistikle sınırlıydı. AI.VIENNE'in yapılandırılmış üretim hattı, tasarımcıların kumaş döküm fiziğini ve editoryal atmosferi anında test etmelerine olanak tanır.",
      article1Body2: "Yapay zeka sentezi ile titiz stüdyo post-prodüksiyonunun birleşimi, teslim sürelerini haftalardan günlere indirirken haute couture standartlarında görsel çıktılar sunar.",
      article1FaqQ: "Yapay zeka ile numune üretimi, fiziksel kumaş prototipleriyle nasıl karşılaştırılır?",
      article1FaqA: "Yapay zeka ile numune oluşturma; nihai yüksek çözünürlüklü master dosyalar kilitlenmeden önce onay süreçlerini hızlandırarak aydınlatma, drapaj ve stil açılarının saniyeler içinde yinelenmesini sağlar.",
      article2Tag: "DİJİTAL KİMLİK",
      article2Author: "AI.VIENNE Araştırma",
      article2Date: "Ağustos 2026",
      article2ReadTime: "5 Dk Okuma",
      article2Title: "Lüks AI Kampanyalarında Karakter Tutarlılığı",
      article2Desc: "Kalıcı marka modellerinde yüz deformasyonunu engelleyen kimlik sabitleme sistemlerinin teknik incelemesi.",
      article2Body1: "Lüks marka anlatımında model kimliği kareler arasında değişmez olmalıdır. Standart yapay zeka araçları kareler arasında sapmalar üreterek marka algısını zedeler.",
      article2Body2: "AI.VIENNE, anatomik koordinat sabitleme ve katmanlı cilt gölgelendirmesi ile karakter yüz yapısının ve ifadesinin farklı ışık ve açılarda kusursuz süreklilikte kalmasını sağlar.",
      article2FaqQ: "Dijital marka modellerinin yüz ifadeleri ve bakış açıları nasıl korunur?",
      article2FaqA: "Referans destekli nöral kafes haritalama ile modelin kemik anatomisi, göz iris yapısı ve mikro mimikleri tüm açılarda %100 kararlılıkla korunur.",
      article3Tag: "HASSAS MODELLEME",
      article3Author: "AI.VIENNE Optik Laboratuvarı",
      article3Date: "Ağustos 2026",
      article3ReadTime: "5 Dk Okuma",
      article3Title: "Materyal Simülasyonu: Değerli Taş ve Saat Yansımaları",
      article3Desc: "Makro mücevher ve saat görselleştirmesinde kontrollü optik mükemmelliğe ulaşmak.",
      article3Body1: "Lüks mücevherlerin makro fotoğrafçılığı ciddi optik zorluklar barındırır. İstenmeyen ışık parlamaları değerli taşların doğal rengini ve İsviçre mekanizma detaylarını gölgeleyebilir.",
      article3Body2: "Üretim hattımız yansıma, kırılma ve yüzey dokuları üzerinde tam kontrol sağlayarak basılı dergilere ve dijital amiral gemilerine hazır yüksek çözünürlüklü makro görsel varlıklar üretir.",
      article3FaqQ: "İsviçre saatlerindeki safir camlarda iç yansımalar nasıl kontrol edilir?",
      article3FaqA: "Kadran mekaniğini kusursuz bir netlikle sergilemek için yüksek kontrastlı chiaroscuro stüdyo aydınlatmasıyla birleştirilmiş çok katmanlı yansıma önleyici optik geçişler uygularız."
    },
    portfolio: { 
      tag: "AI.VIENNE KONSEPT ARŞİVİ", 
      title: "Spekülatif Kampanya Çalışmaları", 
      desc: "Yüksek moda, mücevher ve lüks saat görselleştirmesi alanındaki prodüksiyon yetkinliklerimizi sergileyen küratörlü konsept çalışmaları inceleyin.", 
      filterAll: "Tüm Konseptler", 
      filter169: "16:9 Geniş Ekran Konseptleri", 
      filter916: "9:16 Dikey Çalışmalar", 
      playVideo: "Spekülatif Çalışmayı İncele", 
      requestScope: "KAPSAM TALEP ET",
      closePreview: "ÖNİZLEMEYİ KAPAT",
      disclaimer: "AI.VIENNE Studio+ tarafından bağımsız olarak üretilmiş spekülatif konsept çalışmasıdır. Gösterilen veya referans verilen hiçbir üçüncü taraf marka ile bağlantısı veya sponsorluğu bulunmamaktadır."
    },
    transformation: { 
      tag: "KONSEPTTEN MASTERE", 
      title: "Görsel Yönelim ve İyileştirme", 
      desc: "İlk konsept taslağının kreatif direktörlük, sentez ve titiz stüdyo işlemleriyle nasıl kusursuz bir kampanya masterına dönüştüğünü inceleyin.", 
      beforeLabel: "İlk Konsept Taslağı", 
      afterLabel: "AI.VIENNE İşlenmiş Master",
      s1: "01 · Yönelim", s2: "02 · Üretim", s3: "03 · İyileştirme", s4: "04 · Final Master"
    },
    estimator: { 
      tag: "ÜRETİM EKONOMİSİ", 
      title: "Prodüksiyon Kapsam Önizlemesi", 
      desc: "Çıktı türü, varlık adedi, üretim karmaşıklığı ve teslimat önceliğinize göre tahmini proje yatırım aralığınızı hesaplayın.", 
      deliverableType: "01 · Çıktı Türü", 
      volumeLabel: "02 · Varlık Adedi", 
      complexityLabel: "03 · Prodüksiyon Karmaşıklığı",
      timelineLabel: "04 · Takvim Önceliği", 
      optStill: "Görseller (Yüksek Çözünürlüklü Master)", 
      optMotion: "Video (Sinematik Döngüler ve Kurgular)", 
      optChar: "Dijital Karakter (Model Paketi)",
      optFull: "Tam Kampanya (Görsel + Video + Model)", 
      vol1: "1 Varlık", 
      vol2: "5 Varlık", 
      vol3: "10 Varlık", 
      vol4: "25+ Varlık",
      compStd: "Standart İyileştirme",
      compPrem: "Premium Detay",
      compCamp: "Kampanya Standardı",
      timeStd: "Standart (7 – 10 İş Günü)", 
      timeExp: "Öncelikli Teslimat (3 – 5 İş Günü)", 
      rangeTitle: "TAHMİNİ PROJE YATIRIM ARALIĞI", 
      startingTier: "Tahmini Yatırım Aralığı",
      disclaimer: "Nihai yatırım tutarı, kreatif kapsam incelemesinden sonra netleştirilir. Kurumsal sezonluk kampanyalar için özel kapsamlar oluşturulmaktadır.", 
      breakdownFactors: "Kapsam Parametreleri: Varlık Sayısı · Video Karmaşıklığı · Materyal İşleme · Revizyon Döngüleri", 
      btnLock: "Resmi Kapsam Teklifi Talep Edin"
    },
    twinsSection: { 
      tag: "DİJİTAL KARAKTERLER", 
      title: "Dijital Karakter Vitrini", 
      desc: "Yüz oranlarını tavizsiz koruyan, doğal cilt mikro-dokusu ve zamansız lüks estetiğe sahip markaya özel dijital modeller.", 
      identityTitle: "Karakter Tutarlılık Sistemi", 
      identityDesc: "Farklı kıyafet, ışık ve ortamlarda yüz anatomisini, doğal oranları ve karakteristik varlığı korumak üzere tasarlanmıştır.",
      useCasesTitle: "DİJİTAL KARAKTERLERİN DEĞER YARATTIĞI ALANLAR",
      uc1: "Kampanya Sürekliliği", uc1Desc: "Paylaşılan lookbook ve editoryal içeriklerde tutarlı model kimliği koruması.",
      uc2: "E-Ticaret Standartları", uc2Desc: "Farklı açı ve stüdyo ışıklarında %100 kusursuz ürün ve model uyumu.",
      uc3: "Sosyal Medya Kurguları", uc3Desc: "Hızlı pazarlama döngüleri için ek çekim maliyeti olmaksızın dinamik varlık üretimi.",
      uc4: "Global Lokasyonlar", uc4Desc: "Karakter anatomisi bozulmadan farklı coğrafi ve mimari sahnelerde render."
    },
    briefSection: { tag: "KREATİF YAPILANDIRICI", title: "İnteraktif Brief Mimarı", desc: "Projenizi başlatmadan önce görsel atmosfer ve stil tercihlerinizi yapılandırın.", s1: "1. Işık Mimarisi", s2: "2. Sektörel Uzmanlık", s3: "3. Mekan ve Atmosfer", applyBtn: "PROJE BRİEFİNE EKLE", configLabel: "Seçili Parametreler:" },
    chatConsole: { title: "Proje Masası", sub: "Özel Danışmanlık, Kapsam Belirleme ve Karşılıklı NDA Talepleri", placeholder: "Markanızı, lansman takviminizi veya hedeflerinizi iletin...", send: "Brief İlet", welcome: "AI.VIENNE Studio+ Proje Masasına hoş geldiniz. Proje hedeflerinizi paylaşabilirsiniz. Tüm talepler gizlilik protokolüyle incelenir." },
    contact: { 
      tag: "PROJE TALEBİ", 
      title: "Proje Briefinizi Başlatın", 
      desc: "Marka kampanyalarınızı yüksek hassasiyetli dijital görsel standartlara taşımak için AI.VIENNE Studio+ ile iletişime geçin.", 
      namePlaceholder: "Yetkili Kişi & Marka Adı *", 
      emailPlaceholder: "Kurumsal E-Posta Adresi *", 
      websitePlaceholder: "Şirket Web Sitesi (örn: marka.com)", 
      datePlaceholder: "Hedef Lansman / Teslim Tarihi", 
      serviceLabel: "Prodüksiyon Alanı Seçin", 
      sOpt1: "Haute Couture & Sezonluk Kampanyalar", 
      sOpt2: "Haute Horlogerie & Lüks Mücevherat Görselleştirmesi", 
      sOpt3: "Kalıcı Dijital Marka Ambasadorları", 
      sOpt4: "Marka Mirası & Flagship Filmleri", 
      sOpt5: "Lüks Parfüm ve Kozmetik Kampanyası", 
      sOpt6: "Lüks Gözlük ve Optik Prodüksiyonu", 
      sOpt7: "Özel Çok Kanallı Kampanya Ekosistemi", 
      budgetLabel: "Tahmini Prodüksiyon Bütçesi (USD)", 
      bOpt1: "Başlangıç Kapsamı: $5,000'den başlayan", 
      bOpt2: "Sezonluk Kampanya Paketi: $5,000 – $15,000", 
      bOpt3: "Tam Video ve Karakter Ekosistemi: $15,000 – $35,000+", 
      bOpt4: "Özel Kapsam / İhtiyaca Göre Belirlenen", 
      ndaLabel: "Materyal paylaşımı öncesi Karşılıklı Gizlilik Sözleşmesi (NDA) talep ediyorum", 
      uploadTitle: "Referans Dosya Yükleme (Maks 25MB)", 
      uploadHint: "Referans dosyalarınızı sürükleyin (PNG, JPG, PDF, ZIP). Büyük video dosyaları için lütfen aşağıda mesaj bölümüne Frame.io, Google Drive, Dropbox veya WeTransfer bağlantısı ekleyin.", 
      messagePlaceholder: "Kampanya hedefleriniz, teslimat takviminiz, estetik beklentileriniz hakkında bilgi verin...", 
      submitBtn: "Gizli Brief'i Gönder", 
      directEmail: "Project Desk:",
      nextStepsTitle: "SONRAKİ ADIMLAR",
      ns1Title: "01 · İNCELEME", ns1Desc: "Briefinizi, estetik yöneliminizi ve referans materyallerinizi inceliyoruz.",
      ns2Title: "02 · KAPSAM", ns2Desc: "Net teslimat formatlarını, zaman planını ve prodüksiyon gereksinimlerini belirliyoruz.",
      ns3Title: "03 · TEKLİF", ns3Desc: "NDA kapsamında projenize özel kapsam ve yatırım teklifi sunuyoruz.",
      ns4Title: "04 · PRODÜKSİYON", ns4Desc: "Karşılıklı onay sonrasında sanat yönetimi ve görsel üretim süreci başlıyor."
    },
    footerSection: { navTitle: "01 / NAVİGASYON", dirTitle: "02 / DİREKTÖRİK", netTitle: "03 / AĞLARIMIZ", studio: "Stüdyomuz", works: "Konsept Arşivi", initiate: "Proje Başlat", location: "Bağımsız Stüdyo · Global / Uzaktan Erişim", terms: "HİZMET VE KULLANIM ŞARTLARI", privacy: "GİZLİLİK VE VERİ KORUMA PROTOKOLÜ" },
    modals: {
      termsTitle: "Hizmet Şartları ve Prodüksiyon Standartları",
      termsP1Title: "1. FİKRİ MÜLKİYET VE KULLANIM HAKLARI",
      termsP1Body: "Proje bedelinin tamamlanmasının ardından üretilen tüm nihai master görseller, video dosyaları ve dijital varlıklar sınırsız ve süresiz olarak Müşteriye devredilir. Müşteri ek telif ödemeksizin dijital platformlarda, basılı medyada ve açık hava panolarında tam ticari kullanım hakkına sahiptir.",
      termsP2Title: "2. YAYIN ÖNCESİ GİZLİLİK VE KARŞILIKLI NDA",
      termsP2Body: "Müşteri tarafından iletilen tüm brief'ler, moodboard'lar ve yayınlanmamış koleksiyon çizimleri talep üzerine Karşılıklı Gizlilik Sözleşmesi (NDA) altında korunur. Prodüksiyon tamamen izole ve güvenli ortamlarda yürütülür.",
      termsP3Title: "3. RENK KALİBRASYONU VE REVİZYONLAR",
      termsP3Body: "Prodüksiyon süreçleri; renk dengesi, materyal gölgelendirmesi ve kompozisyon uyumu için onaylı brief'e tam uyumu garanti eden yapılandırılmış revizyon döngülerini içerir.",
      termsP4Title: "4. MASTER ÇÖZÜNÜRLÜK STANDARTLARI",
      termsP4Body: "Nihai görseller gerçek yüksek çözünürlükte (gerektiğinde 8K'ya kadar) ve videolar sinematik kare hızında yayın standartlarına uygun olarak teslim edilir.",
      privacyTitle: "Gizlilik ve Veri Koruma Protokolü",
      privacyP1Title: "1. KURUMSAL VERİ GÜVENLİĞİ",
      privacyP1Body: "Yalnızca teklif oluşturma, proje brief iletişimi ve şifreli dosya transferi için gerekli asgari kurumsal veriler uluslararası standartlara uygun olarak işlenir.",
      privacyP2Title: "2. AÇIK YAPAY ZEKA MODELLERİNE EĞİTİM VERİLMEZ",
      privacyP2Body: "Müşterilerimize ait hiçbir tasarım veya biyometrik yüz taraması herkese açık yapay zeka modellerinin eğitiminde kesinlikle kullanılmaz.",
      privacyP3Title: "3. ŞİFRELİ DEPOLAMA VE VERİ İMHA HAKKI",
      privacyP3Body: "Yüklenen tüm proje dosyaları (PNG, JPG, MP4, MOV, PDF, ZIP) şifreli ve yetkilendirilmiş sunucularda saklanır. Müşteriler teslimat sonrasında tüm çalışma dosyalarının kalıcı olarak imha edilmesini talep etme hakkına sahiptir.",
      privacyP4Title: "4.GÜVENLİ DOSYA RETENTION VE ERİŞİM",
      privacyP4Body: "Yüklenen tüm referans medya şifrelenmiş izole disklerde barındırılır ve üçüncü taraf modellerle kesinlikle paylaşılmaz."
    },
    footer: `© ${new Date().getFullYear()} AI.VIENNE Studio+. Tüm hakları saklıdır.`
  }
};