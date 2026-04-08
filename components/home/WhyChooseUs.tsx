'use client'

import { useTranslations } from 'next-intl'
import { Rocket, Shield, Globe, Stethoscope } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyChooseUs() {
  const t = useTranslations('whyChooseUs')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    { key: 'speed', icon: Rocket },
    { key: 'insured', icon: Shield },
    { key: 'coverage', icon: Globe },
    { key: 'certified', icon: Stethoscope },
  ]

  return (
    <section ref={ref} className="py-20 bg-grey-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              {t('title')}
            </h2>
            <p className="text-grey-text leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-accent-cyan/10 rounded-xl flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-sm text-grey-text">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}