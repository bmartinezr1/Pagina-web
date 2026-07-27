import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
