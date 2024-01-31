import React from 'react'
import styles from './Core.module.css'
import  DesktopImage from '../assets/image-web-3-desktop.jpg'
import MobileImage from '../assets/image-web-3-mobile.jpg'
export const Core = () => {
  return (
    <div className={styles.container}>

        <img src={DesktopImage} alt='web 3 image' className={styles.desktopimage}></img>
        <img src={MobileImage} alt='web 3 image' className={styles.mobileimage}></img>
        <div className={styles.content}>
            <div className={styles.heading}>The Bright Future of Web 3.0?</div>
            <div className={styles.smallcontent}>
                <div >We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</div>
                <button>Read more</button>
            </div>
        </div>
    </div>
  )
}

