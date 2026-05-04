import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App