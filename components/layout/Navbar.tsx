'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, FileText, FlaskConical as Flask, Globe, Home, MapPin, Menu, Pill, Plane, Search, Settings, Truck, X, Zap } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type { LucideIcon } from 'lucide-react'

interface NavLink {
  href: string
  label: string
  icon: LucideIcon
  target?: string
  hasDropdown?: boolean
  onClick?: () => void
}

export default function Navbar() {
  const t = useTranslations('nav')
  const tServices = useTranslations('servicesDropdown')
  const locale = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  const navLinks: NavLink[] = [
    { href: `/${locale}/`, label: t('welcome'), icon: Home },
    { href: 'https://courriermdex.courier-connex.com/index.php?action=tracking', label: t('track'), icon: Search, target: '_blank' },
    { href: `/${locale}/services/`, label: t('services'), icon: Settings, hasDropdown: true },
    { href: `/${locale}/zones/`, label: t('zones'), icon: MapPin },
    { href: `/${locale}/vehicles/`, label: t('vehicles'), icon: Truck },
    { href: `/${locale}/contact/`, label: t('contact'), icon: FileText },
  ]

  const servicesList = [
    { icon: Zap, title: tServices('sameDay.title'), subtitle: tServices('sameDay.subtitle'), href: `/${locale}/services/` },
    { icon: Plane, title: tServices('aog.title'), subtitle: tServices('aog.subtitle'), href: `/${locale}/services/` },
    { icon: Flask, title: tServices('bioscience.title'), subtitle: tServices('bioscience.subtitle'), href: `/${locale}/services/` },
    { icon: Pill, title: tServices('medical.title'), subtitle: tServices('medical.subtitle'), href: `/${locale}/services/` },
    { icon: Globe, title: tServices('crossBorder.title'), subtitle: tServices('crossBorder.subtitle'), href: `/${locale}/services/` },
  ]


  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href={`/${locale}/`} className="flex items-center">
              <Image
                src="/logo.png"
                alt="Sameday Express Logo"
                width={120}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary hover:text-accent-cyan transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                      {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  ) : link.target ? (
                    <a
                      href={link.href}
                      target={link.target}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary hover:text-accent-cyan transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                      {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary hover:text-accent-cyan transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                      {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                    </Link>
                  )}
                  
                  {/* Services Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-4">
                            <p className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-3">
                              {tServices('title')}
                            </p>
                            <div className="space-y-2">
                              {servicesList.map((service) => (
                                <Link
                                  key={service.title}
                                  href={service.href}
                                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-grey-light transition-colors"
                                >
                                  <div className="p-2 bg-accent-cyan/10 rounded-lg">
                                    <service.icon className="w-4 h-4 text-accent-cyan" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-primary">{service.title}</p>
                                    <p className="text-xs text-grey-text">{service.subtitle}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <Link
                            href={`/${locale}/services/`}
                            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors"
                          >
                            {tServices('viewAll')}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link 
                href="https://courriermdex.courier-connex.com/index.php?action=pricing" target="blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-accent-cyan transition-colors"
              >
                {t('quote')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <nav className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={link.onClick}
                    target={link.target}
                    className="flex items-center gap-3 px-4 py-3 text-primary hover:bg-grey-light rounded-lg transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-accent-cyan" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
                <Link
                  href="https://courriermdex.courier-connex.com/index.php?action=pricing" target="blank"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent-cyan transition-colors mt-4"
                >
                  {t('quote')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}