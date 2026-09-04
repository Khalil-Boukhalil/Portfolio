import { BriefcaseBusiness, FileText, GitBranch, Mail, Phone } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { Button } from '../primitives/Button'
import { Reveal } from '../primitives/Reveal'

const contactLinks = [
  {
    label: 'Email',
    value: profile.contact.email,
    href: profile.links.email,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.contact.phone,
    href: profile.links.phone,
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: profile.contact.linkedin,
    href: profile.links.linkedin,
    icon: BriefcaseBusiness,
  },
  {
    label: 'GitHub',
    value: profile.contact.github,
    href: profile.links.github,
    icon: GitBranch,
  },
]

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container container--wide">
        <Reveal className="contact__panel">
          <div className="contact__copy">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Let&apos;s discuss an AI engineering opportunity.</h2>
            <p>
              Seeking a full-time AI Engineer position in France, available from October 2026.
            </p>
            <div className="contact__actions">
              <Button href={profile.links.email} size="lg" icon={Mail}>
                Email Khalil
              </Button>
              <Button
                href={profile.links.cv}
                variant="secondary"
                size="lg"
                icon={FileText}
                target="_blank"
                rel="noreferrer"
              >
                View CV
              </Button>
            </div>
          </div>

          <ul className="contact__links list-reset">
            {contactLinks.map(({ label, value, href, icon: Icon }) => {
              const external = href.startsWith('http')
              return (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="contact__icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <span>
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
