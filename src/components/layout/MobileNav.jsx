import { useEffect, useRef } from 'react'
import { Send, X } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { navItems } from '../../data/navigation'
import { useScrollLock } from '../../hooks/useScrollLock'

const FOCUSABLE = 'a[href], button:not([disabled])'

export function MobileNav({ open, onClose, activeId }) {
  const sheetRef = useRef(null)
  const restoreFocusRef = useRef(null)

  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const sheet = sheetRef.current
    restoreFocusRef.current = document.activeElement
    sheet?.querySelector(FOCUSABLE)?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const items = Array.from(sheet?.querySelectorAll(FOCUSABLE) ?? [])
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      restoreFocusRef.current?.focus?.()
    }
  }, [open, onClose])

  return (
    <div className={['mobile-nav', open && 'is-open'].filter(Boolean).join(' ')} aria-hidden={!open}>
      <div className="mobile-nav__overlay" onClick={onClose} />
      <div
        className="mobile-nav__sheet"
        id="mobile-nav"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="mobile-nav__head">
          <span className="mobile-nav__title">Menu</span>
          <button
            type="button"
            className="mobile-nav__close"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className="mobile-nav__links list-reset">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'is-active' : undefined}
                  aria-current={activeId === item.id ? 'page' : undefined}
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--primary mobile-nav__cta" href={profile.links.email} onClick={onClose}>
          <Send size={18} aria-hidden="true" />
          Get in touch
        </a>
      </div>
    </div>
  )
}
