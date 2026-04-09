'use client'

import { useTranslations } from 'next-intl'
import { Phone } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function CTABanner() {
  const t = useTranslations('ctaBanner')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })


  return (
    <section 
      ref={ref}
      className="py-16 bg-gradient-to-r from-accent-cyan to-accent-teal"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:1-888-252-9623"
              className="flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-accent-cyan transition-all"
            >
              <Phone className="w-5 h-5" />
              {t('callBtn')}
            </a>
            <Link
              href="https://courriermdex.courier-connex.com/index.php?action=pricing" target="blank"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              {t('quoteBtn')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}