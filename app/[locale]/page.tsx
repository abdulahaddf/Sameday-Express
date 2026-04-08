import { getTranslations } from 'next-intl/server'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ServicesSection from '@/components/home/ServicesSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import FleetPreview from '@/components/home/FleetPreview'
import IndustriesSection from '@/components/home/IndustriesSection'
import CTABanner from '@/components/home/CTABanner'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'metadata' })
  
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyChooseUs />
      <FleetPreview />
      <IndustriesSection />
      <CTABanner />
    </>
  )
}