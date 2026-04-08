import { getTranslations } from 'next-intl/server'
import { Zap, Plane, FlaskConical as Flask, Pill, Globe, Warehouse, Check } from 'lucide-react'
import Link from 'next/link'
import QuoteButton from '@/components/ui/QuoteButton'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'servicesPage' })
  
  return {
    title: `Courier & Logistics Services | Sameday Express`,
    description: t('intro'),
  }
}

export default async function ServicesPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('servicesPage')

  const services = [
    { key: 'sameDay', icon: Zap },
    { key: 'aog', icon: Plane },
    { key: 'bioscience', icon: Flask },
    { key: 'medical', icon: Pill },
    { key: 'crossBorder', icon: Globe },
    { key: 'warehousing', icon: Warehouse },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-grey-text mb-4">
            <Link href={`/${locale}/`} className="hover:text-accent-cyan transition-colors">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">{t('title')}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-grey-text text-center leading-relaxed">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.key}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-accent-cyan/10 rounded-xl">
                    <service.icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">
                      {t(`${service.key}.title`)}
                    </h2>
                  </div>
                </div>
                
                <p className="text-grey-text leading-relaxed mb-6">
                  {t(`${service.key}.description`)}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[1, 2, 3, 4, 5].map((featureNum) => (
                    <li key={featureNum} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                      <span className="text-sm text-primary">
                        {t(`${service.key}.features.${featureNum - 1}`)}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <QuoteButton label={t('cta')} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}