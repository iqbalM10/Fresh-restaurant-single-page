import React from 'react'
import styles from '../CategoriesTitle/cateTitle.module.css'

function CateTitle() {
  return (
    <section className={styles.cateTitle}>
        <div className={styles.Title}>
            <h3 className={styles.titleCate}>Categories</h3>
            <h1 className={styles.titleMain}>Our Products</h1>
        </div>
    </section>
  )
}

export default CateTitle