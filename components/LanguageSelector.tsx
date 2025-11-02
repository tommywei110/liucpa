'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Check } from 'lucide-react'

const languages = {
  en: {
    flag: '🇺🇸',
    name: 'English',
  },
  zh: {
    flag: '🇨🇳',
    name: '简体中文',
  },
}

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (lang: 'en' | 'zh') => {
    setLanguage(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-xl hover:bg-white/10 transition-all focus-visible:ring-0 focus-visible:ring-offset-0 h-9 w-9 p-0 rounded-full"
          aria-label="Select language"
        >
          {languages[language].flag}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-44 p-1 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl rounded-sm"
        sideOffset={8}
      >
        <DropdownMenuItem
          onClick={() => handleLanguageChange('en')}
          className="flex items-center gap-2 cursor-pointer rounded-sm px-2 py-2 hover:bg-ocean-50 focus:bg-ocean-50 transition-colors"
        >
          <span className="text-base">{languages.en.flag}</span>
          <span className="flex-1 text-sm font-medium text-gray-700">{languages.en.name}</span>
          {language === 'en' && <Check className="h-3.5 w-3.5 text-ocean-600" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('zh')}
          className="flex items-center gap-2 cursor-pointer rounded-sm px-2 py-2 hover:bg-ocean-50 focus:bg-ocean-50 transition-colors"
        >
          <span className="text-base">{languages.zh.flag}</span>
          <span className="flex-1 text-sm font-medium text-gray-700">{languages.zh.name}</span>
          {language === 'zh' && <Check className="h-3.5 w-3.5 text-ocean-600" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
