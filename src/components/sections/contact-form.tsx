'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useActionState, startTransition } from 'react'
import { Send, MessageCircle, Loader2 } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { SectionBadge } from '@/components/shared/section-badge'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { personalInfo } from '@/data/personal-info'
import { sendMessage, type SendMessageResult } from '@/actions/send-message'

function makeSchema(t: ReturnType<typeof useTranslations>) {
  return z.object({
    name: z
      .string()
      .min(2, t('contact.form.validation.nameMin')),
    email: z
      .string()
      .min(1, t('contact.form.validation.emailRequired'))
      .email(t('contact.form.validation.emailInvalid')),
    subject: z
      .string()
      .min(5, t('contact.form.validation.subjectMin')),
    message: z
      .string()
      .min(20, t('contact.form.validation.messageMin')),
    honeypot: z.string().max(0),
  })
}

type FormValues = z.infer<ReturnType<typeof makeSchema>>

const initialState: SendMessageResult = { success: false }

export function ContactFormSection() {
  const t = useTranslations()
  const [state, formAction, pending] = useActionState(sendMessage, initialState)
  const [submitted, setSubmitted] = useState(false)

  const schema = makeSchema(t)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (state?.success) {
      reset()
    }
  }, [state, reset])

  function onSubmit(data: FormValues) {
    const fd = new FormData()
    fd.append('name', data.name)
    fd.append('email', data.email)
    fd.append('subject', data.subject)
    fd.append('message', data.message)
    fd.append('honeypot', data.honeypot)
    startTransition(() => {
      formAction(fd)
    })
    setSubmitted(true)
  }

  if (submitted && !pending && state?.success) {
    return (
      <section id="contact" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background" />
        <ScrollReveal className="container relative">
          <div className="mx-auto max-w-lg text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                <Send className="size-6 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold">{t('contact.form.success')}</h2>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setSubmitted(false)}
            >
              {t('contact.form.submit')}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    )
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background" />
      <ScrollReveal className="container relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionBadge text={t('contact.title')} />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t('contact.subtitle')}
          </h2>
        </div>

        <div className="mx-auto max-w-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="sr-only" aria-hidden="true">
              <Label htmlFor="honeypot">Honeypot</Label>
              <Input id="honeypot" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">{t('contact.form.name')}</Label>
              <Input
                id="name"
                placeholder={t('contact.form.namePlaceholder')}
                {...register('name')}
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('contact.form.email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">{t('contact.form.subject')}</Label>
              <Input
                id="subject"
                placeholder={t('contact.form.subjectPlaceholder')}
                {...register('subject')}
              />
              {errors.subject && (
                <p className="text-xs text-destructive">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t('contact.form.message')}</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder={t('contact.form.messagePlaceholder')}
                {...register('message')}
              />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message.message}</p>
              )}
            </div>

            {submitted && !pending && state && !state.success && (
              <p className="text-sm text-destructive">
                {state.error === 'rate'
                  ? t('contact.form.rateLimited')
                  : t('contact.form.error')}
              </p>
            )}

            <Button type="submit" className="w-full relative overflow-hidden group" disabled={pending}>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center">
                {pending ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 size-4" />
                    {t('contact.form.submit')}
                  </>
                )}
              </span>
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="mb-3 text-sm text-muted-foreground">{t('contact.or')}</p>
            <a
              href={`https://wa.me/${personalInfo.phoneDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              <MessageCircle className="mr-2 size-4" />
              {t('contact.whatsapp')}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
