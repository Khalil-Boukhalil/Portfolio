import { ArrowUpRight, Send } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { contactChannels } from '../../data/presentation'
import { contactIcons } from '../../data/iconMap'
import { Section } from '../primitives/Section'
import { Reveal } from '../primitives/Reveal'
import { Button } from '../primitives/Button'

export function Contact() {
  return (
    <Section id="contact" tone="surface" labelledBy="contact-title" className="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="contact__grid">
        <Reveal className="contact__copy">
          <p className="eyebrow">
            <span className="eyebrow__num">07</span>
            <span className="eyebrow__slash" aria-hidden="true">
              /
            </span>
            Contact
          </p>
          <h2 id="contact-title" className="contact__title">
            Available for a 4- to 6-month AI/ML end-of-studies internship.
          </h2>
          <p className="contact__lede measure">
            I am looking for opportunities involving machine learning, LLM applications, AI agents,
            automation, and production-ready AI solutions.
          </p>
          <Button
            href={profile.links.email}
            variant="primary"
            size="lg"
            icon={Send}
            className="contact__cta"
          >
            Get in touch
          </Button>
        </Reveal>

        <Reveal className="contact__card glass-card" index={1}>
          <ul className="contact__channels list-reset">
            {contactChannels.map((channel) => {
              const Icon = contactIcons[channel.icon]
              const external = channel.href?.startsWith('http')
              const inner = (
                <>
                  <span className="icon-tile contact__icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span className="contact__channel-text">
                    <span className="contact__channel-label">{channel.label}</span>
                    <span className="contact__channel-value">{channel.value}</span>
                  </span>
                  {external ? <ArrowUpRight size={16} aria-hidden="true" /> : null}
                </>
              )
              return (
                <li key={channel.label}>
                  {channel.href ? (
                    <a
                      className="contact__row"
                      href={channel.href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <span className="contact__row contact__row--static">{inner}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
