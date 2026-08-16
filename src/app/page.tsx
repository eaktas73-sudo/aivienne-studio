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
  Lock,
  Calculator,
  Volume2,
  VolumeX,
  Download,
  Layers,
  SlidersHorizontal,
  TrendingUp,
  Key,
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
  Tv
} from "lucide-react";

type TranslationContent = Record<string, any>;

const TRANSLATIONS: Record<string, TranslationContent> = {
  EN: {
    nav: { portfolio: "Portfolio", capabilities: "Capabilities", avatar: "Digital Twins", studio: "Studio", system: "System", theStudio: "The Studio", transformation: "Transformation", roi: "ROI Matrix", journal: "Journal", portal: "VIP", contact: "Contact", cta: "GET IN TOUCH" },
    hero: { badge: "AI-Powered Luxury Content Agency", titleStart: "Elevating High Fashion & Fine Jewelry Through", titleGradient: "Artificial Intelligence", desc: "AI.VIENNE Studio+ crafts ultra-realistic, cinematic imagery and high-end visual productions tailored for luxury brands worldwide.", btnPrimary: "Explore Portfolio", btnSecondary: "Contact: info@aivienne.com" },
    manifesto: { sub: "OUR PHILOSOPHY", line1: "We do not adapt to trends.", line2: "WE ARCHITECT TIMELESS UNIVERSES." },
    capabilitiesSection: {
      tag: "CAPABILITIES",
      title: "What We Create",
      c1Num: "01", c1Title: "LUXURY CAMPAIGNS", c1Desc: "Full-scale, AI-powered seasonal campaign imagery for haute couture, fine jewelry, and prestige beauty.",
      c2Num: "02", c2Title: "PRODUCT VISUALIZATION", c2Desc: "Ultra-high-precision 8K macro rendering for Swiss timepieces, fragrance bottles, and titanium eyewear.",
      c3Num: "03", c3Title: "CINEMATIC FILMS", c3Desc: "High-impact, 120fps short-form motion films, digital runway teasers, and vertical social-first video assets.",
      c4Num: "04", c4Title: "DIGITAL CHARACTERS", c4Desc: "Bespoke virtual avatars and brand ambassadors engineered with strict facial geometry preservation.",
      c5Num: "05", c5Title: "CONTENT SYSTEMS", c5Desc: "Scalable, high-volume visual ecosystems designed for global luxury houses needing continuous output."
    },
    capabilitiesTech: {
      tag: "CORE TECHNICAL MASTERY",
      title: "Enterprise Capabilities & Neural Pipeline",
      desc: "Engineered to deliver uncompromising quality, absolute confidentiality, and rapid time-to-market.",
      cap1Title: "8K Neural Rendering", cap1Desc: "Custom-trained AI models outputting cinematic 8K resolutions suited for large-format print and digital billboards.", cap1Tag1: "MASTER PRINT SPEC", cap1Tag2: "8K (8192 X 4320)",
      cap2Title: "Subsurface Skin Physics", cap2Desc: "Advanced biophysical shaders simulating realistic pores, melanin distribution, and light dispersion.", cap2Tag1: "MATERIAL ACCURACY", cap2Tag2: "SUBSURFACE SHADER",
      cap3Title: "Dynamic Caustics Lighting", cap3Desc: "Raytraced light refraction through diamonds, sapphire glass, and precious metals using spectral techniques.", cap3Tag1: "LIGHT DISPERSION", cap3Tag2: "SPECTRAL RAYTRACING",
      cap4Title: "Biometric Identity Mesh", cap4Desc: "Proprietary facial geometry preservation ensuring digital avatars retain 100% brand model identity.", cap4Tag1: "IDENTITY CONTINUITY", cap4Tag2: "100% GEOMETRY MESH"
    },
    system: {
      tag: "THE AI.VIENNE WORKFLOW",
      title: "The Production System",
      sub: "AI ACCELERATES EXECUTION. HUMAN CREATIVE DIRECTION DEFINES THE RESULT.",
      s1Num: "01", s1Title: "DISCOVER", s1Detail: "Deep-dive alignment on brand DNA, CAD references, moodboards, and campaign objectives.",
      s2Num: "02", s2Title: "DIRECT", s2Detail: "Art direction framing, lighting pass curation, fabric physics definition, and cinematic composition.",
      s3Num: "03", s3Title: "PRODUCE", s3Detail: "Spectral raytracing, generative neural synthesis, 8K ultra-resolution pass, and biometric alignment.",
      s4Num: "04", s4Title: "REFINE", s4Detail: "Precision retouching, color grading, subsurface scattering adjustments, and sparkle passes.",
      s5Num: "05", s5Title: "DELIVER", s5Detail: "Campaign-ready 8K master stills, 120fps motion loops, and vertical assets under strict NDA."
    },
    studioSection: {
      tag: "THE STUDIO",
      title: "Independent Luxury AI Creative Studio",
      desc: "AI.VIENNE Studio+ is an elite, independent AI-native creative engine specializing in synthetic media for luxury fashion and fine jewelry.",
      founderName: "E. AKTAŞ",
      founderTitle: "Founder & Creative Director",
      opsTitle: "GLOBAL OPERATIONS",
      opsVal1: "Global Remote Studio",
      opsVal2: "Bespoke B2B Production"
    },
    insights: {
      tag: "Brand Authority & SEO",
      title: "Haute Couture & Neural Insights",
      desc: "Deep dives into the intersection of artificial intelligence, luxury economics, and digital craftsmanship.",
      readMore: "Read Publication",
      article1Tag: "HAUTE COUTURE AI",
      article1Title: "The Economics of Digital Couture: Reducing Time-to-Market by 80%",
      article1Desc: "How leading luxury houses in Paris and Milan leverage neural rendering to bypass physical prototyping.",
      article1Body1: "The luxury fashion calendar has traditionally been constrained by the velocity of textile sourcing.",
      article1Body2: "Neural Couture allows art directors to simulate fluid silk dynamics and velvet weight in real-time.",
      article2Tag: "DIGITAL TWINS",
      article2Title: "Facial Geometry & Identity Preservation in Luxury AI Avatars",
      article2Desc: "A technical examination of biometric preservation techniques ensuring brand model continuity.",
      article2Body1: "In luxury brand storytelling, model identity is non-negotiable.",
      article2Body2: "AI.VIENNE's Biometric Mesh Protocol locks the exact facial geometry and pore distribution.",
      article3Tag: "FINE JEWELRY",
      article3Title: "Spectral Raytracing: Simulating Diamond Dispersion in 8K Resolution",
      article3Desc: "Achieving physical material perfection in macro jewelry renders without physical lighting setups.",
      article3Body1: "Macro jewelry photography is notoriously difficult due to extreme reflections.",
      article3Body2: "Our neural pipeline calculates light dispersion at individual nanometer wavelengths."
    },
    portfolio: { 
      tag: "Curated Showcase", 
      title: "Bespoke Luxury Media Gallery", 
      desc: "Explore 8K widescreen masters and 9:16 vertical social reels engineered specifically for global luxury houses.", 
      filterAll: "All Works", 
      filter169: "16:9 Cinematic Masters", 
      filter916: "9:16 Vertical Reels", 
      playVideo: "Watch Campaign Video", 
      closeModal: "Close Master Player" 
    },
    transformation: { tag: "Neural Transformation", title: "Traditional Studio vs. AI.VIENNE 8K Master", desc: "Drag the interactive slider to experience how raw conventional photography is elevated into surreal neural luxury aesthetics.", beforeLabel: "Traditional Raw Capture", afterLabel: "AI.VIENNE 8K Master Render" },
    estimator: { tag: "Interactive Tool", title: "Bespoke Budget & Executive ROI Matrix", desc: "Configure your production scope and compare the capital efficiency against traditional physical shoots.", scaleLabel: "Production Tier / Scope", tier1: "Single High-End Asset (Macro Render / Still)", tier2: "Seasonal 8K Campaign Package (Multiple Assets)", tier3: "Full Cinematic Runway Film & Digital Twin Suite", deliveryLabel: "Delivery Speed", standard: "Standard Studio Timeline (10-14 Days)", express: "Priority Haute Couture Delivery (3-5 Days)", estInvestment: "Estimated Investment Scale:", roiTitle: "EXECUTIVE SAVINGS ANALYSIS", tradCost: "Est. Physical Shoot Cost:", timeSaved: "Time to Market Efficiency:", costSavings: "Capital Efficiency Savings:", range1: "$1,500 – $3,500", range2: "$5,000 – $12,000", range3: "$18,000 – $35,000+", trad1: "$25,000+", trad2: "$75,000+", trad3: "$180,000+" },
    twinsSection: { tag: "NEURAL AVATAR SUITE", title: "Digital Twin Showcase", desc: "Explore bespoke digital models engineered specifically to preserve strict facial geometry and brand aesthetics.", identityTitle: "Identity Preservation Protocol", identityDesc: "Every avatar maintains exact facial structure, proportions, and natural skin texture across all lighting setups." },
    briefSection: { tag: "INTERACTIVE CREATIVE STUDIO", title: "Brief Architect & Moodboard Builder", desc: "Configure your vision interactively before initiating project proposals.", s1: "1. Lighting Setup", s2: "2. Industry Segment", s3: "3. Setting & Atmosphere", applyBtn: "Apply To Proposal Brief", configLabel: "Current Brief Configuration:" },
    showroomSection: { tag: "INVITATION ONLY", title: "Private Showroom SS27", desc: "Exclusive unreleased collection previews available strictly under bilateral non-disclosure agreement.", btn: "Request VIP Invitation Key", status: "Access Restricted • NDA Required" },
    chatConsole: { title: "Private Access", sub: "Private Consultation, Strategic Partnerships & NDA Requests", placeholder: "Describe your brand, project or strategic objective...", send: "Submit Secure Inquiry", welcome: "Describe your brand, project or strategic objective. Our executive team will review your inquiry." },
    portal: { tag: "Client Portal", title: "VIP Vault & Secure Deliverables", desc: "Enter your assigned executive access credentials to securely review unreleased collection renders and 8K master files.", passPlaceholder: "Enter VIP Access Code (e.g. AIVIENNE-VIP)", loginBtn: "Access Secure Vault", errorMsg: "Invalid access credentials. Contact info@aivienne.com for executive clearance.", successMsg: "Access Granted: Welcome to AI.VIENNE Secure Client Vault.", vaultTitle: "Executive Secure Archive (Encrypted with Live Dynamic Watermark)", downloadAsset: "Download Master Asset", watermarkNotice: "Licensed Exclusively under NDA for AI.VIENNE Executive Partner." },
    contact: { tag: "Start Your Project", title: "Request a Bespoke Proposal", desc: "Partner with AI.VIENNE Studio+ to push the boundaries of luxury content creation.", namePlaceholder: "Your Name / Brand Name", emailPlaceholder: "Email Address", serviceLabel: "Select Desired Service", sOpt1: "Cinematic Fashion & Runway Video (8K)", sOpt2: "High Jewelry & Gemstone Campaign", sOpt3: "Haute Horlogerie & Timepiece Visuals", sOpt4: "Haute Parfumerie & Beauty Campaign", sOpt5: "Luxury Eyewear & Optics Production", sOpt6: "Bespoke Product & High-End Photography", sOpt7: "AI Brand Identity & Visual Strategy", sOpt8: "Full Digital Runway & Campaign Production", uploadTitle: "Upload Product Media & Attachments", uploadHint: "Drag and drop or tap to select Images, Videos, CAD, or Documents (PNG, JPG, MP4, MOV, PDF, ZIP)", messagePlaceholder: "Tell us about your project or collection...", submitBtn: "Send Project Brief", directEmail: "Direct Inquiry: info@aivienne.com" },
    footerSection: { navTitle: "01 / NAVIGATE", dirTitle: "02 / DIRECTORY", netTitle: "03 / NETWORK", studio: "The Studio", works: "Selected Works", initiate: "Initiate Contact", cities: "New York | London | Paris | Milan | Dubai | Vienna | Global", terms: "TERMS AND CONDITIONS", privacy: "PRIVACY POLICY" },
    modals: {
      termsTitle: "Terms & Conditions of Engagement",
      termsP1Title: "1. INTELLECTUAL PROPERTY & DELIVERABLES",
      termsP1Body: "Upon full settlement of project fees, all final 8K master renders transition entirely to the Client with unrestricted commercial usage rights worldwide.",
      termsP2Title: "2. CONFIDENTIALITY & PRE-RELEASE SECRECY",
      termsP2Body: "All client briefs, CAD files, unreleased fashion collection sketches, and proprietary brand assets remain under strict pre-launch bilateral Non-Disclosure Agreement (NDA) frameworks.",
      termsP3Title: "3. PAYMENT & REVISION PROTOCOLS",
      termsP3Body: "Projects are initiated upon mutual agreement of scope and retainer receipt. Minor adjustments are included within two revision cycles.",
      termsP4Title: "4. LIMITATION OF LIABILITY",
      termsP4Body: "AI.VIENNE Studio+ guarantees 8K master resolution compliance and material physical realism as defined within accepted project briefs.",
      privacyTitle: "Confidentiality & Privacy Policy (GDPR / CCPA Compliance)",
      privacyP1Title: "1. CORPORATE DATA PRIVACY",
      privacyP1Body: "AI.VIENNE Studio+ collects minimal corporate and contact data strictly necessary for B2B communications, proposal formulation, and project delivery.",
      privacyP2Title: "2. NO PUBLIC GENERATIVE MODEL TRAINING",
      privacyP2Body: "Zero client assets, proprietary CAD drawings, brand identity files, or custom digital twin facial scans are used to train public generative models.",
      privacyP3Title: "3. ENCRYPTED ASSET STORAGE & WATERMARKING",
      privacyP3Body: "Unreleased assets stored within our VIP Vault are protected using industry-standard encryption protocols and dynamic watermarking.",
      privacyP4Title: "4. DATA RETENTION & DELETION RIGHTS",
      privacyP4Body: "Clients may request complete purge and permanent deletion of all local working files and uploaded briefs upon project completion."
    },
    footer: "© 2026 AI.VIENNE Studio+. All rights reserved."
  },
  TR: {
    nav: { portfolio: "Portfolyo", capabilities: "Yetkinlikler", avatar: "Dijital İkizler", studio: "Stüdyo", system: "Sistem", theStudio: "Stüdyomuz", transformation: "Dönüşüm", roi: "ROI Matrisi", journal: "Dergi", portal: "VIP", contact: "İletişim", cta: "İLETİŞİME GEÇ" },
    hero: { badge: "Yapay Zeka Destekli Lüks İçerik Ajansı", titleStart: "Yüksek Moda ve Mücevher Sanatında", titleGradient: "Yapay Zeka Dokunuşu", desc: "AI.VIENNE Studio+, global lüks markalar için sinematik kalitede ultra-gerçekçi görsel içerikler ve prodüksiyonlar üretir.", btnPrimary: "Çalışmaları İncele", btnSecondary: "İletişim: info@aivienne.com" },
    manifesto: { sub: "FELSEFEMİZ", line1: "Trendlere uyum sağlamıyoruz.", line2: "ZAMANSIZ EVRENLER İNŞA EDİYORUZ." },
    capabilitiesSection: {
      tag: "YETKİNLİKLER",
      title: "Ne Üretiyoruz?",
      c1Num: "01", c1Title: "LÜKS KAMPANYALAR", c1Desc: "Haute couture, lüks mücevherat ve elit kozmetik markaları için tam kapsamlı sezonluk kampanya görselleri.",
      c2Num: "02", c2Title: "ÜRÜN GÖRSELLEŞTİRME", c2Desc: "İsviçre saatleri, kristal parfüm şişeleri ve titanyum gözlükler için ultra-yüksek hassasiyetli 8K makro render çözümleri.",
      c3Num: "03", c3Title: "SİNEMATİK FİLMLER", c3Desc: "Yüksek etkili 120fps sinematik hareketli filmler, dijital podyum fragmanları ve dikey sosyal medya videoları.",
      c4Num: "04", c4Title: "DİJİTAL KARAKTERLER", c4Desc: "Biyometrik yüz geometrisini %100 koruyan özel dijital avatarlar ve marka yüzleri.",
      c5Num: "05", c5Title: "İÇERİK SİSTEMLERİ", c5Desc: "Sürekli ve yüksek hacimli editoryal üretime ihtiyaç duyan global lüks markalar için ölçeklenebilir görsel sistemler."
    },
    capabilitiesTech: {
      tag: "TEMEL TEKNİK UZMANLIK",
      title: "Kurumsal Yetkinlikler ve Neural Üretim Hattı",
      desc: "Global lüks markalar için tavizsiz kalite, tam gizlilik ve hızlı pazara sunuş süresi hedeflenerek geliştirilmiştir.",
      cap1Title: "8K Neural Rendering", cap1Desc: "Devasa baskı ve dijital panolar için bozulmasız, sinematik 8K çözünürlük üreten AI modelleri.", cap1Tag1: "BASKI ÖZELLİĞİ", cap1Tag2: "8K (8192 X 4320)",
      cap2Title: "Cilt Altı Işık Saçılımı", cap2Desc: "Gerçekçi gözenek, melanin dağılımı ve ışık kırılımını simüle eden biyofiziksel şaderler.", cap2Tag1: "MATERYAL HASSASİYETİ", cap2Tag2: "CİLT ALTI ŞADERİ",
      cap3Title: "Dinamik Caustics Işıklandırma", cap3Desc: "Elmas ve değerli metallerde tayf ışık kırılmasını hesaplayan spektral render teknikleri.", cap3Tag1: "IŞIK DAĞILIMI", cap3Tag2: "SPEKTRAL RAYTRACING",
      cap4Title: "Biyometrik Kimlik Koruma", cap4Desc: "Dijital modellerin yüz geometrisini %100 oranında koruyarak sahneler arası marka sürekliliği sağlayan altyapı.", cap4Tag1: "KİMLİK SÜREKLİLİĞİ", cap4Tag2: "%100 GEOMETRİK AĞ"
    },
    system: {
      tag: "AI.VIENNE ÜRETİM AKIŞI",
      title: "Üretim Sistemi",
      sub: "YAPAY ZEKA İCRAYI HIZLANDIRIR. İNSANİ KREATİF DİREKTÖRLÜK SONUCU TAYİN EDER.",
      s1Num: "01", s1Title: "KEŞİF (DISCOVER)", s1Detail: "Marka DNA'sı, CAD tasarımları, moodboard'lar ve çok kanallı kampanya hedefleri üzerinde analiz.",
      s2Num: "02", s2Title: "YÖNLENDİRME (DIRECT)", s2Detail: "Sanat direktörlüğü kurgusu, ışık açıları seçimi, kumaş fiziği ve sinematik kompozisyon mimarisi.",
      s3Num: "03", s3Title: "ÜRETİM (PRODUCE)", s3Detail: "Spektral raytracing ışık kırılımları, generatif neural sentez ve 8K ultra çözünürlük oluşturma.",
      s4Num: "04", s4Title: "HASSASLAŞTIRMA (REFINE)", s4Detail: "Kusursuz retuş, profesyonel renk derecelendirme (color grading) ve mücevher ışıltı işleme.",
      s5Num: "05", s5Title: "TESLİMAT (DELIVER)", s5Detail: "Kampanyaya hazır 8K master görseller ve 120fps sinematik döngülerin şifreli teslimi."
    },
    studioSection: {
      tag: "STÜDYOMUZ",
      title: "Bağımsız Lüks Yapay Zeka Kreatif Stüdyosu",
      desc: "AI.VIENNE Studio+, yüksek moda ve lüks mücevherat için sentetik medya prodüksiyonuna odaklanmış bağımsız bir kreatif üretim merkezidir.",
      founderName: "E. AKTAŞ",
      founderTitle: "Kurucu & Kreatif Direktör",
      opsTitle: "KÜRESEL OPERASYONLAR",
      opsVal1: "Global Uzaktan Erişimli Stüdyo",
      opsVal2: "Özel B2B Prodüksiyon Hizmeti"
    },
    insights: {
      tag: "Marka Otoritesi & SEO",
      title: "Haute Couture & Yapay Zeka Makaleleri",
      desc: "Yapay zeka, lüks ekonomi ve dijital zanaatkarlığın kesişim noktasına derinlemesine bakış.",
      readMore: "Yayını Oku",
      article1Tag: "HAUTE COUTURE AI",
      article1Title: "Dijital Couture Ekonomisi: Pazara Çıkış Süresini %80 Azaltmak",
      article1Desc: "Paris ve Milano'nun önde gelen lüks markalarının fiziksel prototipleri aşma stratejileri.",
      article1Body1: "Geleneksel lüks moda takvimi kumaş tedariki ve numune üretiminin fiziksel hızıyla sınırlıydı.",
      article1Body2: "Neural Couture; sanat yönetmenlerinin akışkan ipek fiziğini gerçek zamanlı simüle etmelerini sağlar.",
      article2Tag: "DİJİTAL İKİZLER",
      article2Title: "Lüks AI Avatarlarında Yüz Geometrisi ve Kimlik Koruma",
      article2Desc: "Marka yüzlerinin kampanyalar boyunca kusursuz süreklilik sağlamasını garanti eden inceleme.",
      article2Body1: "Lüks marka anlatımında model kimliği taviz verilemez bir unsurdur.",
      article2Body2: "AI.VIENNE Biyometrik Ağ Protokolü marka yüzlerinin kemik yapısını ve cilt dokusunu kilitler.",
      article3Tag: "LÜKS MÜCEVHER",
      article3Title: "Spektral Raytracing: 8K Çözünürlükte Elmas Işık Kırılımı Simülasyonu",
      article3Desc: "Yüksek maliyetli stüdyo ve ışık kurulumları olmadan makro mücevher renderlarında fiziksel mükemmellik.",
      article3Body1: "Makro mücevher fotoğrafçılığı aşırı yansımalar nedeniyle stüdyo ortamlarında oldukça zorludur.",
      article3Body2: "Spektral raytracing teknolojimiz, ışık kırılımını nanometre dalga boylarında hesaplar."
    },
    portfolio: { 
      tag: "Seçkin Koleksiyonlar", 
      title: "Özel Lüks Medya Galerisi", 
      desc: "8K sinematik geniş ekran masterlar ve lüks dijital kanallar için özel 9:16 dikey videolar.", 
      filterAll: "Tüm Çalışmalar", 
      filter169: "16:9 Sinematik Master", 
      filter916: "9:16 Dikey Videolar", 
      playVideo: "Kampanya Videosunu İzle", 
      closeModal: "Master Oynatıcıyı Kapat" 
    },
    transformation: { tag: "Neural Dönüşüm", title: "Geleneksel Stüdyo vs. AI.VIENNE 8K Master", desc: "Ham geleneksel fotoğrafın üst düzey yapay zeka estetiğine dönüşümünü inceleyin.", beforeLabel: "Geleneksel Ham Çekim", afterLabel: "AI.VIENNE 8K Master Render" },
    estimator: { tag: "İnteraktif Araç", title: "Özel Bütçe & Yönetici ROI Analizi", desc: "Prodüksiyon kapsamınızı belirleyin ve sermaye verimliliğini canlı olarak görün.", scaleLabel: "Prodüksiyon Seviyesi / Kapsamı", tier1: "Tekli Üst Segment Varlık (Makro Render / Fotoğraf)", tier2: "Sezonluk 8K Kampanya Paketi (Çoklu İçerik)", tier3: "Tam Sinematik Podyum Filmi & Dijital İkiz Paketi", deliveryLabel: "Teslimat Hızı", standard: "Standart Stüdyo Takvimi (10-14 Gün)", express: "Öncelikli Haute Couture Teslimatı (3-5 Gün)", estInvestment: "Tahmini Yatırım Ölçeği:", roiTitle: "YÖNETİCİ TASARRUF ANALİZİ", tradCost: "Tahmini Fiziksel Çekim Bütçesi:", timeSaved: "Pazara Çıkış Hız Avantajı:", costSavings: "Sermaye Verimliliği Tasarrufu:", range1: "$1,500 – $3,500", range2: "$5,000 – $12,000", range3: "$18,000 – $35,000+", trad1: "$25,000+", trad2: "$75,000+", trad3: "$180,000+" },
    twinsSection: { tag: "NEURAL AVATAR SUITE", title: "Dijital İkiz Vitrini", desc: "Yüz geometrisini ve marka estetiğini hassasiyetle koruyan özel dijital modeller.", identityTitle: "Kimlik Koruma Protokolü", identityDesc: "Her avatar tüm ışık kurulumlarında kusursuz yüz yapısını ve cilt dokusunu korur." },
    briefSection: { tag: "İNTERAKTİF KREATİF STÜDYO", title: "Brief Mimarı & Moodboard Oluşturucu", desc: "Proje teklifi oluşturmadan önce vizyonunuzu interaktif olarak yapılandırın.", s1: "1. Işık Kurgusu", s2: "2. Sektörel Segment", s3: "3. Atmosfer & Mekan", applyBtn: "Teklif Brief'ine Uygula", configLabel: "Mevcut Konfigürasyon:" },
    showroomSection: { tag: "ÖZEL DAVETİYE İLE", title: "Özel Showroom SS27", desc: "Henüz yayınlanmamış koleksiyon önizlemeleri ikili gizlilik sözleşmesi (NDA) kapsamında sunulur.", btn: "VIP Davetiye Kodu İsteyin", status: "Erişim Kısıtlı • NDA Gereklidir" },
    chatConsole: { title: "Özel Erişim", sub: "Özel Danışmanlık, Stratejik Ortaklıklar ve NDA Talepleri", placeholder: "Markanızı, projenizi veya stratejik hedefinizi açıklayın...", send: "Güvenli Talebi İlet", welcome: "Markanızı veya projenizi açıklayın. Yönetici ekibimiz talebinizi inceleyecektir." },
    portal: { tag: "Müşteri Portalı", title: "VIP Kasa ve Güvenli Teslimat", desc: "Yayınlanmamış koleksiyon renderlarını incelemek için VIP kodunuzu girin.", passPlaceholder: "VIP Erişim Kodu (örn. AIVIENNE-VIP)", loginBtn: "Kasaya Giriş Yap", errorMsg: "Geçersiz kimlik bilgisi.", successMsg: "Erişim Onaylandı: Hoş Geldiniz.", vaultTitle: "Yönetici Güvenli Arşivi", downloadAsset: "Master Dosyayı İndir", watermarkNotice: "AI.VIENNE NDA Lisanslıdır." },
    contact: { tag: "Projenizi Başlatın", title: "Özel Proje Teklifi Alın", desc: "Koleksiyonlarınızı geleceğin kreatif standartlarına taşıyın.", namePlaceholder: "Adınız / Marka Adı", emailPlaceholder: "E-Posta Adresiniz", serviceLabel: "Hizmet Seçin", sOpt1: "Sinematik Moda Videosu (8K)", sOpt2: "Lüks Mücevher Kampanyası", sOpt3: "Saat Prodüksiyonu", sOpt4: "Lüks Parfüm Kampanyası", sOpt5: "Lüks Gözlük Prodüksiyonu", sOpt6: "Özel Ürün Fotoğrafçılığı", sOpt7: "AI Marka Kimliği", sOpt8: "Tam Dijital Podyum", uploadTitle: "Dosya Yükleyin", uploadHint: "Görsel, Video veya CAD Sürükleyin (PNG, JPG, MP4, PDF, ZIP)", messagePlaceholder: "Projeniz hakkında bilgi verin...", submitBtn: "Brief'i Gönder", directEmail: "Doğrudan E-Posta: info@aivienne.com" },
    footerSection: { navTitle: "01 / NAVİGASYON", dirTitle: "02 / DİREKTÖRİK", netTitle: "03 / AĞLARIMIZ", studio: "Stüdyomuz", works: "Seçkin Çalışmalar", initiate: "İletişime Geçin", cities: "New York | Londra | Paris | Milano | Dubai | Viyana | Global", terms: "KULLANIM ŞARTLARI", privacy: "GİZLİLİK POLİTİKASI" },
    modals: {
      termsTitle: "Hizmet ve Kullanım Şartları Sözleşmesi",
      termsP1Title: "1. FİKRİ MÜLKİYET VE TESLİMAT HAKLARI",
      termsP1Body: "Proje ödemelerinin tamamlanmasının ardından üretilen tüm 8K master görseller ve 3D varlıklar sınırsız ticari kullanım haklarıyla Müşteriye devredilir.",
      termsP2Title: "2. GİZLİLİK VE YAYIN ÖNCESİ KORUMA",
      termsP2Body: "Müşteri tarafından iletilen tüm brief'ler ve CAD tasarımları ikili Gizlilik Sözleşmesi (NDA) altında korunur.",
      termsP3Title: "3. ÖDEME VE REVİZYON PROTOKOLLERİ",
      termsP3Body: "Renk ve ışık düzenlemeleri 2 revizyon döngüsü dahilinde ücretsiz yapılır.",
      termsP4Title: "4. SORUMLULUK SINIRLANDIRMASI",
      termsP4Body: "AI.VIENNE Studio+, 8K master çözünürlük standartları ve fiziksel materyal gerçekçiliğini garanti eder.",
      privacyTitle: "Gizlilik ve Veri Koruma Politikası (KVKK / GDPR)",
      privacyP1Title: "1. KURUMSAL VERİ GİZLİLİĞİ",
      privacyP1Body: "Yalnızca kurumsal iletişim ve teslimat süreçleri için gerekli olan minimum düzeydeki iletişim bilgileri işlenir.",
      privacyP2Title: "2. HALKA AÇIK YAPAY ZEKA MODELLERİNE EĞİTİM VERİLMEZ",
      privacyP2Body: "Müşterilerimize ait hiçbir veri halka açık yapay zeka modellerini eğitmek amacıyla kullanılmaz.",
      privacyP3Title: "3. ŞİFRELİ VERİ DEPOLAMA VE DİNAMİK FLİGRAN",
      privacyP3Body: "VIP Kasa alanımızdaki materyaller üst düzey şifreleme ve dinamik fligran koruması altındadır.",
      privacyP4Title: "4. VERİ SİLME VE UNUTULMA HAKKI",
      privacyP4Body: "Müşterilerimiz teslimat sonrası tüm taslak dosyaların kalıcı olarak silinmesini talep edebilir."
    },
    footer: "© 2026 AI.VIENNE Studio+. Tüm hakları saklıdır."
  }
};

const LANGUAGES = [
  { code: "EN", name: "English", dir: "ltr", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "TR", name: "Türkçe", dir: "ltr", flag: "https://flagcdn.com/w40/tr.png" }
];

const PORTFOLIO_ITEMS = [
  { 
    id: "1", 
    title: "Imperial Diamond Showcase 8K", 
    category: "jewelry", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 CINEMATIC MASTER", 
    icon: Gem, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/obsidian-necklace.mp4", 
    desc: "Exquisite diamond light refraction & macro jewelry rendering in 16:9 widescreen.", 
    hoverState: "CAUSTICS REFRACTION PASS 8K" 
  },
  { 
    id: "2", 
    title: "Haute Couture Paris Vertical Runway", 
    category: "fashion", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 VERTICAL REELS", 
    icon: Sparkle, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/2.mp4", 
    desc: "Ultra-realistic 9:16 vertical motion for mobile social campaigns & digital billboards.", 
    hoverState: "VERTICAL NEURAL RUNWAY" 
  },
  { 
    id: "3", 
    title: "Haute Horlogerie Royal Tourbillon", 
    category: "watch", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 HORLOGERIE FILM", 
    icon: Watch, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/aurelia-campaign-loop.mp4", 
    desc: "Swiss timepiece mechanics & sapphire glass caustics reflections.", 
    hoverState: "MACRO CAUSTICS PASS" 
  },
  { 
    id: "4", 
    title: "Avant-Garde Luxury Eyewear", 
    category: "eyewear", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 EDITORIAL POSTER", 
    icon: Glasses, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/titanium-eyewear.mp4", 
    desc: "Titanium frames & tinted lens reflections in vertical fashion layout.", 
    hoverState: "TITANIUM REFLECTION PASS" 
  },
  { 
    id: "5", 
    title: "Haute Parfumerie Royal Essence", 
    category: "perfume", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 MACRO RENDER", 
    icon: Sparkles, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/crystal-perfume.mp4", 
    desc: "Hand-cut crystal perfume bottle & liquid physics motion.", 
    hoverState: "CRYSTAL CAUSTICS PASS" 
  },
  { 
    id: "6", 
    title: "Royal Emerald High Jewelry", 
    category: "jewelry", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 HIGH JEWELRY", 
    icon: Gem, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/emerald-ring.mp4", 
    desc: "Emerald green light dispersion and platinum rendering for mobile display.", 
    hoverState: "PLATINUM DISPERSION PASS" 
  },
  { 
    id: "7", 
    title: "Grand Complication Sapphire Horlogerie", 
    category: "watch", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 TIMEPIECE MASTER", 
    icon: Watch, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/watch-promo.mp4", 
    desc: "Swiss perpetual calendar mechanics & raytraced titanium skeleton case in 16:9 widescreen.", 
    hoverState: "SAPPHIRE HORLOGERIE PASS" 
  },
  { 
    id: "8", 
    title: "Sovereign Diamond Haute Joaillerie", 
    category: "jewelry", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 HIGH JEWELRY REEL", 
    icon: Gem, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/jewelry-reel.mp4", 
    desc: "Brilliant-cut diamond cascading necklace & prismatic spectral caustics in 9:16 vertical.", 
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

  const [vipPass, setVipPass] = useState("");
  const [vipStatus, setVipStatus] = useState<"idle" | "error" | "success">("idle");
  const [sliderPos, setSliderPos] = useState<number>(50);

  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);

  const [activeArticle, setActiveArticle] = useState<any | null>(null);
  const [activeMediaModal, setActiveMediaModal] = useState<any | null>(null);

  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const twinVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isScanVideoMuted, setIsScanVideoMuted] = useState<boolean>(true);
  const scanVideoRef = useRef<HTMLVideoElement | null>(null);

  const [causticsPosLeft, setCausticsPosLeft] = useState({ x: 50, y: 50 });
  const [causticsPosRight, setCausticsPosRight] = useState({ x: 50, y: 50 });

  const [formData, setFormData] = useState({ name: "", email: "", service: "sOpt1", message: "" });

  const [briefLighting, setBriefLighting] = useState("Dramatic Studio Gold");
  const [briefSegment, setBriefSegment] = useState("High Jewelry & Gems");
  const [briefAtmosphere, setBriefAtmosphere] = useState("Parisian Palace Runway");

  const [selectedTwin, setSelectedTwin] = useState(DIGITAL_TWINS[0]);
  const [isDeskOpen, setIsDeskOpen] = useState(false);
  const [deskMessage, setDeskMessage] = useState("");
  const [isShowroomModalOpen, setIsShowroomModalOpen] = useState(false);
  const [showroomEmail, setShowroomEmail] = useState("");

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

  const toggleScanVideoMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scanVideoRef.current) {
      scanVideoRef.current.muted = !isScanVideoMuted;
      setIsScanVideoMuted(!isScanVideoMuted);
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

  const toggleAudio = () => {
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }
    const ctx = audioContextRef.current;
    if (isAudioPlaying) {
      if (ctx.state === "running") ctx.suspend();
      setIsAudioPlaying(false);
    } else {
      if (ctx.state === "suspended") ctx.resume();
      setIsAudioPlaying(true);
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance("Welcome to AI.VIENNE Studio Plus.");
        utterance.rate = 0.9; utterance.pitch = 0.95; utterance.volume = 0.8;
        window.speechSynthesis.speak(utterance);
      }
    }
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
    const mailToUrl = `mailto:info@aivienne.com?subject=New Proposal Request - ${formData.name}&body=Name/Brand: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0ABrief Config: [Lighting: ${briefLighting} | Segment: ${briefSegment} | Atmosphere: ${briefAtmosphere}]%0D%0AAttached Files: ${fileNames || "None"}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailToUrl;
  };

  const handleVipLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (vipPass.trim().toUpperCase() === "AIVIENNE-VIP" || vipPass.trim().toLowerCase() === "vip") setVipStatus("success");
    else setVipStatus("error");
  };

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

  const applyBriefToForm = () => {
    setFormData(prev => ({
      ...prev,
      message: `[BRIEF ARCHITECT CONFIGURATION]\n- Lighting Pass: ${briefLighting}\n- Industry Segment: ${briefSegment}\n- Atmosphere: ${briefAtmosphere}\n\nPlease prepare a customized luxury production scope.`
    }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleShowroomRequest = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Showroom Invitation Requested for: ${showroomEmail}. Executive Desk will contact you under NDA.`);
    setIsShowroomModalOpen(false);
    setShowroomEmail("");
  };

  return (
    <main dir={selectedLang.dir} className={`min-h-screen w-full max-w-full overflow-x-hidden bg-neutral-950 text-neutral-100 selection:bg-amber-500/20 selection:text-amber-200 relative pt-20 sm:pt-24 ${isRTL ? "font-serif" : ""}`}>
      {/* Custom Cursor */}
      <div className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-amber-400/80 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />
      <div className="fixed pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-amber-400 -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />

      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.12),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* CINEMATIC MEDIA LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeMediaModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 md:p-8">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className={`relative w-full ${activeMediaModal.aspect === "9:16" ? "max-w-sm" : "max-w-4xl"} bg-neutral-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl transform-gpu`}>
              <button 
                onClick={() => setActiveMediaModal(null)} 
                aria-label="Close Media Player Button"
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-neutral-900/90 border border-amber-400/40 text-neutral-300 hover:text-white hover:bg-amber-400 hover:text-neutral-950 transition-all cursor-pointer shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`relative ${activeMediaModal.aspect === "9:16" ? "aspect-[9/16]" : "aspect-video"} w-full bg-black flex items-center justify-center overflow-hidden`}>
                {activeMediaModal.type === "video" ? (
                  <video 
                    autoPlay 
                    loop
                    muted
                    preload="auto"
                    controls 
                    playsInline 
                    className="w-full h-full object-contain bg-black"
                  >
                    <source src={activeMediaModal.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <Image 
                    src={activeMediaModal.poster} 
                    alt={activeMediaModal.title} 
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain bg-black"
                  />
                )}
              </div>

              <div className="p-4 md:p-6 bg-neutral-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-neutral-800">
                <div>
                  <span className="text-[9px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full uppercase inline-block mb-1.5">
                    {activeMediaModal.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-100">{activeMediaModal.title}</h3>
                  <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">{activeMediaModal.desc}</p>
                </div>
                <button 
                  onClick={() => setActiveMediaModal(null)} 
                  aria-label="Close Master Player Button"
                  className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:bg-amber-400 hover:text-neutral-950 font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer shrink-0"
                >
                  {t.portfolio?.closeModal || "Close Player"}
                </button>
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
                <span className="text-xs font-mono text-neutral-400">AI.VIENNE Editorial Research</span>
                <button 
                  onClick={() => { setActiveArticle(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="px-6 py-2.5 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Full Paper</span>
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
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
              <button onClick={() => setActiveModal(null)} aria-label="Close Terms Modal" className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
              <h3 className="text-2xl font-bold text-neutral-100 mb-6 flex items-center gap-3"><FileText className="w-6 h-6 text-amber-400" /> {t.modals?.termsTitle || t.footerSection?.terms}</h3>
              <div className="space-y-6 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800 pt-6">
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP1Title}</h4>
                  <p>{t.modals?.termsP1Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP2Title}</h4>
                  <p>{t.modals?.termsP2Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP3Title}</h4>
                  <p>{t.modals?.termsP3Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.termsP4Title}</h4>
                  <p>{t.modals?.termsP4Body}</p>
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
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
              <button onClick={() => setActiveModal(null)} aria-label="Close Privacy Modal" className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
              <h3 className="text-2xl font-bold text-neutral-100 mb-6 flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-amber-400" /> {t.modals?.privacyTitle || t.footerSection?.privacy}</h3>
              <div className="space-y-6 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800 pt-6">
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP1Title}</h4>
                  <p>{t.modals?.privacyP1Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP2Title}</h4>
                  <p>{t.modals?.privacyP2Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP3Title}</h4>
                  <p>{t.modals?.privacyP3Body}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-2">{t.modals?.privacyP4Title}</h4>
                  <p>{t.modals?.privacyP4Body}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Executive Desk Console (Private Access) */}
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
              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-300 leading-relaxed">
                {t.chatConsole?.welcome}
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:info@aivienne.com?subject=Private Access Inquiry&body=${deskMessage}`; setDeskMessage(""); setIsDeskOpen(false); }} className="space-y-3">
              <input type="text" required value={deskMessage} onChange={(e) => setDeskMessage(e.target.value)} placeholder={t.chatConsole?.placeholder} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-100 outline-none focus:border-amber-400" />
              <button type="submit" className="w-full py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Send className="w-3.5 h-3.5" /> {t.chatConsole?.send}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Showroom Invite Modal */}
      <AnimatePresence>
        {isShowroomModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-lg bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
              <button onClick={() => setIsShowroomModalOpen(false)} aria-label="Close Showroom Modal" className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4"><Key className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-2">{t.showroomSection?.title}</h3>
              <p className="text-xs text-neutral-300 mb-6">{t.showroomSection?.desc}</p>
              <form onSubmit={handleShowroomRequest} className="space-y-4">
                <input type="email" required value={showroomEmail} onChange={(e) => setShowroomEmail(e.target.value)} placeholder="Enter Corporate Email" className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-xs text-neutral-100 outline-none" />
                <button type="submit" className="w-full py-3 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all cursor-pointer">{t.showroomSection?.btn}</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
        <div className="w-full px-4 sm:px-8 md:px-12 h-20 sm:h-24 flex items-center justify-between">
          <button type="button" onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer text-left group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[1px]">
              <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center"><Sparkles className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" /></div>
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-widest text-neutral-100 group-hover:text-amber-400 transition-colors">AI.VIENNE <span className="text-amber-400 font-light">STUDIO+</span></span>
          </button>

          <nav className="hidden xl:flex items-center gap-8 text-sm font-semibold tracking-wider text-neutral-300">
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
            <a href="#portal" className="hover:text-amber-400 transition-colors py-2 relative group whitespace-nowrap">
              {t.nav?.portal}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <button type="button" onClick={toggleAudio} aria-label="Toggle Voice Guidance" className={`flex items-center gap-2 text-xs font-bold h-10 sm:h-11 px-3 sm:px-4 rounded-full border transition-all cursor-pointer ${isAudioPlaying ? "bg-amber-400 text-neutral-950 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]" : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`}>
              {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>
            
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
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-extrabold tracking-tight text-neutral-100 max-w-7xl mx-auto leading-[1.1] sm:leading-[1.05]">{t.hero?.titleStart} <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">{t.hero?.titleGradient}</span></h1>
          <p className="mt-8 sm:mt-10 text-base sm:text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto font-light leading-relaxed">{t.hero?.desc}</p>
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#portfolio" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-bold tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(251,191,36,0.3)]">{t.hero?.btnPrimary} <ArrowRight className="w-5 h-5" /></a>
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

      {/* PORTFOLIO GALLERY (CONTAINER HİZALAMASI YAPILMIŞTIR) */}
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
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-100 tracking-wider uppercase">16:9 Cinematic Widescreen Masters</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.filter(item => item.aspect === "16:9").map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setActiveMediaModal(item)}
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
                        <h3 className="text-xs sm:text-sm font-bold text-neutral-100 mb-1 group-hover:text-amber-300 transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-tight font-light line-clamp-2 group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                    
                    <button type="button" onClick={(e) => { e.stopPropagation(); setActiveMediaModal(item); }} className="w-full py-2 rounded-xl border border-neutral-800 bg-neutral-950 group-hover:bg-amber-400 group-hover:text-neutral-950 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                      <Play className="w-3 h-3" /> {t.portfolio?.playVideo || "Watch Video"}
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
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-100 tracking-wider uppercase">9:16 Vertical Reels & Mobile Billboards</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.filter(item => item.aspect === "9:16").map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setActiveMediaModal(item)}
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
                        <h3 className="text-xs sm:text-sm font-bold text-neutral-100 mb-1 group-hover:text-amber-300 transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-tight font-light line-clamp-2 group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                    
                    <button type="button" onClick={(e) => { e.stopPropagation(); setActiveMediaModal(item); }} className="w-full py-2 rounded-xl border border-neutral-800 bg-neutral-950 group-hover:bg-amber-400 group-hover:text-neutral-950 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                      <Play className="w-3 h-3" /> {t.portfolio?.playVideo || "Watch Video"}
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
              { num: t.capabilitiesSection?.c3Num, title: t.capabilitiesSection?.c3Title, desc: t.capabilitiesSection?.c2Desc, icon: Film },
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

            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
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

            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
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
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mt-4 sm:mt-6 md:mt-0 leading-relaxed">{t.twinsSection?.desc}</p>
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

                  <button
                    type="button"
                    onClick={toggleScanVideoMute}
                    aria-label={isScanVideoMuted ? "Unmute Video" : "Mute Video"}
                    className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-neutral-950/80 border border-amber-400/50 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 transition-all backdrop-blur-md shadow-lg cursor-pointer"
                  >
                    {isScanVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-3">{t.twinsSection?.identityTitle}</h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-8">{t.twinsSection?.identityDesc}</p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 gap-4 text-left">
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Facial Mesh
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">100% Geometry Verified</p>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Subsurface Scattering
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">Active Pore Layer</p>
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
            <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto">{t.transformation?.desc}</p>
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
                  alt="Traditional Raw Capture" 
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
          <p className="text-neutral-300 text-sm sm:text-base mb-8 sm:mb-10">{t.estimator?.desc}</p>

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
                        <strong className="text-amber-300 block mb-1">Calculation Assumptions:</strong>
                        Estimates are based on benchmark physical campaign costs including crew, multi-location studio rentals, equipment, travel, model licensing, and post-production scaling.
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 w-full py-3.5 sm:py-4 rounded-2xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer">
                Lock Investment Rate <ArrowRight className="w-4 h-4" />
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
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mt-4 sm:mt-6 md:mt-0 leading-relaxed">{t.insights?.desc}</p>
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
          <p className="text-neutral-300 text-sm sm:text-base mb-8 sm:mb-10">{t.briefSection?.desc}</p>
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
                  <button key={opt} onClick={() => setBriefSegment(opt)} className={`w-full text-left p-3 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefSegment === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection?.s3}</label>
              <div className="space-y-2">
                {["Parisian Palace Runway", "Futuristic Architectural Stage", "Exotic Desert Dunes"].map((opt) => (
                  <button key={opt} onClick={() => setBriefAtmosphere(opt)} className={`w-full text-left p-3 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefAtmosphere === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
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

      {/* Private Showroom */}
      <section id="showroom" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-neutral-950 via-amber-950/20 to-neutral-950 border border-amber-500/30 p-6 sm:p-10 md:p-16 rounded-3xl text-center backdrop-blur-md">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.showroomSection?.tag}</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-neutral-100 mt-2 mb-4">{t.showroomSection?.title}</h2>
          <p className="text-neutral-300 text-xs sm:text-sm max-w-xl mx-auto mb-8">{t.showroomSection?.desc}</p>
          <button onClick={() => setIsShowroomModalOpen(true)} className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(251,191,36,0.3)] cursor-pointer"><Key className="w-4 h-4" /> {t.showroomSection?.btn}</button>
          <p className="text-[10px] text-amber-300/90 uppercase font-mono mt-6">{t.showroomSection?.status}</p>
        </div>
      </section>

      {/* Portal */}
      <section id="portal" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto bg-neutral-900/30 border border-neutral-800 p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-sm text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6"><Lock className="w-6 h-6 sm:w-7 sm:h-7" /></div>
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.portal?.tag}</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-neutral-100 mt-2 mb-4">{t.portal?.title}</h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">{t.portal?.desc}</p>

          {vipStatus !== "success" ? (
            <form onSubmit={handleVipLogin} className="max-w-md mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="password" required value={vipPass} onChange={(e) => setVipPass(e.target.value)} placeholder={t.portal?.passPlaceholder} className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm text-neutral-100 outline-none" />
                <button type="submit" className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shrink-0 cursor-pointer">{t.portal?.loginBtn}</button>
              </div>
              {vipStatus === "error" && (<p className="text-xs text-red-400 font-semibold pt-2">{t.portal?.errorMsg}</p>)}
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 text-left">
              <div className="p-4 sm:p-6 rounded-2xl bg-amber-400/10 border border-amber-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-amber-300">{t.portal?.vaultTitle}</h4>
                  <p className="text-xs text-neutral-200 mt-1">{t.portal?.successMsg}</p>
                  <p className="text-[10px] sm:text-[11px] text-amber-300/90 mt-2 italic font-mono">{t.portal?.watermarkNotice}</p>
                </div>
                <button type="button" onClick={() => setVipStatus("idle")} className="text-xs font-bold text-neutral-300 hover:text-white underline shrink-0 cursor-pointer">Lock Vault</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[{ name: "Imperial Diamond 8K Master.exr", size: "1.4 GB", type: "RAW 3D Render" }, { name: "Haute Couture Runway 120fps.mov", size: "3.8 GB", type: "Master Video" }, { name: "Tourbillon Watch CAD & Shaders.zip", size: "850 MB", type: "Production Assets" }].map((file, i) => (
                  <div key={i} className="relative p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex items-center gap-2 text-amber-400 mb-3"><FileText className="w-5 h-5" /><span className="text-[10px] font-bold uppercase">{file.type}</span></div>
                      <h5 className="text-sm font-bold text-neutral-100 truncate mb-1">{file.name}</h5>
                      <p className="text-xs text-neutral-400">{file.size}</p>
                    </div>
                    <a href="#download" onClick={(e) => { e.preventDefault(); alert(`Downloading watermarked secure asset: ${file.name}`); }} className="mt-6 w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-amber-400 hover:text-neutral-950 text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 z-10"><Download className="w-4 h-4" /> {t.portal?.downloadAsset}</a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.contact?.tag}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.contact?.title}</h2>
            <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto">{t.contact?.desc}</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8 bg-neutral-900/30 border border-neutral-800 p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-sm">
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
            <div>
              <label htmlFor="service-select" className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact?.serviceLabel}</label>
              <select id="service-select" name="serviceSelect" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none cursor-pointer">
                <option value="sOpt1">{t.contact?.sOpt1}</option> <option value="sOpt2">{t.contact?.sOpt2}</option> <option value="sOpt3">{t.contact?.sOpt3}</option> <option value="sOpt4">{t.contact?.sOpt4}</option> <option value="sOpt5">{t.contact?.sOpt5}</option> <option value="sOpt6">{t.contact?.sOpt6}</option> <option value="sOpt7">{t.contact?.sOpt7}</option> <option value="sOpt8">{t.contact?.sOpt8}</option>
              </select>
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
              <textarea id="project-message" name="projectMessage" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t.contact?.messagePlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-neutral-100 outline-none resize-none" />
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
                <li><a href="#capabilities" className="hover:opacity-75 block">{t.nav?.capabilities}</a></li>
                <li><a href="#portfolio" className="hover:opacity-75 block">{t.footerSection?.works}</a></li>
                <li><a href="#system" className="hover:opacity-75 block">{t.nav?.system}</a></li>
                <li><a href="#studio" className="hover:opacity-75 block">{t.nav?.studio}</a></li>
                <li><a href="#transformation" className="hover:opacity-75 block">{t.nav?.transformation}</a></li>
                <li><a href="#estimator" className="hover:opacity-75 block">{t.nav?.roi}</a></li>
                <li><a href="#insights" className="hover:opacity-75 block">{t.nav?.journal}</a></li>
                <li><a href="#portal" className="hover:opacity-75 block">{t.nav?.portal}</a></li>
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
                <li><a href="mailto:info@aivienne.com" className="hover:opacity-75 block">Email: info@aivienne.com</a></li>
                <li><a href="https://instagram.com/ai.vienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 block">Instagram</a></li>
                <li><a href="https://linkedin.com/company/aivienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 block">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="py-8 sm:py-12 text-center md:text-left overflow-hidden">
            <h1 className="text-[12vw] sm:text-[11vw] leading-[0.9] font-black tracking-tighter text-neutral-950 select-none">AI.VIENNE Studio+</h1>
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