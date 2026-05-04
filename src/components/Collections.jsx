import { useScrollReveal } from '../hooks/useScrollReveal'
import './Collections.css'

const COLLECTIONS = [
  { name: 'Engagement', count: '24 Pieces', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80' },
  { name: 'Wedding Bands', count: '18 Pieces', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80' },
  { name: 'Luxury', count: '12 Pieces', img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80' },
  { name: 'Minimal', count: '32 Pieces', img: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80' },
  { name: 'Statement', count: '15 Pieces', img: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80' },
]

function Collections() {
  useScrollReveal()

  return (
    <section className="section" id="collections">
      <div className="section-header reveal">
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">Browse</span>
          <div className="section-label-line" />
        </div>
        <h2 className="section-title">Our Collections</h2>
        <p className="section-desc">Explore curated categories designed for every moment that matters.</p>
      </div>
      <div className="collections-grid">
        {COLLECTIONS.map((c) => (
          <div key={c.name} className="collection-card reveal">
            <img src={c.img} alt={c.name} />
            <div className="collection-overlay">
              <h3 className="collection-name">{c.name}</h3>
              <p className="collection-count">{c.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Collections