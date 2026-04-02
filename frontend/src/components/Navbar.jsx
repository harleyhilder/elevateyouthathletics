import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-main">ELEVATE</span>
            <span className="nav-logo-sub">Youth Athletics</span>
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.replace('#', '') ? 'active' : ''}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta" style={{ display: 'none' }}>Get Started</a>

          <button
            className={`nav-toggle${menuOpen ? ' is-active' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Get Started</a>
      </div>
    </>
  )
}
