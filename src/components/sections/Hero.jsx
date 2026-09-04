import { ArrowDown, BriefcaseBusiness, FileText, GitBranch } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { Button } from '../primitives/Button'
import { SystemPanel } from './SystemPanel'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="container container--wide hero__inner">
        <div className="hero__copy">
          <p className="hero__identity">
            <span className="status-dot" aria-hidden="true" />
            {profile.name} · {profile.title}
          </p>

          <h1 id="hero-title" className="hero__title">
            Engineering <span>AI applications</span> that solve real problems.
          </h1>

          <p className="hero__specialization">{profile.specialization}</p>
          <p className="hero__lede">{profile.summary}</p>

          <div className="hero__actions">
            <Button href="#projects" size="lg">
              View featured projects
            </Button>
            <Button
              href={profile.links.cv}
              variant="secondary"
              size="lg"
              icon={FileText}
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </Button>
          </div>

          <div className="hero__meta">
            <p>
              <strong>{profile.opportunity}</strong>
              <span>{profile.availability}</span>
            </p>
            <div className="hero__socials" aria-label="Professional profiles">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <GitBranch size={18} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <BriefcaseBusiness size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <SystemPanel />
      </div>

      <a className="hero__scroll" href="#profile" aria-label="Continue to professional profile">
        <span>Profile</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
