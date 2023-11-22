"use client"

import React, { use } from 'react'
import styles from "../ProductsSec/productSec.module.css"
import Link from 'next/link'
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import KitchenIcon from '@mui/icons-material/Kitchen';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function ProductsSec() {
  useEffect(() => {
   AOS.init({
     easing: "ease-out-cubic",
     once: true,
     offset: 100,
   });
 }, []);
  return (
    <section className={styles.productsArea}>

      <div className={styles.imgArea}>
        <div className="container" data-aos="zoom-in">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              <div className={styles.infoArea}>
                <span className={styles.littleTitle}>
                  About Us
                </span>
                <h2 className={styles.title}>
                  We Believe in Working
                  Accredited Farmers
                </h2>

                <p className={styles.desc}>
                  Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>

                <div className={styles.detail}>
                  <span className={styles.icons}>
                    <MarkunreadMailboxIcon />
                  </span>
                  <div className={styles.detailInfo}>
                    <h4>Organic Foods Only</h4>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  </div>
                </div>

                <div className={styles.detail}>
                  <span className={styles.icons}>
                    <KitchenIcon />
                  </span>
                  <div className={styles.detailInfo}>
                    <h4>Quality Standards</h4>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  </div>
                </div>

                <div className={styles.detailbut}>
                  <Link className={styles.link} href="/">Shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default ProductsSec