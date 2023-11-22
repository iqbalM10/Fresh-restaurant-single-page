'use client'
import React from 'react'
import styles from "../CardSec/cardsec.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CardSec() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
   <section className={styles.cardArea}>
    <div className="container" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
       <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
            <div className={styles.cardSide}>
            <div className={styles.cardInfo}>
             <p className={styles.cardDesc}>Natural!!</p>
             <h2 className={styles.cardTitle}>
             Get Garden Fresh Fruits
             </h2>
             </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
            <div className={styles.cardSideRight}>
            <div className={styles.cardInfo}>
             <p className={styles.cardDesc}>Natural!!</p>
             <h2 className={styles.cardTitle}>
             Get Garden Fresh Fruits
             </h2>
             </div>
            </div>
        </div>
       </div>
    </div>
   </section>
  )
}

export default CardSec