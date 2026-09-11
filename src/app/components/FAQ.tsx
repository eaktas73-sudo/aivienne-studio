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
        question: "Who owns the commercial usage rights for visual assets?",
        answer: "Upon full settlement of production invoices, all delivered final master visual assets, motion files, and customized digital characters transition exclusively to the Client. You receive unrestricted worldwide commercial usage rights across digital flagships, broadcast, and print."
      },
      {
        question: "What are the standard production lead times?",
        answer: "Curated editorial image suites and campaign concepts are typically delivered within 3–5 business days. Cinematic motion loops and bespoke digital character pipelines are completed within 7–14 business days, depending on scope and complexity."
      },
      {
        question: "How does the revision and refinement process work?",
        answer: "Every commission includes structured revision rounds covering art direction alignment, chromatic calibration, material physics, lighting adjustments, and asset refinement to ensure uncompromising luxury fidelity."
      },
      {
        question: "Can you create a persistent digital character for our brand?",
        answer: "Yes. We engineer bespoke digital brand faces with consistent facial proportions, micro-textures, and styling continuity that remain reliable across multi-scene seasonal campaigns, lookbooks, and flagship media."
      },
      {
        question: "How does this production process compare to traditional shoots?",
        answer: "It streamlines physical location permits, transatlantic travel, set building, and sample logistics while enabling creative directors to realize hyper-refined cinematic atmospheres and lighting within days rather than months."
      }
    ]
  },
  TR: {
    tag: "MERAK EDİLENLER",
    title: "Sıkça Sorulan Sorular",
    items: [
      {
        question: "Üretilen kampanya görselleri ve videoların ticari hakları kime ait?",
        answer: "Prodüksiyon faturalarının tam olarak ödenmesinin ardından, teslim edilen tüm nihai görsel, video ve dijital varlıkların ticari kullanım hakları tamamen müşterimize aittir. Çalışmalar dünya çapında kısıtlamasız ticari kullanıma uygun olarak devredilir."
      },
      {
        question: "Görsel ve video prodüksiyon teslim süreleri ne kadardır?",
        answer: "Editoryal görsel setleri ve kampanya konseptleri genellikle 3–5 iş günü içinde; sinematik video projeleri ve dijital karakter üretimleri ise proje kapsamına bağlı olarak 7–14 iş günü içinde tamamlanarak teslim edilir."
      },
      {
        question: "Projelerde revizyon süreci nasıl işliyor?",
        answer: "Her projede sanat yönetimi uyumu, renk kalibrasyonu, materyal dokusu, ışık açıları ve nihai düzenlemeleri kapsayan yapılandırılmış revizyon döngüleri sunulmaktadır."
      },
      {
        question: "Markamıza özel bir dijital elçi (Karakter) üretebilir misiniz?",
        answer: "Evet. Markanıza özel, tutarlı yüz oranlarına ve detaylarına sahip, farklı kampanya sahnelerinde ve koleksiyonlarda aynı estetik kimliği koruyan dijital marka yüzleri tasarlıyoruz."
      },
      {
        question: "Bu prodüksiyon sürecinin geleneksel çekimlere kıyasla farkı nedir?",
        answer: "Fiziksel set kurulumu, çok ülkeli seyahat ve numune lojistiği gibi operasyonel engelleri ortadan kaldırırken; hayal edilen lüks atmosferi ve sinematik ışığı aylar yerine günler içinde hayata geçirme esnekliği sağlar."
      }
    ]
  },
  AR: {
    tag: "الاستفسارات والبروتوكولات",
    title: "الأسئلة الشائعة",
    items: [
      {
        question: "من يمتلك حقوق الاستخدام التجاري للأصول المرئية؟",
        answer: "عند التسوية الكاملة لفواتير الإنتاج، تنتقل جميع أصول الماستر البصرية النهائية وملفات الحركة والشخصيات الرقمية المخصصة حصريًا إلى العميل. ستحصل على حقوق استخدام تجاري عالمية غير مقيدة."
      },
      {
        question: "ما هي أوقات تسليم الإنتاج القياسية؟",
        answer: "عادةً ما يتم تسليم مجموعات الصور التحريرية ومفاهيم الحملات في غضون 3-5 أيام عمل. يتم إكمال حلقات الحركة السينمائية والشخصيات الرقمية المخصصة في غضون 7-14 يوم عمل، وفقًا لنطاق العمل."
      },
      {
        question: "كيف تتم عملية المراجعة والتنقيح؟",
        answer: "تتضمن كل مهمة جولات مراجعة هيكلية تغطي محاذاة التوجيه الفني، المعايرة اللونية، فيزياء المواد، وتعديلات الإضاءة لضمان دقة إنتاج راقية لا تشوبها شائبة."
      },
      {
        question: "هل يمكنك إنشاء شخصية رقمية ثابتة لعلامتنا التجارية؟",
        answer: "نعم. نحن نصمم وجوهًا رقمية مخصصة للعلامة التجارية مع نسب وجه متسقة وملمس دقيق واستمرارية في التصميم تظل موثوقة عبر حملات المواسم ووسائط العرض."
      },
      {
        question: "كيف تقارن عملية الإنتاج هذه بجلسات التصوير التقليدية؟",
        answer: "إنها تعمل على تبسيط تصاريح المواقع، والسفر الدولي، وبناء المجموعات الفعالة، مما يمكن المديرين الفنيين من تحقيق أجواء سينمائية دقيقة في غضون أيام بدلاً من أشهر."
      }
    ]
  }
};

const sanitizeJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export default function FAQ({ lang = 'EN' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const currentLang = FAQ_DATA[lang] ? lang : 'EN';
  const content = FAQ_DATA[currentLang];
  const isRTL = currentLang === 'AR';

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
    <section id="faq" dir={isRTL ? 'rtl' : 'ltr'} className={`relative z-10 w-full px-4 sm:px-8 md:px-16 py-20 sm:py-28 border-t border-neutral-800/50 bg-neutral-950 ${isRTL ? 'font-serif' : ''}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(faqSchema) }}
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
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none text-start"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-neutral-100">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-amber-400 text-neutral-950' : ''}`}>
                    <ChevronDown className="w-4 h-4"/>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 font-light text-start">
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