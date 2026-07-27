import { setRequestLocale } from 'next-intl/server'
import { PortfolioPreview } from '@/components/sections/portfolio-preview'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'es' ? 'Portafolio' : 'Portfolio'
  const description =
    locale === 'es'
      ? 'Explora mis proyectos. Casos de estudio de desarrollo full-stack, UI/UX, APIs y open source.'
      : 'Browse my projects. Case studies in full-stack development, UI/UX, APIs, and open source.'

  return {
    title,
    description,
    alternates: { languages: { es: '/es/projects', en: '/en/projects' } },
  }
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <PortfolioPreview />
}
