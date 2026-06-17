import { ArrowUp } from 'lucide-react'
import { contactIcons } from '../../data/iconMap'
import { profile } from '../../data/portfolio'
import { navItems } from '../../data/navigation'

const socials = [
  { key: 'github', label: 'GitHub', href: profile.links.github },
  { key: 'linkedin', label: 'LinkedIn', href: profile.links.linkedin },
  { key: 'mail', label: 'Email', href: profile.links.email },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container container-wide footer__inner">
        <a className="brand footer__brand" href="#home" aria-label={`${profile.name} — home`}>
          <span className="brand__mark" aria-hidden="true">
            KB
          </span>
          <span className="brand__copy">
            <strong>{profile.name}</strong>
            <span>AI Engineering Portfolio</span>
          </span>
        </a>

        <nav className="footer__nav" aria-label="Footer">
          <ul className="list-reset">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__social">
          {socials.map(({ key, label, href }) => {
            const Icon = contactIcons[key]
            const external = href.startsWith('http')
            return (
              <a
                key={key}
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>

      <div className="container container-wide footer__meta">
        <span>© 2026 {profile.name} · Based in France · Available for internships</span>
        <a className="footer__top" href="#home">
          Back to top
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
