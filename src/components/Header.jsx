import React, { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY

      if (open) {
        // keep header visible if mobile menu is open
        setVisible(true)
        lastScrollY.current = currentY
        return
      }

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentY > lastScrollY.current && currentY > 100) {
            // scrolled down
            setVisible(false)
          } else {
            // scrolled up
            setVisible(true)
          }
          lastScrollY.current = currentY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [open])

  return (
    <header className={visible ? '' : 'header--hidden'}>
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/Dwipi-logo.png" alt="Dapoer Wipi Logo" />
          {/* <h1>Dapoer Wipi</h1> */}
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
