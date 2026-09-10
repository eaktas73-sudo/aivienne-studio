'use client';

import React from 'react';
import { Quote } from 'lucide-react';

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
    tag: "SELECTED PROJECT NOTES",
    title: "Creative Validation",
    items: [
      {
        quote: "By eliminating weeks of location logistics and heavy studio overhead, seasonal fine jewelry campaigns are radically accelerated. Caustic gemstone dispersion and specular platinum control are calibrated to match the highest luxury standards.",
        author: "Production Protocol",
        role: "Internal Standard",
        category: "Haute Horlogerie & High Jewelry"
      },
      {
        quote: "Maintaining character consistency across high-fashion lookbooks is our primary technical priority. Digital ambassadors are engineered to maintain flawless facial geometry and identity retention in every editorial setting.",
        author: "Production Protocol",
        role: "Internal Standard",
        category: "Luxury Ready-To-Wear & Couture"
      }
    ]
  },
  TR: {
    tag: "SEÇİLİ PROJE NOTLARI",
    title: "Kreatif Doğrulama",
    items: [
      {
        quote: "Geleneksel stüdyo çekimlerinin haftalar süren mekan ve lojistik maliyetlerini ortadan kaldırarak kampanya süreçlerini hızlandırıyoruz. Değerli taş kırılımları ve platin yansımaları, en üst düzey lüks standartlarına göre kalibre ediliyor.",
        author: "Üretim Protokolü",
        role: "İç Standart",
        category: "Haute Horlogerie & Lüks Mücevherat"
      },
      {
        quote: "Farklı editoryal kurgularda model yüz tutarlılığını korumak en temel teknik önceliğimizdir. Dijital ambasadorlarımız, her kampanya ortamında anatomik kusursuzluğunu ve kimliğini korumak üzere tasarlanır.",
        author: "Üretim Protokolü",
        role: "İç Standart",
        category: "Haute Couture & Lüks Moda"
      }
    ]
  },
  AR: {
    tag: "ملاحظات المشروع المحددة",
    title: "التحقق الإبداعي",
    items: [
      {
        quote: "من خلال القضاء على أسابيع من لوجستيات المواقع والنفقات العامة للاستوديو الثقيل، يتم تسريع حملات المجوهرات الفاخرة الموسمية بشكل جذري. يتم معايرة تشتت الأحجار الكريمة الكاوية والتحكم في البلاتين المرآوي لتتطابق مع أعلى معايير الفخامة.",
        author: "بروتوكول الإنتاج",
        role: "معيار داخلي",
        category: "الساعات الراقية والمجوهرات الفاخرة"
      },
      {
        quote: "الحفاظ على اتساق الشخصيات عبر كتب المظهر للأزياء الراقية هو أولويتنا التقنية الأساسية. تم هندسة السفراء الرقميين للحفاظ على هندسة الوجه الخالية من العيوب والاحتفاظ بالهوية في كل إعداد تحريري.",
        author: "بروتوكول الإنتاج",
        role: "معيار داخلي",
        category: "الأزياء الفاخرة الجاهزة والتفصيل"
      }
    ]
  }
};

export default function Testimonials({ lang = 'EN' }: TestimonialsProps) {
  const currentLang = TESTIMONIALS_DATA[lang] ? lang : 'EN';
  const content = TESTIMONIALS_DATA[currentLang];
  const isRTL = currentLang === 'AR';

  return (
    <section id="testimonials" dir={isRTL ? 'rtl' : 'ltr'} className={`relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-900/10 ${isRTL ? 'font-serif text-right' : 'text-left'}`}>
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
              className={`p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 hover:border-amber-400/60 transition-all duration-500 flex flex-col justify-between relative shadow-xl group ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <Quote className={`w-10 h-10 text-amber-400/20 absolute top-8 group-hover:text-amber-400/40 transition-colors ${isRTL ? 'left-8 scale-x-[-1]' : 'right-8'}`} />

              <div>
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