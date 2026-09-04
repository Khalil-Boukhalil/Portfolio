import { professionalExperience } from '../../data/portfolio'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { ExperienceItem } from './ExperienceItem'

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title" className="experience">
      <SectionIntro
        eyebrow="Professional experience"
        title="A clear progression toward applied AI engineering."
        titleId="experience-title"
        lede="Current work centres on a multi-model internal AI platform, backed by earlier experience in agent workflows and full-stack application delivery."
      />

      <ol className="experience__list list-reset">
        {professionalExperience.map((item, index) => (
          <ExperienceItem
            key={`${item.company}-${item.position}`}
            experience={item}
            index={index}
          />
        ))}
      </ol>
    </Section>
  )
}
