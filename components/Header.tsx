"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import LanguageSelector from "./LanguageSelector";
import { LogIn } from "lucide-react";

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language].header;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-ocean-400" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-6">
        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav
          className={`hidden lg:flex items-center space-x-8 px-6 ${
            language === "zh" ? "font-noto-serif-sc" : ""
          }`}
        >
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
            href="#pricing"
            className="text-white hover:text-ocean-100 font-light transition text-sm"
          >
            {t.pricing}
          </a>
          <a
            href="#contact"
            className="text-white hover:text-ocean-100 font-light transition text-sm"
          >
            {t.contact}
          </a>
          <LanguageSelector isScrolled={isScrolled} />
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1
            className={`text-white tracking-wide whitespace-nowrap leading-relaxed py-1 ${
              language === "zh"
                ? "font-zhi-ming-xing text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                : "font-cursive text-lg sm:text-xl md:text-2xl"
            }`}
            style={{ lineHeight: "1.8" }}
          >
            {t.companyName}
          </h1>
        </div>

        {/* Right Section - Client Login */}
        <div
          className={`hidden md:flex items-center px-6 ${
            language === "zh" ? "font-noto-serif-sc" : ""
          }`}
        >
          <a
            href="#login"
            className="text-white hover:text-ocean-100 font-light transition text-sm flex items-center gap-1"
          >
            <LogIn className="h-4 w-4" />
            {t.clientLogin}
          </a>
        </div>
      </div>

      {/* Mobile Menu - Slides in from left */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-ocean-400 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <nav
            className={`flex flex-col pt-20 px-6 space-y-6 flex-grow ${
              language === "zh" ? "font-noto-serif-sc" : ""
            }`}
          >
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-ocean-100 font-light transition text-lg"
            >
              {t.home}
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-ocean-100 font-light transition text-lg"
            >
              {t.about}
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-ocean-100 font-light transition text-lg"
            >
              {t.services}
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-ocean-100 font-light transition text-lg"
            >
              {t.pricing}
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-ocean-100 font-light transition text-lg"
            >
              {t.contact}
            </a>
            <a
              href="#login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden text-white hover:text-ocean-100 font-light transition text-lg flex items-center gap-2"
            >
              <LogIn className="h-5 w-5" />
              {t.clientLogin}
            </a>
          </nav>

          {/* Language Selector at Bottom */}
          <div className="px-6 pb-20">
            <LanguageSelector isScrolled={isScrolled} />
          </div>
        </div>
      </div>

      {/* Overlay - Darkens background when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
