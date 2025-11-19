"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

interface WeOfferProps {
  backgroundClassName?: string;
  showCta?: boolean;
  titleOverride?: string;
  titleClassNameOverride?: string;
  hideServicesGrid?: boolean;
}

export default function WeOffer({
  backgroundClassName,
  showCta = true,
  titleOverride,
  titleClassNameOverride,
  hideServicesGrid,
}: WeOfferProps) {
  const { language } = useLanguage();
  const t = translations[language].weOffer;

  return (
    <section
      className={`${backgroundClassName ?? "bg-ocean-100"} pt-12 pb-12 px-4`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        {titleOverride ? (
          <h2
            className={
              titleClassNameOverride ??
              "text-gray-800 text-3xl md:text-5xl font-normal mb-8 font-serif"
            }
          >
            {titleOverride}
          </h2>
        ) : (
          <h2
            className={`text-center text-gray-500 uppercase tracking-[0.3em] text-sm font-light mb-20 ${
              language === "zh" ? "font-noto-serif-sc" : "font-avenir"
            }`}
          >
            {t.title}
          </h2>
        )}

        {!hideServicesGrid && (
          <>
            {/* Three Column Grid */}
            <div className="grid md:grid-cols-3 gap-16 mb-20">
              {/* Column 1: Certified Tax Expert */}
              <div className="text-center px-4">
                <h3
                  className={`text-4xl md:text-5xl font-normal text-gray-800 mb-8 leading-tight ${
                    language === "zh" ? "font-noto-serif-sc" : "font-serif"
                  }`}
                >
                  {t.service1.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base font-avenir">
                  {t.service1.description}
                </p>
              </div>

              {/* Column 2: Professional Bookkeepers */}
              <div className="text-center px-4">
                <h3
                  className={`text-4xl md:text-5xl font-normal text-gray-800 mb-8 leading-tight ${
                    language === "zh" ? "font-noto-serif-sc" : "font-serif"
                  }`}
                >
                  {t.service2.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base font-avenir">
                  {t.service2.description}
                </p>
              </div>

              {/* Column 3: Tax Planning */}
              <div className="text-center px-4">
                <h3
                  className={`text-4xl md:text-5xl font-normal text-gray-800 mb-8 leading-tight ${
                    language === "zh" ? "font-noto-serif-sc" : "font-serif"
                  }`}
                >
                  {t.service3.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base font-avenir">
                  {t.service3.description}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            {showCta && (
              <div className="text-center">
                <a
                  href="/services"
                  className="text-gray-500 uppercase tracking-[0.3em] text-sm font-light hover:text-gray-700 transition-colors font-avenir"
                >
                  {t.cta}
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
