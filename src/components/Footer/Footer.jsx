import React from 'react'
import styles from '../Footer/footer.module.css'

function Footer() {
  return (
 <section className={styles.footer}>
  <div className={styles.container}>
    <div className={styles.footerinfo}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.infoArea}>
         <h3 className={styles.titleInfo}>Phone</h3>
         <span className={styles.titleNum}>666 888 888</span>
        </div>
        <div className={styles.infoArea}>
         <h3 className={styles.titleInfo}> Adress</h3>
         <span className={styles.titleNum}>88 road, Broklyn street, USA</span>
        </div>
        <div className={styles.infoArea}>
         <h3 className={styles.titleInfo}>Email</h3>
         <span className={styles.titleNum}>needhelp@Organia.com</span>
        </div>
      </div>
    </div>
    <div className={styles.footerinfo}>
      <div className={styles.titlearea}>
        <img className={styles.logoimg} src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.b34e4a51.png&w=48&q=75" alt="" />
        <h2 className={styles.titleLogo}>Organick</h2>
      </div>
      <div className={styles.desc}>
        <p>Simply dummy text of the printing and typesetting industry.
Lorem Ipsum simply dummy text of the printing </p>
      </div>
      <div className={styles.logoArea}></div>
    </div>
    <div className={styles.footerinfo}>
      <div className={styles.titlearea}>
        <h2 className={styles.titlemain}>Utility Pages</h2>
      </div>
      <div className={styles.descInfoArea}>
      <p className={styles.descmain}>
          Style Guide
        </p>
        <p className={styles.descmain}>
          404 Not Found
        </p>
        <p className={styles.descmain}>
          Password Protected
        </p>
        <p className={styles.descmain}>
          Licences
        </p>
        <p className={styles.descmain}>
          Changelog
        </p>
      </div>
    </div>
  </div>
 </section>
 
  )
}

export default Footer