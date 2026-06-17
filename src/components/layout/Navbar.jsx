import { useState } from 'react'
import { Menu } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { navItems, sectionIds } from '../../data/navigation'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { MobileNav } from './MobileNav'

export function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  return (
    <header className={['navbar', scrolled && 'is-scrolled'].filter(Boolean).join(' ')}>
      <div className="navbar__inner container container-wide">
        <a className="brand" href="#home" aria-label={`${profile.name} — home`}>
          <span className="brand__mark" aria-hidden="true">
            KB
          </span>
          <span className="brand__copy">
            <strong>{profile.name}</strong>
            <span>AI Engineering Portfolio</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__links list-reset">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'is-active' : undefined}
                  aria-current={activeId === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a className="btn btn--primary btn--sm navbar__cta" href={profile.links.email}>
            <span className="pulse-dot" aria-hidden="true" />
            Get in touch
          </a>
          <button
            type="button"
            className="navbar__burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />
    </header>
  )
}
