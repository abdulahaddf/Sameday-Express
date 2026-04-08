'use client'

import { useTranslations } from 'next-intl'
import { ClipboardList, Phone, Search, Clock, Satellite, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const t = useTranslations('hero')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const handleQuoteClick = () => {
    window.dispatchEvent(new CustomEvent('openQuoteModal'))
  }

  const badges = [
    { icon: Clock, label: t('badges.available') },
    { icon: Satellite, label: t('badges.gps') },
    { icon: Shield, label: t('badges.insured') },
    { icon: Zap, label: t('badges.fast') },
  ]

  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[80vh] md:min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero.png)',
          }}
        />
        {/* <div className="absolute inset-0 bg-primary" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 sm:py-20 md:py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white/90 border border-white/20">
              <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse flex-shrink-0" />
              {t('badge')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-accent-cyan"
          >
            {t('subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-white/90 max-w-3xl mx-auto px-2"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-6 md:pt-8 w-full max-w-sm sm:max-w-none mx-auto"
          >
            <button
              onClick={handleQuoteClick}
              className="flex items-center justify-center gap-2 px-6 py-2 md:py-3.5 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-teal transition-all hover:scale-105 w-full sm:w-auto text-base"
            >
              <ClipboardList className="w-5 h-5 flex-shrink-0" />
              {t('quoteBtn')}
            </button>
            <a
              href="tel:1-888-252-9623"
              className="flex items-center justify-center gap-2 px-6 py-2 md:py-3.5 bg-primary/80 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-primary transition-all w-full sm:w-auto text-base"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              {t('callBtn')}
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openTrackModal'))}
              className="flex items-center justify-center gap-2 px-6 py-2 md:py-3.5 bg-primary/80 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-primary transition-all w-full sm:w-auto text-base"
            >
              <Search className="w-5 h-5 flex-shrink-0" />
              {t('trackBtn')}
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-8 md:pt-12"
          >
            {badges.map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white/90 border border-white/10"
              >
                <badge.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-cyan flex-shrink-0" />
                <span className="truncate">{badge.label}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  )
}