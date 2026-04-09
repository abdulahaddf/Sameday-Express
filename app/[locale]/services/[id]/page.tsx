import { getTranslations } from 'next-intl/server'
import { Zap, Plane, FlaskConical as Flask, Pill, Globe, Warehouse, Check } from 'lucide-react'
import Link from 'next/link'
import QuoteButton from '@/components/ui/QuoteButton'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params: { locale, id }
}: {
  params: { locale: string; id: string }
}) {
  const validIds = ['sameDay', 'aog', 'bioscience', 'medical', 'crossBorder', 'warehousing']
  if (!validIds.includes(id)) {
    return {
      title: 'Service Not Found | Sameday Express',
    }
  }

  const t = await getTranslations({ locale, namespace: 'servicesPage' })
  
  return {
    title: `${t(`${id}.title`)} | Sameday Express`,
    description: t(`${id}.description`),
  }
}

export default async function ServiceDetailsPage({
  params: { locale, id }
}: {
  params: { locale: string; id: string }
}) {
  const validIds = ['sameDay', 'aog', 'bioscience', 'medical', 'crossBorder', 'warehousing']
  
  if (!validIds.includes(id)) {
    notFound()
  }

  const t = await getTranslations('servicesPage')

  const icons: Record<string, any> = {
    sameDay: Zap,
    aog: Plane,
    bioscience: Flask,
    medical: Pill,
    crossBorder: Globe,
    warehousing: Warehouse,
  }

  const ServiceIcon = icons[id]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-grey-text mb-4">
            <Link href={`/${locale}/`} className="hover:text-accent-cyan transition-colors">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <Link href={`/${locale}/services/`} className="hover:text-accent-cyan transition-colors">
              {t('title')}
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">{t(`${id}.title`)}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {t(`${id}.title`)}
          </h1>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-grey-light flex-grow flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-4 bg-accent-cyan/10 rounded-xl">
                <ServiceIcon className="w-10 h-10 text-accent-cyan" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary">
                  {t(`${id}.title`)}
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-grey-text leading-relaxed mb-8">
              {t(`${id}.description`)}
            </p>
            
            <h3 className="text-xl font-bold text-primary mb-4">Key Features</h3>
            <ul className="space-y-4 mb-10">
              {[1, 2, 3, 4, 5].map((featureNum) => {
                let featureText = '';
                try {
                  featureText = t(`${id}.features.${featureNum - 1}`);
                } catch(e) {
                  return null;
                }
                if (!featureText || featureText.includes(`${id}.features`)) return null;
                
                return (
                  <li key={featureNum} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-accent-cyan flex-shrink-0" />
                    <span className="text-base text-primary">
                      {featureText}
                    </span>
                  </li>
                )
              })}
            </ul>
            
            <QuoteButton label={t('cta')} />
          </div>
        </div>
      </section>
    </div>
  )
}
