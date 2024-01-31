import React, { useCallback, useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/logo.svg'
import burgermenu from '../assets/icon-menu.svg'
import close from '../assets/icon-menu-close.svg'
export const Navbar = () => {
    const [showmobilenavbar,setShowMobileNavbar]=useState(false)
    
  return (
    <div className={styles.container}>
        <img src={logo} alt='logo' className={styles.logo}/>
        <img src={burgermenu} alt='burgermenu' className={styles.burgermenu} onClick={()=>{showmenu(setShowMobileNavbar)}}></img>
        <nav className={styles.navdesktop}>
            <ul className={styles.navbar}>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
        <nav className={showmobilenavbar ? `${styles.navmobilecommon} ${styles.navmobileon}` : `${styles.navmobilecommon} ${styles.navmobileoff}`}>
            <img src={close} alt='close' onClick={()=>{dontshowmenu(setShowMobileNavbar)}} className={styles.closebutton}></img>
            <ul className={styles.navmobilebar}>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
        <div className={showmobilenavbar ? `${styles.navmobileon_shadow}` : `${styles.navmobileoff_shadow}` } >
        </div>
    </div>
  )
}
const dontshowmenu=(setShowMobileNavbar)=>{
    setShowMobileNavbar(false)
}
const showmenu=(setShowMobileNavbar)=>{
setShowMobileNavbar(true)
}
