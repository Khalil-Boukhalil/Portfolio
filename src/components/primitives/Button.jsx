import { ArrowUpRight } from 'lucide-react'
import { useMagnetic } from '../../hooks/useMagnetic'

function isExternalLink(href) {
  return typeof href === 'string' && href.startsWith('http')
}

/** Anchor styled as a button. Auto external-link affordance; optional magnetic pull. */
export function Button({
  href,
  variant = 'primary',
  size = 'md',
  magnetic = false,
  icon: Icon,
  external,
  className = '',
  children,
  ...rest
}) {
  const isExternal = external ?? isExternalLink(href)
  const magneticRef = useMagnetic()

  const classes = [
    'btn',
    `btn--${variant}`,
    size === 'sm' && 'btn--sm',
    size === 'lg' && 'btn--lg',
    magnetic && 'btn--magnetic',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      ref={magnetic ? magneticRef : undefined}
      href={href}
      className={classes}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
      <span className="btn__label">{children}</span>
      {isExternal ? <ArrowUpRight size={16} aria-hidden="true" className="btn__ext" /> : null}
    </a>
  )
}
