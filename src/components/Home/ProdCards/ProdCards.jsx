
import React from 'react'
import styles from "../ProdCards/prodCards.module.css"

function ProdCards({cards}) {
  
  return (
  
    <section className={styles.prodCards}>
    <div className={styles.cardArea}>
        <div className={styles.imgArea}>
            <img className={styles.imgUrl} src={cards.imgUrl} alt="" />
        </div>
       
        <div className={styles.contentArea}>
            <h3 className={styles.desc}>{cards.desc}</h3>
            <div className={styles.borderArea}></div>
            <span className={styles.moneyArea}>
               <p className={styles.moneyOld}>${cards.oldPrice}</p>
               <p className={styles.moneyNews}>${cards.newPrice}</p> 
            </span>
        </div>
    </div>
       </section>
  )
}

export default ProdCards