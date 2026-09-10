"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { TRANSLATIONS } from "@/data/translations";

export default function PrivacyPage() {
  const router = useRouter();
  const [langCode, setLangCode] = useState<string>("EN");

  useEffect(() => {
    const storedLang = localStorage.getItem("aivienne_lang") || "EN";
    if (TRANSLATIONS[storedLang]) {
      setLangCode(storedLang);
    }
  }, []);

  const t = TRANSLATIONS[langCode] || TRANSLATIONS.EN;
  const isRTL = langCode === "AR";
  const m = t.modals || TRANSLATIONS.EN.modals;

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className={`min-h-screen bg-neutral-950 text-neutral-100 px-6 sm:px-12 md:px-24 py-24 relative ${isRTL ? "font-serif" : ""}`}>
      {/* SAĞ ÜST SABİT ÇIKIŞ (X) BUTONU - Kaldığı yere geri döndürür */}
      <button
        type="button"
        onClick={handleClose}
        aria-label="Close and return"
        className="fixed top-5 right-5 sm:top-8 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900/90 border border-amber-500/40 text-amber-300 hover:text-neutral-950 hover:bg-amber-400 transition-all flex items-center justify-center shadow-2xl backdrop-blur-xl group cursor-pointer"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] group-hover:scale-110 transition-transform" />
      </button>

      <div className="max-w-4xl mx-auto space-y-8 text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400">{m.privacyTitle}</h1>
        <p className="text-xs text-neutral-400 font-mono">AI.VIENNE Studio+ · Data Security & Corporate Privacy</p>
        
        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed font-light border-t border-neutral-800 pt-8">
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">{m.privacyP1Title}</h2>
            <p>{m.privacyP1Body}</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">{m.privacyP2Title}</h2>
            <p>{m.privacyP2Body}</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">{m.privacyP3Title}</h2>
            <p>{m.privacyP3Body}</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">{m.privacyP4Title}</h2>
            <p>{m.privacyP4Body}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <button 
            type="button" 
            onClick={handleClose} 
            className="inline-block px-6 py-3 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all cursor-pointer"
          >
            {isRTL ? "←رجوع" : "← Back"}
          </button>
        </div>
      </div>
    </main>
  );
}