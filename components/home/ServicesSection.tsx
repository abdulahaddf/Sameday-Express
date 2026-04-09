'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Zap, Plane, FlaskConical as Flask, Pill, Globe, Warehouse, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ServicesSection() {
  const t = useTranslations('services')
  const locale = useLocale()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    { key: 'sameDay', icon: Zap },
    { key: 'aog', icon: Plane },
    { key: 'bioscience', icon: Flask },
    { key: 'medical', icon: Pill },
    { key: 'crossBorder', icon: Globe },
    { key: 'warehousing', icon: Warehouse },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

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
          <span className="text-sm font-semibold text-accent-cyan uppercase tracking-wider">
            {t('label')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2">
            {t('title')}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.key}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent-cyan rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-cyan/10 rounded-xl group-hover:bg-accent-cyan group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6 text-accent-cyan group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <Link href={`/${locale}/services/${service.key}`}>
                    <h3 className="text-lg font-bold text-primary mb-2 hover:text-accent-cyan transition-colors">
                      {t(`cards.${service.key}.title`)}
                    </h3>
                  </Link>
                  <p className="text-sm text-grey-text leading-relaxed">
                    {t(`cards.${service.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href={`/${locale}/services/`}
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