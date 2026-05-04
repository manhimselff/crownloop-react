import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
  }, [sidebarOpen])

  const toggleSidebar = () => setSidebarOpen((v) => !v)

  const sidebarLinks = [
    { href: '#collections', label: 'Collections', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' },
    { href: '#products', label: 'Shop', icon: 'M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' },
    { href: '#testimonials', label: 'Reviews', icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
    { href: '#newsletter', label: 'Newsletter', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' },
    { href: '#footer', label: 'About', icon: 'M12 16v-4M12 8h.01' },
  ]

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' active' : ''}`}
        onClick={toggleSidebar}
      />

      {/* Mobile Sidebar */}
      <nav className={`sidebar${sidebarOpen ? ' active' : ''}`}>
        {sidebarLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={toggleSidebar}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {link.href === '#newsletter' ? (
                <>
                  <path d={link.icon} />
                  <polyline points="22,6 12,13 2,6" />
                </>
              ) : link.href === '#footer' ? (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <path d={link.icon} />
                </>
              ) : (
                <path d={link.icon} />
              )}
            </svg>
            {link.label}
          </a>
        ))}
        <div className="sidebar-footer">
          <p>CrownLoop crafts timeless rings with modern precision. Every piece tells a story.</p>
        </div>
      </nav>

      {/* Navbar */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-left">
          <div className={`menu-btn${sidebarOpen ? ' active' : ''}`} onClick={toggleSidebar}>
            <span /><span /><span />
          </div>
          <ul className="nav-links">
            <li><a href="#collections">Collections</a></li>
            <li><a href="#products">Shop</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#newsletter">Contact</a></li>
          </ul>
        </div>
        <a href="#" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="22" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="10" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="22" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="3" fill="currentColor" />
            </svg>
          </div>
        </a>
        <div className="nav-right">
          <div className="nav-icon nav-icon-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <div className="nav-icon nav-icon-wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <div className="nav-icon" style={{ position: 'relative' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-count">3</span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar