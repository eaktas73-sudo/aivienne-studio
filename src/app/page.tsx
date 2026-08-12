"use client";

import { useState, useEffect, useRef } from "react";
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
  Eye,
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
  Watch
} from "lucide-react";

// Types
type TranslationContent = Record<string, Record<string, string>>;

// Full Multi-language Translations Dictionary (12 Languages)
const TRANSLATIONS: Record<string, TranslationContent> = {
  EN: {
    nav: { portfolio: "Portfolio", avatar: "Digital Twins", brief: "Brief Architect", showroom: "Private Showroom", capabilities: "Capabilities", insights: "Insights & Journal", transformation: "Transformation", calculator: "Estimator & ROI", portal: "VIP Portal", contact: "Contact", cta: "GET IN TOUCH" },
    hero: { badge: "AI-Powered Luxury Content Agency", titleStart: "Elevating High Fashion & Fine Jewelry Through", titleGradient: "Artificial Intelligence", desc: "AI.VIENNE Studio+ crafts ultra-realistic, cinematic imagery and high-end visual productions tailored for luxury brands worldwide.", btnPrimary: "Explore Portfolio", btnSecondary: "Contact: info@aivienne.com" },
    manifesto: { sub: "OUR PHILOSOPHY", line1: "We do not adapt to trends.", line2: "WE ARCHITECT TIMELESS UNIVERSES." },
    capabilities: { tag: "Core Technical Mastery", title: "Enterprise Capabilities & Neural Pipeline", desc: "Engineered to deliver uncompromising quality, absolute confidentiality, and rapid time-to-market for global luxury houses.", cap1Title: "8K Neural Rendering", cap1Desc: "Custom-trained AI models outputting cinematic 8K resolutions with zero artifacting, suited for large-format print and digital billboards.", cap2Title: "Subsurface Skin Physics", cap2Desc: "Advanced biophysical shaders simulating realistic pores, melanin distribution, and light dispersion for true photorealistic digital models.", cap3Title: "Dynamic Caustics Lighting", cap3Desc: "Raytraced light refraction through diamonds, sapphire glass, and precious metals using spectral rendering techniques.", cap4Title: "Biometric Identity Mesh", cap4Desc: "Proprietary facial geometry preservation ensuring digital avatars retain 100% brand model identity across infinite scenes." },
    insights: { tag: "Brand Authority & SEO", title: "Haute Couture & Neural Insights", desc: "Deep dives into the intersection of artificial intelligence, luxury economics, and digital craftsmanship.", readMore: "Read Publication", article1Tag: "HAUTE COUTURE AI", article1Title: "The Economics of Digital Couture: Reducing Time-to-Market by 80%", article1Desc: "How leading luxury houses in Paris and Milan leverage neural rendering to bypass physical prototyping and accelerate global campaign rollouts.", article2Tag: "DIGITAL TWINS", article2Title: "Facial Geometry & Identity Preservation in Luxury AI Avatars", article2Desc: "A technical examination of biometric preservation techniques ensuring brand ambassadors maintain flawless continuity across campaigns.", article3Tag: "FINE JEWELRY", article3Title: "Spectral Raytracing: Simulating Diamond Dispersion in 8K Resolution", article3Desc: "Achieving physical material perfection in macro jewelry renders without expensive physical lighting setups and studio rentals." },
    portfolio: { tag: "Curated Showcase", title: "Bespoke Luxury Media Gallery", desc: "Hover over items to reveal interactive caustics lighting passes and high-end cinematic preview states.", filterAll: "All Works", filterJewelry: "High Jewelry", filterFashion: "Haute Couture", filterWatch: "Haute Horlogerie", filterEyewear: "Luxury Eyewear", filterPerfume: "Haute Parfumerie", filterVideo: "Cinematic Films", playVideo: "Watch Campaign Video" },
    transformation: { tag: "Neural Transformation", title: "Traditional Studio vs. AI.VIENNE 8K Master", desc: "Drag the interactive slider to experience how raw conventional photography is elevated into surreal neural luxury aesthetics.", beforeLabel: "Traditional Raw Capture", afterLabel: "AI.VIENNE 8K Master Render" },
    estimator: { tag: "Interactive Tool", title: "Bespoke Budget & Executive ROI Matrix", desc: "Configure your production scope and compare the capital efficiency against traditional physical shoots.", scaleLabel: "Production Tier / Scope", tier1: "Single High-End Asset (Macro Render / Still)", tier2: "Seasonal 8K Campaign Package (Multiple Assets)", tier3: "Full Cinematic Runway Film & Digital Twin Suite", deliveryLabel: "Delivery Speed", standard: "Standard Studio Timeline (10-14 Days)", express: "Priority Haute Couture Delivery (3-5 Days)", estInvestment: "Estimated Investment Scale:", roiTitle: "EXECUTIVE SAVINGS ANALYSIS", tradCost: "Est. Physical Shoot Cost:", timeSaved: "Time to Market Efficiency:", costSavings: "Capital Efficiency Savings:", range1: "$1,500 – $3,500", range2: "$5,000 – $12,000", range3: "$18,000 – $35,000+", trad1: "$25,000+", trad2: "$75,000+", trad3: "$180,000+" },
    twinsSection: { tag: "NEURAL AVATAR SUITE", title: "Digital Twin Showcase", desc: "Explore bespoke digital models engineered specifically to preserve strict facial geometry and brand aesthetics.", identityTitle: "Identity Preservation Protocol", identityDesc: "Every avatar maintains exact facial structure, proportions, and natural skin texture across all lighting setups." },
    briefSection: { tag: "INTERACTIVE CREATIVE STUDIO", title: "Brief Architect & Moodboard Builder", desc: "Configure your vision interactively before initiating project proposals.", s1: "1. Lighting Setup", s2: "2. Industry Segment", s3: "3. Setting & Atmosphere", applyBtn: "Apply To Proposal Brief", configLabel: "Current Brief Configuration:" },
    showroomSection: { tag: "INVITATION ONLY", title: "Private Showroom SS27", desc: "Exclusive unreleased collection previews available strictly under bilateral non-disclosure agreement.", btn: "Request VIP Invitation Key", status: "Access Restricted • NDA Required" },
    chatConsole: { title: "AI.VIENNE Executive Desk", sub: "B2B Direct Consultation & VIP Services", placeholder: "Type your inquiry or NDA request...", send: "Send Direct Desk Inquiry", welcome: "Welcome to AI.VIENNE Executive Desk. How may we assist your brand today?" },
    portal: { tag: "Client Portal", title: "VIP Vault & Secure Deliverables", desc: "Enter your assigned executive access credentials to securely review unreleased collection renders and 8K master files.", passPlaceholder: "Enter VIP Access Code (e.g. AIVIENNE-VIP)", loginBtn: "Access Secure Vault", errorMsg: "Invalid access credentials. Contact info@aivienne.com for executive clearance.", successMsg: "Access Granted: Welcome to AI.VIENNE Secure Client Vault.", vaultTitle: "Executive Secure Archive (Encrypted with Live Dynamic Watermark)", downloadAsset: "Download Master Asset", watermarkNotice: "Licensed Exclusively under NDA for AI.VIENNE Executive Partner." },
    contact: { tag: "Start Your Project", title: "Request a Bespoke Proposal", desc: "Partner with AI.VIENNE Studio+ to push the boundaries of luxury content creation.", namePlaceholder: "Your Name / Brand Name", emailPlaceholder: "Email Address", serviceLabel: "Select Desired Service", sOpt1: "Cinematic Fashion & Runway Video (8K)", sOpt2: "High Jewelry & Gemstone Campaign", sOpt3: "Haute Horlogerie & Timepiece Visuals", sOpt4: "Haute Parfumerie & Beauty Campaign", sOpt5: "Luxury Eyewear & Optics Production", sOpt6: "Bespoke Product & High-End Photography", sOpt7: "AI Brand Identity & Visual Strategy", sOpt8: "Full Digital Runway & Campaign Production", uploadTitle: "Upload Product Media & Attachments", uploadHint: "Drag and drop or tap to select Images, Videos, CAD, or Documents (PNG, JPG, MP4, MOV, PDF, ZIP)", messagePlaceholder: "Tell us about your project or collection...", submitBtn: "Send Project Brief", directEmail: "Direct Inquiry: info@aivienne.com" },
    footerSection: { navTitle: "01 / NAVIGATE", dirTitle: "02 / DIRECTORY", netTitle: "03 / NETWORK", studio: "The Studio", works: "Selected Works", initiate: "Initiate Contact", cities: "New York | London | Paris | Milan | Dubai | Vienna | Global", terms: "TERMS AND CONDITIONS", privacy: "PRIVACY POLICY" },
    modals: {
      termsTitle: "Terms & Conditions of Engagement",
      termsP1Title: "1. INTELLECTUAL PROPERTY & DELIVERABLES",
      termsP1Body: "Upon full settlement of project fees, all final 8K master renders, 3D assets, and generated media transition entirely to the Client with unrestricted commercial usage rights worldwide. AI.VIENNE Studio+ retains moral rights for portfolio demonstration under bilateral agreement unless restricted by a custom NDA.",
      termsP2Title: "2. CONFIDENTIALITY & PRE-RELEASE SECRECY",
      termsP2Body: "All client briefs, CAD files, unreleased fashion collection sketches, and proprietary brand assets remain under strict pre-launch bilateral Non-Disclosure Agreement (NDA) frameworks. Assets are handled within encrypted local sandboxes and isolated cloud environments.",
      termsP3Title: "3. PAYMENT & REVISION PROTOCOLS",
      termsP3Body: "Projects are initiated upon mutual agreement of scope and retainer receipt. Minor color-grading, light pass, and material shader adjustments are included within two revision cycles. Structural geometry changes after initial sign-off are billed as extended scope.",
      termsP4Title: "4. LIMITATION OF LIABILITY",
      termsP4Body: "AI.VIENNE Studio+ provides ultra-high resolution neural assets for marketing, editorial, and commercial applications. We guarantee 8K master resolution compliance and material physical realism as defined within accepted project briefs.",
      privacyTitle: "Confidentiality & Privacy Policy (GDPR / CCPA Compliance)",
      privacyP1Title: "1. CORPORATE DATA PRIVACY",
      privacyP1Body: "AI.VIENNE Studio+ collects minimal corporate and contact data strictly necessary for B2B communications, proposal formulation, and project delivery. Personal data is never sold, traded, or monetized.",
      privacyP2Title: "2. NO PUBLIC GENERATIVE MODEL TRAINING",
      privacyP2Body: "Zero client assets, proprietary CAD drawings, brand identity files, or custom digital twin facial scans are used to train, fine-tune, or refine public generative models. All neural weights created for client projects are kept isolated and encrypted.",
      privacyP3Title: "3. ENCRYPTED ASSET STORAGE & WATERMARKING",
      privacyP3Body: "Unreleased assets stored within our VIP Vault are protected using industry-standard encryption protocols. Deliverables undergoing client review feature dynamic watermarking until final project settlement.",
      privacyP4Title: "4. DATA RETENTION & DELETION RIGHTS",
      privacyP4Body: "Clients may request complete purge and permanent deletion of all local working files, temporary renders, and uploaded briefs from our servers at any time following project completion and handover."
    },
    footer: "© 2026 AI.VIENNE Studio+. All rights reserved."
  },
  TR: {
    nav: { portfolio: "Portfolyo", avatar: "Dijital İkizler", brief: "Brief Mimarisi", showroom: "Özel Showroom", capabilities: "Yetkinlikler", insights: "Makaleler & Dergi", transformation: "Dönüşüm", calculator: "Bütçe & ROI", portal: "VIP Portal", contact: "İletişim", cta: "İLETİŞİME GEÇ" },
    hero: { badge: "Yapay Zeka Destekli Lüks İçerik Ajansı", titleStart: "Yüksek Moda ve Mücevher Sanatında", titleGradient: "Yapay Zeka Dokunuşu", desc: "AI.VIENNE Studio+, global lüks markalar için sinematik kalitede ultra-gerçekçi görsel içerikler ve prodüksiyonlar üretir.", btnPrimary: "Çalışmaları İncele", btnSecondary: "İletişim: info@aivienne.com" },
    manifesto: { sub: "FELSEFEMİZ", line1: "Trendlere uyum sağlamıyoruz.", line2: "ZAMANSIZ EVRENLER İNŞA EDİYORUZ." },
    capabilities: { tag: "Temel Teknik Uzmanlık", title: "Kurumsal Yetkinlikler ve Neural Üretim Hattı", desc: "Global lüks markalar için tavizsiz kalite, tam gizlilik ve hızlı pazara sunuş süresi hedeflenerek geliştirilmiştir.", cap1Title: "8K Neural Rendering", cap1Desc: "Devasa baskı ve dijital panolar için bozulmasız, sinematik 8K çözünürlük üreten özel eğitilmiş AI modelleri.", cap2Title: "Cilt Altı Işık Saçılımı", cap2Desc: "Gerçekçi gözenek, melanin dağılımı ve ışık kırılımını simüle eden gelişmiş biyofiziksel şaderler.", cap3Title: "Dinamik Caustics Işıklandırma", cap3Desc: "Elmas, safir cam ve değerli metallerde tayf ışık kırılmasını hesaplayan spektral render teknikleri.", cap4Title: "Biyometrik Kimlik Koruma", cap4Desc: "Dijital modellerin yüz geometrisini %100 oranında koruyarak sahneler arası marka sürekliliği sağlayan altyapı." },
    insights: { tag: "Marka Otoritesi & SEO", title: "Haute Couture & Yapay Zeka Makaleleri", desc: "Yapay zeka, lüks ekonomi ve dijital zanaatkarlığın kesişim noktasına derinlemesine bakış.", readMore: "Yayını Oku", article1Tag: "HAUTE COUTURE AI", article1Title: "Dijital Couture Ekonomisi: Pazara Çıkış Süresini %80 Azaltmak", article1Desc: "Paris ve Milano'nun önde gelen lüks markalarının fiziksel prototipleri aşarak global kampanyaları hızlandırma stratejileri.", article2Tag: "DİJİTAL İKİZLER", article2Title: "Lüks AI Avatarlarında Yüz Geometrisi ve Kimlik Koruma", article2Desc: "Marka yüzlerinin kampanyalar boyunca kusursuz süreklilik sağlamasını garanti eden teknik inceleme.", article3Tag: "LÜKS MÜCEVHER", article3Title: "Spektral Raytracing: 8K Çözünürlükte Elmas Işık Kırılımı Simülasyonu", article3Desc: "Yüksek maliyetli stüdyo ve ışık kurulumları olmadan makro mücevher renderlarında fiziksel mükemmellik." },
    portfolio: { tag: "Seçkin Koleksiyonlar", title: "Özel Lüks Medya Galerisi", desc: "İnteraktif ışık kırılması (caustics) ve sinematik önizleme efektleriyle zenginleştirilmiş 8K galeri.", filterAll: "Tüm Çalışmalar", filterJewelry: "Lüks Mücevherat", filterFashion: "Haute Couture", filterWatch: "Saat & Saatçilik", filterEyewear: "Gözlük", filterPerfume: "Parfüm", filterVideo: "Sinematik Filmler", playVideo: "Kampanya Videosunu İzle" },
    transformation: { tag: "Neural Dönüşüm", title: "Geleneksel Stüdyo vs. AI.VIENNE 8K Master", desc: "Ham geleneksel fotoğrafın üst düzey yapay zeka estetiğine dönüşümünü inceleyin.", beforeLabel: "Geleneksel Ham Çekim", afterLabel: "AI.VIENNE 8K Master Render" },
    estimator: { tag: "İnteraktif Araç", title: "Özel Bütçe & Yönetici ROI Analizi", desc: "Prodüksiyon kapsamınızı belirleyin ve geleneksel fiziksel çekimlere kıyasla sermaye verimliliğini canlı olarak görün.", scaleLabel: "Prodüksiyon Seviyesi / Kapsamı", tier1: "Tekli Üst Segment Varlık (Makro Render / Fotoğraf)", tier2: "Sezonluk 8K Kampanya Paketi (Çoklu İçerik)", tier3: "Tam Sinematik Podyum Filmi & Dijital İkiz Paketi", deliveryLabel: "Teslimat Hızı", standard: "Standart Stüdyo Takvimi (10-14 Gün)", express: "Öncelikli Haute Couture Teslimatı (3-5 Gün)", estInvestment: "Tahmini Yatırım Ölçeği:", roiTitle: "YÖNETİCİ TASARRUF ANALİZİ", tradCost: "Tahmini Fiziksel Çekim Bütçesi:", timeSaved: "Pazara Çıkış Hız Avantajı:", costSavings: "Sermaye Verimliliği Tasarrufu:", range1: "$1,500 – $3,500", range2: "$5,000 – $12,000", range3: "$18,000 – $35,000+", trad1: "$25,000+", trad2: "$75,000+", trad3: "$180,000+" },
    twinsSection: { tag: "NEURAL AVATAR SUITE", title: "Dijital İkiz Vitrini", desc: "Yüz geometrisini ve marka estetiğini hassasiyetle koruyan özel dijital modeller.", identityTitle: "Kimlik Koruma Protokolü", identityDesc: "Her avatar tüm ışık kurulumlarında kusursuz yüz yapısını ve cilt dokusunu korur." },
    briefSection: { tag: "İNTERAKTİF KREATİF STÜDYO", title: "Brief Mimarı & Moodboard Oluşturucu", desc: "Proje teklifi oluşturmadan önce vizyonunuzu interaktif olarak yapılandırın.", s1: "1. Işık Kurgusu", s2: "2. Sektörel Segment", s3: "3. Atmosfer & Mekan", applyBtn: "Teklif Brief'ine Uygula", configLabel: "Mevcut Konfigürasyon:" },
    showroomSection: { tag: "ÖZEL DAVETİYE İLE", title: "Özel Showroom SS27", desc: "Henüz yayınlanmamış koleksiyon önizlemeleri ikili gizlilik sözleşmesi (NDA) kapsamında sunulur.", btn: "VIP Davetiye Kodu İsteyin", status: "Erişim Kısıtlı • NDA Gereklidir" },
    chatConsole: { title: "AI.VIENNE Yönetici Masası", sub: "B2B Doğrudan Danışmanlık & VIP Hizmetler", placeholder: "Mesajınızı veya NDA talebinizi yazın...", send: "Yönetime İlet", welcome: "AI.VIENNE Yönetici Masasına Hoş Geldiniz. Markanıza nasıl yardımcı olabiliriz?" },
    portal: { tag: "Müşteri Portalı", title: "VIP Kasa ve Güvenli Teslimat", desc: "Yayınlanmamış koleksiyon renderlarını incelemek için VIP kodunuzu girin.", passPlaceholder: "VIP Erişim Kodu (örn. AIVIENNE-VIP)", loginBtn: "Kasaya Giriş Yap", errorMsg: "Geçersiz kimlik bilgisi.", successMsg: "Erişim Onaylandı: Hoş Geldiniz.", vaultTitle: "Yönetici Güvenli Arşivi", downloadAsset: "Master Dosyayı İndir", watermarkNotice: "AI.VIENNE NDA Lisanslıdır." },
    contact: { tag: "Projenizi Başlatın", title: "Özel Proje Teklifi Alın", desc: "Koleksiyonlarınızı geleceğin kreatif standartlarına taşıyın.", namePlaceholder: "Adınız / Marka Adı", emailPlaceholder: "E-Posta Adresiniz", serviceLabel: "Hizmet Seçin", sOpt1: "Sinematik Moda Videosu (8K)", sOpt2: "Lüks Mücevher Kampanyası", sOpt3: "Saat Prodüksiyonu", sOpt4: "Lüks Parfüm Kampanyası", sOpt5: "Lüks Gözlük Prodüksiyonu", sOpt6: "Özel Ürün Fotoğrafçılığı", sOpt7: "AI Marka Kimliği", sOpt8: "Tam Dijital Podyum", uploadTitle: "Dosya Yükleyin", uploadHint: "Görsel, Video veya CAD Sürükleyin (PNG, JPG, MP4, PDF, ZIP)", messagePlaceholder: "Projeniz hakkında bilgi verin...", submitBtn: "Brief'i Gönder", directEmail: "Doğrudan E-Posta: info@aivienne.com" },
    footerSection: { navTitle: "01 / NAVİGASYON", dirTitle: "02 / DİREKTÖRİK", netTitle: "03 / AĞLARIMIZ", studio: "Stüdyomuz", works: "Seçkin Çalışmalar", initiate: "İletişime Geçin", cities: "New York | Londra | Paris | Milano | Dubai | Viyana | Global", terms: "KULLANIM ŞARTLARI", privacy: "GİZLİLİK POLİTİKASI" },
    modals: {
      termsTitle: "Hizmet ve Kullanım Şartları Sözleşmesi",
      termsP1Title: "1. FİKRİ MÜLKİYET VE TESLİMAT HAKLARI",
      termsP1Body: "Proje ödemelerinin tamamlanmasının ardından üretilen tüm 8K master görsel ve videolar, 3D varlıklar ve dijital materyaller tüm dünyada sınırsız ticari kullanım haklarıyla Müşteriye devredilir. İkili gizlilik sözleşmesinde (NDA) aksine bir hüküm bulunmadıkça, AI.VIENNE Studio+ eserleri portfolyo amacıyla sergileme moral hakkını saklı tutar.",
      termsP2Title: "2. GİZLİLİK VE YAYIN ÖNCESİ KORUMA",
      termsP2Body: "Müşteri tarafından iletilen tüm brief'ler, CAD tasarımları, henüz yayınlanmamış koleksiyon çizimleri ve marka varlıkları ikili Gizlilik Sözleşmesi (NDA) altında korunur. Tüm veriler izole, şifrelenmiş sunucu ortamlarında ve güvenli çalışma alanlarında işlenir.",
      termsP3Title: "3. ÖDEME VE REVİZYON PROTOKOLLERİ",
      termsP3Body: "Projeler karşılıklı kapsam onayı ve avans ödemesiyle başlatılır. Renk düzenlemesi, ışık açısı ve materyal dokusundaki küçük ayarlamalar 2 revizyon döngüsü dahilinde ücretsiz yapılır. İlk onay sonrasındaki köklü geometri değişikliği talepleri ek kapsama tabidir.",
      termsP4Title: "4. SORUMLULUK SINIRLANDIRMASI",
      termsP4Body: "AI.VIENNE Studio+, pazarlama, editoryal ve reklam yayınlarına uygun ultra yüksek çözünürlüklü yapay zeka içerikleri sunar. Onaylanan brief doğrultusunda 8K master çözünürlük standartları ve fiziksel materyal gerçekçiliği garanti edilir.",
      privacyTitle: "Gizlilik ve Veri Koruma Politikası (KVKK / GDPR)",
      privacyP1Title: "1. KURUMSAL VERİ GİZLİLİĞİ",
      privacyP1Body: "AI.VIENNE Studio+, yalnızca kurumsal iletişim, teklif hazırlama ve teslimat süreçleri için gerekli olan minimum düzeydeki iletişim bilgilerini işler. Verileriniz hiçbir şekilde üçüncü taraflara satılmaz veya ticari amaçla paylaşılamaz.",
      privacyP2Title: "2. HALKA AÇIK YAPAY ZEKA MODELLERİNE EĞİTİM VERİLMEZ",
      privacyP2Body: "Müşterilerimize ait hiçbir ürün görseli, CAD dosyası, tasarım taslağı veya dijital ikiz biometrik verisi halka açık yapay zeka modellerini eğitmek veya geliştirmek amacıyla kullanılmaz. Projeler tamamen izole model ağırlıklarıyla yürütülür.",
      privacyP3Title: "3. ŞİFRELİ VERİ DEPOLAMA VE DİNAMİK FLİGRAN",
      privacyP3Body: "VIP Kasa alanımızda sergilenen veya müşteri onayına sunulan henüz yayınlanmamış materyaller üst düzey şedeleme standartlarıyla korunur. Onay aşamasındaki içerikler dinamik fligran koruması altında sunulur.",
      privacyP4Title: "4. VERİ SİLME VE UNUTULMA HAKKI",
      privacyP4Body: "Müşterilerimiz proje teslimatı tamamlandıktan sonra diledikleri zaman sunucularımızda ve yerel çalışma alanlarımızda kalan tüm taslak dosyaların ve yüklenen belgelerin kalıcı olarak silinmesini talep edebilir."
    },
    footer: "© 2026 AI.VIENNE Studio+. Tüm hakları saklıdır."
  },
  AR: {
    nav: { portfolio: "معرض الأعمال", avatar: "التوأم الرقمي", brief: "مهندس المفهوم", showroom: "صالة العرض الخاصة", capabilities: "القدرات", insights: "الرؤى والمجلة", transformation: "التحول", calculator: "التكلفة والعائد", portal: "بوابة VIP", contact: "التواصل", cta: "تواصل معنا" },
    hero: { badge: "وكالة المحتوى الفاخر المعتمدة على الذكاء الاصطناعي", titleStart: "الارتقاء بالأزياء الراقية والمجوهرات الفاخرة عبر", titleGradient: "الذكاء الاصطناعي", desc: "تقوم AI.VIENNE Studio+ بابتكار صور سينمائية فائقة الواقعية وإشعاعات بصرية عالية المستوى مخصصة للعلامات التجارية الفاخرة.", btnPrimary: "استكشف معرض الأعمال", btnSecondary: "تواصل: info@aivienne.com" },
    manifesto: { sub: "فلسفتنا", line1: "نحن لا نتبع الصيحات.", line2: "نحن نبني عوالم خالدة." },
    capabilities: { tag: "الخبرة التقنية", title: "القدرات المؤسسية والإنتاج العصبي", desc: "مصممة لتقديم جودة فائقة وسرعة إنتاج استثنائية لعلامات الفخامة العالمية.", cap1Title: "رندر عصبي 8K", cap1Desc: "نماذج ذكاء اصطناعي مخصصة بدقة 8K للطباعة الضخمة والشاشات الرقمية.", cap2Title: "فيزياء البشرة المتقدمة", cap2Desc: "مظللات بيوفيزيائية محاكاة للمسام والتشتت الضوئي بدقة فائقة.", cap3Title: "إضاءة Caustics الديناميكية", cap3Desc: "انكسار ضوئي طيفي عبر الألماس والزجاج Safir والفلزات الثمينة.", cap4Title: "شبكة الهوية البيومترية", cap4Desc: "حفظ هندسية الوجه بنسبة 100% لاستمرارية النموذج عبر جميع المشاهد." },
    insights: { tag: "سلطة العلامة التجارية", title: "رؤى الأزياء الراقية والذكاء الاصطناعي", desc: "تحليلات عميقة في تقاطع الذكاء الاصطناعي واقتصاد الفخامة.", readMore: "اقرأ المقال", article1Tag: "أزياء راقية", article1Title: "اقتصاديات الأزياء الرقمية: تقليل وقت السوق بنسبة 80%", article1Desc: "كيف تستفيد دور الأزياء الفاخرة في باريس وميلانو من الرندر العصبي وتسريع الحملات.", article2Tag: "التوأم الرقمي", article2Title: "هندسة الوجه وحفظ الهوية في نماذج AI الفاخرة", article2Desc: "فحص تقني لبروتوكولات الحفاظ البيومتري لضمان استمرارية النموذج.", article3Tag: "مجوهرات فاخرة", article3Title: "محاكاة انكسار الألماس بدقة 8K", article3Desc: "تحقيق الكمال المادي في تصوير المجوهرات بدون تكاليف الاستوديو المرتفعة." },
    portfolio: { tag: "معرض تفاعلي", title: "معرض الوسائط والفيديوهات التفاعلي", desc: "معرض 8K مع تأثيرات تفاعلية لانعكاس الضوء والمعاينات السينمائية.", filterAll: "جميع الأعمال", filterJewelry: "مجوهرات فاخرة", filterFashion: "أزياء راقية", filterWatch: "ساعات فاخرة", filterEyewear: "نظارات فاخرة", filterPerfume: "عطور فاخرة", filterVideo: "فيديوهات الحملات", playVideo: "شاهد فيديو الحملة" },
    transformation: { tag: "التحول العصبي", title: "التصوير التقليدي مقابل AI.VIENNE 8K", desc: "اسحب الشريط للتفاعل ومشاهدة كيف يتحول التصوير التقليدي إلى جماليات فخمة.", beforeLabel: "التصوير التقليدي الخام", afterLabel: "إخراج AI.VIENNE بدقة 8K" },
    estimator: { tag: "أداة تفاعلية", title: "حاسبة الميزانية وعائد الاستثمار", desc: "قم بتكوين متطلبات الإنتاج الفاخر الخاصة بك لحساب نطاق الاستثمار المقدر.", scaleLabel: "مستوى الإنتاج", tier1: "أصل واحد عالي المستوى", tier2: "حملة موسمية 8K", tier3: "عرض سينمائي وتوأم رقمي كامل", deliveryLabel: "سرعة التسليم", standard: "الجدول القياسي (10-14 يوم)", express: "تسليم سريع (3-5 أيام)", estInvestment: "نطاق الاستثمار المقدر:", roiTitle: "تحليل التوفير التنفيذي", tradCost: "تكلفة التصوير المادي:", timeSaved: "سرعة الطرح في السوق:", costSavings: "توفير رأس المال:", range1: "$1,500 – $3,500", range2: "$5,000 – $12,000", range3: "$18,000 – $35,000+", trad1: "$25,000+", trad2: "$75,000+", trad3: "$180,000+" },
    twinsSection: { tag: "مجموعة النماذج العصبية", title: "معرض التوأم الرقمي", desc: "نماذج رقمية مخصصة مصممة خصيصًا للحفاظ على هُوية العلامة التجارية.", identityTitle: "بروتوكول الحفاظ على الهوية", identityDesc: "يحافظ كل نموذج على بنية الوجه ونسبه بدقة عالية." },
    briefSection: { tag: "استوديو الإبداع التفاعلي", title: "مهندس المفهوم ولوحة الأفكار", desc: "قم بإعداد رؤيتك بشكل تفاعلي قبل بدء مقترحات المشروع.", s1: "1. إعدادات الإضاءة", s2: "2. قطاع الصناعة", s3: "3. البيئة والموقع", applyBtn: "تطبيق على موجز المقترح", configLabel: "التكوين الحالي:" },
    showroomSection: { tag: "دعوة خاصة فقط", title: "صالة العرض الخاصة SS27", desc: "معاينات الحصرية للمجموعات غير المعلنة المتاحة حصريًا بموجب اتفاقية NDA.", btn: "طلب مفتاح دعوة VIP", status: "الوصول مقيد • اتفاقية NDA مطلوبة" },
    chatConsole: { title: "مكتب إدارة AI.VIENNE", sub: "استشارات B2B مباشرة وخدمات VIP", placeholder: "اكتب استفسارك أو طلب اتفاقية NDA...", send: "إرسال مباشر للإنتاج", welcome: "مرحبًا بك في مكتب إدارة AI.VIENNE. كيف يمكننا خدمة علامتكم التجارية اليوم؟" },
    portal: { tag: "بوابة العملاء", title: "خزنة VIP والتسليم الآمن", desc: "أدخل بيانات اعتماد الوصول التنفيذي لمراجعة رندرات المجموعات بأمان.", passPlaceholder: "رمز الوصول (مثل AIVIENNE-VIP)", loginBtn: "الوصول إلى الخزنة الآمنة", errorMsg: "بيانات غير صالحة.", successMsg: "تم منح حق الوصول.", vaultTitle: "الأرشيف التنفيذي الآمن", downloadAsset: "تنزيل الأصل الرئيسي", watermarkNotice: "مرخصة حصرياً بموجب اتفاقية NDA." },
    contact: { tag: "ابدأ مشروعك", title: "اطلب عرض سعر مخصص", desc: "تعاون مع AI.VIENNE Studio+ لتجاوز حدود إبداع المحتوى الفاخر.", namePlaceholder: "اسمك / اسم العلامة التجارية", emailPlaceholder: "البريد الإلكتروني", serviceLabel: "حدد الخدمة المطلوبة", sOpt1: "فيديو أزياء سينمائي (8K)", sOpt2: "حملات المجوهرات الفاخرة", sOpt3: "إنتاج الساعات الفاخرة", sOpt4: "حملات العطور الفاخرة", sOpt5: "إنتاج النظارات الفاخرة", sOpt6: "تصوير المنتجات المخصص", sOpt7: "استراتيجية العلامة التجارية", sOpt8: "عرض أزياء رقمي كامل", uploadTitle: "تحميل الملفات", uploadHint: "قم بسحب وإفلات الصور أو الفيديوهات أو الملفات (PNG, JPG, MP4, PDF, ZIP)", messagePlaceholder: "حدثنا عن مشروعك...", submitBtn: "إرسال تفاصيل المشروع", directEmail: "البريد المباشر: info@aivienne.com" },
    footerSection: { navTitle: "01 / التنقل", dirTitle: "02 / الدليل", netTitle: "03 / الشبكات", studio: "الاستوديو", works: "أعمال مختارة", initiate: "ابدأ التواصل", cities: "نيويورك | لندن | باريس | ميلانو | دبي | فيينا | عالمي", terms: "الشروط والأحكام", privacy: "سياسة الخصوصية" },
    modals: {
      termsTitle: "الشروط والأحكام الخاصة بالتشارك",
      termsP1Title: "1. الملكية الفكرية والتسليمات",
      termsP1Body: "عند سداد رسوم المشروع بالكامل، تنتقل جميع حقوق الملكية والتصاميم ثلاثية الأبعاد والملفات بدقة 8K بالكامل إلى العميل لاستخدامها تجاريًا في جميع أنحاء العالم.",
      termsP2Title: "2. السرية وحماية ما قبل الطرح",
      termsP2Body: "تخضع كافة المخططات ومستندات CAD ومجموعات الأزياء غير المعلنة لاتفاقيات عدم إفشاء سرية (NDA) ثنائية صارمة.",
      termsP3Title: "3. بروتوكولات الدفع والتعديل",
      termsP3Body: "يتم بدء العمل فور الاتفاق على النطاق واستلام الدفعة المقدمة. تتضمن الدورة تعديلين مجانيين للإضاءة والألوان.",
      termsP4Title: "4. حدود المسؤولية",
      termsP4Body: "يضمن استوديو AI.VIENNE مطابقة أعلى معايير الجودة بدقة 8K مع الواقعية المادية المطلوبة.",
      privacyTitle: "سياسة الخصوصية وحماية البيانات",
      privacyP1Title: "1. خصوصية بيانات الشركات",
      privacyP1Body: "نحن نجمع الحد الأدنى من بيانات الاتصال الضرورية فقط للتواصل والتسليم التجاري B2B.",
      privacyP2Title: "2. عدم تدريب نماذج الذكاء الاصطناعي العامة",
      privacyP2Body: "لا يتم استخدام أصول العملاء أو التصاميم الخاصة إطلاقًا لتدريب النماذج العامة.",
      privacyP3Title: "3. التشفير والعلامات المائية",
      privacyP3Body: "يتم حماية الملفات غير المعلنة عبر خزنتنا المشفرة وتكون محمية بعلامات مائية ديناميكية.",
      privacyP4Title: "4. حقوق الحذف الكامل",
      privacyP4Body: "يحق للعميل طلب مسح وحذف كافة الملفات من خوادمنا فور الانتهاء من التسليم."
    },
    footer: "© 2026 AI.VIENNE Studio+. جميع الحقوق محفوظة."
  },
  FR: {
    nav: { portfolio: "Portfolio", avatar: "Jumeaux Numériques", brief: "Architecte de Brief", showroom: "Showroom Privé", capabilities: "Compétences", insights: "Articles & Journal", transformation: "Transformation", calculator: "Estimateur & ROI", portal: "Portail VIP", contact: "Contact", cta: "CONTACTEZ-NOUS" },
    hero: { badge: "Agence de Contenu de Luxe Propulsée par l'IA", titleStart: "Sublimer la Haute Couture & la Joaillerie Par", titleGradient: "L'Intelligence Artificielle", desc: "AI.VIENNE Studio+ crée des visuels cinématographiques ultra-réalistes et des productions haut de gamme pour les marques de luxe mondiales.", btnPrimary: "Explorer le Portfolio", btnSecondary: "Contact: info@aivienne.com" },
    manifesto: { sub: "NOTRE PHILOSOPHIE", line1: "Nous ne nous adaptons pas aux tendances.", line2: "NOUS ARCHITECTURONS DES UNIVERS INTEMPORELS." },
    capabilities: { tag: "Maîtrise Technique", title: "Capacités d'Entreprise & Pipeline Neural", desc: "Conçu pour offrir une qualité sans compromis et un déploiement rapide pour les maisons de luxe.", cap1Title: "Rendu Neural 8K", cap1Desc: "Modèles d'IA personnalisés produisant des résolutions 8K pour l'impression grand format et l'affichage numérique.", cap2Title: "Physique Cutanée Subsurfacique", cap2Desc: "Shaders biophysiques simulant la porosité naturelle et la dispersion de la lumière.", cap3Title: "Éclairage Caustique Dynamique", cap3Desc: "Réfraction de la lumière à travers les diamants et les verres saphir.", cap4Title: "Maillage Biamétrique d'Identité", cap4Desc: "Préservation de la géométrie faciale garantissant la continuité absolue du modèle de marque." },
    insights: { tag: "Autorité de Marque & SEO", title: "Haute Couture & Perspectives Neuronales", desc: "Analyse approfondie à l'intersection de l'intelligence artificielle et de l'économie du luxe.", readMore: "Lire la Publication", article1Tag: "HAUTE COUTURE AI", article1Title: "L'Économie de la Couture Numérique: Réduire le Time-to-Market de 80%", article1Desc: "Comment les maisons de luxe à Paris et Milan utilisent le rendu neural pour accélérer les campagnes.", article2Tag: "JUMEAUX NUMÉRIQUES", article2Title: "Géométrie Faciale et Préservation de l'Identité dans les Avatars IA", article2Desc: "Examen technique des méthodes de préservation biométrique.", article3Tag: "HAUTE JOAILLERIE", article3Title: "Raytracing Spectral: Simulation de la Dispersion du Diamant en 8K", article3Desc: "Atteindre la perfection matérielle sans coûts de studio physiques." },
    portfolio: { tag: "Galerie Sélectionnée", title: "Galerie Média de Luxe Sur Mesure", desc: "Survolez les éléments pour révéler les passes d'éclairage caustique interactives.", filterAll: "Toutes les Œuvres", filterJewelry: "Haute Joaillerie", filterFashion: "Haute Couture", filterWatch: "Haute Horlogerie", filterEyewear: "Lunettes de Luxe", filterPerfume: "Haute Parfumerie", filterVideo: "Films Cinématographiques", playVideo: "Voir le Film de Campagne" },
    transformation: { tag: "Transformation Neuronal", title: "Studio Traditionnel vs AI.VIENNE 8K Master", desc: "Faites glisser le curseur pour observer la métamorphose de la photographie brute.", beforeLabel: "Capture Brute Traditionnelle", afterLabel: "Rendu Master 8K AI.VIENNE" },
    estimator: { tag: "Outil Interactif", title: "Budget Sur Mesure & Matrice de ROI", desc: "Configurez l'étendue de votre production et comparez l'efficacité du capital.", scaleLabel: "Échelle de Production", tier1: "Rendu Macro Unique / Image Fixe", tier2: "Package Campagne Saisonnière 8K", tier3: "Film de Défilé Cinématographique & Suite Jumeau Numérique", deliveryLabel: "Vitesse de Livraison", standard: "Délai Studio Standard (10-14 Jours)", express: "Livraison Haute Couture Prioritaire (3-5 Jours)", estInvestment: "Échelle d'Investissement Estimée:", roiTitle: "ANALYSE D'ÉCONOMIE EXÉCUTIVE", tradCost: "Coût Estimé du Tournage Physique:", timeSaved: "Efficacité de Mise sur le Marché:", costSavings: "Économies d'Efficacité du Capital:", range1: "1 500 € – 3 500 €", range2: "5 000 € – 12 000 €", range3: "18 000 € – 35 000 €+", trad1: "25 000 €+", trad2: "75 000 €+", trad3: "180 000 €+" },
    twinsSection: { tag: "SUITE AVATAR NEURAL", title: "Vitrine des Jumeaux Numériques", desc: "Modèles numériques sur mesure conçus pour préserver la géométrie faciale.", identityTitle: "Protocole de Préservation d'Identité", identityDesc: "Chaque avatar conserve la structure faciale exacte dans toutes les configurations d'éclairage." },
    briefSection: { tag: "STUDIO CRÉATIF INTERACTIF", title: "Architecte de Brief & Moodboard", desc: "Configurez votre vision de manière interactive avant de soumettre la proposition.", s1: "1. Configuration d'Éclairage", s2: "2. Secteur d'Activité", s3: "3. Ambiance & Décor", applyBtn: "Appliquer au Brief", configLabel: "Configuration Actuelle:" },
    showroomSection: { tag: "SUR INVITATION UNIQUEMENT", title: "Showroom Privé SS27", desc: "Aperçus exclusifs de collections non publiées sous accord de confidentialité bilatéral.", btn: "Demander une Clé VIP", status: "Accès Restreint • NDA Requis" },
    chatConsole: { title: "Bureau Exécutif AI.VIENNE", sub: "Consultation Directe B2B & Services VIP", placeholder: "Saisissez votre demande ou requête NDA...", send: "Envoyer la Demande", welcome: "Bienvenue au Bureau Exécutif AI.VIENNE. Comment pouvons-nous vous assister aujourd'hui ?" },
    portal: { tag: "Portail Client", title: "Coffre VIP & Livrables Sécurisés", desc: "Entrez vos identifiants pour examiner en toute sécurité vos fichiers masters 8K.", passPlaceholder: "Code d'Accès VIP (ex. AIVIENNE-VIP)", loginBtn: "Accéder au Coffre Fort", errorMsg: "Identifiants invalides.", successMsg: "Accès Accordé: Bienvenue.", vaultTitle: "Archives Sécurisées Exécutives", downloadAsset: "Télécharger le Fichier Master", watermarkNotice: "Sous Licence Exclusive NDA pour Partenaire Exécutif AI.VIENNE." },
    contact: { tag: "Démarrer Votre Projet", title: "Demander une Proposition Sur Mesure", desc: "Associez-vous à AI.VIENNE Studio+ pour repousser les limites du contenu de luxe.", namePlaceholder: "Votre Nom / Nom de Marque", emailPlaceholder: "Adresse E-mail", serviceLabel: "Sélectionnez le Service", sOpt1: "Vidéo Mode Cinématographique (8K)", sOpt2: "Campagne Haute Joaillerie", sOpt3: "Visualisation Haute Horlogerie", sOpt4: "Campagne Haute Parfumerie", sOpt5: "Production Lunettes de Luxe", sOpt6: "Photographie Produit Sur Mesure", sOpt7: "Identité de Marque IA", sOpt8: "Production Défilé Numérique Complet", uploadTitle: "Télécharger des Médias", uploadHint: "Glissez-déposez des images, vidéos ou fichiers CAD (PNG, JPG, MP4, PDF, ZIP)", messagePlaceholder: "Parlez-nous de votre projet...", submitBtn: "Envoyer le Brief", directEmail: "Contact Direct: info@aivienne.com" },
    footerSection: { navTitle: "01 / NAVIGATION", dirTitle: "02 / ANNUAIRE", netTitle: "03 / RÉSEAUX", studio: "Le Studio", works: "Œuvres Sélectionnées", initiate: "Initier le Contact", cities: "New York | Londres | Paris | Milan | Dubaï | Vienne | Global", terms: "CONDITIONS GÉNÉRALES", privacy: "POLITIQUE DE CONFIDENTIALITÉ" },
    modals: {
      termsTitle: "Conditions Générales d'Engagement",
      termsP1Title: "1. PROPRIÉTÉ INTELLECTUELLE ET LIVRABLES",
      termsP1Body: "Après règlement complet des honoraires, tous les rendus masters 8K et actifs 3D sont transférés au Client avec des droits d'utilisation commerciale mondiaux illimités.",
      termsP2Title: "2. CONFIDENTIALITÉ ET SECRET PRÉ-LANCEMENT",
      termsP2Body: "Les briefs clients et esquisses de collections restent sous accord de confidentialité bilatéral (NDA) strict.",
      termsP3Title: "3. PROTOCOLES DE PAIEMENT ET RÉVISION",
      termsP3Body: "Ajustements mineurs inclus dans 2 cycles de révision. Les modifications majeures font l'objet d'un avenant.",
      termsP4Title: "4. LIMITATION DE RESPONSABILITÉ",
      termsP4Body: "AI.VIENNE Studio+ garantit la conformité de résolution 8K et le réalisme physique matériel selon le brief validé.",
      privacyTitle: "Politique de Confidentialité et Protection des Données (RGPD)",
      privacyP1Title: "1. CONFIDENTIALITÉ DES DONNÉES D'ENTREPRISE",
      privacyP1Body: "Collecte minimale de données B2B strictly nécessaires. Aucune vente ou transmission commerciale.",
      privacyP2Title: "2. AUCUN ENTRAÎNEMENT DE MODÈLES PUBLICS",
      privacyP2Body: "Aucun actif client ou scan facial n'est utilisé pour entraîner des modèles IA génératifs publics.",
      privacyP3Title: "3. STOCKAGE SÉCURISÉ ET FILIGRANE DYNAMIQUE",
      privacyP3Body: "Protégé par des protocoles de chiffrement avancés et filigranage dynamique lors des phases de validation.",
      privacyP4Title: "4. DROIT DE SUPPRESSION COMPLÈTE",
      privacyP4Body: "Demande de suppression définitive des fichiers de travail sur simple requête après livraison du projet."
    },
    footer: "© 2026 AI.VIENNE Studio+. Tous droits réservés."
  }
};

const getLangData = (code: string): Record<string, Record<string, string>> => {
  if (TRANSLATIONS[code] && TRANSLATIONS[code].nav) {
    return TRANSLATIONS[code];
  }
  return TRANSLATIONS.EN;
};

const LANGUAGES = [
  { code: "EN", name: "English", dir: "ltr", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "TR", name: "Türkçe", dir: "ltr", flag: "https://flagcdn.com/w40/tr.png" },
  { code: "AR", name: "العربية", dir: "rtl", flag: "https://flagcdn.com/w40/ae.png" },
  { code: "FR", name: "Français", dir: "ltr", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "IT", name: "Italiano", dir: "ltr", flag: "https://flagcdn.com/w40/it.png" },
  { code: "DE", name: "Deutsch", dir: "ltr", flag: "https://flagcdn.com/w40/de.png" },
  { code: "PT", name: "Português", dir: "ltr", flag: "https://flagcdn.com/w40/pt.png" },
  { code: "ES", name: "Español", dir: "ltr", flag: "https://flagcdn.com/w40/es.png" },
  { code: "ZH", name: "中文", dir: "ltr", flag: "https://flagcdn.com/w40/cn.png" },
  { code: "JA", name: "日本語", dir: "ltr", flag: "https://flagcdn.com/w40/jp.png" },
  { code: "KO", name: "한국어", dir: "ltr", flag: "https://flagcdn.com/w40/kr.png" },
  { code: "HI", name: "हिन्दी", dir: "ltr", flag: "https://flagcdn.com/w40/in.png" }
];

const PORTFOLIO_ITEMS = [
  { id: "1", title: "Imperial Diamond Showcase 8K", category: "jewelry", type: "video", badge: "8K CINEMATIC FILM", icon: Gem, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", desc: "Exquisite diamond light refraction & macro jewelry rendering.", hoverState: "CAUSTICS REFRACTION PASS 8K" },
  { id: "2", title: "Haute Couture Paris Runway Film", category: "fashion", type: "video", badge: "8K RUNWAY FILM", icon: Sparkle, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", desc: "Cinematic AI fashion show featuring photorealistic digital avatars.", hoverState: "NEURAL AVATAR SUITE" },
  { id: "3", title: "Haute Horlogerie Royal Tourbillon", category: "watch", type: "video", badge: "8K HORLOGERIE FILM", icon: Watch, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", desc: "Swiss timepiece mechanics & sapphire glass reflections.", hoverState: "MACRO CAUSTICS PASS" },
  { id: "4", title: "Avant-Garde Luxury Eyewear", category: "eyewear", type: "image", badge: "EDITORIAL RENDER", icon: Glasses, desc: "Titanium frames & tinted lens reflections.", hoverState: "TITANIUM REFLECTION PASS" },
  { id: "5", title: "Haute Parfumerie Royal Essence", category: "perfume", type: "image", badge: "3D MACRO RENDER", icon: Sparkles, desc: "Hand-cut crystal perfume bottle & liquid motion.", hoverState: "CRYSTAL CAUSTICS PASS" },
  { id: "6", title: "Royal Emerald High Jewelry", category: "jewelry", type: "image", badge: "MACRO DETAIL", icon: Gem, desc: "Emerald green light dispersion and platinum rendering.", hoverState: "PLATINUM DISPERSION PASS" }
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
    video: "/aurelia-campaign-loop.mp4"
  }
];

export default function Home() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const [estimatorTier, setEstimatorTier] = useState<number>(1);
  const [estimatorDelivery, setEstimatorDelivery] = useState<number>(1);

  const [vipPass, setVipPass] = useState("");
  const [vipStatus, setVipStatus] = useState<"idle" | "error" | "success">("idle");
  const [sliderPos, setSliderPos] = useState<number>(50);

  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);

  // Sol kart videosunun Mute/Unmute state'i ve ref'i
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const twinVideoRef = useRef<HTMLVideoElement | null>(null);

  // Sağ kart videosunun Mute/Unmute state'i ve ref'i
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

  const t = getLangData(selectedLang.code);
  const isRTL = selectedLang.dir === "rtl";

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

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "video") return item.type === "video";
    return item.category === activeFilter;
  });

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
    <main dir={selectedLang.dir} className={`min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/20 selection:text-amber-200 relative ${isRTL ? "font-serif" : ""}`}>
      {/* Custom Cursor */}
      <div className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-amber-400/80 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />
      <div className="fixed pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-amber-400 -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />

      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.12),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Terms & Conditions Modal */}
      <AnimatePresence>
        {activeModal === "terms" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
              <button onClick={() => setActiveModal(null)} aria-label="Close Terms Modal" className="absolute top-6 right-6 text-neutral-400 hover:text-white"><X className="w-6 h-6" /></button>
              <h3 className="text-2xl font-bold text-neutral-100 mb-6 flex items-center gap-3"><FileText className="w-6 h-6 text-amber-400" /> {t.modals?.termsTitle || t.footerSection.terms}</h3>
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
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
              <button onClick={() => setActiveModal(null)} aria-label="Close Privacy Modal" className="absolute top-6 right-6 text-neutral-400 hover:text-white"><X className="w-6 h-6" /></button>
              <h3 className="text-2xl font-bold text-neutral-100 mb-6 flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-amber-400" /> {t.modals?.privacyTitle || t.footerSection.privacy}</h3>
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

      {/* Floating Executive Desk Console */}
      <div className="fixed bottom-8 right-8 z-50">
        <button onClick={() => setIsDeskOpen(!isDeskOpen)} aria-label="Open Executive Desk" className="w-14 h-14 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:scale-110 transition-transform cursor-pointer">
          <ShieldCheck className="w-7 h-7" />
        </button>
      </div>

      <AnimatePresence>
        {isDeskOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed bottom-24 right-8 z-50 w-80 sm:w-96 bg-neutral-900/95 border border-amber-500/40 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-100">{t.chatConsole.title}</h4>
                  <p className="text-[10px] text-amber-300">{t.chatConsole.sub}</p>
                </div>
              </div>
              <button onClick={() => setIsDeskOpen(false)} aria-label="Close Console" className="text-neutral-400 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
            <div className="py-6 space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-300 leading-relaxed">
                {t.chatConsole.welcome}
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:info@aivienne.com?subject=Executive Desk Inquiry&body=${deskMessage}`; setDeskMessage(""); setIsDeskOpen(false); }} className="space-y-3">
              <input type="text" required value={deskMessage} onChange={(e) => setDeskMessage(e.target.value)} placeholder={t.chatConsole.placeholder} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-100 outline-none focus:border-amber-400" />
              <button type="submit" className="w-full py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-2">
                <Send className="w-3.5 h-3.5" /> {t.chatConsole.send}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Showroom Invite Modal */}
      <AnimatePresence>
        {isShowroomModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative w-full max-w-lg bg-neutral-900 border border-amber-500/30 rounded-3xl p-8 shadow-2xl text-center">
              <button onClick={() => setIsShowroomModalOpen(false)} aria-label="Close Showroom Modal" className="absolute top-6 right-6 text-neutral-400 hover:text-white"><X className="w-6 h-6" /></button>
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4"><Key className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-2">{t.showroomSection.title}</h3>
              <p className="text-xs text-neutral-300 mb-6">{t.showroomSection.desc}</p>
              <form onSubmit={handleShowroomRequest} className="space-y-4">
                <input type="email" required value={showroomEmail} onChange={(e) => setShowroomEmail(e.target.value)} placeholder="Enter Corporate Email" className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-xs text-neutral-100 outline-none" />
                <button type="submit" className="w-full py-3 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all">{t.showroomSection.btn}</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
        <div className="w-full px-8 md:px-16 h-24 flex items-center justify-between">
          <button type="button" onClick={scrollToTop} className="flex items-center gap-4 cursor-pointer text-left group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[1px]">
              <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center"><Sparkles className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" /></div>
            </div>
            <span className="font-extrabold text-2xl tracking-wider text-neutral-100 group-hover:text-amber-400 transition-colors">AI.VIENNE <span className="text-amber-400 font-light">STUDIO+</span></span>
          </button>

          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold tracking-wide text-neutral-200">
            <a href="#portfolio" className="hover:text-amber-400 transition-colors uppercase">{t.nav.portfolio}</a>
            <a href="#capabilities" className="hover:text-amber-400 transition-colors uppercase">{t.nav.capabilities}</a>
            <a href="#twins" className="hover:text-amber-400 transition-colors uppercase">{t.nav.avatar}</a>
            <a href="#insights" className="hover:text-amber-400 transition-colors uppercase">{t.nav.insights}</a>
            <a href="#transformation" className="hover:text-amber-400 transition-colors uppercase">{t.nav.transformation}</a>
            <a href="#estimator" className="hover:text-amber-400 transition-colors uppercase">{t.nav.calculator}</a>
            <a href="#portal" className="hover:text-amber-400 transition-colors uppercase">{t.nav.portal}</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors uppercase">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            <button type="button" onClick={toggleAudio} aria-label="Toggle Voice Guidance" className={`flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border transition-all cursor-pointer ${isAudioPlaying ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-900 border-neutral-800 text-neutral-300"}`}>
              {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <div className="relative">
              <button type="button" onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2.5 text-sm font-semibold text-neutral-200 border border-neutral-800 bg-neutral-900/80 rounded-full px-4 py-2 transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selectedLang.flag} alt={selectedLang.name} loading="lazy" decoding="async" className="w-5 h-3.5 object-cover rounded-sm" /> <span>{selectedLang.code}</span> <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-52 max-h-72 overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-lg shadow-2xl p-2 z-50">
                  {LANGUAGES.map((lang) => (
                    <button key={lang.code} type="button" onClick={() => { setSelectedLang(lang); setIsLangOpen(false); }} className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between ${selectedLang.code === lang.code ? "bg-amber-400/10 text-amber-400" : "text-neutral-300 hover:bg-neutral-800/60"}`}>
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={lang.flag} alt={lang.name} loading="lazy" decoding="async" className="w-5 h-3.5 object-cover rounded-sm" /> <span>{lang.name}</span>
                      </div>
                      <span className="text-[10px] text-neutral-400">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="mailto:info@aivienne.com" className="hidden sm:inline-flex px-7 py-3 rounded-full text-xs font-bold tracking-widest text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all uppercase">{t.nav.cta}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 w-full px-8 md:px-16 pt-32 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-sm font-semibold text-amber-300 mb-10"><Sparkles className="w-4 h-4" /> {t.hero.badge}</span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold tracking-tight text-neutral-100 max-w-7xl mx-auto leading-[1.05]">{t.hero.titleStart} <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">{t.hero.titleGradient}</span></h1>
          <p className="mt-10 text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto font-light leading-relaxed">{t.hero.desc}</p>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#portfolio" className="w-full sm:w-auto px-10 py-5 rounded-full text-base font-bold tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(251,191,36,0.3)]">{t.hero.btnPrimary} <ArrowRight className="w-5 h-5" /></a>
            <a href="mailto:info@aivienne.com" className="w-full sm:w-auto px-10 py-5 rounded-full text-base font-bold tracking-wide text-neutral-200 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all flex items-center justify-center gap-3"><Mail className="w-5 h-5 text-amber-400" /> {t.hero.btnSecondary}</a>
          </div>
        </motion.div>
      </section>

      {/* Manifesto */}
      <section className="relative z-10 w-full px-8 md:px-16 py-20 border-y border-neutral-800/80 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase mb-4 block">{t.manifesto.sub}</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-neutral-300 tracking-wide mb-2">{t.manifesto.line1}</h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-100 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">{t.manifesto.line2}</h2>
        </div>
      </section>

      {/* Enterprise Capabilities Section */}
      <section id="capabilities" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.capabilities.tag}</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.capabilities.title}</h2>
            </div>
            <p className="text-neutral-300 text-base max-w-xl mt-6 md:mt-0 leading-relaxed">{t.capabilities.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-100 mb-3">{t.capabilities.cap1Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{t.capabilities.cap1Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-bold text-amber-300 uppercase">
                <span>Master Print Spec</span>
                <span>8K (8192 x 4320)</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-100 mb-3">{t.capabilities.cap2Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{t.capabilities.cap2Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-bold text-amber-300 uppercase">
                <span>Material Accuracy</span>
                <span>Subsurface Shader</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Gem className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-100 mb-3">{t.capabilities.cap3Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{t.capabilities.cap3Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-bold text-amber-300 uppercase">
                <span>Light Dispersion</span>
                <span>Spectral Raytracing</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-100 mb-3">{t.capabilities.cap4Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{t.capabilities.cap4Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-bold text-amber-300 uppercase">
                <span>Identity Continuity</span>
                <span>100% Geometry Mesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twins Section */}
      <section id="twins" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.twinsSection.tag}</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.twinsSection.title}</h2>
            </div>
            <p className="text-neutral-300 text-base max-w-xl mt-6 md:mt-0 leading-relaxed">{t.twinsSection.desc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol Kart - Vienne / Aurelia Model */}
            <div 
              onMouseMove={handleLeftCardMouseMove}
              className={`p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-br ${selectedTwin.bg} flex flex-col justify-between relative overflow-hidden transition-all duration-700 shadow-2xl group`}
            >
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                style={{
                  background: `radial-gradient(400px circle at ${causticsPosLeft.x}% ${causticsPosLeft.y}%, rgba(251,191,36,0.15), transparent 70%)`
                }}
              />

              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-neutral-950/80 border border-amber-400/40 text-[10px] font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-md z-20">
                8K NEURAL MODEL
              </div>

              <div>
                <div className="relative h-72 w-full rounded-2xl bg-neutral-950 border border-amber-500/40 overflow-hidden mb-8 group shadow-2xl">
                  <video
                    key={selectedTwin.id}
                    ref={twinVideoRef}
                    autoPlay
                    loop
                    muted={isVideoMuted}
                    playsInline
                    poster={selectedTwin.poster}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90"
                  >
                    <source src={selectedTwin.video} type="video/mp4" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selectedTwin.poster} alt={selectedTwin.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-amber-400/40 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest">
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

                <h3 className="text-3xl font-extrabold text-neutral-100 mb-2">{selectedTwin.name}</h3>
                <p className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-8">{selectedTwin.role}</p>

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
                <div className="p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-amber-400" /> Runway Motion
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">120 FPS Cinematic</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
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
                    className={`px-6 py-3 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
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

            {/* Sağ Kart - Biometric Facial Scan Video + Ses Açma Düğmesi */}
            <div 
              onMouseMove={handleRightCardMouseMove}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 flex flex-col justify-between text-center relative overflow-hidden group hover:border-amber-500/30 transition-all duration-500 shadow-2xl"
            >
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                style={{
                  background: `radial-gradient(400px circle at ${causticsPosRight.x}% ${causticsPosRight.y}%, rgba(251,191,36,0.15), transparent 70%)`
                }}
              />

              <div>
                <div className="relative h-72 w-full rounded-2xl bg-neutral-950 border border-amber-500/30 overflow-hidden mb-8 shadow-2xl group">
                  <video
                    ref={scanVideoRef}
                    autoPlay
                    loop
                    muted={isScanVideoMuted}
                    playsInline
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
                    <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                      <Activity className="w-3 h-3 text-emerald-400" /> BIOMETRIC SCAN • 100% VERIFIED
                    </span>
                  </div>

                  {/* Sağ Video Ses Açma / Kapama Butonu */}
                  <button
                    type="button"
                    onClick={toggleScanVideoMute}
                    aria-label={isScanVideoMuted ? "Unmute Video" : "Mute Video"}
                    className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-neutral-950/80 border border-amber-400/50 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 transition-all backdrop-blur-md shadow-lg cursor-pointer"
                  >
                    {isScanVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-neutral-100 mb-3">{t.twinsSection.identityTitle}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed max-w-md mx-auto mb-8">{t.twinsSection.identityDesc}</p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 gap-4 text-left">
                <div className="p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Facial Mesh
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">100% Geometry Verified</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
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

      {/* SEO Journal & Insights Section */}
      <section id="insights" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50 bg-neutral-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.insights.tag}</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.insights.title}</h2>
            </div>
            <p className="text-neutral-300 text-base max-w-xl mt-6 md:mt-0 leading-relaxed">{t.insights.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/30 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase inline-block mb-6">{t.insights.article1Tag}</span>
                <h3 className="text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.insights.article1Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">{t.insights.article1Desc}</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider">{t.insights.readMore} <ArrowRight className="w-4 h-4" /></a>
            </article>

            <article className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/30 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase inline-block mb-6">{t.insights.article2Tag}</span>
                <h3 className="text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.insights.article2Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">{t.insights.article2Desc}</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider">{t.insights.readMore} <ArrowRight className="w-4 h-4" /></a>
            </article>

            <article className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/30 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase inline-block mb-6">{t.insights.article3Tag}</span>
                <h3 className="text-2xl font-bold text-neutral-100 mb-4 group-hover:text-amber-300 transition-colors">{t.insights.article3Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">{t.insights.article3Desc}</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider">{t.insights.readMore} <ArrowRight className="w-4 h-4" /></a>
            </article>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
          <div><span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.portfolio.tag}</span><h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.portfolio.title}</h2></div>
          <p className="text-neutral-300 text-base max-w-xl mt-6 md:mt-0 leading-relaxed">{t.portfolio.desc}</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-14">
          {[{ id: "all", label: t.portfolio.filterAll }, { id: "jewelry", label: t.portfolio.filterJewelry }, { id: "fashion", label: t.portfolio.filterFashion }, { id: "watch", label: t.portfolio.filterWatch }, { id: "eyewear", label: t.portfolio.filterEyewear }, { id: "perfume", label: t.portfolio.filterPerfume }, { id: "video", label: t.portfolio.filterVideo }].map((btn) => (
            <button key={btn.id} onClick={() => setActiveFilter(btn.id)} className={`px-6 py-3 rounded-full text-xs font-bold uppercase transition-all ${activeFilter === btn.id ? "bg-amber-400 text-neutral-950" : "bg-neutral-900/80 text-neutral-300 border border-neutral-800"}`}>{btn.label}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative rounded-3xl border border-neutral-800 bg-neutral-900/40 p-7 hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden">
              <div className="relative h-72 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800/80 flex items-center justify-center overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                  {item.type === "video" ? (
                    <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Play ${item.title}`} className="w-16 h-16 rounded-full bg-amber-400/90 text-neutral-950 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.35)] hover:scale-110 transition-all z-10"><Play className="w-7 h-7 ml-1 fill-neutral-950" /></a>
                  ) : (<div className="text-amber-400/50 group-hover:text-amber-400 transition-colors"><item.icon className="w-12 h-12" /></div>)}
                </div>
                <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <span className="text-[10px] font-extrabold tracking-[0.25em] text-amber-400 uppercase mb-2">Caustics Refraction Active</span>
                  <p className="text-sm font-bold text-neutral-100 tracking-wide mb-4">{item.hoverState}</p>
                  {item.type === "video" ? (
                    <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full bg-amber-400 text-neutral-950 text-xs font-extrabold uppercase flex items-center gap-2"><Play className="w-4 h-4 fill-neutral-950" /> {t.portfolio.playVideo}</a>
                  ) : (<span className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold uppercase"><Eye className="w-4 h-4" /> 8K Photorealistic Pass</span>)}
                </div>
                <span className="absolute top-4 left-4 text-xs font-bold uppercase text-amber-300 bg-neutral-950/80 border border-amber-500/30 px-4 py-1.5 rounded-full z-30 pointer-events-none">{item.badge}</span>
              </div>
              <div><h3 className="text-2xl font-bold text-neutral-100 mb-3">{item.title}</h3><p className="text-sm text-neutral-300 leading-relaxed mb-6">{item.desc}</p></div>
              {item.type === "video" && (<a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:bg-amber-400 hover:text-neutral-950 text-xs font-bold uppercase transition-all flex items-center justify-center gap-2"><Play className="w-4 h-4" /> {t.portfolio.playVideo}</a>)}
            </div>
          ))}
        </div>
      </section>

      {/* Brief Architect */}
      <section id="architect" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50 bg-neutral-900/20">
        <div className="max-w-5xl mx-auto bg-neutral-900/80 border border-amber-500/30 p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400"><SlidersHorizontal className="w-6 h-6" /></div>
            <div><span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.briefSection.tag}</span><h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mt-1">{t.briefSection.title}</h2></div>
          </div>
          <p className="text-neutral-300 text-base mb-10">{t.briefSection.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div><label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection.s1}</label><div className="space-y-2">{["Dramatic Studio Gold", "Natural Parisian Sunlight", "Surreal Cyber Neon Caustics"].map((opt) => (<button key={opt} onClick={() => setBriefLighting(opt)} className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold border transition-all ${briefLighting === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>))}</div></div>
            <div><label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection.s2}</label><div className="space-y-2">{["High Jewelry & Gems", "Haute Couture Runway", "Swiss Horlogerie Timepiece"].map((opt) => (<button key={opt} onClick={() => setBriefSegment(opt)} className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold border transition-all ${briefSegment === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>))}</div></div>
            <div><label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection.s3}</label><div className="space-y-2">{["Parisian Palace Runway", "Futuristic Architectural Stage", "Exotic Desert Dunes"].map((opt) => (<button key={opt} onClick={() => setBriefAtmosphere(opt)} className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold border transition-all ${briefAtmosphere === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>))}</div></div>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><p className="text-xs font-bold text-neutral-400 uppercase">{t.briefSection.configLabel}</p><p className="text-sm font-semibold text-amber-300 mt-1">{briefLighting} • {briefSegment} • {briefAtmosphere}</p></div>
            <button onClick={applyBriefToForm} className="px-8 py-3.5 rounded-full text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center gap-2 uppercase shrink-0"><Layers className="w-4 h-4" /> {t.briefSection.applyBtn}</button>
          </div>
        </div>
      </section>

      {/* Private Showroom */}
      <section id="showroom" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-neutral-950 via-amber-950/20 to-neutral-950 border border-amber-500/30 p-10 md:p-16 rounded-3xl text-center backdrop-blur-md">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.showroomSection.tag}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-100 mt-2 mb-4">{t.showroomSection.title}</h2>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto mb-8">{t.showroomSection.desc}</p>
          <button onClick={() => setIsShowroomModalOpen(true)} className="px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(251,191,36,0.3)]"><Key className="w-4 h-4" /> {t.showroomSection.btn}</button>
          <p className="text-[10px] text-amber-300/90 uppercase font-mono mt-6">{t.showroomSection.status}</p>
        </div>
      </section>

      {/* Neural Transformation Slider */}
      <section id="transformation" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50 bg-neutral-900/15">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.transformation.tag}</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.transformation.title}</h2>
            <p className="mt-4 text-neutral-300 text-base max-w-2xl mx-auto">{t.transformation.desc}</p>
          </div>

          <div className="relative w-full aspect-[16/9] max-h-[580px] rounded-3xl border border-amber-500/40 overflow-hidden shadow-[0_0_50px_rgba(217,119,6,0.15)] bg-neutral-950 select-none">
            <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/vienne-portrait.jpg" 
                alt="AI.VIENNE 8K Master Render" 
                loading="lazy" 
                decoding="async" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-6 right-6 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-400/40 text-[10px] font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-md z-10 shadow-lg">
                ✨ {t.transformation.afterLabel}
              </div>
            </div>

            <div className="absolute inset-0 bg-neutral-900 overflow-hidden border-r-2 border-amber-400 z-10" style={{ width: `${sliderPos}%` }}>
              <div className="absolute inset-0 h-full w-full" style={{ width: '100vw', maxWidth: '1200px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/traditional-raw.jpg" 
                  alt="Traditional Raw Capture" 
                  loading="lazy" 
                  decoding="async" 
                  className="w-full h-full object-cover object-center filter grayscale contrast-75 brightness-75"
                />
              </div>
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-2xl bg-neutral-950/90 border border-neutral-800 text-[10px] font-bold text-neutral-300 uppercase tracking-widest backdrop-blur-md z-20 shadow-lg">
                ⚠️ {t.transformation.beforeLabel}
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
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.8)] font-black text-sm">
                ↔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estimator + Executive ROI Matrix */}
      <section id="estimator" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50 bg-neutral-900/20">
        <div className="max-w-6xl mx-auto bg-neutral-900/60 border border-amber-500/30 p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400"><Calculator className="w-6 h-6" /></div>
            <div><span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.estimator.tag}</span><h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mt-1">{t.estimator.title}</h2></div>
          </div>
          <p className="text-neutral-300 text-base mb-10">{t.estimator.desc}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-4">{t.estimator.scaleLabel}</label>
                <div className="space-y-3">
                  {[{ tier: 1, label: t.estimator.tier1 }, { tier: 2, label: t.estimator.tier2 }, { tier: 3, label: t.estimator.tier3 }].map((item) => (
                    <button key={item.tier} onClick={() => setEstimatorTier(item.tier)} className={`w-full text-left p-4 rounded-2xl border text-sm font-semibold flex items-center justify-between transition-all ${estimatorTier === item.tier ? "bg-amber-400/10 border-amber-400 text-amber-300" : "bg-neutral-950/60 border-neutral-800 text-neutral-300"}`}>
                      <span>{item.label}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${estimatorTier === item.tier ? "border-amber-400 bg-amber-400" : "border-neutral-700"}`}>{estimatorTier === item.tier && <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-4">{t.estimator.deliveryLabel}</label>
                <div className="space-y-3">
                  {[{ speed: 1, label: t.estimator.standard }, { speed: 1.3, label: t.estimator.express }].map((item) => (
                    <button key={item.speed} onClick={() => setEstimatorDelivery(item.speed)} className={`w-full text-left p-4 rounded-2xl border text-sm font-semibold flex items-center justify-between transition-all ${estimatorDelivery === item.speed ? "bg-amber-400/10 border-amber-400 text-amber-300" : "bg-neutral-950/60 border-neutral-800 text-neutral-300"}`}>
                      <span>{item.label}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${estimatorDelivery === item.speed ? "border-amber-400 bg-amber-400" : "border-neutral-700"}`}>{estimatorDelivery === item.speed && <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-950 border border-amber-500/40 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-400"><PieChart className="w-32 h-32" /></div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{t.estimator.roiTitle}</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase">{t.estimator.estInvestment}</p>
                    <p className="text-3xl font-black text-amber-400 mt-1">
                      {estimatorTier === 1 && (estimatorDelivery === 1 ? t.estimator.range1 : "$2,000 – $4,500")}
                      {estimatorTier === 2 && (estimatorDelivery === 1 ? t.estimator.range2 : "$6,500 – $15,000")}
                      {estimatorTier === 3 && (estimatorDelivery === 1 ? t.estimator.range3 : "$22,000 – $42,000+")}
                    </p>
                  </div>
                  <div className="border-t border-neutral-800 pt-4 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-neutral-400 uppercase font-bold">{t.estimator.tradCost}</p>
                      <p className="text-neutral-300 font-bold mt-1 line-through decoration-red-500">
                        {estimatorTier === 1 ? t.estimator.trad1 : estimatorTier === 2 ? t.estimator.trad2 : t.estimator.trad3}
                      </p>
                    </div>
                    <div>
                      <p className="text-neutral-400 uppercase font-bold">{t.estimator.costSavings}</p>
                      <p className="text-emerald-400 font-bold mt-1">~85% Capital Efficiency</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-800 pt-4 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 uppercase font-bold">{t.estimator.timeSaved}</span>
                    <span className="text-amber-300 font-bold flex items-center gap-1"><Check className="w-4 h-4 text-emerald-400" /> 80% Faster Delivery</span>
                  </div>
                </div>
              </div>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 w-full py-4 rounded-2xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center justify-center gap-2">
                Lock Investment Rate <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portal */}
      <section id="portal" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto bg-neutral-900/30 border border-neutral-800 p-10 md:p-14 rounded-3xl backdrop-blur-sm text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6"><Lock className="w-7 h-7" /></div>
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.portal.tag}</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-100 mt-2 mb-4">{t.portal.title}</h2>
          <p className="text-neutral-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">{t.portal.desc}</p>

          {vipStatus !== "success" ? (
            <form onSubmit={handleVipLogin} className="max-w-md mx-auto space-y-4">
              <div className="flex gap-3">
                <input type="password" required value={vipPass} onChange={(e) => setVipPass(e.target.value)} placeholder={t.portal.passPlaceholder} className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-sm text-neutral-100 outline-none" />
                <button type="submit" className="px-8 py-4 rounded-2xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shrink-0">{t.portal.loginBtn}</button>
              </div>
              {vipStatus === "error" && (<p className="text-xs text-red-400 font-semibold pt-2">{t.portal.errorMsg}</p>)}
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 text-left">
              <div className="p-6 rounded-2xl bg-amber-400/10 border border-amber-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-amber-300">{t.portal.vaultTitle}</h4>
                  <p className="text-xs text-neutral-200 mt-1">{t.portal.successMsg}</p>
                  <p className="text-[11px] text-amber-300/90 mt-2 italic font-mono">{t.portal.watermarkNotice}</p>
                </div>
                <button type="button" onClick={() => setVipStatus("idle")} className="text-xs font-bold text-neutral-300 hover:text-white underline shrink-0">Lock Vault</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[{ name: "Imperial Diamond 8K Master.exr", size: "1.4 GB", type: "RAW 3D Render" }, { name: "Haute Couture Runway 120fps.mov", size: "3.8 GB", type: "Master Video" }, { name: "Tourbillon Watch CAD & Shaders.zip", size: "850 MB", type: "Production Assets" }].map((file, i) => (
                  <div key={i} className="relative p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex items-center gap-2 text-amber-400 mb-3"><FileText className="w-5 h-5" /><span className="text-[10px] font-bold uppercase">{file.type}</span></div>
                      <h5 className="text-sm font-bold text-neutral-100 truncate mb-1">{file.name}</h5>
                      <p className="text-xs text-neutral-400">{file.size}</p>
                    </div>
                    <a href="#download" onClick={(e) => { e.preventDefault(); alert(`Downloading watermarked secure asset: ${file.name}`); }} className="mt-6 w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-amber-400 hover:text-neutral-950 text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 z-10"><Download className="w-4 h-4" /> {t.portal.downloadAsset}</a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.contact.tag}</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.contact.title}</h2>
            <p className="mt-4 text-neutral-300 text-base max-w-2xl mx-auto">{t.contact.desc}</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-8 bg-neutral-900/30 border border-neutral-800 p-10 md:p-14 rounded-3xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact.namePlaceholder}</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={t.contact.namePlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-base text-neutral-100 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact.emailPlaceholder}</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={t.contact.emailPlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-base text-neutral-100 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact.serviceLabel}</label>
              <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-base text-neutral-100 outline-none cursor-pointer">
                <option value="sOpt1">{t.contact.sOpt1}</option> <option value="sOpt2">{t.contact.sOpt2}</option> <option value="sOpt3">{t.contact.sOpt3}</option> <option value="sOpt4">{t.contact.sOpt4}</option> <option value="sOpt5">{t.contact.sOpt5}</option> <option value="sOpt6">{t.contact.sOpt6}</option> <option value="sOpt7">{t.contact.sOpt7}</option> <option value="sOpt8">{t.contact.sOpt8}</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact.uploadTitle}</label>
              <div className="relative border-2 border-dashed border-neutral-800 hover:border-amber-500/50 rounded-2xl p-8 bg-neutral-950/60 text-center transition-colors group cursor-pointer">
                <input type="file" multiple onChange={handleFileUpload} accept="image/*,video/*,.pdf,.zip,.cad,.obj" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform"><UploadCloud className="w-6 h-6" /></div>
                  <p className="text-sm font-medium text-neutral-200 max-w-md leading-relaxed">{t.contact.uploadHint}</p>
                </div>
              </div>
              {attachedFiles.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {attachedFiles.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-neutral-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-200"><Paperclip className="w-3.5 h-3.5 text-amber-400" /><span className="max-w-[150px] truncate">{file.name}</span><button type="button" onClick={() => removeFile(idx)} className="text-neutral-400 hover:text-red-400 ml-1"><X className="w-3.5 h-3.5" /></button></div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase mb-3">{t.contact.messagePlaceholder}</label>
              <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t.contact.messagePlaceholder} className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-base text-neutral-100 outline-none resize-none" />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <button type="submit" className="w-full sm:w-auto px-10 py-5 rounded-full text-base font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(251,191,36,0.25)]"><Send className="w-5 h-5" /> {t.contact.submitBtn}</button>
              <a href="mailto:info@aivienne.com" className="text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-2"><Mail className="w-4 h-4 text-amber-400" /> {t.contact.directEmail}</a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-20 pb-12 px-6 sm:px-12 md:px-16">
        <div className="w-full bg-amber-400 text-neutral-950 rounded-[40px] p-10 md:p-20 shadow-[0_0_60px_rgba(251,191,36,0.18)]/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-20 border-b border-neutral-950/20">
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-8">{t.footerSection.navTitle}</span>
              <ul className="space-y-4 text-base font-semibold">
                <li><a href="#capabilities" className="hover:opacity-75 block">{t.nav.capabilities}</a></li>
                <li><a href="#portfolio" className="hover:opacity-75 block">{t.footerSection.works}</a></li>
                <li><a href="#insights" className="hover:opacity-75 block">{t.nav.insights}</a></li>
                <li><a href="#transformation" className="hover:opacity-75 block">{t.nav.transformation}</a></li>
                <li><a href="#estimator" className="hover:opacity-75 block">{t.nav.calculator}</a></li>
                <li><a href="#portal" className="hover:opacity-75 block">{t.nav.portal}</a></li>
                <li><a href="#contact" className="hover:opacity-75 block">{t.footerSection.initiate}</a></li>
              </ul>
            </div>
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-8">{t.footerSection.dirTitle}</span>
              <div className="space-y-5 text-base font-semibold">
                <a href="mailto:info@aivienne.com" className="text-lg font-bold underline underline-offset-4 hover:opacity-75 block">info@aivienne.com</a>
                <p className="text-sm font-medium leading-relaxed opacity-90">{t.footerSection.cities}</p>
              </div>
            </div>
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-8">{t.footerSection.netTitle}</span>
              <ul className="space-y-4 text-base font-semibold">
                <li><a href="mailto:info@aivienne.com" className="hover:opacity-75 block">Email: info@aivienne.com</a></li>
                <li><a href="https://instagram.com/ai.vienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 block">Instagram</a></li>
                <li><a href="https://linkedin.com/company/aivienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 block">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="py-12 text-center md:text-left overflow-hidden">
            <h1 className="text-[11vw] leading-[0.9] font-black tracking-tighter text-neutral-950 select-none">AI.VIENNE Studio+</h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm font-bold pt-8 border-t border-neutral-950/20">
            <p>{t.footer}</p>
            <div className="flex items-center gap-8">
              <button type="button" onClick={() => setActiveModal("terms")} className="hover:opacity-75 underline underline-offset-4">{t.footerSection.terms}</button>
              <button type="button" onClick={() => setActiveModal("privacy")} className="hover:opacity-75 underline underline-offset-4">{t.footerSection.privacy}</button>
            </div>
            <div className="flex items-center gap-4">
              <span className="tracking-widest">AI.VIENNE STUDIO+</span>
              <button type="button" onClick={scrollToTop} aria-label="Scroll to top" className="w-10 h-10 rounded-full bg-neutral-950 text-amber-400 flex items-center justify-center hover:scale-110 transition-transform"><ArrowUp className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}