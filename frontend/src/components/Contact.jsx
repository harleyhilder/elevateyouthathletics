import { useReveal } from '../hooks/useReveal'
import groupPhoto from '../assets/field-group.jpg'

export default function Contact() {
  const headerRef = useReveal()
  const bodyRef = useReveal()

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header reveal" ref={headerRef}>
          <span className="section-label">Let&rsquo;s Talk</span>
          <h2 className="section-title">READY TO <span>ELEVATE</span><br />YOUR SCHOOL?</h2>
        </div>

        <div className="contact-two-col reveal" ref={bodyRef}>
          {/* Left — info */}
          <div className="contact-info-col">
            <p className="contact-info-sub">
              No pressure. No commitment required. Just a conversation about what
              Elevate Youth Athletics can do for your students.
            </p>

            <div className="contact-info-items">
              <ContactInfoItem icon={<LocationIcon />} label="Service Area" value="Greater Phoenix &amp; Arizona Statewide" />
              <ContactInfoItem icon={<PhoneIcon />} label="Phone" value="<a href='tel:4802264169'>480-226-4169</a>" />
              <ContactInfoItem icon={<EmailIcon />} label="Email" value="<a href='mailto:Mtomey0463@gmail.com'>Mtomey0463@gmail.com</a>" />
            </div>

            <div className="contact-promise">
              <strong>We respond within 24 hours.</strong>
              <p>Every inquiry is personal. You&rsquo;ll hear directly from the owner, not an automated system.</p>
            </div>
          </div>

          {/* Right — photo */}
          <div className="contact-photo-col">
            <div className="contact-photo-frame">
              <img
                src={groupPhoto}
                alt="Elevate Youth Athletics coach with students on the field"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1110 5a1.5 1.5 0 010 3.5z"/>
    </svg>
  )
}
function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6.5 2.5c.3 0 .6.2.7.5l1.3 3.3c.1.3 0 .6-.2.8L6.8 8.6A11 11 0 0011.4 13.2l1.5-1.5c.2-.2.5-.3.8-.2l3.3 1.3c.3.1.5.4.5.7v2.5A1.5 1.5 0 0116 17.5C7.4 17.5 2.5 12.6 2.5 4A1.5 1.5 0 014 2.5h2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

function ContactInfoItem({ icon, label, value }) {
  return (
    <div className="contact-info-item">
      <div className="contact-info-item-icon">{icon}</div>
      <div className="contact-info-item-text">
        <strong>{label}</strong>
        <span dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  )
}
