import { skillCategories } from '../../data/portfolio'
import { categoryIcons } from '../../data/iconMap'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { Reveal } from '../primitives/Reveal'
import { TagList } from '../primitives/Tag'

const categorySlug = {
  'AI / ML': 'ai',
  'Generative AI': 'genai',
  Programming: 'prog',
  Tools: 'tools',
}

export function Skills() {
  return (
    <Section id="skills" tone="surface" labelledBy="skills-title" className="skills">
      <SectionIntro
        index="03"
        eyebrow="Skills"
        title="The tools behind the systems."
        titleId="skills-title"
        lede="Grouped by where each lives in an AI product — from models and generative AI down to the languages and infrastructure."
      />

      <div className="skills-grid">
        {skillCategories.map((category, i) => {
          const Icon = categoryIcons[category.title] ?? categoryIcons.Programming
          const slug = categorySlug[category.title] ?? 'prog'
          return (
            <Reveal className="r-stretch" index={i} key={category.title}>
              <article className={`card card--hover skill-card skill-card--${slug}`}>
                <div className="skill-card__head">
                  <span className="icon-tile" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h3 className="skill-card__title">{category.title}</h3>
                </div>
                <TagList items={category.items} label={`${category.title} skills`} />
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
