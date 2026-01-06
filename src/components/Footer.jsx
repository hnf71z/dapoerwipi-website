import React from 'react'

export default function Footer(){
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h3>Dapoer Wipi</h3>
          <p>UMKM makanan khusus olahan ayam dengan cita rasa istimewa yang siap menemani waktu makan Anda.</p>
        </div>
        <div className="footer-col">
          <h3>Menu Populer</h3>
          <ul className="footer-links">
            <li><a href="#menu" onClick={(e) => handleScrollToSection(e, 'menu')}>Chicken Katsu</a></li>
            <li><a href="#menu" onClick={(e) => handleScrollToSection(e, 'menu')}>Chicken Geprek Mewah</a></li>
            <li><a href="#menu" onClick={(e) => handleScrollToSection(e, 'menu')}>Chicken Egg Roll</a></li>
            <li><a href="#menu" onClick={(e) => handleScrollToSection(e, 'menu')}>Chicken Mie Katsu</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Link Cepat</h3>
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => handleScrollToSection(e, 'home')}>Beranda</a></li>
            <li><a href="#about" onClick={(e) => handleScrollToSection(e, 'about')}>Tentang Kami</a></li>
            <li><a href="#menu" onClick={(e) => handleScrollToSection(e, 'menu')}>Menu</a></li>
            <li><a href="#testimonial" onClick={(e) => handleScrollToSection(e, 'testimonial')}>Testimoni</a></li>
            <li><a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')}>Kontak</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Berlangganan newsletter kami untuk mendapatkan promo dan menu terbaru.</p>
          <form>
            <div className="form-group"><input type="email" placeholder="Alamat email Anda" required/></div>
            <button type="submit" className="submit-btn">Berlangganan</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom"><p>© 2023 Dapoer Wipi. All Rights Reserved.</p></div>
    </footer>
  )
}
