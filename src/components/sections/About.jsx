import { focusTags } from '../../data/presentation'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { Reveal } from '../primitives/Reveal'
import { TagList } from '../primitives/Tag'

export function About() {
  return (
    <Section id="profile" tone="surface" labelledBy="profile-title" className="about">
      <div className="about__grid">
        <div className="about__intro">
          <SectionIntro
            index="01"
            eyebrow="Profile"
            title="An AI engineer focused on systems that actually work."
            titleId="profile-title"
          />
        </div>

        <Reveal className="about__panel">
          <p>
            I am an AI Engineering Master's student at CNAM Paris, specializing in Artificial
            Intelligence for Connected Industries, with a Bachelor's degree in Computer Science.
          </p>
          <p>
            My work connects machine learning, LLMs, AI agents, backend APIs, data stores,
            automation, and web interfaces. I care about making AI features reliable enough to use,
            not only impressive enough to demo.
          </p>
          <TagList items={focusTags} label="Current focus" className="about__tags" />
        </Reveal>
      </div>
    </Section>
  )
}
