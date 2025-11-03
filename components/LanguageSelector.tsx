"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const languages = {
  en: {
    name: "English",
    flag: "🇺🇸",
    display: "🇺🇸 EN",
  },
  zh: {
    name: "简体中文",
    flag: "🇨🇳",
    display: "🇨🇳 简体中文",
  },
};

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

export default function LanguageSelector({
  isScrolled = false,
}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: "en" | "zh") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Dropdown */}
      <div className="hidden lg:block">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger
            className={`text-white hover:text-ocean-100 font-light transition text-sm flex items-center gap-1 outline-none relative z-[51] ${
              language === "zh" ? "font-noto-serif-sc" : ""
            }`}
          >
            <span>{languages[language].flag}</span>{" "}
            <span>{language === "en" ? "EN" : languages[language].name}</span>
            <ChevronDown className="h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className={`z-[60] ${
              language === "zh" ? "font-noto-serif-sc" : ""
            } ${
              isScrolled
                ? "bg-ocean-400/95 border-ocean-500 backdrop-blur-md"
                : "bg-ocean-400/10 border-ocean-500/20 backdrop-blur-md"
            }`}
          >
            {language === "en" ? (
              <DropdownMenuItem
                onSelect={() => handleLanguageChange("zh")}
                className="cursor-pointer text-white font-light text-sm"
              >
                <span>{languages.zh.flag}</span>{" "}
                <span>{languages.zh.name}</span>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                onSelect={() => handleLanguageChange("en")}
                className="cursor-pointer text-white font-light text-sm"
              >
                <span>{languages.en.flag}</span> <span>EN</span>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Buttons */}
      <div
        className={`flex items-center gap-3 lg:hidden ${
          language === "zh" ? "font-noto-serif-sc" : ""
        }`}
      >
        <button
          onClick={() => handleLanguageChange("en")}
          className={`font-light px-3 py-1 rounded-full transition-all duration-300 text-sm ${
            language === "en"
              ? "text-white border border-white/50 bg-white/10"
              : "text-white/60 hover:text-white"
          }`}
        >
          <span>{languages.en.flag}</span> <span>EN</span>
        </button>
        <button
          onClick={() => handleLanguageChange("zh")}
          className={`font-light px-3 py-1 rounded-full transition-all duration-300 text-sm ${
            language === "zh"
              ? "text-white border border-white/50 bg-white/10"
              : "text-white/60 hover:text-white"
          }`}
        >
          <span>{languages.zh.flag}</span> <span>{languages.zh.name}</span>
        </button>
      </div>
    </>
  );
}
