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
  Volume2,
  VolumeX,
  Layers,
  SlidersHorizontal,
  TrendingUp,
  PieChart,
  Check,
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
    nav: { portfolio: "Case Studies", capabilities: "Capabilities", services: "Services", avatar: "Digital Twins", studio: "Studio", system: "System", theStudio: "The Studio", transformation: "Transformation", roi: "ROI Matrix", journal: "Journal", contact: "Private Inquiry", cta: "INITIATE BRIEF" },
    hero: { badge: "AI-Native Luxury Visual Production House", titleStart: "Elevating High Fashion, Fine Jewelry & Horlogerie Through", titleGradient: "Neural Craftsmanship", desc: "AI.VIENNE Studio+ engineers hyper-realistic cinematic campaigns, 8K macro physical material renderings, and persistent digital brand ambassadors under strict bilateral NDA protocols.", btnPrimary: "Explore Case Studies", btnSecondary: "Direct Access: info@aivienne.com" },
    manifesto: { sub: "OUR CREATIVE CODEX", line1: "We do not adapt to fleeting digital trends.", line2: "WE ARCHITECT TIMELESS LUXURY UNIVERSES." },
    servicesPillars: {
      tag: "BESPOKE SERVICE PILLARS",
      title: "Strategic Production Services",
      desc: "Comprehensive luxury visual engagements designed to compress production timelines and elevate brand prestige across physical and digital flagships.",
      scopeLabel: "Strategic Scope:",
      deliverablesLabel: "Key Deliverables:",
      turnaroundLabel: "Production Velocity:",
      btnBrief: "Commission Service",
      s1Tag: "SEASONAL CAMPAIGNS",
      s1Title: "Haute Couture & Runway Production",
      s1Desc: "End-to-end seasonal campaign synthesis, fluid textile draping physics (silk, velvet, brocade), and atmospheric editorial storytelling without physical location constraints.",
      s1Scope: "Moodboard architecture, lighting design, fabric micro-physics simulation, and multi-angle editorial curation.",
      s1Deliverables: "8K Print Masters (8192x4320), 4K Lookbook Suites, 120 FPS Motion Loops.",
      s1Turnaround: "7 – 10 Business Days",
      s2Tag: "OPTICAL MACRO MASTERY",
      s2Title: "Haute Horlogerie & Fine Jewelry",
      s2Desc: "Sub-nanometer raytraced caustics, diamond dispersion fire, sapphire crystal refraction, and Swiss caliber visualization bypassing conventional studio reflection flaws.",
      s2Scope: "CAD mesh alignment, physical refractive index tuning (diamonds/emeralds), platinum specular mapping, and mechanical movement animation.",
      s2Deliverables: "8K Macro Stills, Dynamic Caustics Sequences, Transparent Cutout Masters.",
      s2Turnaround: "5 – 8 Business Days",
      s3Tag: "BIOMETRIC BRAND FACES",
      s3Title: "Persistent Digital Brand Ambassadors",
      s3Desc: "Proprietary Biometric Identity Mesh locking 468 facial anatomical coordinates to deliver persistent, contract-exclusive digital models across multi-year campaigns.",
      s3Scope: "Facial landmark locking, multi-layered melanin and subsurface scattering (SSS) calibration, dynamic wardrobe fitting, and emotional range rigging.",
      s3Deliverables: "Dedicated Brand Avatar Model Asset, Multi-Environment Campaign Library, 4K Video Loops.",
      s3Turnaround: "10 – 14 Business Days",
      s4Tag: "CINEMATIC STORYTELLING",
      s4Title: "Brand Heritage Films & Digital Flagships",
      s4Desc: "High-fidelity 120 FPS cinematic narratives engineered for global flagship boutique displays, mega digital billboards (Times Square/Ginza), and worldwide broadcast.",
      s4Scope: "Cinematic storyboarding, orchestral audio synchronization, atmospheric volumetrics, and multi-aspect master formatting (16:9, 9:16, 32:9).",
      s4Deliverables: "Native 4K/8K Master Video Files, Multi-Aspect Social Edits, Color-Graded Cinema Cuts.",
      s4Turnaround: "8 – 12 Business Days"
    },
    capabilitiesSection: {
      tag: "CORE DISCIPLINES",
      title: "Production Capabilities",
      c1Num: "01", c1Title: "HAUTE COUTURE CAMPAIGNS", c1Desc: "Full-scale seasonal campaign imagery, fluid fabric physics, and atmospheric editorial storytelling.",
      c2Num: "02", c2Title: "HIGH JEWELRY & HORLOGERIE", c2Desc: "Sub-nanometer raytraced caustics, diamond dispersion, sapphire crystal refraction, and Swiss caliber visualization.",
      c3Num: "03", c3Title: "CINEMATIC NARRATIVES", c3Desc: "Emotionally driven 120 FPS high-fidelity brand films engineered for global broadcast and digital flagships.",
      c4Num: "04", c4Title: "PERSISTENT DIGITAL TWINS", c4Desc: "Proprietary Biometric Identity Mesh locking 100% facial geometry, pore structure, and model continuity across seasons.",
      c5Num: "05", c5Title: "ENTERPRISE CONTENT SYSTEMS", c5Desc: "Scalable neural visual ecosystems generating multi-channel master assets with strict color grading and brand DNA coherence."
    },
    capabilitiesTech: {
      tag: "TECHNICAL SOVEREIGNTY",
      title: "Enterprise Neural Pipeline",
      desc: "Engineered to deliver uncompromising physical fidelity, absolute pre-release confidentiality, and unprecedented capital velocity.",
      cap1Title: "8K Neural Master Render", cap1Desc: "Custom-trained neural engines outputting uncompressed 8192 x 4320 masters engineered for mega-format physical billboards and print.", cap1Tag1: "OUTPUT SPEC", cap1Tag2: "8K MASTER",
      cap2Title: "Subsurface Scattering Shaders", cap2Desc: "Multi-layered optical shaders accurately simulating biophysical skin melanin distribution, micro-pores, and subsurface blood perfusion.", cap2Tag1: "BIOPHYSICAL FIDELITY", cap2Tag2: "MELANIN SIMULATION",
      cap3Title: "Spectral Dispersion Caustics", cap3Desc: "Physical-path photon simulation calculating wavelength-dependent diamond fire and refraction through precious gems.", cap3Tag1: "OPTICAL PHYSICS", cap3Tag2: "SPECTRAL RAYTRACING",
      cap4Title: "Biometric Identity Mesh", cap4Desc: "Proprietary 3D structural landmark locking preventing facial distortion or AI morphing across multi-scene production runs.", cap4Tag1: "CONTINUITY LOCK", cap4Tag2: "100% GEOMETRY"
    },
    system: {
      tag: "THE AI.VIENNE METHODOLOGY",
      title: "Five-Stage Production Protocol",
      sub: "ARTIFICIAL INTELLIGENCE POWERS EXECUTION. LUXURY CREATIVE DIRECTION SHAPES THE LEGACY.",
      s1Num: "01", s1Title: "ALIGNMENT & DNA MAPPING", s1Detail: "Deep extraction of brand heritage, physical CAD assets, textile micro-structures, and creative vision.",
      s2Num: "02", s2Title: "CREATIVE DIRECTION", s2Detail: "High-fashion lighting architecture, cinematic framing, physical lens calibration, and composition layout.",
      s3Num: "03", s3Title: "NEURAL SYNTHESIS", s3Detail: "Spectral raytracing, multi-pass material synthesis, sub-surface scattering, and 8K ultra-upscaling.",
      s4Num: "04", s4Title: "HAUTE RETOUCHING", s4Detail: "Bespoke studio color grading, micro-blemish balance, gemstone caustics refinement, and metadata embedding.",
      s5Num: "05", s5Title: "ENCRYPTED DELIVERY", s5Detail: "Multi-aspect campaign deliverables, print-ready 8K master stills, and uncompressed 120fps motion loops."
    },
    studioSection: {
      tag: "THE HOUSE",
      title: "Independent Luxury AI Studio",
      desc: "AI.VIENNE Studio+ operates as a private visual production laboratory, partnering with prestigious fashion houses, fine jewelers, and horlogerie ateliers worldwide.",
      founderName: "E. AKTAŞ",
      founderTitle: "Founder & Executive Creative Director",
      opsTitle: "CONFIDENTIAL OPERATIONS",
      opsVal1: "Global Decentralized Studio",
      opsVal2: "Bilateral NDA Protected B2B Engagements"
    },
    insights: {
      tag: "EDITORIAL & RESEARCH",
      title: "Haute Couture & Neural Insights",
      desc: "In-depth explorations at the nexus of artificial intelligence, luxury economics, and digital haute craftsmanship.",
      readMore: "Examine Research Paper",
      article1Tag: "HAUTE COUTURE AI",
      article1Title: "The Economics of Digital Couture: Reducing Time-to-Market by 80%",
      article1Desc: "How prestigious fashion houses in Paris and Milan leverage neural rendering to compress prototyping cycles without compromising brand exclusivity.",
      article1Body1: "The traditional luxury fashion calendar has historically been constrained by the physical velocity of fabric sourcing, bespoke fitting, and multi-location runway production. Conventional seasonal campaigns require months of logistical choreography, high capital allocation, and extensive carbon overhead.",
      article1Body2: "By deploying AI.VIENNE's neural pipeline, luxury ateliers can now test silk draping physics, velvet textures, and custom jacquard patterns in real-time. This eliminates redundant physical sampling cycles, compresses campaign production from 12 weeks to under 10 business days, and ensures that brand imagery matches exact haute couture standards.",
      article2Tag: "DIGITAL TWINS",
      article2Title: "Facial Geometry & Identity Preservation in Luxury AI Avatars",
      article2Desc: "A technical analysis of biophysical landmark locking ensuring persistent brand model continuity across multi-scene luxury campaigns.",
      article2Body1: "In luxury brand storytelling, model identity is sacred. Generic generative AI models frequently suffer from identity drift—producing subtle variations in jawline, eye spacing, and skin texture between frames that destroy consumer trust.",
      article2Body2: "AI.VIENNE solves this through our proprietary Biometric Identity Mesh protocol. By mapping and locking 468 precise facial anatomical coordinates along with custom melanin shaders, our digital avatars maintain absolute facial structure, natural asymmetry, and skin pore fidelity across diverse lighting conditions and camera lenses.",
      article3Tag: "FINE JEWELRY",
      article3Title: "Spectral Raytracing: Simulating Diamond Dispersion in 8K Resolution",
      article3Desc: "Achieving physical material perfection in macro jewelry renders without physical studio optical limitations.",
      article3Body1: "Macro photography of high jewelry presents extreme optical challenges. The interaction between studio lights, multi-faceted brilliant-cut diamonds, and high-polish platinum surfaces often leads to blown highlights, flare distortion, or loss of gemstone fire.",
      article3Body2: "Our custom neural pipeline calculates light dispersion at individual nanometer wavelengths. By simulating true chromatic dispersion (Abbe numbers) and internal total reflection within emerald, sapphire, and diamond structures, we produce 8K macro renders that capture authentic gemstone brilliance ready for global billboard deployments."
    },
    portfolio: { 
      tag: "SELECTED CASE STUDIES", 
      title: "Curated Master Archive", 
      desc: "Review selected 16:9 cinematic productions and 9:16 vertical campaign deliverables engineered for elite luxury brands.", 
      filterAll: "All Archives", 
      filter169: "16:9 Cinematic Masters", 
      filter916: "9:16 Vertical Reels", 
      playVideo: "Inspect Case Study", 
      closeModal: "Close Case Inspector" 
    },
    transformation: { tag: "NEURAL TRANSFORMATION", title: "Conventional Studio vs. AI.VIENNE 8K Master", desc: "Interact with the slider to inspect how raw conventional photography is elevated into surreal, hyper-realistic luxury campaign imagery.", beforeLabel: "Conventional Raw Studio Capture", afterLabel: "AI.VIENNE 8K Master Render" },
    estimator: { tag: "CAPITAL EFFICIENCY MATRIX", title: "Executive Production & ROI Scope", desc: "Select your campaign scope to benchmark neural production velocity against traditional high-end commercial shoots.", scaleLabel: "Campaign Scope & Deliverables", tier1: "Single Hero Master Asset (Macro Render / Still)", tier2: "Seasonal 8K Campaign Suite (Multi-Asset Package)", tier3: "Full Cinematic Runway Film & Digital Twin Ecosystem", deliveryLabel: "Production Schedule Priority", standard: "Standard Studio Protocol (10-14 Business Days)", express: "Haute Priority Delivery (3-5 Business Days)", estInvestment: "Estimated Strategic Allocation:", roiTitle: "EXECUTIVE ROI & EFFICIENCY GAINS", tradCost: "Estimated Physical Shoot Cost:", timeSaved: "Time-to-Market Velocity:", costSavings: "Capital Optimization:", range1: "$1,500 – $3,500", range2: "$5,000 – $12,000", range3: "$18,000 – $35,000+", trad1: "$25,000+", trad2: "$75,000+", trad3: "$180,000+" },
    twinsSection: { tag: "NEURAL AMBASSADORS", title: "Digital Twin Showcase", desc: "Bespoke digital brand faces engineered with uncompromising facial biometric preservation and timeless luxury aesthetics.", identityTitle: "Biometric Identity Guarantee", identityDesc: "Every digital twin preserves exact facial geometry, natural skin texture, and distinctive physical presence across all editorial environments." },
    briefSection: { tag: "CREATIVE CONFIGURATOR", title: "Interactive Brief Architect", desc: "Define your aesthetic parameters before initiating formal luxury production briefs.", s1: "1. Lighting Architecture", s2: "2. Industry Discipline", s3: "3. Spatial Atmosphere", applyBtn: "Apply Config To Brief", configLabel: "Active Creative Parameters:" },
    chatConsole: { title: "Executive Private Access", sub: "Confidential Consultation, Strategic Partnerships & Bilateral NDA Requests", placeholder: "Detail your brand, seasonal timeline or strategic production objectives...", send: "Transmit Secure Brief", welcome: "Welcome to AI.VIENNE Studio+ Private Desk. Please provide your brand credentials and project scope. Our executive team will review your inquiry under strict confidentiality." },
    contact: { 
      tag: "CONFIDENTIAL PROPOSAL", 
      title: "Initiate Project Brief", 
      desc: "Partner with AI.VIENNE Studio+ to elevate your brand campaigns into hyper-realistic digital luxury masterworks.", 
      namePlaceholder: "Contact Name & Brand / Organization", 
      emailPlaceholder: "Corporate Email Address", 
      serviceLabel: "Select Production Discipline", 
      sOpt1: "Haute Couture & Runway Production (8K Master)", 
      sOpt2: "Haute Horlogerie & Fine Jewelry (Macro Optical Mastery)", 
      sOpt3: "Persistent Digital Brand Ambassador Suite", 
      sOpt4: "Brand Heritage Film & Digital Flagship Visuals", 
      sOpt5: "Haute Parfumerie & Prestige Beauty Campaign", 
      sOpt6: "Luxury Eyewear & Optics Production", 
      sOpt7: "Complete Seasonal Visual Ecosystem & Global Campaign", 
      budgetLabel: "Target Production Allocation (USD)",
      bOpt1: "$1,500 – $4,500 (Hero Asset / Single 8K Master)",
      bOpt2: "$5,000 – $15,000 (Seasonal Campaign Suite)",
      bOpt3: "$15,000 – $35,000+ (Cinematic Film & Digital Twin)",
      bOpt4: "Undisclosed / Bespoke Enterprise Scope",
      ndaLabel: "Require bilateral Non-Disclosure Agreement (NDA) prior to asset disclosure",
      uploadTitle: "Upload CAD Assets, Moodboards or Reference Media", 
      uploadHint: "Drag and drop or select reference files (PNG, JPG, MP4, MOV, PDF, ZIP, CAD)", 
      messagePlaceholder: "Outline your campaign objectives, delivery milestones, and aesthetic parameters...", 
      submitBtn: "Transmit Confidential Brief", 
      directEmail: "Executive Communication: info@aivienne.com" 
    },
    footerSection: { navTitle: "01 / NAVIGATION", dirTitle: "02 / DIRECTORY", netTitle: "03 / NETWORK", studio: "The Studio", works: "Selected Works", initiate: "Initiate Brief", cities: "Paris | Milan | Geneva | London | New York | Dubai | Global", terms: "TERMS OF ENGAGEMENT", privacy: "CONFIDENTIALITY & PRIVACY" },
    modals: {
      termsTitle: "Terms of Engagement & Production Codex",
      termsP1Title: "1. INTELLECTUAL PROPERTY & GLOBAL USAGE RIGHTS",
      termsP1Body: "Upon full settlement of commercial production invoices, all delivered 8K master visual renders, cinematic video files, and proprietary neural assets transition exclusively and perpetuity to the Client. The Client receives complete, unrestricted worldwide commercial exploitation rights across broadcast television, digital flagships, print media, global out-of-home (OOH) mega-billboards, and paid marketing channels with zero perpetual royalty obligations.",
      termsP2Title: "2. PRE-RELEASE SECRECY & BILATERAL NDA PROTOCOLS",
      termsP2Body: "All client briefs, high-resolution CAD schematics, seasonal moodboards, unreleased jewelry prototypes, and haute couture runway sketches are treated under strict pre-launch bilateral Non-Disclosure Agreements (NDA). Production takes place exclusively on isolated, encrypted compute nodes to prevent unauthorized media leaks or competitor discovery prior to the official worldwide release date.",
      termsP3Title: "3. CHROMATIC CALIBRATION & REVISION FRAMEWORK",
      termsP3Body: "Every commission includes two comprehensive revision cycles covering sub-surface scattering fine-tuning, raytraced reflection angles, spectral caustics intensity, and color grading adjustments. Any alteration requested to align with approved visual briefs is executed within 48 to 72 business hours under the supervision of the Executive Creative Director.",
      termsP4Title: "4. 8K MASTER FIDELITY & TECHNICAL COMPLIANCE",
      termsP4Body: "AI.VIENNE Studio+ guarantees that all primary deliverables meet true 8K master resolution (8192 x 4320 px) or uncompressed 4K 120 FPS high-frame-rate motion video standards. Shaders are physically calibrated according to realistic optical refractive indexes (diamonds, sapphires, titanium, silk, and biophysical melanin).",
      termsP5Title: "5. PAYMENT MILESTONES & RETAINER ALLOCATION",
      termsP5Body: "Studio production commences upon formal execution of the bilateral NDA, scope mutual sign-off, and receipt of the agreed commencement retainer. Deliverables are transferred via encrypted cryptographic download channels upon final milestone settlement.",
      termsP6Title: "6. LIMITATION OF LIABILITY & FORCE MAJEURE",
      termsP6Body: "AI.VIENNE Studio+ maintains enterprise-grade rendering failovers. In the rare event of unforeseen neural pipeline interrupts or computational downtime, delivery windows are extended with priority compute allocation without additional client expenditure.",
      privacyTitle: "Confidentiality & Data Protection Protocol",
      privacyP1Title: "1. CORPORATE DATA INTEGRITY & GDPR COMPLIANCE",
      privacyP1Body: "AI.VIENNE Studio+ collects and processes minimal corporate information strictly necessary for commercial correspondence, project brief synthesis, bilateral NDA formulation, and final encrypted asset transfer. We adhere to the highest international data privacy standards (GDPR / CCPA).",
      privacyP2Title: "2. STRICT EXCLUSION FROM PUBLIC AI MODEL TRAINING",
      privacyP2Body: "Zero client media, 3D CAD geometries, collection drafts, biometric facial meshes, or proprietary brand color palettes are ever submitted to, ingested by, or used to train public generative foundation models. All neural weights and custom LoRA models trained for client digital twins remain isolated in secure, dedicated private environments.",
      privacyP3Title: "3. HARDWARE-LEVEL ENCRYPTION & AIR-GAPPED ASSETS",
      privacyP3Body: "Pre-launch campaign media and high-resolution raw deliverables are stored using AES-256 military-grade encryption. Intermediate rendering reviews are dynamically watermarked and transmitted via password-protected, time-expiring secure client links.",
      privacyP4Title: "4. CRYPTOGRAPHIC ASSET PURGE RIGHTS",
      privacyP4Body: "Following full project deployment and final sign-off, clients hold the absolute contractual right to request the permanent cryptographic erasure of all working project files, uploaded CAD assets, and temporary training caches from our local production infrastructure.",
      privacyP5Title: "5. THIRD-PARTY CONFIDENTIALITY & SUB-CONTRACTORS",
      privacyP5Body: "AI.VIENNE Studio+ does not disclose, license, or sell any enterprise client information, email correspondence, or creative assets to third-party vendors or marketing aggregators under any circumstances.",
      privacyP6Title: "6. DEDICATED DATA PROTECTION OFFICER",
      privacyP6Body: "For enterprise compliance audits, bilateral NDA inquiries, or instant data deletion requests, clients can contact our dedicated executive legal desk directly at legal@aivienne.com or info@aivienne.com."
    },
    footer: "© 2026 AI.VIENNE Studio+. All rights reserved."
  },
  TR: {
    nav: { portfolio: "Vaka Analizleri", capabilities: "Yetkinlikler", services: "Hizmetler", avatar: "Dijital İkizler", studio: "Stüdyo", system: "Sistem", theStudio: "Stüdyomuz", transformation: "Dönüşüm", roi: "ROI Matrisi", journal: "Dergi", contact: "Özel Talep", cta: "BRİEF GÖNDER" },
    hero: { badge: "Yapay Zeka Destekli Lüks Görsel Prodüksiyon Evi", titleStart: "Yüksek Moda, Mücevher ve Saatçilikte", titleGradient: "Neural Zanaatkarlık", desc: "AI.VIENNE Studio+, global lüks markalar için 8K sinematik kampanyalar, spektral materyal renderları ve biyometrik kimliği korunan kalıcı dijital modeller üretir.", btnPrimary: "Vaka Analizlerini İncele", btnSecondary: "Doğrudan İletişim: info@aivienne.com" },
    manifesto: { sub: "KREATİF KODUMUZ", line1: "Geçici dijital trendlere uyum sağlamıyoruz.", line2: "ZAMANSIZ LÜKS EVRENLER İNŞA EDİYORUZ." },
    servicesPillars: {
      tag: "ÖZEL HİZMET SÜTUNLARI",
      title: "Stratejik Prodüksiyon Hizmetleri",
      desc: "Fiziksel ve dijital amiral gemilerinde marka prestijini yükseltmek ve üretim sürelerini kısaltmak için tasarlanmış kurumsal lüks hizmetler.",
      scopeLabel: "Stratejik Kapsam:",
      deliverablesLabel: "Temel Çıktılar:",
      turnaroundLabel: "Prodüksiyon Hızı:",
      btnBrief: "Hizmet Talebi Oluştur",
      s1Tag: "SEZONLUK KAMPANYALAR",
      s1Title: "Haute Couture & Podyum Prodüksiyonu",
      s1Desc: "Fiziksel mekan ve lojistik kısıtlamaları olmadan sezonluk kampanya sentezi, akışkan kumaş simülasyonları (ipek, kadife, brokar) ve editoryal moda hikayeleri.",
      s1Scope: "Moodboard mimarisi, haute couture ışıklandırma, kumaş mikro-fiziği simülasyonu ve çok açılı editoryal kürasyon.",
      s1Deliverables: "8K Baskı Masterları (8192x4320), 4K Lookbook Paketleri, 120 FPS Sinematik Döngüler.",
      s1Turnaround: "7 – 10 İş Günü",
      s2Tag: "OPTİK MAKRO HAKİMİYETİ",
      s2Title: "Haute Horlogerie & Lüks Mücevherat",
      s2Desc: "Geleneksel stüdyo optik hatalarını aşan sub-nanometre raytraced kırılımlar, elmas ışık saçılımı, safir cam yansımaları ve İsviçre mekanizma görselleştirmesi.",
      s2Scope: "CAD tasarımı hizalama, kırılma indisi kalibrasyonu (elmas/zümrüt), platin parlaklık haritalaması ve mekanizma animasyonu.",
      s2Deliverables: "8K Makro Görseller, Dinamik Caustics Video Döngüleri, Dekupe Master Çıktılar.",
      s2Turnaround: "5 – 8 İş Günü",
      s3Tag: "BİYOMETRİK MARKA YÜZLERİ",
      s3Title: "Kalıcı Dijital Marka Ambasadorları",
      s3Desc: "468 anatomik yüz koordinatını kilitleyerek çok sezonlu kampanyalarda kimlik sapmasını engelleyen kalıcı ve markaya özel dijital model üretimi.",
      s3Scope: "Yüz kemik yapısı kilitleme, çok katmanlı melanin ve cilt altı saçılımı (SSS), dijital gardırop uyarlaması ve mimik kurgusu.",
      s3Deliverables: "Markaya Özel Dijital Model Varlığı, Çok Ortamlı Kampanya Arşivi, 4K Video Döngüleri.",
      s3Turnaround: "10 – 14 İş Günü",
      s4Tag: "SİNEMATİK ANLATI",
      s4Title: "Marka Mirası Filmleri & Dijital Flagship",
      s4Desc: "Global butik ekranları, dev dijital panolar (Times Square/Ginza) ve küresel yayınlar için 120 FPS sinematik derinliğe sahip duygu odaklı marka filmleri.",
      s4Scope: "Sinematik hikaye kurgusu, orkestral ses senkronizasyonu, hacimsel ışık simülasyonu ve çok formatlı master hazırlığı (16:9, 9:16, 32:9).",
      s4Deliverables: "Kayıpsız 4K/8K Master Video Dosyaları, Dikey Sosyal Medya Kurguları, Sinema Standardında Renk Paketi.",
      s4Turnaround: "8 – 12 İş Günü"
    },
    capabilitiesSection: {
      tag: "UZMANLIK ALANLARI",
      title: "Prodüksiyon Yetkinlikleri",
      c1Num: "01", c1Title: "HAUTE COUTURE KAMPANYALARI", c1Desc: "Tam kapsamlı sezonluk kampanya görselleri, akışkan kumaş simülasyonları ve editoryal moda hikayeleri.",
      c2Num: "02", c2Title: "LÜKS MÜCEVHER VE SAATÇİLİK", c2Desc: "Elmas ışık kırılımı, safir cam yansımaları, rodyum kaplama ve İsviçre mekanizma detayları için 8K spektral render.",
      c3Num: "03", c3Title: "SİNEMATİK MARKA FİLMLERİ", c3Desc: "Global dijital amiral gemileri ve prestijli ekranlar için 120 FPS sinematik derinlik ve duygu odaklı video prodüksiyonları.",
      c4Num: "04", c4Title: "KALICI DİJİTAL MARKA YÜZLERİ", c4Desc: "Yüz geometrisini ve doğal cilt dokusunu %100 koruyan özel biyometrik dijital ikizler.",
      c5Num: "05", c5Title: "KURUMSAL İÇERİK SİSTEMLERİ", c5Desc: "Tüm çoklu kanallarda kusursuz marka tutarlılığı sağlayan ölçeklenebilir, yüksek hacimli görsel üretim altyapısı."
    },
    capabilitiesTech: {
      tag: "TEKNOLOJİK HAKİMİYET",
      title: "Kurumsal Neural Üretim Hattı",
      desc: "Global lüks markalar için tavizsiz fiziksel gerçekçilik, mutlak gizlilik ve yüksek sermaye verimliliği sunar.",
      cap1Title: "8K Neural Master Render", cap1Desc: "Devasa açık hava panoları ve baskılı lüks dergiler için 8192 x 4320 çözünürlüğünde kayıpsız master üretim.", cap1Tag1: "ÇIKIŞ FORMATI", cap1Tag2: "8K MASTER",
      cap2Title: "Cilt Altı Işık Saçılımı (SSS)", cap2Desc: "Gerçek gözenekleri, melanin pigmentasyonunu ve doğal kan dolaşımı ışık geçirgenliğini simüle eden biyofiziksel şaderler.", cap2Tag1: "BİYOFİZİKSEL GERÇEKLİK", cap2Tag2: "MELANİN SİMÜLASYONU",
      cap3Title: "Spektral Işık Kırılımı (Caustics)", cap3Desc: "Değerli taşlarda ve elmaslarda dalga boyu bazlı ışık saçılımını hesaplayan spektral raytracing teknolojisi.", cap3Tag1: "OPTİK FİZİK", cap3Tag2: "SPEKTRAL RAYTRACING",
      cap4Title: "Biyometrik Kimlik Koruma Ağı", cap4Desc: "Dijital modellerin yüz kemik yapısını 468 anatomik koordinat ile kilitleyerek deformasyonu engelleyen altyapı.", cap4Tag1: "KİMLİK SÜREKLİLİĞİ", cap4Tag2: "%100 GEOMETRİ"
    },
    system: {
      tag: "AI.VIENNE METODOLOJİSİ",
      title: "Beş Aşamalı Prodüksiyon Protokolü",
      sub: "YAPAY ZEKA İCRAYI HIZLANDIRIR. LÜKS KREATİF DİREKTÖRLÜK GELECEĞİ ŞEKİLLENDİRİR.",
      s1Num: "01", s1Title: "HİZALANMA VE DNA ANALİZİ", s1Detail: "Marka mirası, fiziksel CAD tasarımları, kumaş mikro dokuları ve editoryal vizyonun detaylı analizi.",
      s2Num: "02", s2Title: "SANAT YÖNETİMİ", s2Detail: "Yüksek moda ışık mimarisi, sinematik kadrajlama, optik lens kalibrasyonu ve kompozisyon kurgusu.",
      s3Num: "03", s3Title: "NEURAL SENTEZ", s3Detail: "Spektral raytracing, çok katmanlı materyal sentezi, cilt altı saçılımı ve 8K ultra çözünürlük oluşturma.",
      s4Num: "04", s4Title: "HAUTE RETOUCH", s4Detail: "Kusursuz renk derecelendirme (color grading), mücevher ışıltı optimizasyonu ve editoryal retuş.",
      s5Num: "05", s5Title: "ŞİFRELİ TESLİMAT", s5Detail: "Baskıya hazır 8K master görseller ve 120 FPS akıcı video döngülerinin NDA kapsamında teslimi."
    },
    studioSection: {
      tag: "STÜDYO",
      title: "Bağımsız Lüks Yapay Zeka Stüdyosu",
      desc: "AI.VIENNE Studio+, yüksek moda, lüks mücevherat ve saatçilik evleri için çalışan özel bir görsel prodüksiyon laboratuvarıdır.",
      founderName: "E. AKTAŞ",
      founderTitle: "Kurucu & Yönetici Kreatif Direktör",
      opsTitle: "GİZLİ OPERASYONLAR",
      opsVal1: "Global Uzaktan Erişimli Stüdyo",
      opsVal2: "İkili Gizlilik Sözleşmeli (NDA) B2B Prodüksiyon"
    },
    insights: {
      tag: "EDİTORYAL VE ARAŞTIRMA",
      title: "Haute Couture & Neural Makaleler",
      desc: "Yapay zeka, lüks ekonomi ve dijital zanaatkarlığın kesişim noktasına derinlemesine akademik bakış.",
      readMore: "Araştırma Makalesini Oku",
      article1Tag: "HAUTE COUTURE AI",
      article1Title: "Dijital Couture Ekonomisi: Pazara Çıkış Süresini %80 Azaltmak",
      article1Desc: "Paris ve Milano'nun önde gelen lüks moda evlerinin fiziksel numune maliyetlerini aşma yöntemleri.",
      article1Body1: "Geleneksel lüks moda takvimi kumaş tedariki, kişiye özel kalıp provaları ve çok lokasyonlu podyum organizasyonlarının fiziksel hızıyla sınırlıydı. Sezonluk kampanyalar aylar süren lojistik hazırlık, yüksek sermaye harcaması ve ciddi bir karbon ayak izi gerektiriyordu.",
      article1Body2: "AI.VIENNE'in neural üretim hattı sayesinde tasarımcılar artık akışkan ipek fiziğini, kadife ağırlığını ve özel jakar dokularını gerçek zamanlı olarak simüle edebilmektedir. Bu yaklaşım fiziksel prototipleme maliyetlerini ortadan kaldırırken, kampanya üretim süresini 12 haftadan 10 iş gününün altına indirmektedir.",
      article2Tag: "DİJİTAL İKİZLER",
      article2Title: "Lüks AI Avatarlarında Yüz Geometrisi ve Kimlik Koruma",
      article2Desc: "Biyofiziksel anatomik kilitleme ile marka yüzlerinin farklı çekimlerde süreklilik sağlamasını garanti eden inceleme.",
      article2Body1: "Lüks marka anlatımında model kimliği taviz verilemez bir unsurdur. Standart yapay zeka modelleri kareler arasında çene yapısı, göz mesafesi ve ten renginde tutarsızlıklar üreterek tüketici güvenini zedeler.",
      article2Body2: "AI.VIENNE bu sorunu Biyometrik Kimlik Koruma Ağı ile çözmektedir. 468 anatomik koordinat ve özel melanin simülasyonları sayesinde dijital modellerimiz farklı ışık koşullarında ve kamera açılarında kemik yapısını ve gözenek dokusunu %100 oranında korur.",
      article3Tag: "LÜKS MÜCEVHER",
      article3Title: "Spektral Raytracing: 8K Çözünürlükte Elmas Işık Kırılımı Simülasyonu",
      article3Desc: "Stüdyo optik kısıtlamaları olmadan makro mücevher renderlarında fiziksel mükemmellik.",
      article3Body1: "Lüks mücevherlerin makro fotoğrafçılığı aşırı optik zorluklar barındırır. Stüdyo flaşlarının pırlanta fasetleri ve platin yüzeylerle etkileşimi patlamış parlaklıklara veya değerli taşın doğal rengini yitirmesine neden olur.",
      article3Body2: "Neural altyapımız ışık kırılımını nanometre dalga boylarında hesaplar. Zümrüt, safir ve elmas içi tam yansımaları simüle ederek, global dev panolara ve basılı editoryal dergilere hazır 8K makro mücevher görselleri üretiriz."
    },
    portfolio: { 
      tag: "SEÇKİN VAKA ANALİZLERİ", 
      title: "Lüks Prodüksiyon Arşivi", 
      desc: "Lüks moda ve mücevher markaları için üretilmiş 16:9 sinematik geniş ekran ve 9:16 dikey kampanya çıktılarını inceleyin.", 
      filterAll: "Tüm Çalışmalar", 
      filter169: "16:9 Sinematik Master", 
      filter916: "9:16 Dikey Videolar", 
      playVideo: "Vaka Analizini İncele", 
      closeModal: "Kapat" 
    },
    transformation: { tag: "NEURAL DÖNÜŞÜM", title: "Geleneksel Stüdyo vs. AI.VIENNE 8K Master", desc: "Ham geleneksel stüdyo fotoğrafının ultra-gerçekçi lüks editoryal estetiğe nasıl dönüştüğünü kaydırıcı ile test edin.", beforeLabel: "Geleneksel Ham Stüdyo Çekimi", afterLabel: "AI.VIENNE 8K Master Render" },
    estimator: { tag: "SERMAYE VERİMLİLİK MATRİSİ", title: "Yönetici ROI ve Prodüksiyon Kapsamı", desc: "Geleneksel yüksek bütçeli çekimlerle neural prodüksiyon hızını ve sermaye tasarrufunu kıyaslayın.", scaleLabel: "Kampanya Kapsamı ve Çıktılar", tier1: "Tekli Master Varlık (Makro Render / Fotoğraf)", tier2: "Sezonluk 8K Kampanya Paketi (Çoklu İçerik)", tier3: "Tam Sinematik Podyum Filmi ve Dijital İkiz Ekosistemi", deliveryLabel: "Prodüksiyon Takvimi Önceliği", standard: "Standart Stüdyo Protokolü (10-14 İş Günü)", express: "Öncelikli Haute Couture Teslimatı (3-5 İş Günü)", estInvestment: "Tahmini Stratejik Yatırım:", roiTitle: "YÖNETİCİ VERİMLİLİK VE ROI ANALİZİ", tradCost: "Tahmini Fiziksel Çekim Bütçesi:", timeSaved: "Pazara Çıkış Hız Avantajı:", costSavings: "Sermaye Optimizasyonu:", range1: "$1,500 – $3,500", range2: "$5,000 – $12,000", range3: "$18,000 – $35,000+", trad1: "$25,000+", trad2: "$75,000+", trad3: "$180,000+" },
    twinsSection: { tag: "NEURAL AMBASADORLAR", title: "Dijital İkiz Vitrini", desc: "Kusursuz yüz biyometrisini ve lüks marka estetiğini koruyan kalıcı dijital modeller.", identityTitle: "Biyometrik Kimlik Garantisi", identityDesc: "Her dijital model farklı kıyafet, ışık ve ortamlarda yüz oranlarını ve doğal cilt dokusunu tavizsiz korur." },
    briefSection: { tag: "KREATİF YAPILANDIRICI", title: "İnteraktif Brief Mimarı", desc: "Resmi proje teklifi talep etmeden önce görsel parametrelerinizi kurgulayın.", s1: "1. Işık Mimarisi", s2: "2. Sektörel Uzmanlık", s3: "3. Mekan ve Atmosfer", applyBtn: "Konfigürasyonu Brief'e Aktar", configLabel: "Seçili Parametreler:" },
    chatConsole: { title: "Yönetici Özel Erişim Masası", sub: "Özel Danışmanlık, Stratejik Ortaklıklar ve Gizlilik Talepleri", placeholder: "Markanızı, teslimat takviminizi veya kampanya hedefinizi açıklayın...", send: "Güvenli Brief İlet", welcome: "AI.VIENNE Studio+ Özel Masasına hoş geldiniz. Projenizi ve marka detaylarınızı iletebilirsiniz. Ekibimiz talebinizi gizlilik protokolü altında inceleyecektir." },
    contact: { 
      tag: "GİZLİ PROJE TEKLİFİ", 
      title: "Özel Proje Brief'i Oluşturun", 
      desc: "Marka kampanyalarınızı geleceğin lüks görsel standartlarına taşımak için AI.VIENNE Studio+ ile çalışın.", 
      namePlaceholder: "Yetkili Kişi & Marka Adı", 
      emailPlaceholder: "Kurumsal E-Posta Adresi", 
      serviceLabel: "Prodüksiyon Alanı Seçin", 
      sOpt1: "Haute Couture & Podyum Prodüksiyonu (8K Master)", 
      sOpt2: "Haute Horlogerie & Lüks Mücevherat (Makro Optik Hakimiyeti)", 
      sOpt3: "Kalıcı Dijital Marka Ambasadoru Paketi", 
      sOpt4: "Marka Mirası Filmleri & Dijital Flagship Görselleri", 
      sOpt5: "Lüks Parfüm ve Kozmetik Kampanyası", 
      sOpt6: "Lüks Gözlük ve Optik Prodüksiyonu", 
      sOpt7: "Tam Sezonluk Görsel Ekosistem ve Global Kampanya", 
      budgetLabel: "Hedef Prodüksiyon Bütçesi (USD)",
      bOpt1: "$1,500 – $4,500 (Tekil Master Varlık / 8K Render)",
      bOpt2: "$5,000 – $15,000 (Sezonluk Kampanya Paketi)",
      bOpt3: "$15,000 – $35,000+ (Sinematik Film ve Dijital İkiz)",
      bOpt4: "Belirtilmemiş / Özel Kurumsal Kapsam",
      ndaLabel: "Materyal paylaşımı öncesi ikili Gizlilik Sözleşmesi (NDA) talep ediyorum",
      uploadTitle: "CAD Çizimi, Moodboard veya Referans Dosyası Yükleyin", 
      uploadHint: "Dosyaları sürükleyin veya seçin (PNG, JPG, MP4, MOV, PDF, ZIP, CAD)", 
      messagePlaceholder: "Kampanya hedefleriniz, teslimat takviminiz ve estetik beklentileriniz hakkında bilgi verin...", 
      submitBtn: "Gizli Brief'i Gönder", 
      directEmail: "Yönetici İletişim: info@aivienne.com" 
    },
    footerSection: { navTitle: "01 / NAVİGASYON", dirTitle: "02 / DİREKTÖRİK", netTitle: "03 / AĞLARIMIZ", studio: "Stüdyomuz", works: "Seçkin Çalışmalar", initiate: "Brief Başlat", cities: "Paris | Milano | Cenevre | Londra | New York | Dubai | Global", terms: "HİZMET VE KULLANIM ŞARTLARI", privacy: "GİZLİLİK VE VERİ KORUMA PROTOKOLÜ" },
    modals: {
      termsTitle: "Hizmet Şartları ve Prodüksiyon Protokolü",
      termsP1Title: "1. FİKRİ MÜLKİYET VE KÜRESEL KULLANIM HAKLARI",
      termsP1Body: "Proje bedelinin tamamlanmasının ardından üretilen tüm 8K master görseller, video dosyaları ve 3D varlıklar sınırsız ve süresiz olarak Müşteriye devredilir. Müşteri TV, basılı medya, küresel açık hava dev panoları (OOH) ve dijital platformlarda ek telif ödemeksizin tam ticari kullanım hakkına sahip olur.",
      termsP2Title: "2. YAYIN ÖNCESİ GİZLİLİK VE ÇİFT TARAFLI NDA",
      termsP2Body: "Müşteri tarafından iletilen tüm brief'ler, yüksek çözünürlüklü CAD tasarımları, moodboard'lar ve yayınlanmamış sezonluk çizimler çift taraflı Gizlilik Sözleşmesi (NDA) altında korunur. Prodüksiyon tamamen izole, şifreli sunucularda yürütülür.",
      termsP3Title: "3. RENK KALİBRASYONU VE REVİZYON PROTOKOLÜ",
      termsP3Body: "Her prodüksiyon paketi cilt altı saçılımı, raytraced yansıma açıları, spektral caustics ve renk derecelendirme (color grading) ayarlarını içeren 2 kapsamlı revizyon döngüsünü kapsar. Revizyonlar 48-72 saat içinde Kreatif Direktör denetiminde uygulanır.",
      termsP4Title: "4. 8K MASTER ÇÖZÜNÜRLÜK VE TEKNİK UYUMLULUK",
      termsP4Body: "AI.VIENNE Studio+, nihai görsellerin gerçek 8K çözünürlükte (8192 x 4320 px) ve videoların 120 FPS sinematik akıcılıkta olduğunu garanti eder. Materyal şaderleri gerçek fiziksel optik kırılma indislerine göre yapılandırılır.",
      termsP5Title: "5. ÖDEME AŞAMALARI VE BAŞLANGIÇ PROTOKOLÜ",
      termsP5Body: "Prodüksiyon, çift taraflı NDA imzası ve belirlenen başlangıç avansının ödenmesiyle devreye girer. Nihai master dosyalar son aşama onayı ile şifreli kanallar üzerinden teslim edilir.",
      termsP6Title: "6. MÜCBİR SEBEPLER VE SİSTEM GÜVENCESİ",
      termsP6Body: "AI.VIENNE Studio+, yüksek yedekli neural sunucu altyapısına sahiptir. Olası teknik kesintilerde müşteri aleyhine ek maliyet yansıtılmaksızın öncelikli işleme alınır.",
      privacyTitle: "Gizlilik ve Veri Koruma Protokolü (GDPR / KVKK)",
      privacyP1Title: "1. KURUMSAL VERİ GÜVENLİĞİ",
      privacyP1Body: "Yalnızca teklif oluşturma, proje brief sentezi ve şifreli teslimat için gerekli asgari kurumsal iletişim verileri işlenir. Uluslararası en yüksek veri koruma standartlarına tam uyum sağlanır.",
      privacyP2Title: "2. AÇIK YAPAY ZEKA MODELLERİNE EĞİTİM VERİLMEZ",
      privacyP2Body: "Müşterilerimize ait hiçbir tasarım, CAD verisi, biyometrik yüz taraması veya renk paleti herkese açık yapay zeka modellerinin eğitiminde kesinlikle kullanılmaz. Dijital ikiz modelleri tamamen kapalı sunucu havuzunda çalıştırılır.",
      privacyP3Title: "3. ASKERİ DÜZEYDE ŞİFRELEME (AES-256)",
      privacyP3Body: "Yayınlanmamış sezonluk taslaklar ve master dosyalar AES-256 şifreleme protokolüyle korunur. İnceleme aşamasındaki önizlemeler dinamik fligran korumalı bağlantılarla iletilir.",
      privacyP4Title: "4. KALICI VERİ İMHA VE UNUTULMA HAKKI",
      privacyP4Body: "Teslimat sonrası müşterilerimiz, sunucularımızda yer alan tüm ham proje dosyalarının, CAD verilerinin ve eğitim önbelleklerinin kalıcı olarak imha edilmesini talep etme hakkına sahiptir.",
      privacyP5Title: "5. ÜÇÜNCÜ TARAFLARLA PAYLAŞIM YASAĞI",
      privacyP5Body: "Müşteri bilgileri, e-posta yazışmaları ve görsel varlıklar hiçbir koşulda üçüncü taraf şirketlerle, reklam ağlarıyla veya veri toplayıcılarla paylaşılmaz ve satılamaz.",
      privacyP6Title: "6. DOĞRUDAN HUKUKİ İLETİŞİM",
      privacyP6Body: "Kurumsal denetimler, gizlilik sözleşmesi (NDA) talepleri veya anlık veri silme işlemleri için doğrudan legal@aivienne.com veya info@aivienne.com adresinden erişim sağlanabilir."
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
  title: string;
  clientSector: string;
  category: "jewelry" | "fashion" | "watch" | "eyewear" | "perfume";
  aspect: "16:9" | "9:16";
  type: "video" | "image";
  badge: string;
  icon: LucideIcon;
  poster: string;
  videoUrl: string;
  desc: string;
  objective: string;
  neuralTechnique: string;
  deliverables: string;
  hoverState: string;
}

interface ArticleItem {
  tag: string;
  title: string;
  body1: string;
  body2: string;
}

const PORTFOLIO_ITEMS: CaseStudyItem[] = [
  { 
    id: "1", 
    title: "Imperial Diamond Showcase 8K", 
    clientSector: "Haute Joaillerie Atelier",
    category: "jewelry", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 CINEMATIC MASTER", 
    icon: Gem, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/obsidian-necklace.mp4", 
    desc: "Exquisite diamond light refraction & macro jewelry rendering in 16:9 widescreen.", 
    objective: "Eliminate studio flare and capture true spectral fire across 100+ brilliant-cut diamonds.",
    neuralTechnique: "Spectral Raytracing & Nanometer Chromatic Dispersion",
    deliverables: "8K Master Still (8192x4320) + 120 FPS Motion Loop",
    hoverState: "CAUSTICS REFRACTION PASS 8K" 
  },
  { 
    id: "2", 
    title: "Haute Couture Paris Vertical Runway", 
    clientSector: "Parisian Fashion House",
    category: "fashion", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 VERTICAL REEL", 
    icon: Sparkle, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/2.mp4", 
    desc: "Ultra-realistic 9:16 vertical motion for mobile social campaigns & digital billboards.", 
    objective: "Simulate complex fluid silk movement and micro-pleating without physical model shoots.",
    neuralTechnique: "Subsurface Scattering & Dynamic Fabric Physics Shaders",
    deliverables: "9:16 4K Mobile Campaign Reel + Social Cutdowns",
    hoverState: "VERTICAL NEURAL RUNWAY" 
  },
  { 
    id: "3", 
    title: "Haute Horlogerie Royal Tourbillon", 
    clientSector: "Swiss Horlogerie Manufacture",
    category: "watch", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 HORLOGERIE FILM", 
    icon: Watch, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/aurelia-campaign-loop.mp4", 
    desc: "Swiss timepiece mechanics & sapphire glass caustics reflections.", 
    objective: "Showcase internal mechanical escapement and anti-reflective sapphire crystal coatings.",
    neuralTechnique: "CAD Mesh Synthesis & Multi-Layer Optical Reflection Shaders",
    deliverables: "16:9 4K Cinema Loop + High-Resolution Print Masters",
    hoverState: "MACRO CAUSTICS PASS" 
  },
  { 
    id: "4", 
    title: "Avant-Garde Luxury Eyewear", 
    clientSector: "Prestige Titanium Optics",
    category: "eyewear", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 EDITORIAL POSTER", 
    icon: Glasses, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/titanium-eyewear.mp4", 
    desc: "Titanium frames & tinted lens reflections in vertical fashion layout.", 
    objective: "Render brushed titanium textures and gradient ultraviolet lens coatings.",
    neuralTechnique: "Anisotropic Metal Shaders & Polarized Lighting Passes",
    deliverables: "Vertical Billboard Master + Digital Ad Suite",
    hoverState: "TITANIUM REFLECTION PASS" 
  },
  { 
    id: "5", 
    title: "Haute Parfumerie Royal Essence", 
    clientSector: "Niche Fragrance Atelier",
    category: "perfume", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 MACRO RENDER", 
    icon: Sparkles, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/crystal-perfume.mp4", 
    desc: "Hand-cut crystal perfume bottle & liquid physics motion.", 
    objective: "Simulate viscous perfume liquid dynamics and crystal refraction in real-time.",
    neuralTechnique: "Volumetric Fluid Dynamics & Internal Photon Scattering",
    deliverables: "Global Commercial Cut + E-Flagship Hero Stills",
    hoverState: "CRYSTAL CAUSTICS PASS" 
  },
  { 
    id: "6", 
    title: "Royal Emerald High Jewelry", 
    clientSector: "Geneva High Jewelry House",
    category: "jewelry", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 HIGH JEWELRY", 
    icon: Gem, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/emerald-ring.mp4", 
    desc: "Emerald green light dispersion and platinum rendering for mobile display.", 
    objective: "Highlight emerald jardin inclusions and platinum micro-pavé brilliance.",
    neuralTechnique: "Deep Mineral Subsurface Shading & Spectral Dispersion",
    deliverables: "9:16 Vertical Master + Social Showcase Suite",
    hoverState: "PLATINUM DISPERSION PASS" 
  },
  { 
    id: "7", 
    title: "Grand Complication Sapphire Horlogerie", 
    clientSector: "Independent Watchmaker",
    category: "watch", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 TIMEPIECE MASTER", 
    icon: Watch, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/watch-promo.mp4", 
    desc: "Swiss perpetual calendar mechanics & raytraced titanium skeleton case in 16:9 widescreen.", 
    objective: "Visualize intricate skeleton movement gears under dramatic moody chiaroscuro lighting.",
    neuralTechnique: "Micro-Mechanical Kinematic Solver & Spectral Raytracing",
    deliverables: "16:9 Cinematic Video + 8K Editorial Stills",
    hoverState: "SAPPHIRE HORLOGERIE PASS" 
  },
  { 
    id: "8", 
    title: "Sovereign Diamond Haute Joaillerie", 
    clientSector: "Place Vendôme Jewelry Maison",
    category: "jewelry", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 HIGH JEWELRY REEL", 
    icon: Gem, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/jewelry-reel.mp4", 
    desc: "Brilliant-cut diamond cascading necklace & prismatic spectral caustics in 9:16 vertical.", 
    objective: "Deliver fluid motion for cascading diamond necklace with dynamic light refraction.",
    neuralTechnique: "Dynamic Caustics Path-Tracing & Biometric Model Alignment",
    deliverables: "4K Vertical Reel + 8K Print Master Archive",
    hoverState: "DIAMOND DISPERSION PASS" 
  }
];

const DIGITAL_TWINS = [
  { 
    id: "vienne", 
    name: "Vienne - Neural Avatar", 
    role: "Haute Couture & High Jewelry Face", 
    lighting: "Chiaroscuro Gold Studio", 
    outfit: "Silk Evening Gown & Emerald Pavé", 
    bg: "from-amber-900/40 via-neutral-950 to-neutral-950",
    poster: "/vienne-portrait.jpg",
    video: "/vienne-campaign-loop.mp4"
  },
  { 
    id: "aurelia", 
    name: "Aurelia - Avant-Garde Avatar", 
    role: "Horlogerie & Futuristic Optics", 
    lighting: "Raytraced Neon Caustics", 
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

  const [estimatorTier, setEstimatorTier] = useState<number>(1);
  const [estimatorDelivery, setEstimatorDelivery] = useState<number>(1);
  const [showAssumptions, setShowAssumptions] = useState<boolean>(false);

  const [sliderPos, setSliderPos] = useState<number>(50);

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);

  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyItem | null>(null);

  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const twinVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isScanVideoMuted] = useState<boolean>(true);
  const scanVideoRef = useRef<HTMLVideoElement | null>(null);

  const [causticsPosLeft, setCausticsPosLeft] = useState({ x: 50, y: 50 });
  const [causticsPosRight, setCausticsPosRight] = useState({ x: 50, y: 50 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "sOpt1",
    budget: "bOpt1",
    requireNDA: true,
    message: ""
  });

  const [briefLighting, setBriefLighting] = useState("Dramatic Studio Gold");
  const [briefSegment, setBriefSegment] = useState("Swiss Horlogerie Timepiece");
  const [briefAtmosphere, setBriefAtmosphere] = useState("Parisian Palace Runway");

  const [selectedTwin, setSelectedTwin] = useState(DIGITAL_TWINS[0]);
  const [isDeskOpen, setIsDeskOpen] = useState(false);
  const [deskMessage, setDeskMessage] = useState("");

  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const t = TRANSLATIONS[selectedLang.code] || TRANSLATIONS.EN;
  const isRTL = selectedLang.dir === "rtl";

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "169") return item.aspect === "16:9";
    if (activeFilter === "916") return item.aspect === "9:16";
    return item.category === activeFilter;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => { setMousePos({ x: e.clientX, y: e.clientY }); };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      setAttachedFiles((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const removeFile = (index: number) => { setAttachedFiles((prev) => prev.filter((_, i) => i !== index)); };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fileNames = attachedFiles.map((f) => f.name).join(", ");
    const ndaText = formData.requireNDA ? "YES (Bilateral NDA Required)" : "NO";
    const mailToUrl = `mailto:info@aivienne.com?subject=Confidential Luxury Proposal Request - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Executive Name/Brand: ${formData.name}\nCorporate Email: ${formData.email}\nProduction Discipline: ${formData.service}\nTarget Budget Tier: ${formData.budget}\nNDA Requested: ${ndaText}\nBrief Configuration: [Lighting: ${briefLighting} | Segment: ${briefSegment} | Atmosphere: ${briefAtmosphere}]\nAttached Files: ${fileNames || "None"}\n\nProject Scope & Objectives:\n${formData.message}`
    )}`;
    window.location.href = mailToUrl;
  };

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

  const applyBriefToForm = () => {
    setFormData(prev => ({
      ...prev,
      message: `[CREATIVE ARCHITECT PARAMETERS]\n- Lighting Architecture: ${briefLighting}\n- Industry Discipline: ${briefSegment}\n- Spatial Atmosphere: ${briefAtmosphere}\n\nPlease prepare a bespoke executive luxury proposal aligning with these parameters.`
    }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const selectServicePillar = (serviceKey: string, serviceName: string) => {
    setFormData(prev => ({
      ...prev,
      service: serviceKey,
      message: `[SERVICE PILLAR ENGAGEMENT: ${serviceName}]\nWe would like to initiate a confidential scope discussion regarding ${serviceName}.`
    }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main dir={selectedLang.dir} className={`min-h-screen w-full max-w-full overflow-x-hidden bg-neutral-950 text-neutral-100 selection:bg-amber-500/20 selection:text-amber-200 relative pt-20 sm:pt-24 ${isRTL ? "font-serif" : ""}`}>
      {/* Custom Precision Cursor */}
      <div className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-amber-400/80 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />
      <div className="fixed pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-amber-400 -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />

      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.12),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* LUXURY CASE STUDY INSPECTOR LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 md:p-8">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className={`relative w-full ${activeCaseStudy.aspect === "9:16" ? "max-w-xl" : "max-w-5xl"} bg-neutral-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col`}>
              <button 
                onClick={() => setActiveCaseStudy(null)} 
                aria-label="Close Case Study"
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-neutral-900/90 border border-amber-400/40 text-neutral-300 hover:text-white hover:bg-amber-400 hover:text-neutral-950 transition-all cursor-pointer shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`relative ${activeCaseStudy.aspect === "9:16" ? "aspect-[9/16] max-h-[50vh]" : "aspect-video max-h-[52vh]"} w-full bg-black flex items-center justify-center overflow-hidden shrink-0`}>
                {activeCaseStudy.type === "video" ? (
                  <video 
                    autoPlay 
                    loop
                    muted
                    preload="auto"
                    controls 
                    playsInline 
                    className="w-full h-full object-contain bg-black"
                  >
                    <source src={activeCaseStudy.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <Image 
                    src={activeCaseStudy.poster} 
                    alt={activeCaseStudy.title} 
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain bg-black"
                  />
                )}
              </div>

              {/* Case Study Dossier Specifications */}
              <div className="p-6 md:p-8 bg-neutral-950 overflow-y-auto border-t border-neutral-800 space-y-5 text-left">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full uppercase">
                        {activeCaseStudy.badge}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        Client: {activeCaseStudy.clientSector}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-100 mt-2">{activeCaseStudy.title}</h3>
                  </div>
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, message: `[CASE STUDY INQUIRY]\nI am interested in executing a campaign with similar specifications to "${activeCaseStudy.title}".` }));
                      setActiveCaseStudy(null);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-2.5 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all cursor-pointer shrink-0 flex items-center gap-2"
                  >
                    <span>Request Similar Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80 text-xs">
                  <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">Strategic Objective</span>
                    <p className="text-neutral-300 text-xs leading-relaxed font-light">{activeCaseStudy.objective}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">Neural Pipeline & Shaders</span>
                    <p className="text-neutral-300 text-xs leading-relaxed font-light">{activeCaseStudy.neuralTechnique}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">Deliverables & Specs</span>
                    <p className="text-neutral-300 text-xs leading-relaxed font-light">{activeCaseStudy.deliverables}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ARTICLE PUBLICATION MODAL */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 md:p-10 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
              <button onClick={() => setActiveArticle(null)} aria-label="Close Publication" className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
              
              <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1.5 rounded-full uppercase inline-block mb-4">
                {activeArticle.tag}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-100 mb-6 leading-snug">
                {activeArticle.title}
              </h3>
              
              <div className="space-y-4 text-xs md:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800 pt-6 font-light">
                <p>{activeArticle.body1}</p>
                <p>{activeArticle.body2}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">AI.VIENNE Research Monograph</span>
                <button 
                  onClick={() => { setActiveArticle(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="px-6 py-2.5 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Full Whitepaper</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms & Conditions Modal */}
      <AnimatePresence>
        {activeModal === "terms" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 md:p-10 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
              <button onClick={() => setActiveModal(null)} aria-label="Close Terms Modal" className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
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
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP5Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.termsP5Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP6Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.termsP6Body}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {activeModal === "privacy" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 md:p-10 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
              <button onClick={() => setActiveModal(null)} aria-label="Close Privacy Modal" className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
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
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP5Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.privacyP5Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP6Title}</h4>
                  <p className="font-light leading-relaxed">{t.modals?.privacyP6Body}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Executive Desk Console */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <button 
          onClick={() => setIsDeskOpen(!isDeskOpen)} 
          aria-label="Open Private Access Desk" 
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
              <button onClick={() => setIsDeskOpen(false)} aria-label="Close Console" className="text-neutral-400 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
            </div>
            <div className="py-6 space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-300 leading-relaxed font-light">
                {t.chatConsole?.welcome}
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:info@aivienne.com?subject=Private Executive Inquiry&body=${encodeURIComponent(deskMessage)}`; setDeskMessage(""); setIsDeskOpen(false); }} className="space-y-3">
              <input type="text" required value={deskMessage} onChange={(e) => setDeskMessage(e.target.value)} placeholder={t.chatConsole?.placeholder} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-100 outline-none focus:border-amber-400" />
              <button type="submit" className="w-full py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Send className="w-3.5 h-3.5" /> {t.chatConsole?.send}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
        <div className="w-full px-4 sm:px-8 md:px-12 h-20 sm:h-24 flex items-center justify-between">
          <button type="button" onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer text-left group shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="AI.VIENNE Studio+"
                fill
                sizes="48px"
                className="object-contain"
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

            <div className="relative group py-2" onMouseEnter={() => setIsStudioOpen(true)} onMouseLeave={() => setIsStudioOpen(false)}>
              <button className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap">
                <span>{t.nav?.studio}</span> <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              {isStudioOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-neutral-900 border border-neutral-800 rounded-2xl p-2 z-50 shadow-2xl backdrop-blur-xl">
                  <a href="#studio" className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs text-neutral-300 hover:text-white transition-colors">{t.nav?.theStudio}</a>
                  <a href="#system" className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs text-neutral-300 hover:text-white transition-colors">{t.nav?.system}</a>
                  <a href="#transformation" className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs text-neutral-300 hover:text-white transition-colors">{t.nav?.transformation}</a>
                  <a href="#twins" className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs text-neutral-300 hover:text-white transition-colors">{t.nav?.avatar}</a>
                  <a href="#estimator" className="block px-4 py-2.5 hover:bg-neutral-800 rounded-xl text-xs text-neutral-300 hover:text-white transition-colors">{t.nav?.roi}</a>
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

      {/* Hero */}
      <section className="relative z-10 w-full px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 pb-16 sm:pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2.5 px-4 sm:px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs sm:text-sm font-semibold text-amber-300 mb-8 sm:mb-10"><Sparkles className="w-4 h-4" /> {t.hero?.badge}</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[92px] font-extrabold tracking-tight text-neutral-100 max-w-7xl mx-auto leading-[1.1] sm:leading-[1.05]">{t.hero?.titleStart} <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">{t.hero?.titleGradient}</span></h1>
          <p className="mt-8 sm:mt-10 text-base sm:text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto font-light leading-relaxed">{t.hero?.desc}</p>
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#services" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-bold tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(251,191,36,0.3)]">{t.hero?.btnPrimary} <ArrowRight className="w-5 h-5" /></a>
            <a href="mailto:info@aivienne.com" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-bold tracking-wide text-neutral-200 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all flex items-center justify-center gap-3"><Mail className="w-5 h-5 text-amber-400" /> {t.hero?.btnSecondary}</a>
          </div>
        </motion.div>
      </section>

      {/* Manifesto */}
      <section className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-16 sm:py-20 border-y border-neutral-800/80 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase mb-4 block">{t.manifesto?.sub}</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral-300 tracking-wide mb-2">{t.manifesto?.line1}</h2>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-100 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">{t.manifesto?.line2}</h2>
        </div>
      </section>

      {/* STRATEGIC LUXURY SERVICE PILLARS */}
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
            {/* Pillar 1 */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 flex flex-col justify-between group shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-400 pointer-events-none"><Sparkles className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase">
                    {t.servicesPillars?.s1Tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {t.servicesPillars?.s1Turnaround}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.servicesPillars?.s1Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">{t.servicesPillars?.s1Desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-neutral-800/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">{t.servicesPillars?.scopeLabel}</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s1Scope}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">{t.servicesPillars?.deliverablesLabel}</span>
                    <p className="text-neutral-200 font-semibold">{t.servicesPillars?.s1Deliverables}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase">Haute Couture Standard</span>
                <button 
                  type="button"
                  onClick={() => selectServicePillar("sOpt1", "Haute Couture & Runway Production")}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 border border-amber-500/40 text-amber-300 group-hover:bg-amber-400 group-hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.servicesPillars?.btnBrief}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 flex flex-col justify-between group shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-400 pointer-events-none"><Gem className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase">
                    {t.servicesPillars?.s2Tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {t.servicesPillars?.s2Turnaround}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.servicesPillars?.s2Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">{t.servicesPillars?.s2Desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-neutral-800/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">{t.servicesPillars?.scopeLabel}</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s2Scope}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">{t.servicesPillars?.deliverablesLabel}</span>
                    <p className="text-neutral-200 font-semibold">{t.servicesPillars?.s2Deliverables}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase">Swiss & Vendôme Quality</span>
                <button 
                  type="button"
                  onClick={() => selectServicePillar("sOpt2", "Haute Horlogerie & Fine Jewelry")}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 border border-amber-500/40 text-amber-300 group-hover:bg-amber-400 group-hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.servicesPillars?.btnBrief}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 flex flex-col justify-between group shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-400 pointer-events-none"><UserCheck className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase">
                    {t.servicesPillars?.s3Tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {t.servicesPillars?.s3Turnaround}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.servicesPillars?.s3Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">{t.servicesPillars?.s3Desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-neutral-800/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">{t.servicesPillars?.scopeLabel}</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s3Scope}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">{t.servicesPillars?.deliverablesLabel}</span>
                    <p className="text-neutral-200 font-semibold">{t.servicesPillars?.s3Deliverables}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase">100% Geometry Lock</span>
                <button 
                  type="button"
                  onClick={() => selectServicePillar("sOpt3", "Persistent Digital Brand Ambassador Suite")}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 border border-amber-500/40 text-amber-300 group-hover:bg-amber-400 group-hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.servicesPillars?.btnBrief}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 flex flex-col justify-between group shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-400 pointer-events-none"><Film className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase">
                    {t.servicesPillars?.s4Tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {t.servicesPillars?.s4Turnaround}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.servicesPillars?.s4Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">{t.servicesPillars?.s4Desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-neutral-800/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">{t.servicesPillars?.scopeLabel}</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s4Scope}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">{t.servicesPillars?.deliverablesLabel}</span>
                    <p className="text-neutral-200 font-semibold">{t.servicesPillars?.s4Deliverables}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase">120 FPS Cinema Standard</span>
                <button 
                  type="button"
                  onClick={() => selectServicePillar("sOpt4", "Brand Heritage Film & Digital Flagship Visuals")}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 border border-amber-500/40 text-amber-300 group-hover:bg-amber-400 group-hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.servicesPillars?.btnBrief}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO CASE STUDIES GALLERY */}
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
              <button key={btn.id} onClick={() => setActiveFilter(btn.id)} className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${activeFilter === btn.id ? "bg-amber-400 text-neutral-950 shadow-[0_0_20px_rgba(251,191,36,0.35)]" : "bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:border-neutral-700"}`}>{btn.label}</button>
            ))}
          </div>

          {/* 16:9 WIDESCREEN SECTION */}
          {(activeFilter === "all" || activeFilter === "169") && (
            <div className="mb-14 sm:mb-20">
              <div className="flex items-center gap-2.5 mb-6">
                <Tv className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-100 tracking-wider uppercase">16:9 Cinematic Widescreen Case Studies</h3>
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
                        <Image src={item.poster} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-contain bg-black group-hover:scale-105 transition-transform duration-500 ease-out" />
                      )}
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/60 backdrop-blur-[1px] transition-all duration-300 flex flex-col items-center justify-center p-3 text-center opacity-0 group-hover:opacity-100">
                        <div className="w-10 h-10 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.5)] scale-90 group-hover:scale-100 transition-all z-10">
                          <Play className="w-4 h-4 ml-0.5 fill-neutral-950" />
                        </div>
                      </div>
                      <span className="absolute top-2 left-2 text-[8px] font-mono font-bold uppercase text-amber-300 bg-neutral-950/90 border border-amber-500/40 px-2 py-0.5 rounded-full z-30 shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                    <div className="mb-3 px-1 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">{item.clientSector}</span>
                        <h3 className="text-xs sm:text-sm font-bold text-neutral-100 mb-1 group-hover:text-amber-300 transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-tight font-light line-clamp-2 group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                    
                    <button type="button" onClick={(e) => { e.stopPropagation(); setActiveCaseStudy(item); }} className="w-full py-2 rounded-xl border border-neutral-800 bg-neutral-950 group-hover:bg-amber-400 group-hover:text-neutral-950 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                      <Briefcase className="w-3 h-3" /> {t.portfolio?.playVideo || "Inspect Case Study"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9:16 VERTICAL REELS SECTION */}
          {(activeFilter === "all" || activeFilter === "916") && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-100 tracking-wider uppercase">9:16 Vertical Reels & Mobile Billboard Cases</h3>
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
                        <Image src={item.poster} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" />
                      )}
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/60 backdrop-blur-[1px] transition-all duration-300 flex flex-col items-center justify-center p-3 text-center opacity-0 group-hover:opacity-100">
                        <div className="w-10 h-10 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.5)] scale-90 group-hover:scale-100 transition-all z-10">
                          <Play className="w-4 h-4 ml-0.5 fill-neutral-950" />
                        </div>
                      </div>
                      <span className="absolute top-2 left-2 text-[8px] font-mono font-bold uppercase text-amber-300 bg-neutral-950/90 border border-amber-500/40 px-2 py-0.5 rounded-full z-30 shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                    <div className="mb-3 px-1 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">{item.clientSector}</span>
                        <h3 className="text-xs sm:text-sm font-bold text-neutral-100 mb-1 group-hover:text-amber-300 transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-tight font-light line-clamp-2 group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                    
                    <button type="button" onClick={(e) => { e.stopPropagation(); setActiveCaseStudy(item); }} className="w-full py-2 rounded-xl border border-neutral-800 bg-neutral-950 group-hover:bg-amber-400 group-hover:text-neutral-950 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                      <Briefcase className="w-3 h-3" /> {t.portfolio?.playVideo || "Inspect Case Study"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CAPABILITIES SECTION 1: WHAT WE CREATE */}
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
                  <span>Bespoke Enterprise Scope</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION 2: ENTERPRISE CAPABILITIES & NEURAL PIPELINE */}
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

            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
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

      {/* Digital Twins Section */}
      <section id="twins" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.twinsSection?.tag}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.twinsSection?.title}</h2>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mt-4 sm:mt-6 md:mt-0 leading-relaxed font-light">{t.twinsSection?.desc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
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
                8K NEURAL MODEL
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
                    <Image src={selectedTwin.poster} alt={selectedTwin.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-amber-400/40 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-amber-300 uppercase tracking-widest">
                      {selectedTwin.name.split(" ")[0].toUpperCase()} • LIVE 8K NEURAL PASS
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
                    <span className="text-neutral-400 uppercase font-bold">Lighting Pass:</span>
                    <span className="text-neutral-200 font-semibold">{selectedTwin.lighting}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400 uppercase font-bold">Styling & Material:</span>
                    <span className="text-neutral-200 font-semibold">{selectedTwin.outfit}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80 grid grid-cols-2 gap-4 text-left">
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-amber-400" /> Runway Motion
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">120 FPS Cinematic</p>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-amber-400" /> Post-Studio Color
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">Grade A+ Master</p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {DIGITAL_TWINS.map((twin) => (
                  <button
                    key={twin.id}
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
                    ref={scanVideoRef}
                    autoPlay
                    loop
                    muted={isScanVideoMuted}
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-85"
                  >
                    <source src="/vienne-facial-loop.mp4" type="video/mp4" />
                  </video>
                  
                  <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#fbbf24] pointer-events-none z-20"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-amber-400/40 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                      <Activity className="w-3 h-3 text-emerald-400" /> BIOMETRIC SCAN • 100% VERIFIED
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-3">{t.twinsSection?.identityTitle}</h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-8 font-light">{t.twinsSection?.identityDesc}</p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 gap-4 text-left">
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 468 Point Mesh
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">100% Geometry Verified</p>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Multi-Layer SSS
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">Biophysical Melanin Pass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PRODUCTION SYSTEM */}
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
              { num: t.system?.s5Num, title: t.system?.s5Detail, icon: CheckSquare }
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
                  <span>Phase {step.num} Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STUDIO SECTION */}
      <section id="studio" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/10">
        <div className="max-w-5xl mx-auto bg-neutral-900/50 border border-amber-500/30 p-6 sm:p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
          <div className="space-y-6 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase block">{t.studioSection?.tag}</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-neutral-100 tracking-tight">{t.studioSection?.title}</h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">{t.studioSection?.desc}</p>
            
            <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-extrabold text-sm">
                EA
              </div>
              <div>
                <span className="text-sm sm:text-base font-extrabold text-neutral-100 block tracking-wide">{t.studioSection?.founderName}</span>
                <span className="text-xs text-amber-400 font-mono tracking-wider">{t.studioSection?.founderTitle}</span>
              </div>
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

      {/* NEURAL TRANSFORMATION SLIDER */}
      <section id="transformation" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/15">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.transformation?.tag}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.transformation?.title}</h2>
            <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto font-light">{t.transformation?.desc}</p>
          </div>

          <div className="relative w-full aspect-[16/9] max-h-[580px] rounded-3xl border border-amber-500/40 overflow-hidden shadow-[0_0_50px_rgba(217,119,6,0.15)] bg-neutral-950 select-none">
            <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center">
              <Image 
                src="/vienne-portrait.jpg" 
                alt="AI.VIENNE 8K Master Render" 
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-amber-500/10 border border-amber-400/40 text-[9px] sm:text-[10px] font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-md z-10 shadow-lg">
                ✨ {t.transformation?.afterLabel}
              </div>
            </div>

            <div className="absolute inset-0 bg-neutral-900 overflow-hidden border-r-2 border-amber-400 z-10" style={{ width: `${sliderPos}%` }}>
              <div className="absolute inset-0 h-full w-full" style={{ width: '100vw', maxWidth: '1200px' }}>
                <Image 
                  src="/traditional-raw.jpg" 
                  alt="Conventional Raw Studio Capture" 
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center filter grayscale contrast-75 brightness-75"
                />
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-neutral-950/90 border border-neutral-800 text-[9px] sm:text-[10px] font-bold text-neutral-300 uppercase tracking-widest backdrop-blur-md z-20 shadow-lg">
                ⚠️ {t.transformation?.beforeLabel}
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
        </div>
      </section>

      {/* ESTIMATOR + EXECUTIVE ROI MATRIX */}
      <section id="estimator" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/20">
        <div className="max-w-6xl mx-auto bg-neutral-900/60 border border-amber-500/30 p-6 sm:p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400"><Calculator className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div><span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.estimator?.tag}</span><h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 mt-1">{t.estimator?.title}</h2></div>
          </div>
          <p className="text-neutral-300 text-sm sm:text-base mb-8 sm:mb-10 font-light">{t.estimator?.desc}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-4">{t.estimator?.scaleLabel}</label>
                <div className="space-y-3">
                  {[{ tier: 1, label: t.estimator?.tier1 }, { tier: 2, label: t.estimator?.tier2 }, { tier: 3, label: t.estimator?.tier3 }].map((item) => (
                    <button key={item.tier} onClick={() => setEstimatorTier(item.tier)} className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${estimatorTier === item.tier ? "bg-amber-400/10 border-amber-400 text-amber-300" : "bg-neutral-950/60 border-neutral-800 text-neutral-300"}`}>
                      <span>{item.label}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${estimatorTier === item.tier ? "border-amber-400 bg-amber-400" : "border-neutral-700"}`}>{estimatorTier === item.tier && <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-4">{t.estimator?.deliveryLabel}</label>
                <div className="space-y-3">
                  {[{ speed: 1, label: t.estimator?.standard }, { speed: 1.3, label: t.estimator?.express }].map((item) => (
                    <button key={item.speed} onClick={() => setEstimatorDelivery(item.speed)} className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${estimatorDelivery === item.speed ? "bg-amber-400/10 border-amber-400 text-amber-300" : "bg-neutral-950/60 border-neutral-800 text-neutral-300"}`}>
                      <span>{item.label}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${estimatorDelivery === item.speed ? "border-amber-400 bg-amber-400" : "border-neutral-700"}`}>{estimatorDelivery === item.speed && <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-amber-500/40 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-400 pointer-events-none"><PieChart className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{t.estimator?.roiTitle}</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase">{t.estimator?.estInvestment}</p>
                    <p className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">
                      {estimatorTier === 1 && (estimatorDelivery === 1 ? t.estimator?.range1 : "$2,000 – $4,500")}
                      {estimatorTier === 2 && (estimatorDelivery === 1 ? t.estimator?.range2 : "$6,500 – $15,000")}
                      {estimatorTier === 3 && (estimatorDelivery === 1 ? t.estimator?.range3 : "$22,000 – $42,000+")}
                    </p>
                  </div>
                  <div className="border-t border-neutral-800 pt-4 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-neutral-400 uppercase font-bold">{t.estimator?.tradCost}</p>
                      <p className="text-neutral-300 font-bold mt-1 line-through decoration-red-500">
                        {estimatorTier === 1 ? t.estimator?.trad1 : estimatorTier === 2 ? t.estimator?.trad2 : t.estimator?.trad3}
                      </p>
                    </div>
                    <div>
                      <p className="text-neutral-400 uppercase font-bold">{t.estimator?.costSavings}</p>
                      <p className="text-emerald-400 font-bold mt-1">~85% Capital Efficiency</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-800 pt-4 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 uppercase font-bold">{t.estimator?.timeSaved}</span>
                    <span className="text-amber-300 font-bold flex items-center gap-1"><Check className="w-4 h-4 text-emerald-400" /> 80% Faster Delivery</span>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={() => setShowAssumptions(!showAssumptions)}
                      className="text-[11px] text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{showAssumptions ? "Hide Calculation Assumptions" : "View Calculation Assumptions & Methodology"}</span>
                    </button>
                    {showAssumptions && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-2 p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 leading-relaxed">
                        <strong className="text-amber-300 block mb-1">Calculation Methodology:</strong>
                        Estimates are benchmarked against traditional physical luxury campaigns factoring high-end location rentals, union crew rates, model licensing, post-production CGI, and multi-day travel logistics.
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 w-full py-3.5 sm:py-4 rounded-2xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer">
                Lock Strategic Production Rate <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO JOURNAL & INSIGHTS SECTION */}
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
            <article className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
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
                  body1: t.insights?.article1Body1,
                  body2: t.insights?.article1Body2
                })}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider cursor-pointer text-left"
              >
                <span>{t.insights?.readMore}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
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
                  body1: t.insights?.article2Body1,
                  body2: t.insights?.article2Body2
                })}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider cursor-pointer text-left"
              >
                <span>{t.insights?.readMore}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
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
                  body1: t.insights?.article3Body1,
                  body2: t.insights?.article3Body2
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

      {/* Brief Architect */}
      <section id="architect" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/20">
        <div className="max-w-5xl mx-auto bg-neutral-900/80 border border-amber-500/30 p-6 sm:p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl">
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
                  <button key={opt} onClick={() => setBriefLighting(opt)} className={`w-full text-left p-3 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefLighting === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection?.s2}</label>
              <div className="space-y-2">
                {["High Jewelry & Gems", "Haute Couture Runway", "Swiss Horlogerie Timepiece"].map((opt) => (
                  <button key={opt} onClick={() => setBriefSegment(opt)} className={`w-full text-left p-3.5 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefSegment === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection?.s3}</label>
              <div className="space-y-2">
                {["Parisian Palace Runway", "Futuristic Architectural Stage", "Exotic Desert Dunes"].map((opt) => (
                  <button key={opt} onClick={() => setBriefAtmosphere(opt)} className={`w-full text-left p-3.5 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefAtmosphere === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div><p className="text-xs font-bold text-neutral-400 uppercase">{t.briefSection?.configLabel}</p><p className="text-xs sm:text-sm font-semibold text-amber-300 mt-1">{briefLighting} • {briefSegment} • {briefAtmosphere}</p></div>
            <button onClick={applyBriefToForm} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 uppercase shrink-0 cursor-pointer"><Layers className="w-4 h-4" /> {t.briefSection?.applyBtn}</button>
          </div>
        </div>
      </section>

      {/* B2B QUALIFIED LEAD FUNNEL & PROPOSAL SECTION */}
      <section id="contact" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.contact?.tag}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.contact?.title}</h2>
            <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto font-light">{t.contact?.desc}</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8 bg-neutral-900/30 border border-neutral-800 p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label htmlFor="client-name" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.namePlaceholder} *</label>
                <input id="client-name" name="clientName" type="text" required autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={t.contact?.namePlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none" />
              </div>
              <div>
                <label htmlFor="client-email" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.emailPlaceholder} *</label>
                <input id="client-email" name="clientEmail" type="email" required autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={t.contact?.emailPlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none" />
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

            {/* NDA Protocol Toggle */}
            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-amber-500/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-neutral-200 font-medium">{t.contact?.ndaLabel}</span>
              </div>
              <input 
                type="checkbox" 
                checked={formData.requireNDA} 
                onChange={(e) => setFormData({ ...formData, requireNDA: e.target.checked })} 
                className="w-5 h-5 accent-amber-400 rounded cursor-pointer" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.uploadTitle}</label>
              <div className="relative border-2 border-dashed border-neutral-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 bg-neutral-950/60 text-center transition-colors group cursor-pointer">
                <input type="file" multiple onChange={handleFileUpload} accept="image/*,video/*,.pdf,.zip,.cad,.obj" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform"><UploadCloud className="w-6 h-6" /></div>
                  <p className="text-xs sm:text-sm font-medium text-neutral-200 max-w-md leading-relaxed">{t.contact?.uploadHint}</p>
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
              <label htmlFor="project-message" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.messagePlaceholder} *</label>
              <textarea id="project-message" name="projectMessage" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t.contact?.messagePlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none resize-none font-light" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-4">
              <button type="submit" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(251,191,36,0.25)] cursor-pointer"><Send className="w-4 h-4 sm:w-5 sm:h-5" /> {t.contact?.submitBtn}</button>
              <a href="mailto:info@aivienne.com" className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-2"><Mail className="w-4 h-4 text-amber-400" /> {t.contact?.directEmail}</a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-16 sm:pt-20 pb-12 px-4 sm:px-12 md:px-16">
        <div className="w-full bg-amber-400 text-neutral-950 rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-20 shadow-[0_0_60px_rgba(251,191,36,0.18)]/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pb-12 sm:pb-20 border-b border-neutral-950/20">
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
                <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-90">{t.footerSection?.cities}</p>
              </div>
            </div>
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-6 sm:mb-8">{t.footerSection?.netTitle}</span>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-semibold">
                <li><a href="https://instagram.com/ai.vienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 block">Instagram</a></li>
                <li><a href="https://linkedin.com/company/aivienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 block">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Maison Emblem & Giant Typographic Brand Header */}
          <div className="py-8 sm:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-neutral-950 border-2 border-neutral-950 p-2 sm:p-3 shadow-2xl shrink-0">
                <Image
                  src="/logo.png"
                  alt="AI.VIENNE Studio+ Luxury Emblem"
                  fill
                  sizes="144px"
                  className="object-contain p-2"
                />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-mono font-extrabold tracking-[0.3em] uppercase text-neutral-950/70 block">Haute Visual Production</span>
                <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-950 select-none leading-none">
                  AI.VIENNE<br /><span className="font-light">STUDIO+</span>
                </h1>
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