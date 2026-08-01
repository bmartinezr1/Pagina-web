'use server'

import { Resend } from 'resend'
import { z } from 'zod'
import { headers } from 'next/headers'
import { personalInfo } from '@/data/personal-info'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
  honeypot: z.string().max(0),
})

export type SendMessageResult = {
  success: boolean
  error?: 'rate' | 'invalid' | 'server'
}

const WINDOW_MS = 60 * 60 * 1000
const MAX_REQUESTS_PER_IP = 5
const rateStore = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (rateStore.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  )
  if (timestamps.length >= MAX_REQUESTS_PER_IP) {
    rateStore.set(ip, timestamps)
    return true
  }
  timestamps.push(now)
  rateStore.set(ip, timestamps)
  return false
}

export async function sendMessage(
  _prevState: SendMessageResult,
  formData: FormData
): Promise<SendMessageResult> {
  const honeypot = formData.get('honeypot')
  if (typeof honeypot === 'string' && honeypot.length > 0) {
    return { success: true }
  }

  const parsed = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    honeypot: honeypot ?? '',
  })

  if (!parsed.success) {
    return { success: false, error: 'invalid' }
  }

  const forwarded = (await headers()).get('x-forwarded-for')
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown'

  if (isRateLimited(ip)) {
    return { success: false, error: 'rate' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY no configurada')
    return { success: false, error: 'server' }
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM ?? 'onboarding@resend.dev',
    to: [personalInfo.email],
    replyTo: parsed.data.email,
    subject: parsed.data.subject,
    text: `Nombre: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
  })

  if (error) {
    console.error(error)
    return { success: false, error: 'server' }
  }

  return { success: true }
}
