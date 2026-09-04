import { ArrowUpRight } from 'lucide-react'
import { profile, projects } from '../../data/portfolio'
import { Section } from '../primitives/Section'
import { SectionIntro } from '../primitives/SectionIntro'
import { ProjectFeature } from './ProjectFeature'

export function Projects() {
  return (
    <Section id="projects" tone="raised" labelledBy="projects-title" wide className="projects">
      <SectionIntro
        eyebrow="Featured AI projects"
        title="Systems that go beyond a single model call."
        titleId="projects-title"
        lede="The strongest project work covers retrieval, orchestration, backend services, interfaces and the review paths around AI output."
      />

      <div className="projects__list">
        {projects.map((project, index) => (
          <ProjectFeature key={project.id} project={project} index={index} />
        ))}
      </div>

      <a
        className="projects__github"
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore additional work on GitHub
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </Section>
  )
}
