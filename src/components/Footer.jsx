import './Footer.css'

const SHOP_LINKS = ['All Rings', 'Engagement', 'Wedding Bands', 'Luxury Collection', 'New Arrivals']
const COMPANY_LINKS = ['About Us', 'Our Craftsmen', 'Sustainability', 'Careers', 'Press']
const HELP_LINKS = ['FAQs', 'Shipping', 'Returns', 'Size Guide', 'Contact Us']
const CONTACT_LINKS = ['support@crownloop.com', '+1 (800) 555-0199', 'Mon–Fri, 9am–6pm EST', 'Live Chat Available']

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="logo-text">Crown<span>Loop</span></span>
          <p>Crafting timeless rings with modern precision since 2018. Every piece tells a unique story of love, commitment, and artistry.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="12" y1="8" x2="12" y2="21" />
                <path d="M6 12a6 6 0 0 1 12 0c0 3.5-2 6-4 8" />
                <circle cx="12" cy="6" r="4" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          {SHOP_LINKS.map((l) => <a key={l} href="#">{l}</a>)}
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          {COMPANY_LINKS.map((l) => <a key={l} href="#">{l}</a>)}
        </div>
        <div className="footer-col">
          <h4>Help</h4>
          {HELP_LINKS.map((l) => <a key={l} href="#">{l}</a>)}
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          {CONTACT_LINKS.map((l) => <a key={l} href="#">{l}</a>)}
        </div>
      </div>
      <div className="footer-bottom">
        <p>2026 CrownLoop. All rights reserved. Developed by Ramsey Hyde</p>
        <div className="footer-payment">
          <span>We accept</span>
          <div className="payment-icon">VISA</div>
          <div className="payment-icon">MC</div>
          <div className="payment-icon">AMEX</div>
          <div className="payment-icon">PP</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer