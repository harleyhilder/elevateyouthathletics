import { useReveal } from '../hooks/useReveal'

const CARDS = [
  {
    title: 'Coaching Credentials',
    desc: '12 NFHS certifications, Level 1 & 2 coaching, and a BS in Management — every session is led by someone who took the time to be fully qualified.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 4l4.5 8.5 9.5 1.5-7 6.5 1.5 9.5L22 25l-8.5 5 1.5-9.5-7-6.5 9.5-1.5L22 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Safety First',
    desc: 'CPR/First Aid certified. Concussion in Sports trained. Injury & Illness prevention. Your students are in hands that know what to do in any situation.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6l14 6v10c0 8-6 14-14 16C14 36 8 30 8 22V12l14-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 22l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Real Experience',
    desc: 'Athletic director. Football coach. 100+ college credits in sports medicine and 300+ clinical hours. This isn\'t a side hustle — it\'s a career built around youth athletics.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 36c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 20l4-4m0 0l4 4m-4-4v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Arizona Focused',
    desc: '16 years in Arizona means deep knowledge of local schools, communities, and what Arizona students need from their physical education programs.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M22 6v4M22 30v4M6 20h4M30 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 20l10 16H12l10-16z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function WhyElevate() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="why" className="why-section">
      <div className="container">
        <div className="why-header reveal" ref={headerRef}>
          <span className="section-label">The Difference</span>
          <h2 className="section-title">WHY ELEVATE YOUTH <span>ATHLETICS</span></h2>
        </div>

        <div className="why-grid reveal reveal-stagger" ref={gridRef}>
          {CARDS.map(({ title, desc, icon }) => (
            <div className="why-card" key={title}>
              <div className="why-card-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
