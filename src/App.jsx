import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
