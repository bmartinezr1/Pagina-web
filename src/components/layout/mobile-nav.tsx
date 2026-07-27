'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { LanguageSwitcher } from '@/components/shared/language-switcher'

const navItems = [
  { href: '/', label: 'nav.home' },
  { href: '/#services', label: 'nav.services' },
  { href: '/#portfolio', label: 'nav.portfolio' },
  { href: '/#about', label: 'nav.about' },
  { href: '/contact', label: 'nav.contact' },
] as const

type Props = {
  onNavClick: () => void
}

export function MobileNav({ onNavClick }: Props) {
  const t = useTranslations()
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-6 pt-12">
      <div className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavClick}
              className={`rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
            >
              {t(item.label)}
            </Link>
          )
        })}
      </div>
      <div className="px-4">
        <LanguageSwitcher />
      </div>
    </div>
  )
}
