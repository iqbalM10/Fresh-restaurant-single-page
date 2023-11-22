"use client"
import React from 'react'
import styles from '../FirstSection/firstsec.module.css'
import Image from 'next/image'
import img2 from "/public/images/photos.webp"
import Link from 'next/link'


function FirstSec() {

  return (
    <section className={styles.firstSec}>
        <div className={styles.container}>
            <div className={styles.backImg}>

         <div
         data-aos="fade-right"
         className={styles.info}
                >
                <p className={styles.desc} >100% Natural Food</p>
            <h2 className={styles.title}>Choose the best <br />healthier way <br />of life</h2>
<Link className={styles.link} href='/'>
<p className={styles.butdesc} >Explore now</p>

</Link>
                </div>

            </div>
       
        </div>
    </section>
  )
}

export default FirstSec