import React from 'react'

const items = [
  {id:1, img: '/assets/chicken-katsu.jpg', title: 'Chicken Katsu', desc: 'Dimsum dengan mentai segar dan bumbu rahasia kami', price: 'Rp 25.000'},
  {id:2, img: '/assets/chicken-egg-roll.jpg', title: 'Chicken Egg Roll', desc: 'Perpaduan daging ayam pilihan dan jamur shitake', price: 'Rp 22.000'},
  {id:3, img: '/assets/chicken-mie-katsu.jpg', title: 'Mie Katsu', desc: 'Cireng krispi dengan bumbu rujak manis pedas khas Bandung', price: 'Rp 15.000'},
  {id:4, img: '/assets/chicken-geprek-mewah.png', title: 'Ayam Geprek', desc: 'Cireng isi keju mozarella lumer dengan baluran tepung krispi', price: 'Rp 18.000'}
]

export default function Menu(){
  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <div className="section-title">
          <h2>Menu Favorite</h2>
          <p>Berbagai pilihan dimsum dan cireng dengan cita rasa istimewa</p>
        </div>
        <div className="menu-grid">
          {items.map(item => (
            <div className="menu-item" key={item.id}>
              <div className="menu-img"><img src={item.img} alt={item.title} /></div>
              <div className="menu-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="price">
                  <span>{item.price}</span>
                  <button className="add-to-cart">+ Pesan</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
