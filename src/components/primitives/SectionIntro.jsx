import { Reveal } from './Reveal'

export function SectionIntro({ eyebrow, title, titleId, lede }) {
  return (
    <Reveal className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId} className="section-intro__title">
        {title}
      </h2>
      {lede ? <p className="section-intro__lede">{lede}</p> : null}
    </Reveal>
  )
}
