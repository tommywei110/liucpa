'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  setHasExplicitlySetLanguage: (value: boolean) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [hasExplicitlySetLanguage, setHasExplicitlySetLanguage] = useState(false)

  // Initialize language from URL parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const langParam = params.get('lang')

    if (langParam) {
      // Map query parameter values to language codes
      if (langParam === 'zh_CN' || langParam === 'zh') {
        setLanguage('zh')
        setHasExplicitlySetLanguage(true)
      } else if (langParam === 'en' || langParam === 'us') {
        setLanguage('en')
        setHasExplicitlySetLanguage(true)
      }
    }
  }, [])

  // Update URL when language changes explicitly
  useEffect(() => {
    // Only update URL if user has explicitly changed the language
    if (!hasExplicitlySetLanguage) {
      return
    }

    const params = new URLSearchParams(window.location.search)
    const langParam = language === 'zh' ? 'zh_CN' : 'en'

    params.set('lang', langParam)

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState({}, '', newUrl)
  }, [language, hasExplicitlySetLanguage])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, setHasExplicitlySetLanguage }}>
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
