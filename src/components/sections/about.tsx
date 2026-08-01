'use client'

import { useTranslations } from 'next-intl'
import { SectionBadge } from '@/components/shared/section-badge'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { techCategories } from '@/data/technologies'

export function About() {
  const t = useTranslations()

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background" />
      <ScrollReveal className="container relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionBadge text={t('about.title')} />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t('about.subtitle')}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {(t.raw('about.bio') as string[]).map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-2xl font-bold tracking-tight">
              {t('about.techTitle')}
            </h3>

            <div className="grid gap-8 sm:grid-cols-2">
              {techCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.nameKey}>
                    <div className="mb-4 flex items-center gap-2">
                      <Icon className="size-4 text-primary" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {t(category.nameKey)}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {category.items.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 rounded-lg border border-primary/10 bg-card/30 px-3 py-2.5 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/60 hover:card-glow"
                        >
                          {tech.icon && <tech.icon className="size-4 shrink-0 text-primary/80" />}
                          <span className="text-sm font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
