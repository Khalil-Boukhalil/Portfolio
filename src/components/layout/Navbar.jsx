import { useCallback, useState } from 'react'
import { FileText, Menu } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { navItems, sectionIds } from '../../data/navigation'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { MobileNav } from './MobileNav'

export function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header className={['navbar', scrolled && 'is-scrolled'].filter(Boolean).join(' ')}>
      <div className="container container--wide navbar__inner">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`}>
          <span className="brand__mark" aria-hidden="true">
            KBK
          </span>
          <span className="brand__copy">
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links list-reset">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'is-active' : undefined}
                  aria-current={activeId === item.id ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a className="nav-cv" href={profile.links.cv} target="_blank" rel="noreferrer">
            <FileText size={16} aria-hidden="true" />
            View CV
          </a>
          <button
            type="button"
            className="navbar__burger"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileNav open={menuOpen} onClose={closeMenu} activeId={activeId} />
    </header>
  )
}
