import { Reveal } from './Reveal'

/** Numbered mono eyebrow + section heading + optional lede. */
export function SectionIntro({ index, eyebrow, title, titleId, lede, align = 'start' }) {
  return (
    <Reveal
      className={['section-intro', align === 'center' && 'section-intro--center']
        .filter(Boolean)
        .join(' ')}
    >
      <p className="eyebrow">
        <span className="eyebrow__num">{index}</span>
        <span className="eyebrow__slash" aria-hidden="true">
          /
        </span>
        {eyebrow}
      </p>
      <h2 id={titleId} className="section-intro__title">
        {title}
      </h2>
      {lede ? <p className="section-intro__lede measure">{lede}</p> : null}
    </Reveal>
  )
}
