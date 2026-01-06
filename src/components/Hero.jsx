import React from 'react'
import heroImg from '../assets/dapoeriwipiHero.png'

export default function Hero(){
  const handleScrollToMenu = (e) => {
    e.preventDefault()
    const menuSection = document.getElementById('menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero" id="home" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImg})`}}>
      <div className="hero-content">
        <h1>Nikmati Hidangan Ayam Spesial</h1>
        <p>Dapoer Wipi menyajikan berbagai varian olahan ayam seperti chicken katsu, geprek, dan egg roll dengan cita rasa istimewa yang akan menemani waktu makan Anda</p>
        <a href="#menu" className="cta-button" onClick={handleScrollToMenu}>Lihat Menu</a>
      </div>
    </section>
  )
}
