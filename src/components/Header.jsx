import React, { useState, useEffect, useRef } from 'react'
import logoImg from '../assets/Dwipi-logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false) // Close mobile menu after clicking
    }
  }

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
          <img src={logoImg} alt="Dapoer Wipi Logo" />
          {/* <h1>Dapoer Wipi</h1> */}
        </div>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Beranda</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Tentang Kami</a></li>
          <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Menu</a></li>
          <li><a href="#testimonial" onClick={(e) => handleNavClick(e, 'testimonial')}>Testimoni</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Kontak</a></li>
        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  )
}
