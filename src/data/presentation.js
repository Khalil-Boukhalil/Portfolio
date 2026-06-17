// Derived presentation content (relocated out of JSX).
// All strings are reused verbatim from the original portfolio — no new facts.
import { profile } from './portfolio'

export const profileSignals = [
  'AI Engineering Master at CNAM Paris',
  'LLM, agent, ML, and automation projects',
  'Full-stack implementation experience',
  'Available for AI internship opportunities',
]

export const focusTags = [
  'LLM applications',
  'AI agents',
  'RAG-ready systems',
  'Automation workflows',
  'Full-stack AI products',
]

// Capabilities — the cross-functional "operating system" (method/range, not the tech list).
export const operatingSystem = [
  {
    key: 'reasoning',
    title: 'Reasoning layer',
    text: 'Prompt design, tool calling, agent roles, validation loops, and controlled LLM outputs.',
  },
  {
    key: 'model',
    title: 'Model layer',
    text: 'Machine learning, deep learning concepts, federated learning workflows, and evaluation.',
  },
  {
    key: 'product',
    title: 'Product layer',
    text: 'React interfaces, backend APIs, databases, automation flows, and deployable prototypes.',
  },
]

export const workflowSteps = [
  'Frame the use case and data flow',
  'Build the model or agent workflow',
  'Integrate APIs, storage, and interface',
  'Evaluate behavior and improve reliability',
]

// Stages of the featured Multi-Agent Memo Generator (drawn from the project's own description).
export const agentPipeline = ['Analysis', 'Drafting', 'Validation', 'Approval']

export const contactChannels = [
  { label: 'Email', value: profile.contact.email, href: profile.links.email, icon: 'mail' },
  { label: 'GitHub', value: profile.contact.github, href: profile.links.github, icon: 'github' },
  {
    label: 'LinkedIn',
    value: profile.contact.linkedin,
    href: profile.links.linkedin,
    icon: 'linkedin',
  },
  { label: 'Location', value: profile.contact.location, href: null, icon: 'location' },
]
