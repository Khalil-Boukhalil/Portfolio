import { ArrowUpRight } from 'lucide-react'

function isExternalLink(href) {
  return typeof href === 'string' && /^https?:\/\//.test(href)
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  external,
  className = '',
  children,
  ...rest
}) {
  const isExternal = external ?? isExternalLink(href)
  const classes = ['button', `button--${variant}`, `button--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {Icon ? <Icon size={18} strokeWidth={1.8} aria-hidden="true" /> : null}
      <span>{children}</span>
      {isExternal ? <ArrowUpRight className="button__arrow" size={15} aria-hidden="true" /> : null}
    </a>
  )
}
