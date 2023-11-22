"use client"
import React from 'react'
import '../InfoCards/infocards.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function InfoCards() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        });
      }, []);
  return (
<div className="container" data-aos="zoom-in-up">
    <div className="card__container">
        <article className="card__article">
            <img  className='card__img' src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />

            <div className="card__data">
                <span className="card__description">Vegetables,Fresh</span>
                <h2 className="card__title">Magnificent</h2>
                <a href="#" className="card__button">Read More</a>
            </div>
        </article>
        <article className="card__article">
            <img className='card__img' src="https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhYmxlc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="image" />

            <div className="card__data">
                <span className="card__description">Vegetables,Fresh</span>
                <h2 className="card__title">Magnificent</h2>
                <a href="#" className="card__button">Read More</a>
            </div>
        </article>

        <article className="card__article">
            <img  className='card__img' src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />

            <div className="card__data">
                <span className="card__description">Vegetables,Fresh</span>
                <h2 className="card__title">Magnificent</h2>
                <a href="#" className="card__button">Read More</a>
            </div>
        </article>
        
    </div>
</div>
  )
}

export default InfoCards