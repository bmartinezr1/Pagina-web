'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatePresence } from 'framer-motion'
import { SectionBadge } from '@/components/shared/section-badge'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { ProjectCard } from '@/components/shared/project-card'
import { projects, categories } from '@/data/projects'
import type { ProjectCategory } from '@/types'
import { useLocale } from 'next-intl'

export function PortfolioPreview() {
  const t = useTranslations()
  const locale = useLocale()
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background" />
      <ScrollReveal className="container relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionBadge text={t('portfolio.title')} />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t('portfolio.subtitle')}
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  locale={locale}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            {t('portfolio.noProjects')}
          </p>
        )}
      </ScrollReveal>
    </section>
  )
}
