'use client'
import React, { useContext } from 'react'
import ProdCards from '../ProdCards/ProdCards'
import { CardShop } from '@/context/CardContext'
import styles from "../CardArea/cardArea.module.css"

function CardArea() {
    const {card, setCard} = useContext(CardShop)
  return (
   <div className={styles.cardArea}>
   {card.map(cards =>(
    <ProdCards cards={cards} key={cards.id} />
   ))}
   </div>
  
  )
}

export default CardArea