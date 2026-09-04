import { MapPin } from 'lucide-react'
import { Reveal } from '../primitives/Reveal'
import { TagList } from '../primitives/Tag'

export function ExperienceItem({ experience, index }) {
  return (
    <Reveal as="li" index={index} className="experience-item">
      <article
        id={experience.current ? 'ctcarch' : undefined}
        className={['experience-card', experience.current && 'is-current'].filter(Boolean).join(' ')}
      >
        <div className="experience-card__rail" aria-hidden="true">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <i />
        </div>

        <div className="experience-card__content">
          <div className="experience-card__header">
            <div>
              <p className="experience-card__company">
                {experience.company}
                {experience.current ? <span>Current</span> : null}
              </p>
              <h3>{experience.position}</h3>
            </div>
            <time>{experience.duration}</time>
          </div>

          <p className="experience-card__location">
            <MapPin size={15} aria-hidden="true" />
            {experience.location}
          </p>

          <ul className="experience-card__list">
            {experience.description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <TagList
            items={experience.technologies}
            label={`${experience.company} technologies`}
            className="experience-card__tags"
          />
        </div>
      </article>
    </Reveal>
  )
}
