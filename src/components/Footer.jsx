import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h3>Teman Sore</h3>
          <p>UMKM makanan khusus dimsum dan cireng dengan cita rasa autentik yang siap menemani waktu santai Anda.</p>
        </div>
        <div className="footer-col">
          <h3>Menu Populer</h3>
          <ul className="footer-links">
            <li><a href="#">Dimsum Udang Spesial</a></li>
            <li><a href="#">Dimsum Ayam Jamur</a></li>
            <li><a href="#">Cireng Bumbu Rujak</a></li>
            <li><a href="#">Cireng Keju Mozarella</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Link Cepat</h3>
          <ul className="footer-links">
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#testimonial">Testimoni</a></li>
            <li><a href="#contact">Kontak</a></li>
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
      <div className="footer-bottom"><p>© 2023 Teman Sore. All Rights Reserved.</p></div>
    </footer>
  )
}
