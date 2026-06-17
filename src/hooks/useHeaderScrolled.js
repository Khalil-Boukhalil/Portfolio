import { useEffect, useRef, useState } from 'react'

/** Returns [sentinelRef, scrolled]; attach the ref to a 1px element at page top. */
export function useHeaderScrolled() {
  const sentinelRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [sentinelRef, scrolled]
}
