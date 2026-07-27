'use client'

import { useTranslations } from 'next-intl'
import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { Home } from 'lucide-react'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-2 text-2xl font-semibold">{t('title')}</h2>
        <p className="mb-8 text-muted-foreground">{t('description')}</p>
        <Link
          href="/"
          className={cn(buttonVariants(), 'inline-flex')}
        >
          <Home className="mr-2 size-4" />
          {t('button')}
        </Link>
      </div>
    </div>
  )
}
