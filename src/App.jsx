import {
  Bot,
  Brain,
  Briefcase,
  Car,
  Code,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Server,
} from 'lucide-react'
import heroVisual from './assets/ai-portfolio-visual.png'
import { experience, profile, projects, skills } from './data/portfolio'
import './App.css'

const projectIcons = {
  parking: Car,
  federated: Network,
  agents: Bot,
}

const socialLinks = [
  { label: 'GitHub', href: profile.links.github, icon: Code },
  { label: 'Email', href: profile.links.email, icon: Mail },
]

const focusItems = [
  {
    title: 'AI engineering',
    text: 'Building useful machine learning and deep learning features with clear software structure.',
    icon: Brain,
  },
  {
    title: 'LLM workflows',
    text: 'Designing LLM and AI agent tools that turn unstructured inputs into useful outputs.',
    icon: Bot,
  },
  {
    title: 'Applied systems',
    text: 'Connecting models to APIs, data stores, event streams, and web interfaces.',
    icon: Server,
  },
]

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}

function ProfileLinks({ light = false }) {
  return (
    <div className="profile-links" aria-label="Profile links">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          className={light ? 'button button-light' : 'button'}
          href={href}
          key={label}
          rel={label === 'Email' ? undefined : 'noreferrer'}
          target={label === 'Email' ? undefined : '_blank'}
        >
          <Icon size={18} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={`${profile.name} home`}>
          KBK
        </a>
        <nav className="site-nav" aria-label="Portfolio sections">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-visual" src={heroVisual} alt="" />
          <div className="hero-overlay" aria-hidden="true"></div>
          <div className="hero-content">
            <p className="eyebrow">Portfolio</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="hero-copy">{profile.intro}</p>
            <p className="hero-copy">{profile.seeking}</p>
            <ProfileLinks />
            <div className="hero-meta" aria-label="Profile details">
              <span>
                <GraduationCap size={18} aria-hidden="true" />
                {profile.education}
              </span>
              <span>
                <MapPin size={18} aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>
        </section>

        <section className="section section-about" id="about">
          <div className="container about-grid">
            <SectionHeading
              eyebrow="About"
              title="Applied AI engineer in training"
              text="I am pursuing a Master in Artificial Intelligence for Connected Industries at CNAM Paris and hold a Bachelor in Computer Science, with a practical focus on useful AI systems."
            />
            <div className="about-copy">
              <p>
                My work combines AI fundamentals with implementation skills:
                model development, backend APIs, databases, event-driven tools,
                and user-facing applications. I enjoy turning technical ideas
                into working prototypes that can be tested, improved, and
                deployed.
              </p>
              <p>
                {profile.seeking}
              </p>
            </div>
          </div>
        </section>

        <section className="section section-focus" aria-label="Focus areas">
          <div className="container focus-grid">
            {focusItems.map(({ title, text, icon: Icon }) => (
              <article className="focus-item" key={title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="Skills"
              title="Technical toolkit"
              text="A focused stack for AI engineering, data-driven applications, and connected software systems."
            />
            <div className="skills-grid">
              {skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  <Code size={16} aria-hidden="true" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-projects" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="Projects"
              title="Selected AI and software projects"
              text="Project work across machine learning, LLM agents, connected systems, and applied web development."
            />
            <div className="project-grid">
              {projects.map(({ title, icon, description, focus }) => {
                const Icon = projectIcons[icon] ?? Database

                return (
                  <article className="project-card" key={title}>
                    <span className="project-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="project-tags">
                      {focus.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionHeading
              eyebrow="Experience / Education"
              title="Current background"
              text="A transparent summary of education and project-based AI engineering experience."
            />
            <div className="timeline">
              {experience.map(
                ({ label, title, place, institution, period, detail }) => (
                  <article
                    className={`timeline-item ${
                      label === 'Education' ? 'timeline-item-education' : ''
                    }`}
                    key={`${label}-${title}`}
                  >
                    <div className="timeline-icon">
                      {label === 'Education' ? (
                        <GraduationCap size={22} aria-hidden="true" />
                      ) : (
                        <Briefcase size={22} aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <p className="timeline-label">{label}</p>
                      <h3>{title}</h3>
                      {institution || period ? (
                        <div className="timeline-meta">
                          {institution ? <span>{institution}</span> : null}
                          {period ? (
                            <span className="timeline-period">{period}</span>
                          ) : null}
                        </div>
                      ) : (
                        <p className="timeline-place">{place}</p>
                      )}
                      <p className="timeline-detail">{detail}</p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let's build practical AI systems.</h2>
            </div>
            <div className="contact-actions">
              <p>
                Contact me by email or GitHub to discuss AI projects or
                technical collaboration.
              </p>
              <div className="contact-details" aria-label="Contact details">
                <a href={profile.links.email}>
                  <Mail size={18} aria-hidden="true" />
                  {profile.contact.email}
                </a>
                <a
                  href={profile.links.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Code size={18} aria-hidden="true" />
                  {profile.contact.github}
                </a>
              </div>
              <ProfileLinks light />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <span>{profile.name}</span>
        </div>
      </footer>
    </>
  )
}

export default App
