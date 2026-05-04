import { useScrollReveal } from '../hooks/useScrollReveal'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    text: '"The craftsmanship is absolutely stunning. My engagement ring from CrownLoop exceeded every expectation. The attention to detail and the way it catches light is mesmerizing."',
    name: 'Sarah Mitchell',
    role: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    text: '"I was searching for a wedding band that felt both timeless and unique. CrownLoop delivered exactly that. The personalized engraving service made it truly one-of-a-kind."',
    name: 'James Rodriguez',
    role: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    text: '"From browsing to delivery, the experience was flawless. The packaging alone felt like opening a luxury gift. My statement ring gets compliments everywhere I go."',
    name: 'Elena Kovacs',
    role: 'Budapest, Hungary',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

function Testimonials() {
  useScrollReveal()

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-header reveal">
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">Testimonials</span>
          <div className="section-label-line" />
        </div>
        <h2 className="section-title">Loved by Thousands</h2>
        <p className="section-desc">Real stories from customers who found their perfect ring with CrownLoop.</p>
      </div>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="testimonial-card reveal">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <img className="testimonial-avatar" src={t.avatar} alt={t.name} />
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonials-cta reveal">
        <h3>Join thousands of satisfied customers</h3>
        <p>Discover why CrownLoop is the trusted choice for modern jewelry lovers worldwide.</p>
        <button className="btn-primary" style={{ marginTop: 8 }}>
          Shop Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Testimonials