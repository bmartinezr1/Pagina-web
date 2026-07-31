import type { Metadata } from 'next'
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

import { personalInfo } from '@/data/personal-info'

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.shortName} Dev — ${personalInfo.roleEn}`,
    template: `%s | ${personalInfo.shortName} Dev`,
  },
  description:
    'Transformo ideas en software escalable, rápido y de alto rendimiento. Desarrollo web, aplicaciones SaaS y automatizaciones.',
  metadataBase: new URL(`https://${personalInfo.domain}`),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: `${personalInfo.shortName} Dev`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${bricolage.variable} ${plusJakarta.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased scrollbar-thin">
        {children}
      </body>
    </html>
  )
}
