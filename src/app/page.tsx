"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  FileText,
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
  ExternalLink,
  Info,
  Calendar,
  User,
  BookOpen,
  Volume2,
  VolumeX,
  LucideIcon
} from "lucide-react";

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
    hero: { badge: "AI-Native Luxury Visual Production House", titleStart: "Elevating High Fashion, Fine Jewelry & Horlogerie Through", titleGradient: "Neural Craftsmanship", desc: "AI-assisted campaign imagery, cinematic motion, luxury product visualization and consistent digital characters — directed for brands that demand precision.", btnPrimary: "Explore Concept Archive", btnSecondary: "Direct Access: info@aivienne.com" },
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
      article1Tag: "FASHION ECONOMICS",
      article1Title: "The Economics of Digital Couture: Compressing Campaign Cycles",
      article1Desc: "How modern fashion ateliers deploy AI-assisted visual pipelines to accelerate seasonal campaigns without diminishing brand prestige.",
      article1Body1: "Traditional luxury fashion production has historically been bound to extensive physical sampling, complex multi-country shoots, and long turnaround cycles. AI.VIENNE's structured workflow allows creative directors to test fabric draping, textures, and atmospheres before committing to physical assets.",
      article1Body2: "By blending AI synthesis with meticulous studio post-production, campaign timelines can be compressed from months into days, while ensuring color-accurate representation of haute couture creations.",
      article2Tag: "DIGITAL IDENTITY",
      article2Title: "Character Consistency in Luxury AI Campaigns",
      article2Desc: "A technical examination of identity retention systems preventing facial morphing in recurring brand ambassadors.",
      article2Body1: "In luxury storytelling, model identity must remain immutable across scenes. Generic generative tools often suffer from drift between frames, which breaks brand cohesion.",
      article2Body2: "AI.VIENNE utilizes landmark retention and layered skin shading to ensure that facial structure, proportions, and expression remain consistent across diverse lighting conditions and camera lenses.",
      article3Tag: "PRECISION RENDERING",
      article3Title: "Material Simulation: Gemstone & Watch Refraction",
      article3Desc: "Achieving controlled optical brilliance in macro jewelry and timepiece visualization.",
      article3Body1: "Macro photography of high jewelry presents extreme studio lighting challenges. Unwanted reflections and flare can obscure the natural fire of precious stones and the finishing of Swiss movements.",
      article3Body2: "Our pipeline allows precise control over reflection, dispersion, and surface textures, producing high-resolution macro visual assets ready for editorial print and digital flagships."
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
      bOpt1: "Starting Project Range: From $2,500", 
      bOpt2: "Seasonal Campaign Suite: $5,000 – $15,000", 
      bOpt3: "Full Motion & Character Ecosystem: $15,000 – $35,000+", 
      bOpt4: "Custom Production / Scoped to Requirements", 
      ndaLabel: "Require Mutual Non-Disclosure Agreement (NDA) prior to asset disclosure", 
      uploadTitle: "Upload Reference Files (Max 25MB)", 
      uploadHint: "Drag and drop reference files (PNG, JPG, PDF, ZIP). For larger video assets, please paste a Frame.io, Google Drive, Dropbox, or WeTransfer link in your message below.", 
      messagePlaceholder: "Outline your campaign goals, deliverables, aesthetic requirements, and timeline (include Cloud/WeTransfer video links here if applicable)...", 
      submitBtn: "Submit Confidential Brief", 
      directEmail: "Project Desk: info@aivienne.com",
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
    footer: "© 2026 AI.VIENNE Studio+. All rights reserved."
  },
  TR: {
    nav: { portfolio: "Konsept Arşivi", capabilities: "Yetkinlikler", services: "Hizmetler", avatar: "Dijital Karakterler", studio: "Stüdyo", system: "Süreç", theStudio: "Stüdyomuz", transformation: "Dönüşüm", roi: "Üretim Ekonomisi", journal: "İçgörüler", contact: "Talep", cta: "PROJE BAŞLAT" },
    hero: { badge: "Yapay Zeka Destekli Lüks Görsel Prodüksiyon Evi", titleStart: "Yüksek Moda, Mücevher ve Saatçilikte", titleGradient: "Neural Zanaatkarlık", desc: "Hassasiyet ve mükemmellik talep eden markalar için yapay zeka destekli kampanya görselleri, sinematik videolar, lüks ürün görselleştirmeleri ve tutarlı dijital karakterler.", btnPrimary: "Konsept Arşivini İncele", btnSecondary: "Doğrudan İletişim: info@aivienne.com" },
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
      article1Tag: "MODA EKONOMİSİ",
      article1Title: "Dijital Couture Ekonomisi: Kampanya Sürelerini Kısaltmak",
      article1Desc: "Lüks moda evlerinin marka prestijinden ödün vermeden sezonluk çekim sürelerini nasıl hızlandırdığına dair analiz.",
      article1Body1: "Geleneksel lüks moda takvimi kapsamlı fiziksel numune tedariki, çok lokasyonlu çekimler ve aylar süren lojistikle sınırlıydı. AI.VIENNE'in yapılandırılmış üretim hattı, tasarımcıların kumaş döküm fiziğini ve editoryal atmosferi anında test etmelerine olanak tanır.",
      article1Body2: "Yapay zeka sentezi ile titiz stüdyo post-prodüksiyonunun birleşimi, teslim sürelerini haftalardan günlere indirirken haute couture standartlarında görsel çıktılar sunar.",
      article2Tag: "DİJİTAL KİMLİK",
      article2Title: "Lüks AI Kampanyalarında Karakter Tutarlılığı",
      article2Desc: "Kalıcı marka modellerinde yüz deformasyonunu engelleyen kimlik sabitleme sistemlerinin teknik incelemesi.",
      article2Body1: "Lüks marka anlatımında model kimliği kareler arasında değişmez olmalıdır. Standart yapay zeka araçları kareler arasında sapmalar üreterek marka algısını zedeler.",
      article2Body2: "AI.VIENNE, anatomik koordinat sabitleme ve katmanlı cilt gölgelendirmesi ile karakter yüz yapısının ve ifadesinin farklı ışık ve açılarda kusursuz süreklilikte kalmasını sağlar.",
      article3Tag: "HASSAS MODELLEME",
      article3Title: "Materyal Simülasyonu: Değerli Taş ve Saat Yansımaları",
      article3Desc: "Makro mücevher ve saat görselleştirmesinde kontrollü optik mükemmelliğe ulaşmak.",
      article3Body1: "Lüks mücevherlerin makro fotoğrafçılığı ciddi optik zorluklar barındırır. İstenmeyen ışık parlamaları değerli taşların doğal rengini ve İsviçre mekanizma detaylarını gölgeleyebilir.",
      article3Body2: "Üretim hattımız yansıma, kırılma ve yüzey dokuları üzerinde tam kontrol sağlayarak basılı dergilere ve dijital amiral gemilerine hazır yüksek çözünürlüklü makro görsel varlıklar üretir."
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
      uc1: "Kampanya Sürekliliği", uc1Desc: "Sezonluk lookbook'larda tanınabilir ve tutarlı bir marka kimliği oluşturun.",
      uc2: "E-Ticaret", uc2Desc: "Koleksiyonlar genelinde tekrarlayan, homojen ve yüksek kaliteli model görselleri.",
      uc3: "Sosyal İçerikler", uc3Desc: "Karakter kimliğini baştan kurmaya gerek kalmadan düzenli editoryal görsel üretimi.",
      uc4: "Global Varyasyonlar", uc4Desc: "Karakter geometrisini koruyarak atmosfer, stil ve bölgesel kampanya uyarlamaları yapın."
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
      bOpt1: "Başlangıç Kapsamı: $2,500'den başlayan", 
      bOpt2: "Sezonluk Kampanya Paketi: $5,000 – $15,000", 
      bOpt3: "Tam Video ve Karakter Ekosistemi: $15,000 – $35,000+", 
      bOpt4: "Özel Kapsam / İhtiyaca Göre Belirlenen", 
      ndaLabel: "Materyal paylaşımı öncesi Karşılıklı Gizlilik Sözleşmesi (NDA) talep ediyorum", 
      uploadTitle: "Referans Dosya Yükleme (Maks 25MB)", 
      uploadHint: "Referans dosyalarınızı sürükleyin (PNG, JPG, PDF, ZIP). Büyük video dosyaları için lütfen aşağıda mesaj bölümüne Frame.io, Google Drive, Dropbox veya WeTransfer bağlantısı ekleyin.", 
      messagePlaceholder: "Kampanya hedefleriniz, teslimat takviminiz, estetik beklentileriniz hakkında bilgi verin (varsa Cloud/WeTransfer video linklerini buraya ekleyebilirsiniz)...", 
      submitBtn: "Gizli Brief'i Gönder", 
      directEmail: "Project Desk: info@aivienne.com",
      nextStepsTitle: "SONRAKİ ADIMLAR",
      ns1Title: "01 · İNCELEME", ns1Desc: "Briefinizi, estetik yöneliminizi ve referans materyallerinizi inceliyoruz.",
      ns2Title: "02 · KAPSAM", ns2Desc: "Nihai teslimat formatlarını, takvim adımlarını ve üretim gereksinimlerini belirliyoruz.",
      ns3Title: "03 · TEKLİF", ns3Desc: "NDA kapsamında size özel hazırlanmış proje kapsamını ve teklifi iletiyoruz.",
      ns4Title: "04 · PRODÜKSİYON", ns4Desc: "Karşılıklı mutabakatın ardından sanat yönetimi ve görsel üretim başlıyor."
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
      privacyP4Title: "4. GÜVENLİ DOSYA RETENTION VE ERİŞİM",
      privacyP4Body: "Yüklenen tüm referans medya şifrelenmiş izole disklerde barındırılır ve üçüncü taraf modellerle kesinlikle paylaşılmaz."
    },
    footer: "© 2026 AI.VIENNE Studio+. Tüm hakları saklıdır."
  }
};

const LANGUAGES = [
  { code: "EN", name: "English", dir: "ltr", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "TR", name: "Türkçe", dir: "ltr", flag: "https://flagcdn.com/w40/tr.png" }
];

interface CaseStudyItem {
  id: string;
  conceptNum: string;
  title: string;
  discipline: string;
  category: "jewelry" | "fashion" | "watch" | "eyewear" | "perfume";
  aspect: "16:9" | "9:16";
  type: "video" | "image";
  badge: string;
  icon: LucideIcon;
  poster: string;
  videoUrl: string;
  desc: string;
  brief: string;
  direction: string;
  production: string;
  materialStudy: string;
  deliverables: string;
  productionNotes: string;
}

interface ArticleItem {
  tag: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  body1: string;
  body2: string;
  faqQ1?: string;
  faqA1?: string;
}

const PORTFOLIO_ITEMS: CaseStudyItem[] = [
  { 
    id: "1", 
    conceptNum: "CONCEPT / 01",
    title: "Imperial Diamond Showcase", 
    discipline: "High Jewelry — Speculative Study",
    category: "jewelry", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 CINEMATIC STUDY", 
    icon: Gem, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/obsidian-necklace.mp4", 
    desc: "Controlled gemstone light refraction and multi-faceted diamond brilliance under studio lighting.", 
    brief: "Visualizing a multi-layered diamond necklace in dynamic motion without specular distortion.",
    direction: "Chiaroscuro lighting architecture with deep obsidian contrasting velvety highlights.",
    production: "AI-assisted multi-pass rendering combined with fine caustic raytracing and manual post-color balance.",
    materialStudy: "Platinum specular mapping, dispersion fire calibration, and micro-facet light falloff.",
    deliverables: "Hero Product Stills · Macro Detail Series · Motion Loops · Cutout Masters",
    productionNotes: "Behind the Master: Rendered via iterative lighting passes with custom chromatic dispersion curves to eliminate synthetic flare."
  },
  { 
    id: "2", 
    conceptNum: "CONCEPT / 02",
    title: "Haute Couture Vertical Motion", 
    discipline: "Fashion Runway — Speculative Study",
    category: "fashion", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 VERTICAL MOTION", 
    icon: Sparkle, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/2.mp4", 
    desc: "Vertical motion aesthetics engineered for mobile digital flagships and luxury social campaigns.", 
    brief: "Simulating fluid heavy-silk movement and structural pleating without physical runway logistics.",
    direction: "Parisian salon atmosphere with naturalistic diffused rim lighting.",
    production: "Generative fabric movement combined with high-frame-rate interpolation and textile color grading.",
    materialStudy: "Silk crepe de chine translucency, gold lamé weave texture, and natural gravity draping.",
    deliverables: "9:16 4K Campaign Reel · High-Resolution Cutdowns · Editorial Stills",
    productionNotes: "Behind the Master: Multi-stage prompt synthesis and layered compositing to maintain cloth tension and silhouette integrity across frames."
  },
  { 
    id: "3", 
    conceptNum: "CONCEPT / 03",
    title: "Royal Tourbillon Horlogerie", 
    discipline: "Horology Mechanism — Speculative Study",
    category: "watch", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 HOROLOGY STUDY", 
    icon: Watch, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/aurelia-campaign-loop.mp4", 
    desc: "Swiss timepiece complication visualization with sapphire glass reflection control.", 
    brief: "Showcasing internal skeleton escapement motion through anti-reflective curved sapphire crystal.",
    direction: "Precision moody technical lighting emphasizing brushed titanium bevels.",
    production: "Reference-aligned geometry integrated with neural light shaders and kinematic movement.",
    materialStudy: "Blued steel screws, brushed rhodium plates, and anti-reflective optical coatings.",
    deliverables: "16:9 4K Cinema Loop · High-Resolution Master Stills · Movement Isolations",
    productionNotes: "Behind the Master: Reference-guided structural synthesis ensuring precise gear tooth meshing and realistic optical transparency."
  },
  { 
    id: "4", 
    conceptNum: "CONCEPT / 04",
    title: "Avant-Garde Titanium Optics", 
    discipline: "Luxury Eyewear — Speculative Study",
    category: "eyewear", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 EDITORIAL POSTER", 
    icon: Glasses, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/titanium-eyewear.mp4", 
    desc: "Brushed titanium frames and polarized gradient lens reflections in vertical fashion format.", 
    brief: "Creating high-fashion eyewear campaign assets balancing metal textures with gradient lenses.",
    direction: "Minimalist brutalist architectural set with high-contrast sunlight.",
    production: "AI character generation combined with optical lens shading and polarization grading.",
    materialStudy: "Anisotropic brushed titanium, UV400 gradient lens reflections, and natural skin contact.",
    deliverables: "Vertical Billboard Master · High-Resolution Print Posters · Digital Lookbook",
    productionNotes: "Behind the Master: Precision face-fitting pass ensuring eyewear geometry rests naturally across facial bone landmarks."
  },
  { 
    id: "5", 
    conceptNum: "CONCEPT / 05",
    title: "Haute Parfumerie Crystal Essence", 
    discipline: "Prestige Fragrance — Speculative Study",
    category: "perfume", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 MACRO STUDY", 
    icon: Sparkles, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/crystal-perfume.mp4", 
    desc: "Hand-cut crystal flacon and golden fluid dynamics rendered in dramatic studio chiaroscuro.", 
    brief: "Visualizing luxury perfume flacon refraction with internal golden liquid interaction.",
    direction: "Warm gilded palace atmosphere with backlit amber translucency.",
    production: "Volumetric light ray simulation paired with fluid motion solvers and high-pass clarity.",
    materialStudy: "Heavy lead crystal refraction, gold foil embossed label, and amber liquid viscosity.",
    deliverables: "16:9 Cinema Cut · E-Flagship Hero Still Suite · Social Cutdowns",
    productionNotes: "Behind the Master: Multi-layered photon render to isolate bottle glass thickness from inner liquid movement."
  },
  { 
    id: "6", 
    conceptNum: "CONCEPT / 06",
    title: "Emerald Solitaire Study", 
    discipline: "Fine Jewelry — Speculative Study",
    category: "jewelry", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 HIGH JEWELRY", 
    icon: Gem, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/emerald-ring.mp4", 
    desc: "Deep emerald green mineral dispersion and micro-pavé brilliance tailored for vertical screens.", 
    brief: "Capturing authentic Colombian emerald jardin inclusions without synthetic artificiality.",
    direction: "Moody emerald velvet staging with targeted fiber-optic spot lighting.",
    production: "Spectral color grading combined with mineral subsurface absorption and pavé reflection tuning.",
    materialStudy: "Natural emerald inclusions, high-polish platinum claws, and round brilliant diamonds.",
    deliverables: "9:16 Vertical Video Master · Editorial Social Suite · Print Masters",
    productionNotes: "Behind the Master: Customized green absorption shader replicating natural emerald depth under variable studio lux."
  },
  { 
    id: "7", 
    conceptNum: "CONCEPT / 07",
    title: "Sapphire Skeleton Caliber", 
    discipline: "Horology Master — Speculative Study",
    category: "watch", 
    aspect: "16:9",
    type: "video", 
    badge: "9:16 TIMEPIECE MASTER", 
    icon: Watch, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/watch-promo.mp4", 
    desc: "Swiss perpetual skeleton movement and raytraced case architecture in 16:9 widescreen.", 
    brief: "Visualizing complex multi-axis mechanical gear assemblies in dynamic exploded motion.",
    direction: "Monochrome industrial luxury palette with micro-highlight accents.",
    production: "Kinematic gear solver combined with generative surface reflection passes and 8K upscaling.",
    materialStudy: "Sandblasted matte bridges, mirror-polished anglage, and synthetic sapphire bridges.",
    deliverables: "16:9 Master Video · 8K Macro Editorial Stills · Detail Cutouts",
    productionNotes: "Behind the Master: Synchronized gear rotation timeline ensuring horological mechanical accuracy throughout camera sweeps."
  },
  { 
    id: "8", 
    conceptNum: "CONCEPT / 08",
    title: "Sovereign Diamond Necklace", 
    discipline: "Haute Joaillerie — Speculative Study",
    category: "jewelry", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 HIGH JEWELRY", 
    icon: Gem, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/jewelry-reel.mp4", 
    desc: "Cascading brilliant-cut necklace with fluid articulation and prismatic caustics in 9:16 vertical.", 
    brief: "Creating fluid body motion for a high jewelry diamond necklace on a digital model silhouette.",
    direction: "Evening gala noir lighting with sharp diamond sparkle catchlights.",
    production: "Dynamic model neck-mesh tracking integrated with physical diamond chain articulation solvers.",
    materialStudy: "18k white gold flexible articulation, D-flawless diamond fire, and subtle collarbone contact.",
    deliverables: "4K Vertical Reel · 8K Print Master Archive · Campaign Loops",
    productionNotes: "Behind the Master: Frame-by-frame light interaction pass aligning individual diamond flashes with camera velocity."
  }
];

const DIGITAL_TWINS = [
  { 
    id: "vienne", 
    name: "Vienne — Digital Character", 
    role: "Haute Couture & High Jewelry Model", 
    lighting: "Chiaroscuro Gold Studio", 
    outfit: "Silk Evening Gown & Emerald Pavé", 
    bg: "from-amber-900/40 via-neutral-950 to-neutral-950",
    poster: "/vienne-portrait.jpg",
    video: "/vienne-campaign-loop.mp4"
  },
  { 
    id: "aurelia", 
    name: "Aurelia — Avant-Garde Face", 
    role: "Horology & Precision Optics Model", 
    lighting: "Controlled Studio Reflections", 
    outfit: "Titanium Armor & Sapphire Lens", 
    bg: "from-blue-900/40 via-neutral-950 to-neutral-950",
    poster: "/vienne-portrait.jpg",
    video: "/aurelia-avatar.mp4"
  }
];

export default function Home() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const studioMenuRef = useRef<HTMLDivElement | null>(null);

  const [estType, setEstType] = useState<"still" | "motion" | "char" | "full">("still");
  const [estVolume, setEstVolume] = useState<"vol1" | "vol2" | "vol3" | "vol4">("vol1");
  const [estComplexity, setEstComplexity] = useState<"std" | "prem" | "camp">("std");
  const [estTimeline, setEstTimeline] = useState<"std" | "exp">("std");

  const [sliderPos, setSliderPos] = useState<number>(50);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyItem | null>(null);

  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const twinVideoRef = useRef<HTMLVideoElement | null>(null);

  const [causticsPosLeft, setCausticsPosLeft] = useState({ x: 50, y: 50 });
  const [causticsPosRight, setCausticsPosRight] = useState({ x: 50, y: 50 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    launchDate: "",
    service: "sOpt1",
    budget: "bOpt1",
    requireNDA: true,
    message: ""
  });

  const [formStatus, setFormStatus] = useState<{ success?: string; error?: string } | null>(null);
  const [briefLighting, setBriefLighting] = useState("Dramatic Studio Gold");
  const [briefSegment, setBriefSegment] = useState("Swiss Horlogerie Timepiece");
  const [briefAtmosphere, setBriefAtmosphere] = useState("Parisian Palace Runway");

  const [selectedTwin, setSelectedTwin] = useState(DIGITAL_TWINS[0]);
  const [isDeskOpen, setIsDeskOpen] = useState(false);
  const [deskMessage, setDeskMessage] = useState("");

  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = TRANSLATIONS[selectedLang.code] || TRANSLATIONS.EN;
  const isRTL = selectedLang.dir === "rtl";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#terms" || hash === "#terms-of-engagement") {
        setActiveModal("terms");
      } else if (hash === "#privacy" || hash === "#privacy-policy") {
        setActiveModal("privacy");
      }
    }
  }, []);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "169") return item.aspect === "16:9";
    if (activeFilter === "916") return item.aspect === "9:16";
    return true;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => { setMousePos({ x: e.clientX, y: e.clientY }); };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (studioMenuRef.current && !studioMenuRef.current.contains(e.target as Node)) {
        setIsStudioOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCaseStudy(null);
        setActiveArticle(null);
        setActiveModal(null);
        setIsDeskOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTwinVideoMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (twinVideoRef.current) {
      twinVideoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const handleLeftCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCausticsPosLeft({ x, y });
  };

  const handleRightCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCausticsPosRight({ x, y });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const validFiles = Array.from(files).filter(file => file.size <= 25 * 1024 * 1024);
      if (validFiles.length !== files.length) {
        alert("Bazı dosyalar 25MB limitini aştığı için eklenmedi.");
      }
      setAttachedFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => { setAttachedFiles((prev) => prev.filter((_, i) => i !== index)); };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("website", formData.website);
      data.append("launchDate", formData.launchDate);
      data.append("service", formData.service);
      data.append("budget", formData.budget);
      data.append("requireNDA", String(formData.requireNDA));
      data.append("message", formData.message);

      attachedFiles.forEach((file) => {
        data.append("files", file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "E-posta gönderilemedi.");
      }

      setFormStatus({ success: "Proje briefiniz başarıyla iletildi. 24 saat içinde dönüş yapılacaktır." });
      setFormData({
        name: "",
        email: "",
        website: "",
        launchDate: "",
        service: "sOpt1",
        budget: "bOpt1",
        requireNDA: true,
        message: ""
      });
      setAttachedFiles([]);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu";
      setFormStatus({ error: "Gönderim Hatası: " + errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

  const applyBriefToForm = () => {
    setFormData(prev => ({
      ...prev,
      message: `[BRIEF ARCHITECT CONFIGURATION]\n- Lighting: ${briefLighting}\n- Industry Focus: ${briefSegment}\n- Atmosphere: ${briefAtmosphere}\n\nPlease prepare an official scope and production proposal based on these parameters.`
    }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const selectServicePillar = (serviceKey: string, serviceName: string) => {
    setFormData(prev => ({
      ...prev,
      service: serviceKey,
      message: `[SERVICE COMMISSION INQUIRY: ${serviceName}]\nWe would like to request an official project scope discussion for ${serviceName}.`
    }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const calculateEstimate = () => {
    let base = 2500;
    if (estType === "motion") base = 4500;
    if (estType === "char") base = 6000;
    if (estType === "full") base = 12000;

    let multiplier = 1;
    if (estVolume === "vol2") multiplier = 2.2;
    if (estVolume === "vol3") multiplier = 4;
    if (estVolume === "vol4") multiplier = 8.5;

    let compMultiplier = 1;
    if (estComplexity === "prem") compMultiplier = 1.35;
    if (estComplexity === "camp") compMultiplier = 1.8;

    let timelineMultiplier = 1;
    if (estTimeline === "exp") timelineMultiplier = 1.25;

    const low = Math.round(base * multiplier * compMultiplier * timelineMultiplier);
    const high = Math.round(low * 1.6);

    return `$${low.toLocaleString()} – $${high.toLocaleString()}`;
  };

  return (
    <main dir={selectedLang.dir} className={`min-h-screen w-full max-w-full overflow-x-hidden bg-neutral-950 text-neutral-100 selection:bg-amber-500/20 selection:text-amber-200 relative pt-20 sm:pt-24 ${isRTL ? "font-serif" : ""}`}>
      <div className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-amber-400/80 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />
      <div className="fixed pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-amber-400 -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />

      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.12),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px]" />

      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setActiveCaseStudy(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 lg:p-10"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }} 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-neutral-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col lg:flex-row"
            >
              <button 
                type="button"
                onClick={() => setActiveCaseStudy(null)} 
                aria-label="Close Study"
                className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-neutral-900/90 border border-amber-400/60 text-amber-300 hover:text-neutral-950 hover:bg-amber-400 transition-all cursor-pointer shadow-2xl"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              <div className="relative w-full lg:w-[52%] bg-black flex items-center justify-center overflow-hidden shrink-0 min-h-[300px] lg:min-h-[600px] border-b lg:border-b-0 lg:border-r border-neutral-800">
                {activeCaseStudy.type === "video" ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    preload="auto" 
                    controls 
                    playsInline 
                    className="w-full h-full object-contain bg-black max-h-[48vh] lg:max-h-[85vh]"
                  >
                    <source src={activeCaseStudy.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div className="relative w-full h-full min-h-[300px] lg:min-h-[600px]">
                    <Image 
                      src={activeCaseStudy.poster} 
                      alt={activeCaseStudy.title} 
                      fill 
                      sizes="(max-width: 1200px) 100vw, 800px" 
                      className="object-contain bg-black" 
                    />
                  </div>
                )}
              </div>

              <div className="w-full lg:w-[48%] p-6 sm:p-8 bg-neutral-950 overflow-y-auto space-y-6 text-left flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[9px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full uppercase">
                      {activeCaseStudy.conceptNum}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      {activeCaseStudy.discipline}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-100 mb-4">{activeCaseStudy.title}</h3>

                  <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-neutral-800">
                    <button 
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ 
                          ...prev, 
                          message: `[STUDY INQUIRY: ${activeCaseStudy.title}]\nReferenced Study: ${activeCaseStudy.conceptNum} (${activeCaseStudy.discipline})\nDeliverable Focus: ${activeCaseStudy.deliverables}\n\nWe would like to request an official project proposal based on these specifications.` 
                        }));
                        setActiveCaseStudy(null);
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-6 py-2.5 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all cursor-pointer flex items-center gap-2 shadow-lg"
                    >
                      <span>{t.portfolio?.requestScope || "REQUEST SCOPE"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      type="button"
                      onClick={() => setActiveCaseStudy(null)}
                      className="px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-amber-400 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      {t.portfolio?.closePreview || "CLOSE PREVIEW"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">01 · Creative Brief</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-light">{activeCaseStudy.brief}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">02 · Creative Direction</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-light">{activeCaseStudy.direction}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">03 · Production Approach</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-light">{activeCaseStudy.production}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">04 · Material & Lighting</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-light">{activeCaseStudy.materialStudy}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">05 · Deliverables</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-semibold">{activeCaseStudy.deliverables}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-amber-500/30 bg-amber-500/5">
                      <span className="text-[10px] font-bold text-amber-400 uppercase block mb-1">06 · Refinement & Master</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-light">{activeCaseStudy.productionNotes}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-900 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                  <span>{t.portfolio?.disclaimer}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeArticle && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.95 }} 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 md:p-10 shadow-2xl text-left max-h-[85vh] overflow-y-auto"
            >
              <button type="button" onClick={() => setActiveArticle(null)} aria-label="Close Article" className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
              
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full uppercase">
                  {activeArticle.tag}
                </span>
                <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" /> {activeArticle.author}
                </span>
                <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> {activeArticle.date}
                </span>
                <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" /> {activeArticle.readTime}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-100 mb-6 leading-snug">
                {activeArticle.title}
              </h3>
              
              <div className="space-y-4 text-xs md:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800 pt-6 font-light">
                <p>{activeArticle.body1}</p>
                <p>{activeArticle.body2}</p>
              </div>

              {activeArticle.faqQ1 && (
                <div className="mt-8 p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">Frequently Asked Inquiry</span>
                  <p className="font-bold text-neutral-200 mb-1">{activeArticle.faqQ1}</p>
                  <p className="text-neutral-400 font-light leading-relaxed">{activeArticle.faqA1}</p>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">AI.VIENNE Research & Monograph</span>
                <button 
                  type="button"
                  onClick={() => { setActiveArticle(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="px-6 py-2.5 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Full Perspective</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeModal === "terms" && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.95 }} 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto"
            >
              <button type="button" onClick={() => setActiveModal(null)} aria-label="Close Terms" className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
              <h3 className="text-2xl font-bold text-neutral-100 mb-6 flex items-center gap-3"><FileText className="w-6 h-6 text-amber-400" /> {t.modals?.termsTitle}</h3>
              <div className="space-y-6 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800 pt-6">
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP1Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.termsP1Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP2Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.termsP2Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP3Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.termsP3Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP4Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.termsP4Body}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeModal === "privacy" && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.95 }} 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto"
            >
              <button type="button" onClick={() => setActiveModal(null)} aria-label="Close Privacy" className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
              <h3 className="text-2xl font-bold text-neutral-100 mb-6 flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-amber-400" /> {t.modals?.privacyTitle}</h3>
              <div className="space-y-6 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800 pt-6">
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP1Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.privacyP1Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP2Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.privacyP2Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP3Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.privacyP3Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP4Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.privacyP4Body}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <button 
          type="button"
          onClick={() => setIsDeskOpen(!isDeskOpen)} 
          aria-label="Open Confidential Inquiry Desk" 
          className="relative w-12 h-12 rounded-full bg-amber-400/90 hover:bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] hover:scale-110 transition-all duration-300 backdrop-blur-xl border border-amber-300/60 cursor-pointer group"
        >
          <div className="absolute inset-0 rounded-full bg-amber-400/20 animate-ping pointer-events-none" />
          <ShieldCheck className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>

      <AnimatePresence>
        {isDeskOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-neutral-900/95 border border-amber-500/40 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-100">{t.chatConsole?.title}</h4>
                  <p className="text-[10px] text-amber-300">{t.chatConsole?.sub}</p>
                </div>
              </div>
              <button type="button" onClick={() => setIsDeskOpen(false)} aria-label="Close Console" className="text-neutral-400 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
            </div>
            <div className="py-6 space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-300 leading-relaxed font-light">
                {t.chatConsole?.welcome}
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:info@aivienne.com?subject=Confidential Consultation Inquiry&body=${encodeURIComponent(deskMessage)}`; setDeskMessage(""); setIsDeskOpen(false); }} className="space-y-3">
              <input type="text" required value={deskMessage} onChange={(e) => setDeskMessage(e.target.value)} placeholder={t.chatConsole?.placeholder} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-100 outline-none focus:border-amber-400" />
              <button type="submit" className="w-full py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Send className="w-3.5 h-3.5" /> {t.chatConsole?.send}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
        <div className="w-full px-4 sm:px-8 md:px-12 h-20 sm:h-24 flex items-center justify-between">
          <button type="button" onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer text-left group shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="AI.VIENNE Studio+"
                fill
                sizes="48px"
                className="object-cover rounded-full"
                priority
              />
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-widest text-neutral-100 group-hover:text-amber-400 transition-colors">
              AI.VIENNE <span className="text-amber-400 font-light">STUDIO+</span>
            </span>
          </button>

          <nav className="hidden xl:flex items-center gap-8 text-sm font-semibold tracking-wider text-neutral-300">
            <a href="#services" className="hover:text-amber-400 transition-colors py-2 relative group whitespace-nowrap">
              {t.nav?.services}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors py-2 relative group whitespace-nowrap">
              {t.nav?.portfolio}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#capabilities" className="hover:text-amber-400 transition-colors py-2 relative group whitespace-nowrap">
              {t.nav?.capabilities}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <div 
              ref={studioMenuRef}
              className="relative py-2" 
              onMouseEnter={() => setIsStudioOpen(true)} 
              onMouseLeave={() => setIsStudioOpen(false)}
            >
              <button 
                type="button"
                onClick={() => setIsStudioOpen(!isStudioOpen)}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{t.nav?.studio}</span> 
                <ChevronDown className={`w-4 h-4 opacity-70 transition-transform duration-300 ${isStudioOpen ? "rotate-180 text-amber-400" : ""}`} />
              </button>
              
              {isStudioOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-neutral-900/95 border border-amber-500/40 rounded-2xl p-2 shadow-2xl backdrop-blur-xl space-y-1">
                    <a 
                      href="#studio" 
                      onClick={() => setIsStudioOpen(false)} 
                      className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs font-semibold text-neutral-300 hover:text-amber-300 transition-colors"
                    >
                      {t.nav?.theStudio}
                    </a>
                    <a 
                      href="#system" 
                      onClick={() => setIsStudioOpen(false)} 
                      className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs font-semibold text-neutral-300 hover:text-amber-300 transition-colors"
                    >
                      {t.nav?.system}
                    </a>
                    <a 
                      href="#transformation" 
                      onClick={() => setIsStudioOpen(false)} 
                      className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs font-semibold text-neutral-300 hover:text-amber-300 transition-colors"
                    >
                      {t.nav?.transformation}
                    </a>
                    <a 
                      href="#twins" 
                      onClick={() => setIsStudioOpen(false)} 
                      className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs font-semibold text-neutral-300 hover:text-amber-300 transition-colors"
                    >
                      {t.nav?.avatar}
                    </a>
                    <a 
                      href="#estimator" 
                      onClick={() => setIsStudioOpen(false)} 
                      className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs font-semibold text-neutral-300 hover:text-amber-300 transition-colors"
                    >
                      {t.nav?.roi}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#insights" className="hover:text-amber-400 transition-colors py-2 relative group whitespace-nowrap">
              {t.nav?.journal}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors py-2 relative group whitespace-nowrap">
              {t.nav?.contact}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <div className="relative">
              <button type="button" onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 text-xs font-semibold text-neutral-200 border border-neutral-800 bg-neutral-900/80 rounded-full h-10 sm:h-11 px-3 sm:px-4 transition-all cursor-pointer hover:border-neutral-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selectedLang.flag} alt={selectedLang.name} loading="lazy" decoding="async" className="w-4 h-3 object-cover rounded-sm" /> <span>{selectedLang.code}</span> <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-36 max-h-72 overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-lg shadow-2xl p-2 z-50">
                  {LANGUAGES.map((lang) => (
                    <button key={lang.code} type="button" onClick={() => { setSelectedLang(lang); setIsLangOpen(false); }} className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer ${selectedLang.code === lang.code ? "bg-amber-400/10 text-amber-400" : "text-neutral-300 hover:bg-neutral-800/60"}`}>
                      <div className="flex items-center gap-2.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={lang.flag} alt={lang.name} loading="lazy" decoding="async" className="w-4 h-3 object-cover rounded-sm" /> <span>{lang.name}</span>
                      </div>
                      <span className="text-[10px] text-neutral-400">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="hidden sm:inline-flex items-center justify-center h-11 px-7 rounded-full text-xs font-bold tracking-widest text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all uppercase shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] whitespace-nowrap cursor-pointer">
              {t.nav?.cta}
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-10 w-full px-4 sm:px-8 md:px-16 pt-12 sm:pt-20 pb-14 sm:pb-18 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2.5 px-4 sm:px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs sm:text-sm font-semibold text-amber-300 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4" /> {t.hero?.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-tight text-neutral-100 max-w-7xl mx-auto leading-[1.12] sm:leading-[1.06]">
            {t.hero?.titleStart} <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">{t.hero?.titleGradient}</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
            {t.hero?.desc}
          </p>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#portfolio" className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(251,191,36,0.3)]">
              {t.hero?.btnPrimary} <ArrowRight className="w-5 h-5" />
            </a>
            <a href="mailto:info@aivienne.com" className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide text-neutral-200 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-amber-400" /> {t.hero?.btnSecondary}
            </a>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-14 sm:py-18 border-y border-neutral-800/80 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase mb-3 block">{t.manifesto?.sub}</span>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-neutral-300 tracking-wide mb-2">{t.manifesto?.line1}</h2>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-100 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">{t.manifesto?.line2}</h2>
        </div>
      </section>

      <section id="services" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase block mb-3">{t.servicesPillars?.tag}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-100">{t.servicesPillars?.title}</h2>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm max-w-lg mt-4 sm:mt-6 md:mt-0 leading-relaxed font-light">{t.servicesPillars?.desc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 flex flex-col justify-between group shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-400 pointer-events-none"><Sparkles className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase">
                    {t.servicesPillars?.s1Tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {t.servicesPillars?.s1Time}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.servicesPillars?.s1Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">{t.servicesPillars?.s1Desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-neutral-800/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">Capabilities</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s1Capabilities}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">Deliverables</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {t.servicesPillars?.s1Deliverables.split(" · ").map((item: string, idx: number) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-200 font-medium">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{t.servicesPillars?.leadTimeLabel} · {t.servicesPillars?.s1Time}</span>
                <button 
                  type="button"
                  onClick={() => selectServicePillar("sOpt1", "Haute Couture & Seasonal Campaigns")}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 border border-amber-500/40 text-amber-300 group-hover:bg-amber-400 group-hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 flex flex-col justify-between group shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-400 pointer-events-none"><Gem className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase">
                    {t.servicesPillars?.s2Tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {t.servicesPillars?.s2Time}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.servicesPillars?.s2Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">{t.servicesPillars?.s2Desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-neutral-800/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">Capabilities</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s2Capabilities}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">Deliverables</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {t.servicesPillars?.s2Deliverables.split(" · ").map((item: string, idx: number) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-200 font-medium">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{t.servicesPillars?.leadTimeLabel} · {t.servicesPillars?.s2Time}</span>
                <button 
                  type="button"
                  onClick={() => selectServicePillar("sOpt2", "Haute Horlogerie & Fine Jewelry")}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 border border-amber-500/40 text-amber-300 group-hover:bg-amber-400 group-hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 flex flex-col justify-between group shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-400 pointer-events-none"><UserCheck className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase">
                    {t.servicesPillars?.s3Tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {t.servicesPillars?.s3Time}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.servicesPillars?.s3Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">{t.servicesPillars?.s3Desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-neutral-800/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">Capabilities</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s3Capabilities}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">Deliverables</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {t.servicesPillars?.s3Deliverables.split(" · ").map((item: string, idx: number) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-200 font-medium">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{t.servicesPillars?.leadTimeLabel} · {t.servicesPillars?.s3Time}</span>
                <button 
                  type="button"
                  onClick={() => selectServicePillar("sOpt3", "Persistent Brand Ambassadors")}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 border border-amber-500/40 text-amber-300 group-hover:bg-amber-400 group-hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 flex flex-col justify-between group shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-400 pointer-events-none"><Film className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase">
                    {t.servicesPillars?.s4Tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {t.servicesPillars?.s4Time}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.servicesPillars?.s4Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">{t.servicesPillars?.s4Desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-neutral-800/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">Capabilities</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s4Capabilities}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">Deliverables</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {t.servicesPillars?.s4Deliverables.split(" · ").map((item: string, idx: number) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-200 font-medium">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{t.servicesPillars?.leadTimeLabel} · {t.servicesPillars?.s4Time}</span>
                <button 
                  type="button"
                  onClick={() => selectServicePillar("sOpt4", "Brand Heritage & Flagship Films")}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 border border-amber-500/40 text-amber-300 group-hover:bg-amber-400 group-hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
          
          <p className="text-[11px] text-neutral-500 text-center mt-8 font-light italic">
            * {t.servicesPillars?.leadTimeNote}
          </p>
        </div>
      </section>

      <section id="portfolio" className="relative z-10 w-full py-16 sm:py-24 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 sm:mb-12 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase block mb-2">{t.portfolio?.tag}</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-neutral-100">{t.portfolio?.title}</h2>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm max-w-md leading-relaxed font-light">{t.portfolio?.desc}</p>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-10 sm:mb-14">
            {[
              { id: "all", label: t.portfolio?.filterAll },
              { id: "169", label: t.portfolio?.filter169 },
              { id: "916", label: t.portfolio?.filter916 }
            ].map((btn) => (
              <button key={btn.id} type="button" onClick={() => setActiveFilter(btn.id)} className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${activeFilter === btn.id ? "bg-amber-400 text-neutral-950 shadow-[0_0_20px_rgba(251,191,36,0.35)]" : "bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:border-neutral-700"}`}>{btn.label}</button>
            ))}
          </div>

          {(activeFilter === "all" || activeFilter === "169") && (
            <div className="mb-14 sm:mb-20">
              <div className="flex items-center gap-2.5 mb-6">
                <Tv className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-100 tracking-wider uppercase">16:9 Widescreen Studies</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.filter(item => item.aspect === "16:9").map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setActiveCaseStudy(item)}
                    className="group relative rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 p-3 sm:p-4 transition-all duration-300 ease-out hover:scale-[1.02] hover:z-20 hover:shadow-[0_10px_30px_rgba(251,191,36,0.12)] flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    <div className="relative aspect-[16/9] w-full rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center overflow-hidden mb-3.5 shadow-md">
                      {item.type === "video" ? (
                        <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500 ease-out">
                          <source src={item.videoUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <div className="relative w-full h-full">
                          <Image src={item.poster} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-contain bg-black group-hover:scale-105 transition-transform duration-500 ease-out" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/60 backdrop-blur-[1px] transition-all duration-300 flex flex-col items-center justify-center p-3 text-center opacity-0 group-hover:opacity-100">
                        <div className="w-10 h-10 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.5)] scale-90 group-hover:scale-100 transition-all z-10">
                          <Play className="w-4 h-4 ml-0.5 fill-neutral-950" />
                        </div>
                      </div>
                      <span className="absolute top-2 left-2 text-[8px] font-mono font-bold uppercase text-amber-300 bg-neutral-950/90 border border-amber-500/40 px-2 py-0.5 rounded-full z-30 shadow-sm">
                        {item.conceptNum}
                      </span>
                    </div>
                    <div className="mb-3 px-1 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">{item.discipline}</span>
                        <h3 className="text-xs sm:text-sm font-bold text-neutral-100 mb-1 group-hover:text-amber-300 transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-tight font-light line-clamp-2 group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                    
                    <button type="button" onClick={(e) => { e.stopPropagation(); setActiveCaseStudy(item); }} className="w-full py-2 rounded-xl border border-neutral-800 bg-neutral-950 group-hover:bg-amber-400 group-hover:text-neutral-950 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                      <Briefcase className="w-3 h-3" /> {t.portfolio?.playVideo}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeFilter === "all" || activeFilter === "916") && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-100 tracking-wider uppercase">9:16 Vertical Studies</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.filter(item => item.aspect === "9:16").map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setActiveCaseStudy(item)}
                    className="group relative rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 p-3 sm:p-4 transition-all duration-300 ease-out hover:scale-[1.02] hover:z-20 hover:shadow-[0_10px_30px_rgba(251,191,36,0.12)] flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    <div className="relative aspect-[9/16] w-full rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center overflow-hidden mb-3.5 shadow-md mx-auto">
                      {item.type === "video" ? (
                        <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out">
                          <source src={item.videoUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <div className="relative w-full h-full">
                          <Image src={item.poster} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/60 backdrop-blur-[1px] transition-all duration-300 flex flex-col items-center justify-center p-3 text-center opacity-0 group-hover:opacity-100">
                        <div className="w-10 h-10 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.5)] scale-90 group-hover:scale-100 transition-all z-10">
                          <Play className="w-4 h-4 ml-0.5 fill-neutral-950" />
                        </div>
                      </div>
                      <span className="absolute top-2 left-2 text-[8px] font-mono font-bold uppercase text-amber-300 bg-neutral-950/90 border border-amber-500/40 px-2 py-0.5 rounded-full z-30 shadow-sm">
                        {item.conceptNum}
                      </span>
                    </div>
                    <div className="mb-3 px-1 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">{item.discipline}</span>
                        <h3 className="text-xs sm:text-sm font-bold text-neutral-100 mb-1 group-hover:text-amber-300 transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-tight font-light line-clamp-2 group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                    
                    <button type="button" onClick={(e) => { e.stopPropagation(); setActiveCaseStudy(item); }} className="w-full py-2 rounded-xl border border-neutral-800 bg-neutral-950 group-hover:bg-amber-400 group-hover:text-neutral-950 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                      <Briefcase className="w-3 h-3" /> {t.portfolio?.playVideo}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="capabilities" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase block mb-3">{t.capabilitiesSection?.tag}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-100">{t.capabilitiesSection?.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { num: t.capabilitiesSection?.c1Num, title: t.capabilitiesSection?.c1Title, desc: t.capabilitiesSection?.c1Desc, icon: Sparkles },
              { num: t.capabilitiesSection?.c2Num, title: t.capabilitiesSection?.c2Title, desc: t.capabilitiesSection?.c2Desc, icon: Box },
              { num: t.capabilitiesSection?.c3Num, title: t.capabilitiesSection?.c3Title, desc: t.capabilitiesSection?.c3Desc, icon: Film },
              { num: t.capabilitiesSection?.c4Num, title: t.capabilitiesSection?.c4Title, desc: t.capabilitiesSection?.c4Desc, icon: UserCheck },
              { num: t.capabilitiesSection?.c5Num, title: t.capabilitiesSection?.c5Title, desc: t.capabilitiesSection?.c5Desc, icon: LayoutGrid }
            ].map((cap, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group relative cursor-pointer"
              >
                <div className="absolute top-6 right-6 text-neutral-700 group-hover:text-amber-400 transition-colors">
                  <cap.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-3xl font-mono font-bold text-amber-400 block mb-6">{cap.num}</span>
                  <h3 className="text-xl font-bold text-neutral-100 mb-4 tracking-wide group-hover:text-amber-300 transition-colors">{cap.title}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{cap.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-800/60 flex items-center gap-2 text-[10px] font-mono text-amber-400/80 group-hover:text-amber-300 uppercase transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>Production Capability</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.capabilitiesTech?.tag}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.capabilitiesTech?.title}</h2>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mt-4 sm:mt-6 md:mt-0 leading-relaxed font-light">{t.capabilitiesTech?.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.capabilitiesTech?.cap1Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{t.capabilitiesTech?.cap1Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-bold text-amber-300 uppercase">
                <span>{t.capabilitiesTech?.cap1Tag1}</span>
                <span>{t.capabilitiesTech?.cap1Tag2}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.capabilitiesTech?.cap2Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{t.capabilitiesTech?.cap2Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-bold text-amber-300 uppercase">
                <span>{t.capabilitiesTech?.cap2Tag1}</span>
                <span>{t.capabilitiesTech?.cap2Tag2}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Gem className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.capabilitiesTech?.cap3Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{t.capabilitiesTech?.cap3Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-bold text-amber-300 uppercase">
                <span>{t.capabilitiesTech?.cap3Tag1}</span>
                <span>{t.capabilitiesTech?.cap3Tag2}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.capabilitiesTech?.cap4Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{t.capabilitiesTech?.cap4Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-bold text-amber-300 uppercase">
                <span>{t.capabilitiesTech?.cap4Tag1}</span>
                <span>{t.capabilitiesTech?.cap4Tag2}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="twins" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.twinsSection?.tag}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.twinsSection?.title}</h2>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mt-4 sm:mt-6 md:mt-0 leading-relaxed font-light">{t.twinsSection?.desc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-14">
            <div 
              onMouseMove={handleLeftCardMouseMove}
              className={`p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-br ${selectedTwin.bg} flex flex-col justify-between relative overflow-hidden transition-all duration-700 shadow-2xl group`}
            >
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                style={{
                  background: `radial-gradient(400px circle at ${causticsPosLeft.x}% ${causticsPosLeft.y}%, rgba(251,191,36,0.15), transparent 70%)`
                }}
              />

              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-neutral-950/80 border border-amber-400/40 text-[9px] sm:text-[10px] font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-md z-20">
                CHARACTER STUDY
              </div>

              <div>
                <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-neutral-950 border border-amber-500/40 overflow-hidden mb-8 group shadow-2xl">
                  <video
                    key={selectedTwin.id}
                    ref={twinVideoRef}
                    autoPlay
                    loop
                    muted={isVideoMuted}
                    playsInline
                    preload="auto"
                    poster={selectedTwin.poster}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90"
                  >
                    <source src={selectedTwin.video} type="video/mp4" />
                    <div className="relative w-full h-full">
                      <Image src={selectedTwin.poster} alt={selectedTwin.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    </div>
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-amber-400/40 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-amber-300 uppercase tracking-widest">
                      {selectedTwin.name.split(" ")[0].toUpperCase()} · CONSISTENT CHARACTER MESH
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={toggleTwinVideoMute}
                    aria-label={isVideoMuted ? "Unmute Video" : "Mute Video"}
                    className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-neutral-950/80 border border-amber-400/50 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 transition-all backdrop-blur-md shadow-lg cursor-pointer"
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
                  </button>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 mb-2">{selectedTwin.name}</h3>
                <p className="text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-wider mb-6 sm:mb-8">{selectedTwin.role}</p>

                <div className="space-y-4 border-t border-neutral-800/80 pt-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400 uppercase font-bold">Lighting Context:</span>
                    <span className="text-neutral-200 font-semibold">{selectedTwin.lighting}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400 uppercase font-bold">Styling & Textile:</span>
                    <span className="text-neutral-200 font-semibold">{selectedTwin.outfit}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {DIGITAL_TWINS.map((twin) => (
                  <button
                    key={twin.id}
                    type="button"
                    onClick={() => setSelectedTwin(twin)}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                      selectedTwin.id === twin.id
                        ? "bg-amber-400 text-neutral-950 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                        : "bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-700"
                    }`}
                  >
                    Select {twin.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div 
              onMouseMove={handleRightCardMouseMove}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 flex flex-col justify-between text-center relative overflow-hidden group hover:border-amber-500/30 transition-all duration-500 shadow-2xl"
            >
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                style={{
                  background: `radial-gradient(400px circle at ${causticsPosRight.x}% ${causticsPosRight.y}%, rgba(251,191,36,0.15), transparent 70%)`
                }}
              />

              <div>
                <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-neutral-950 border border-amber-500/30 overflow-hidden mb-8 shadow-2xl group">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-85"
                  >
                    <source src="/vienne-facial-loop.mp4" type="video/mp4" />
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-amber-400/40 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                      <Activity className="w-3 h-3 text-amber-400" /> IDENTITY RETENTION
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-3">{t.twinsSection?.identityTitle}</h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-8 font-light">{t.twinsSection?.identityDesc}</p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 gap-4 text-left">
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Reference Guidance
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">Facial Structure Consistency</p>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Natural Shading
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">Natural Skin Micro-Texture</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/30 border border-neutral-800">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase block mb-6 text-center sm:text-left">
              {t.twinsSection?.useCasesTitle}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80">
                <h4 className="text-sm font-bold text-neutral-100 mb-1">{t.twinsSection?.uc1}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{t.twinsSection?.uc1Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80">
                <h4 className="text-sm font-bold text-neutral-100 mb-1">{t.twinsSection?.uc2}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{t.twinsSection?.uc2Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80">
                <h4 className="text-sm font-bold text-neutral-100 mb-1">{t.twinsSection?.uc3}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{t.twinsSection?.uc3Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80">
                <h4 className="text-sm font-bold text-neutral-100 mb-1">{t.twinsSection?.uc4}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{t.twinsSection?.uc4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase block mb-3">{t.system?.tag}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-100">{t.system?.title}</h2>
            <p className="mt-4 text-xs font-mono text-amber-300/90 tracking-widest uppercase">{t.system?.sub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { num: t.system?.s1Num, title: t.system?.s1Title, desc: t.system?.s1Detail, icon: Compass },
              { num: t.system?.s2Num, title: t.system?.s2Title, desc: t.system?.s2Detail, icon: Sliders },
              { num: t.system?.s3Num, title: t.system?.s3Title, desc: t.system?.s3Detail, icon: Cpu },
              { num: t.system?.s4Num, title: t.system?.s4Title, desc: t.system?.s4Detail, icon: Sparkles },
              { num: t.system?.s5Num, title: t.system?.s5Title, desc: t.system?.s5Detail, icon: CheckSquare }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group relative shadow-lg cursor-pointer"
              >
                <div className="absolute top-4 right-4 text-neutral-700 group-hover:text-amber-400 transition-colors">
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-amber-400 font-mono text-xs font-extrabold tracking-widest block mb-4">{step.num}</span>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-100 mb-3 tracking-wide group-hover:text-amber-300 transition-colors">{step.title}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-1.5 text-[10px] font-mono text-amber-400/80 group-hover:text-amber-300 uppercase transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>Protocol {step.num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/10">
        <div className="max-w-5xl mx-auto bg-neutral-900/50 border border-amber-500/30 p-6 sm:p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <div className="space-y-6 max-w-2xl text-left">
            <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase block">{t.studioSection?.tag}</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-neutral-100 tracking-tight">{t.studioSection?.title}</h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">{t.studioSection?.desc}</p>
            <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed font-light italic border-l-2 border-amber-400/60 pl-4">
              &quot;{t.studioSection?.founderBio}&quot;
            </p>
            
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-extrabold text-sm">
                  EA
                </div>
                <div>
                  <span className="text-sm sm:text-base font-extrabold text-neutral-100 block tracking-wide">{t.studioSection?.founderName}</span>
                  <span className="text-xs text-amber-400 font-mono tracking-wider">{t.studioSection?.founderTitle}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a 
                  href="https://linkedin.com/in/e-aktas-aivienne" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono text-neutral-400">
              <span className="px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-800">{t.studioSection?.spec1}</span>
              <span className="px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-800">{t.studioSection?.spec2}</span>
              <span className="px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-800">{t.studioSection?.spec3}</span>
            </div>
          </div>

          <div className="w-full md:w-auto p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4 shrink-0 text-left md:text-right">
            <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase block tracking-widest">{t.studioSection?.opsTitle}</span>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-bold text-neutral-200 flex items-center md:justify-end gap-2">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>{t.studioSection?.opsVal1}</span>
              </p>
              <p className="text-xs font-mono text-amber-300 font-semibold">{t.studioSection?.opsVal2}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="transformation" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/15">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.transformation?.tag}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.transformation?.title}</h2>
            <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto font-light">{t.transformation?.desc}</p>
          </div>

          <div className="relative w-full aspect-[16/9] max-h-[580px] rounded-3xl border border-amber-500/40 overflow-hidden shadow-[0_0_50px_rgba(217,119,6,0.15)] bg-neutral-950 select-none">
            <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image 
                  src="/vienne-portrait.jpg" 
                  alt="AI.VIENNE Finished Master Render" 
                  fill 
                  sizes="(max-width: 1200px) 100vw, 1200px" 
                  className="object-cover object-center" 
                />
              </div>
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-amber-500/10 border border-amber-400/40 text-[9px] sm:text-[10px] font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-md z-10 shadow-lg">
                ✨ {t.transformation?.afterLabel}
              </div>
            </div>

            <div className="absolute inset-0 bg-neutral-900 overflow-hidden border-r-2 border-amber-400 z-10" style={{ width: `${sliderPos}%` }}>
              <div className="absolute inset-0 h-full w-full" style={{ width: '100vw', maxWidth: '1200px' }}>
                <div className="relative w-full h-full">
                  <Image 
                    src="/traditional-raw.jpg" 
                    alt="Initial Concept Direction" 
                    fill 
                    sizes="(max-width: 1200px) 100vw, 1200px" 
                    className="object-cover object-center filter grayscale contrast-75 brightness-75" 
                  />
                </div>
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-neutral-950/90 border border-neutral-800 text-[9px] sm:text-[10px] font-bold text-neutral-300 uppercase tracking-widest backdrop-blur-md z-20 shadow-lg">
                📁 {t.transformation?.beforeLabel}
              </div>
            </div>

            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={(e) => setSliderPos(Number(e.target.value))} 
              aria-label="Transformation Comparison Slider"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40" 
            />

            <div className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 pointer-events-none z-30 shadow-[0_0_15px_#fbbf24]" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.8)] font-black text-xs sm:text-sm">
                ↔
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 text-left">
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="text-amber-400 block font-bold">{t.transformation?.s1}</span> Initial Concept & Palette
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="text-amber-400 block font-bold">{t.transformation?.s2}</span> AI Synthesis & Lighting
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="text-amber-400 block font-bold">{t.transformation?.s3}</span> Texture & Caustic Tuning
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="text-amber-400 block font-bold">{t.transformation?.s4}</span> Haute Retouch & Color Grade
            </div>
          </div>
        </div>
      </section>

      <section id="estimator" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/20">
        <div className="max-w-6xl mx-auto bg-neutral-900/60 border border-amber-500/30 p-6 sm:p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400"><Calculator className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div><span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.estimator?.tag}</span><h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 mt-1">{t.estimator?.title}</h2></div>
          </div>
          <p className="text-neutral-300 text-sm sm:text-base mb-8 sm:mb-10 font-light">{t.estimator?.desc}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-5 text-left">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-2.5">{t.estimator?.deliverableType}</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "still", label: t.estimator?.optStill },
                    { id: "motion", label: t.estimator?.optMotion },
                    { id: "char", label: t.estimator?.optChar },
                    { id: "full", label: t.estimator?.optFull }
                  ].map((item) => (
                    <button key={item.id} type="button" onClick={() => setEstType(item.id as "still" | "motion" | "char" | "full")} className={`p-3 rounded-2xl border text-xs font-semibold text-left transition-all cursor-pointer ${estType === item.id ? "bg-amber-400/10 border-amber-400 text-amber-300" : "bg-neutral-950/60 border-neutral-800 text-neutral-300"}`}>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-2.5">{t.estimator?.volumeLabel}</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: "vol1", label: t.estimator?.vol1 },
                    { id: "vol2", label: t.estimator?.vol2 },
                    { id: "vol3", label: t.estimator?.vol3 },
                    { id: "vol4", label: t.estimator?.vol4 }
                  ].map((item) => (
                    <button key={item.id} type="button" onClick={() => setEstVolume(item.id as "vol1" | "vol2" | "vol3" | "vol4")} className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${estVolume === item.id ? "bg-amber-400/10 border-amber-400 text-amber-300" : "bg-neutral-950/60 border-neutral-800 text-neutral-300"}`}>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-2.5">{t.estimator?.complexityLabel}</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "std", label: t.estimator?.compStd },
                    { id: "prem", label: t.estimator?.compPrem },
                    { id: "camp", label: t.estimator?.compCamp }
                  ].map((item) => (
                    <button key={item.id} type="button" onClick={() => setEstComplexity(item.id as "std" | "prem" | "camp")} className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${estComplexity === item.id ? "bg-amber-400/10 border-amber-400 text-amber-300" : "bg-neutral-950/60 border-neutral-800 text-neutral-300"}`}>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-2.5">{t.estimator?.timelineLabel}</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "std", label: t.estimator?.timeStd },
                    { id: "exp", label: t.estimator?.timeExp }
                  ].map((item) => (
                    <button key={item.id} type="button" onClick={() => setEstTimeline(item.id as "std" | "exp")} className={`p-3 rounded-2xl border text-xs font-semibold text-left transition-all cursor-pointer ${estTimeline === item.id ? "bg-amber-400/10 border-amber-400 text-amber-300" : "bg-neutral-950/60 border-neutral-800 text-neutral-300"}`}>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-amber-500/40 flex flex-col justify-between shadow-2xl relative overflow-hidden text-left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <SlidersHorizontal className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{t.estimator?.rangeTitle}</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] text-amber-300 uppercase font-mono block mb-1">
                      {t.estimator?.startingTier}
                    </span>
                    <p className="text-3xl sm:text-4xl font-black text-amber-400">
                      {calculateEstimate()}
                    </p>
                    <span className="text-[10px] text-neutral-400 uppercase font-mono block mt-1">
                      Estimated Production Range (USD)
                    </span>
                  </div>

                  <div className="border-t border-neutral-800 pt-4 text-xs text-neutral-400 font-light leading-relaxed">
                    <p>{t.estimator?.breakdownFactors}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed font-light">{t.estimator?.disclaimer}</p>
                  </div>
                </div>
              </div>

              <button 
                type="button"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    message: `[PROJECT ESTIMATE REQUEST]\nCalculated Range: ${calculateEstimate()}\nParameters: Deliverable: ${estType} | Volume: ${estVolume} | Complexity: ${estComplexity} | Schedule: ${estTimeline}`
                  }));
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }} 
                className="mt-8 w-full py-4 rounded-2xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {t.estimator?.btnLock} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.insights?.tag}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.insights?.title}</h2>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mt-4 sm:mt-6 md:mt-0 leading-relaxed font-light">{t.insights?.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            <article className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer text-left">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase inline-block mb-6">{t.insights?.article1Tag}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.insights?.article1Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light group-hover:text-neutral-100 transition-colors">{t.insights?.article1Desc}</p>
              </div>
              <button 
                type="button"
                onClick={() => setActiveArticle({
                  tag: t.insights?.article1Tag,
                  title: t.insights?.article1Title,
                  author: "E. Aktaş",
                  date: "August 2026",
                  readTime: "6 Min Read",
                  body1: t.insights?.article1Body1,
                  body2: t.insights?.article1Body2,
                  faqQ1: "How does AI sampling compare to physical fabric prototypes?",
                  faqA1: "AI sampling allows rapid iteration of lighting, draping, and styling angles, compressing approval timelines before final high-resolution masters are locked."
                })}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider cursor-pointer text-left"
              >
                <span>{t.insights?.readMore}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer text-left">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase inline-block mb-6">{t.insights?.article2Tag}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.insights?.article2Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light group-hover:text-neutral-100 transition-colors">{t.insights?.article2Desc}</p>
              </div>
              <button 
                type="button"
                onClick={() => setActiveArticle({
                  tag: t.insights?.article2Tag,
                  title: t.insights?.article2Title,
                  author: "AI.VIENNE Editorial",
                  date: "August 2026",
                  readTime: "8 Min Read",
                  body1: t.insights?.article2Body1,
                  body2: t.insights?.article2Body2,
                  faqQ1: "Can a digital brand face be deployed across future seasonal campaigns?",
                  faqA1: "Yes. By archiving model landmark configurations and skin shaders, character identity remains consistent across lookbooks, social, and global retail media."
                })}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider cursor-pointer text-left"
              >
                <span>{t.insights?.readMore}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer text-left">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase inline-block mb-6">{t.insights?.article3Tag}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.insights?.article3Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light group-hover:text-neutral-100 transition-colors">{t.insights?.article3Desc}</p>
              </div>
              <button 
                type="button"
                onClick={() => setActiveArticle({
                  tag: t.insights?.article3Tag,
                  title: t.insights?.article3Title,
                  author: "AI.VIENNE Optics Lab",
                  date: "August 2026",
                  readTime: "5 Min Read",
                  body1: t.insights?.article3Body1,
                  body2: t.insights?.article3Body2,
                  faqQ1: "How are internal reflections controlled on Swiss watch sapphire crystals?",
                  faqA1: "We apply multi-layered anti-reflective optical passes combined with high-contrast chiaroscuro lighting to reveal dial mechanics clearly."
                })}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider cursor-pointer text-left"
              >
                <span>{t.insights?.readMore}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          </div>
        </div>
      </section>

      <section id="architect" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/20">
        <div className="max-w-5xl mx-auto bg-neutral-900/80 border border-amber-500/30 p-6 sm:p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl text-left">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400"><SlidersHorizontal className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div><span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.briefSection?.tag}</span><h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 mt-1">{t.briefSection?.title}</h2></div>
          </div>
          <p className="text-neutral-300 text-sm sm:text-base mb-8 sm:mb-10 font-light">{t.briefSection?.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection?.s1}</label>
              <div className="space-y-2">
                {["Dramatic Studio Gold", "Natural Parisian Sunlight", "Surreal Cyber Neon Caustics"].map((opt) => (
                  <button key={opt} type="button" onClick={() => setBriefLighting(opt)} className={`w-full text-left p-3 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefLighting === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection?.s2}</label>
              <div className="space-y-2">
                {["High Jewelry & Gems", "Haute Couture Runway", "Swiss Horlogerie Timepiece"].map((opt) => (
                  <button key={opt} type="button" onClick={() => setBriefSegment(opt)} className={`w-full text-left p-3 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefSegment === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection?.s3}</label>
              <div className="space-y-2">
                {["Parisian Palace Runway", "Futuristic Architectural Stage", "Exotic Desert Dunes"].map((opt) => (
                  <button key={opt} type="button" onClick={() => setBriefAtmosphere(opt)} className={`w-full text-left p-3 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefAtmosphere === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div><p className="text-xs font-bold text-neutral-400 uppercase">{t.briefSection?.configLabel}</p><p className="text-xs sm:text-sm font-semibold text-amber-300 mt-1">{briefLighting} • {briefSegment} • {briefAtmosphere}</p></div>
            <button type="button" onClick={applyBriefToForm} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 uppercase shrink-0 cursor-pointer"><Layers className="w-4 h-4" /> {t.briefSection?.applyBtn}</button>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.contact?.tag}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.contact?.title}</h2>
            <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto font-light">{t.contact?.desc}</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8 bg-neutral-900/30 border border-neutral-800 p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-sm shadow-2xl text-left">
            {formStatus?.success && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium">
                {formStatus.success}
              </div>
            )}
            {formStatus?.error && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm font-medium">
                {formStatus.error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label htmlFor="client-name" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.namePlaceholder}</label>
                <input id="client-name" name="clientName" type="text" required autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={t.contact?.namePlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none" />
              </div>
              <div>
                <label htmlFor="client-email" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.emailPlaceholder}</label>
                <input id="client-email" name="clientEmail" type="email" required autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={t.contact?.emailPlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label htmlFor="client-website" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.websitePlaceholder}</label>
                <input id="client-website" name="clientWebsite" type="text" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} placeholder={t.contact?.websitePlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none" />
              </div>
              <div>
                <label htmlFor="client-date" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.datePlaceholder}</label>
                <input id="client-date" name="clientDate" type="text" value={formData.launchDate} onChange={(e) => setFormData({ ...formData, launchDate: e.target.value })} placeholder={t.contact?.datePlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label htmlFor="service-select" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.serviceLabel}</label>
                <select id="service-select" name="serviceSelect" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none cursor-pointer">
                  <option value="sOpt1">{t.contact?.sOpt1}</option> 
                  <option value="sOpt2">{t.contact?.sOpt2}</option> 
                  <option value="sOpt3">{t.contact?.sOpt3}</option> 
                  <option value="sOpt4">{t.contact?.sOpt4}</option> 
                  <option value="sOpt5">{t.contact?.sOpt5}</option> 
                  <option value="sOpt6">{t.contact?.sOpt6}</option> 
                  <option value="sOpt7">{t.contact?.sOpt7}</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget-select" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.budgetLabel}</label>
                <select id="budget-select" name="budgetSelect" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none cursor-pointer">
                  <option value="bOpt1">{t.contact?.bOpt1}</option> 
                  <option value="bOpt2">{t.contact?.bOpt2}</option> 
                  <option value="bOpt3">{t.contact?.bOpt3}</option> 
                  <option value="bOpt4">{t.contact?.bOpt4}</option> 
                </select>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-amber-500/30 flex items-center justify-between gap-4">
              <label htmlFor="nda-checkbox" className="flex items-center gap-3 cursor-pointer">
                <Lock className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-neutral-200 font-medium">{t.contact?.ndaLabel}</span>
              </label>
              <input 
                id="nda-checkbox"
                type="checkbox" 
                checked={formData.requireNDA} 
                onChange={(e) => setFormData({ ...formData, requireNDA: e.target.checked })} 
                className="w-5 h-5 accent-amber-400 rounded cursor-pointer" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.uploadTitle}</label>
              <div className="relative border-2 border-dashed border-neutral-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 bg-neutral-950/60 text-center transition-colors group cursor-pointer">
                <input type="file" multiple onChange={handleFileUpload} accept="image/*,video/*,.pdf,.zip" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform"><UploadCloud className="w-6 h-6" /></div>
                  <p className="text-xs sm:text-sm font-medium text-neutral-200 max-w-xl leading-relaxed mx-auto">{t.contact?.uploadHint}</p>
                </div>
              </div>
              {attachedFiles.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {attachedFiles.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-neutral-900 border border-amber-500/30 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-200"><Paperclip className="w-3.5 h-3.5 text-amber-400" /><span className="max-w-[120px] sm:max-w-[150px] truncate">{file.name}</span><button type="button" onClick={() => removeFile(idx)} className="text-neutral-400 hover:text-red-400 ml-1 cursor-pointer"><X className="w-3.5 h-3.5" /></button></div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="project-message" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.messagePlaceholder}</label>
              <textarea id="project-message" name="projectMessage" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t.contact?.messagePlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none resize-none font-light" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-4">
              <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(251,191,36,0.25)] cursor-pointer disabled:opacity-50">
                <Send className="w-4 h-4 sm:w-5 sm:h-5" /> {isSubmitting ? "Gönderiliyor..." : t.contact?.submitBtn}
              </button>
              <a href="mailto:info@aivienne.com" className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-2"><Mail className="w-4 h-4 text-amber-400" /> {t.contact?.directEmail}</a>
            </div>
          </form>

          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-neutral-900/20 border border-neutral-800 text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase block mb-6 text-center sm:text-left">
              {t.contact?.nextStepsTitle}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                <h4 className="text-xs font-bold text-neutral-100 uppercase mb-1">{t.contact?.ns1Title}</h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-light">{t.contact?.ns1Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                <h4 className="text-xs font-bold text-neutral-100 uppercase mb-1">{t.contact?.ns2Title}</h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-light">{t.contact?.ns2Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                <h4 className="text-xs font-bold text-neutral-100 uppercase mb-1">{t.contact?.ns3Title}</h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-light">{t.contact?.ns3Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                <h4 className="text-xs font-bold text-neutral-100 uppercase mb-1">{t.contact?.ns4Title}</h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-light">{t.contact?.ns4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 pt-16 sm:pt-20 pb-12 px-4 sm:px-12 md:px-16">
        <div className="w-full bg-amber-400 text-neutral-950 rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-20 shadow-[0_0_60px_rgba(251,191,36,0.18)]/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pb-12 sm:pb-20 border-b border-neutral-950/20 text-left">
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-6 sm:mb-8">{t.footerSection?.navTitle}</span>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-semibold">
                <li><a href="#services" className="hover:opacity-75 block">{t.nav?.services}</a></li>
                <li><a href="#portfolio" className="hover:opacity-75 block">{t.footerSection?.works}</a></li>
                <li><a href="#capabilities" className="hover:opacity-75 block">{t.nav?.capabilities}</a></li>
                <li><a href="#system" className="hover:opacity-75 block">{t.nav?.system}</a></li>
                <li><a href="#studio" className="hover:opacity-75 block">{t.nav?.studio}</a></li>
                <li><a href="#transformation" className="hover:opacity-75 block">{t.nav?.transformation}</a></li>
                <li><a href="#estimator" className="hover:opacity-75 block">{t.nav?.roi}</a></li>
                <li><a href="#insights" className="hover:opacity-75 block">{t.nav?.journal}</a></li>
                <li><a href="#contact" className="hover:opacity-75 block">{t.footerSection?.initiate}</a></li>
              </ul>
            </div>
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-6 sm:mb-8">{t.footerSection?.dirTitle}</span>
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base font-semibold">
                <a href="mailto:info@aivienne.com" className="text-base sm:text-lg font-bold underline underline-offset-4 hover:opacity-75 block">info@aivienne.com</a>
                <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-90">{t.footerSection?.location}</p>
              </div>
            </div>
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-6 sm:mb-8">{t.footerSection?.netTitle}</span>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-semibold">
                <li><a href="https://instagram.com/ai.vienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 block">Instagram</a></li>
                <li><a href="https://linkedin.com/in/e-aktas-aivienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 flex items-center gap-2"><span>LinkedIn Profile</span></a></li>
              </ul>
            </div>
          </div>

          <div className="py-8 sm:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden text-left">
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl shrink-0 bg-neutral-950 border-2 border-neutral-950">
                <Image
                  src="/logo.png"
                  alt="AI.VIENNE Studio+ Luxury Emblem"
                  fill
                  sizes="144px"
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-mono font-extrabold tracking-[0.3em] uppercase text-neutral-950/70 block">Haute Visual Production</span>
                <span className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-950 select-none leading-none block">
                  AI.VIENNE<br /><span className="font-light">STUDIO+</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm font-bold pt-6 sm:pt-8 border-t border-neutral-950/20">
            <p className="text-center sm:text-left">{t.footer}</p>
            <div className="flex items-center gap-6 sm:gap-8">
              <button type="button" onClick={() => setActiveModal("terms")} className="hover:opacity-75 underline underline-offset-4 cursor-pointer">{t.footerSection?.terms}</button>
              <button type="button" onClick={() => setActiveModal("privacy")} className="hover:opacity-75 underline underline-offset-4 cursor-pointer">{t.footerSection?.privacy}</button>
            </div>
            <div className="flex items-center gap-4">
              <span className="tracking-widest">AI.VIENNE STUDIO+</span>
              <button type="button" onClick={scrollToTop} aria-label="Scroll to top" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-950 text-amber-400 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"><ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" /></button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}