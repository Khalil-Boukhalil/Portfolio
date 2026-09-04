import { professionalExperience } from '../../data/portfolio'
import { Reveal } from '../primitives/Reveal'

export function Profile() {
  const progression = [...professionalExperience].reverse()

  return (
    <section className="profile-section" id="profile" aria-labelledby="profile-title">
      <div className="container container--wide profile-section__grid">
        <Reveal className="profile-section__heading">
          <p className="eyebrow">Professional profile</p>
          <h2 id="profile-title">
            Full-stack foundations. Agent workflows. AI platform engineering.
          </h2>
        </Reveal>

        <Reveal className="profile-section__body" index={1}>
          <p>
            My experience has progressed from building React and Node.js applications, to Python
            multi-agent workflows, to developing the foundation of an internal multi-model AI
            platform at CTCARCH.
          </p>

          <ol className="progression list-reset" aria-label="Professional progression">
            {progression.map((item, index) => (
              <li key={item.company}>
                <span className="progression__index">0{index + 1}</span>
                <span className="progression__line" aria-hidden="true" />
                <div>
                  <strong>{item.company}</strong>
                  <span>{item.position}</span>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
