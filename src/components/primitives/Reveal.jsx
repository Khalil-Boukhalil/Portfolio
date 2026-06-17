import { useInView } from '../../hooks/useInView'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/** Wraps children in a one-shot scroll reveal; always visible under reduced-motion. */
export function Reveal({ as: Component = 'div', index = 0, className = '', style, children, ...rest }) {
  const reduced = useReducedMotion()
  const [ref, inView] = useInView()
  const visible = reduced || inView

  return (
    <Component
      ref={ref}
      className={['reveal', visible && 'is-visible', className].filter(Boolean).join(' ')}
      style={index ? { '--i': index, ...style } : style}
      {...rest}
    >
      {children}
    </Component>
  )
}
