import React from 'react'
import styles from "../Navbar/navbar.module.css"
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import img1 from '/public/images/Logo.png'
import Image from 'next/image';
function Navbar() {
  return (
   <section className={styles.navbarArea}>
   <div className={styles.container}>
    <div className={styles.logo}> 
  <Image src={img1}
  width={36}
  height={53}
  />
   <p className={styles.logos}>Organich</p>
    </div>
    <div className={styles.middleSide}>
        <ul className={styles.ul}>
            <li><Link className={styles.link} href="/">Home</Link></li>
            <li><Link className={styles.link} href="/about">About</Link></li>
            <li><Link className={styles.link} href="/pages">Pages</Link></li>
            <li><Link className={styles.link} href="/shop">Shop</Link></li>
            <li><Link className={styles.link} href="/projects">Projects</Link></li>
            <li><Link className={styles.link} href='/news'>News</Link></li>
        </ul>
    </div>
    <div className={styles.rightSide}>
        <span className={styles.search}><SearchIcon/></span>
        <div className={styles.addCart}>
            <span className={styles.shop}><ShoppingCartIcon/></span>
            <p className={styles.num}>Cart(0)</p>
        </div>
    </div>
    <div className={styles.menuIcon}>
        <MenuIcon/>
    </div>
   </div>
   </section>
  )
}

export default Navbar