import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../primitives/Reveal'
import { TagList } from '../primitives/Tag'
import { SystemFlow } from './SystemFlow'

export function ProjectFeature({ project, index }) {
  return (
    <Reveal
      as="article"
      id={project.id}
      index={index}
      className={`project-feature project-feature--${project.id}`}
    >
      <div className="project-feature__copy">
        <div className="project-feature__label">
          <span>{project.number}</span>
          <span>Selected AI project</span>
        </div>

        <p className="project-feature__type">{project.type}</p>
        <h3>{project.name}</h3>
        <p className="project-feature__summary">{project.summary}</p>

        <dl className="project-feature__details">
          {project.details.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.text}</dd>
            </div>
          ))}
        </dl>

        <TagList
          className="project-feature__tags"
          items={project.technologies}
          label={`${project.name} technologies`}
        />

        {project.link ? (
          <a
            className="project-feature__link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View repository
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : null}
      </div>

      <SystemFlow project={project} />
    </Reveal>
  )
}
