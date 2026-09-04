import { ArrowRight } from 'lucide-react'

export function SystemFlow({ project }) {
  return (
    <div
      className={`system-flow system-flow--${project.id}`}
      role="img"
      aria-label={`${project.name} system flow: ${project.flow.join(', then ')}`}
    >
      <div className="system-flow__top" aria-hidden="true">
        <span>System flow</span>
        <span>{project.number} / AI project</span>
      </div>

      <ol className="system-flow__nodes list-reset" aria-hidden="true">
        {project.flow.map((step, index) => (
          <li key={step}>
            <span className="system-flow__node-index">{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
            {index < project.flow.length - 1 ? (
              <ArrowRight className="system-flow__arrow" size={17} />
            ) : null}
          </li>
        ))}
      </ol>

      <div className="system-flow__footer" aria-hidden="true">
        <span className="system-flow__pulse" />
        {project.id === 'docurag'
          ? 'Dense + sparse retrieval with cited responses'
          : 'Three-agent workflow with human review'}
      </div>
    </div>
  )
}
