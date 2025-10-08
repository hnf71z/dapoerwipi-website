import React from 'react'

export default function Contact(){
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h3>Hubungi Kami</h3>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-text"><h4>Alamat</h4><p>Jl. Sore Santai No. 123, Kota Bandung, Jawa Barat</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="contact-text"><h4>Telepon</h4><p>+62 812 3456 7890</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-text"><h4>Email</h4><p>info@temansore.com</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-clock"></i></div>
              <div className="contact-text"><h4>Jam Operasional</h4><p>Setiap Hari: 09.00 - 20.00 WIB</p></div>
            </div>
          </div>
          <h3>Ikuti Kami</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/temansore.food/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/087820193851"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
        <div className="contact-form">
          <h3>Kirim Pesan</h3>
          <form>
            <div className="form-group"><label htmlFor="name">Nama Lengkap</label><input type="text" id="name" placeholder="Masukkan nama Anda" required/></div>
            <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" placeholder="Masukkan email Anda" required/></div>
            <div className="form-group"><label htmlFor="phone">Nomor Telepon</label><input type="tel" id="phone" placeholder="Masukkan nomor telepon"/></div>
            <div className="form-group"><label htmlFor="message">Pesan</label><textarea id="message" placeholder="Tulis pesan Anda di sini" required/></div>
            <button type="submit" className="submit-btn">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </section>
  )
}
