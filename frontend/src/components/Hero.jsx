import { useEffect, useRef } from 'react'

const STATS = [
  { number: '12+', label: 'NFHS Certifications' },
  { number: '300+', label: 'Clinical Hours' },
  { number: '16', label: 'Years in Arizona' },
  { number: '100+', label: 'College Credits' },
]

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    requestAnimationFrame(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />

      <div
        className="hero-content"
        ref={contentRef}
        style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}
      >
        <p className="hero-eyebrow">Arizona Youth Sports</p>
        <h1>
          ELEVATE<br />
          <span>YOUR</span><br />
          GAME
        </h1>
        <p className="hero-tagline">
          Professional PE programs and sports events for Arizona&rsquo;s youth &mdash;
          built by a certified athletic director who&rsquo;s done it at every level.
        </p>
        <div className="hero-cta-group">
          <a href="#programs" className="btn btn-primary">View Programs</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero-stats-bar">
        <div className="container">
          {STATS.map(({ number, label }) => (
            <div className="hero-stat" key={label}>
              <span className="hero-stat-number">{number}</span>
              <span className="hero-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
