import { getTranslations } from 'next-intl/server'
import { MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  return {
    title: `Service Zones & Coverage Areas | Sameday Express`,
    description: 'Our delivery and service areas across Quebec, Ontario, New Brunswick and cross-border to the United States.',
  }
}

export default async function ZonesPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('zonesPage')

  const serviceAreas = [
    'Montreal Metropolitan Region',
    'Greater Toronto Area',
    'Province of Quebec',
    'Province of Ontario',
    'Province of New Brunswick',
    'Cross-border services to the United States'
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            {t('title')}
          </h1>
          <p className="text-grey-text text-lg">
            {t('subtitle')}
          </p>
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

      {/* Cards Section */}
      <section className="py-16 bg-grey-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Areas Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent-cyan/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-accent-cyan" />
                </div>
                <h2 className="text-xl font-bold text-primary">
                  {t('serviceAreas.title')}
                </h2>
              </div>
              
              <p className="text-grey-text mb-4">
                {t('serviceAreas.content')}
              </p>
              
              <ul className="space-y-3">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0" />
                    <span className="text-sm text-primary">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-accent-cyan/10 rounded-2xl p-8 border border-accent-cyan/20">
              <h2 className="text-xl font-bold text-primary mb-4">
                {t('contact.title')}
              </h2>
              
              <p className="text-grey-text mb-6">
                {t('contact.content')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-cyan" />
                  <a 
                    href="tel:1-888-252-9623" 
                    className="text-primary hover:text-accent-cyan transition-colors"
                  >
                    {t('contact.phone')}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-cyan" />
                  <a 
                    href="mailto:info@samedayexpress.ca" 
                    className="text-primary hover:text-accent-cyan transition-colors"
                  >
                    {t('contact.email')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}