import styles from './FrontCard.module.css'

export const FrontCard = ({number,name,date}) => {
  return (
    <div className={styles.container}>
        <div className={styles.circles}>
          <div className={styles.WhiteCircle}></div>
          <div className={styles.HollowCircle}></div>
        </div>
        <div className={styles.cardnumberdiv}>
          <div className={styles.cardnumber}>{number}</div>
        </div>
        <div className={styles.cardnamedate}>
          <div className={styles.cardname}>{name}</div>
          <div className={styles.carddate}>{date}</div>
        </div>
    </div>
  )
}
