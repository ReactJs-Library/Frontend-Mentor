import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/logo.svg'
import burgermenu from '../assets/icon-menu.svg'
export const Navbar = () => {
  return (
    <div className={styles.container}>
        <img src={logo} alt='logo' className={styles.logo}/>
        <img src={burgermenu} alt='burgermenu' className={styles.burgermenu} onClick={showmenu}></img>
        <nav className={styles.navdesktop}>
            <ul className={styles.navbar}>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
        <nav className={styles.navmobile}>
            <ul className={styles.navmobilebar}>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
    </div>
  )
}
const showmenu=()=>{
console.log("menu called")
}
