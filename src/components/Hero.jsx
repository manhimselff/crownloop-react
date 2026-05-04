import { useEffect, useRef, useState, useCallback } from 'react'
import Hls from 'hls.js'
import './Hero.css'

const SLIDES = [
  { id: 'heroSlide1', playbackId: 'GYgCgAetCer01nEV0001QB02MOjl01lZ2H9NHdg501h9fvWag' },
  { id: 'heroSlide2', playbackId: '9NHeQpEs00n7H64xihd00C6BPRZJjNP6gL1Ld01iTGCPGU' },
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRefs = useRef([])
  const intervalRef = useRef(null)

  const initVideo = useCallback((video, playbackId) => {
    const hlsUrl = `https://stream.mux.com/${playbackId}.m3u8`
    if (Hls.isSupported()) {
      const hls = new Hls({ maxBufferLength: 30, maxMaxBufferLength: 60 })
      hls.loadSource(hlsUrl)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {})
      })
    }
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) initVideo(video, SLIDES[i].playbackId)
    })
  }, [initVideo])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 8000)
    return () => clearInterval(intervalRef.current)
  }, [nextSlide])

  const handleIndicatorClick = (index) => {
    clearInterval(intervalRef.current)
    goToSlide(index)
    intervalRef.current = setInterval(nextSlide, 8000)
  }

  // Generate particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    duration: `${15 + Math.random() * 10}s`,
  }))

  return (
    <section className="hero" id="hero">
      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {SLIDES.map((slide, i) => (
        <div key={slide.id} className={`hero-slide${i === currentSlide ? ' active' : ''}`}>
          <video
            ref={(el) => { videoRefs.current[i] = el }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src={`https://stream.mux.com/${slide.playbackId}.m3u8`}
              type="application/vnd.apple.mpegurl"
            />
            <source
              src={`https://stream.mux.com/${slide.playbackId}/low.mp4`}
              type="video/mp4"
            />
          </video>
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="hero-content">
        <div className="hero-tag">
          <div className="hero-tag-line" />
          <span className="hero-tag-text">Collection 2026</span>
        </div>
        <h1 className="hero-title">
          <em>Discover</em> Timeless<br />Rings, Modern Craft
        </h1>
        <p className="hero-desc">
          Handcrafted rings that merge centuries of tradition with contemporary design.
          Each piece is made to tell your unique story.
        </p>
        <div className="hero-cta">
          <button className="btn-primary">
            Shop Collection
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn-secondary">
            Our Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div className="hero-product-card">
        <div className="hero-product-img">
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" alt="Featured Ring" />
        </div>
        <div className="hero-product-info">
          <span className="hero-product-label">Featured</span>
          <h3 className="hero-product-title">The Sovereign<br />Band</h3>
          <button className="hero-product-btn">Explore</button>
        </div>
      </div>

      <div className="hero-indicators">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={`hero-indicator${i === currentSlide ? ' active' : ''}`}
            onClick={() => handleIndicatorClick(i)}
          >
            <div className="hero-indicator-progress" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero