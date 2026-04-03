import { useReveal } from '../hooks/useReveal'
import fieldSession from '../assets/field-session.jpeg'

// Add more photos here as they become available:
// import photo2 from '../assets/photo2.jpeg'

const PHOTOS = [
  {
    src: fieldSession,
    alt: 'Students playing on the field at sunset with Arizona mountain backdrop',
    location: 'Phoenix, Arizona',
    caption: 'After-school PE session in action',
  },
  // { src: photo2, alt: '...', location: '...', caption: '...' },
]

export default function Gallery() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header reveal" ref={headerRef}>
          <span className="section-label">In Action</span>
          <h2 className="section-title">ELEVATE IN <span>THE FIELD</span></h2>
          <p className="gallery-sub">
            Real sessions. Real students. Real Arizona.
          </p>
        </div>

        <div className={`gallery-grid gallery-grid--${PHOTOS.length === 1 ? 'single' : 'multi'} reveal`} ref={gridRef}>
          {PHOTOS.map(({ src, alt, location, caption }) => (
            <div className="gallery-item" key={caption}>
              <div className="gallery-img-wrap">
                <img src={src} alt={alt} loading="lazy" />
                <div className="gallery-img-overlay">
                  <span className="gallery-location">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {location}
                  </span>
                </div>
              </div>
              <p className="gallery-caption">{caption}</p>
            </div>
          ))}
        </div>

        <p className="gallery-more">
          More sessions coming &mdash; follow along as Elevate Youth Athletics grows across Arizona.
        </p>
      </div>
    </section>
  )
}
