import { GraduationCap, Languages as LanguagesIcon, MapPin } from 'lucide-react'
import { education, languages } from '../../data/portfolio'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { Reveal } from '../primitives/Reveal'

export function Education() {
  return (
    <Section id="education" labelledBy="education-title" className="education">
      <SectionIntro
        eyebrow="Education & languages"
        title="AI specialization built on computer science."
        titleId="education-title"
      />

      <div className="education__grid">
        <div className="education__degrees">
          {education.map((item, index) => (
            <Reveal as="article" className="degree" index={index} key={item.institution}>
              <div className="degree__icon" aria-hidden="true">
                <GraduationCap size={21} />
              </div>
              <div className="degree__content">
                <div className="degree__topline">
                  <p>{item.institution}</p>
                  <time>{item.period}</time>
                </div>
                <h3>{item.qualification}</h3>
                <span className="degree__location">
                  <MapPin size={14} aria-hidden="true" />
                  {item.location}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="languages-panel" index={2}>
          <div className="languages-panel__heading">
            <LanguagesIcon size={20} aria-hidden="true" />
            <h3>Languages</h3>
          </div>
          <dl>
            {languages.map((item) => (
              <div key={item.language}>
                <dt>{item.language}</dt>
                <dd>{item.level}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
