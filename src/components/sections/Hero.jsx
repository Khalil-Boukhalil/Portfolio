import { Send } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { usePointerSpotlight } from '../../hooks/usePointerSpotlight'
import { Button } from '../primitives/Button'
import { HeroBackdrop } from './HeroBackdrop'
import { CandidateBrief } from './CandidateBrief'

export function Hero() {
  const spotlightRef = usePointerSpotlight()

  return (
    <section className="hero" id="home" ref={spotlightRef} aria-label="Introduction">
      <HeroBackdrop />
      <div className="container container-wide hero__inner">
        <div className="hero__copy">
          <p className="status-pill hero__status">
            <span className="pulse-dot" aria-hidden="true" />
            Available — seeking a 4- to 6-month AI/ML internship
          </p>
          <p className="hero__eyebrow">{profile.role}</p>
          <h1 className="hero__title">
            Khalil <span className="hero__title-accent">Bou Khalil</span>
          </h1>
          <p className="hero__lede measure">
            I build AI systems that ship — LLM applications, multi-agent workflows, and
            machine-learning pipelines wired into real APIs, data, and interfaces.
          </p>
          <div className="hero__actions">
            <Button href={profile.links.email} variant="primary" size="lg" magnetic icon={Send}>
              Get in touch
            </Button>
            <Button href={profile.links.github} variant="secondary" size="lg">
              View GitHub
            </Button>
            <Button href={profile.links.linkedin} variant="secondary" size="lg">
              LinkedIn
            </Button>
          </div>
        </div>

        <CandidateBrief />
      </div>
    </section>
  )
}
