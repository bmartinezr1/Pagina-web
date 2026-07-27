'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { TechBadge } from '@/components/shared/tech-badge'
import { SectionBadge } from '@/components/shared/section-badge'
import { cn } from '@/lib/utils'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 size-[400px] rounded-full bg-accent/5 blur-3xl" />

      <motion.div
        className="container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <SectionBadge text={t('badge')} />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t('headline')}{' '}
          <span className="gradient-text">{t('headlineAccent')}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          {t('subheadline')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap gap-3"
        >
          {(['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind'] as const).map(
            (tech, i) => (
              <TechBadge key={tech} name={tech} index={i} variant="hero" />
            )
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
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
            className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
          >
            {t('ctaSecondary')}
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
