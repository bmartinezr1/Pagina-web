import type { LucideIcon } from 'lucide-react'
import {
  Globe,
  Briefcase,
  Bot,
  ShieldCheck,
} from 'lucide-react'

export type Service = {
  titleKey: string
  descriptionKey: string
  featuresKeys: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    titleKey: 'services.items.0.title',
    descriptionKey: 'services.items.0.description',
    featuresKeys: [
      'services.items.0.features.0',
      'services.items.0.features.1',
      'services.items.0.features.2',
      'services.items.0.features.3',
    ],
    icon: Globe,
  },
  {
    titleKey: 'services.items.1.title',
    descriptionKey: 'services.items.1.description',
    featuresKeys: [
      'services.items.1.features.0',
      'services.items.1.features.1',
      'services.items.1.features.2',
      'services.items.1.features.3',
    ],
    icon: Briefcase,
  },
  {
    titleKey: 'services.items.2.title',
    descriptionKey: 'services.items.2.description',
    featuresKeys: [
      'services.items.2.features.0',
      'services.items.2.features.1',
      'services.items.2.features.2',
      'services.items.2.features.3',
    ],
    icon: Bot,
  },
  {
    titleKey: 'services.items.3.title',
    descriptionKey: 'services.items.3.description',
    featuresKeys: [
      'services.items.3.features.0',
      'services.items.3.features.1',
      'services.items.3.features.2',
      'services.items.3.features.3',
    ],
    icon: ShieldCheck,
  },
]
