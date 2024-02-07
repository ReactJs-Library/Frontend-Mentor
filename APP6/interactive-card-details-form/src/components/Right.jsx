import React, { useEffect, useState } from 'react'
import styles from './Right.module.css'
import {useNavigate} from 'react-router-dom'
export const Right = () => {
  const [cardnameerror,setCardNameError]=useState({error:true,message:"no error"})
  const [cardnumbererror,setCardNumberError]=useState({error:true,message:"no error"})
  const [expdateerror,setExpDateError]=useState({error:true,message:"no error"})
  const [mm_yyerror,setMMYYError]=useState({error:true,message:"no error"})
  const [cvcerror,setCvcError]=useState({error:true,message:"no error"})
 
    const navigate=useNavigate()
  
 
  return (
    <div className={styles.container}>
      <div className={styles.minicontainer}>
          <div className={styles.cardholdercontainer}>
              <label className={styles.cardholderlabel}>CARDHOLDER NAME</label>
              <input type='text' max={32} className={styles.cardholderinput}></input>
              <div className={cardnameerror.error ? styles.cardholdererror : styles.cardholdernoerror}>{cardnameerror.message} </div>
          </div>
          <div className={styles.cardnumbercontainer}>
              <label className={styles.cardnumberlabel}>CARD NUMBER</label>
              <input type='text' max={32} className={styles.cardnumberinput}></input>
              <div className={cardnumbererror.error ? styles.cardnumbererror : styles.cardnumbernoerror}>{cardnumbererror.message} </div>
          </div>
          
          <div className={styles.singlebandinput}>
              <div className={styles.singlebandinput1}>
                  <label>EXP.DATE</label>
                  <input type='text' className={styles.expdateinput}></input>
                  <div className={expdateerror.error ? styles.expdateerror : styles.expdatenoerror}>{expdateerror.message}</div>
              </div>
              <div className={styles.singlebandinput2}>
                  <label>(MM/YY)</label>
                  <input type='text' className={styles.mm_yy}></input>
                  <div className={mm_yyerror.error ? styles.mm_yyerror : styles.mm_yynoerror}>{mm_yyerror.message}</div>
              </div>
              <div className={styles.singlebandinput3}>
                  <label>cvc</label>
                  <input type='text' className={styles.cvc}></input>
                  <div className={cvcerror.error ? styles.cvcerror : styles.cvcnoerror}>{cvcerror.message}</div>
              </div>
          </div>

          <button onClick={()=>{navigate("/submit")}} className={styles.confirmbutton}>Confirm</button>
      </div>
        
    </div>
  )
}
