"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import { TRANSLATIONS, LANGUAGES } from "@/data/translations";
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
  Menu,
  type LucideIcon
} from "lucide-react";

// Gelişmiş Base64 ve Etkileşimli Şifreli E-Posta Bileşeni (Botlara ve Scraping'e Karşı Tam Güvenli)
function SafeEmailLink({ className = "" }: { className?: string }) {
  const encodedEmail = "aW5mb0BhaXZpZW5uZS5jb20="; // "info@aivienne.com" Base64
  const [revealed, setRevealed] = useState(false);
  const [decodedEmail, setDecodedEmail] = useState("info [at] aivienne.com");

  const handleReveal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!revealed) {
      e.preventDefault();
      try {
        const actualEmail = atob(encodedEmail);
        setDecodedEmail(actualEmail);
        setRevealed(true);
        window.location.href = `mailto:${actualEmail}`;
      } catch {
        window.location.href = "mailto:info@aivienne.com";
      }
    }
  };

  return (
    <a 
      href="mailto:info@aivienne.com" 
      onClick={handleReveal}
      onMouseEnter={() => {
        if (!revealed) {
          try {
            setDecodedEmail(atob(encodedEmail));
            setRevealed(true);
          } catch {
            // Hata yutulur
          }
        }
      }}
      className={className}
    >
      {decodedEmail}
    </a>
  );
}

interface CaseStudyItem {
  id: string;
  conceptNum: string;
  titleKey: string;
  disciplineKey: string;
  category: "jewelry" | "fashion" | "watch" | "eyewear" | "perfume";
  aspect: "16:9" | "9:16";
  type: "video" | "image";
  badge: string;
  icon: LucideIcon;
  poster: string;
  videoUrl: string;
  descKey: string;
  briefKey: string;
  directionKey: string;
  productionKey: string;
  materialStudyKey: string;
  deliverablesKey: string;
  productionNotesKey: string;
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
    titleKey: "p1Title",
    disciplineKey: "p1Disc",
    category: "jewelry", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 CINEMATIC STUDY", 
    icon: Gem, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/obsidian-necklace.mp4", 
    descKey: "p1Desc", 
    briefKey: "p1Brief",
    directionKey: "p1Dir",
    productionKey: "p1Prod",
    materialStudyKey: "p1Mat",
    deliverablesKey: "p1Deliv",
    productionNotesKey: "p1Notes"
  },
  { 
    id: "2", 
    conceptNum: "CONCEPT / 02",
    titleKey: "p2Title",
    disciplineKey: "p2Disc",
    category: "fashion", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 VERTICAL MOTION", 
    icon: Sparkle, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/2.mp4", 
    descKey: "p2Desc", 
    briefKey: "p2Brief",
    directionKey: "p2Dir",
    productionKey: "p2Prod",
    materialStudyKey: "p2Mat",
    deliverablesKey: "p2Deliv",
    productionNotesKey: "p2Notes"
  },
  { 
    id: "3", 
    conceptNum: "CONCEPT / 03",
    titleKey: "p3Title",
    disciplineKey: "p3Disc",
    category: "watch", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 HOROLOGY STUDY", 
    icon: Watch, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/aurelia-campaign-loop.mp4", 
    descKey: "p3Desc", 
    briefKey: "p3Brief",
    directionKey: "p3Dir",
    productionKey: "p3Prod",
    materialStudyKey: "p3Mat",
    deliverablesKey: "p3Deliv",
    productionNotesKey: "p3Notes"
  },
  { 
    id: "4", 
    conceptNum: "CONCEPT / 04",
    titleKey: "p4Title",
    disciplineKey: "p4Disc",
    category: "eyewear", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 EDITORIAL POSTER", 
    icon: Glasses, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/titanium-eyewear.mp4", 
    descKey: "p4Desc", 
    briefKey: "p4Brief",
    directionKey: "p4Dir",
    productionKey: "p4Prod",
    materialStudyKey: "p4Mat",
    deliverablesKey: "p4Deliv",
    productionNotesKey: "p4Notes"
  },
  { 
    id: "5", 
    conceptNum: "CONCEPT / 05",
    titleKey: "p5Title",
    disciplineKey: "p5Disc",
    category: "perfume", 
    aspect: "16:9",
    type: "video", 
    badge: "16:9 MACRO STUDY", 
    icon: Sparkles, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/crystal-perfume.mp4", 
    descKey: "p5Desc", 
    briefKey: "p5Brief",
    directionKey: "p5Dir",
    productionKey: "p5Prod",
    materialStudyKey: "p5Mat",
    deliverablesKey: "p5Deliv",
    productionNotesKey: "p5Notes"
  },
  { 
    id: "6", 
    conceptNum: "CONCEPT / 06",
    titleKey: "p6Title",
    disciplineKey: "p6Disc",
    category: "jewelry", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 HIGH JEWELRY", 
    icon: Gem, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/emerald-ring.mp4", 
    descKey: "p6Desc", 
    briefKey: "p6Brief",
    directionKey: "p6Dir",
    productionKey: "p6Prod",
    materialStudyKey: "p6Mat",
    deliverablesKey: "p6Deliv",
    productionNotesKey: "p6Notes"
  },
  { 
    id: "7", 
    conceptNum: "CONCEPT / 07",
    titleKey: "p7Title",
    disciplineKey: "p7Disc",
    category: "watch", 
    aspect: "16:9",
    type: "video", 
    badge: "9:16 TIMEPIECE MASTER", 
    icon: Watch, 
    poster: "/vienne-portrait.jpg",
    videoUrl: "/watch-promo.mp4", 
    descKey: "p7Desc", 
    briefKey: "p7Brief",
    directionKey: "p7Dir",
    productionKey: "p7Prod",
    materialStudyKey: "p7Mat",
    deliverablesKey: "p7Deliv",
    productionNotesKey: "p7Notes"
  },
  { 
    id: "8", 
    conceptNum: "CONCEPT / 08",
    titleKey: "p8Title",
    disciplineKey: "p8Disc",
    category: "jewelry", 
    aspect: "9:16",
    type: "video", 
    badge: "9:16 HIGH JEWELRY", 
    icon: Gem, 
    poster: "/traditional-raw.jpg",
    videoUrl: "/jewelry-reel.mp4", 
    descKey: "p8Desc", 
    briefKey: "p8Brief",
    directionKey: "p8Dir",
    productionKey: "p8Prod",
    materialStudyKey: "p8Mat",
    deliverablesKey: "p8Deliv",
    productionNotesKey: "p8Notes"
  }
];

const DIGITAL_TWINS = [
  { 
    id: "vienne", 
    nameKey: "twin1Name", 
    roleKey: "twin1Role", 
    lightingKey: "twin1Lighting", 
    outfitKey: "twin1Outfit", 
    bg: "from-amber-900/40 via-neutral-950 to-neutral-950",
    poster: "/vienne-portrait.jpg",
    video: "/vienne-campaign-loop.mp4"
  },
  { 
    id: "aurelia", 
    nameKey: "twin2Name", 
    roleKey: "twin2Role", 
    lightingKey: "twin2Lighting", 
    outfitKey: "twin2Outfit", 
    bg: "from-blue-900/40 via-neutral-950 to-neutral-950",
    poster: "/vienne-portrait.jpg",
    video: "/aurelia-avatar.mp4"
  }
];

export default function Home() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [isMounted, setIsMounted] = useState(false);

  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const studioMenuRef = useRef<HTMLDivElement | null>(null);

  const [estType, setEstType] = useState<"still" | "motion" | "char" | "full">("still");
  const [estVolume, setEstVolume] = useState<"vol1" | "vol2" | "vol3" | "vol4">("vol1");
  const [estComplexity, setEstComplexity] = useState<"std" | "prem" | "camp">("std");
  const [estTimeline, setEstTimeline] = useState<"std" | "exp">("std");

  const [sliderPos, setSliderPos] = useState<number>(50);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<any | null>(null);

  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const twinVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isRightVideoMuted, setIsRightVideoMuted] = useState<boolean>(true);
  const rightVideoRef = useRef<HTMLVideoElement | null>(null);

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
    priorityTrack: false,
    message: "",
    hp_website_check: ""
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

  const emailContainerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const savedLangCode = localStorage.getItem("aivienne_lang");
    if (savedLangCode) {
      const found = LANGUAGES.find(l => l.code === savedLangCode);
      if (found) {
        setSelectedLang(found);
      }
    }
  }, []);

  const t = TRANSLATIONS[selectedLang.code] || TRANSLATIONS.EN;
  const isRTL = selectedLang.dir === "rtl";

  useEffect(() => {
    if (emailContainerRef.current) {
      emailContainerRef.current.innerHTML = "";
      const user = "info";
      const domain = "aivienne.com";
      const link = document.createElement("a");
      link.href = "mailto:" + user + "@" + domain;
      link.className = "text-base sm:text-lg font-bold underline underline-offset-4 hover:opacity-75 block text-neutral-950";
      link.innerText = user + "@" + domain;
      emailContainerRef.current.appendChild(link);
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
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
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
        setIsDeskOpen(false);
        setIsMobileMenuOpen(false);
        setIsLangOpen(false);
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
        alert(t.ui?.uploadLimitError || "Some files were not added because they exceed the 25MB limit.");
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
      data.append("priorityTrack", String(formData.priorityTrack));
      data.append("message", formData.message);
      data.append("hp_website_check", formData.hp_website_check);

      attachedFiles.forEach((file) => {
        data.append("files", file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t.ui?.emailError || "Unable to send the email.");
      }

      setFormStatus({ success: t.ui?.success || "Your project brief has been submitted successfully. We will respond within 24 hours." });
      setFormData({
        name: "",
        email: "",
        website: "",
        launchDate: "",
        service: "sOpt1",
        budget: "bOpt1",
        requireNDA: true,
        priorityTrack: false,
        message: "",
        hp_website_check: ""
      });
      setAttachedFiles([]);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : (t.ui?.unknownError || "An unknown error occurred");
      setFormStatus({ error: (t.ui?.submissionError || "Submission Error: ") + errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

  const handleReserveSlotClick = () => {
    setFormData(prev => ({
      ...prev,
      priorityTrack: true,
      service: "sOpt1",
      budget: "bOpt1",
      message: `[PRIORITY PRODUCTION TRACK & RESERVATION INQUIRY]\nScope: $1,500 Calendar Reservation Deposit\n\nWe would like to lock our campaign production dates and request the official booking reservation invoice and USD wire transfer details.`
    }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const applyBriefToForm = () => {
    let mappedService = "sOpt7"; 
    if (briefSegment === "High Jewelry & Gems" || briefSegment === "Swiss Horlogerie Timepiece") {
      mappedService = "sOpt2"; 
    } else if (briefSegment === "Haute Couture Runway") {
      mappedService = "sOpt1"; 
    }

    setFormData(prev => ({
      ...prev,
      service: mappedService,
      message: `[BRIEF ARCHITECT CONFIGURATION]\n----------------------------------------\n• Lighting Architecture: ${briefLighting}\n• Industry Discipline: ${briefSegment}\n• Spatial Atmosphere: ${briefAtmosphere}\n----------------------------------------\nPlease review these pre-configured aesthetic parameters and prepare an official production proposal.`
    }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const applyEstimateToForm = () => {
    const rangeStr = calculateEstimate();
    
    let mappedService = "sOpt7"; 
    if (estType === "still") mappedService = "sOpt1"; 
    if (estType === "motion") mappedService = "sOpt4"; 
    if (estType === "char") mappedService = "sOpt3"; 
    
    let base = 5000;
    if (estType === "motion") base = 7500;
    if (estType === "char") base = 9000;
    if (estType === "full") base = 15000;
    let multiplier = 1;
    if (estVolume === "vol2") multiplier = 2.0;
    if (estVolume === "vol3") multiplier = 3.5;
    if (estVolume === "vol4") multiplier = 7.0;
    let compMultiplier = 1;
    if (estComplexity === "prem") compMultiplier = 1.35;
    if (estComplexity === "camp") compMultiplier = 1.8;
    let timelineMultiplier = 1;
    if (estTimeline === "exp") timelineMultiplier = 1.25;
    const lowEstimate = Math.round(base * multiplier * compMultiplier * timelineMultiplier);

    let mappedBudget = "bOpt1";
    if (lowEstimate >= 15000) mappedBudget = "bOpt3"; 
    else if (lowEstimate > 5000) mappedBudget = "bOpt2"; 

    setFormData(prev => ({
      ...prev,
      service: mappedService,
      budget: mappedBudget,
      message: `[PROJECT ESTIMATE REQUEST]\n----------------------------------------\n• Calculated Range: ${rangeStr}\n• Deliverable Type: ${estType}\n• Asset Volume: ${estVolume}\n• Complexity Grade: ${estComplexity}\n• Schedule Priority: ${estTimeline}\n----------------------------------------\nPlease review these estimated parameters and provide an official proposal.`
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
    let base = 5000;
    if (estType === "motion") base = 7500;
    if (estType === "char") base = 9000;
    if (estType === "full") base = 15000;

    let multiplier = 1;
    if (estVolume === "vol2") multiplier = 2.0;
    if (estVolume === "vol3") multiplier = 3.5;
    if (estVolume === "vol4") multiplier = 7.0;

    let compMultiplier = 1;
    if (estComplexity === "prem") compMultiplier = 1.35;
    if (estComplexity === "camp") compMultiplier = 1.8;

    let timelineMultiplier = 1;
    if (estTimeline === "exp") timelineMultiplier = 1.25;

    const low = Math.round(base * multiplier * compMultiplier * timelineMultiplier);
    const high = Math.round(low * 1.5);

    return `$${low.toLocaleString()} – $${high.toLocaleString()}`;
  };

  if (!isMounted) {
    return <main className="min-h-screen bg-neutral-950" />;
  }

  return (
    <main dir={selectedLang.dir} className={`min-h-screen w-full max-w-full overflow-x-hidden bg-neutral-950 text-neutral-100 selection:bg-amber-500/20 selection:text-amber-200 relative pt-16 sm:pt-24 ${isRTL ? "font-serif" : ""}`}>
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
                aria-label={t.portfolio?.closeModal || "Close Master Player"} 
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
                    preload="metadata" 
                    controls 
                    playsInline 
                    poster={activeCaseStudy.poster} 
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
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">01 · {t.ui?.creativeBrief || "Creative Brief"}</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-light">{activeCaseStudy.brief}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">02 · {t.ui?.creativeDirection || "Creative Direction"}</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-light">{activeCaseStudy.direction}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">03 · {t.ui?.productionApproach || "Production Approach"}</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-light">{activeCaseStudy.production}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">04 · {t.ui?.materialLighting || "Material & Lighting"}</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-light">{activeCaseStudy.materialStudy}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">05 · {t.ui?.deliverables || "Deliverables"}</span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed font-semibold">{activeCaseStudy.deliverables}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-amber-500/30 bg-amber-500/5">
                      <span className="text-[10px] font-bold text-amber-400 uppercase block mb-1">06 · {t.ui?.refinementMaster || "Refinement & Master"}</span>
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
              <button type="button" onClick={() => setActiveArticle(null)} aria-label={t.ui?.closeArticle || "Close Article"} className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer"><X className="w-6 h-6" /></button>
              
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
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">{t.ui?.frequentlyAsked || "Frequently Asked Inquiry"}</span>
                  <p className="font-bold text-neutral-200 mb-1">{activeArticle.faqQ1}</p>
                  <p className="text-neutral-400 font-light leading-relaxed">{activeArticle.faqA1}</p>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">{t.ui?.researchMonograph || "AI.VIENNE Research & Monograph"}</span>
                <button 
                  type="button" 
                  onClick={() => { setActiveArticle(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} 
                  className="px-6 py-2.5 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.ui?.requestPerspective || "Request Full Perspective"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 flex items-center gap-3 bg-neutral-900/90 border border-amber-500/40 px-4 py-2.5 rounded-full backdrop-blur-xl shadow-2xl">
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
        <span className="text-xs font-bold tracking-wider text-amber-300">
          {t.ui?.aiConcierge || "AI CONCIERGE"}
        </span>
      </div>

      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <button 
          type="button" 
          onClick={() => setIsDeskOpen(!isDeskOpen)} 
          aria-label={t.ui?.openInquiryDesk || "Open Confidential Inquiry Desk"} 
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
              <button type="button" onClick={() => setIsDeskOpen(false)} aria-label={t.ui?.closeConsole || "Close Console"} className="text-neutral-400 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
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
        <div className="w-full px-4 sm:px-8 md:px-12 h-16 sm:h-24 flex items-center justify-between">
          <button type="button" onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer text-left group shrink-0">
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="AI.VIENNE Studio+"
                fill
                sizes="48px"
                className="object-cover rounded-full"
                priority
              />
            </div>
            <span className="font-extrabold text-base sm:text-xl tracking-widest text-neutral-100 group-hover:text-amber-400 transition-colors">
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
            <a href="#faq" className="hover:text-amber-400 transition-colors py-2 relative group whitespace-nowrap">
              {t.nav?.faq}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors py-2 relative group whitespace-nowrap">
              {t.nav?.contact}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-5 shrink-0">
            <div className="relative" ref={langMenuRef}>
              <button type="button" onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 text-xs font-semibold text-neutral-200 border border-neutral-800 bg-neutral-900/80 rounded-full h-9 sm:h-11 px-2.5 sm:px-4 transition-all cursor-pointer hover:border-neutral-700">
                <div className="relative w-4 h-3">
                  <Image src={selectedLang.flag} alt={selectedLang.name} fill sizes="16px" className="object-cover rounded-sm" />
                </div>
                <span>{selectedLang.code}</span>
                <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-36 max-h-72 overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-lg shadow-2xl p-2 z-50">
                  {LANGUAGES.map((lang) => (
                    <button 
                      key={lang.code} 
                      type="button" 
                      onClick={() => { 
                        setSelectedLang(lang); 
                        localStorage.setItem("aivienne_lang", lang.code);
                        setIsLangOpen(false); 
                      }} 
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer ${selectedLang.code === lang.code ? "bg-amber-400/10 text-amber-400" : "text-neutral-300 hover:bg-neutral-800/60"}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-4 h-3">
                          <Image src={lang.flag} alt={lang.name} fill sizes="16px" className="object-cover rounded-sm" />
                        </div>
                        <span>{lang.name}</span>
                      </div>
                      <span className="text-[10px] text-neutral-400">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t.ui?.toggleMobileMenu || "Toggle Mobile Menu"}
              className="xl:hidden flex items-center justify-center w-9 h-9 rounded-full border border-neutral-800 bg-neutral-900/80 text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <a href="#contact" className="hidden sm:inline-flex items-center justify-center h-11 px-7 rounded-full text-xs font-bold tracking-widest text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all uppercase shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] whitespace-nowrap cursor-pointer">
              {t.nav?.cta}
            </a>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-neutral-950/98 border-b border-neutral-800/80 backdrop-blur-2xl px-6 py-6 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 text-sm font-semibold tracking-wider text-neutral-300">
                {[
                  { href: "#services", label: t.nav?.services },
                  { href: "#portfolio", label: t.nav?.portfolio },
                  { href: "#capabilities", label: t.nav?.capabilities },
                  { href: "#twins", label: t.nav?.avatar },
                  { href: "#system", label: t.nav?.system },
                  { href: "#studio", label: t.nav?.theStudio },
                  { href: "#transformation", label: t.nav?.transformation },
                  { href: "#estimator", label: t.nav?.roi },
                  { href: "#insights", label: t.nav?.journal },
                  { href: "#faq", label: t.nav?.faq },
                  { href: "#contact", label: t.nav?.contact },
                ].map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const element = document.querySelector(item.href);
                      if (element) {
                        setTimeout(() => {
                          element.scrollIntoView({ behavior: "smooth" });
                        }, 120);
                      }
                    }}
                    className="text-left hover:text-amber-400 py-1 border-b border-neutral-900 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const element = document.querySelector("#contact");
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth" });
                      }, 120);
                    }
                  }}
                  className="w-full py-3.5 rounded-full text-xs font-bold text-center tracking-widest text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all uppercase mt-2 cursor-pointer"
                >
                  {t.nav?.cta}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 w-full px-4 sm:px-8 md:px-16 pt-8 sm:pt-20 pb-12 sm:pb-18 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-[11px] sm:text-sm font-semibold text-amber-300 mb-4 sm:mb-8">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t.hero?.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-tight text-neutral-100 max-w-7xl mx-auto leading-[1.15] sm:leading-[1.06]">
            {t.hero?.titleStart} <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">{t.hero?.titleGradient}</span>
          </h1>
          <p className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
            {t.hero?.desc}
          </p>
          <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6">
            <a href="#portfolio" className="w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_40px_rgba(251,191,36,0.3)]">
              {t.hero?.btnPrimary} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <div className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-base font-bold tracking-wide text-neutral-200 border border-neutral-800 bg-neutral-900/50 flex items-center justify-center gap-2.5">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> 
              <span>{t.ui?.directAccess || "Direct Access:"}</span> <SafeEmailLink className="text-amber-400 underline underline-offset-4" />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-12 sm:py-18 border-y border-neutral-800/80 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase mb-3 block">{t.manifesto?.sub}</span>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-neutral-300 tracking-wide mb-2">{t.manifesto?.line1}</h2>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-100 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">{t.manifesto?.line2}</h2>
        </div>
      </section>

      {/* WHY AI.VIENNE? SECTION */}
      <section className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase block mb-3">{t.whyVienne?.tag}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">{t.whyVienne?.title}</h2>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm max-w-lg mt-4 sm:mt-6 md:mt-0 leading-relaxed font-light">{t.whyVienne?.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.whyVienne?.c1Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{t.whyVienne?.c1Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{t.ui?.unifiedEcosystem || "Unified Ecosystem"}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.whyVienne?.c2Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{t.whyVienne?.c2Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{t.ui?.aiNativeWorkflow || "AI-Native Workflow"}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.whyVienne?.c3Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{t.whyVienne?.c3Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{t.ui?.referenceGuidance || "Reference Guidance"}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover:z-20 hover:shadow-[0_10px_40px_rgba(251,191,36,0.15)] flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-3 group-hover:text-amber-300 transition-colors">{t.whyVienne?.c4Title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light group-hover:text-neutral-100 transition-colors">{t.whyVienne?.c4Desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{t.ui?.hauteRefinement || "Haute Refinement"}</span>
              </div>
            </div>
          </div>
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
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">{t.ui?.capabilities || "Capabilities"}</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s1Capabilities}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">{t.ui?.deliverables || "Deliverables"}</span>
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
                  <span>{t.ui?.requestScope || "Request Scope"}</span>
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
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">{t.ui?.capabilities || "Capabilities"}</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s2Capabilities}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">{t.ui?.deliverables || "Deliverables"}</span>
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
                  <span>{t.ui?.requestScope || "Request Scope"}</span>
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
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">{t.ui?.capabilities || "Capabilities"}</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s3Capabilities}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">{t.ui?.deliverables || "Deliverables"}</span>
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
                  <span>{t.ui?.requestScope || "Request Scope"}</span>
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
                    <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">{t.ui?.capabilities || "Capabilities"}</span>
                    <p className="text-neutral-200 font-light">{t.servicesPillars?.s4Capabilities}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase block mb-1">{t.ui?.deliverables || "Deliverables"}</span>
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
                  <span>{t.ui?.requestScope || "Request Scope"}</span>
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
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-100 tracking-wider uppercase">{t.ui?.widescreenStudies || "16:9 Widescreen Studies"}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.filter(item => item.aspect === "16:9").map((item) => {
                  const resolvedTitle = t.portfolioItems?.[item.titleKey] || item.titleKey;
                  const resolvedDisc = t.portfolioItems?.[item.disciplineKey] || item.disciplineKey;
                  const resolvedDesc = t.portfolioItems?.[item.descKey] || item.descKey;
                  return (
                    <div 
                      key={item.id} 
                      onClick={() => setActiveCaseStudy({
                        ...item,
                        title: resolvedTitle,
                        discipline: resolvedDisc,
                        desc: resolvedDesc,
                        brief: t.portfolioItems?.[item.briefKey] || item.briefKey,
                        direction: t.portfolioItems?.[item.directionKey] || item.directionKey,
                        production: t.portfolioItems?.[item.productionKey] || item.productionKey,
                        materialStudy: t.portfolioItems?.[item.materialStudyKey] || item.materialStudyKey,
                        deliverables: t.portfolioItems?.[item.deliverablesKey] || item.deliverablesKey,
                        productionNotes: t.portfolioItems?.[item.productionNotesKey] || item.productionNotesKey,
                      })}
                      className="group relative rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 p-3 sm:p-4 transition-all duration-300 ease-out hover:scale-[1.02] hover:z-20 hover:shadow-[0_10px_30px_rgba(251,191,36,0.12)] flex flex-col justify-between overflow-hidden cursor-pointer"
                    >
                      <div className="relative aspect-[16/9] w-full rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center overflow-hidden mb-3.5 shadow-md">
                        {item.type === "video" ? (
                          <video autoPlay loop muted playsInline preload="none" poster={item.poster} className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500 ease-out">
                            <source src={item.videoUrl} type="video/mp4" />
                          </video>
                        ) : (
                          <div className="relative w-full h-full">
                            <Image src={item.poster} alt={resolvedTitle} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-contain bg-black group-hover:scale-105 transition-transform duration-500 ease-out" />
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
                          <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">{resolvedDisc}</span>
                          <h3 className="text-xs sm:text-sm font-bold text-neutral-100 mb-1 group-hover:text-amber-300 transition-colors line-clamp-1">{resolvedTitle}</h3>
                          <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-tight font-light line-clamp-2 group-hover:text-neutral-200 transition-colors">{resolvedDesc}</p>
                        </div>
                      </div>
                      
                      <button type="button" onClick={(e) => { e.stopPropagation(); setActiveCaseStudy({ ...item, title: resolvedTitle, discipline: resolvedDisc, desc: resolvedDesc, brief: t.portfolioItems?.[item.briefKey] || item.briefKey, direction: t.portfolioItems?.[item.directionKey] || item.directionKey, production: t.portfolioItems?.[item.productionKey] || item.productionKey, materialStudy: t.portfolioItems?.[item.materialStudyKey] || item.materialStudyKey, deliverables: t.portfolioItems?.[item.deliverablesKey] || item.deliverablesKey, productionNotes: t.portfolioItems?.[item.productionNotesKey] || item.productionNotesKey }); }} className="w-full py-2 rounded-xl border border-neutral-800 bg-neutral-950 group-hover:bg-amber-400 group-hover:text-neutral-950 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                        <Briefcase className="w-3 h-3" /> {t.portfolio?.playVideo}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {(activeFilter === "all" || activeFilter === "916") && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-100 tracking-wider uppercase">{t.ui?.verticalStudies || "9:16 Vertical Studies"}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.filter(item => item.aspect === "9:16").map((item) => {
                  const resolvedTitle = t.portfolioItems?.[item.titleKey] || item.titleKey;
                  const resolvedDisc = t.portfolioItems?.[item.disciplineKey] || item.disciplineKey;
                  const resolvedDesc = t.portfolioItems?.[item.descKey] || item.descKey;
                  return (
                    <div 
                      key={item.id} 
                      onClick={() => setActiveCaseStudy({
                        ...item,
                        title: resolvedTitle,
                        discipline: resolvedDisc,
                        desc: resolvedDesc,
                        brief: t.portfolioItems?.[item.briefKey] || item.briefKey,
                        direction: t.portfolioItems?.[item.directionKey] || item.directionKey,
                        production: t.portfolioItems?.[item.productionKey] || item.productionKey,
                        materialStudy: t.portfolioItems?.[item.materialStudyKey] || item.materialStudyKey,
                        deliverables: t.portfolioItems?.[item.deliverablesKey] || item.deliverablesKey,
                        productionNotes: t.portfolioItems?.[item.productionNotesKey] || item.productionNotesKey,
                      })}
                      className="group relative rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/80 hover:bg-neutral-900/80 p-3 sm:p-4 transition-all duration-300 ease-out hover:scale-[1.02] hover:z-20 hover:shadow-[0_10px_30px_rgba(251,191,36,0.12)] flex flex-col justify-between overflow-hidden cursor-pointer"
                    >
                      <div className="relative aspect-[9/16] w-full rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center overflow-hidden mb-3.5 shadow-md mx-auto">
                        {item.type === "video" ? (
                          <video autoPlay loop muted playsInline preload="none" poster={item.poster} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out">
                            <source src={item.videoUrl} type="video/mp4" />
                          </video>
                        ) : (
                          <div className="relative w-full h-full">
                            <Image src={item.poster} alt={resolvedTitle} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" />
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
                          <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">{resolvedDisc}</span>
                          <h3 className="text-xs sm:text-sm font-bold text-neutral-100 mb-1 group-hover:text-amber-300 transition-colors line-clamp-1">{resolvedTitle}</h3>
                          <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-tight font-light line-clamp-2 group-hover:text-neutral-200 transition-colors">{resolvedDesc}</p>
                        </div>
                      </div>
                      
                      <button type="button" onClick={(e) => { e.stopPropagation(); setActiveCaseStudy({ ...item, title: resolvedTitle, discipline: resolvedDisc, desc: resolvedDesc, brief: t.portfolioItems?.[item.briefKey] || item.briefKey, direction: t.portfolioItems?.[item.directionKey] || item.directionKey, production: t.portfolioItems?.[item.productionKey] || item.productionKey, materialStudy: t.portfolioItems?.[item.materialStudyKey] || item.materialStudyKey, deliverables: t.portfolioItems?.[item.deliverablesKey] || item.deliverablesKey, productionNotes: t.portfolioItems?.[item.productionNotesKey] || item.productionNotesKey }); }} className="w-full py-2 rounded-xl border border-neutral-800 bg-neutral-950 group-hover:bg-amber-400 group-hover:text-neutral-950 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                        <Briefcase className="w-3 h-3" /> {t.portfolio?.playVideo}
                      </button>
                    </div>
                  );
                })}
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
                  <span>{t.ui?.productionCapability || "Production Capability"}</span>
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
                {t.ui?.characterStudy || "Character Study"}
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
                    preload="none"
                    poster={selectedTwin.poster}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90"
                  >
                    <source src={selectedTwin.video} type="video/mp4" />
                    <div className="relative w-full h-full">
                      <Image src={selectedTwin.poster} alt={t.twinsSection?.[selectedTwin.nameKey] || "Character"} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    </div>
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-amber-400/40 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-amber-300 uppercase tracking-widest">
                      {((t.twinsSection?.[selectedTwin.nameKey] || "Character").split(" ")[0]).toUpperCase()} · {t.ui?.referenceIdentity || "Reference-Guided Identity Retention"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={toggleTwinVideoMute}
                    aria-label="Toggle Video Audio"
                    className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-neutral-950/80 border border-amber-400/50 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 transition-all backdrop-blur-md shadow-lg cursor-pointer"
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
                  </button>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 mb-2">{t.twinsSection?.[selectedTwin.nameKey] || "Character"}</h3>
                <p className="text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-wider mb-6 sm:mb-8">{t.twinsSection?.[selectedTwin.roleKey] || "Role"}</p>

                <div className="space-y-4 border-t border-neutral-800/80 pt-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400 uppercase font-bold">{t.ui?.lightingContext || "Lighting Context:"}</span>
                    <span className="text-neutral-200 font-semibold">{t.twinsSection?.[selectedTwin.lightingKey] || "Lighting"}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400 uppercase font-bold">{t.ui?.stylingTextile || "Styling & Textile:"}</span>
                    <span className="text-neutral-200 font-semibold">{t.twinsSection?.[selectedTwin.outfitKey] || "Outfit"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {DIGITAL_TWINS.map((twin) => {
                  const twinNameResolved = t.twinsSection?.[twin.nameKey] || twin.id;
                  return (
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
                      {selectedLang.code === 'AR' ? `اختيار ${twinNameResolved.split(" ")[0]}` : `Select ${twinNameResolved.split(" ")[0]}`}
                    </button>
                  );
                })}
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
                    ref={rightVideoRef}
                    autoPlay
                    loop
                    muted={isRightVideoMuted}
                    playsInline
                    preload="none"
                    poster="/vienne-portrait.jpg"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-85"
                  >
                    <source src="/vienne-facial-loop.mp4" type="video/mp4" />
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-amber-400/40 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                      <Activity className="w-3 h-3 text-amber-400" /> {t.ui?.protocol || "PROTOCOL"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (rightVideoRef.current) {
                        rightVideoRef.current.muted = !isRightVideoMuted;
                        setIsRightVideoMuted(!isRightVideoMuted);
                      }
                    }}
                    aria-label="Toggle Video Audio"
                    className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-neutral-950/80 border border-amber-400/50 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 transition-all backdrop-blur-md shadow-lg cursor-pointer"
                  >
                    {isRightVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-3">{t.twinsSection?.identityTitle}</h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-8 font-light">{t.twinsSection?.identityDesc}</p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 gap-4 text-left">
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {t.ui?.referenceGuidance || "Reference Guidance"}
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">{t.ui?.facialConsistency || "Facial Structure Consistency"}</p>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <p className="text-[10px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {t.ui?.hauteRefinement || "Haute Refinement"}
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">{t.ui?.skinTexture || "Natural Skin Micro-Texture"}</p>
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
                  <span>{t.ui?.protocol || "Protocol"} {step.num}</span>
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
                  href="https://www.linkedin.com/company/aivienne" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 shrink-0 fill-current text-amber-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span>{t.ui?.linkedin || "LinkedIn Company Page"}</span>
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
              aria-label={t.ui?.transformationSlider || "Transformation Comparison Slider"}
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
              <span className="text-amber-400 block font-bold">{t.transformation?.s1}</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="text-amber-400 block font-bold">{t.transformation?.s2}</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="text-amber-400 block font-bold">{t.transformation?.s3}</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="text-amber-400 block font-bold">{t.transformation?.s4}</span>
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
                      {t.ui?.estimatedProductionRange || "Estimated Production Range (USD)"}
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
                onClick={applyEstimateToForm} 
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
                {[t.briefOptions?.lighting1 || "Dramatic Studio Gold", t.briefOptions?.lighting2 || "Natural Parisian Sunlight", t.briefOptions?.lighting3 || "Surreal Cyber Neon Caustics"].map((opt) => (
                  <button key={opt} type="button" onClick={() => setBriefLighting(opt)} className={`w-full text-left p-3 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefLighting === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection?.s2}</label>
              <div className="space-y-2">
                {[t.briefOptions?.segment1 || "High Jewelry & Gems", t.briefOptions?.segment2 || "Haute Couture Runway", t.briefOptions?.segment3 || "Swiss Horlogerie Timepiece"].map((opt) => (
                  <button key={opt} type="button" onClick={() => setBriefSegment(opt)} className={`w-full text-left p-3 sm:p-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${briefSegment === opt ? "bg-amber-400 text-neutral-950 border-amber-400" : "bg-neutral-950 border-neutral-800 text-neutral-300"}`}>{opt}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-3">{t.briefSection?.s3}</label>
              <div className="space-y-2">
                {[t.briefOptions?.atmosphere1 || "Parisian Palace Runway", t.briefOptions?.atmosphere2 || "Futuristic Architectural Stage", t.briefOptions?.atmosphere3 || "Exotic Desert Dunes"].map((opt) => (
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

      <Testimonials lang={selectedLang.code} />
      <FAQ lang={selectedLang.code} />

      {/* CONTACT / BOOKING SECTION */}
      <section id="contact" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">{t.contact?.tag}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mt-3">{t.contact?.title}</h2>
            <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto font-light">{t.contact?.desc}</p>
          </div>

          {/* PRIVATE CLIENT CONCIERGE FAST-TRACK RESERVATION CARD */}
          <div className="mb-10 sm:mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-neutral-900/60 to-amber-500/10 border border-amber-500/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-amber-400 block">{t.reservation?.tag || "Fast-Track Production Slot"}</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-100">{t.reservation?.title || "Lock Your Campaign Production Dates"}</h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {t.reservation?.desc || "Secure priority creative direction and schedule allocation via B2B proforma invoicing. The $1,500 reservation deposit is fully credited toward your final campaign scope."}
              </p>
            </div>
            <button
              type="button"
              onClick={handleReserveSlotClick}
              className="w-full md:w-auto px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-extrabold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(251,191,36,0.35)] shrink-0 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-neutral-950" />
              <span>{t.ui?.reserveProduction || "Invoiced Deposit Request ($1,500)"}</span>
            </button>
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

            <div style={{ display: 'none', visibility: 'hidden', opacity: 0, position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }} aria-hidden="true">
              <label htmlFor="hp_website_check">{t.ui?.humanCheck || "If you are human, leave this blank:"}</label>
              <input 
                type="text" 
                id="hp_website_check" 
                name="hp_website_check" 
                tabIndex={-1} 
                autoComplete="off"
                value={formData.hp_website_check}
                onChange={(e) => setFormData({ ...formData, hp_website_check: e.target.value })}
              />
            </div>

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

            {/* Öncelikli Prodüksiyon ve Faturalı Rezervasyon Tercihi */}
            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-amber-500/30 flex items-center justify-between gap-4">
              <label htmlFor="priority-track-checkbox" className="flex items-center gap-3 cursor-pointer">
                <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                  {t.ui?.lockDates || "Request Invoiced Deposit & Priority Schedule"}
                </span>
              </label>
              <input 
                id="priority-track-checkbox"
                type="checkbox" 
                checked={formData.priorityTrack} 
                onChange={(e) => setFormData({ ...formData, priorityTrack: e.target.checked })} 
                className="w-5 h-5 accent-amber-400 rounded cursor-pointer" 
              />
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
                <Send className="w-4 h-4 sm:w-5 sm:h-5" /> {isSubmitting ? (t.ui?.sending || "Sending...") : t.contact?.submitBtn}
              </button>
              <div className="text-xs sm:text-sm font-semibold text-neutral-300 flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" /> 
                <span>{t.contact?.directEmail}</span> <SafeEmailLink className="text-amber-400 underline underline-offset-4" />
              </div>
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
                <li><a href="#faq" className="hover:opacity-75 block">{t.nav?.faq}</a></li>
                <li><a href="#contact" className="hover:opacity-75 block">{t.footerSection?.initiate}</a></li>
              </ul>
            </div>
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-6 sm:mb-8">{t.footerSection?.dirTitle}</span>
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base font-semibold">
                <span ref={emailContainerRef} className="block"></span>
                <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-90">{t.footerSection?.location}</p>
              </div>
            </div>
            <div>
              <span className="inline-block bg-neutral-950 text-amber-400 text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase mb-6 sm:mb-8">{t.footerSection?.netTitle}</span>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-semibold">
                <li>
                  <a href="https://instagram.com/ai.vienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 flex items-center gap-2.5">
                    <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <span>{t.ui?.instagram || "Instagram"}</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/aivienne" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 flex items-center gap-2.5">
                    <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span>{t.ui?.linkedin || "LinkedIn Company Page"}</span>
                  </a>
                </li>
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
                <span className="text-xs sm:text-sm font-mono font-extrabold tracking-[0.3em] uppercase text-neutral-950/70 block">{t.ui?.hauteVisualProduction || "Haute Visual Production"}</span>
                <span className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-neutral-950 select-none leading-none block">
                  AI.VIENNE<br /><span className="font-light">STUDIO+</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm font-bold pt-6 sm:pt-8 border-t border-neutral-950/20">
            <p className="text-center sm:text-left">{t.footer}</p>
            <div className="flex items-center gap-6 sm:gap-8">
              <Link href="/terms" className="hover:opacity-75 underline underline-offset-4 cursor-pointer">{t.footerSection?.terms}</Link>
              <Link href="/privacy" className="hover:opacity-75 underline underline-offset-4 cursor-pointer">{t.footerSection?.privacy}</Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="tracking-widest">AI.VIENNE STUDIO+</span>
              <button type="button" onClick={scrollToTop} aria-label={t.ui?.scrollToTop || "Scroll to top"} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-950 text-amber-400 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"><ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" /></button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}