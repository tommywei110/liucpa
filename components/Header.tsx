"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language].header;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ocean-400' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-8 px-2 sm:px-4 md:px-6 py-6">
          <a
            href="#"
            className="text-white hover:text-ocean-100 font-light transition text-sm"
          >
            {t.home}
          </a>
          <a
            href="#about"
            className="text-white hover:text-ocean-100 font-light transition text-sm"
          >
            {t.about}
          </a>
          <a
            href="#services"
            className="text-white hover:text-ocean-100 font-light transition text-sm"
          >
            {t.services}
          </a>
          <a
            href="#contact"
            className="text-white hover:text-ocean-100 font-light transition text-sm"
          >
            {t.contact}
          </a>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl tracking-wide font-cursive whitespace-nowrap">
            {t.companyName}
          </h1>
        </div>

        {/* Right Section: Language Selector */}
        <div className="flex items-center mr-2 sm:mr-4">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
