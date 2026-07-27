import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { PortfolioPreview } from '@/components/sections/portfolio-preview'
import { About } from '@/components/sections/about'
import { CtaBanner } from '@/components/sections/cta-banner'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <Services />
      <PortfolioPreview />
      <About />
      <CtaBanner />
    </>
  )
}
