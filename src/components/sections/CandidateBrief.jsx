import { CheckCircle2, MapPin } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { profileSignals } from '../../data/presentation'

/** Recruiter-facing console: availability, specialization, and proof points. */
export function CandidateBrief() {
  return (
    <aside className="candidate-brief glass-card" aria-label="Candidate brief">
      <div className="candidate-brief__header">
        <span className="candidate-brief__title">Candidate Brief</span>
        <span className="candidate-brief__loc">
          <MapPin size={14} aria-hidden="true" />
          France
        </span>
      </div>

      <div className="candidate-brief__metrics">
        {profile.proofPoints.map((point) => (
          <div className="metric" key={point.label}>
            <span className="metric__value">{point.value}</span>
            <span className="metric__label">{point.label}</span>
          </div>
        ))}
      </div>

      <ul className="candidate-brief__signals list-reset">
        {profileSignals.map((signal) => (
          <li key={signal}>
            <CheckCircle2 size={16} aria-hidden="true" />
            {signal}
          </li>
        ))}
      </ul>
    </aside>
  )
}
