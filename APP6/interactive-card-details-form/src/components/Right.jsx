import React from 'react'
import styles from './Right.module.css'
export const Right = () => {

  return (
    <div className={styles.container}>
      <div className={styles.minicontainer}>
          <div className={styles.cardholdercontainer}>
              <label className={styles.cardholderlabel}>CARDHOLDER NAME</label>
              <input type='text' max={32} className={styles.cardholderinput}></input>
              <div className={styles.cardholdererror}>asdf </div>
          </div>
          <div className={styles.cardnumbercontainer}>
              <label className={styles.cardnumberlabel}>CARD NUMBER</label>
              <input type='text' max={32} className={styles.cardnumberinput}></input>
              <div className={styles.cardnumberererror}>asdf </div>
          </div>
          <label></label>
          <input type='text' ></input>
          <div>
              <label>EXP.DATE</label>
              <input type='text'></input>
              <label>(MM/YY)</label>
              <input type='text'></input>
              <label>cvc</label>
              <input type='text'></input>
          </div>
          <button >Confirm</button>
      </div>
        
    </div>
  )
}
