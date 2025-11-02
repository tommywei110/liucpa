'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Initialize language from URL parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const langParam = params.get('lang')

    if (langParam) {
      // Map query parameter values to language codes
      if (langParam === 'zh_CN' || langParam === 'zh') {
        setLanguage('zh')
      } else if (langParam === 'en' || langParam === 'us') {
        setLanguage('en')
      }
    }
  }, [])

  // Update URL when language changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const langParam = language === 'zh' ? 'zh_CN' : 'en'

    params.set('lang', langParam)

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState({}, '', newUrl)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
