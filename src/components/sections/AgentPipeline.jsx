import { ShieldCheck } from 'lucide-react'
import { agentPipeline } from '../../data/presentation'

/** Honest system diagram of the featured multi-agent memo workflow. */
export function AgentPipeline() {
  return (
    <div
      className="pipeline"
      role="img"
      aria-label={`Agent workflow: ${agentPipeline.join(', then ')} — gated by human review.`}
    >
      <ol className="pipeline__steps list-reset" aria-hidden="true">
        {agentPipeline.map((stage, i) => (
          <li className="pipeline__node" style={{ '--i': i }} key={stage}>
            <span className="pipeline__dot" />
            <span className="pipeline__label">{stage}</span>
          </li>
        ))}
      </ol>
      <span className="pipeline__gate" aria-hidden="true">
        <ShieldCheck size={14} />
        Human review
      </span>
    </div>
  )
}
