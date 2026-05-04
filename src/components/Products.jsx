import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Products.css'

const PRODUCTS = [
  { name: 'The Meridian', price: '$1,240', original: null, badge: 'New', rating: '4.9', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80' },
  { name: 'The Aurora', price: '$2,850', original: '$3,200', badge: 'Bestseller', rating: '5.0', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80' },
  { name: 'The Obsidian', price: '$890', original: null, badge: null, rating: '4.8', img: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&q=80' },
  { name: 'The Celestial', price: '$4,600', original: null, badge: 'Limited', rating: '5.0', img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80' },
  { name: 'The Minimalist', price: '$560', original: null, badge: null, rating: '4.7', img: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=80' },
  { name: 'The Empress', price: '$3,120', original: '$3,800', badge: 'Hot', rating: '4.9', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80' },
  { name: 'The Vanguard', price: '$1,780', original: null, badge: null, rating: '4.8', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80' },
  { name: 'The Nova', price: '$2,400', original: null, badge: 'New', rating: '4.9', img: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&q=80' },
]

function Products() {
  useScrollReveal()
  const [wishlist, setWishlist] = useState(new Set())
  const [cartFeedback, setCartFeedback] = useState({})

  const toggleWishlist = (name) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const addToCart = (name) => {
    setCartFeedback((prev) => ({ ...prev, [name]: true }))
    setTimeout(() => {
      setCartFeedback((prev) => ({ ...prev, [name]: false }))
    }, 2000)
  }

  return (
    <section className="section products-section" id="products">
      <div className="section-header reveal">
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">New Arrivals</span>
          <div className="section-label-line" />
        </div>
        <h2 className="section-title">Featured Rings</h2>
        <p className="section-desc">Handpicked pieces that define modern elegance. Limited quantities available.</p>
      </div>
      <div className="products-grid">
        {PRODUCTS.map((p) => (
          <div key={p.name} className="product-card reveal">
            <div className="product-image-wrap">
              <img src={p.img} alt={p.name} />
              {p.badge && <span className="product-badge">{p.badge}</span>}
              <div
                className="product-wishlist"
                onClick={(e) => { e.stopPropagation(); toggleWishlist(p.name) }}
                style={{ color: wishlist.has(p.name) ? '#B8860B' : undefined }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{p.name}</h3>
              <div className="product-meta">
                <span className="product-price">
                  {p.price}
                  {p.original && <span className="original">{p.original}</span>}
                </span>
                <div className="product-rating">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>{p.rating}</span>
                </div>
              </div>
              <button
                className="product-add-btn"
                onClick={(e) => { e.stopPropagation(); addToCart(p.name) }}
                style={
                  cartFeedback[p.name]
                    ? { background: '#2d5a3d', borderColor: '#2d5a3d', color: 'white' }
                    : {}
                }
              >
                {cartFeedback[p.name] ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Added!
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products