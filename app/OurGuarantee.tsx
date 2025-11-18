"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { BookOpen, Key, Clock, DollarSign } from "lucide-react";

export default function OurGuarantee() {
  const { language } = useLanguage();
  const t = translations[language].ourGuarantee;

  const icons = [
    BookOpen, // Trusted Books & Tax Planning
    Key, // Secure Information
    Clock, // 1-Day Response
    DollarSign, // Transparent Pricing
  ];

  return (
    <section id="our-guarantee" className="bg-ocean-100 pt-12 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          className={`text-center text-gray-500 uppercase tracking-[0.3em] text-sm font-light mb-12 ${
            language === "zh" ? "font-noto-serif-sc" : "font-avenir"
          }`}
        >
          {t.title}
        </h2>

        {/* Guarantee Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="w-6 h-6 text-ocean-600 flex-shrink-0" />
                  <h3
                    className={`text-gray-800 text-xl md:text-2xl font-bold ${
                      language === "zh" ? "font-noto-serif-sc" : "font-serif"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg font-avenir">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
