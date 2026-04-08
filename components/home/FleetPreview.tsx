'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Truck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FleetPreview() {
  const t = useTranslations('fleet')
  const locale = useLocale()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const vehicles = [
    { key: 'nissan' },
    { key: 'sprinter144' },
    { key: 'sprinter177' },
    { key: 'hino' },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            {t('title')}
          </h2>
        </motion.div>

        {/* Fleet Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.key}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-grey-light rounded-xl overflow-hidden group"
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                <Truck className="w-16 h-16 text-gray-400" />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary mb-1">
                  {t(`vehicles.${vehicle.key}.name`)}
                </h3>
                <p className="text-sm text-grey-text mb-3">
                  {t(`vehicles.${vehicle.key}.specs`)}
                </p>
                <Link
                  href={`/${locale}/vehicles/`}
                  className="inline-flex items-center gap-1 text-sm text-accent-cyan hover:text-accent-teal transition-colors"
                >
                  {t('seeDetails')}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <Link
            href={`/${locale}/vehicles/`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent-cyan transition-colors"
          >
            {t('viewAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}