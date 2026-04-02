import { useReveal } from '../hooks/useReveal'

function SchoolIcon() {
  return (
    <svg className="service-card-icon" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 4L4 16v4h44v-4L26 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="8" y="24" width="8" height="16" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="22" y="24" width="8" height="16" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="36" y="24" width="8" height="16" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="4" y1="40" x2="48" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg className="service-card-icon" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6h16v20a8 8 0 01-16 0V6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M18 12H8v4a10 10 0 008 9.8M34 12h10v4a10 10 0 01-8 9.8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="26" y1="34" x2="26" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="18" y="42" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  )
}

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header reveal" ref={ref}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">TWO WAYS TO <span>ELEVATE</span></h2>
          <p style={{ color: 'var(--color-gray-light)', maxWidth: 520, margin: '0 auto', fontSize: 16 }}>
            Whether your school needs an ongoing PE program or a one-day high-energy event,
            Elevate Youth Athletics has you covered.
          </p>
        </div>

        <div className="services-grid reveal-stagger">
          <div className="service-card">
            <SchoolIcon />
            <span className="service-card-tag">Ongoing Program</span>
            <h3>School Contracts</h3>
            <p>
              A certified athletic director runs your school&rsquo;s physical education curriculum
              directly on-site. Structured, safe, and built to develop real athleticism and
              healthy habits in every student.
            </p>
            <a href="#programs" className="service-card-link">
              Learn More <span>→</span>
            </a>
          </div>

          <div className="service-card">
            <TrophyIcon />
            <span className="service-card-tag">One-Day Event</span>
            <h3>Field Days &amp; Sport Events</h3>
            <p>
              High-energy field days and single-day sport experiences that students remember
              for years. Fully organized, coach-led, and customizable for any age group or
              school size.
            </p>
            <a href="#programs" className="service-card-link">
              Learn More <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
