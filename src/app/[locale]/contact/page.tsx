import { setRequestLocale } from 'next-intl/server'
import { ContactFormSection } from '@/components/sections/contact-form'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'es' ? 'Contacto' : 'Contact'
  const description =
    locale === 'es'
      ? 'Contáctame para tu próximo proyecto. Desarrollo web, apps SaaS y automatizaciones.'
      : 'Get in touch for your next project. Web development, SaaS apps, and automation.'

  return {
    title,
    description,
    alternates: { languages: { es: '/es/contact', en: '/en/contact' } },
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <ContactFormSection />
}
