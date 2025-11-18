"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import Image from "next/image";

export default function AboutMe() {
  const { language } = useLanguage();
  const t = translations[language].aboutMe;

  return (
    <section id="about-me" className="bg-white pt-12 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          className={`text-center text-gray-500 uppercase tracking-[0.3em] text-sm font-light mb-12 ${
            language === "zh" ? "font-noto-serif-sc" : "font-avenir"
          }`}
        >
          {t.title}
        </h2>

        {/* Two Column Layout: Image on left, Content on right */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg shadow-lg bg-gray-200">
              <Image
                src="/about-me-photo.jpg"
                alt="Professional photo"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Content on the right */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3
              className={`text-gray-800 text-xl md:text-2xl font-bold mb-4 text-left ${
                language === "zh" ? "font-noto-serif-sc" : "font-serif"
              }`}
            >
              {t.name}
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg text-left mb-6 font-avenir">
              {t.content}
            </p>
            <button className="bg-[#1d3859] text-white px-6 sm:px-8 py-2 sm:py-3 hover:bg-[#152a43] transition text-xs sm:text-sm tracking-wider self-end">
              {t.learnMore}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
