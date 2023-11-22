"use client"
import React, { createContext, useEffect, useState } from 'react'

export const CardShop = createContext()

const CardMaterial = ({children}) =>{
    const [card,setCard] = useState([])

    const value = {card,setCard}
    useEffect(() =>{
        getCards()
    },[])

    const getCards = async() =>{
        const req = await fetch('https://vercel-psi-coral.vercel.app/vegetables')
         const res = await req.json()

         setCard(res)
    }

   return(
    <CardShop.Provider value={value}>
    {children}
        </CardShop.Provider>
   )
}

export default CardMaterial