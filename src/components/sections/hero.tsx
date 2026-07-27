'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { TechBadge } from '@/components/shared/tech-badge'
import { SectionBadge } from '@/components/shared/section-badge'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/personal-info'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 size-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="mb-6"
            >
              <SectionBadge text={t('badge')} />
            </motion.div>

            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' as const }}
              className="mb-2 text-lg text-muted-foreground"
            >
              Hola, soy{' '}
              <span className="font-semibold text-foreground">
                {personalInfo.shortName}
              </span>
            </motion.p>

            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' as const }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t('headline')}{' '}
              <span className="gradient-text">{t('headlineAccent')}</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' as const }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              {t('subheadline')}
            </motion.p>

            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' as const }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: 'lg' }))}
              >
                <Calendar className="mr-2 size-4" />
                {t('ctaPrimary')}
              </Link>
              <Link
                href="/#portfolio"
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' })
                )}
              >
                {t('ctaSecondary')}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="size-72 rounded-full bg-gradient-to-br from-primary/30 via-accent/30 to-primary/10 flex items-center justify-center">
                <span className="text-7xl font-bold text-primary/60">
                  {personalInfo.shortName.charAt(0)}
                </span>
              </div>
              <div className="absolute -right-4 -bottom-4 size-24 rounded-full bg-accent/20 blur-xl" />
              <div className="absolute -left-4 -top-4 size-32 rounded-full bg-primary/20 blur-xl" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' as const }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {(['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind'] as const).map(
            (tech, i) => (
              <TechBadge key={tech} name={tech} index={i} variant="hero" />
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
