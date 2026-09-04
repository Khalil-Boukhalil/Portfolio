import { useEffect, useRef } from 'react'
import { FileText, Mail, X } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { profile } from '../../data/portfolio'
import { useScrollLock } from '../../hooks/useScrollLock'

const focusableSelector = 'a[href], button:not([disabled])'

export function MobileNav({ open, onClose, activeId }) {
  const sheetRef = useRef(null)
  const restoreFocusRef = useRef(null)

  useScrollLock(open)

  useEffect(() => {
    if (!open) return undefined

    restoreFocusRef.current = document.activeElement
    const sheet = sheetRef.current
    sheet?.querySelector(focusableSelector)?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return
      const focusable = Array.from(sheet?.querySelectorAll(focusableSelector) ?? [])
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      restoreFocusRef.current?.focus?.()
    }
  }, [open, onClose])

  return (
    <div
      className={['mobile-nav', open && 'is-open'].filter(Boolean).join(' ')}
      aria-hidden={!open}
      inert={!open}
    >
      <div className="mobile-nav__backdrop" onClick={onClose} aria-hidden="true" />
      <div
        className="mobile-nav__sheet"
        id="mobile-nav"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-nav__header">
          <span>Navigate</span>
          <button type="button" aria-label="Close navigation menu" onClick={onClose}>
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="mobile-nav__links list-reset">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'is-active' : undefined}
                  aria-current={activeId === item.id ? 'location' : undefined}
                  onClick={onClose}
                >
                  <span aria-hidden="true">0{index + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-nav__actions">
          <a href={profile.links.cv} target="_blank" rel="noreferrer" onClick={onClose}>
            <FileText size={18} aria-hidden="true" />
            View CV
          </a>
          <a href={profile.links.email} onClick={onClose}>
            <Mail size={18} aria-hidden="true" />
            Email Khalil
          </a>
        </div>
      </div>
    </div>
  )
}
