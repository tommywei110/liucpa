'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

export default function WeOffer() {
  const { language } = useLanguage()
  const t = translations[language].weOffer

  return (
    <section className="bg-[#F8F8F5] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-gray-500 uppercase tracking-[0.3em] text-sm font-avenir font-light mb-20">
          {t.title}
        </h2>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Column 1: Certified Tax Expert */}
          <div className="text-center px-4">
            <h3 className="text-4xl md:text-5xl font-serif font-normal text-gray-800 mb-8 leading-tight">
              {t.service1.title}
            </h3>
            <p className="text-gray-700 leading-relaxed font-avenir text-base">
              {t.service1.description}
            </p>
          </div>

          {/* Column 2: Professional Bookkeepers */}
          <div className="text-center px-4">
            <h3 className="text-4xl md:text-5xl font-serif font-normal text-gray-800 mb-8 leading-tight">
              {t.service2.title}
            </h3>
            <p className="text-gray-700 leading-relaxed font-avenir text-base">
              {t.service2.description}
            </p>
          </div>

          {/* Column 3: Tax Planning */}
          <div className="text-center px-4">
            <h3 className="text-4xl md:text-5xl font-serif font-normal text-gray-800 mb-8 leading-tight">
              {t.service3.title}
            </h3>
            <p className="text-gray-700 leading-relaxed font-avenir text-base">
              {t.service3.description}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#services"
            className="text-gray-500 uppercase tracking-[0.3em] text-sm font-avenir font-light hover:text-gray-700 transition-colors"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
