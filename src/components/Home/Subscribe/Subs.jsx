import Link from 'next/link'
import React from 'react'
import styles from "../Subscribe/subs.module.css"

function Subs() {
  return (
    <section className={styles.subscribe}>
        <div className={styles.container}>
        <div className={styles.contentArea}>
        <div className={styles.leftArea}>
        <h1 className={styles.title}>Subscribe to <br /> our Newsletter </h1>
        </div>
        <div className={styles.rightArea}>
       <input className={styles.input} type="search" name="" id="" placeholder='Your Email Adress' />
       <Link className={styles.link} href="/">Subscribe</Link>
        </div>
        
        </div>
        </div>
    </section>
  )
}

export default Subs