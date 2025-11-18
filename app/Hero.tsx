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
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Dark Blue Overlay with 30% opacity */}
      <div className="absolute inset-0 bg-ocean-700" style={{ opacity: 0.3 }} />

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-white text-xs sm:text-sm tracking-widest mb-8 sm:mb-12 font-light font-avenir">
          {t.subtitle}
        </p>
        <h2
          className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight sm:leading-normal md:leading-relaxed font-normal mb-8 sm:mb-12 md:mb-16 ${
            language === "zh" ? "font-noto-serif-sc" : "font-serif"
          }`}
        >
          {t.title}
        </h2>
        <button className="bg-[#1d3859] text-white px-6 sm:px-8 py-2 sm:py-3 hover:bg-[#152a43] transition text-xs sm:text-sm tracking-wider">
          {t.cta}
        </button>
      </div>
    </section>
  );
}
