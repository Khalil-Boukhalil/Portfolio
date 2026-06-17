/** Layered glass surface (fill + hairline + lit top edge) with a solid fallback. */
export function GlassCard({ as: Component = 'div', className = '', children, ...rest }) {
  return (
    <Component className={['glass-card', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Component>
  )
}
