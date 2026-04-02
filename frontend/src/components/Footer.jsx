export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <a href="#home">
              <span className="nav-logo-main">ELEVATE</span>
              <span className="nav-logo-sub" style={{ display: 'block', marginTop: 2 }}>Youth Athletics</span>
            </a>
            <p style={{ marginTop: 16 }}>
              Professional youth sports programs for Arizona schools.
              School contracts and field day events run by a certified
              athletic director.
            </p>
          </div>

          <div className="footer-nav-group">
            <div className="footer-nav-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#credentials">Credentials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4>Programs</h4>
              <ul>
                <li><a href="#programs">School Contracts</a></li>
                <li><a href="#programs">Field Days &amp; Events</a></li>
                <li><a href="#contact">Book an Event</a></li>
                <li><a href="#contact">Get a Quote</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} Elevate Youth Athletics. All rights reserved.
          </p>
          <span className="footer-tagline">Serving Arizona Schools &amp; Communities</span>
        </div>
      </div>
    </footer>
  )
}
