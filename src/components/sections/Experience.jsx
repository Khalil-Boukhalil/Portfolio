import { professionalExperience } from '../../data/portfolio'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { ExperienceItem } from './ExperienceItem'

export function Experience() {
  return (
    <Section id="experience" tone="surface" labelledBy="experience-title" className="experience">
      <SectionIntro
        index="05"
        eyebrow="Experience"
        title="Internships across AI agents and full-stack delivery."
        titleId="experience-title"
        lede="Role, company, and impact — structured for quick scanning."
      />

      <ol className="exp-timeline list-reset">
        {professionalExperience.map((experience, i) => (
          <ExperienceItem
            experience={experience}
            index={i}
            key={`${experience.company}-${experience.position}`}
          />
        ))}
      </ol>
    </Section>
  )
}
