/** Semantic section wrapper with consistent rhythm + optional surface band. */
export function Section({
  id,
  tone = 'base',
  labelledBy,
  wide = false,
  className = '',
  children,
  ...rest
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={['section', `section--${tone}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className={['container', wide && 'container-wide'].filter(Boolean).join(' ')}>
        {children}
      </div>
    </section>
  )
}
