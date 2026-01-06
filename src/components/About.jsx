import React from 'react'
import logoImg from '../assets/Dwipi-logo.png'

export default function About(){
  return (
    <section className="about" id="about">
      <div className="section-title">
        <h2>Tentang Kami</h2>
        <p>Kenali lebih dekat UMKM kami yang berdedikasi menyajikan makanan ringan berkualitas</p>
      </div>
      <div className="about-content">
        <div className="about-img">
          <img src={logoImg} alt="Tentang Dapoer Wipi" />
        </div>
        <div className="about-text">
          <h3>Cerita di Balik Dapoer Wipi</h3>
          <p>Dapoer Wipi berawal dari kecintaan kami terhadap olahan ayam berkualitas yang bisa dinikmati kapan saja. Dimulai dari usaha rumahan pada tahun 2020, kini kami berkembang menjadi UMKM yang melayani berbagai pesanan untuk acara dan kebutuhan sehari-hari.</p>
          <p>Kami menggunakan bahan-bahan berkualitas tinggi dan proses pembuatan yang higienis untuk memastikan setiap hidangan memberikan pengalaman makan yang memuaskan.</p>
          <p>Visi kami adalah menjadi dapoer pilihan keluarga Indonesia dengan menyajikan hidangan ayam yang lezat, sehat, dan terjangkau.</p>
        </div>
      </div>
    </section>
  )
}
