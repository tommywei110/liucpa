"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function Testimonials() {
  const { language } = useLanguage();
  const about = translations[language as "en"].about;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % about.testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(
        (prev) =>
          (prev - 1 + about.testimonials.length) % about.testimonials.length
      );
      setIsAnimating(false);
    }, 300);
  };

  const testimonial = about.testimonials[currentTestimonial];

  return (
    <section id="about" className="bg-white pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center relative">
          <h2
            className={`text-center text-gray-500 uppercase tracking-[0.3em] text-sm font-light mb-20 ${
              language === "zh" ? "font-noto-serif-sc" : "font-avenir"
            }`}
          >
            {about.title}
          </h2>

          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-2 disabled:opacity-50"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            className={`transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="min-h-[320px] md:min-h-[260px] flex flex-col justify-center">
              <blockquote
                className={`text-3xl md:text-4xl italic text-gray-800 leading-relaxed mb-16 ${
                  language === "zh" ? "font-noto-serif-sc" : "font-serif"
                }`}
              >
                {testimonial.quote}
              </blockquote>
              {(testimonial.name || testimonial.position) && (
                <>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-gray-400">—</span>
                    <p className="text-gray-600 tracking-wider text-sm font-avenir">
                      {testimonial.name}
                    </p>
                    <span className="text-gray-400">—</span>
                  </div>
                  <p className="text-gray-500 tracking-wider text-sm uppercase mb-12 font-avenir">
                    {testimonial.position}
                  </p>
                </>
              )}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-3">
              {about.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentTestimonial(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  disabled={isAnimating}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-ocean-500 border border-ocean-600"
                      : "bg-white border border-ocean-600 hover:bg-ocean-100"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-2 disabled:opacity-50"
            aria-label="Next testimonial"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
