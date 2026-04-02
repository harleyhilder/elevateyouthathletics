import { useReveal } from '../hooks/useReveal'

export default function About() {
  const textRef = useReveal()
  const imgRef = useReveal()

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal" ref={textRef}>
            <span className="section-label">Meet Your Coach</span>
            <h2 className="section-title">BUILT BY A COACH.<br /><span>BACKED BY CREDENTIALS.</span></h2>
            <p>
              Originally from Michigan, our founder has called Arizona home for over 16 years &mdash;
              long enough to know the schools, the communities, and exactly what Arizona&rsquo;s young
              athletes need to thrive.
            </p>
            <p>
              With a Bachelor of Science in Management, experience as an Athletic Director and
              football coach, and over 100 college credits in sports medicine and athletic training,
              this isn&rsquo;t someone who just showed up with a whistle. It&rsquo;s someone who built a career
              around doing this the right way.
            </p>
            <p>
              12 NFHS certifications covering everything from Level 1 &amp; 2 coaching to concussion
              protocols, CPR, and dealing with parents &mdash; every base is covered so your school
              doesn&rsquo;t have to worry.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <span className="about-highlight-num">16</span>
                <span className="about-highlight-label">Years in AZ</span>
              </div>
              <div className="about-highlight">
                <span className="about-highlight-num">12</span>
                <span className="about-highlight-label">NFHS Certs</span>
              </div>
              <div className="about-highlight">
                <span className="about-highlight-num">300+</span>
                <span className="about-highlight-label">Clinical Hours</span>
              </div>
            </div>

            <a href="#credentials" className="btn btn-primary">View Full Credentials</a>
          </div>

          <div className="about-image-frame reveal" ref={imgRef}>
            {/* Replace this placeholder with an <img> tag once a photo is available */}
            <span className="about-photo-initials">EYA</span>
            <span className="about-photo-placeholder-label">Photo Coming Soon</span>
            <span className="az-badge">Arizona</span>
          </div>
        </div>
      </div>
    </section>
  )
}
