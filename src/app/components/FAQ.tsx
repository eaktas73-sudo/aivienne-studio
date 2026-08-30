'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  lang?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: Record<string, { tag: string; title: string; items: FAQItem[] }> = {
  EN: {
    tag: "INQUIRIES & PROTOCOLS",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Who owns the commercial usage rights for AI-generated visual assets?",
        answer: "Upon full settlement of invoices, all delivered final master visual assets, motion files, and customized digital assets transition exclusively to the Client. You receive unrestricted worldwide commercial usage rights across digital flagships, broadcast, and print with zero perpetual royalty claims."
      },
      {
        question: "What are the standard production lead times?",
        answer: "Curated editorial image suites and campaign concepts are typically delivered within 3–5 business days. Complex cinematic motion loops and bespoke digital character pipelines are completed within 7–14 business days depending on scope."
      },
      {
        question: "How does the revision and refinement process work?",
        answer: "Every commission includes structured revision rounds covering art direction alignment, chromatic calibration, fabric drape physics, lighting adjustments, and macro gemstone refraction to ensure uncompromising luxury fidelity."
      },
      {
        question: "Can you create a bespoke persistent digital character for our brand?",
        answer: "Yes. We engineer proprietary digital brand faces with consistent bone geometry, facial landmarks, and skin micro-textures that remain identical across multi-scene seasonal campaigns, lookbooks, and flagship media."
      },
      {
        question: "How does AI-native production compare to traditional photo/video shoots?",
        answer: "It eliminates physical location permits, transatlantic travel, physical set building, and sample logistics while enabling creative directors to realize hyper-refined cinematic atmospheres and lighting within days rather than months."
      }
    ]
  },
  TR: {
    tag: "MERAK EDİLENLER",
    title: "Sıkça Sorulan Sorular",
    items: [
      {
        question: "AI ile üretilen kampanya görselleri ve videoların ticari telif hakları kime ait?",
        answer: "Teslim edilen tüm nihai görsel, video ve dijital varlıkların ticari kullanım ve lisans hakları tamamen müşterimize aittir. Çalışmalarımız ticari kullanıma uygun, yüksek çözünürlüklü ve tescilsiz olarak devredilir."
      },
      {
        question: "Görsel ve video prodüksiyon teslim süreleri ne kadardır?",
        answer: "Görsel setleri ve kampanya konseptleri 3–5 iş günü içinde; kompleks AI video ve dijital karakter projeleri ise proje kapsamına bağlı olarak 7–14 iş günü içinde tamamlanarak teslim edilir."
      },
      {
        question: "Projelerde revizyon süreci nasıl işliyor?",
        answer: "Her projede sanat yönetimi, renk kalibrasyonu, materyal dokusu, ışık açıları ve kompozisyon uyumunu garanti eden yapılandırılmış revizyon döngüleri sunulmaktadır."
      },
      {
        question: "Markamıza özel bir dijital model (Digital Character) üretebilir misiniz?",
        answer: "Evet. Markanıza özel tutarlı yüz anatomisi, cilt mikro-dokusu ve stil özelliklerine sahip tescilli dijital modeller geliştirerek tüm sezon kampanyalarınızda aynı kimliği korumanızı sağlıyoruz."
      },
      {
        question: "Geleneksel prodüksiyona kıyasla AI stüdyo süreci ne gibi avantajlar sunar?",
        answer: "Fiziksel set kurulumu, seyahat ve lojistik maliyetlerini ortadan kaldırırken; hayal edilen lüks atmosferi ve sinematik ışığı günler içinde hayata geçirme esnekliği sağlar."
      }
    ]
  }
};

export default function FAQ({ lang = 'EN' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const currentLang = FAQ_DATA[lang] ? lang : 'EN';
  const content = FAQ_DATA[currentLang];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.items.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase block mb-3">
            {content.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
            {content.title}
          </h2>
        </div>

        <div className="space-y-4">
          {content.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-neutral-800/80 rounded-2xl overflow-hidden bg-neutral-900/40 hover:border-amber-400/60 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-neutral-100 pr-2">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-amber-400 text-neutral-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}