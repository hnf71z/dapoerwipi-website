import React from 'react'

export default function Contact(){
  const styles = {
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    headerTitle: {
      fontSize: '2.5rem',
      color: 'rgb(75, 54, 25)',
      marginBottom: '1rem'
    },
    headerDesc: {
      color: '#666',
      maxWidth: '700px',
      margin: '0 auto',
      fontSize: '1.1rem'
    },
    mapSection: {
      marginBottom: '3rem'
    },
    mapTitle: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    mapContainer: {
      width: '100%',
      height: '400px',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
      border: '2px solid rgb(243, 239, 222)'
    },
    whatsappCta: {
      maxWidth: '450px',
      margin: '0 auto 3rem'
    },
    whatsappButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      background: '#25D366',
      color: 'white',
      padding: '1.2rem 2rem',
      borderRadius: '15px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(37, 211, 102, 0.3)'
    },
    whatsappIcon: {
      fontSize: '2rem'
    },
    textWrapper: {
      textAlign: 'left'
    },
    subtitle: {
      fontSize: '0.85rem',
      opacity: 0.9,
      fontWeight: '400'
    },
    title: {
      fontSize: '1.2rem'
    },
    infoCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    },
    infoCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start'
    },
    iconWrapper: {
      width: '45px',
      height: '45px',
      background: 'rgb(243, 239, 222)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    iconStyle: {
      color: 'rgb(75, 54, 25)',
      fontSize: '1.2rem'
    },
    infoTitle: {
      color: '#333',
      marginBottom: '0.3rem',
      fontSize: '1.1rem'
    },
    infoText: {
      color: '#666',
      fontSize: '0.95rem'
    },
    socialSection: {
      textAlign: 'center'
    },
    socialTitle: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '2rem'
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    socialIcon: {
      width: '55px',
      height: '55px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    socialIconInsta: {
      background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)'
    },
    socialIconFb: {
      background: '#1877F2'
    },
    socialIconTiktok: {
      background: '#000000'
    },
    socialIconI: {
      fontSize: '1.5rem',
      color: 'white'
    },
    phoneInfo: {
      marginTop: '2.5rem',
      color: '#666'
    },
    phoneLink: {
      color: 'rgb(75, 54, 25)',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    }
  }

  return (
    <section className="contact" id="contact">
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Hubungi Kami</h2>
          <p style={styles.headerDesc}>
            Punya pertanyaan atau ingin memesan? Hubungi kami melalui WhatsApp atau kunjungi sosial media kami
          </p>
        </div>

        {/* Contact Info Cards */}
        <div style={styles.infoCards}>
          <div style={styles.infoCard}>
            <div style={styles.iconWrapper}>
              <i className="fas fa-map-marker-alt" style={styles.iconStyle}></i>
            </div>
            <div>
              <h4 style={styles.infoTitle}>Lokasi</h4>
              <p style={styles.infoText}>Jl. Timoho I No.36, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277</p>
            </div>
          </div>
          <div style={styles.infoCard}>
            <div style={styles.iconWrapper}>
              <i className="fas fa-clock" style={styles.iconStyle}></i>
            </div>
            <div>
              <h4 style={styles.infoTitle}>Jam Buka</h4>
              <p style={styles.infoText}>Setiap Hari: 09.00 - 20.00 WIB</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div style={styles.mapSection}>
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Jl.%20Timoho%20I%20No.36,%20Bulusan,%20Kec.%20Tembalang,%20Kota%20Semarang,%20Jawa%20Tengah%2050277+(Dapoer%20Wipi)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="400"
            style={styles.mapContainer}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Dapoer Wipi"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>

        {/* WhatsApp CTA */}
        <div style={styles.whatsappCta}>
          <a
            href="https://wa.me/6281288198909?text=Halo%20pak,%20mau%20pesan%20apakah%20bisa?"
            target="_blank"
            rel="noreferrer"
            style={styles.whatsappButton}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#128C7E';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#25D366';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)';
            }}
          >
            <i className="fab fa-whatsapp" style={styles.whatsappIcon}></i>
            <div style={styles.textWrapper}>
              <div style={styles.subtitle}>Chat dengan kami di</div>
              <div style={styles.title}>WhatsApp</div>
            </div>
            <i className="fas fa-arrow-right" style={{ marginLeft: 'auto', fontSize: '1rem' }}></i>
          </a>
        </div>

        {/* Social Media */}
        <div style={styles.socialSection}>
          <h3 style={styles.socialTitle}>Ikuti Kami di Sosial Media</h3>
          <div style={styles.socialIcons}>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              style={{...styles.socialIcon, ...styles.socialIconInsta, cursor: 'pointer'}}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(131, 58, 180, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="fab fa-instagram" style={styles.socialIconI}></i>
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              style={{...styles.socialIcon, ...styles.socialIconFb, cursor: 'pointer'}}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(24, 119, 242, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="fab fa-facebook-f" style={styles.socialIconI}></i>
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              style={{...styles.socialIcon, ...styles.socialIconTiktok, cursor: 'pointer'}}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="fab fa-tiktok" style={styles.socialIconI}></i>
            </a>
          </div>
          
          <div style={styles.phoneInfo}>
            <p>
              Atau hubungi kami di{' '}
              <a 
                href="tel:+6281288198909" 
                style={styles.phoneLink}
                onMouseOver={(e) => e.currentTarget.style.color = 'rgb(165, 120, 78)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'rgb(75, 54, 25)'}
              >
                +62 812-8819-8909
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
