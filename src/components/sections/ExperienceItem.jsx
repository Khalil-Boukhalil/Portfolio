import { MapPin } from 'lucide-react'
import { experienceIcons, fallbackExperienceIcon } from '../../data/iconMap'
import { Reveal } from '../primitives/Reveal'
import { TagList } from '../primitives/Tag'

export function ExperienceItem({ experience, index }) {
  const Icon = experienceIcons[experience.icon] ?? fallbackExperienceIcon

  return (
    <Reveal as="li" index={index} className="exp-item">
      <span className="exp-item__node" aria-hidden="true" />
      <article className="exp-card card card--hover">
        <div className="exp-card__head">
          <span className="exp-card__logo" aria-hidden="true">
            {experience.initials}
          </span>
          <div className="exp-card__headings">
            <h3 className="exp-card__role">{experience.position}</h3>
            <p className="exp-card__company">
              <Icon size={15} aria-hidden="true" />
              {experience.company}
            </p>
          </div>
          <span className="exp-card__duration">{experience.duration}</span>
        </div>

        <p className="exp-card__loc">
          <MapPin size={15} aria-hidden="true" />
          {experience.location}
        </p>
        <p className="exp-card__summary measure">{experience.summary}</p>

        <ul className="exp-card__list list-reset">
          {experience.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <TagList
          items={experience.technologies}
          label={`${experience.company} technologies`}
          className="exp-card__tags"
        />
      </article>
    </Reveal>
  )
}
