import styles from './FrontCard.module.css'

export const FrontCard = ({number,name,date}) => {
  return (
    <div className={styles.container}>
        <div className={styles.WhiteCircle}></div>
        <div className={styles.HollowCircle}></div>
        {/* <img src={frontcard} alt='images' className={styles.frontimage}></img> */}
        

        <div className={styles.cardnumber}>{number}</div>
        <div className={styles.cardname}>{name}</div>
        <div className={styles.carddate}>{date}</div>
    </div>
  )
}
