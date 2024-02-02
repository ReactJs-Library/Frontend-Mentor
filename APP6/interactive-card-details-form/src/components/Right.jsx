import React from 'react'
import styles from './Right.module.css'
export const Right = () => {

  return (
    <div className={styles.container}>
        <label>CARDHOLDER NAME</label>
        <input type='text' max={32}></input>
        <label>CARD NUMBER</label>
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
  )
}
