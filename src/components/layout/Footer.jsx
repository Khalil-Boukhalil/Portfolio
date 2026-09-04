import { ArrowUp, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'

const footerLinks = [
  { label: 'GitHub', href: profile.links.github, icon: GitBranch },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: BriefcaseBusiness },
  { label: 'Email', href: profile.links.email, icon: Mail },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container container--wide footer__inner">
        <div className="footer__identity">
          <a href="#home">Khalil Bou Khalil</a>
          <span>Junior AI Engineer</span>
        </div>

        <div className="footer__links" aria-label="Social links">
          {footerLinks.map(({ label, href, icon: Icon }) => {
            const external = href.startsWith('http')
            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            )
          })}
        </div>

        <a className="footer__top" href="#home">
          Back to top
          <ArrowUp size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="container container--wide footer__meta">
        <span>© 2026 Khalil Bou Khalil</span>
        <span>Available for full-time AI Engineer roles from October 2026</span>
      </div>
    </footer>
  )
}
