import styles from './FrontCard.module.css'

export const FrontCard = ({number,name,date}) => {
  function addSpaceEvery4Characters(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str[i];
        if ((i + 1) % 4 === 0) {
            result += ' ';
        }
    }
    return result.trim();
}
  return (
    <div className={styles.container}>
        <div className={styles.circles}>
          <div className={styles.WhiteCircle}></div>
          <div className={styles.HollowCircle}></div>
        </div>
        <div className={styles.cardnumberdiv}>
          <div className={styles.cardnumber}>{addSpaceEvery4Characters(number)}</div>
        </div>
        <div className={styles.cardnamedate}>
          <div className={styles.cardname}>{name}</div>
          <div className={styles.carddate}>{date}</div>
        </div>
    </div>
  )
}
