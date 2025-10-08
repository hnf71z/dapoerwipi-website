import React from 'react'

const data = [
  {id:1, text: 'Dimsumnya enak banget! Teksturnya pas, isiannya banyak, dan bumbunya meresap. Sudah beberapa kali pesan dan selalu konsisten enaknya. Recommended banget!', name: 'Sarah Wijaya', role: 'Pelanggan Setia', img: 'https://randomuser.me/api/portraits/women/32.jpg'},
  {id:2, text: 'Cireng bumbu rujaknya nagih banget! Pedas manisnya pas, teksturnya krispi di luar lembut di dalam. Cocok banget buat teman nonton drakor.', name: 'Budi Santoso', role: 'Pelanggan Baru', img: 'https://randomuser.me/api/portraits/men/45.jpg'},
  {id:3, text: 'Pesen untuk acara arisan, semua ibu-ibu pada suka! Pesannya gampang, pengirimannya tepat waktu, dan harganya terjangkau untuk kualitas premium seperti ini.', name: 'Dewi Lestari', role: 'Ketua Arisan', img: 'https://randomuser.me/api/portraits/women/68.jpg'}
]

export default function Testimonials(){
  return (
    <section className="testimonials" id="testimonial">
      <div className="testimonial-container">
        <div className="section-title">
          <h2>Apa Kata Pelanggan</h2>
          <p>Testimoni dari mereka yang telah mencicipi kelezatan Teman Sore</p>
        </div>
        <div className="testimonial-grid">
          {data.map(t => (
            <div className="testimonial-card" key={t.id}>
              <div className="testimonial-content"><p>{t.text}</p></div>
              <div className="testimonial-author">
                <div className="author-img"><img src={t.img} alt={t.name} /></div>
                <div className="author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
