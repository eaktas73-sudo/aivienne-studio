"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function PrivacyPage() {
  const router = useRouter();

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 sm:px-12 md:px-24 py-24 relative">
      {/* SAĞ ÜST SABİT ÇIKIŞ (X) BUTONU - Kaldığı yere geri döndürür */}
      <button
        type="button"
        onClick={handleClose}
        aria-label="Close and return"
        className="fixed top-5 right-5 sm:top-8 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900/90 border border-amber-500/40 text-amber-300 hover:text-neutral-950 hover:bg-amber-400 transition-all flex items-center justify-center shadow-2xl backdrop-blur-xl group cursor-pointer"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] group-hover:scale-110 transition-transform" />
      </button>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400">Confidentiality & Data Protection Protocol</h1>
        <p className="text-xs text-neutral-400 font-mono">AI.VIENNE Studio+ · Data Security & Corporate Privacy</p>
        
        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed font-light border-t border-neutral-800 pt-8">
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">1. Corporate Data Integrity</h2>
            <p>AI.VIENNE Studio+ collects and processes minimal corporate information strictly necessary for commercial correspondence, project brief formulation, and encrypted file transfer, adhering to international privacy standards.</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">2. Zero Public AI Model Training</h2>
            <p>Zero client media, reference drafts, or proprietary brand identities are ever submitted to or used to train public generative AI foundation models.</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">3. Hardware-Level Encryption, Storage & Data Purge</h2>
            <p>All uploaded brief assets (PNG, JPG, MP4, MOV, PDF, ZIP) are stored in secure, encrypted storage with restricted access. Clients retain the contractual right to request the complete cryptographic purge of all project files and uploaded media upon project completion.</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">4. Secure File Retention & Restricted Access</h2>
            <p>All uploaded project assets and reference media are isolated on encrypted volumes and never shared with third-party networks or aggregators.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <button 
            type="button" 
            onClick={handleClose} 
            className="inline-block px-6 py-3 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all cursor-pointer"
          >
            ← Back
          </button>
        </div>
      </div>
    </main>
  );
}