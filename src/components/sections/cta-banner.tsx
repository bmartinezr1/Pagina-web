'use client'

import { useTranslations } from 'next-intl'
import { Calendar } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/shared/scroll-reveal'

export function CtaBanner() {
  const t = useTranslations('cta')

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <ScrollReveal className="container relative text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          {t('subtitle')}
        </p>
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: 'lg' }), 'mt-8 inline-flex')}
        >
          <Calendar className="mr-2 size-4" />
          {t('button')}
        </Link>
      </ScrollReveal>
    </section>
  )
}
