import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Sameday Express | Same-Day Courier & Delivery Canada',
  description: 'Fast same-day courier service in Montreal, Toronto, Ottawa. Medical, AOG, cross-border logistics. Available 24/7. Call 1-888-252-9623.',
  keywords: ['same day delivery', 'courier Montreal', 'medical courier Canada', 'express shipping Quebec'],
  openGraph: {
    title: 'Sameday Express | Same-Day Courier & Delivery Canada',
    description: 'Fast same-day courier service in Montreal, Toronto, Ottawa. Available 24/7.',
    url: 'https://samedayexpress.ca',
    siteName: 'Sameday Express',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://samedayexpress.ca',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}