'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  lang?: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  category: string;
}

const TESTIMONIALS_DATA: Record<string, { tag: string; title: string; items: TestimonialItem[] }> = {
  EN: {
    tag: "CLIENT VOICES & RECOGNITION",
    title: "Endorsements & Industry Trust",
    items: [
      {
        quote: "AI.VIENNE eliminated weeks of location permits and heavy studio overhead for our seasonal fine jewelry campaign. The caustic gemstone dispersion and specular platinum control matched the highest luxury standards.",
        author: "H. von Berg",
        role: "Head of Brand Strategy",
        category: "Haute Horlogerie & High Jewelry"
      },
      {
        quote: "Maintaining character consistency across high-fashion lookbooks used to be an AI limitation until we collaborated with AI.VIENNE. Our digital ambassador maintained flawless facial geometry in every editorial setting.",
        author: "M. Laurent",
        role: "Creative Director",
        category: "Luxury Ready-To-Wear & Couture"
      }
    ]
  },
  TR: {
    tag: "GÜVEN & VİZYON",
    title: "Müşteri Deneyimleri & Referanslar",
    items: [
      {
        quote: "Geleneksel stüdyo çekimlerinin haftalar süren mekan ve lojistik maliyetini ortadan kaldırarak lüks mücevher koleksiyonumuz için büyüleyici bir sinematik dünya yarattılar. Değerli taş yansımaları kusursuzdu.",
        author: "H. von Berg",
        role: "Marka Stratejisi Direktörü",
        category: "Haute Horlogerie & Lüks Mücevherat"
      },
      {
        quote: "Farklı editoryal kurgularda model yüz tutarlılığını korumak yapay zekanın en büyük sorunuydu; ta ki AI.VIENNE ile çalışana kadar. Dijital modelimiz tüm sezon kampanyası boyunca anatomik kusursuzluğunu korudu.",
        author: "M. Laurent",
        role: "Kreatif Direktör",
        category: "Haute Couture & Lüks Moda"
      }
    ]
  }
};

export default function Testimonials({ lang = 'EN' }: TestimonialsProps) {
  const currentLang = TESTIMONIALS_DATA[lang] ? lang : 'EN';
  const content = TESTIMONIALS_DATA[currentLang];

  return (
    <section id="testimonials" className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase block mb-3">
            {content.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {content.items.map((item, index) => (
            <div
              key={index}
              className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/60 transition-all duration-500 flex flex-col justify-between relative shadow-xl text-left group"
            >
              <Quote className="w-10 h-10 text-amber-400/20 absolute top-8 right-8 group-hover:text-amber-400/40 transition-colors" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light italic mb-8">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80">
                <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase block mb-1">
                  {item.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-neutral-100 tracking-wide">
                  {item.author}
                </h4>
                <p className="text-xs text-neutral-400 font-light">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}