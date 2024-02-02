import styles from './Left.module.css'
import desktopbackgroundimage from '../images/bg-main-desktop.png'
import mobilebackgroundimage from '../images/bg-main-mobile.png'

export const Left = () => {
  return (
    <div className={styles.container}>
        <img src={desktopbackgroundimage} alt='desktop image' className={styles.desktopimage}></img>
        <img src={mobilebackgroundimage} alt='mobile image' className={styles.mobileimage}></img>
    </div>
  )
}
