'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function handleChange(nextLocale: string | null) {
    if (!nextLocale) return
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <Select
      defaultValue={locale}
      onValueChange={handleChange}
      disabled={isPending}
    >
      <SelectTrigger className="h-9 w-[130px] border-border/50 bg-transparent text-sm">
        <Globe className="mr-2 size-3.5 text-muted-foreground" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="es">Español</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  )
}
