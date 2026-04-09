'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopBar() {
  const t = useTranslations('topBar')
  const locale = useLocale()
  const pathname = usePathname()
  
  const otherLocale = locale === 'en' ? 'fr' : 'en'
  
  // Get the path without locale prefix
  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, '') || '/'
  
  return (
    <div className="bg-primary text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-4 flex-wrap">
          <a 
            href={`tel:${t('phone')}`} 
            className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t('phone')}</span>
          </a>
          <a 
            href={`mailto:${t('email')}`} 
            className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t('email')}</span>
          </a>
          <span className="flex items-center gap-1.5 text-grey-text">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('location')}</span>
          </span>
        </div>
        
        {/* Right side - Buttons and Language toggle */}
        <div className="flex items-center gap-3">
          {/* Register & Login buttons */}
          <Link href="https://courriermdex.courier-connex.com/index.php?action=register" target="blank" className="px-3 py-1 border border-white/30 rounded text-xs font-medium hover:border-accent-cyan hover:text-accent-cyan transition-colors">
            {t('register')}
          </Link>
          <Link href="https://courriermdex.courier-connex.com/client" target="blank" className="px-3 py-1 border border-white/30 rounded text-xs font-medium hover:border-accent-cyan hover:text-accent-cyan transition-colors flex items-center gap-1">
            {t('login')}
            <ArrowRight className="w-3 h-3" />
          </Link>
          
          {/* Language toggle */}
          <div className="flex items-center ml-2">
            <Link
              href={`/${otherLocale}${pathWithoutLocale}`}
              className="flex items-center border border-white/30 rounded-full overflow-hidden"
            >
              <span 
                className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                  locale === 'fr' 
                    ? 'bg-accent-cyan text-white' 
                    : 'text-white hover:text-accent-cyan'
                }`}
              >
                FR
              </span>
              <span 
                className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                  locale === 'en' 
                    ? 'bg-accent-cyan text-white' 
                    : 'text-white hover:text-accent-cyan'
                }`}
              >
                EN
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}