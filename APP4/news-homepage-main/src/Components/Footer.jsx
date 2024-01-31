import React from 'react'
import styles from './Footer.module.css'
import Retropc from '../assets/image-retro-pcs.jpg'
import toplaptop from '../assets/image-top-laptops.jpg'
import gaminggrowth from '../assets/image-gaming-growth.jpg'
export const Footer = () => {
  return (
    <div className={styles.container}>

        <div className={styles.minicontainer}>
            <img src={Retropc} alt='retropc'></img>
            <div className={styles.textcontainer}>
                <div className={styles.text1}>01</div>
                <div className={styles.text2}>Reviving Retro PCs</div>
                <div className={styles.text3}>What happens when old PCs are given modern upgrades? </div>
            </div>
            
        </div>

        <div className={styles.minicontainer}>
            <img src={toplaptop} alt='retropc'></img>
            <div className={styles.textcontainer}>
                <div className={styles.text1}>02</div>
                <div className={styles.text2}>Top 10 Laptops of 2022</div>
                <div className={styles.text3}>Our best picks for various needs and budgets. </div>
            </div>
        </div>

        <div className={styles.minicontainer}>
            <img src={gaminggrowth} alt='retropc'></img>
            <div className={styles.textcontainer}>
                <div className={styles.text1}>03</div>
                <div className={styles.text2}>The Growth of Gaming</div>
                <div className={styles.text3}>How the pandemic has sparked fresh opportunities. </div>
            </div>
        </div>

    </div>
  )
}
