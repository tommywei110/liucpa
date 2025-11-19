'use client'

import React, { createContext, ReactNode } from 'react'

type Language = 'en' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  setHasExplicitlySetLanguage: (value: boolean) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language: Language = 'en'
  const setLanguage = () => {}
  const setHasExplicitlySetLanguage = () => {}

  return (
    <LanguageContext.Provider value={{ language, setLanguage, setHasExplicitlySetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return { language: 'en' as Language, setLanguage: () => {}, setHasExplicitlySetLanguage: () => {} }
}
