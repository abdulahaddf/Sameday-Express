'use client'

import { useTranslations } from 'next-intl'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

export default function StatsBar() {
  const t = useTranslations('stats')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { key: 'years', suffix: '+' },
    { key: 'deliveries', suffix: 'K+' },
    { key: 'cities', suffix: '+' },
    { key: 'satisfaction', suffix: '%', isDecimal: true },
  ]

  const getNumericValue = (key: string) => {
    switch (key) {
      case 'years': return 25
      case 'deliveries': return 5
      case 'cities': return 1500
      case 'satisfaction': return 99.99
      default: return 0
    }
  }

  return (
    <section ref={ref} className="bg-[#060f1e] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.key} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={getNumericValue(stat.key)}
                    duration={2.5}
                    decimals={stat.isDecimal ? 2 : 0}
                    suffix={stat.suffix}
                    enableScrollSpy={false}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-grey-text uppercase tracking-wider font-medium">
                {t(`${stat.key}.label`)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}