import { operatingSystem, workflowSteps } from '../../data/presentation'
import { osIcons } from '../../data/iconMap'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { Reveal } from '../primitives/Reveal'

export function Capabilities() {
  return (
    <Section id="capabilities" tone="base" labelledBy="capabilities-title" className="capabilities">
      <SectionIntro
        index="02"
        eyebrow="Capabilities"
        title="A cross-functional AI product stack."
        titleId="capabilities-title"
        lede="The strongest signal is range: model understanding, agent workflows, software engineering, and product delivery."
      />

      <div className="cap-grid">
        {operatingSystem.map((item, i) => {
          const Icon = osIcons[item.key]
          return (
            <Reveal className="r-stretch" index={i} key={item.key}>
              <article className="card card--hover cap-card">
                <span className="icon-tile" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3 className="cap-card__title">{item.title}</h3>
                <p className="cap-card__text">{item.text}</p>
              </article>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="card workflow">
        <p className="eyebrow">Workflow</p>
        <h3 className="workflow__title">How I approach AI projects</h3>
        <ol className="workflow__steps list-reset">
          {workflowSteps.map((step, i) => (
            <li className="workflow__step" key={step}>
              <span className="workflow__num">{String(i + 1).padStart(2, '0')}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}
