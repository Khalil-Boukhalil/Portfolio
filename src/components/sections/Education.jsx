import { GraduationCap } from 'lucide-react'
import { education } from '../../data/portfolio'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { Reveal } from '../primitives/Reveal'

export function Education() {
  return (
    <Section id="education" tone="base" labelledBy="education-title" className="education">
      <SectionIntro
        index="06"
        eyebrow="Education"
        title="A computer-science foundation with an AI specialization."
        titleId="education-title"
      />

      <div className="edu-grid">
        {education.map((item, i) => (
          <Reveal className="r-stretch" index={i} key={item.title}>
            <article className="edu-card card card--hover">
              <span className="icon-tile" aria-hidden="true">
                <GraduationCap size={20} />
              </span>
              <p className="edu-card__period">{item.period}</p>
              <h3 className="edu-card__title">{item.title}</h3>
              <p className="edu-card__inst">{item.institution}</p>
              <p className="edu-card__detail">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
