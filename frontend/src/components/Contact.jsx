import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const INITIAL = {
  name: '', school: '', email: '', phone: '', interest: '', message: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.school.trim()) errors.school = 'School or organization is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address'
  if (!form.interest) errors.interest = 'Please select a program type'
  if (!form.message.trim()) errors.message = 'Message is required'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const headerRef = useReveal()
  const gridRef = useReveal()

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header reveal" ref={headerRef}>
          <span className="section-label">Let&rsquo;s Talk</span>
          <h2 className="section-title">READY TO <span>ELEVATE</span><br />YOUR SCHOOL?</h2>
        </div>

        <div className="contact-grid reveal" ref={gridRef}>
          {/* Form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="form-success show">
                <div className="form-success-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16l5 5 11-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We&rsquo;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <Field label="Your Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Jane Smith" />
                  <Field label="School or Organization" name="school" value={form.school} onChange={handleChange} error={errors.school} placeholder="Lincoln Elementary" />
                </div>
                <div className="form-row">
                  <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="jane@school.edu" />
                  <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="(602) 555-0100" />
                </div>
                <div className="form-group">
                  <label htmlFor="interest">I&rsquo;m interested in</label>
                  <select id="interest" name="interest" value={form.interest} onChange={handleChange} className={errors.interest ? 'error' : ''}>
                    <option value="">Select a program type…</option>
                    <option value="school-contract">School Contract (Ongoing PE Program)</option>
                    <option value="field-day">Field Day / One-Day Sport Event</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.interest && <span className="form-error">{errors.interest}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell us about your needs</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell us about your school, grade levels, number of students, and what you're looking for…"
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>
                {status === 'error' && (
                  <p style={{ color: '#ff6b6b', fontSize: 14, marginBottom: 12 }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="contact-info">
            <h3 className="contact-info-title">WE&rsquo;RE HERE<br />FOR ARIZONA SCHOOLS</h3>
            <p className="contact-info-sub">
              No pressure. No commitment required. Just a conversation about what
              Elevate Youth Athletics can do for your students.
            </p>
            <div className="contact-info-items">
              <ContactInfoItem icon={<LocationIcon />} label="Service Area" value="Greater Phoenix &amp; Arizona Statewide" />
              <ContactInfoItem icon={<EmailIcon />} label="Email" value="[email@elevateyouthathletics.com]" />
              <ContactInfoItem icon={<PhoneIcon />} label="Phone" value="[(555) 000-0000]" />
            </div>
            <div className="contact-promise">
              <strong>We respond within 24 hours.</strong>
              <p>Every inquiry is personal. You&rsquo;ll hear directly from the owner, not an automated system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'error' : ''}
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1110 5a1.5 1.5 0 010 3.5z" fill="currentColor"/>
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
