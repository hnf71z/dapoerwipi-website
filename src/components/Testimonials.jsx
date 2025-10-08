import React from 'react'

const data = [
  {id:1, text: 'Dimsumnya enak banget! Teksturnya pas, isiannya banyak, dan bumbunya meresap. Sudah beberapa kali pesan dan selalu konsisten enaknya. Recommended banget!', name: 'Sarah Wijaya', role: 'Pelanggan Setia', img: 'https://randomuser.me/api/portraits/women/32.jpg'},
  {id:2, text: 'Cireng bumbu rujaknya nagih banget! Pedas manisnya pas, teksturnya krispi di luar lembut di dalam. Cocok banget buat teman nonton drakor.', name: 'Budi Santoso', role: 'Pelanggan Baru', img: 'https://randomuser.me/api/portraits/men/45.jpg'},
  {id:3, text: 'Pesen untuk acara arisan, semua ibu-ibu pada suka! Pesannya gampang, pengirimannya tepat waktu, dan harganya terjangkau untuk kualitas premium seperti ini.', name: 'Dewi Lestari', role: 'Ketua Arisan', img: 'https://randomuser.me/api/portraits/women/68.jpg'}
  ,{id:4, text: 'Pelayanan cepat dan rasanya selalu enak. Packaging rapi membuat pesanan aman sampai tujuan.', name: 'Rudi Hartono', role: 'Pelanggan', img: 'https://randomuser.me/api/portraits/men/12.jpg'},
  {id:5, text: 'Cocok banget buat acara keluarga, semua makanan habis dalam sekejap. Harga terjangkau dan kualitas oke.', name: 'Siti Aminah', role: 'Ibu Rumah Tangga', img: 'https://randomuser.me/api/portraits/women/21.jpg'},
  {id:6, text: 'Kualitas selalu terjaga. Saya sering pesan untuk meeting kantor, dan rekan-rekan pada suka.', name: 'Andi Prasetyo', role: 'Karyawan', img: 'https://randomuser.me/api/portraits/men/34.jpg'}
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
