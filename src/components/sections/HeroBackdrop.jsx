/** Decorative hero layers: a static dot grid + a cursor-tracked glow sprite. */
export function HeroBackdrop() {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-grid" />
      <div className="hero-glow" />
    </div>
  )
}
