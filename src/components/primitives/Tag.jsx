export function TagList({ items, label, className = '' }) {
  return (
    <ul className={['tag-list', className].filter(Boolean).join(' ')} aria-label={label}>
      {items.map((item) => (
        <li className="tag" key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
