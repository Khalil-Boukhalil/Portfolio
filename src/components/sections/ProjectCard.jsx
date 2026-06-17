import { ArrowUpRight } from 'lucide-react'
import { projectIcons, fallbackProjectIcon } from '../../data/iconMap'
import { usePointerSpotlight } from '../../hooks/usePointerSpotlight'
import { Reveal } from '../primitives/Reveal'
import { TagList } from '../primitives/Tag'
import { AgentPipeline } from './AgentPipeline'

function repoPath(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

export function ProjectCard({ project, num, index = 0, featured = false }) {
  const Icon = projectIcons[project.icon] ?? fallbackProjectIcon
  const spotlightRef = usePointerSpotlight()

  return (
    <Reveal className="r-stretch" index={index}>
      <article
        ref={spotlightRef}
        className={['proj-card', 'card', 'card--hover', featured && 'proj-card--featured']
          .filter(Boolean)
          .join(' ')}
      >
        <div className="proj-card__top">
          <span className="proj-card__index" aria-hidden="true">
            {num}
          </span>
          <span className="proj-card__badge">
            <span className="icon-tile proj-card__icon" aria-hidden="true">
              <Icon size={18} />
            </span>
            <span className="proj-card__type">{project.type}</span>
          </span>
        </div>

        <div className="proj-card__body">
          <h3 className="proj-card__title">{project.title}</h3>
          <p className="proj-card__desc measure">{project.description}</p>

          {featured ? <AgentPipeline /> : null}

          <div className="proj-card__notes">
            <h4 className="proj-card__notes-label">Engineering notes</h4>
            <ul className="proj-card__list list-reset">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <TagList
            items={project.technologies}
            label={`${project.title} technologies`}
            className="proj-card__tags"
          />
        </div>

        <a
          className="proj-card__cta"
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View source of ${project.title} on GitHub`}
        >
          <span className="proj-card__cta-label">View source</span>
          <span className="proj-card__repo">{repoPath(project.links.github)}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </article>
    </Reveal>
  )
}
