import { ArrowDown, Check, Layers3 } from 'lucide-react'
import { engineeringLayers } from '../../data/portfolio'

export function SystemPanel() {
  return (
    <aside className="system-panel" aria-label="Current AI application engineering scope">
      <div className="system-panel__header">
        <span className="system-panel__icon" aria-hidden="true">
          <Layers3 size={19} />
        </span>
        <div>
          <p>Current engineering scope</p>
          <span>CTCARCH · AI Engineer Intern</span>
        </div>
        <span className="current-badge">
          <span aria-hidden="true" /> Current
        </span>
      </div>

      <ol className="system-panel__layers list-reset">
        {engineeringLayers.map((layer, index) => (
          <li key={layer.label}>
            <div className="system-panel__number">0{index + 1}</div>
            <div className="system-panel__text">
              <strong>{layer.label}</strong>
              <span>{layer.detail}</span>
            </div>
            {index < engineeringLayers.length - 1 ? (
              <ArrowDown className="system-panel__arrow" size={15} aria-hidden="true" />
            ) : (
              <Check className="system-panel__check" size={16} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>

      <p className="system-panel__footer">Python · FastAPI · Next.js · PostgreSQL · Docker</p>
    </aside>
  )
}
