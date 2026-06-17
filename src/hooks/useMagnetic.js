import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Subtle magnetic pull toward the cursor, clamped to ±max px.
 * The single delight indulgence — used only on the hero primary CTA.
 */
export function useMagnetic(max = 6) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let raf = 0
    let tx = 0
    let ty = 0

    const clamp = (value) => Math.max(-max, Math.min(max, value))

    const flush = () => {
      raf = 0
      el.style.transform = `translate(${tx}px, ${ty}px)`
    }

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      tx = clamp((event.clientX - (rect.left + rect.width / 2)) * 0.4)
      ty = clamp((event.clientY - (rect.top + rect.height / 2)) * 0.4)
      if (!raf) raf = requestAnimationFrame(flush)
    }

    const onLeave = () => {
      tx = 0
      ty = 0
      el.style.transform = ''
    }

    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave, { passive: true })

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = ''
    }
  }, [reduced, max])

  return ref
}
