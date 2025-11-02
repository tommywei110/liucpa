"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

export default function Footer() {
  const { language } = useLanguage()
  const footer = translations[language].footer

  return (
    <footer className="bg-ocean-700 text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-gray-300 uppercase tracking-[0.3em] text-sm font-avenir font-light mb-12">
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
            <span className="text-sm font-avenir">{footer.address}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm font-avenir">{footer.phone}</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">{footer.copyright}</p>
      </div>

      {/* Chat Button - Fixed Position */}
      <button className="fixed bottom-8 right-8 bg-[#B89030] hover:bg-[#a68028] text-white px-6 py-3 rounded-md shadow-lg transition-colors font-avenir">
        {footer.chatButton}
      </button>
    </footer>
  )
}
