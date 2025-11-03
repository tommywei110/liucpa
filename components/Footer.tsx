"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const { language } = useLanguage()
  const footer = translations[language].footer

  return (
    <footer className={`bg-[#1d3859] text-white pt-8 pb-16 relative ${language === "zh" ? "font-noto-serif-sc" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className={`text-gray-300 uppercase tracking-[0.3em] text-sm font-light mb-12 ${language === "zh" ? "" : "font-avenir"}`}>
          {footer.title}
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-gray-300">
          {/* Address */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className={`text-sm ${language === "zh" ? "" : "font-avenir"}`}>{footer.address}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className={`text-sm ${language === "zh" ? "" : "font-avenir"}`}>{footer.phone}</span>
          </div>

          {/* WeChat */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
            </svg>
            <span className={`text-sm ${language === "zh" ? "" : "font-avenir"}`}>{footer.wechat}</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-sm">{footer.copyright}</p>
          <p className={`text-gray-400 text-sm ${language === "zh" ? "" : "font-avenir"}`}>{footer.address}</p>
        </div>
      </div>

      {/* Chat Button - Fixed Position */}
      <button className={`fixed bottom-8 right-8 bg-[#B89030] hover:bg-[#a68028] text-white px-6 py-3 rounded-md shadow-lg transition-colors ${language === "zh" ? "" : "font-avenir"}`}>
        {footer.chatButton}
      </button>
    </footer>
  )
}
