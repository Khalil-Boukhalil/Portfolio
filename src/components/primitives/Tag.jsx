export function Tag({ children }) {
  return <li className="tag">{children}</li>
}

/** Wrapping rail of non-interactive mono chips (skills / projects / experience). */
export function TagList({ items, label, className = '' }) {
  return (
    <ul className={['tag-list', className].filter(Boolean).join(' ')} aria-label={label}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  )
}
