
import styles from './ThankYou.module.css'
import { useNavigate } from 'react-router-dom'
import tickmark from '../images/icon-complete.svg'

export const ThankYou = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.minicontainer}>
        <img src={tickmark} alt='image not found' className={styles.tickmark}></img>
          <div className={styles.thankyou}>ThankYou</div>
          <div className={styles.informativetext}>We have added your card details</div>
          <button onClick={()=>{navigate("/")}} className={styles.continuebutton}>Continue</button>
      </div>
      
    </div>
  )
}
