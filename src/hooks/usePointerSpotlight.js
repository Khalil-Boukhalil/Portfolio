import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Drives the hero cursor spotlight by writing --mx/--my onto the target element,
 * coalesced through a single rAF. No React state → no re-render storms.
 * Disabled for touch/coarse pointers and reduced-motion users.
 */
export function usePointerSpotlight() {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let raf = 0
    let x = 0
    let y = 0

    const setRest = () => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${rect.width * 0.32}px`)
      el.style.setProperty('--my', `${rect.height * 0.42}px`)
    }

    const flush = () => {
      raf = 0
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
    }

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      x = event.clientX - rect.left
      y = event.clientY - rect.top
      el.classList.add('is-tracking')
      if (!raf) raf = requestAnimationFrame(flush)
    }

    const onLeave = () => {
      el.classList.remove('is-tracking')
      if (raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
      setRest()
    }

    setRest()
    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave, { passive: true })
    window.addEventListener('resize', setRest)

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', setRest)
      el.classList.remove('is-tracking')
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reduced])

  return ref
}
