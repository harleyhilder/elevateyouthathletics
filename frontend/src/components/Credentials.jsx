import { useReveal } from '../hooks/useReveal'

// The owner has 12 NFHS certs total. 7 are named below.
// TODO: Add the remaining 5 certificate names when available.
const NFHS_CERTS = [
  'Fundamentals of Coaching (Level 1)',
  'Level 2 Coaching Certification',
  'Injury & Illness Prevention & Care',
  'Bullying Prevention',
  'Dealing with Parents in Youth Sports',
  'Concussion in Sports',
  'CPR / First Aid',
  // 5 more NFHS certs — add names here
  'NFHS Certificate (Coming Soon)',
  'NFHS Certificate (Coming Soon)',
  'NFHS Certificate (Coming Soon)',
  'NFHS Certificate (Coming Soon)',
  'NFHS Certificate (Coming Soon)',
]

const EXPERIENCE = [
  {
    title: 'Athletic Director',
    desc: 'Led athletic programs at the school level, managing coaches, budgets, schedules, and student athlete development.',
  },
  {
    title: 'Football Coach',
    desc: 'Hands-on coaching experience in competitive football, building team culture, strategy, and player development.',
  },
  {
    title: '16 Years — Arizona',
    desc: 'Deep roots in the Arizona community with firsthand knowledge of local schools, programs, and what students here need.',
  },
]

function CheckIcon() {
  return (
    <svg className="cert-check" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8.5" stroke="currentColor" strokeOpacity="0.3"/>
      <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Credentials() {
  const headerRef = useReveal()
  const statsRef = useReveal()
  const bodyRef = useReveal()

  return (
    <section id="credentials" className="credentials-section">
      <div className="container">
        <div className="credentials-header reveal" ref={headerRef}>
          <span className="section-label">Qualifications</span>
          <h2 className="section-title">CREDENTIALS THAT<br /><span>SPEAK VOLUMES</span></h2>
          <p style={{ color: 'var(--color-gray-light)', maxWidth: 500, margin: '0 auto', fontSize: 16 }}>
            Every certification, every credit, every clinical hour — built over years
            of genuine commitment to youth sports and athlete safety.
          </p>
        </div>

        {/* Big 3 stats */}
        <div className="credentials-big-stats reveal" ref={statsRef}>
          <div className="big-stat">
            <span className="big-stat-number">B.S.</span>
            <span className="big-stat-label">Management</span>
            <span className="big-stat-sub">Eastern Michigan University</span>
          </div>
          <div className="big-stat">
            <span className="big-stat-number">100+</span>
            <span className="big-stat-label">College Credits</span>
            <span className="big-stat-sub">Sports Medicine &amp; Athletic Training — Eastern Michigan</span>
          </div>
          <div className="big-stat">
            <span className="big-stat-number">300+</span>
            <span className="big-stat-label">Clinical Hours</span>
            <span className="big-stat-sub">Practicing Athletic Training</span>
          </div>
        </div>

        {/* Certs + Experience */}
        <div className="credentials-body reveal" ref={bodyRef}>
          <div className="certs-col">
            <p className="certs-header">NFHS Certifications (12)</p>
            <div className="cert-grid">
              {NFHS_CERTS.map((cert, i) => (
                <div className="cert-card" key={i}>
                  <CheckIcon />
                  <span className="cert-name">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-col">
            <p className="exp-header">Experience</p>
            {EXPERIENCE.map(({ title, desc }) => (
              <div className="exp-item" key={title}>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
