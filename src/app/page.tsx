"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Play, CheckCircle2, Gem, Globe, ChevronDown, Mail, X, Send, ArrowUp, FileText, ShieldCheck, Compass, Cpu, Award, Star, Quote, MessageSquarePlus, UploadCloud, Paperclip, Watch, Glasses, Sparkle, Plus, Lock, Calculator, Eye, Volume2, VolumeX, Download, KeyRound, Sliders, Camera, Zap } from "lucide-react";

// Full Multi-language Translations Dictionary
const TRANSLATIONS: Record<string, any> = {
  EN: {
    nav: { portfolio: "Portfolio", about: "About", services: "Services", workflow: "Workflow", transformation: "Transformation", testimonials: "Testimonials", faq: "FAQ", calculator: "Estimator", portal: "VIP Portal", contact: "Contact", cta: "GET IN TOUCH" },
    hero: {
      badge: "AI-Powered Luxury Content Agency",
      titleStart: "Elevating High Fashion & Fine Jewelry Through",
      titleGradient: "Artificial Intelligence",
      desc: "AI.VIENNE Studio+ crafts ultra-realistic, cinematic imagery and high-end visual productions tailored for luxury brands worldwide.",
      btnPrimary: "Explore Portfolio",
      btnSecondary: "Contact: info@aivienne.com",
    },
    manifesto: {
      sub: "OUR PHILOSOPHY",
      line1: "We do not adapt to trends.",
      line2: "WE ARCHITECT TIMELESS UNIVERSES.",
    },
    about: {
      tag: "Our Vision & Identity",
      title: "Where Haute Couture Meets Neural Artistry",
      desc: "AI.VIENNE Studio+ bridges the gap between traditional luxury aesthetic standards and pioneering neural generation.",
      card1Title: "Human Vision x AI Precision",
      card1Desc: "We do not replace artistic direction; we amplify it. Every rendering undergoes rigorous post-studio color grading.",
      card2Title: "Zero Physical Production Constraints",
      card2Desc: "Elaborate runway stages, exotic shoot locations, and complex lighting setups generated seamlessly in 8K resolution.",
      card3Title: "Global Prestige Standards",
      card3Desc: "Tailored to meet the exacting expectations of luxury houses across Paris, Milan, New York, and Dubai.",
      stat1Number: "8K",
      stat1Label: "Master Resolution",
      stat2Number: "100%",
      stat2Label: "Confidentiality (NDA)",
      stat3Number: "Global",
      stat3Label: "Production Reach",
    },
    portfolio: {
      tag: "Curated Showcase",
      title: "Bespoke Luxury Media Gallery",
      desc: "Hover over items to reveal interactive caustics lighting passes and high-end cinematic preview states.",
      filterAll: "All Works",
      filterJewelry: "High Jewelry",
      filterFashion: "Haute Couture",
      filterWatch: "Haute Horlogerie",
      filterEyewear: "Luxury Eyewear",
      filterPerfume: "Haute Parfumerie",
      filterVideo: "Cinematic Films",
      playVideo: "Watch Campaign Video",
    },
    transformation: {
      tag: "Neural Transformation",
      title: "Traditional Studio vs. AI.VIENNE 8K Master",
      desc: "Drag the interactive slider to experience how raw conventional photography is elevated into surreal neural luxury aesthetics.",
      beforeLabel: "Traditional Raw Capture",
      afterLabel: "AI.VIENNE 8K Master Render",
    },
    services: {
      title: "Bespoke Production Services",
      subtitle: "Tailored AI visual solutions engineered for prestige luxury brands",
      s1Title: "Cinematic Fashion Video",
      s1Desc: "Dynamic, high-resolution 8K AI runway and campaign films crafted specifically for your brand's narrative.",
      s2Title: "Luxury Jewelry Campaign",
      s2Desc: "Precision-driven visual productions focusing on light refraction, texture, and meticulous jewelry craftsmanship.",
      s3Title: "AI Brand Strategy",
      s3Desc: "Strategic creative direction and visual identity frameworks designed to elevate digital prestige.",
    },
    workflow: {
      tag: "Our Methodology",
      title: "4-Step Luxury Production",
      step1Title: "Brief & Concept",
      step1Desc: "Analyzing your brand DNA and collection nuances.",
      step2Title: "AI Generation",
      step2Desc: "Rendering 8K visuals and motion via advanced neural models.",
      step3Title: "Creative Post-Process",
      step3Desc: "Refining color grading, lighting, and composition to studio perfection.",
      step4Title: "Final Delivery",
      step4Desc: "Delivering master files optimized for social, web, and luxury ad campaigns.",
    },
    estimator: {
      tag: "Interactive Tool",
      title: "Bespoke Budget & Scope Estimator",
      desc: "Configure your luxury production requirements to calculate an estimated project investment scale.",
      scaleLabel: "Production Tier / Scope",
      tier1: "Single High-End Asset (Macro Render / Still)",
      tier2: "Seasonal 8K Campaign Package (Multiple Assets)",
      tier3: "Full Cinematic Runway Film & Digital Twin Suite",
      deliveryLabel: "Delivery Speed",
      standard: "Standard Studio Timeline (10-14 Days)",
      express: "Priority Haute Couture Delivery (3-5 Days)",
      estInvestment: "Estimated Investment Scale:",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "Client Portal",
      title: "VIP Vault & Secure Deliverables",
      desc: "Enter your assigned executive access credentials to securely review unreleased collection renders and 8K master files.",
      passPlaceholder: "Enter VIP Access Code (e.g. AIVIENNE-VIP)",
      loginBtn: "Access Secure Vault",
      errorMsg: "Invalid access credentials. Contact info@aivienne.com for executive clearance.",
      successMsg: "Access Granted: Welcome to AI.VIENNE Secure Client Vault.",
      vaultTitle: "Executive Secure Archive (Encrypted with Live Dynamic Watermark)",
      downloadAsset: "Download Master Asset",
      watermarkNotice: "Licensed Exclusively under NDA for AI.VIENNE Executive Partner.",
    },
    faq: {
      tag: "FAQ",
      title: "Frequently Asked Questions",
      desc: "Essential guidelines regarding our visual engineering, material accuracy, and confidential engagement models.",
      q1: "What is the production timeline for an 8K digital twin or campaign visual?",
      a1: "While traditional studio shoots require months of logistical planning, our neural production pipelines deliver master 8K campaigns and digital twins within 5 to 10 business days.",
      q2: "Do you use generic templates or custom-built neural shaders?",
      a2: "We never use generic or public templates. Every neural shader, lighting rig, and avatar is custom-engineered to match the precise aesthetic DNA of your luxury house.",
      q3: "How do you handle Intellectual Property, NDA compliance, and asset security?",
      a3: "We operate under absolute discretion. All unreleased collection designs, CAD files, and briefs are safeguarded under strict pre-launch bilateral NDA frameworks.",
      q4: "How do we initiate a consultation or monthly retainer engagement?",
      a4: "You can submit your project brief and product assets directly through our proposal form below or reach out to our executive desk at info@aivienne.com.",
    },
    testimonials: {
      tag: "Client Endorsements",
      title: "Trusted By Global Luxury Leaders",
      desc: "What creative directors and brand executives say about collaborating with AI.VIENNE Studio+.",
      t1Quote: "AI.VIENNE Studio+ delivered an 8K diamond collection campaign that surpassed traditional studio photography in both speed and photorealism.",
      t1Author: "Elena Rostova",
      t1Role: "Creative Director, High Jewelry House (Geneva)",
      t2Quote: "The runway video production generated for our couture week launch completely redefined our digital presentation standards.",
      t2Author: "Marcus Vance",
      t2Role: "Brand Vice President, Haute Couture (Paris)",
      t3Quote: "Flawless execution, absolute NDA compliance, and a profound understanding of luxury aesthetics.",
      t3Author: "Sophia Chen",
      t3Role: "Head of Marketing, Prestige Accessories (Milan)",
      t4Quote: "The level of detail rendered for our ultra-luxury timepiece collection in Dubai was breathtaking. A true game-changer for the Middle East market.",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "Managing Director, Royal Watch & Jewelry (Dubai)",
      t5Quote: "Partnering with AI.VIENNE Studio+ allowed us to launch a seasonal 8K campaign in days rather than months.",
      t5Author: "Claire Dubois",
      t5Role: "Global Brand Strategist, Luxury Fashion (New York)",
      t6Quote: "Their neural models captured the light reflections on our gem-encrusted pieces with unrivaled perfection.",
      t6Author: "Kenji Takahashi",
      t6Role: "Senior Visual Designer, Fine Jewelry (Tokyo)",
      t7Quote: "Exquisite aesthetics, seamless communication, and a level of sophistication that matches European heritage brands.",
      t7Author: "Maximilian Von Berg",
      t7Role: "Artistic Director, Heritage Atelier (Vienna)",
      t8Quote: "An indispensable partner for high-end digital campaigns requiring uncompromising quality and absolute speed.",
      t8Author: "Victoria Sterling",
      t8Role: "CMO, Private Luxury Club (London)",
      addReviewBtn: "Leave a Review",
      reviewTitle: "Submit Your Endorsement",
      reviewDesc: "Share your experience collaborating with AI.VIENNE Studio+.",
      nameLabel: "Your Name",
      roleLabel: "Role / Brand Title",
      ratingLabel: "Rating",
      commentLabel: "Your Review / Feedback",
      submitReview: "Submit Review",
    },
    contact: {
      tag: "Start Your Project",
      title: "Request a Bespoke Proposal",
      desc: "Partner with AI.VIENNE Studio+ to push the boundaries of luxury content creation.",
      namePlaceholder: "Your Name / Brand Name",
      emailPlaceholder: "Email Address",
      serviceLabel: "Select Desired Service",
      sOpt1: "Cinematic Fashion & Runway Video (8K)",
      sOpt2: "High Jewelry & Gemstone Campaign",
      sOpt3: "Haute Horlogerie & Timepiece Visuals",
      sOpt4: "Haute Parfumerie & Beauty Campaign",
      sOpt5: "Luxury Eyewear & Optics Production",
      sOpt6: "Bespoke Product & High-End Photography",
      sOpt7: "AI Brand Identity & Visual Strategy",
      sOpt8: "Full Digital Runway & Campaign Production",
      uploadTitle: "Upload Product Media & Attachments",
      uploadHint: "Drag and drop or tap to select Images, Videos, CAD, or Documents (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "Tell us about your project or collection...",
      submitBtn: "Send Project Brief",
      directEmail: "Direct Inquiry: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / NAVIGATE",
      dirTitle: "02 / DIRECTORY",
      netTitle: "03 / NETWORK",
      studio: "The Studio",
      works: "Selected Works",
      initiate: "Initiate Contact",
      capabilities: "Capabilities",
      cities: "New York | London | Paris | Milan | Dubai | Vienna | Global",
      terms: "TERMS AND CONDITIONS",
      privacy: "PRIVACY POLICY",
    },
    modals: {
      termsTitle: "Terms & Conditions of Engagement",
      termsBody: `Last Updated: July 2026\n\n1. INTELLECTUAL PROPERTY & DELIVERABLES\nUpon full settlement of retainer or project fees, all final high-resolution 8K creative deliverables, master renders, and commissioned visual concepts transition entirely to the Client, granting full global commercial and distribution rights. AI.VIENNE Studio retains the right to showcase finalized creative work in our secure digital Archive for portfolio purposes unless explicitly restricted by a bilateral NDA.\n\n2. AI MODEL PROPRIETY & REFINEMENT\nNo client assets or brand materials are ever utilized to train public generative models. Custom neural models built for brand aesthetics remain the exclusive intellectual property of the respective client.\n\n3. GOVERNING LAW & JURISDICTION\nAny disputes arising from creative engagements or the use of this digital portal shall be governed by and construed in accordance with the laws of our primary operational jurisdictions (London / Dubai), without giving effect to conflict of law principles.`,
      privacyTitle: "Confidentiality & Privacy Policy (GDPR / CCPA)",
      privacyBody: `Last Updated: July 2026\n\n1. CONFIDENTIALITY & NDA COMPLIANCE\nAI.VIENNE Studio operates under rigorous non-disclosure standards. All brand assets, CAD models, reference imagery, and unreleased collection directives shared with us are safeguarded under strict pre-launch security. We execute formal bilateral NDAs prior to any project initiation.\n\n2. DATA PRIVACY & SECURITIES\nWe collect minimal corporate data (e.g., corporate emails, booking requests) solely to facilitate high-end B2B communications. We never sell, lease, or distribute corporate data to third parties.\n\n3. CORPORATE INQUIRIES & DELETION\nFor inquiries regarding data deletion, NDA execution, or specific corporate privacy agreements, contact our legal desk at: info@aivienne.com.`,
    },
    footer: "© 2026 AI.VIENNE Studio. All rights reserved.",
  },
  TR: {
    nav: { portfolio: "Portfolyo", about: "Hakkımızda", services: "Hizmetler", workflow: "Süreç", transformation: "Dönüşüm", testimonials: "Referanslar", faq: "S.S.S.", calculator: "Bütçe Hesapla", portal: "VIP Portal", contact: "İletişim", cta: "İLETİŞİME GEÇ" },
    hero: {
      badge: "Yapay Zeka Destekli Lüks İçerik Ajansı",
      titleStart: "Yüksek Moda ve Mücevher Sanatında",
      titleGradient: "Yapay Zeka Dokunuşu",
      desc: "AI.VIENNE Studio+, global lüks markalar için sinematik kalitede ultra-gerçekçi görsel içerikler ve prodüksiyonlar üretir.",
      btnPrimary: "Çalışmaları İncele",
      btnSecondary: "İletişim: info@aivienne.com",
    },
    manifesto: {
      sub: "FELSEFEMİZ",
      line1: "Trendlere uyum sağlamıyoruz.",
      line2: "ZAMANSIZ EVRENLER İNŞA EDİYORUZ.",
    },
    about: {
      tag: "Vizyonumuz & Kimliğimiz",
      title: "Yüksek Modanın Yapay Zeka Sanatıyla Buluşması",
      desc: "AI.VIENNE Studio+, geleneksel lüks estetik standartları ile yenilikçi yapay zeka prodüksiyonlarını mükemmel bir dengede buluşturur.",
      card1Title: "İnsan Vizyonu x AI Hassasiyeti",
      card1Desc: "Kreatif direktörlüğü ikame etmiyoruz; onu güçlendiriyoruz. Her görsel prodüksiyon stüdyo renk ayarlarından geçer.",
      card2Title: "Maliyet ve Mekan Sınırları Yok",
      card2Desc: "Karmaşık podyum sahneleri, egzotik çekim lokasyonları ve özel ışık kurguları 8K çözünürlükte hazırlanır.",
      card3Title: "Global Prestij Standartları",
      card3Desc: "Paris, Milano, New York ve Dubai'deki lüks markaların beklentilerini karşılayacak detay odaklı yaklaşım.",
      stat1Number: "8K",
      stat1Label: "Master Çözünürlük",
      stat2Number: "100%",
      stat2Label: "Gizlilik Garantisi (NDA)",
      stat3Number: "Global",
      stat3Label: "Prodüksiyon Ağı",
    },
    portfolio: {
      tag: "Seçkin Koleksiyonlar",
      title: "Özel Lüks Medya Galerisi",
      desc: "İnteraktif ışık kırılması (caustics) ve sinematik önizleme efektleriyle zenginleştirilmiş 8K galeri.",
      filterAll: "Tüm Çalışmalar",
      filterJewelry: "Lüks Mücevherat",
      filterFashion: "Haute Couture Moda",
      filterWatch: "Saat & Saatçilik",
      filterEyewear: "Lüks Gözlük",
      filterPerfume: "Parfüm & Kozmetik",
      filterVideo: "Sinematik Filmler",
      playVideo: "Kampanya Videosunu İzle",
    },
    transformation: {
      tag: "Neural Dönüşüm",
      title: "Geleneksel Stüdyo Çekimi vs. AI.VIENNE 8K Master",
      desc: "Ham geleneksel fotoğrafın üst düzey sinematik yapay zeka estetiğine nasıl dönüştüğünü interaktif kaydırıcı ile inceleyin.",
      beforeLabel: "Geleneksel Ham Çekim",
      afterLabel: "AI.VIENNE 8K Master Render",
    },
    services: {
      title: "Özel Prodüksiyon Hizmetlerimiz",
      subtitle: "Markanıza değer katan lüks segment AI çözümleri",
      s1Title: "Sinematik Moda Videosu",
      s1Desc: "Koleksiyonlarınıza özel, yüksek çözünürlüklü 8K kalitesinde dinamik AI podyum ve kampanya filmleri.",
      s2Title: "Lüks Mücevher Kampanyası",
      s2Desc: "Mücevher ve lüks aksesuarlar için detay odaklı, kusursuz ışık ve yansıma prodüksiyonları.",
      s3Title: "AI Marka Stratejisi",
      s3Desc: "Markanızın dijital varlığını güçlendirecek kreatif içerik takvimi ve görsel kimlik tasarımı.",
    },
    workflow: {
      tag: "Çalışma Metodumuz",
      title: "4 Adımda Lüks Prodüksiyon",
      step1Title: "Brief & Konsept",
      step1Desc: "Markanızın ruhunu ve koleksiyon detaylarını inceliyoruz.",
      step2Title: "AI Üretimi",
      step2Desc: "Gelişmiş AI modelleriyle 8K görseller ve videolar üretiyoruz.",
      step3Title: "Kreatif Dokunuş",
      step3Desc: "Renk, ışık ve kompozisyon ayarlarını stüdyo kalitesine getiriyoruz.",
      step4Title: "Teslimat",
      step4Desc: "Sosyal medya ve reklam mecralarına uygun formattaki içerikleri sunuyoruz.",
    },
    estimator: {
      tag: "İnteraktif Araç",
      title: "Bütçe ve Kapsam Hesaplayıcı",
      desc: "Lüks prodüksiyon gereksinimlerinizi yapılandırarak tahmini proje yatırım ölçeğini hesaplayın.",
      scaleLabel: "Prodüksiyon Kapsamı / Seviyesi",
      tier1: "Tekli Üst Segment Varlık (Makro Render / Fotoğraf)",
      tier2: "Sezonluk 8K Kampanya Paketi (Çoklu İçerik)",
      tier3: "Tam Sinematik Podyum Filmi & Dijital İkiz Paketi",
      deliveryLabel: "Teslimat Hızı",
      standard: "Standart Stüdyo Takvimi (10-14 Gün)",
      express: "Öncelikli Haute Couture Teslimatı (3-5 Gün)",
      estInvestment: "Tahmini Yatırım Ölçeği:",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "Müşteri Portalı",
      title: "VIP Kasa ve Güvenli Teslimat Alanı",
      desc: "Yayınlanmamış koleksiyon randerlarını ve 8K master dosyalarını güvenle incelemek için size atanan VIP erişim kodunu girin.",
      passPlaceholder: "VIP Erişim Kodu Girin (örn. AIVIENNE-VIP)",
      loginBtn: "Güvenli Kasaya Giriş Yap",
      errorMsg: "Geçersiz erişim kimlik bilgileri. Yetki için info@aivienne.com ile iletişime geçin.",
      successMsg: "Erişim Onaylandı: AI.VIENNE Güvenli Müşteri Kasasına Hoş Geldiniz.",
      vaultTitle: "Yönetici Güvenli Arşivi (Canlı Dinamik Filigran ile Şifrelenmiştir)",
      downloadAsset: "Master Dosyayı İndir",
      watermarkNotice: "AI.VIENNE Yönetici Ortağı NDA sözleşmesi kapsamında lisanslanmıştır.",
    },
    faq: {
      tag: "S.S.S.",
      title: "Sık Sorulan Sorular",
      desc: "Görsel mühendisliğimiz, malzeme doğruluğumuz ve gizli iş birliği modellerimiz hakkındaki temel kılavuz ilkeler.",
      q1: "8K dijital ikiz veya kampanya görseli için prodüksiyon süresi nedir?",
      a1: "Geleneksel stüdyo çekimleri aylar süren planlamalar gerektirirken, neural prodüksiyon altyapımızla master 8K kampanyaları 5 ila 10 iş günü içinde teslim ediyoruz.",
      q2: "Hazır şablonlar mı yoksa özel yapım neural shader'lar mı kullanıyorsunuz?",
      a2: "Asla standart veya hazır şablon kullanmıyoruz. Her bir neural shader, ışıklandırma rig'i ve avatar, lüks markanızın estetik DNA'sına özel olarak tasarlanır.",
      q3: "Fikri Mülkiyet, NDA uyumluluğu ve varlık güvenliğini nasıl yönetiyorsunuz?",
      a3: "Mutlak gizlilik prensibiyle çalışıyoruz. Henüz yayınlanmamış tüm koleksiyon tasarımları, CAD dosyaları ve brief'ler sıkı NDA çerçevesinde korunur.",
      q4: "Konsültasyon sürecini veya aylık retainer anlaşmasını nasıl başlatabiliriz?",
      a4: "Aşağıdaki teklif formunu doldurarak proje detaylarınızı iletebilir veya doğrudan info@aivienne.com adresinden yönetim masamıza ulaşabilirsiniz.",
    },
    testimonials: {
      tag: "Müşteri Değerlendirmeleri",
      title: "Global Lüks Liderlerinin Güveni",
      desc: "Kreatif direktörler ve marka yöneticilerinin AI.VIENNE Studio+ ile çalışma deneyimleri.",
      t1Quote: "AI.VIENNE Studio+, elmas koleksiyonumuz için geleneksel stüdyo çekimlerini hız ve foto-gerçekçilik açısından geride bırakan 8K bir kampanya sundu.",
      t1Author: "Elena Rostova",
      t1Role: "Kreatif Direktör, Mücevher Evi (Cenevre)",
      t2Quote: "Couture haftası lansmanımız için üretilen podyum videosu, dijital sunum standartlarımızı tamamen yeniden tanımladı.",
      t2Author: "Marcus Vance",
      t2Role: "Marka Başkan Yardımcısı, Haute Couture (Paris)",
      t3Quote: "Kusursuz teslimat, %100 NDA gizlilik disiplini ve lüks estetiğe derin bir hakimiyet.",
      t3Author: "Sophia Chen",
      t3Role: "Pazarlama Başkanı, Prestij Aksesuar (Milano)",
      t4Quote: "Dubai'deki lüks saat koleksiyonumuz için üretilen detay seviyesi nefes kesiciydi. Orta Doğu pazarı için gerçek bir devrim.",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "Yönetici Direktör, Royal Saat & Mücevher (Dubai)",
      t5Quote: "AI.VIENNE Studio+ ile ortaklığımız, sezonluk 8K kampanyamızı aylar yerine günler içinde yayına almamızı sağladı.",
      t5Author: "Claire Dubois",
      t5Role: "Global Marka Stratejisti, Lüks Moda (New York)",
      t6Quote: "Yapay zeka modelleri, değerli taşlarımız üzerindeki ışık yansımalarını benzersiz bir mükemmellikle yakaladı.",
      t6Author: "Kenji Takahashi",
      t6Role: "Kıdemli Görsel Tasarımcı, Mücevherat (Tokyo)",
      t7Quote: "Kusursuz estetik, akıcı iletişim ve Avrupa mirası markalara yakışır üst düzey bir prestij anlayışı.",
      t7Author: "Maximilian Von Berg",
      t7Role: "Sanat Direktörü, Miras Atölyesi (Viyana)",
      t8Quote: "Tavizsiz kalite ve maksimum hız gerektiren üst segment dijital kampanyalar için vazgeçilmez bir ortak.",
      t8Author: "Victoria Sterling",
      t8Role: "Pazarlama Direktörü, Lüks Kulüp (Londra)",
      addReviewBtn: "Yorum Yap",
      reviewTitle: "Siz de Değerlendirmenizi Paylaşın",
      reviewDesc: "AI.VIENNE Studio+ ile olan çalışma deneyiminizi paylaşın.",
      nameLabel: "Adınız Soyadınız",
      roleLabel: "Unvanınız / Marka Adınız",
      ratingLabel: "Puanınız",
      commentLabel: "Yorumunuz & Değerlendirmeniz",
      submitReview: "Yorumu Gönder",
    },
    contact: {
      tag: "Projenizi Başlatın",
      title: "Özel Proje Teklifi Alın",
      desc: "AI.VIENNE Studio+ ile koleksiyonlarınızı geleceğin kreatif standartlarına taşıyın.",
      namePlaceholder: "Adınız / Marka Adı",
      emailPlaceholder: "E-Posta Adresiniz",
      serviceLabel: "İstediğiniz Hizmeti Seçin",
      sOpt1: "Sinematik Moda ve Podyum Videosu (8K)",
      sOpt2: "Lüks Mücevher ve Pırlanta Kampanyası",
      sOpt3: "Haute Horlogerie Saat Prodüksiyonu",
      sOpt4: "Lüks Parfüm ve Kozmetik Görsel Kampanyası",
      sOpt5: "Lüks Gözlük ve Aksesuar Prodüksiyonu",
      sOpt6: "Özel Ürün Fotoğrafçılığı ve Stüdyo Render",
      sOpt7: "Yapay Zeka Marka Kimliği ve Görsel Strateji",
      sOpt8: "Uçtan Uca Dijital Podyum ve Kampanya",
      uploadTitle: "Ürün Görseli, Videosu veya Dosya Yükleyin",
      uploadHint: "Cihazınızdan (Mobil, Tablet, Bilgisayar) Görsel, Video, CAD veya Doküman Sürükleyin ya da Seçin (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "Projeniz veya koleksiyonunuz hakkında bilgi verin...",
      submitBtn: "Proje Brief'i Gönder",
      directEmail: "Doğrudan E-Posta: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / NAVİGASYON",
      dirTitle: "02 / DİREKTÖRİK",
      netTitle: "03 / AĞLARIMIZ",
      studio: "Stüdyomuz",
      works: "Seçkin Çalışmalar",
      initiate: "İletişime Geçin",
      capabilities: "Kapasitelerimiz",
      cities: "New York | Londra | Paris | Milano | Dubai | Viyana | Global",
      terms: "KULLANIM ŞARTLARI",
      privacy: "GİZLİLİK POLİTİKASI",
    },
    modals: {
      termsTitle: "Kullanım ve Hizmet Şartları",
      termsBody: `Son Güncelleme: Temmuz 2026\n\n1. FİKRİ MÜLKİYET VE TESLİMAT HAKLARI\nProje ücretlerinin tamamlanmasıyla birlikte, üretilen tüm 8K yüksek çözünürlüklü görseller ve sinematik içeriklerin küresel ticari kullanım hakları tamamen Müşteriye devredilir. İki taraflı gizlilik sözleşmesi (NDA) ile sınırlandırılmadığı sürece AI.VIENNE Studio tamamlanan projeleri dijital arşivinde sergileme hakkını saklı tutar.\n\n2. AI MODELLERİ VE MODEL MÜLKİYETİ\nMüşteriye ait hiçbir görsel veri halka açık yapay zeka modellerini eğitmek için kullanılmaz. Markaya özel geliştirilen özel modeller doğrudan ilgili Müşterinin mülkiyetinde kalır.\n\n3. HUKUKİ YETKİ VE YARGI\nBu platform üzerinden gerçekleşen tüm etkileşimler Londra ve Dubai operasyonel yargı merkezlerimizin yürürlükteki hukuk standartlarına tabidir.`,
      privacyTitle: "Gizlilik Politikası (NDA & GDPR)",
      privacyBody: `Son Güncelleme: Temmuz 2026\n\n1. GİZLİLİK VE NDA UYUMLULUĞU\nAI.VIENNE Studio en üst düzey gizlilik standartlarıyla çalışır. Paylaşılan tüm brief'ler, konsept çizimleri ve henüz yayınlanmamış koleksiyon materyalleri kilitli güvenlik protokolleriyle korunur. İsteğe bağlı olarak proje öncesi ikili NDA imzalanmaktadır.\n\n2. VERİ GÜVENLİĞİ VE B2B İLETİŞİM\nSadece kurumsal iletişim süreçlerini yürütmek adına minimum düzeyde ticari veri toplanır. Verileriniz kesinlikle üçüncü taraflara satılmaz veya paylaşılmaz.\n\n3. İLETİŞİM VE VERİ SİLME TALEPLERİ\nVerilerinizin silinmesi veya NDA süreçleriyle ilgili tüm hukuki sorularınız için doğrudan info@aivienne.com adresiyle iletişime geçebilirsiniz.`,
    },
    footer: "© 2026 AI.VIENNE Studio. Tüm hakları saklıdır.",
  },
  AR: {
    nav: { portfolio: "معرض الأعمال", about: "عن الاستوديو", services: "الخدمات", workflow: "آلية العمل", transformation: "التحول", testimonials: "التوصيات", faq: "الأسئلة الشائعة", calculator: "حاسبة التكلفة", portal: "بوابة VIP", contact: "التواصل", cta: "تواصل معنا" },
    hero: {
      badge: "وكالة المحتوى الفاخر المعتمدة على الذكاء الاصطناعي",
      titleStart: "الارتقاء بالأزياء الراقية والمجوهرات الفاخرة عبر",
      titleGradient: "الذكاء الاصطناعي",
      desc: "تقوم AI.VIENNE Studio+ بابتكار صور سينمائية فائقة الواقعية وإشعاعات بصرية عالية المستوى مخصصة للعلامات التجارية الفاخرة.",
      btnPrimary: "استكشف معرض الأعمال",
      btnSecondary: "تواصل: info@aivienne.com",
    },
    manifesto: {
      sub: "فلسفتنا",
      line1: "نحن لا نتبع الصيحات.",
      line2: "نحن نبني عوالم خالدة.",
    },
    about: {
      tag: "رؤيتنا وهوية الاستوديو",
      title: "حيث تلتقي الأزياء الراقية بفنون الذكاء الاصطناعي",
      desc: "تجمع AI.VIENNE Studio+ بين معايير الفخامة التقليدية والجيل الجديد من التوليد العصبي.",
      card1Title: "الرؤية البشرية x دقة الذكاء الاصطناعي",
      card1Desc: "نحن لا نستبدل التوجيه الفني، بل نعززه بتقنيات متقدمة لمعالجة الضوء والألوان.",
      card2Title: "بدون قيود على الإنتاج المادي",
      card2Desc: "منصات عرض معقدة وأماكن تصوير استثنائية يتم توليدها بدقة 8K فائقة.",
      card3Title: "معايير الهيبة العالمية",
      card3Desc: "مصممة لتلبية تطلعات دور الأزياء الفاخرة في باريس وميلانو ونيويورك ودبي.",
      stat1Number: "8K",
      stat1Label: "دقة العرض الرئيسية",
      stat2Number: "100%",
      stat2Label: "اتفاقية السرية (NDA)",
      stat3Number: "عالمي",
      stat3Label: "نطاق الإنتاج",
    },
    portfolio: {
      tag: "معرض تفاعلي",
      title: "معرض الوسائط والفيديوهات التفاعلي",
      desc: "معرض 8K مع تأثيرات تفاعلية لانعکاس الضوء (caustics) معاينظ سينمائية.",
      filterAll: "جميع الأعمال",
      filterJewelry: "مجوهرات فاخرة",
      filterFashion: "أزياء راقية",
      filterWatch: "ساعات فاخرة",
      filterEyewear: "نظارات فاخرة",
      filterPerfume: "عطور فاخرة",
      filterVideo: "فيديوهات الحملات",
      playVideo: "شاهد فيديو الحملة",
    },
    transformation: {
      tag: "التحول العصبي",
      title: "التصوير التقليدي مقابل AI.VIENNE 8K",
      desc: "اسحب الشريط للتفاعل ومشاهدة كيف يتحول التصوير التقليدي الخام إلى جماليات فخمة فائقة الواقعية.",
      beforeLabel: "التصوير التقليدي الخام",
      afterLabel: "إخراج AI.VIENNE بدقة 8K",
    },
    services: {
      title: "خدمات إنتاج مخصصة",
      subtitle: "حلول بصرية بالذكاء الاصطناعي مصممة خصيصاً للعلامات التجارية الفاخرة",
      s1Title: "فيديو أزياء سينمائي",
      s1Desc: "أفلام عروض أزياء وحملات ديناميكية بدقة 8K مصممة لتناسب سرد علامتك التجارية.",
      s2Title: "حملات المجوهرات الفاخرة",
      s2Desc: "إنتاجات بصرية دقيقة تركز على انعكاس الضوء والحرفية العالية للمجوهرات.",
      s3Title: "استراتيجية العلامة التجارية",
      s3Desc: "توجيه إبداعي وأطر هُوية بصرية لتطوير حضورك الرقمي.",
    },
    workflow: {
      tag: "منهجيتنا",
      title: "إنتاج فاخر في 4 خطوات",
      step1Title: "الفكرة والمفهوم",
      step1Desc: "تحليل هوية علامتك التجارية وتفاصيل المجموعة.",
      step2Title: "إنشاء الذكاء الاصطناعي",
      step2Desc: "توليد صور وحركة بدقة 8K عبر نماذج عصبية متقدمة.",
      step3Title: "اللمسة الإبداعية",
      step3Desc: "تحسين الألوان والإضاءة لتصل إلى جودة الاستوديو.",
      step4Title: "التسليم النهائي",
      step4Desc: "تسليم ملفات فائقة الجودة مجهزة للحملات الإعلانية.",
    },
    estimator: {
      tag: "أداة تفاعلية",
      title: "حاسبة الميزانية والنطاق",
      desc: "قم بتكوين متطلبات الإنتاج الفاخر الخاصة بك لحساب نطاق الاستثمار المقدر للمشروع.",
      scaleLabel: "مستوى الإنتاج / النطاق",
      tier1: "أصل واحد عالي المستوى (رندر ماكرو / ثابت)",
      tier2: "حملة موسمية 8K (أصول متعددة)",
      tier3: "حزمة أفلام العروض السينمائية والتوأم الرقمي الكاملة",
      deliveryLabel: "سرعة التسليم",
      standard: "الجدول الزمني القياسي للاستوديو (10-14 يومًا)",
      express: "تسليم أزياء Haute Couture ذات الأولوية (3-5 أيام)",
      estInvestment: "نطاق الاستثمار المقدر:",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "بوابة العملاء",
      title: "خزنة VIP والتسليم الآمن",
      desc: "أدخل بيانات اعتماد الوصول التنفيذي المخصصة لك لمراجعة رندرات المجموعات غير المنشرة وملفات 8K بأمان.",
      passPlaceholder: "أدخل رمز الوصول (مثل AIVIENNE-VIP)",
      loginBtn: "الوصول إلى الخزنة الآمنة",
      errorMsg: "بيانات اعتماد غير صالحة. تواصل عبر info@aivienne.com.",
      successMsg: "تم منح حق الوصول: مرحبًا بك في خزنة العملاء الآمنة.",
      vaultTitle: "الأرشيف التنفيذي الآمن (محمي بعلامة مائية ديناميكية)",
      downloadAsset: "تنزيل الأصل الرئيسي",
      watermarkNotice: "مرخصة حصرياً بموجب اتفاقية NDA لشريك AI.VIENNE التنفيذي.",
    },
    faq: {
      tag: "الأسئلة الشائعة",
      title: "الأسئلة المتكررة",
      desc: "إرشادات أساسية بخصوص الهندسة البصرية ودقة المواد وننماذج المشاركة السرية.",
      q1: "ما هي جدول زمني لإنتاج توأم رقمي 8K أو مرئي للحملة؟",
      a1: "بينما تتطلب جلسات التصوير التقليدية شهوراً، تقدم خطوط إنتاجنا العصبية حملات 8K في غضون 5 إلى 10 أيام عمل.",
      q2: "هل تستخدم قوالب عامة أم مظللات عصبية مخصصة؟",
      a2: "نحن لا نستخدم قوالب عامة أبدًا. يتم تصميم كل مظلل عصبي خصيصًا ليناسب الحمض النووي لدار الفخامة الخاصة بك.",
      q3: "كيف تتعاملون مع الملكية الفكرية والالتزام باتفاقية NDA وأمان الأصول؟",
      a3: "نعمل تحت سرية تامة. يتم تأمين جميع التصاميم والملفات تحت أطر عمل NDA الصارمة قبل بدء المشروع.",
      q4: "كيف نبدأ استشارة أو مشاركة شهرية مستمرة؟",
      a4: "يمكنك إرسال موجز مشروعك عبر نموذج المقترح أدناه أو التواصل مباشرة مع مكتبينا التنفيذي عبر info@aivienne.com.",
    },
    testimonials: {
      tag: "توصيات العملاء",
      title: "ثقة قادة الفخامة العالميين",
      desc: "آراء المدراء الإبداعيين والمدراء التنفيذيين حول تجربة العمل مع AI.VIENNE Studio+.",
      t1Quote: "قدمت AI.VIENNE Studio+ حملة مجوهرات ألماس بدقة 8K تفوقت على التصوير الفوتوغرافي التقليدي في السرعة والواقعية.",
      t1Author: "إلينا روستوفا",
      t1Role: "المدير الإبداعي، دار مجوهرات راقية (جنيف)",
      t2Quote: "فيديو عرض الأزياء الذي تم توليده لإطلاق أسبوع الموضة أعاد تعريف معايير العروض الرقمية لدينا بالكامل.",
      t2Author: "ماركوس فانس",
      t2Role: "نائب رئيس العلامة التجارية، الأزياء الراقية (باريس)",
      t3Quote: "تنفيذ لا تشوبه شائبة، التزام تام باتفاقية السرية، وفهم عميق للجماليات الفاخرة.",
      t3Author: "صوفيا تشن",
      t3Role: "رئيسة التسويق، الإكسسوارات الفاخرة (ميلانو)",
      t4Quote: "مستوى التفاصيل المصنوعة لمجموعة الساعات الفاخرة في دبي كان مذهلاً. ثورة حقيقية لسوق الشرق الأوسط.",
      t4Author: "طارق المنصور",
      t4Role: "المدير التنفيذي، الساعات والمجوهرات الملكية (دبي)",
      t5Quote: "الشراكة مع AI.VIENNE Studio+ مكنتنا من إطلاق حملتنا بدقة 8K خلال أيام بدلاً من أشهر.",
      t5Author: "كلير دوبوا",
      t5Role: "مخططة العلامات العالمية، الأزياء الفاخرة (نيويورك)",
      t6Quote: "استوعبت النماذج العصبية انعكاسات الضوء على أحجارنا الكريمة بإتقان لا مثيل له.",
      t6Author: "كينجي تاكاهاشي",
      t6Role: "كبير المصممين البصريين، المجوهرات الفاخرة (طوكيو)",
      t7Quote: "جماليات فائقة، تواصل سلس، ومستوى من الفخامة يناسب أعرق الدور الأوروبية.",
      t7Author: "ماكسيميليان فون بيرغ",
      t7Role: "المدير الفني، استوديو التراث (فيينا)",
      t8Quote: "شريك لا غنى عنه للحملات الرقمية الفاخرة التي تتطلب جودة غير مساومة وسرعة فائقة.",
      t8Author: "فيكتوريا ستيرلينغ",
      t8Role: "مديرة التسويق، النادي الفاخر الخاص (لندن)",
      addReviewBtn: "أضف تقييمك",
      reviewTitle: "شاركنا تجربتك",
      reviewDesc: "اكتب انطباعك حول التعاون مع AI.VIENNE Studio+.",
      nameLabel: "الاسم الكامل",
      roleLabel: "المسمى الوظيفي / العلامة",
      ratingLabel: "التقييم",
      commentLabel: "ملاحظاتك وتقييمك",
      submitReview: "إرسال التقييم",
    },
    contact: {
      tag: "ابدأ مشروعك",
      title: "اطلب عرض سعر مخصص",
      desc: "تعاون مع AI.VIENNE Studio+ لتجاوز حدود إبداع المحتوى الفاخر.",
      namePlaceholder: "اسمك / اسم العلامة التجارية",
      emailPlaceholder: "البريد الإلكتروني",
      serviceLabel: "حدد الخدمة المطلوبة",
      sOpt1: "Cinematic Fashion & Runway Video (8K)",
      sOpt2: "High Jewelry & Gemstone Campaign",
      sOpt3: "Haute Horlogerie & Timepiece Visuals",
      sOpt4: "Haute Parfumerie & Beauty Campaign",
      sOpt5: "Luxury Eyewear & Optics Production",
      sOpt6: "Bespoke Product & High-End Photography",
      sOpt7: "AI Brand Identity & Visual Strategy",
      sOpt8: "Full Digital Runway & Campaign Production",
      uploadTitle: "تحميل صور المنتجات والفيديوهات والملفات",
      uploadHint: "قم بسحب وإفلات أو النقر لاختيار الصور أو الفيديوهات أو الملفات من جهازك (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "حدثنا عن مشروعك أو مجموعتك القادمة...",
      submitBtn: "إرسال تفاصيل المشروع",
      directEmail: "البريد المباشر: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / التنقل",
      dirTitle: "02 / الدليل",
      netTitle: "03 / الشبكات",
      studio: "الاستوديو",
      works: "أعمال مختارة",
      initiate: "ابدأ التواصل",
      capabilities: "الإمكانيات",
      cities: "نيويورك | لندن | باريس | ميلانو | دبي | فيينا | عالمي",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
    },
    modals: {
      termsTitle: "الشروط والأحكام",
      termsBody: "تنتقل جميع الحقوق التجارية للملفات والإنتاجات بدقة 8K للعميل فور سداد مستحقات المشروع بالكامل. يحتفظ الاستوديو بحق العرض في أرشيفه الرقمي ما لم تنص اتفاقية السرية على خلاف ذلك.",
      privacyTitle: "سياسة الخصوصية والسرية (NDA)",
      privacyBody: "تخضع كافة أصول العلامات التجارية والتصاميم غير المعلنة لحماية صارمة بموجب اتفاقيات سرية متبادلة (NDA). لا نستخدم أصول العملاء لتدريب النماذج العامة.",
    },
    footer: "© 2026 AI.VIENNE Studio. جميع الحقوق محفوظة.",
  },
  FR: {
    nav: { portfolio: "Portfolio", about: "À Propos", services: "Services", workflow: "Méthode", transformation: "Transformation", testimonials: "Avis", faq: "FAQ", calculator: "Calculateur", portal: "Portail VIP", contact: "Contact", cta: "CONTACTEZ-NOUS" },
    hero: {
      badge: "Agence de Contenu de Luxe Propulsée par l'IA",
      titleStart: "Sublimer la Haute Couture & la Haute Joaillerie par",
      titleGradient: "l'Intelligence Artificielle",
      desc: "AI.VIENNE Studio+ crée des visuels cinématographiques ultra-réalistes et des productions haut de gamme sur mesure.",
      btnPrimary: "Explorer le Portfolio",
      btnSecondary: "Contact: info@aivienne.com",
    },
    manifesto: {
      sub: "NOTRE PHILOSOPHIE",
      line1: "Nous ne suivons pas les tendances.",
      line2: "NOUS ARCHITECTURONS DES UNIVERS INTEMPORELS.",
    },
    about: {
      tag: "Notre Vision",
      title: "Quand la Haute Couture Rencontre l'Art Neural",
      desc: "AI.VIENNE Studio+ allie les standards de l'esthétique du luxe traditionnel aux innovations neuronales.",
      card1Title: "Vision Humaine x Précision IA",
      card1Desc: "Nous n'utilisons pas l'IA pour remplacer la direction artistique, mais pour amplifier son excellence.",
      card2Title: "Zéro Contrainte de Production",
      card2Desc: "Défilés monumentaux et décors d'exception générés avec une résolution 8K d'une netteté absolue.",
      card3Title: "Prestige International",
      card3Desc: "Conçu pour répondre aux attentes des maisons de luxe de Paris, Milan, New York et Dubaï.",
      stat1Number: "8K",
      stat1Label: "Résolution Master",
      stat2Number: "100%",
      stat2Label: "Confidentialité (NDA)",
      stat3Number: "Global",
      stat3Label: "Réseau de Production",
    },
    portfolio: {
      tag: "Galerie Interactive",
      title: "Galerie Média & Vidéo Interactive",
      desc: "Galerie 8K enrichie d'effets caustiques interactifs et de prévisualisations cinématographiques.",
      filterAll: "Tous les Projets",
      filterJewelry: "Haute Joaillerie",
      filterFashion: "Haute Couture",
      filterWatch: "Haute Horlogerie",
      filterEyewear: "Lunettes de Luxe",
      filterPerfume: "Haute Parfumerie",
      filterVideo: "Vidéos de Campagne",
      playVideo: "Regarder la Vidéo",
    },
    transformation: {
      tag: "Transformation Neuronale",
      title: "Studio Traditionnel vs. AI.VIENNE 8K Master",
      desc: "Glissez le curseur interactif pour voir comment une photographie conventionnelle brute se transforme en art de luxe neural.",
      beforeLabel: "Capturée Brut Traditionnel",
      afterLabel: "Rendu Master AI.VIENNE 8K",
    },
    services: {
      title: "Services de Production Sur Mesure",
      subtitle: "Solutions visuelles par IA conçues pour les marques de prestige",
      s1Title: "Vidéo Mode Cinématographique",
      s1Desc: "Films de défilés et de campagnes dynamiques en 8K façonnés pour votre marque.",
      s2Title: "Campagne Haute Joaillerie",
      s2Desc: "Productions visuelles de haute précision axées sur la lumière et le détail.",
      s3Title: "Stratégie de Marque IA",
      s3Desc: "Direction artistique et identité visuelle stratégique pour votre prestige numérique.",
    },
    workflow: {
      tag: "Notre Méthodologie",
      title: "Production de Luxe en 4 Étapes",
      step1Title: "Brief & Concept",
      step1Desc: "Analyse de l'ADN de votre maison et de vos collections.",
      step2Title: "Génération par IA",
      step2Desc: "Rendu visuel et animation 8K via des modèles neuronaux avancés.",
      step3Title: "Post-Production Créative",
      step3Desc: "Étalonnage et composition perfectionnés aux normes studio.",
      step4Title: "Livraison Finale",
      step4Desc: "Livraison de fichiers maîtres optimisés pour vos campagnes mondial.",
    },
    estimator: {
      tag: "Outil Interactif",
      title: "Calculateur de Budget et de Portée",
      desc: "Configurez vos exigences de production de luxe pour estimer l'échelle d'investissement du projet.",
      scaleLabel: "Niveau de Production / Portée",
      tier1: "Actif Unique Haut de Gamme (Rendu Macro / Fixe)",
      tier2: "Package Campagne 8K Saisonnier (Actifs Multiples)",
      tier3: "Suite Complète Film Défilé & Jumeau Numérique",
      deliveryLabel: "Vitesse de Livraison",
      standard: "Délai Studio Standard (10-14 Jours)",
      express: "Livraison Prioritaire Haute Couture (3-5 Jours)",
      estInvestment: "Échelle d'Investissement Estimée :",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "Portail Client",
      title: "Coffre-Fort VIP & Livrables Sécurisés",
      desc: "Entrez vos identifiants d'accès exécutif pour consulter en toute sécurité les rendus et fichiers maîtres 8K.",
      passPlaceholder: "Entrez le code d'accès VIP (ex. AIVIENNE-VIP)",
      loginBtn: "Accéder au Coffre-Fort",
      errorMsg: "Identifiants invalides. Contactez info@aivienne.com pour habilitation.",
      successMsg: "Accès Autorisé : Bienvenue dans le coffre-fort sécurisé.",
      vaultTitle: "Archive Exécutive Sécurisée (Filigrane Dynamique Actif)",
      downloadAsset: "Télécharger l'Actif Master",
      watermarkNotice: "Sous licence exclusive NDA pour Partenaire Exécutif AI.VIENNE.",
    },
    faq: {
      tag: "FAQ",
      title: "Foire Aux Questions",
      desc: "Lignes directrices essentielles concernant l'ingénierie visuelle, la précision des matériaux et les modèles de collaboration confidentiels.",
      q1: "Quel est le délai de production pour un jumeau numérique 8K ou un visuel de campagne ?",
      a1: "Alors que les prises de vue traditionnelles prennent des mois, notre pipeline de production neuronale livre des campagnes 8K en 5 à 10 jours ouvrables.",
      q2: "Utilisez-vous des modèles génériques ou des shaders neuronaux sur mesure ?",
      a2: "Nous n'utilisons jamais de modèles génériques. Chaque shader neural, configuration d'éclairage et avatar est conçu sur mesure pour votre maison de luxe.",
      q3: "Comment gérez-vous la Propriété Intellectuelle, le NDA et la sécurité des actifs ?",
      a3: "Nous opérons sous discrétion absolue. Tous les designs inédits et fichiers CAO sont sécurisés par des cadres stricts de NDA bilatéraux.",
      q4: "Comment initier une consultation ou un engagement mensuel ?",
      a4: "Vous pouvez soumettre votre brief via notre formulaire ci-dessous ou contacter notre bureau exécutif à info@aivienne.com.",
    },
    testimonials: {
      tag: "Témoignages",
      title: "La Confiance des Leaders du Luxe",
      desc: "Ce que disent les directeurs artistiques et exécutifs de leur collaboration avec AI.VIENNE Studio+.",
      t1Quote: "AI.VIENNE Studio+ a livré une campagne joaillerie 8K qui a surpassé la photographie studio classique.",
      t1Author: "Elena Rostova",
      t1Role: "Directrice Artistique, Haute Joaillerie (Genève)",
      t2Quote: "La vidéo de défilé générée pour notre semaine de la mode a redéfini nos standards de présentation numérique.",
      t2Author: "Marcus Vance",
      t2Role: "Vice-Président de Marque, Haute Couture (Paris)",
      t3Quote: "Exécution irréprochable, respect strict du NDA et maîtrise absolue des codes de l'esthétique du luxe.",
      t3Author: "Sophia Chen",
      t3Role: "Directrice Marketing, Accessoires de Prestige (Milan)",
      t4Quote: "Le niveau de détail rendu pour notre collection de haute horlogerie à Dubaï était spectaculaire.",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "Directeur Général, Horlogerie Royale (Dubaï)",
      t5Quote: "Notre collaboration nous a permis de lancer une campagne 8K en quelques jours seulement.",
      t5Author: "Claire Dubois",
      t5Role: "Stratège Internationale, Mode de Luxe (New York)",
      t6Quote: "Les modèles neuronaux ont capturé les reflets de lumière sur nos pierres précieuses avec perfection.",
      t6Author: "Kenji Takahashi",
      t6Role: "Designer Visuel Senior, Joaillerie (Tokyo)",
      t7Quote: "Esthétique raffinée et sophistication à la hauteur des grandes maisons de tradition européenne.",
      t7Author: "Maximilian Von Berg",
      t7Role: "Directeur Artistique, Atelier du Patrimoine (Vienne)",
      t8Quote: "Un partenaire indispensable pour des campagnes numériques haut de gamme exigeant une rapidité absolue.",
      t8Author: "Victoria Sterling",
      t8Role: "Directrice Marketing, Club Privé de Luxe (Londres)",
      addReviewBtn: "Laisser un Avis",
      reviewTitle: "Soumettre Votre Témoignage",
      reviewDesc: "Partagez votre expérience de collaboration avec AI.VIENNE Studio+.",
      nameLabel: "Votre Nom",
      roleLabel: "Poste / Nom de Marque",
      ratingLabel: "Note",
      commentLabel: "Votre Avis / Commentaire",
      submitReview: "Soumettre l'Avis",
    },
    contact: {
      tag: "Initiez Votre Projet",
      title: "Demander une Proposition Sur Mesure",
      desc: "Associez-vous à AI.VIENNE Studio+ pour repousser les limites de la création.",
      namePlaceholder: "Votre Nom / Nom de Marque",
      emailPlaceholder: "Adresse E-mail",
      serviceLabel: "Sélectionnez le Service Souhaité",
      sOpt1: "Cinematic Fashion & Runway Video (8K)",
      sOpt2: "High Jewelry & Gemstone Campaign",
      sOpt3: "Haute Horlogerie & Timepiece Visuals",
      sOpt4: "Haute Parfumerie & Beauty Campaign",
      sOpt5: "Luxury Eyewear & Optics Production",
      sOpt6: "Bespoke Product & High-End Photography",
      sOpt7: "AI Brand Identity & Visual Strategy",
      sOpt8: "Full Digital Runway & Campaign Production",
      uploadTitle: "Télécharger les Médias du Produit",
      uploadHint: "Glissez-déposez ou touchez pour sélectionner des Images, Vidéos ou Fichiers (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "Parlez-nous de votre projet ou de votre collection...",
      submitBtn: "Envoyer le Brief",
      directEmail: "Contact Direct: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / NAVIGATION",
      dirTitle: "02 / ANNUAIRE",
      netTitle: "03 / RÉSEAU",
      studio: "Le Studio",
      works: "Projets Sélectionnés",
      initiate: "Initier Contact",
      capabilities: "Capacités",
      cities: "New York | Londres | Paris | Milan | Dubaï | Vienne | Global",
      terms: "CONDITIONS GÉNÉRALES",
      privacy: "POLITIQUE DE CONFIDENTIALITÉ",
    },
    modals: {
      termsTitle: "Conditions Générales d'Engagement",
      termsBody: "Dès le règlement final, la totalité des droits commerciaux globaux sur les fichiers 8K est transférée au Client. Les visuels créés ne sont jamais utilisés pour entraîner des modèles publics d'IA.",
      privacyTitle: "Politique de Confidentialité & NDA",
      privacyBody: "Toutes les informations et visuels partagés sont strictement protégés par des accords de confidentialité (NDA). Données uniquement destinées aux échanges B2B.",
    },
    footer: "© 2026 AI.VIENNE Studio. Tous droits réservés.",
  },
  IT: {
    nav: { portfolio: "Portfolio", about: "Chi Siamo", services: "Servizi", workflow: "Metodo", transformation: "Transformazione", testimonials: "Testimonianze", faq: "FAQ", calculator: "Preventivo", portal: "Portale VIP", contact: "Contatti", cta: "CONTATTACI" },
    hero: {
      badge: "Agenzia di Contenuti di Lusso con IA",
      titleStart: "Elevando l'Alta Moda e l'Alta Gioielleria con",
      titleGradient: "l'Intelligenza Artificiale",
      desc: "AI.VIENNE Studio+ crea immagini cinematografiche ultra-realistiche e produzioni visive di alto livello per marchi di lusso.",
      btnPrimary: "Esplora il Portfolio",
      btnSecondary: "Contatto: info@aivienne.com",
    },
    manifesto: {
      sub: "LA NOSTRA FILOSOFIA",
      line1: "Non seguiamo i trend.",
      line2: "ARCHITETTIAMO UNIVERSI SENZA TEMPO.",
    },
    about: {
      tag: "La Nostra Visione",
      title: "Dove l'Alta Moda Incontra l'Arte Neurale",
      desc: "AI.VIENNE Studio+ unisce i tradizionali canoni estetici del lusso con la generazione neurale d'avanguardia.",
      card1Title: "Visione Umana x Precisione IA",
      card1Desc: "Non sostituiamo la direzione artistica; ne amplifichiamo il valore stilistico.",
      card2Title: "Zero Vincoli di Produzione",
      card2Desc: "Set fotografici e scenografie complesse generati in risoluzione 8K d'eccellenza.",
      card3Title: "Standard di Prestigio Globale",
      card3Desc: "Ideato per soddisfare i requisiti delle grandi maison di Milano, Parigi e New York.",
      stat1Number: "8K",
      stat1Label: "Risoluzione Master",
      stat2Number: "100%",
      stat2Label: "Riservatezza (NDA)",
      stat3Number: "Global",
      stat3Label: "Rete di Produzione",
    },
    portfolio: {
      tag: "Vetrina Interattiva",
      title: "Galleria Media & Video Interattiva",
      desc: "Galleria 8K arricchita con effetti caustici interattivi e anteprime cinematografiche di lusso.",
      filterAll: "Tutte le Opere",
      filterJewelry: "Alta Gioielleria",
      filterFashion: "Alta Moda",
      filterWatch: "Alta Orologeria",
      filterEyewear: "Occhiali di Lusso",
      filterPerfume: "Alta Profumeria",
      filterVideo: "Video Campagne",
      playVideo: "Guarda il Video",
    },
    transformation: {
      tag: "Transformazione Neurale",
      title: "Studio Tradizionale vs. AI.VIENNE 8K Master",
      desc: "Trascina il cursore interattivo per scoprire come la fotografia convenzionale si trasforma in estetica di lusso neurale.",
      beforeLabel: "Scatto Grezzo Tradizionale",
      afterLabel: "Render Master AI.VIENNE 8K",
    },
    services: {
      title: "Servizi di Produzione Su Misura",
      subtitle: "Soluzioni visive basate su IA progettate per marchi di prestigio",
      s1Title: "Video di Moda Cinematografico",
      s1Desc: "Film di sfilate e campagne dinamiche in 8K creati su misura per la tua casa di moda.",
      s2Title: "Campagna Alta Gioielleria",
      s2Desc: "Produzioni visive ad alta precisione incentrate su luce e maestria artigianale.",
      s3Title: "Strategia di Brand IA",
      s3Desc: "Direzione artistica e identità visiva strategica per elevare il prestigio digitale.",
    },
    workflow: {
      tag: "La Nostra Metodologia",
      title: "Produzione di Lusso in 4 Passi",
      step1Title: "Brief e Concept",
      step1Desc: "Analisi del DNA del tuo marchio e dei dettagli della collezione.",
      step2Title: "Generazione IA",
      step2Desc: "Rendering di immagini e movimenti in 8K tramite modelli neurali avanzati.",
      step3Title: "Post-Produzione Creativa",
      step3Desc: "Perfezionamento del colore e dell'illuminazione secondo gli standard di studio.",
      step4Title: "Consegna Finale",
      step4Desc: "Consegna di file ad alta definizione pronti per le tue campagne.",
    },
    estimator: {
      tag: "Strumento Interattivo",
      title: "Calcolatore di Budget e Portata",
      desc: "Configura i tuoi requisiti di produzione di lusso per stimare la scala di investimento del progetto.",
      scaleLabel: "Livello di Produzione / Portata",
      tier1: "Asset Singolo di Alto Livello (Render Macro / Fisso)",
      tier2: "Pacchetto Campagna 8K Stale (Asset Multipli)",
      tier3: "Suite Completa Sfilata Cinematografica e Digital Twin",
      deliveryLabel: "Velocità di Consegna",
      standard: "Tempistiche Studio Standard (10-14 Giorni)",
      express: "Consegna Prioritaria Haute Couture (3-5 Giorni)",
      estInvestment: "Scala di Investimento Stimata:",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "Portale Clienti",
      title: "Vault VIP e Deliverable Sicuri",
      desc: "Inserisci le tue credenziali di accesso esecutivo per esaminare in sicurezza i render e i master 8K.",
      passPlaceholder: "Inserisci codice VIP (es. AIVIENNE-VIP)",
      loginBtn: "Accedi al Vault Sicuro",
      errorMsg: "Credenziali non valide. Contatta info@aivienne.com per l'autorizzazione.",
      successMsg: "Accesso Consentito: Benvenuto nel Vault Clienti Sicuro.",
      vaultTitle: "Archivio Esecutivo Sicuro (Protetto da Filigrana Dinamica)",
      downloadAsset: "Scarica Asset Master",
      watermarkNotice: "Concesso in licenza esclusiva NDA per Partner Esecutivo AI.VIENNE.",
    },
    faq: {
      tag: "FAQ",
      title: "Domande Frequenti",
      desc: "Linee guida essenziali sulla nostra ingegneria visiva, accuratezza dei materiali e modelli di collaborazione confidenziale.",
      q1: "Qual è la tempistica di produzione per un digital twin 8K o un visivo di campagna?",
      a1: "Mentre i set tradizionali richiedono mesi, la nostra pipeline neurale consegna campagne 8K in 5-10 giorni lavorativi.",
      q2: "Utilizzate modelli generici o shader neurali personalizzati?",
      a2: "Non usiamo mai template generici. Ogni shader neurale e avatar è progettato su misura per il DNA estetico della vostra maison.",
      q3: "Come gestite la Proprietà Intellettuale, la conformità NDA e la sicurezza degli asset?",
      a3: "Operiamo con assoluta discrezione. Tutti i progetti e file CAD sono protetti da rigorosi accordi NDA bilaterali.",
      q4: "Come possiamo avviare una consulenza o un accordo di retainer mensile?",
      a4: "Potete inviare il vostro brief tramite il modulo sottostante o contattare la nostra direzione a info@aivienne.com.",
    },
    testimonials: {
      tag: "Testimonianze",
      title: "La Fiducia dei Leader del Lusso",
      desc: "Cosa dicono i direttori creativi e i manager della collaborazione con AI.VIENNE Studio+.",
      t1Quote: "AI.VIENNE Studio+ ha realizzato una campagna di alta gioielleria in 8K che ha superato la fotografia tradizionale.",
      t1Author: "Elena Rostova",
      t1Role: "Direttore Creativo, Maison di Gioielleria (Ginevra)",
      t2Quote: "Il video della sfilata generato per la settimana della moda ha ridefinito i nostri standard di presentazione.",
      t2Author: "Marcus Vance",
      t2Role: "Vicepresidente del Brand, Alta Moda (Parigi)",
      t3Quote: "Esecuzione impeccabile, totale rispetto dell'accordo NDA e profonda comprensione del lusso.",
      t3Author: "Sophia Chen",
      t3Role: "Head of Marketing, Accessori di Lusso (Milano)",
      t4Quote: "I dettagli della collezione d'alta orologeria a Dubai erano straordinari. Una rivoluzione per il Medio Oriente.",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "Direttore Generale, Orologeria Reale (Dubai)",
      t5Quote: "Abbiamo lanciato una campagna globale in 8K in pochissimi giorni grazie all'efficienza del loro team.",
      t5Author: "Claire Dubois",
      t5Role: "Brand Strategist, Moda di Lusso (New York)",
      t6Quote: "La resa visiva e i riflessi sulle pietre preziose sono stati resi con una precisione impeccabile.",
      t6Author: "Kenji Takahashi",
      t6Role: "Visual Designer, Alta Gioielleria (Tokyo)",
      t7Quote: "Estetica raffinata e un livello di sofisticazione che rende onore alla tradizione del lusso europeo.",
      t7Author: "Maximilian Von Berg",
      t7Role: "Direttore Artistico, Atelier di Lusso (Vienna)",
      t8Quote: "Partner ideale per campagne digitali ad alto impatto che richiedono rapidità e qualità assoluta.",
      t8Author: "Victoria Sterling",
      t8Role: "Direttore Marketing, Club Privato (Londra)",
      addReviewBtn: "Lascia una Recensione",
      reviewTitle: "Invia la Tua Recensione",
      reviewDesc: "Condividi la tua esperienza di collaborazione con AI.VIENNE Studio+.",
      nameLabel: "Il Tuo Nome",
      roleLabel: "Ruolo / Nome Brand",
      ratingLabel: "Valutazione",
      commentLabel: "La Tua Recensione",
      submitReview: "Invia Recensione",
    },
    contact: {
      tag: "Inizia il Tuo Progetto",
      title: "Richiedi una Proposta Su Misura",
      desc: "Collabora con AI.VIENNE Studio+ per superare i limiti della creazione di contenuti.",
      namePlaceholder: "Il tuo Nome / Nome del Brand",
      emailPlaceholder: "Indirizzo Email",
      serviceLabel: "Seleziona il Servizio Desiderato",
      sOpt1: "Cinematic Fashion & Runway Video (8K)",
      sOpt2: "High Jewelry & Gemstone Campaign",
      sOpt3: "Haute Horlogerie & Timepiece Visuals",
      sOpt4: "Haute Parfumerie & Beauty Campaign",
      sOpt5: "Luxury Eyewear & Optics Production",
      sOpt6: "Bespoke Product & High-End Photography",
      sOpt7: "AI Brand Identity & Visual Strategy",
      sOpt8: "Full Digital Runway & Campaign Production",
      uploadTitle: "Carica Media o File del Prodotto",
      uploadHint: "Trascina o tocca per selezionare Immagini, Video o Documenti (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "Raccontaci del tuo progetto o della tua collezione...",
      submitBtn: "Invia Brief Progetto",
      directEmail: "Contatto Diretto: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / NAVIGAZIONE",
      dirTitle: "02 / DIRECTORY",
      netTitle: "03 / NETWORK",
      studio: "Lo Studio",
      works: "Opere Selezionate",
      initiate: "Inizia Contatto",
      capabilities: "Capacità",
      cities: "New York | Londra | Parigi | Milano | Dubai | Vienna | Global",
      terms: "TERMINI E CONDIZIONI",
      privacy: "INFORMATIVA SULLA PRIVACY",
    },
    modals: {
      termsTitle: "Termini e Condizioni di Servizio",
      termsBody: "Tutti i diritti d'uso sui master 8K passano al Cliente a saldo del progetto. I modelli e gli asset del brand non vengono mai condivisi né usati per l'addestramento di IA pubbliche.",
      privacyTitle: "Informativa sulla Privacy & NDA",
      privacyBody: "I dettagli della collezione e i file CAD sono tutelati da rigorosi accordi di riservatezza (NDA). Contatto per la gestione dati: info@aivienne.com.",
    },
    footer: "© 2026 AI.VIENNE Studio. Tutti i diritti riservati.",
  },
  DE: {
    nav: { portfolio: "Portfolio", about: "Über Uns", services: "Leistungen", workflow: "Ablauf", transformation: "Transformation", testimonials: "Referenzen", faq: "FAQ", calculator: "Rechner", portal: "VIP Portal", contact: "Kontakt", cta: "JETZT KONTAKTIEREN" },
    hero: {
      badge: "KI-Gestützte Luxus-Content-Agentur",
      titleStart: "Perfektionierung von High Fashion & Schmuck durch",
      titleGradient: "Künstliche Intelligenz",
      desc: "AI.VIENNE Studio+ kreiert ultra-realistische, kinematografische Bilder und visuelle Produktionen für weltweite Luxusmarken.",
      btnPrimary: "Portfolio Entdecken",
      btnSecondary: "Kontakt: info@aivienne.com",
    },
    manifesto: {
      sub: "UNSERE PHILOSOPHIE",
      line1: "Wir folgen keinen Trends.",
      line2: "WIR ERSCHAFFEN ZEITLOSE UNIVERSEN.",
    },
    about: {
      tag: "Unsere Vision",
      title: "Wo Haute Couture auf Neurale Kunst Trifft",
      desc: "AI.VIENNE Studio+ verbindet traditionelle Luxusästhetik mit innovativer KI-Generierung.",
      card1Title: "Menschliche Vision x KI-Präzision",
      card1Desc: "Wir ersetzen nicht die künstlerische Leitung; wir verstärken ihre Exzellenz.",
      card2Title: "Keine Physischen Grenzen",
      card2Desc: "Aufwendige Laufstege und Kulissen nahtlos in gestochen scharfer 8K-Auflösung.",
      card3Title: "Globale Prestigestandards",
      card3Desc: "Maßgeschneidert für die Ansprüche internationaler Luxushäuser.",
      stat1Number: "8K",
      stat1Label: "Master-Auflösung",
      stat2Number: "100%",
      stat2Label: "Geheimhaltung (NDA)",
      stat3Number: "Global",
      stat3Label: "Produktionsnetzwerk",
    },
    portfolio: {
      tag: "Interaktive Galerie",
      title: "Medien- & Video-Galerie",
      desc: "8K-Galerie, angereichert mit interaktiven Caustics-Lichteffekten und High-End-Cinematic-Vorschauen.",
      filterAll: "Alle Arbeiten",
      filterJewelry: "Luxusschmuck",
      filterFashion: "High Fashion",
      filterWatch: "Luxusuhren",
      filterEyewear: "Luxusbrillen",
      filterPerfume: "Haute Parfumerie",
      filterVideo: "Kampagnenvideos",
      playVideo: "Video Ansehen",
    },
    transformation: {
      tag: "Neurale Transformation",
      title: "Traditionelles Studio vs. AI.VIENNE 8K Master",
      desc: "Ziehen Sie den interaktiven Regler, um zu sehen, wie rohe konventionelle Fotografie in surreale neurale Luxusästhetik verwandelt wird.",
      beforeLabel: "Traditionelle Rohaufnahme",
      afterLabel: "AI.VIENNE 8K Master Render",
    },
    services: {
      title: "Maßgeschneiderte Produktionen",
      subtitle: "Visuelle KI-Lösungen entwickelt für weltbekannte Luxusmarken",
      s1Title: "Cinematic Fashion Video",
      s1Desc: "Dynamische 8K-KI-Laufstegfilme, maßgeschneidert für die Geschichte Ihrer Marke.",
      s2Title: "Luxus-Schmuck-Kampagne",
      s2Desc: "Präzise visuelle Produktionen mit Fokus auf Lichtreflexion und Handwerkskunst.",
      s3Title: "KI-Markenstrategie",
      s3Desc: "Strategische kreative Ausrichtung und visuelle Identität für digitale Präsenz.",
    },
    workflow: {
      tag: "Unsere Methodik",
      title: "Luxusproduktion in 4 Schritten",
      step1Title: "Briefing & Konzept",
      step1Desc: "Analyse Ihrer Marken-DNA und der Nuancen der Kollektion.",
      step2Title: "KI-Generierung",
      step2Desc: "Erstellung von 8K-Bildern und Animationen über neuronale Netzwerke.",
      step3Title: "Kreatives Post-Processing",
      step3Desc: "Perfektionierung von Farbgebung und Licht nach Studiostandards.",
      step4Title: "Finales Delivery",
      step4Desc: "Bereitstellung optimierter Masterdateien für weltweite Kampagnen.",
    },
    estimator: {
      tag: "Interaktives Tool",
      title: "Budget- und Umfangrechner",
      desc: "Konfigurieren Sie Ihre Luxusproduktionsanforderungen, um die geschätzte Projektinvestition zu berechnen.",
      scaleLabel: "Produktionsstufe / Umfang",
      tier1: "Einzelnes High-End-Asset (Makro-Render / Still)",
      tier2: "Saisonales 8K-Kampagnenpaket (Mehrere Assets)",
      tier3: "Vollständige Cinematic Runway-Film- und Digital Twin-Suite",
      deliveryLabel: "Liefergeschwindigkeit",
      standard: "Standard-Studio-Zeitplan (10–14 Tage)",
      express: "Prioritäre Haute Couture-Lieferung (3–5 Tage)",
      estInvestment: "Geschätzte Investitionsskala:",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "Kundenportal",
      title: "VIP-Tresor & Sichere Deliverables",
      desc: "Geben Sie Ihre zugewiesenen Executive-Zugangsdaten ein, um unveröffentlichte Renders sicher zu überprüfen.",
      passPlaceholder: "VIP-Zugangscode eingeben (z. B. AIVIENNE-VIP)",
      loginBtn: "Sicheren Tresor Öffnen",
      errorMsg: "Ungültige Anmeldeinformationen. Kontaktieren Sie info@aivienne.com.",
      successMsg: "Zugriff gewährt: Willkommen im sicheren Kunden-Tresor.",
      vaultTitle: "Sicheres Exekutiv-Archiv (Mit Live-Dynamischem Wasserzeichen)",
      downloadAsset: "Master-Asset herunterladen",
      watermarkNotice: "Exklusiv lizenziert unter NDA für AI.VIENNE Executive Partner.",
    },
    faq: {
      tag: "FAQ",
      title: "Häufig Gestellte Fragen",
      desc: "Wesentliche Richtlinien zu unserer visuellen Ingenieurskunst, Materialgenauigkeit und vertraulichen Zusammenarbeitsmodellen.",
      q1: "Wie ist der Produktionszeitplan für einen 8K Digital Twin oder Kampagnen-Visual?",
      a1: "Während traditionelle Shootings Monate der Planung erfordern, liefern unsere neuronalen Pipelines 8K-Kampagnen in 5 bis 10 Werktagen.",
      q2: "Verwenden Sie generische Templates oder maßgeschneiderte neuronale Shader?",
      a2: "Wir verwenden niemals generische Templates. Jeder Shader und Avatar wird maßgeschneidert für Ihre Luxusmarke entwickelt.",
      q3: "Wie gehen Sie mit geistigem Eigentum, NDA und Asset-Sicherheit um?",
      a3: "Wir arbeiten unter absoluter Diskretion. Alle unveröffentlichten Designs und CAD-Dateien sind durch strenge NDA-Rahmenwerke geschützt.",
      q4: "Wie leiten wir eine Beratung oder monatliche Betreuung ein?",
      a4: "Sie können Ihr Projektbriefing über das Formular einreichen oder sich direkt an info@aivienne.com wenden.",
    },
    testimonials: {
      tag: "Kundenmeinungen",
      title: "Vertrauen Internationaler Luxusmarken",
      desc: "Was Creative Directors über die Zusammenarbeit mit AI.VIENNE Studio+ berichten.",
      t1Quote: "AI.VIENNE Studio+ hat eine 8K-Schmuckkampagne geliefert, die klassische Fotografie in Bildschärfe und Tempo übertraf.",
      t1Author: "Elena Rostova",
      t1Role: "Creative Director, Luxusschmuck (Genf)",
      t2Quote: "Das KI-Laufstegvideo für unsere Couture-Woche hat unsere digitalen Präsentationsstandards neu definiert.",
      t2Author: "Marcus Vance",
      t2Role: "Vice President, Haute Couture (Paris)",
      t3Quote: "Makellose Ausführung, 100% Geheimhaltung und tiefes Verständnis für exklusive Ästhetik.",
      t3Author: "Sophia Chen",
      t3Role: "Marketingleiterin, Prestige-Accessoires (Mailand)",
      t4Quote: "Die Detailtiefe für unsere Luxusuhren-Kollektion in Dubai war atemberaubend. Ein bahnbrechender Erfolg.",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "Managing Director, Royal Watch & Jewelry (Dubai)",
      t5Quote: "Unsere Partnerschaft ermöglichte uns den Launch einer weltweiten 8K-Kampagne in Rekordzeit.",
      t5Author: "Claire Dubois",
      t5Role: "Brand Strategist, Luxusmode (New York)",
      t6Quote: "Die KI-Modelle haben die Lichtbrechung unserer Edelsteine in perfekter Präzision eingefangen.",
      t6Author: "Kenji Takahashi",
      t6Role: "Senior Visual Designer, Schmuck (Tokio)",
      t7Quote: "Exquisite Ästhetik und ein Niveau an Sophistication, das europäischen Traditionshäusern gerecht wird.",
      t7Author: "Maximilian Von Berg",
      t7Role: "Artistic Director, Heritage Atelier (Wien)",
      t8Quote: "Ein unverzichtbarer Partner für hochkarätige digitale Kampagnen mit höchstem Qualitätsanspruch.",
      t8Author: "Victoria Sterling",
      t8Role: "CMO, Private Luxury Club (London)",
      addReviewBtn: "Bewertung Abgeben",
      reviewTitle: "Ihre Referenz Einreichen",
      reviewDesc: "Teilen Sie Ihre Erfahrungen aus der Zusammenarbeit mit AI.VIENNE Studio+.",
      nameLabel: "Ihr Name",
      roleLabel: "Position / Markenname",
      ratingLabel: "Bewertung",
      commentLabel: "Ihre Erfahrung / Feedback",
      submitReview: "Bewertung Senden",
    },
    contact: {
      tag: "Starten Sie Ihr Projekt",
      title: "Individuelles Angebot Anfordern",
      desc: "Arbeiten Sie mit AI.VIENNE Studio+ zusammen, um neue Maßstäbe zu setzen.",
      namePlaceholder: "Ihr Name / Markenname",
      emailPlaceholder: "E-Mail-Adresse",
      serviceLabel: "Gewünschte Leistung Auswählen",
      sOpt1: "Cinematic Fashion & Runway Video (8K)",
      sOpt2: "High Jewelry & Gemstone Campaign",
      sOpt3: "Haute Horlogerie & Timepiece Visuals",
      sOpt4: "Haute Parfumerie & Beauty Campaign",
      sOpt5: "Luxury Eyewear & Optics Production",
      sOpt6: "Bespoke Product & High-End Photography",
      sOpt7: "AI Brand Identity & Visual Strategy",
      sOpt8: "Full Digital Runway & Campaign Production",
      uploadTitle: "Produktmedien oder Dateien Hochladen",
      uploadHint: "Dateien hierher ziehen oder tippen (Bilder, Videos, CAD, PDFs, ZIP)",
      messagePlaceholder: "Erzählen Sie uns von Ihrem Projekt...",
      submitBtn: "Projekt-Briefing Senden",
      directEmail: "Direktkontakt: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / NAVIGATION",
      dirTitle: "02 / VERZEICHNIS",
      netTitle: "03 / NETZWERK",
      studio: "Das Studio",
      works: "Ausgewählte Arbeiten",
      initiate: "Kontakt Aufnehmen",
      capabilities: "Fähigkeiten",
      cities: "New York | London | Paris | Mailand | Dubai | Wien | Global",
      terms: "AGB",
      privacy: "DATENSCHUTZERKLÄRUNG",
    },
    modals: {
      termsTitle: "Allgemeine Geschäftsbedingungen",
      termsBody: "Sämtliche kommerziellen Verwertungsrechte an den 8K-Renderings gehen nach vollständiger Bezahlung an den Kunden über. Keine Nutzung von Kundendaten für öffentliche KI-Modelle.",
      privacyTitle: "Datenschutzerklärung & NDA",
      privacyBody: "Unveröffentlichte Kollektionen sind durch strengste NDA-Protokolle geschützt. Rückfragen richten Sie bitte an info@aivienne.com.",
    },
    footer: "© 2026 AI.VIENNE Studio. Alle Rechte vorbehalten.",
  },
  ES: {
    nav: { portfolio: "Portafolio", about: "Nosotros", services: "Servicios", workflow: "Proceso", transformation: "Transformación", testimonials: "Opiniones", faq: "FAQ", calculator: "Calculadora", portal: "Portal VIP", contact: "Contacto", cta: "CONTÁCTANOS" },
    hero: {
      badge: "Agencia de Contenido de Lujo con IA",
      titleStart: "Elevando la Alta Costura y la Joyería Fina mediante",
      titleGradient: "Inteligencia Artificial",
      desc: "AI.VIENNE Studio+ crea imágenes cinematográficas ultra-realistas y producciones visuales de alto nivel para marcas de lujo.",
      btnPrimary: "Explorar Portafolio",
      btnSecondary: "Contacto: info@aivienne.com",
    },
    manifesto: {
      sub: "NUESTRA FILOSOFÍA",
      line1: "No seguimos tendencias.",
      line2: "ARQUITECTAMOS UNIVERSOS ATEMPORALES.",
    },
    about: {
      tag: "Nuestra Visión",
      title: "Donde la Alta Costura Encuentra el Arte Neuronal",
      desc: "AI.VIENNE Studio+ une los estándares del lujo tradicional con la vanguardia de la generación neuronal.",
      card1Title: "Visión Humana x Precisión IA",
      card1Desc: "No reemplazamos la dirección artística; potenciamos su nivel de excelencia.",
      card2Title: "Sin Restricciones Físicas",
      card2Desc: "Escenarios monumentales e iluminación compleja renderedos en resolución 8K.",
      card3Title: "Estándares Globales de Prestigio",
      card3Desc: "Diseñado para satisfacer las exigencias de casas de lujo en París, Milán y Nueva York.",
      stat1Number: "8K",
      stat1Label: "Resolución Master",
      stat2Number: "100%",
      stat2Label: "Confidencialidad (NDA)",
      stat3Number: "Global",
      stat3Label: "Alcance de Producción",
    },
    portfolio: {
      tag: "Muestra Interactiva",
      title: "Galería Interactiva de Medios y Video",
      desc: "Galería 8K enriquecida con efectos cáusticos interactivos y vistas previas cinematográficas de alta gama.",
      filterAll: "Todos los Trabajos",
      filterJewelry: "Alta Joyería",
      filterFashion: "Alta Costura",
      filterWatch: "Alta Relojería",
      filterEyewear: "Gafas de Lujo",
      filterPerfume: "Alta Perfumería",
      filterVideo: "Videos de Campaña",
      playVideo: "Ver Video",
    },
    transformation: {
      tag: "Transformación Neuronal",
      title: "Estudio Tradicional vs. AI.VIENNE 8K Master",
      desc: "Desliza el control interactivo para ver cómo la fotografía convencional se convierte en arte de lujo neural.",
      beforeLabel: "Captura Cruda Tradicional",
      afterLabel: "Render Master AI.VIENNE 8K",
    },
    services: {
      title: "Servicios de Producción a Medida",
      subtitle: "Soluciones visuales con IA diseñadas para marcas de prestigio",
      s1Title: "Video de Moda Cinematográfico",
      s1Desc: "Películas dinámicas en 8K adaptadas a la narrativa de su marca.",
      s2Title: "Campaña de Joyería de Lujo",
      s2Desc: "Producciones visuales de alta precisión centradas en la luz y los detalles.",
      s3Title: "Estrategia de Marca con IA",
      s3Desc: "Dirección creativa y marco visual para potenciar su presencia digital.",
    },
    workflow: {
      tag: "Nuestra Metodología",
      title: "Producción de Lujo en 4 Pasos",
      step1Title: "Brief y Concepto",
      step1Desc: "Análisis del ADN de su marca y los detalles de la colección.",
      step2Title: "Generación con IA",
      step2Desc: "Creación de imágenes y movimiento en 8K mediante modelos neuronales.",
      step3Title: "Postproducción Creativa",
      step3Desc: "Perfeccionamiento de iluminación y color con estándares de estudio.",
      step4Title: "Entrega Final",
      step4Desc: "Archivos en alta definición listos para sus campañas publicitarias.",
    },
    estimator: {
      tag: "Herramienta Interactiva",
      title: "Calculadora de Presupuesto y Alcance",
      desc: "Configure sus requisitos de producción de lujo para estimar la escala de inversión del proyecto.",
      scaleLabel: "Nivel de Producción / Alcance",
      tier1: "Activo Único de Alto Nivel (Render Macro / Fijo)",
      tier2: "Paquete de Campaña 8K de Temporada (Activos Múltiples)",
      tier3: "Suite Completa de Cine Pasarela y Gemelo Digital",
      deliveryLabel: "Velocidad de Entrega",
      standard: "Cronograma de Estudio Estándar (10-14 Días)",
      express: "Entrega Prioritaria Haute Couture (3-5 Días)",
      estInvestment: "Escala de Inversión Estimada:",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "Portal de Clientes",
      title: "Bóveda VIP y Entregables Seguros",
      desc: "Ingrese sus credenciales de acceso ejecutivo para revisar de forma segura los renders y archivos 8K.",
      passPlaceholder: "Ingrese código VIP (ej. AIVIENNE-VIP)",
      loginBtn: "Acceder a Bóveda Segura",
      errorMsg: "Credenciales no válidas. Contacte a info@aivienne.com para autorización.",
      successMsg: "Acceso Concedido: Bienvenido a la Bóveda de Clientes.",
      vaultTitle: "Archivo Ejecutivo Seguro (Protegido con Marca de Agua Dinámica)",
      downloadAsset: "Descargar Activo Master",
      watermarkNotice: "Licenciado exclusivamente bajo NDA para Socio Ejecutivo AI.VIENNE.",
    },
    faq: {
      tag: "FAQ",
      title: "Preguntas Frecuentes",
      desc: "Pautas esenciales sobre nuestra ingeniería visual, precisión de materiales y modelos de compromiso confidencial.",
      q1: "¿Cuál es el cronograma de producción para un gemelo digital 8K o visual de campaña?",
      a1: "Mientras que las sesiones tradicionales tardan meses, nuestro pipeline neuronal entrega campañas 8K en 5 a 10 días hábiles.",
      q2: "¿Utilizan plantillas genéricas o shaders neuronales personalizados?",
      a2: "Nunca usamos plantillas genéricas. Cada shader y avatar se diseña a medida para el ADN estético de su casa de lujo.",
      q3: "¿Cómo manejan la Propiedad Intelectual, el NDA y la seguridad de los activos?",
      a3: "Operamos bajo absoluta discreción. Todos los diseños y archivos CAD están protegidos por estrictos marcos NDA.",
      q4: "¿Cómo iniciamos una consulta o un acuerdo de retainer mensual?",
      a4: "Puede enviar su brief a través del formulario o contactarnos directamente en info@aivienne.com.",
    },
    testimonials: {
      tag: "Testimonios",
      title: "Líderes Globales Confían en Nosotros",
      desc: "Lo que opinan los directores creativos sobre su trabajo con AI.VIENNE Studio+.",
      t1Quote: "AI.VIENNE Studio+ entregó una campaña de joyería en 8K que superó a la fotografía de estudio tradicional.",
      t1Author: "Elena Rostova",
      t1Role: "Directora Creativa, Alta Joyería (Ginebra)",
      t2Quote: "El video del desfile redefinió por completo nuestros estándares de presentación digital.",
      t2Author: "Marcus Vance",
      t2Role: "Vicepresidente de Marca, Alta Costura (París)",
      t3Quote: "Ejecución impecable, estricto cumplimiento del NDA y pleno dominio de la estética del lujo.",
      t3Author: "Sophia Chen",
      t3Role: "Directora de Marketing, Accesorios de Lujo (Milán)",
      t4Quote: "El nivel de detalle logrado para nuestra colección de alta relojería en Dubái fue impresionante.",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "Director General, Relojería Real (Dubái)",
      t5Quote: "Nuestra colaboración nos permitió lanzar una campaña en 8K en tiempo récord.",
      t5Author: "Claire Dubois",
      t5Role: "Estratega de Marca, Moda de Lujo (Nueva York)",
      t6Quote: "Modelos neuronales que capturaron la refracción de nuestras gemas con suma precisión.",
      t6Author: "Kenji Takahashi",
      t6Role: "Diseñador Visual Senior, Joyería Fina (Tokio)",
      t7Quote: "Estética refinada y sofisticación a la altura de las marcas tradicionales europeas.",
      t7Author: "Maximilian Von Berg",
      t7Role: "Director Artístico, Atelier del Patrimonio (Viena)",
      t8Quote: "Un socio indispensable para campañas digitales de alto nivel que requieren calidad y rapidez.",
      t8Author: "Victoria Sterling",
      t8Role: "Directora de Marketing, Club Privado de Lujo (Londres)",
      addReviewBtn: "Dejar una Opinión",
      reviewTitle: "Envíe su Testimonio",
      reviewDesc: "Comparta su experiencia de colaboración con AI.VIENNE Studio+.",
      nameLabel: "Su Nombre",
      roleLabel: "Cargo / Nombre de Marca",
      ratingLabel: "Valoración",
      commentLabel: "Su Reseña / Comentario",
      submitReview: "Enviar Opinión",
    },
    contact: {
      tag: "Inicie su Proyecto",
      title: "Solicite una Propuesta a Medida",
      desc: "Colabore con AI.VIENNE Studio+ para llevar su contenido al siguiente nivel.",
      namePlaceholder: "Su Nombre / Nombre de Marca",
      emailPlaceholder: "Correo Electrónico",
      serviceLabel: "Seleccione el Servicio Deseado",
      sOpt1: "Cinematic Fashion & Runway Video (8K)",
      sOpt2: "High Jewelry & Gemstone Campaign",
      sOpt3: "Haute Horlogerie & Timepiece Visuals",
      sOpt4: "Haute Parfumerie & Beauty Campaign",
      sOpt5: "Luxury Eyewear & Optics Production",
      sOpt6: "Bespoke Product & High-End Photography",
      sOpt7: "AI Brand Identity & Visual Strategy",
      sOpt8: "Full Digital Runway & Campaign Production",
      uploadTitle: "Subir Archivos o Imágenes del Producto",
      uploadHint: "Arrastre o toque para seleccionar imágenes, videos o documentos (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "Cuéntenos sobre su proyecto o colección...",
      submitBtn: "Enviar Brief de Proyecto",
      directEmail: "Contacto Directo: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / NAVEGACIÓN",
      dirTitle: "02 / DIRECTORIO",
      netTitle: "03 / RED",
      studio: "El Estudio",
      works: "Trabajos Seleccionados",
      initiate: "Iniciar Contacto",
      capabilities: "Capacidades",
      cities: "Nueva York | Londres | París | Milán | Dubái | Viena | Global",
      terms: "TÉRMINOS Y CONDICIONES",
      privacy: "POLÍTICA DE PRIVACIDAD",
    },
    modals: {
      termsTitle: "Términos y Condiciones",
      termsBody: "Todos los derechos comerciales globales sobre el material 8K se transfieren al cliente tras el pago final. Ningún material se usa para entrenar IA pública.",
      privacyTitle: "Política de Privacidad y NDA",
      privacyBody: "Sus colecciones inéditas y material estratégico están blindados por acuerdos de confidencialidad (NDA). Contacto: info@aivienne.com.",
    },
    footer: "© 2026 AI.VIENNE Studio. Todos los derechos reservados.",
  },
  PT: {
    nav: { portfolio: "Portfólio", about: "Sobre", services: "Serviços", workflow: "Processo", transformation: "Transformação", testimonials: "Depoimentos", faq: "FAQ", calculator: "Calculadora", portal: "Portal VIP", contact: "Contato", cta: "FALE CONOSCO" },
    hero: {
      badge: "Agência de Conteúdo de Luxo com IA",
      titleStart: "Elevando a Alta Costura e a Alta Joalheria através da",
      titleGradient: "Inteligência Artificial",
      desc: "O AI.VIENNE Studio+ cria imagens cinematográficas ultra-realistas e produções visuais exclusivas para marcas de luxo.",
      btnPrimary: "Explorar Portfólio",
      btnSecondary: "Contato: info@aivienne.com",
    },
    manifesto: {
      sub: "NOSSA FILOSOFIA",
      line1: "Não seguimos tendências.",
      line2: "ARQUITETAMOS UNIVERSOS ATEMPORAIS.",
    },
    about: {
      tag: "Nossa Visão",
      title: "Onde a Alta Costura Encontra a Arte Neural",
      desc: "O AI.VIENNE Studio+ combina a estética do luxo tradicional com a criação por inteligência artificial.",
      card1Title: "Visão Humana x Precisão de IA",
      card1Desc: "Não substituímos a direção de arte; amplificamos a sua essência criativa.",
      card2Title: "Sem Limites de Produção",
      card2Desc: "Cenários de desfiles e produções complexas renderizadas em resolução 8K.",
      card3Title: "Padrões Globais de Prestígio",
      card3Desc: "Desenvolvido para atender às demandas de marcas em Paris, Milão e Nova York.",
      stat1Number: "8K",
      stat1Label: "Resolução Master",
      stat2Number: "100%",
      stat2Label: "Confidencialidade (NDA)",
      stat3Number: "Global",
      stat3Label: "Rede de Produção",
    },
    portfolio: {
      tag: "Galeria Interativa",
      title: "Galeria Interativa de Mídia e Vídeo",
      desc: "Galeria 8K enriquecida avec efeitos caústicos interativos e previews cinematográficos de alto padrão.",
      filterAll: "Todos os Trabalhos",
      filterJewelry: "Alta Joalheria",
      filterFashion: "Alta Costura",
      filterWatch: "Alta Relojoaria",
      filterEyewear: "Óculos de Luxo",
      filterPerfume: "Alta Perfumaria",
      filterVideo: "Vídeos de Campanha",
      playVideo: "Assistir Vídeo",
    },
    transformation: {
      tag: "Transformação Neural",
      title: "Estúdio Tradicional vs. AI.VIENNE 8K Master",
      desc: "Arraste o controle interativo para ver como a fotografia convencional se transforma em arte de luxo neural.",
      beforeLabel: "Captura Crua Tradicional",
      afterLabel: "Render Master AI.VIENNE 8K",
    },
    services: {
      title: "Serviços de Produção Exclusivos",
      subtitle: "Soluções visuais de IA desenvolvidas para marcas de prestígio",
      s1Title: "Vídeo de Moda Cinematográfico",
      s1Desc: "Filmes dinâmicos em 8K adaptados à narrativa da sua marca.",
      s2Title: "Campanha de Joalheria de Luxo",
      s2Desc: "Produções visuais de alta precisão focadas na luz e detalhes artesanais.",
      s3Title: "Estratégia de Marca com IA",
      s3Desc: "Direção criativa e identidade visual para elevar seu prestígio digital.",
    },
    workflow: {
      tag: "Nossa Metodologia",
      title: "Produção de Luxo em 4 Etapas",
      step1Title: "Briefing e Conceito",
      step1Desc: "Análise do DNA da sua marca e detalhes da coleção.",
      step2Title: "Geração por IA",
      step2Desc: "Renderização de imagens e movimentos em 8K por modelos neurais.",
      step3Title: "Pós-Produção Criativa",
      step3Desc: "Ajustes de cor e iluminação para alcançar a perfeição de estúdio.",
      step4Title: "Entrega Final",
      step4Desc: "Entrega de arquivos em alta definição prontos para suas campanhas.",
    },
    estimator: {
      tag: "Ferramenta Interativa",
      title: "Calculadora de Orçamento e Escopo",
      desc: "Configure seus requisitos de produção de luxo para estimar la escala de inversión del proyecto.",
      scaleLabel: "Nível de Produção / Escopo",
      tier1: "Ativo Único de Alto Padrão (Render Macro / Fixo)",
      tier2: "Pacote de Campanha 8K Sazonal (Múltiplos Ativos)",
      tier3: "Suíte Completa de Desfile Cinematográfico e Digital Twin",
      deliveryLabel: "Velocidade de Entrega",
      standard: "Cronograma de Estúdio Padrão (10-14 Dias)",
      express: "Entrega Prioritária Haute Couture (3-5 Dias)",
      estInvestment: "Escala de Investimento Estimada:",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "Portal do Cliente",
      title: "Cofre VIP e Entregáveis Seguros",
      desc: "Insira suas credenciais de acesso executivo para revisar com segurança os renders e arquivos 8K.",
      passPlaceholder: "Insira o código VIP (ex. AIVIENNE-VIP)",
      loginBtn: "Acessar Cofre Seguro",
      errorMsg: "Credenciais inválidas. Contate info@aivienne.com para autorização.",
      successMsg: "Acesso Concedido: Bem-vindo ao Cofre de Clientes Seguro.",
      vaultTitle: "Arquivo Executivo Seguro (Protegido com Marca d'Água Dinámica)",
      downloadAsset: "Baixar Ativo Master",
      watermarkNotice: "Licenciado exclusivamente sob NDA para Parceiro Executivo AI.VIENNE.",
    },
    faq: {
      tag: "FAQ",
      title: "Perguntas Frequentes",
      desc: "Diretrizes essenciais sobre nossa engenharia visual, precisão de materiais e modelos de engajamento confidenciais.",
      q1: "Qual é o cronograma de produção para um gêmeo digital 8K ou visual de campanha?",
      a1: "Enquanto as filmagens tradicionais levam meses, nosso pipeline neural entrega campanhas 8K em 5 a 10 dias úteis.",
      q2: "Vocês usam modelos genéricos ou shaders neurais personalizados?",
      a2: "Nunca usamos modelos genéricos. Cada shader e avatar é projetado sob medida para a sua marca de luxo.",
      q3: "Como vocês lidam com Propriedade Intelectual, NDA e segurança de ativos?",
      a3: "Operamos sob absoluta discrição. Todos os designs e arquivos CAD são protegidos por rigorosos acordos NDA.",
      q4: "Como iniciamos uma consultoria ou um acordo de retainer mensal?",
      a4: "Você pode enviar seu brief pelo formulário ou entrar em contato diretamente em info@aivienne.com.",
    },
    testimonials: {
      tag: "Depoimentos",
      title: "A Confiança dos Líderes do Luxo",
      desc: "O que os diretores criativos dizem sobre a parceria com o AI.VIENNE Studio+.",
      t1Quote: "O AI.VIENNE Studio+ entregou uma campanha de joalheria em 8K que superou a fotografia tradicional.",
      t1Author: "Elena Rostova",
      t1Role: "Diretora Criativa, Alta Joalheria (Genebra)",
      t2Quote: "O vídeo do desfile criado para o lançamento redefiniu completamente os nossos padrões digitais.",
      t2Author: "Marcus Vance",
      t2Role: "Vice-Présidente de Marca, Alta Costura (Paris)",
      t3Quote: "Execução impecável, total respeito ao NDA e domínio absoluto da estética de luxo.",
      t3Author: "Sophia Chen",
      t3Role: "Head de Marketing, Acessórios de Luxo (Milão)",
      t4Quote: "O detalhamento da nossa coleção de alta relojoaria em Dubai foi fantástico.",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "Diretor Geral, Relojoaria Real (Dubai)",
      t5Quote: "A parceria nos permitiu lançar uma campanha global em 8K em tempo recorde.",
      t5Author: "Claire Dubois",
      t5Role: "Estrategista de Marca, Moda de Luxo (Nova York)",
      t6Quote: "A precisão dos modelos em capturar a luz em nossas joias superou nossas expectativas.",
      t6Author: "Kenji Takahashi",
      t6Role: "Designer Visual, Alta Joalheria (Tóquio)",
      t7Quote: "Estética refinada e um nível de sofisticação digno das grandes casas europeias.",
      t7Author: "Maximilian Von Berg",
      t7Role: "Diretor Artístico, Atelier de Luxo (Viena)",
      t8Quote: "Parceiro indispensável para campanhas de alto nível que exigem agilidade e qualidade.",
      t8Author: "Victoria Sterling",
      t8Role: "CMO, Clube Privado de Luxo (Londres)",
      addReviewBtn: "Deixar um Depoimento",
      reviewTitle: "Envie sua Avaliação",
      reviewDesc: "Compartilhe sua experiência de trabalho com o AI.VIENNE Studio+.",
      nameLabel: "Seu Nome",
      roleLabel: "Cargo / Nome da Marca",
      ratingLabel: "Avaliação",
      commentLabel: "Seu Depoimento",
      submitReview: "Enviar Avaliação",
    },
    contact: {
      tag: "Inicie seu Projeto",
      title: "Solicite uma Proposta Personalizada",
      desc: "Trabalhe com o AI.VIENNE Studio+ para transformar seu conteúdo visual.",
      namePlaceholder: "Seu Nome / Nome da Marca",
      emailPlaceholder: "Endereço de E-mail",
      serviceLabel: "Selecione o Serviço Desejado",
      sOpt1: "Cinematic Fashion & Runway Video (8K)",
      sOpt2: "High Jewelry & Gemstone Campaign",
      sOpt3: "Haute Horlogerie & Timepiece Visuals",
      sOpt4: "Haute Parfumerie & Beauty Campaign",
      sOpt5: "Luxury Eyewear & Optics Production",
      sOpt6: "Bespoke Product & High-End Photography",
      sOpt7: "AI Brand Identity & Visual Strategy",
      sOpt8: "Full Digital Runway & Campaign Production",
      uploadTitle: "Enviar Mídia ou Arquivos do Produto",
      uploadHint: "Arraste ou toque para selecionar Imagens, Vídeos ou Documentos (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "Fale sobre seu projeto ou coleção...",
      submitBtn: "Enviar Brief do Projeto",
      directEmail: "Contato Direto: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / NAVEGAÇÃO",
      dirTitle: "02 / DIRETÓRIO",
      netTitle: "03 / REDE",
      studio: "O Estúdio",
      works: "Trabalhos Selecionados",
      initiate: "Iniciar Contato",
      capabilities: "Capacidades",
      cities: "Nova York | Londres | Paris | Milão | Dubai | Viena | Global",
      terms: "TERMOS E CONDIÇÕES",
      privacy: "POLÍTICA DE PRIVACIDADE",
    },
    modals: {
      termsTitle: "Termos e Condições",
      termsBody: "Com o pagamento integral, todos os direitos comerciais passam para o cliente. Nossos modelos visuais permanecem exclusivos para sua marca.",
      privacyTitle: "Política de Privacidade e NDA",
      privacyBody: "Proteção rigorosa contra vazamentos de coleções não lançadas com suporte bilateral de NDA.",
    },
    footer: "© 2026 AI.VIENNE Studio. Todos os direitos reservados.",
  },
  ZH: {
    nav: { portfolio: "作品集", about: "关于我们", services: "服务项目", workflow: "制作流程", transformation: "视觉转换", testimonials: "客户评价", faq: "常见问题", calculator: "预算计算", portal: "VIP Portal", contact: "联系我们", cta: "立即咨询" },
    hero: {
      badge: "AI驱动的高端奢华内容制作公司",
      titleStart: "用人工智能重塑",
      titleGradient: "高级时装与珠宝艺术",
      desc: "AI.VIENNE Studio+ 为全球顶级奢华品牌打造超逼真、电影质感的视觉图片与商业大片。",
      btnPrimary: "探索作品集",
      btnSecondary: "联系邮箱: info@aivienne.com",
    },
    manifesto: {
      sub: "品牌理念",
      line1: "我们从不迎合潮流。",
      line2: "我们构建永恒的视觉宇宙。",
    },
    about: {
      tag: "工作室愿景",
      title: "当高级定制重逢神经网络艺术",
      desc: "AI.VIENNE Studio+ 弥合了传统奢华美学标准与前沿神经网络生成技术之间的界限。",
      card1Title: "人类创意 vision x AI 精准度",
      card1Desc: "我们并非替代艺术指导，而是无限放大其视觉表现力。",
      card2Title: "突破传统实景限制",
      card2Desc: "宏大的秀场舞台与复杂的光影设计，以 8K 超高清品质完美呈现。",
      card3Title: "全球顶级奢华标准",
      card3Desc: "专为满足巴黎、米兰、纽约和迪拜奢侈品品牌的严格标准而设计。",
      stat1Number: "8K",
      stat1Label: "母带级分辨率",
      stat2Number: "100%",
      stat2Label: "商业保密 (NDA)",
      stat3Number: "Global",
      stat3Label: "全球制作网络",
    },
    portfolio: {
      tag: "互动展厅",
      title: "互动媒体与视频画廊",
      desc: "融合互动焦散光效与高端电影级预览的 8K 媒体画廊。",
      filterAll: "全部作品",
      filterJewelry: "高端珠宝",
      filterFashion: "高级时装",
      filterWatch: "高级腕表",
      filterEyewear: "奢华眼镜",
      filterPerfume: "高端香水",
      filterVideo: "宣传视频",
      playVideo: "观看大片视频",
    },
    transformation: {
      tag: "神经视觉转换",
      title: "传统影棚摄影 vs. AI.VIENNE 8K 母版",
      desc: "拖动互动滑块，亲身体验传统粗糙摄影如何蜕变为超现实的神经奢华美学。",
      beforeLabel: "传统原始拍摄",
      afterLabel: "AI.VIENNE 8K 母版渲染",
    },
    services: {
      title: "定制化视觉制作服务",
      subtitle: "专为声名显赫的奢华品牌量身打造的AI视觉解决方案",
      s1Title: "电影级时装视频",
      s1Desc: "8K动态AI时装秀与品牌宣传片，生动呈现您的品牌故事。",
      s2Title: "高端珠宝商业大片",
      s2Desc: "精准聚焦光影折射与精湛工艺的高精细视觉制作。",
      s3Title: "AI品牌视觉策略",
      s3Desc: "提升品牌数字声誉的战略性创意指导与视觉体系设计。",
    },
    workflow: {
      tag: "制作流程",
      title: "奢华视觉制作4步法",
      step1Title: "需求与概念",
      step1Desc: "深入分析您的品牌DNA与系列产品细节。",
      step2Title: "AI生成制作",
      step2Desc: "运用高级神经网络渲染8K图像与动态视频。",
      step3Title: "创意后期修饰",
      step3Desc: "精细调校色彩与光影，达到影棚级完美品质。",
      step4Title: "最终成品交付",
      step4Desc: "交付适用于社交媒体与全球广告的高清母版。",
    },
    estimator: {
      tag: "互动工具",
      title: "项目预算与范围计算器",
      desc: "配置您的奢华制作需求，以估算项目的预估投资规模。",
      scaleLabel: "制作层级 / 范围",
      tier1: "单件高端资产（微距渲染/静态图）",
      tier2: "季节性 8K 广告大片包（多资产）",
      tier3: "全案电影级时装秀与数字孪生套件",
      deliveryLabel: "交付速度",
      standard: "标准影棚周期（10-14天）",
      express: "高定优先交付（3-5天）",
      estInvestment: "预估投资规模：",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "客户门户",
      title: "VIP 保险库与安全交付",
      desc: "输入您的专属行政访问凭证，以安全审查未发布的系列渲染图和 8K 母版文件。",
      passPlaceholder: "输入 VIP 访问码（例如 AIVIENNE-VIP）",
      loginBtn: "访问安全保险库",
      errorMsg: "凭据无效。请联系 info@aivienne.com 获取授权。",
      successMsg: "访问已批准：欢迎来到 AI.VIENNE 安全客户保险库。",
      vaultTitle: "行政安全档案室（启用实时动态水印保护）",
      downloadAsset: "下载母版资产",
      watermarkNotice: "已根据 NDA 专有授权给 AI.VIENNE 执行合伙人。",
    },
    faq: {
      tag: "常见问题",
      title: "常见问题解答",
      desc: "关于我们的视觉工程、材质精度及保密合作模式的核心准则。",
      q1: "8K数字孪生或广告大片的制作周期是多久？",
      a1: "传统实景拍摄通常需要数月，而我们的神经生成工作流可在 5 至 10 个工作日内交付 8K 顶级商业大片。",
      q2: "你们使用的是通用模板还是定制的神经着色器？",
      a2: "我们绝不使用通用模板。每一个神经着色器、灯光配置和数字模特都是为您的奢华品牌 DNA 量身定制的。",
      q3: "你们如何处理知识产权、保密协议 (NDA) 和资产安全性？",
      a3: "我们以绝对的保密标准运营。所有未发布的设计和 CAD 文件均在严格的双方 NDA 框架下受到保护。",
      q4: "我们如何开始咨询或长期的顾问合作？",
      a4: "您可以通过下方的提案表提交项目需求，或直接通过 info@aivienne.com 与我们的管理团队取得联系。",
    },
    testimonials: {
      tag: "客户评价",
      title: "全球奢华品牌的信赖之选",
      desc: "创意总监与品牌高管对 AI.VIENNE Studio+ 合作体验的高度赞誉。",
      t1Quote: "AI.VIENNE Studio+ 为我们打造的 8K 珠宝大片在逼真度与制作效率上超越了传统摄影。",
      t1Author: "Elena Rostova",
      t1Role: "高级珠宝创意总监（日内瓦）",
      t2Quote: "为高定周生成的秀场视频彻底刷新了我们品牌的数字展示标准。",
      t2Author: "Marcus Vance",
      t2Role: "高定品牌副总裁（巴黎）",
      t3Quote: "完美的执行力、严格的保密协议执行，以及对奢华美学的深刻理解。",
      t3Author: "Sophia Chen",
      t3Role: "奢华配饰市场总监（米兰）",
      t4Quote: "在迪拜为我们的顶奢腕表系列呈现的细节惊艳绝伦，是中东市场的颠覆之作。",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "皇家钟表珠宝总经理（迪拜）",
      t5Quote: "与他们的合作让我们在几天内就上线了全新的 8K 季度商业大片。",
      t5Author: "Claire Dubois",
      t5Role: "奢侈时尚品牌全球策略师（纽约）",
      t6Quote: "AI模型对宝石上光影折射的捕捉达到了无与伦比的完美境界。",
      t6Author: "Kenji Takahashi",
      t6Role: "高级珠宝视觉设计师（东京）",
      t7Quote: "精致的美学呈效与高效沟通，契合欧洲百年品牌的高度标准。",
      t7Author: "Maximilian Von Berg",
      t7Role: "传承工坊艺术总监（维也纳）",
      t8Quote: "对于追求极致品质与速度的高端数字营销而言，他们是不可或缺的合作伙伴。",
      t8Author: "Victoria Sterling",
      t8Role: "私人奢华俱乐部首席营销官（伦敦）",
      addReviewBtn: "撰写评价",
      reviewTitle: "提交您的反馈",
      reviewDesc: "分享您与 AI.VIENNE Studio+ 的合作体验。",
      nameLabel: "您的姓名",
      roleLabel: "头衔 / 品牌名称",
      ratingLabel: "评分",
      commentLabel: "您的评价 / 建议",
      submitReview: "提交评价",
    },
    contact: {
      tag: "开启您的项目",
      title: "获取专属项目方案",
      desc: "与 AI.VIENNE Studio+ 携手，探索高端内容创作的新边界。",
      namePlaceholder: "您的姓名 / 品牌名称",
      emailPlaceholder: "电子邮箱",
      serviceLabel: "选择所需服务",
      sOpt1: "电影级时装秀与走秀视频 (8K)",
      sOpt2: "高级珠宝与珍贵宝石商业大片",
      sOpt3: "高级制表与腕表产品视觉制作",
      sOpt4: "高端香水与美容美妆商业广告",
      sOpt5: "奢华眼镜与配饰视觉制作",
      sOpt6: "定制产品摄影与影棚级3D渲染",
      sOpt7: "AI品牌视觉识别与创意策略规划",
      sOpt8: "全案数字时装秀与全系列商业大片",
      uploadTitle: "上传产品图片、视频或文件",
      uploadHint: "拖拽或点击上传图片、视频或文档 (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "请简述您的项目或新系列规划...",
      submitBtn: "提交项目需求",
      directEmail: "直接联系: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / 导航",
      dirTitle: "02 / 目录",
      netTitle: "03 / 社交网络",
      studio: "工作室",
      works: "精选作品",
      initiate: "发起联系",
      capabilities: "服务能力",
      cities: "纽约 | 伦敦 | 巴黎 | 米兰 | 迪拜 | 维也纳 | 全球",
      terms: "条款与条件",
      privacy: "隐私政策",
    },
    modals: {
      termsTitle: "服务与合作条款",
      termsBody: "支付完成后，8K 资产的全部全球商业使用权归客户所有。品牌素材绝不用于训练公共 AI 模型。",
      privacyTitle: "保密与隐私政策 (NDA)",
      privacyBody: "未公开的商业方案与产品概念受双向保密协议 (NDA) 保护。联系邮箱：info@aivienne.com。",
    },
    footer: "© 2026 AI.VIENNE Studio. 保留所有权利。",
  },
  JA: {
    nav: { portfolio: "ポートフォリオ", about: "スタジオ概要", services: "サービス", workflow: "制作フロー", transformation: "変換", testimonials: "評価", faq: "FAQ", calculator: "見積もり", portal: "VIPポータル", contact: "お問い合わせ", cta: "お問い合わせ" },
    hero: {
      badge: "AIを活用したラグジュアリーコンテンツ制作会社",
      titleStart: "ハイファッションとファインジュエリーを",
      titleGradient: "人工知能で昇華する",
      desc: "AI.VIENNE Studio+ は世界中の高級ブランド向けに、超リアルで映画のような高品質ビジュアルを制作します。",
      btnPrimary: "作品を見る",
      btnSecondary: "連絡先: info@aivienne.com",
    },
    manifesto: {
      sub: "私たちの哲学",
      line1: "トレンドを追うのではない。",
      line2: "不変の宇宙を構築する。",
    },
    about: {
      tag: "スタジオの理念",
      title: "オートクチュールとニューラルアートの融合",
      desc: "AI.VIENNE Studio+ は伝統的なラグジュアリーの美的基準と最先端AI技術を完璧に融合させます。",
      card1Title: "ビジョン x AIの精密性",
      card1Desc: "クリエイティブディレクションを代替するのではなく、その表現力を極限まで高めます。",
      card2Title: "制作上の制約からの解放",
      card2Desc: "壮大なランウェイや高度なライティング表現を8K画質で生成します。",
      card3Title: "グローバル・プレステージ",
      card3Desc: "パリ、ミラノ、ニューヨークのラグジュアリーメゾンの厳格な基準に応えます。",
      stat1Number: "8K",
      stat1Label: "マスター解像度",
      stat2Number: "100%",
      stat2Label: "機密保持 (NDA)",
      stat3Number: "Global",
      stat3Label: "制作ネットワーク",
    },
    portfolio: {
      tag: "インタラクティブ画廊",
      title: "メディア＆動画ギャラリー",
      desc: "インタラクティブなコースティクス（光の屈折）効果とシネマティックプレビューを備えた8Kギャラリー。",
      filterAll: "全作品",
      filterJewelry: "ファインジュエリー",
      filterFashion: "ハイファッション",
      filterWatch: "高級時計",
      filterEyewear: "アイウェア",
      filterPerfume: "フレグランス",
      filterVideo: "プロモーション動画",
      playVideo: "動画を再生",
    },
    transformation: {
      tag: "ニューラル変換",
      title: "伝統的スタジオ vs. AI.VIENNE 8Kマスター",
      desc: "インタラクティブスライダーを動かして、従来の生写真が贅沢なニューラルアートに昇華する様子をご覧ください。",
      beforeLabel: "従来の生撮影",
      afterLabel: "AI.VIENNE 8Kマスターレンダー",
    },
    services: {
      title: "ビスポーク・プロダクション",
      subtitle: "プレステージブランドのために設計された最先端のAIビジュアルソリューション",
      s1Title: "シネマティック・ファッション動画",
      s1Desc: "ブランドのストーリーに合わせた高品質な8K AIランウェイ＆プロモーション映像。",
      s2Title: "ラグジュアリー・ジュエリー・キャンペーン",
      s2Desc: "光の反射や職人技のディテールに焦点を当てた精密なビジュアル制作。",
      s3Title: "AIブランド・戦略",
      s3Desc: "デジタル上のブランド価値を高める戦略的なクリエイティブディレクション。",
    },
    workflow: {
      tag: "制作手法",
      title: "ラグジュアリー制作の4ステップ",
      step1Title: "ヒアリング＆コンセプト",
      step1Desc: "ブランドのDNAとコレクションの詳細を深く分析します。",
      step2Title: "AIジェネレーション",
      step2Desc: "高度なニューラルモデルにより8Kビジュアルと動きを生成します。",
      step3Title: "クリエイティブ・ポストプロダクション",
      step3Desc: "スタジオクオリティの色調整とライティングを施します。",
      step4Title: "最終納品",
      step4Desc: "世界的な広告キャンペーンに最適化された高画質ファイルを納品します。",
    },
    estimator: {
      tag: "インタラクティブツール",
      title: "予算・スコープ計算ツール",
      desc: "ラグジュアリー制作の要件を設定し、推定プロジェクト投資規模を算出します。",
      scaleLabel: "制作ティア / スコープ",
      tier1: "単一ハイエンドアセット（マクロレンダー / 静止画）",
      tier2: "シーズン8Kキャンペーンパッケージ（複数アセット）",
      tier3: "シネマティックランウェイフィルム＆デジタルツイン",
      deliveryLabel: "納品スピード",
      standard: "標準スタジオスケジュール（10〜14日）",
      express: "優先オートクチュール納品（3〜5日）",
      estInvestment: "推定投資規模：",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "クライアントポータル",
      title: "VIP・セキュア・ボルト（成果物保管庫）",
      desc: "未公開コレクションのレンダリングや8Kマスターファイルを安全に確認するため、認証情報を入力してください。",
      passPlaceholder: "VIPアクセスコードを入力（例: AIVIENNE-VIP）",
      loginBtn: "セキュアボルトを開く",
      errorMsg: "無効な認証情報です。info@aivienne.comにお問い合わせください。",
      successMsg: "アクセス成功：AI.VIENNEセキュアクライアントボルトへようこそ。",
      vaultTitle: "エグゼクティブ・セキュアアーカイブ（動的透かし保護付き）",
      downloadAsset: "マスターアセットをダウンロード",
      watermarkNotice: "AI.VIENNEエグゼクティブパートナー向けNDA規約に基づき独占ライセンス付与。",
    },
    faq: {
      tag: "FAQ",
      title: "よくあるご質問",
      desc: "当社のビジュアルエンジニアリング、素材の正確性、機密保持モデルに関するガイドライン。",
      q1: "8Kデジタルツインまたはキャンペーンビジュアルの制作期間はどのくらいですか？",
      a1: "従来の撮影には何カ月もかかりますが、当社のニューラルパイプラインは 5〜10営業日 で8Kマスターを納品します。",
      q2: "汎用テンプレートを使用していますか、それともカスタムのニューラルシェーダーですか？",
      a2: "汎用テンプレートは一切使用しません。すべてのシェーダーとアバターは、お客様のラグジュアリーメゾンのDNAに合わせてカスタム構築されます。",
      q3: "知的財産権、NDA遵守、アセットのセキュリティはどのように管理されていますか？",
      a3: "絶対的な機密保持のもとで運営されています。未発表のデザインやCADファイルは厳格な双方向NDAによって保護されます。",
      q4: "コンサルティングや月額リテーナー契約を開始するにはどうすればよいですか？",
      a4: "以下のフォームからプロジェクト概要を送信していただくか、info@aivienne.com まで直接お問い合わせください。",
    },
    testimonials: {
      tag: "お客様の声",
      title: "世界のラグジュアリーリーダーからの信頼",
      desc: "AI.VIENNE Studio+ とのコラボレーションについてのクリエイティブディレクターのコメント。",
      t1Quote: "AI.VIENNE Studio+ は従来の撮影をスピードとリアリティで凌駕する8Kキャンペーンを制作しました。",
      t1Author: "Elena Rostova",
      t1Role: "クリエイティブディレクター、高級ジュエリー（ジュネーブ）",
      t2Quote: "クチュールウィーク向けに生成された映像は、当ブランドのデジタル表現の基準を再定義しました。",
      t2Author: "Marcus Vance",
      t2Role: "ブランド副社長、オートクチュール（パリ）",
      t3Quote: "完璧な実行力、完全なNDA遵守、そしてラグジュアリーの美学に対する深い理解。",
      t3Author: "Sophia Chen",
      t3Role: "マーケティング責任者、高級アクセサリー（ミラノ）",
      t4Quote: "ドバイでの高級時計コレクションのために描写された細部の質感は圧巻の一言でした。",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "代表取締役、ロイヤルウォッチ＆ジュエリー（ドバイ）",
      t5Quote: "彼らとのパートナーシップにより、8Kキャンペーンを数日で展開することが可能になりました。",
      t5Author: "Claire Dubois",
      t5Role: "ブランドストラテジスト、ラグジュアリーファッション（ニューヨーク）",
      t6Quote: "宝石に反射する光の質感まで、完璧な精度で捉えて表現してくれました。",
      t6Author: "Kenji Takahashi",
      t6Role: "シニアビジュアルデザイナー、高級ジュエリー（東京）",
      t7Quote: "ヨーロッパの伝統あるメゾンにふさわしい洗練された美的感性と完成度。",
      t7Author: "Maximilian Von Berg",
      t7Role: "アーティスティックディレクター、ヘリテージアトリエ（ウィーン）",
      t8Quote: "スピードと最高の品質を要求されるハイエンドデジタルキャンペーンに不可欠なパートナー。",
      t8Author: "Victoria Sterling",
      t8Role: "CMO、プライベートラグジュアリークラブ（ロンドン）",
      addReviewBtn: "レビューを投稿",
      reviewTitle: "評価を送信",
      reviewDesc: "AI.VIENNE Studio+ との制作体験についてお寄せください。",
      nameLabel: "お名前",
      roleLabel: "役職 / ブランド名",
      ratingLabel: "評価",
      commentLabel: "コメント・評価内容",
      submitReview: "レビューを送信",
    },
    contact: {
      tag: "プロジェクトを始める",
      title: "カスタム提案をリクエスト",
      desc: "AI.VIENNE Studio+ と共に、次世代のコンテンツ表現へ。",
      namePlaceholder: "お名前 / BRAND名",
      emailPlaceholder: "メールアドレス",
      serviceLabel: "ご希望のサービスを選択",
      sOpt1: "シネマティックファッション＆ランウェイ映像 (8K)",
      sOpt2: "ハイジュエリー＆ジェムストーンキャンペーン",
      sOpt3: "高級時計・オートロジュリービジュアル",
      sOpt4: "高級フレグランス＆ビューティーキャンペーン",
      sOpt5: "ラグジュアリーアイウェア＆オプティクス制作",
      sOpt6: "ビスポーク製品＆ハイエンドスチール撮影",
      sOpt7: "AIブランドアイデンティティ＆ビジュアル戦略",
      sOpt8: "フルデジタルランウェイ＆総合キャンペーン制作",
      uploadTitle: "プロダクト画像・動画・ファイルのアップロード",
      uploadHint: "端末から画像、動画、CAD、PDFをドラッグ＆ドロップまたは選択 (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "プロジェクトやコレクションの詳細をお知らせください...",
      submitBtn: "プロジェクト詳細を送信",
      directEmail: "直接メール: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / ナビゲーション",
      dirTitle: "02 / ディレクトリ",
      netTitle: "03 / ネットワーク",
      studio: "スタジオ",
      works: "選定作品",
      initiate: "コンタクト開始",
      capabilities: "サービス機能",
      cities: "ニューヨーク | ロンドン | パリ | ミラノ | Dubai | ウィーン | グローバル",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
    },
    modals: {
      termsTitle: "利用規約",
      termsBody: "完全な決済後、8K成果物の商業的権利はすべてクライアントに移転します。提供素材がパブリックAIに使用されることはありません。",
      privacyTitle: "プライバシーポリシー (NDA)",
      privacyBody: "厳格な秘密保持契約（NDA）のもと、お客様の未公開コレクション情報を徹底して保護いたします。お問い合わせ：info@aivienne.com。",
    },
    footer: "© 2026 AI.VIENNE Studio. All rights reserved.",
  },
  KO: {
    nav: { portfolio: "포트폴리오", about: "스튜디오 소개", services: "서비스", workflow: "프로세스", transformation: "전환", testimonials: "고객 후기", faq: "FAQ", calculator: "견적 계산", portal: "VIP 포털", contact: "문의하기", cta: "문의하기" },
    hero: {
      badge: "AI 기반 럭셔리 콘텐츠 에이전시",
      titleStart: "하이패션과 파인 주얼리를 혁신하는",
      titleGradient: "인공지능의 감각",
      desc: "AI.VIENNE Studio+는 전 세계 럭셔리 브랜드를 위해 초현실적인 영화적 비주얼을 제작합니다.",
      btnPrimary: "포트폴리오 보기",
      btnSecondary: "문의: info@aivienne.com",
    },
    manifesto: {
      sub: "우리의 철학",
      line1: "우리는 트렌드를 좇지 않습니다.",
      line2: "영원한 세계를 설계합니다.",
    },
    about: {
      tag: "비전 & 스튜디오 정체성",
      title: "오트쿠튀르와 인공지능 예술의 만남",
      desc: "AI.VIENNE Studio+는 전통 럭셔리의 미학적 기준과 차세대 신경망 생성 기술을 완벽하게 통합합니다.",
      card1Title: "인간의 비전 x AI의 정밀함",
      card1Desc: "크리에이티브 디렉션을 대체하는 것이 아니라, 가치를 정교하게 극대화합니다.",
      card2Title: "제작 환경의 한계 극복",
      card2Desc: "웅장한 런웨이 무대와 섬세한 조명 연출을 8K 해상도로 완벽 구현합니다.",
      card3Title: "글로벌 프레스티지 기준",
      card3Desc: "파리, 밀라노, 뉴욕 럭셔리 하우스의 높은 기대 수준을 충족하도록 제작됩니다.",
      stat1Number: "8K",
      stat1Label: "마스터 해상도",
      stat2Number: "100%",
      stat2Label: "기밀 유지 (NDA)",
      stat3Number: "Global",
      stat3Label: "글로벌 프로덕션",
    },
    portfolio: {
      tag: "인터랙티브 갤러리",
      title: "미디어 & 비디오 갤러리",
      desc: "인터랙티브 빛 반사(caustics) 효과와 하이엔드 시네마틱 프리뷰가 적용된 8K 갤러리.",
      filterAll: "전체 작품",
      filterJewelry: "파인 주얼리",
      filterFashion: "오트쿠튀르",
      filterWatch: "럭셔리 워치",
      filterEyewear: "럭셔리 아이웨어",
      filterPerfume: "럭셔리 향수",
      filterVideo: "캠페인 비디오",
      playVideo: "비디오 보기",
    },
    transformation: {
      tag: "뉴럴 트랜스포메이션",
      title: "전통 스튜디오 vs. AI.VIENNE 8K 마스터",
      desc: "인터랙티브 슬라이더를 드래그하여 일반 원본 촬영이 초현실적인 뉴럴 럭셔리 미학으로 변모하는 과정을 확인하세요.",
      beforeLabel: "전통 원본 촬영",
      afterLabel: "AI.VIENNE 8K 마스터 렌더",
    },
    services: {
      title: "맞춤형 프로덕션 서비스",
      subtitle: "프레스티지 럭셔리 브랜드를 위한 AI 비주얼 솔루션",
      s1Title: "시네마틱 패션 비디오",
      s1Desc: "브랜드 스토리에 맞춘 고해상도 8K AI 런웨이 및 캠페인 필름.",
      s2Title: "럭셔리 주얼리 캠페인",
      s2Desc: "빛의 반사와 주얼리의 정교함에 집중한 초정밀 비주얼 프로덕션.",
      s3Title: "AI 브랜드 전략",
      s3Desc: "디지털 위상을 높이기 위한 전략적 크리에이티브 디렉션 및 비주얼 아이덴티티.",
    },
    workflow: {
      tag: "작업 방식",
      title: "4단계 럭셔리 프로덕션",
      step1Title: "브리프 & 컨셉",
      step1Desc: "브랜드의 DNA와 컬렉션의 세부 요소를 분석합니다.",
      step2Title: "AI 생성이미지",
      step2Desc: "고급 신경망 모델을 통해 8K 비주얼과 움직임을 구현합니다.",
      step3Title: "크리에이티브 후가공",
      step3Desc: "스튜디오 퀄리티에 맞춘 색보정과 조명 리터칭 작업.",
      step4Title: "최종 전달",
      step4Desc: "글로벌 캠페인에 최적화된 마스터 파일을 전달합니다.",
    },
    estimator: {
      tag: "인터랙티브 툴",
      title: "예산 및 프로젝트 규모 계산기",
      desc: "럭셔리 프로덕션 요구사항을 구성하여 예상 프로젝트 투자 규모를 계산해보세요.",
      scaleLabel: "프로덕션 등급 / 범위",
      tier1: "단일 하이엔드 에셋 (매크로 렌더 / 스틸)",
      tier2: "시즌 8K 캠페인 패키지 (복수 에셋)",
      tier3: "풀 시네마틱 런웨이 필름 및 디지털 트윈 스위트",
      deliveryLabel: "납품 속도",
      standard: "표준 스튜디오 일정 (10-14일)",
      express: "우선 오트쿠튀르 납품 (3-5일)",
      estInvestment: "예상 투자 규모:",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "클라이언트 포털",
      title: "VIP 볼트 및 안전한 결과물 보관함",
      desc: "미공개 컬렉션 렌더링과 8K 마스터 파일을 안전하게 검토할 수 있도록 할당된 VIP 액세스 자격 증명을 입력하세요.",
      passPlaceholder: "VIP 액세스 코드 입력 (예: AIVIENNE-VIP)",
      loginBtn: "보안 볼트 접속",
      errorMsg: "잘못된 자격 증명입니다. 권한 부여는 info@aivienne.com으로 문의하세요.",
      successMsg: "액세스 승인됨: AI.VIENNE 보안 클라이언트 볼트에 오신 것을 환영합니다.",
      vaultTitle: "임원 전용 보안 아카이브 (실시간 동적 워터마크 보호 적용)",
      downloadAsset: "마스터 에셋 다운로드",
      watermarkNotice: "AI.VIENNE 임원 파트너 NDA 규정에 따라 독점 라이선스됨.",
    },
    faq: {
      tag: "FAQ",
      title: "자주 묻는 질문",
      desc: "당사의 비주얼 엔지니어링, 소재 정확도 및 기밀 협업 모델에 관한 필수 지침입니다.",
      q1: "8K 디지털 트윈 또는 캠페인 비주얼의 제작 기간은 어떻게 되나요?",
      a1: "기존 촬영은 수개월이 소요되지만, 당사의 뉴럴 파이프라인은 5~10 영업일 내에 8K 마스터 캠페인을 납품합니다.",
      q2: "일반 템플릿을 사용하시나요, 아니면 맞춤형 뉴럴 셰이더를 사용하시나요?",
      a2: "일반 템플릿은 절대 사용하지 않습니다. 모든 셰이더와 아바타는 럭셔리 하우스의 미학적 DNA에 맞춰 맞춤 제작됩니다.",
      q3: "지식재산권, NDA 준수 및 자산 보안은 어떻게 처리하시나요?",
      a3: "절대적인 보안 속에서 운영됩니다. 모든 미출시 디자인 및 CAD 파일은 엄격한 양방향 NDA 프레임워크로 보호됩니다.",
      q4: "컨설팅이나 월간 리테이너 계약은 어떻게 시작하나요?",
      a4: "아래 양식을 통해 프로젝트 브리프를 제출하시거나 info@aivienne.com으로 직접 문의하실 수 있습니다.",
    },
    testimonials: {
      tag: "고객 평가",
      title: "글로벌 럭셔리 리더들의 신뢰",
      desc: "AI.VIENNE Studio+와의 협업에 대한 크리에이티브 디렉터들의 평가.",
      t1Quote: "AI.VIENNE Studio+는 기존 사진 촬영을 뛰어넘는 8K 주얼리 캠페인을 선보였습니다.",
      t1Author: "Elena Rostova",
      t1Role: "크리에이티브 디렉터, 하이주얼리 (제네바)",
      t2Quote: "쿠튀르 위크를 위해 제작된 런웨이 영상은 디지털 비주얼의 기준을 다시 세웠습니다.",
      t2Author: "Marcus Vance",
      t2Role: "브랜드 부사장, 오트쿠튀르 (파리)",
      t3Quote: "완벽한 실행력, 철저한 NDA 준수, 그리고 럭셔리 미학에 대한 깊은 이해.",
      t3Author: "Sophia Chen",
      t3Role: "마케팅 총괄, 럭셔리 악세서리 (밀라노)",
      t4Quote: "두바이 럭셔리 시계 컬렉션을 위해 구현된 비주얼 디테일은 경이로운 수준이었습니다.",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "총괄 디렉터, 로열 워치 & 주얼리 (두바이)",
      t5Quote: "협업을 통해 글로벌 8K 캠페인을 단 며칠 만에 성공적으로 런칭할 수 있었습니다.",
      t5Author: "Claire Dubois",
      t5Role: "브랜드 전략가, 럭셔리 패션 (뉴욕)",
      t6Quote: "보석 표면의 미세한 빛 반사까지 완벽한 정밀함으로 포착해냈습니다.",
      t6Author: "Kenji Takahashi",
      t6Role: "수석 비주얼 디자이너, 파인 주얼리 (도쿄)",
      t7Quote: "유럽 헤리티지 하우스의 정체성에 부합하는 세련된 미학과 품격을 보여주었습니다.",
      t7Author: "Maximilian Von Berg",
      t7Role: "아티스틱 디렉터, 헤리티지 아틀리에 (비엔나)",
      t8Quote: "타협 없는 품질과 압도적인 속도가 필요한 하이엔드 캠페인의 핵심 파트너.",
      t8Author: "Victoria Sterling",
      t8Role: "CMO, 프라이빗 럭셔리 클럽 (런던)",
      addReviewBtn: "후기 작성하기",
      reviewTitle: "고객 후기 제출",
      reviewDesc: "AI.VIENNE Studio+와의 협업 경험을 공유해주세요.",
      nameLabel: "성함",
      roleLabel: "직함 / 브랜드명",
      ratingLabel: "평점",
      commentLabel: "후기 내용",
      submitReview: "후기 제출",
    },
    contact: {
      tag: "프로젝트 시작하기",
      title: "맞춤 제안서 요청",
      desc: "AI.VIENNE Studio+와 함께 콘텐츠 크리에이션의 새로운 지평을 열어보세요.",
      namePlaceholder: "성함 / 브랜드명",
      emailPlaceholder: "이메일 주소",
      serviceLabel: "원하시는 서비스 선택",
      sOpt1: "Cinematic Fashion & Runway Video (8K)",
      sOpt2: "High Jewelry & Gemstone Campaign",
      sOpt3: "Haute Horlogerie & Timepiece Visuals",
      sOpt4: "Haute Parfumerie & Beauty Campaign",
      sOpt5: "Luxury Eyewear & Optics Production",
      sOpt6: "Bespoke Product & High-End Photography",
      sOpt7: "AI Brand Identity & Visual Strategy",
      sOpt8: "Full Digital Runway & Campaign Production",
      uploadTitle: "제품 이미지, 비디오 또는 파일 업로드",
      uploadHint: "기기(모바일, 태블릿, PC)에서 이미지, 비디오, CAD, PDF 파일을 드래그하거나 선택하세요 (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "프로젝트나 컬렉션 계획에 대해 설명해주세요...",
      submitBtn: "프로젝트 브리프 제출",
      directEmail: "직통 이메일: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / 내비게이션",
      dirTitle: "02 / 디렉토리",
      netTitle: "03 / 네트워크",
      studio: "스튜디오",
      works: "선정 작품",
      initiate: "문의 시작",
      capabilities: "역량",
      cities: "뉴욕 | 런던 | 파리 | 밀라노 | 두바이 | 비엔나 | 글로벌",
      terms: "이용약관",
      privacy: "개인정보 처리방침",
    },
    modals: {
      termsTitle: "이용약관",
      termsBody: "잔금 정산 후 모든 8K 결과물의 상업적 권리는 고객에게 이전됩니다. 브랜드 소스 및 결과물은 공개 AI 모델에 사용되지 않습니다.",
      privacyTitle: "개인정보 처리방침 & NDA",
      privacyBody: "미공개 프로젝트 및 비공개 자산은 상호 NDA에 의해 엄격히 보호됩니다. 문의: info@aivienne.com.",
    },
    footer: "© 2026 AI.VIENNE Studio. All rights reserved.",
  },
  HI: {
    nav: { portfolio: "पोर्टफोलियो", about: "हमारे बारे में", services: "सेवाएं", workflow: "प्रक्रिया", transformation: "रूपांतरण", testimonials: "समीक्षाएं", faq: "FAQ", calculator: "कैलकुलेटर", portal: "VIP पोर्टल", contact: "संपर्क करें", cta: "संपर्क करें" },
    hero: {
      badge: "एआई-संचालित लग्जरी कंटेंट एजेंसी",
      titleStart: "आर्टिफिशियल इंटेलिजेंस के माध्यम से",
      titleGradient: "हाई फैशन और बेहतरीन आभूषणों का निखार",
      desc: "AI.VIENNE Studio+ वैश्विक लक्जरी ब्रांडों के लिए अति-यथार्थवादी, सिनेमाई दृश्य पेश करता है।",
      btnPrimary: "पोर्टफोलियो देखें",
      btnSecondary: "संपर्क: info@aivienne.com",
    },
    manifesto: {
      sub: "हमारा दर्शन",
      line1: "हम रुझानों का पालन नहीं करते।",
      line2: "हम कालातीत ब्रह्मांडों का निर्माण करते हैं।",
    },
    about: {
      tag: "हमारी दृष्टि",
      title: "जहां हाउते कॉउचर एआई आर्ट से मिलता है",
      desc: "AI.VIENNE Studio+ पारंपरिक लक्जरी सौंदर्यशास्त्र और उन्नत एआई तकनीक का एक अनूठा संगम है।",
      card1Title: "मानवीय दृष्टि x एआई सटीकता",
      card1Desc: "हम रचनात्मक निर्देशन को प्रतिस्थापित नहीं करते हैं; हम उसकी भव्यता को बढ़ाते हैं।",
      card2Title: "भौतिक उत्पादन सीमाओं से परे",
      card2Desc: "8K रिज़ॉल्यूशन में प्रस्तुत जटिल रनवे स्टेज और विस्तृत दृश्य निर्माण।",
      card3Title: "वैश्विक प्रतिष्ठा मानक",
      card3Desc: "पेरिस, मिलान और न्यूयॉर्क के प्रमुख ब्रांडों की उच्च अपेक्षाओं को पूरा करने के लिए तैयार।",
      stat1Number: "8K",
      stat1Label: "मास्टर रिज़ॉल्यूशन",
      stat2Number: "100%",
      stat2Label: "गोपनीयता (NDA)",
      stat3Number: "Global",
      stat3Label: "उत्पादन नेटवर्क",
    },
    portfolio: {
      tag: "इंटरएक्टिव गैलरी",
      title: "मीडिया और वीडियो गैलरी",
      desc: "इंटरएक्टिव काउस्टिक्स प्रकाश प्रभावों और हाई-एंड सिनेमाई पूर्वावलोकन के साथ 8K गैलरी.",
      filterAll: "सभी कार्य",
      filterJewelry: "लक्जरी आभूषण",
      filterFashion: "हाई फैशन",
      filterWatch: "लक्जरी घड़ियां",
      filterEyewear: "लक्जरी चश्मे",
      filterPerfume: "लक्जरी इत्र",
      filterVideo: "अभियान वीडियो",
      playVideo: "वीडियो देखें",
    },
    transformation: {
      tag: "न्यूरल रूपांतरण",
      title: "पारंपरिक स्टूडियो बनाम AI.VIENNE 8K मास्टर",
      desc: "यह देखने के लिए इंटरैक्टिव स्लाइडर खींचें कि पारंपरिक कच्ची फोटोग्राफी कैसे शानदार न्यूरल लग्जरी सौंदर्य में बदल जाती है।",
      beforeLabel: "पारंपरिक कच्ची कैप्चर",
      afterLabel: "AI.VIENNE 8K मास्टर रेंडर",
    },
    services: {
      title: "कस्टम प्रोडक्शन सेवाएं",
      subtitle: "प्रतिष्ठित लक्जरी ब्रांडों के लिए विशेष एआई विजुअल समाधान",
      s1Title: "सिनेमाई फैशन वीडियो",
      s1Desc: "आपके ब्रांड की कहानी के लिए विशेष रूप से तैयार की गई 8K एआई रनवे फिल्में।",
      s2Title: "लक्जरी आभूषण अभियान",
      s2Desc: "प्रकाश और आभूषणों की शिल्प कौशल पर केंद्रित उच्च-परिशुद्धता दृश्य।",
      s3Title: "एआई ब्रांड रणनीति",
      s3Desc: "आपकी डिजिटल उपस्थिति को बढ़ाने के लिए रणनीतिक रचनात्मक दिशा।",
    },
    workflow: {
      tag: "हमारी कार्यप्रणाली",
      title: "4-चरणों में लक्जरी उत्पादन",
      step1Title: "अवधारणा और विचार",
      step1Desc: "आपके ब्रांड डीएनए और संग्रह विवरण का विश्लेषण।",
      step2Title: "एआई जेनरेशन",
      step2Desc: "उन्नत एआई मॉडल के माध्यम से 8K दृश्य प्रस्तुत करना।",
      step3Title: "रचनात्मक संपादन",
      step3Desc: "रंग और प्रकाश व्यवस्था को पूर्णता प्रदान करना।",
      step4Title: "अंतिम डिलीवरी",
      step4Desc: "वैश्विक अभियानों के लिए अनुकूलित फाइलों की डिलीवरी।",
    },
    estimator: {
      tag: "इंटरएक्टिव टूल",
      title: "बजट और दायरा कैलकुलेटर",
      desc: "अनुमानित परियोजना निवेश पैमाने की गणना करने के लिए अपनी लग्जरी उत्पादन आवश्यकताओं को कॉन्फ़िगर करें.",
      scaleLabel: "उत्पादन स्तर / दायरा",
      tier1: "सिंगल हाई-एंड एसेट (मैक्रो रेंडर / स्टिल)",
      tier2: "मौसमी 8K अभियान पैकेज (एकाधिक एसेट्स)",
      tier3: "पूर्ण सिनेमाई रनवे फिल्म और डिजिटल ट्विन सुइट",
      deliveryLabel: "डिलिवरी गति",
      standard: "मानक स्टूडियो समयसीमा (10-14 दिन)",
      express: "प्राथमिकता Haute Couture डिलीवरी (3-5 दिन)",
      estInvestment: "अनुमानित निवेश पैमाना:",
      range1: "$1,500 – $3,500",
      range2: "$5,000 – $12,000",
      range3: "$18,000 – $35,000+",
    },
    portal: {
      tag: "क्लाइंट पोर्टल",
      title: "VIP वॉल्ट और सुरक्षित डिली버बल्स",
      desc: "अप्रकाशित संग्रह रेंडर और 8K मास्टर फ़ाइलों की सुरक्षित रूप से समीक्षा करने के लिए अपनी असाigned क्रेडेंशियल दर्ज करें.",
      passPlaceholder: "VIP एक्सेस कोड दर्ज करें (जैसे AIVIENNE-VIP)",
      loginBtn: "सुरक्षित वॉल्ट तक पहुंचें",
      errorMsg: "अमान्य क्रेडेंशियल। प्राधिकरण के लिए info@aivienne.com पर संपर्क करें.",
      successMsg: "पहुँच स्वीकृत: AI.VIENNE सुरक्षित क्लाइंट वॉल्ट में आपका स्वागत है.",
      vaultTitle: "कार्यकारी सुरक्षित संग्रह (लाइव डायनेमिक वॉटरमार्क द्वारा सुरक्षित)",
      downloadAsset: "मास्टर एसेट डाउनलोड करें",
      watermarkNotice: "AI.VIENNE कार्यकारी भागीदार के लिए NDA के तहत विशेष रूप से लाइसेंस प्राप्त है।",
    },
    faq: {
      tag: "FAQ",
      title: "अक्सर पूछे जाने वाले प्रश्न",
      desc: "हमारी दृश्य इंजीनियरिंग, सामग्री सटीकता और गोपनीय सगाई मॉडल के संबंध में आवश्यक दिशानिर्देश.",
      q1: "8K डिजिटल ट्विन या अभियान विजुअल के लिए उत्पादन समय सीमा क्या है?",
      a1: "पारंपरिक शूट में महीनों लगते हैं, जबकि हमारा न्यूरल पाइपलाइन 5 से 10 कार्यदिवसों में 8K मास्टर अभियान प्रदान करता है.",
      q2: "क्या आप जेनेरिक टेम्पलेट या कस्टम-निर्मित न्यूरल शेader का उपयोग करते हैं?",
      a2: "हम कभी भी जेनेरिक टेम्पलेट का उपयोग नहीं करते। प्रत्येक शेader और avatar आपके लक्जरी हाउस के अनुरूप कस्टम-इंजीनियर है.",
      q3: "आप बौद्धिक संपदा, NDA अनुपालन और परिसंपत्ति सुरक्षा को कैसे संभालते हैं?",
      a3: "हम पूर्ण विवेक के तहत काम करते हैं। सभी अप्रकाशित डिज़ाइन और CAD फ़ाइलें सख्त द्विपक्षीय NDA के तहत सुरक्षित हैं.",
      q4: "हम परामर्श या मासिक रिटainer सगाई कैसे शुरू करें?",
      a4: "आप नीचे दिए गए प्रस्ताव फॉर्म के माध्यम से अपना brief जमा कर सकते हैं या info@aivienne.com पर संपर्क कर सकते हैं.",
    },
    testimonials: {
      tag: "समीक्षाएं",
      title: "वैश्विक नेताओं का विश्वास",
      desc: "AI.VIENNE Studio+ के साथ काम करने पर क्रिएटिव डायरेक्टर्स के विचार.",
      t1Quote: "AI.VIENNE Studio+ ने एक 8K आभूषण अभियान प्रस्तुत किया जिसने पारंपरिक फोटोग्राफी को पीछे छोड़ दिया.",
      t1Author: "Elena Rostova",
      t1Role: "क्रिएटिव डायरेक्टर, लक्जरी ज्वैलरी (जिनेवा)",
      t2Quote: "फैशन वीक के लिए तैयार किए गए रनवे वीडियो ने हमारे डिजिटल मानकों को पुनः परिभाषित किया.",
      t2Author: "Marcus Vance",
      t2Role: "ब्रांड उपाध्यक्ष, हाउते कॉउचर (पेरिस)",
      t3Quote: "उत्कृष्ट निष्पादन, पूर्ण गोपनीयता और लक्जरी सौंदर्यशास्त्र की गहरी समझ.",
      t3Author: "Sophia Chen",
      t3Role: "मार्केटिंग प्रमुख, लक्जरी एक्सेसरीज़ (मिलान)",
      t4Quote: "दुबई में हमारी लक्जरी घड़ियों के लिए प्रस्तुत विवरण अविश्वसनीय रूप से आश्चर्यजनक थे.",
      t4Author: "Tariq Al-Mansoor",
      t4Role: "प्रबंध निदेशक, रॉयल वॉच एंड ज्वैलरी (दुबई)",
      t5Quote: "उनके सहयोग ने हमें कुछ ही दिनों में एक नया 8K वैश्विक अभियान शुरू करने की अनुमति दी.",
      t5Quote: "Claire Dubois",
      t5Role: "ब्रांड रणनीतिकार, लक्जरी फैशन (न्यू यॉर्क)",
      t6Quote: "एआई मॉडल ने हमारे रत्नों पर प्रकाश के परावर्तन को अत्यंत सटीकता के साथ चित्रित किया.",
      t6Author: "Kenji Takahashi",
      t6Role: "वरिष्ठ दृश्य डिजाइनर, आभूषण (टोक्यो)",
      t7Quote: "यूरोपीय पारंपरिक ब्रांडों के मानकों के अनुरूप उत्कृष्ट सौंदर्यशास्त्र और परिष्कार.",
      t7Quote: "Maximilian Von Berg",
      t7Role: "कला निर्देशक, हेरिटेज एतिलिएर (वियना)",
      t8Quote: "अभूतपूर्व गति और उच्च गुणवत्ता की आवश्यकता वाले अभियानों के लिए एक अनिवार्य भागीदार.",
      t8Author: "Victoria Sterling",
      t8Role: "मुख्य विपणन अधिकारी, प्राइवेट क्लब (लंदन)",
      addReviewBtn: "समीक्षा जोड़ें",
      reviewTitle: "अपनी समीक्षा प्रस्तुत करें",
      reviewDesc: "AI.VIENNE Studio+ के साथ अपने अनुभव को साझा करें.",
      nameLabel: "आपका नाम",
      roleLabel: "पद / ब्रांड का नाम",
      ratingLabel: "रेटिंग",
      commentLabel: "आपकी समीक्षा / प्रतिक्रिया",
      submitReview: "समीक्षा जमा करें",
    },
    contact: {
      tag: "अपना प्रोजेक्ट शुरू करें",
      title: "कस्टम प्रस्ताव का अनुरोध करें",
      desc: "सामग्री निर्माण की नई सीमाओं को छूने के लिए AI.VIENNE Studio+ से जुड़ें.",
      namePlaceholder: "आपका नाम / ब्रांड का नाम",
      emailPlaceholder: "ईमेल पता",
      serviceLabel: "वांछित सेवा चुनें",
      sOpt1: "Cinematic Fashion & Runway Video (8K)",
      sOpt2: "High Jewelry & Gemstone Campaign",
      sOpt3: "Haute Horlogerie & Timepiece Visuals",
      sOpt4: "Haute Parfumerie & Beauty Campaign",
      sOpt5: "Luxury Eyewear & Optics Production",
      sOpt6: "Bespoke Product & High-End Photography",
      sOpt7: "AI Brand Identity & Visual Strategy",
      sOpt8: "Full Digital Runway & Campaign Production",
      uploadTitle: "उत्पाद मीडिया या फ़ाइलें अपलोड करें",
      uploadHint: "अपने डिवाइस से चित्र, वीडियो, सीएडी या फाइलें खींचें या चुनें (PNG, JPG, MP4, MOV, PDF, ZIP)",
      messagePlaceholder: "अपने प्रोजेक्ट या संग्रह के बारे में बताएं...",
      submitBtn: "प्रोजेक्ट संक्षिप्त भेजें",
      directEmail: "सीधा संपर्क: info@aivienne.com",
    },
    footerSection: {
      navTitle: "01 / नेविगेशन",
      dirTitle: "02 / निर्देशिका",
      netTitle: "03 / नेटवर्क",
      studio: "स्टूडियो",
      works: "चयनित कार्य",
      initiate: "संपर्क शुरू करें",
      capabilities: "क्षमताएं",
      cities: "न्यू यॉर्क | लंदन | पेरिस | मिलान | दुबई | वियना | ग्लोबल",
      terms: "नियम और शर्तें",
      privacy: "गोपनीयता नीति",
    },
    modals: {
      termsTitle: "नियम और शर्तें",
      termsBody: "पूर्ण भुगतान पर सभी 8K दृश्य अधिकार ग्राहक को हस्तांतरित कर दिए जाते हैं। आपकी सामग्री का उपयोग सार्वजनिक AI को प्रशिक्षित करने के लिए कभी नहीं किया जाएगा।",
      privacyTitle: "गोपनीयता नीति और NDA",
      privacyBody: "सभी अप्रकाशित संपत्ति सख्त एनडीए समझौतों के तहत सुरक्षित है। जानकारी: info@aivienne.com।",
    },
    footer: "© 2026 AI.VIENNE Studio. सर्वाधिकार सुरक्षित।",
  },
};

// 2. Languages Array Definition With SVG Flag Icons
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
  { code: "HI", name: "हिन्दी", dir: "ltr", flag: "https://flagcdn.com/w40/in.png" },
];

// 3. Portfolio Items Definition with Hover Cinematic Caustics Effects
const PORTFOLIO_ITEMS = [
  {
    id: "1",
    title: "Imperial Diamond Showcase 8K",
    category: "jewelry",
    type: "video",
    badge: "8K CINEMATIC FILM",
    icon: Gem,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    desc: "Exquisite diamond light refraction, ring, necklace & earring macro jewelry rendering.",
    hoverState: "CAUSTICS REFRACTION PASS 8K",
  },
  {
    id: "2",
    title: "Haute Couture Paris Runway Film",
    category: "fashion",
    type: "video",
    badge: "8K RUNWAY FILM",
    icon: Sparkle,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    desc: "Cinematic AI fashion show featuring photorealistic digital avatars and silk drape motion.",
    hoverState: "NEURAL AVATAR SUITE",
  },
  {
    id: "3",
    title: "Haute Horlogerie Royal Tourbillon",
    category: "watch",
    type: "video",
    badge: "8K HORLOGERIE FILM",
    icon: Watch,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    desc: "Ultra-detailed Swiss timepiece mechanics, sapphire glass reflections & gold craftsmanship.",
    hoverState: "MACRO CAUSTICS PASS",
  },
  {
    id: "4",
    title: "Avant-Garde Luxury Eyewear",
    category: "eyewear",
    type: "image",
    badge: "EDITORIAL RENDER",
    icon: Glasses,
    desc: "Titanium frames, tinted lens reflections & high-fashion model portrait rendering.",
    hoverState: "TITANIUM REFLECTION PASS",
  },
  {
    id: "5",
    title: "Haute Parfumerie Royal Essence",
    category: "perfume",
    type: "image",
    badge: "3D MACRO RENDER",
    icon: Sparkles,
    desc: "Hand-cut crystal perfume bottle, fluid liquid motion & surreal ambient lighting.",
    hoverState: "CRYSTAL CAUSTICS PASS",
  },
  {
    id: "6",
    title: "Royal Emerald & Sapphire High Jewelry",
    category: "jewelry",
    type: "image",
    badge: "MACRO DETAIL",
    icon: Gem,
    desc: "Deep emerald green light dispersion and fine platinum earring rendering.",
    hoverState: "PLATINUM DISPERSION PASS",
  },
  {
    id: "7",
    title: "Milan Fashion Week Campaign Film",
    category: "fashion",
    type: "video",
    badge: "8K CINEMATIC FILM",
    icon: Play,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    desc: "Dynamic luxury leather & evening gown campaign staged in surreal architectural sets.",
    hoverState: "ARCHITECTURAL RAYTRACING",
  },
  {
    id: "8",
    title: "Celestial Diamond Timepiece",
    category: "watch",
    type: "image",
    badge: "STUDIO PHOTOGRAPHY",
    icon: Watch,
    desc: "Diamond-encrusted watch bezel, mother-of-pearl dial & precision macro lighting.",
    hoverState: "DIAMOND PAVÉ PASS",
  },
];

// 4. FAQ Items Definition
const FAQ_ITEMS = [
  { id: 1, qKey: "q1", aKey: "a1" },
  { id: 2, qKey: "q2", aKey: "a2" },
  { id: 3, qKey: "q3", aKey: "a3" },
  { id: 4, qKey: "q4", aKey: "a4" },
];

// 5. Main Component
export default function Home() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Estimator States
  const [estimatorTier, setEstimatorTier] = useState<number>(1);
  const [estimatorDelivery, setEstimatorDelivery] = useState<number>(1);

  // VIP Portal States
  const [vipPass, setVipPass] = useState("");
  const [vipStatus, setVipStatus] = useState<"idle" | "error" | "success">("idle");

  // Before / After Slider State for Neural Transformation
  const [sliderPos, setSliderPos] = useState<number>(50);

  // Ambient Audio State
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Custom Cursor Position State
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  // Policy Modal States
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);

  // Interactive Testimonial Submission Modal State
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    rating: 5,
    comment: "",
  });

  // Dynamic Reviews List
  const [customReviews, setCustomReviews] = useState<Array<{ quote: string; author: string; role: string; rating: number }>>([]);

  // Proposal Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "sOpt1",
    message: "",
  });

  // Attached Files State
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const t = TRANSLATIONS[selectedLang.code] || TRANSLATIONS.EN;
  const isRTL = selectedLang.dir === "rtl";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleAudio = () => {
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }
    const ctx = audioContextRef.current;

    if (isAudioPlaying) {
      if (ctx.state === "running") {
        ctx.suspend();
      }
      setIsAudioPlaying(false);
    } else {
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      setIsAudioPlaying(true);

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance("Welcome to AI.VIENNE Studio. Architecting timeless universes.");
        utterance.rate = 0.9;
        utterance.pitch = 0.95;
        utterance.volume = 0.8;
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
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setAttachedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fileNames = attachedFiles.map((f) => f.name).join(", ");
    const mailToUrl = `mailto:info@aivienne.com?subject=New Bespoke Proposal Request - ${formData.name}&body=Name/Brand: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0AAttached Media Files: ${fileNames || "None"}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailToUrl;
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    setCustomReviews([
      {
        quote: newReview.comment,
        author: newReview.name,
        role: newReview.role || "Luxury Partner",
        rating: newReview.rating,
      },
      ...customReviews,
    ]);

    const mailToUrl = `mailto:info@aivienne.com?subject=New Client Review Submission - ${newReview.name}&body=Name: ${newReview.name}%0D%0ARole/Brand: ${newReview.role}%0D%0ARating: ${newReview.rating} Stars%0D%0AComment: ${newReview.comment}`;
    window.location.href = mailToUrl;

    setIsReviewModalOpen(false);
    setNewReview({ name: "", role: "", rating: 5, comment: "" });
  };

  const handleVipLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (vipPass.trim().toUpperCase() === "AIVIENNE-VIP" || vipPass.trim().toLowerCase() === "vip") {
      setVipStatus("success");
    } else {
      setVipStatus("error");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      dir={selectedLang.dir}
      className={`min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/20 selection:text-amber-200 relative ${
        isRTL ? "font-serif" : ""
      }`}
    >
      {/* Custom Luxury Gold Cursor Ring */}
      <div
        className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-amber-400/80 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />
      <div
        className="fixed pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-amber-400 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Background Glow & Subtle Ambient Particles */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.12),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Interactive Add Review Modal */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setIsReviewModalOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-400 transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <MessageSquarePlus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-100">{t.testimonials.reviewTitle}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{t.testimonials.reviewDesc}</p>
                </div>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2">
                      {t.testimonials.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Jean-Luc Moreau"
                      className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-100 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2">
                      {t.testimonials.roleLabel}
                    </label>
                    <input
                      type="text"
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      placeholder="e.g. CMO, Luxury House (Paris)"
                      className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-100 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2">
                    {t.testimonials.ratingLabel}
                  </label>
                  <div className="flex items-center gap-2 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="cursor-pointer transition-transform hover:scale-125"
                      >
                        <Star className={`w-6 h-6 ${star <= newReview.rating ? "fill-amber-400 text-amber-400" : "text-neutral-700"}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2">
                    {t.testimonials.commentLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Share your thoughts..."
                    className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-100 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(251,191,36,0.2)] uppercase"
                  >
                    <Send className="w-4 h-4" /> {t.testimonials.submitReview}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms & Privacy Interactive Pop-up Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-8 md:p-14 shadow-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-400 transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  {activeModal === "terms" ? <FileText className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                </div>
                <h3 className="text-3xl font-bold text-neutral-100">
                  {activeModal === "terms" ? t.modals.termsTitle : t.modals.privacyTitle}
                </h3>
              </div>

              <div className="text-base text-neutral-300 leading-relaxed space-y-6 max-h-[60vh] overflow-y-auto pr-4 whitespace-pre-line">
                <p>{activeModal === "terms" ? t.modals.termsBody : t.modals.privacyBody}</p>
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-8 py-3 rounded-full text-sm font-semibold bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-400 transition-all z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-black">
              <video src={activeVideo} controls autoPlay className="w-full h-full object-cover" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
        <div className="w-full px-8 md:px-16 h-24 flex items-center justify-between">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-4 cursor-pointer text-left group"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[1px]">
              <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="font-extrabold text-2xl tracking-wider text-neutral-100 group-hover:text-amber-400 transition-colors">
              AI.VIENNE <span className="text-amber-400 font-light">STUDIO+</span>
            </span>
          </button>

          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold tracking-wide text-neutral-300">
            <a href="#portfolio" className="hover:text-amber-400 transition-colors uppercase">{t.nav.portfolio}</a>
            <a href="#transformation" className="hover:text-amber-400 transition-colors uppercase">{t.nav.transformation}</a>
            <a href="#about" className="hover:text-amber-400 transition-colors uppercase">{t.nav.about}</a>
            <a href="#services" className="hover:text-amber-400 transition-colors uppercase">{t.nav.services}</a>
            <a href="#workflow" className="hover:text-amber-400 transition-colors uppercase">{t.nav.workflow}</a>
            <a href="#estimator" className="hover:text-amber-400 transition-colors uppercase">{t.nav.calculator}</a>
            <a href="#portal" className="hover:text-amber-400 transition-colors uppercase">{t.nav.portal}</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors uppercase">{t.nav.testimonials}</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors uppercase">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors uppercase">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-5">
            {/* Ambient Soundscape & Voiceover Toggle Button */}
            <button
              type="button"
              onClick={toggleAudio}
              className={`flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border transition-all cursor-pointer ${
                isAudioPlaying
                  ? "bg-amber-400 text-neutral-950 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                  : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-amber-500/50"
              }`}
              title="Toggle Narration & Ambient Soundscape"
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{isAudioPlaying ? "SOUND ON" : "VOICEOVER"}</span>
            </button>

            {/* Language Switcher Dropdown With Flags */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2.5 text-sm font-semibold text-neutral-300 border border-neutral-800 bg-neutral-900/80 hover:border-amber-500/50 rounded-full px-4 py-2 transition-all cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selectedLang.flag} alt={selectedLang.name} className="w-5 h-3.5 object-cover rounded-sm" />
                <span>{selectedLang.code}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-52 max-h-72 overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-lg shadow-2xl p-2 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                        selectedLang.code === lang.code
                          ? "bg-amber-400/10 text-amber-400"
                          : "text-neutral-300 hover:bg-neutral-800/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={lang.flag} alt={lang.name} className="w-5 h-3.5 object-cover rounded-sm" />
                        <span>{lang.name}</span>
                      </div>
                      <span className="text-[10px] text-neutral-500">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="mailto:info@aivienne.com"
              className="hidden sm:inline-flex px-7 py-3 rounded-full text-xs font-bold tracking-widest text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-[0_0_25px_rgba(251,191,36,0.2)] uppercase"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full px-8 md:px-16 pt-32 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-sm font-semibold text-amber-300 mb-10">
            <Sparkles className="w-4 h-4" /> {t.hero.badge}
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold tracking-tight text-neutral-100 max-w-7xl mx-auto leading-[1.05]">
            {t.hero.titleStart} <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">{t.hero.titleGradient}</span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-5 rounded-full text-base font-bold tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(251,191,36,0.3)]"
            >
              {t.hero.btnPrimary} <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@aivienne.com"
              className="w-full sm:w-auto px-10 py-5 rounded-full text-base font-bold tracking-wide text-neutral-300 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5 text-amber-400" /> {t.hero.btnSecondary}
            </a>
          </div>
        </motion.div>
      </section>

      {/* BRAND MANIFESTO BANNER */}
      <section className="relative z-10 w-full px-8 md:px-16 py-20 border-y border-neutral-800/80 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase mb-4 block">
            {t.manifesto.sub}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-neutral-400 tracking-wide mb-2">
            {t.manifesto.line1}
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-100 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            {t.manifesto.line2}
          </h2>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
          <div>
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.portfolio.tag}</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.portfolio.title}</h2>
          </div>
          <p className="text-neutral-400 text-base max-w-xl mt-6 md:mt-0 leading-relaxed">{t.portfolio.desc}</p>
        </div>

        {/* Niche Luxury Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-14">
          {[
            { id: "all", label: t.portfolio.filterAll },
            { id: "jewelry", label: t.portfolio.filterJewelry },
            { id: "fashion", label: t.portfolio.filterFashion },
            { id: "watch", label: t.portfolio.filterWatch },
            { id: "eyewear", label: t.portfolio.filterEyewear },
            { id: "perfume", label: t.portfolio.filterPerfume },
            { id: "video", label: t.portfolio.filterVideo },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === btn.id
                  ? "bg-amber-400 text-neutral-950 shadow-[0_0_20px_rgba(251,191,36,0.25)]"
                  : "bg-neutral-900/80 text-neutral-400 border border-neutral-800 hover:border-neutral-700 hover:text-neutral-200"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl border border-neutral-800 bg-neutral-900/40 p-7 hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative h-72 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800/80 flex items-center justify-center overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                  {item.type === "video" ? (
                    <button
                      onClick={() => setActiveVideo(item.videoUrl || "")}
                      className="w-16 h-16 rounded-full bg-amber-400/90 hover:bg-amber-300 text-neutral-950 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.35)] group-hover:scale-110 transition-all cursor-pointer z-10"
                    >
                      <Play className="w-7 h-7 ml-1 fill-neutral-950" />
                    </button>
                  ) : (
                    <div className="text-amber-400/50 group-hover:text-amber-400 transition-colors">
                      <item.icon className="w-12 h-12" />
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <span className="text-[10px] font-extrabold tracking-[0.25em] text-amber-400 uppercase mb-2">
                    Caustics Refraction Active
                  </span>
                  <p className="text-sm font-bold text-neutral-100 tracking-wide mb-4">
                    {item.hoverState}
                  </p>
                  {item.type === "video" ? (
                    <button
                      onClick={() => setActiveVideo(item.videoUrl || "")}
                      className="px-6 py-2.5 rounded-full bg-amber-400 text-neutral-950 text-xs font-extrabold tracking-wider uppercase flex items-center gap-2 hover:bg-amber-300 transition-colors cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-neutral-950" /> {t.portfolio.playVideo}
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold uppercase tracking-wider">
                      <Eye className="w-4 h-4" /> 8K Photorealistic Pass
                    </span>
                  )}
                </div>

                <span className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase text-amber-300 bg-neutral-950/80 border border-amber-500/30 px-4 py-1.5 rounded-full backdrop-blur-md z-30 pointer-events-none">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">{item.desc}</p>
              </div>

              {item.type === "video" && (
                <button
                  onClick={() => setActiveVideo(item.videoUrl || "")}
                  className="w-full py-3.5 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:bg-amber-400 hover:text-neutral-950 hover:border-amber-400 text-xs font-bold uppercase text-neutral-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4" /> {t.portfolio.playVideo}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* NEURAL TRANSFORMATION SECTION (Fixed Layout Collision) */}
      <section id="transformation" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50 bg-neutral-900/15">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.transformation.tag}</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.transformation.title}</h2>
            <p className="mt-4 text-neutral-400 text-base max-w-2xl mx-auto">{t.transformation.desc}</p>
          </div>

          <div className="relative w-full aspect-[16/9] max-h-[580px] rounded-3xl border border-amber-500/40 overflow-hidden shadow-[0_0_50px_rgba(217,119,6,0.15)] bg-neutral-950 select-none">
            
            {/* AFTER SIDE (Right Background Layer) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.25),transparent_60%)] bg-neutral-950 flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px]" />
              
              <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[1px] mb-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                  <div className="w-full h-full bg-neutral-950 rounded-2xl flex items-center justify-center">
                    <Gem className="w-8 h-8 md:w-10 md:h-10 text-amber-400 animate-pulse" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 tracking-tight">
                  AI.VIENNE 8K Master Suite
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-amber-200/80 mt-3 font-light max-w-md">
                  Subsurface scattering, Raytraced caustics refraction & Haute Couture color grading.
                </p>
              </div>

              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-400/40 text-[10px] md:text-xs font-extrabold text-amber-300 uppercase tracking-widest backdrop-blur-xl shadow-lg z-10">
                ✨ {t.transformation.afterLabel}
              </div>
            </div>

            {/* BEFORE SIDE (Left Clipping Layer) */}
            <div
              className="absolute inset-0 bg-neutral-900 overflow-hidden border-r-2 border-amber-400 z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="absolute inset-0 w-full h-full flex items-center justify-center" style={{ width: '100vw', maxWidth: '1200px' }}>
                <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-neutral-800 border border-neutral-700 mb-6 flex items-center justify-center text-neutral-400 shadow-inner">
                    <Camera className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-neutral-400 tracking-tight">
                    Standard Flat Capture
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-500 mt-3 font-light max-w-md">
                    Raw studio exposure, flat lighting, high logistic cost & no neural enhancement.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 px-4 py-2 rounded-2xl bg-neutral-950/90 border border-neutral-800 text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-widest backdrop-blur-xl z-20">
                ⚠️ {t.transformation.beforeLabel}
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
            />

            <div
              className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 pointer-events-none z-30 shadow-[0_0_20px_#fbbf24]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.8)] font-black text-sm pointer-events-none">
                ↔
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.about.tag}</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.about.title}</h2>
            </div>
            <p className="text-neutral-400 text-base max-w-xl mt-6 md:mt-0 leading-relaxed">{t.about.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {[
              { icon: Compass, title: t.about.card1Title, desc: t.about.card1Desc },
              { icon: Cpu, title: t.about.card2Title, desc: t.about.card2Desc },
              { icon: Award, title: t.about.card3Title, desc: t.about.card3Desc },
            ].map((card, idx) => (
              <div key={idx} className="p-10 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 hover:border-amber-500/40 transition-all duration-300 group">
                <card.icon className="w-10 h-10 text-amber-400 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-neutral-100 mb-4">{card.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 rounded-3xl border border-neutral-800 bg-neutral-900/20 text-center">
            <div>
              <p className="text-5xl font-black text-amber-400 mb-2">{t.about.stat1Number}</p>
              <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">{t.about.stat1Label}</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-neutral-800 py-6 md:py-0">
              <p className="text-5xl font-black text-amber-400 mb-2">{t.about.stat2Number}</p>
              <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">{t.about.stat2Label}</p>
            </div>
            <div>
              <p className="text-5xl font-black text-amber-400 mb-2">{t.about.stat3Number}</p>
              <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">{t.about.stat3Label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estimator Section */}
      <section id="estimator" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50 bg-neutral-900/20">
        <div className="max-w-5xl mx-auto bg-neutral-900/60 border border-amber-500/30 p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.estimator.tag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mt-1">{t.estimator.title}</h2>
            </div>
          </div>
          <p className="text-neutral-400 text-base mb-10">{t.estimator.desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-4">
                {t.estimator.scaleLabel}
              </label>
              <div className="space-y-3">
                {[
                  { tier: 1, label: t.estimator.tier1 },
                  { tier: 2, label: t.estimator.tier2 },
                  { tier: 3, label: t.estimator.tier3 },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.tier}
                    onClick={() => setEstimatorTier(item.tier)}
                    className={`w-full text-left p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      estimatorTier === item.tier
                        ? "bg-amber-400/10 border-amber-400 text-amber-300"
                        : "bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${estimatorTier === item.tier ? "border-amber-400 bg-amber-400" : "border-neutral-700"}`}>
                      {estimatorTier === item.tier && <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-4">
                {t.estimator.deliveryLabel}
              </label>
              <div className="space-y-3">
                {[
                  { speed: 1, label: t.estimator.standard },
                  { speed: 1.3, label: t.estimator.express },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.speed}
                    onClick={() => setEstimatorDelivery(item.speed)}
                    className={`w-full text-left p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      estimatorDelivery === item.speed
                        ? "bg-amber-400/10 border-amber-400 text-amber-300"
                        : "bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${estimatorDelivery === item.speed ? "border-amber-400 bg-amber-400" : "border-neutral-700"}`}>
                      {estimatorDelivery === item.speed && <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-neutral-950 border border-amber-500/40 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{t.estimator.estInvestment}</p>
                </div>
                <div className="text-2xl md:text-3xl font-black text-amber-400">
                  {estimatorTier === 1 && (estimatorDelivery === 1 ? t.estimator.range1 : "$2,000 – $4,500")}
                  {estimatorTier === 2 && (estimatorDelivery === 1 ? t.estimator.range2 : "$6,500 – $15,000")}
                  {estimatorTier === 3 && (estimatorDelivery === 1 ? t.estimator.range3 : "$22,000 – $42,000+")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portal Section */}
      <section id="portal" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto bg-neutral-900/30 border border-neutral-800 p-10 md:p-14 rounded-3xl backdrop-blur-sm text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6">
            <Lock className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.portal.tag}</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-100 mt-2 mb-4">{t.portal.title}</h2>
          <p className="text-neutral-400 text-base max-w-xl mx-auto mb-10 leading-relaxed">{t.portal.desc}</p>

          {vipStatus !== "success" ? (
            <form onSubmit={handleVipLogin} className="max-w-md mx-auto space-y-4">
              <div className="flex gap-3">
                <input
                  type="password"
                  required
                  value={vipPass}
                  onChange={(e) => setVipPass(e.target.value)}
                  placeholder={t.portal.passPlaceholder}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-sm text-neutral-100 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-2xl bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all cursor-pointer shrink-0"
                >
                  {t.portal.loginBtn}
                </button>
              </div>

              {vipStatus === "error" && (
                <p className="text-xs text-red-400 font-semibold pt-2">{t.portal.errorMsg}</p>
              )}
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 text-left">
              <div className="p-6 rounded-2xl bg-amber-400/10 border border-amber-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-amber-300">{t.portal.vaultTitle}</h4>
                  <p className="text-xs text-neutral-300 mt-1">{t.portal.successMsg}</p>
                  <p className="text-[11px] text-amber-400/80 mt-2 italic font-mono">{t.portal.watermarkNotice}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setVipStatus("idle")}
                  className="text-xs font-bold text-neutral-400 hover:text-white underline cursor-pointer shrink-0"
                >
                  Lock Vault
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: "Imperial Diamond 8K Master.exr", size: "1.4 GB", type: "RAW 3D Render" },
                  { name: "Haute Couture Runway 120fps.mov", size: "3.8 GB", type: "Master Video" },
                  { name: "Tourbillon Watch CAD & Shaders.zip", size: "850 MB", type: "Production Assets" },
                ].map((file, i) => (
                  <div key={i} className="relative p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center rotate-[-25deg] opacity-[0.06] text-amber-400 text-xs font-black uppercase tracking-widest select-none">
                      AI.VIENNE SECURE PARTNER
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-amber-400 mb-3">
                        <FileText className="w-5 h-5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{file.type}</span>
                      </div>
                      <h5 className="text-sm font-bold text-neutral-100 truncate mb-1">{file.name}</h5>
                      <p className="text-xs text-neutral-500">{file.size}</p>
                    </div>
                    <a
                      href="#download"
                      onClick={(e) => { e.preventDefault(); alert(`Downloading watermarked secure asset: ${file.name}`); }}
                      className="mt-6 w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-amber-400 hover:text-neutral-950 text-xs font-bold uppercase tracking-wider text-neutral-300 transition-all flex items-center justify-center gap-2 cursor-pointer z-10"
                    >
                      <Download className="w-4 h-4" /> {t.portal.downloadAsset}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Proposal Form Section */}
      <section id="contact" className="relative z-10 w-full px-8 md:px-16 py-28 border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.contact.tag}</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.contact.title}</h2>
            <p className="mt-4 text-neutral-400 text-base max-w-2xl mx-auto">{t.contact.desc}</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-8 bg-neutral-900/30 border border-neutral-800 p-10 md:p-14 rounded-3xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-3">{t.contact.namePlaceholder}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-base text-neutral-100 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-3">{t.contact.emailPlaceholder}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-base text-neutral-100 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-3">{t.contact.serviceLabel}</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-base text-neutral-100 outline-none transition-colors cursor-pointer"
              >
                <option value="sOpt1">{t.contact.sOpt1}</option>
                <option value="sOpt2">{t.contact.sOpt2}</option>
                <option value="sOpt3">{t.contact.sOpt3}</option>
                <option value="sOpt4">{t.contact.sOpt4}</option>
                <option value="sOpt5">{t.contact.sOpt5}</option>
                <option value="sOpt6">{t.contact.sOpt6}</option>
                <option value="sOpt7">{t.contact.sOpt7}</option>
                <option value="sOpt8">{t.contact.sOpt8}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-3">{t.contact.uploadTitle}</label>
              <div className="relative border-2 border-dashed border-neutral-800 hover:border-amber-500/50 rounded-2xl p-8 bg-neutral-950/60 text-center transition-colors group cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  accept="image/*,video/*,.pdf,.zip,.cad,.obj"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-neutral-300 max-w-md leading-relaxed">{t.contact.uploadHint}</p>
                </div>
              </div>

              {attachedFiles.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {attachedFiles.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-neutral-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-200">
                      <Paperclip className="w-3.5 h-3.5 text-amber-400" />
                      <span className="max-w-[150px] truncate">{file.name}</span>
                      <button type="button" onClick={() => removeFile(idx)} className="text-neutral-500 hover:text-red-400 transition-colors ml-1 cursor-pointer">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-3">{t.contact.messagePlaceholder}</label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.contact.messagePlaceholder}
                className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-amber-400 rounded-2xl px-6 py-4 text-base text-neutral-100 outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-5 rounded-full text-base font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(251,191,36,0.25)] cursor-pointer"
              >
                <Send className="w-5 h-5" /> {t.contact.submitBtn}
              </button>
              <a href="mailto:info@aivienne.com" className="text-sm font-semibold text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" /> {t.contact.directEmail}
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Gold Signature Footer Section */}
      <footer className="relative z-10 pt-20 pb-12 px-6 sm:px-12 md:px-16">
        <div className="w-full bg-amber-400 text-neutral-950 rounded-[40px] p-10 md:p-20 shadow-[0_0_60px_rgba(251,191,36,0.18)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-20 border-b border-neutral-950/20">
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-8">
                {t.footerSection.navTitle}
              </span>
              <ul className="space-y-4 text-base font-semibold">
                <li><a href="#about" className="hover:opacity-75 transition-opacity block">{t.footerSection.studio}</a></li>
                <li><a href="#portfolio" className="hover:opacity-75 transition-opacity block">{t.footerSection.works}</a></li>
                <li><a href="#transformation" className="hover:opacity-75 transition-opacity block">{t.nav.transformation}</a></li>
                <li><a href="#estimator" className="hover:opacity-75 transition-opacity block">{t.nav.calculator}</a></li>
                <li><a href="#portal" className="hover:opacity-75 transition-opacity block">{t.nav.portal}</a></li>
                <li><a href="#faq" className="hover:opacity-75 transition-opacity block">{t.nav.faq}</a></li>
                <li><a href="#contact" className="hover:opacity-75 transition-opacity block">{t.footerSection.initiate}</a></li>
              </ul>
            </div>
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-8">
                {t.footerSection.dirTitle}
              </span>
              <div className="space-y-5 text-base font-semibold">
                <a href="mailto:info@aivienne.com" className="text-lg font-bold underline decoration-neutral-950/40 underline-offset-4 hover:opacity-75 transition-opacity block">
                  info@aivienne.com
                </a>
                <p className="text-sm font-medium leading-relaxed opacity-90">{t.footerSection.cities}</p>
              </div>
            </div>
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-8">
                {t.footerSection.netTitle}
              </span>
              <ul className="space-y-4 text-base font-semibold">
                <li><a href="mailto:info@aivienne.com" className="hover:opacity-75 transition-opacity block">Email: info@aivienne.com</a></li>
                <li><a href="https://instagram.com/ai.vienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity block">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="py-12 text-center md:text-left overflow-hidden">
            <h1 className="text-[11vw] leading-[0.9] font-black tracking-tighter text-neutral-950 select-none">
              AI.VIENNE Studio+
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm font-bold pt-8 border-t border-neutral-950/20">
            <p>{t.footer}</p>
            <div className="flex items-center gap-8">
              <button type="button" onClick={() => setActiveModal("terms")} className="hover:opacity-75 transition-opacity cursor-pointer font-bold underline underline-offset-4">
                {t.footerSection.terms}
              </button>
              <button type="button" onClick={() => setActiveModal("privacy")} className="hover:opacity-75 transition-opacity cursor-pointer font-bold underline underline-offset-4">
                {t.footerSection.privacy}
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="tracking-widest">AI.VIENNE STUDIO+</span>
              <button type="button" onClick={scrollToTop} className="w-10 h-10 rounded-full bg-neutral-950 text-amber-400 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}