// Resolves lucide icons from data keys, keeping icon choices out of the JSX.
import {
  Bot,
  Brain,
  BriefcaseBusiness,
  Car,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Network,
  ServerCog,
} from 'lucide-react'

export const projectIcons = { parking: Car, federated: Network, agents: Bot, web: Code2 }
export const fallbackProjectIcon = Database

export const experienceIcons = { agents: Bot, fullstack: Code2 }
export const fallbackExperienceIcon = BriefcaseBusiness

export const categoryIcons = {
  'AI / ML': Brain,
  'Generative AI': Bot,
  Programming: Code2,
  Tools: ServerCog,
}

export const osIcons = { reasoning: Bot, model: Brain, product: Layers3 }

export const contactIcons = {
  mail: Mail,
  github: GitBranch,
  linkedin: BriefcaseBusiness,
  location: MapPin,
}
