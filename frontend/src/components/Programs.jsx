import { useReveal } from '../hooks/useReveal'

function SchoolProgramVisual() {
  return (
    <div className="program-visual-card">
      <svg className="program-visual-icon" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 8L8 24v6h56v-6L36 8z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <rect x="12" y="34" width="12" height="22" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <rect x="30" y="34" width="12" height="22" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <rect x="48" y="34" width="12" height="22" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <line x1="6" y1="56" x2="66" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <div className="program-visual-title">School Contracts</div>
      <div className="program-visual-sub">Ongoing PE Programs</div>
    </div>
  )
}

function EventProgramVisual() {
  return (
    <div className="program-visual-card">
      <svg className="program-visual-icon" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 10l6 12 14 2-10 10 2.5 14L36 42l-12.5 6L26 34 16 24l14-2 6-12z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      </svg>
      <div className="program-visual-title">Field Days</div>
      <div className="program-visual-sub">One-Day Sport Events</div>
    </div>
  )
}

export default function Programs() {
  const headerRef = useReveal()
  const block1Ref = useReveal()
  const block2Ref = useReveal()

  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="programs-header reveal" ref={headerRef}>
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">PROGRAMS DESIGNED<br />TO <span>PERFORM</span></h2>
        </div>

        {/* Program 01 */}
        <div className="program-block reveal" ref={block1Ref}>
          <div className="program-number">01</div>
          <div className="program-content">
            <span className="program-badge">School Contracts</span>
            <h3>Ongoing PE Programs</h3>
            <p>
              Elevate works directly with your school to run physical education curriculum
              on-site, delivered by a credentialed athletic director with hands-on coaching
              experience at every level. Consistent, safe, and built for real results.
            </p>
            <ul className="program-features">
              {[
                'Curriculum-aligned physical education',
                'Flexible scheduling around your school calendar',
                'Certified, background-checked instructor',
                'Age-appropriate programming for all grades',
                'Progress tracking and communication with staff',
              ].map(f => (
                <li className="program-feature" key={f}>{f}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">Inquire About School Contracts</a>
          </div>
          <div className="program-visual">
            <SchoolProgramVisual />
          </div>
        </div>

        {/* Program 02 */}
        <div className="program-block reverse reveal" ref={block2Ref}>
          <div className="program-number">02</div>
          <div className="program-content">
            <span className="program-badge">Field Days &amp; Events</span>
            <h3>One-Day Sport Experiences</h3>
            <p>
              High-energy, fully organized field days and sport events that give students
              a memorable day of competition, teamwork, and fun. Designed for any school
              size, any age group, and any event format — half day or full day.
            </p>
            <ul className="program-features">
              {[
                'Custom event design for your school or organization',
                'Structured competition, relay races, and team sports',
                'All equipment and organization handled',
                'Half-day and full-day formats available',
                'Suitable for K-12 and community events',
              ].map(f => (
                <li className="program-feature" key={f}>{f}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">Book a Field Day</a>
          </div>
          <div className="program-visual">
            <EventProgramVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
