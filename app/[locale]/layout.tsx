import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import QuoteModal from '@/components/layout/QuoteModal'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  const messages = await getMessages({ locale })
  
  return {
    title: (messages as any).metadata.title,
    description: (messages as any).metadata.description,
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}/`,
      languages: {
        'en-CA': '/en/',
        'fr-CA': '/fr/',
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages({ locale })

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <QuoteModal />
      </div>
    </NextIntlClientProvider>
  )
}