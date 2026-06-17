import { projects } from '../../data/portfolio'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { ProjectCard } from './ProjectCard'

const pad = (n) => String(n).padStart(2, '0')

export function Projects() {
  const featured = projects.find((project) => project.icon === 'agents') ?? projects[0]
  const rest = projects.filter((project) => project !== featured)

  return (
    <Section id="projects" tone="base" labelledBy="projects-title" className="projects">
      <SectionIntro
        index="04"
        eyebrow="Selected work"
        title="Projects built like engineering work, not homework."
        titleId="projects-title"
        lede="Each project is framed around the system it solves, the stack it runs on, and the source you can read."
      />

      <div className="projects-stack">
        <ProjectCard
          project={featured}
          num={pad(projects.indexOf(featured) + 1)}
          index={0}
          featured
        />
        <div className="projects-grid">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              num={pad(projects.indexOf(project) + 1)}
              index={i}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
