'use server'

import { Resend } from 'resend'
import { z } from 'zod'
import { personalInfo } from '@/data/personal-info'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
  honeypot: z.string().max(0),
})

export type SendMessageResult = { success: boolean }

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
    return { success: false }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY no configurada')
    return { success: false }
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
    return { success: false }
  }

  return { success: true }
}
