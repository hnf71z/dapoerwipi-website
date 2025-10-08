import React, {useState} from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/teman.png" alt="Teman Sore Logo" />
          <h1>Teman Sore</h1>
        </div>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li><a href="#home">Beranda</a></li>
          <li><a href="#about">Tentang Kami</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#testimonial">Testimoni</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  )
}
