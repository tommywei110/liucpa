"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [heroLine1, heroLine2] = t.title.split("\n");

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
          <span className="block">{heroLine1}</span>
          {heroLine2 && <span className="block font-normal">{heroLine2}</span>}
        </h2>
        <a
          href="https://form.jotform.com/253210540369148"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#B89030] text-white px-6 sm:px-8 py-2 sm:py-3 hover:bg-[#a68028] transition text-xs sm:text-sm tracking-wider rounded-md">
            {t.cta}
          </button>
        </a>
      </div>
    </section>
  );
}
