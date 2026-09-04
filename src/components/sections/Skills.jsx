import { skillCategories } from '../../data/portfolio'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { Reveal } from '../primitives/Reveal'
import { TagList } from '../primitives/Tag'

export function Skills() {
  return (
    <Section id="skills" tone="raised" labelledBy="skills-title" className="skills">
      <div className="skills__layout">
        <SectionIntro
          eyebrow="Technical skills"
          title="The stack behind the AI application lifecycle."
          titleId="skills-title"
          lede="Skills are grouped by engineering context, without arbitrary proficiency scores."
        />

        <div className="skills__groups">
          {skillCategories.map((category, index) => (
            <Reveal className="skill-group" index={index} key={category.title}>
              <div className="skill-group__heading">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{category.title}</h3>
              </div>
              <TagList items={category.items} label={`${category.title} skills`} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
