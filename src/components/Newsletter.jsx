import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Newsletter.css'

function Newsletter() {
  useScrollReveal()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <section className="section newsletter-section" id="newsletter">
      <div className="newsletter-content reveal">
        <div className="newsletter-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <h2 className="newsletter-title">Get Exclusive Deals</h2>
        <p className="newsletter-desc">
          Subscribe to receive early access to new collections, exclusive offers, and insider stories from our master craftsmen.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter