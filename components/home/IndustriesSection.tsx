'use client'

import { useTranslations } from 'next-intl'
import { Building2, ShoppingCart, Factory, Scale, Plane, Pill } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function IndustriesSection() {
  const t = useTranslations('industries')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const industries = [
    { key: 'hospitals', icon: Building2 },
    { key: 'ecommerce', icon: ShoppingCart },
    { key: 'manufacturers', icon: Factory },
    { key: 'legal', icon: Scale },
    { key: 'aviation', icon: Plane },
    { key: 'pharma', icon: Pill },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section ref={ref} className="py-20 bg-primary-mid">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t('title')}
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.key}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="p-4 bg-accent-cyan/20 rounded-full mb-4">
                <industry.icon className="w-8 h-8 text-accent-cyan" />
              </div>
              <h3 className="text-sm font-semibold text-white">
                {t(`items.${industry.key}`)}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}