'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionBadge } from '@/components/shared/section-badge'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { services } from '@/data/services'

export function Services() {
  const t = useTranslations()

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      <ScrollReveal className="container relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionBadge text={t('services.title')} />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t('services.subtitle')}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.titleKey}
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  {t(service.titleKey)}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {t(service.descriptionKey)}
                </p>
                <ul className="space-y-2">
                  {service.featuresKeys.map((featureKey) => (
                    <li key={featureKey} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </ScrollReveal>
    </section>
  )
}
