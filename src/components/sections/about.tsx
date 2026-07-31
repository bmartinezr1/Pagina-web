'use client'

import { useTranslations } from 'next-intl'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
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
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('about.bio1')}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('about.bio2')}
            </p>
          </div>

          <div className="lg:col-span-3">
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
                    <div className="space-y-2">
                      {category.items.map((tech) => (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger className="flex w-full items-center gap-3 rounded-lg border border-primary/10 bg-card/30 px-3 py-2.5 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/60 hover:card-glow cursor-pointer">
                            <span className="flex-1 text-sm font-medium">
                              {tech.name}
                            </span>
                            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
                                style={{ width: `${tech.level}%` }}
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p className="text-xs">{tech.level}%</p>
                          </TooltipContent>
                        </Tooltip>
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
