'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
  honeypot: z.string().max(0),
})

export type SendMessageResult = {
  success: boolean
  error?: string
}

export async function sendMessage(
  prevState: SendMessageResult | null,
  formData: FormData
): Promise<SendMessageResult> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
    honeypot: formData.get('honeypot') as string,
  }

  const validated = schema.safeParse(raw)

  if (!validated.success) {
    return { success: false, error: 'Invalid form data' }
  }

  if (validated.data.honeypot) {
    return { success: true }
  }

  try {
    const { name, email, subject, message } = validated.data

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: 'brmartinezr23@gmail.com',
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <h2>Nuevo mensaje desde el portafolio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      }),
    })

    if (!res.ok) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch {
    return { success: false, error: 'Error sending message. Please try again.' }
  }
}
