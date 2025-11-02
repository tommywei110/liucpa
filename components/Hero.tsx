"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative py-32 px-8 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/liucpa/background.mp4" type="video/mp4" />
      </video>

      {/* Dark Blue Overlay with 30% opacity */}
      <div className="absolute inset-0 bg-ocean-700" style={{ opacity: 0.3 }} />

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-white text-xs sm:text-sm tracking-widest mb-8 sm:mb-12 font-avenir font-light">{t.subtitle}</p>
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight sm:leading-normal md:leading-relaxed font-serif font-normal mb-8 sm:mb-12 md:mb-16">
          {t.title}
        </h2>
        <button className="bg-ocean-500 text-white px-8 sm:px-12 py-3 sm:py-4 hover:bg-ocean-600 transition text-xs sm:text-sm tracking-wider">
          {t.cta}
        </button>
      </div>
    </section>
  );
}
