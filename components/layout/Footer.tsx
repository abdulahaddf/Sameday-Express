'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Facebook, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  const quickLinks = [
    { label: t('quickLinks'), href: `/${locale}/` },
    { label: t('services'), href: `/${locale}/services/` },
    { label: t('zones'), href: `/${locale}/zones/` },
    { label: t('vehicles'), href: `/${locale}/vehicles/` },
    { label: t('contact'), href: `/${locale}/contact/` },
  ]

  const services = [
    { label: t('services'), href: `/${locale}/services/` },
    { label: t('medical'), href: `/${locale}/services/` },
    { label: t('aog'), href: `/${locale}/services/` },
    { label: t('crossBorder'), href: `/${locale}/services/` },
    { label: t('warehousing'), href: `/${locale}/services/` },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-white"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo & Description */}
          <div>
            <Link href={`/${locale}/`} className="inline-block mb-4">
              <div className="flex items-center">
                <Image
                src="/logo2.jpeg"
                alt="Sameday Express Logo"
                width={120}
                height={40}
                priority
                className='rounded-xl'
              />
              </div>
            </Link>
            <p className="text-grey-text text-sm mb-6 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="p-2 bg-primary-light rounded-lg hover:bg-accent-cyan transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-light rounded-lg hover:bg-accent-cyan transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-light rounded-lg hover:bg-accent-cyan transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-grey-text text-sm hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-grey-text text-sm hover:text-accent-cyan transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                <span className="text-grey-text text-sm">{t('address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <a href={`tel:${t('phone')}`} className="text-grey-text text-sm hover:text-accent-cyan transition-colors">
                  {t('phone')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <a href={`mailto:${t('email')}`} className="text-grey-text text-sm hover:text-accent-cyan transition-colors">
                  {t('email')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <span className="text-grey-text text-sm">{t('hours')}</span>
              </li>
            </ul>
            
            {/* PayPal Badge */}
            <div className="mt-4 p-2 rounded-lg inline-flex items-center gap-2 bg-white text-primary">
              <span>Pay With</span>
              <Image 
                src="/paypal.png" 
                alt="PayPal" 
                width={80} 
                height={40} 
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-grey-text text-xs text-center md:text-left">
              {t('copyright')}
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/en/" 
                className={`text-xs ${locale === 'en' ? 'text-accent-cyan' : 'text-grey-text hover:text-accent-cyan'} transition-colors`}
              >
                English
              </Link>
              <span className="text-grey-text">|</span>
              <Link 
                href="/fr/" 
                className={`text-xs ${locale === 'fr' ? 'text-accent-cyan' : 'text-grey-text hover:text-accent-cyan'} transition-colors`}
              >
                Français
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}