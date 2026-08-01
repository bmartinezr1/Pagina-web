<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-context -->
# Project Context — Portfolio Freelance brandondev

## Overview
Portafolio profesional + landing de servicios freelance, bilingüe (ES/EN), con rediseño dark atmosférico y hero tipo terminal.

## Tech Stack
- Next.js 16.2.12 (Turbopack, proxy.ts en lugar de middleware.ts, params asíncronos)
- TypeScript, Tailwind v4 (CSS-based, sin tailwind.config.ts)
- Shadcn UI con @base-ui/react (NO usar `asChild`)
- Framer Motion v12 (NO renderiza `initial` styles en SSR — evitar `opacity: 0` en `initial` para elementos críticos)
- next-intl v4 con routing por subruta `[locale]`, localePrefix `as-needed`
- next-themes (modo oscuro default), React Hook Form + Zod, react-icons (Si* para logos de tecnologías)
- Contacto por `mailto:` directo a Gmail (NO Server Action / Resend)

## Scripts
```bash
npx next dev --hostname 0.0.0.0 -p 3000   # desarrollo (LAN: http://192.168.1.86:3000)
npx next build                             # build estático (16 rutas)
```
Dev server requiere `allowedDevOrigins: ['127.0.0.1', '192.168.1.86']` en next.config.ts (ya configurado).

## Architecture
- `src/app/[locale]/` — páginas: home, contact, projects, projects/[slug]
- `src/components/sections/` — Hero, Services, Portfolio, About, CtaBanner, ContactForm
- `src/components/shared/` — Navbar, MobileNav, Footer, ScrollReveal, ProjectImage, ProjectGallery (carrusel), GrainOverlay, ThemeToggle, LanguageSwitcher, TechBadge, SectionBadge
- `src/messages/es.json` + `en.json` — textos (services.items, projects.{slug}.{title,description,intro,award,stackDescription,problem,solution,results}, about.bio array)
- `src/data/projects.ts` — proyectos (slug, tecnologías, metrics, images, logo opcional, featured)
- `src/data/technologies.ts` — tech con iconos react-icons (Si*) + lucide fallback (AWS=Cloud, VS Code=Code2)
- `src/types/index.ts` — tipo `Project` con titleKey, images[], logo?: string

## Personal Info (src/data/personal-info.ts)
- Nombre: Brandon Bastian Martinez Ramos
- Role: "Desarrollador Full-Stack" / "Full-Stack Developer"
- Email: brmartinezr23@gmail.com
- Phone/WhatsApp: +56948038052
- GitHub: https://github.com/bmartinezr1
- Dominio: brandondev.com (placeholder)

## Projects (2 reales)
1. "Gestión de cuentas hospitalarias para HPL" — PHP 8.2/MySQL/Playwright/Bootstrap/Docker (slug: gestion-cuentas-hospitalarias)
2. "Plataforma de Validación" (IA) — Laravel/React/PostgreSQL/Gemini, 1er lugar Open Innovation AVA x UCSC 2026 (slug: motor-validacion-ia)
   - Imágenes: logo-motor.png (portada/logo), ia-1..5.png, foto-premiacion.png

## Project Detail Page
- `src/app/[locale]/projects/[slug]/page.tsx` — columnas 60/40; carrusel (ProjectGallery) a la izquierda, texto a la derecha
- Campos: title, description, intro, award (badge con Trophy), stackDescription, problem, solution, results (lista con Check), metrics
- Imágenes del carrusel son 2:1 (1916x967); el logo se muestra a su proporción natural (aspect-[1032/873])
- Si un logo de otro proyecto tiene otra proporción, ajustar `aspect-[1032/873]` en project-gallery.tsx

## Design System
- Dark atmosférico: primary cyan `oklch(0.72 0.19 215)`, accent rose `oklch(0.68 0.24 330)`, fondo `oklch(0.02 0.003 278)`
- Tipografía: Bricolage Grotesque (headings) + Plus Jakarta Sans (body), vía next/font/google en `src/app/layout.tsx`
- Glassmorphism, orbes animados, grain overlay, gradient hover en botones
- Utils CSS en globals.css: gradient-text, card-glow, text-glow, keyframes orb/grain/glow

## Hero Terminal
- `src/components/sections/hero.tsx` — máquina de escribir vía setTimeout + visibleCount + charIndex (NO usar componente Typewriter separado, causaba bugs)
- Líneas: whoami, mission, stack (incluye Laravel), contact
- Efecto: 20-60ms/char, pausa 150-350ms entre líneas, luego muestra CTA buttons
- Fallo previo: Framer Motion wrapper ocultaba el terminal — usar div plano

## Contact Form
- `src/components/sections/contact-form.tsx` — React Hook Form + Zod + honeypot
- Al enviar abre `mailto:brmartinezr23@gmail.com?subject&body` con datos del formulario (no usa Resend)

## Services Cards
- Texto en `services.items` (es.json/en.json): Páginas Web, Sistemas Web a Medida, Automatización & IA, Cumplimiento Ley 21.719
- Iconos en `src/data/services.ts` (Globe, Briefcase, Bot, ShieldCheck)
- Lenguaje claro para no programadores (sin tecnicismos)

## Pending / TODO
- [ ] Confirmar sanitización visual de capturas IA (cláusula de confidencialidad) — el modelo no puede ver imágenes
- [ ] Datos reales de LinkedIn/Twitter/X (placeholder actual)
- [ ] Dominio propio (placeholder brandondev.com)
- [ ] La terminal usa líneas hardcodeadas en español — considerar i18n futuro
<!-- END:project-context -->
