import { getTranslations } from 'next-intl/server'
import { Truck } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  return {
    title: `Our Fleet & Vehicles | Sameday Express`,
    description: 'Our modern fleet is equipped to handle shipments of all sizes, from small parcels to large pallets.',
  }
}

export default async function VehiclesPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('vehiclesPage')

  const vehicles = [
    {
      key: 'sprinter177',
      specs: ['payload', 'length', 'width', 'height']
    },
    {
      key: 'sprinter144',
      specs: ['payload', 'length', 'width', 'height']
    },
    {
      key: 'nissan',
      specs: ['payload']
    },
    {
      key: 'hino',
      specs: ['payload']
    }
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
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

      {/* Vehicles Grid */}
      <section className="py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.key}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Truck className="w-24 h-24 text-gray-400" />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl font-black text-primary tracking-wider uppercase mb-6">
                    {t(`vehicles.${vehicle.key}.name`)}
                  </h2>
                  
                  <div className="space-y-2">
                    {vehicle.specs.map((spec) => (
                      <p key={spec} className="text-grey-text">
                        <span className="font-semibold text-primary">
                          {spec === 'payload' ? 'Payload Capacity:' : 
                           spec === 'length' ? 'Length:' :
                           spec === 'width' ? 'Width:' :
                           spec === 'height' ? 'Height:' : spec}:
                        </span>{' '}
                        {t(`vehicles.${vehicle.key}.${spec}`).replace(/^(Payload Capacity:|Length:|Width:|Height:)\s*/, '')}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-grey-text mb-6">
            {t('cta')}
          </p>
          <Link
            href={`/${locale}/contact/`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-teal transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}