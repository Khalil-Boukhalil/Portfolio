import { useEffect, useRef, useState } from 'react'

// One shared observer for every reveal element on the page.
let sharedObserver = null
const callbacks = new WeakMap()

function getObserver() {
  if (sharedObserver) return sharedObserver
  if (typeof IntersectionObserver === 'undefined') return null
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        callbacks.get(entry.target)?.()
        sharedObserver.unobserve(entry.target)
        callbacks.delete(entry.target)
      }
    },
    { threshold: 0, rootMargin: '0px 0px -12% 0px' },
  )
  return sharedObserver
}

/** Returns [ref, inView]; flips to true once and never reverts. */
export function useInView() {
  const ref = useRef(null)
  // Start visible when IntersectionObserver is unavailable (graceful fallback).
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const observer = getObserver()
    if (!observer) return
    callbacks.set(el, () => setInView(true))
    observer.observe(el)
    return () => {
      observer.unobserve(el)
      callbacks.delete(el)
    }
  }, [inView])

  return [ref, inView]
}
