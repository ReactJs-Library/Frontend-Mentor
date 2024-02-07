import React, { useEffect, useState } from 'react'
import styles from './Right.module.css'
import {useNavigate} from 'react-router-dom'
export const Right = () => {
  const [cardnameerror,setCardNameError]=useState({error:true,message:"no error",input:""})
  const [cardnumbererror,setCardNumberError]=useState({error:true,message:"no error",input:""})
  const [expdatemmerror,setExpDateMMError]=useState({error:true,message:"no error",input:""})
  const [yyerror,setYYError]=useState({error:true,message:"no error",input:""})
  const [cvcerror,setCvcError]=useState({error:true,message:"no error",input:""})
 
    const navigate=useNavigate()
  
 
  return (
    <div className={styles.container}>
      <div className={styles.minicontainer}>
          <div className={styles.cardholdercontainer}>
              <label className={styles.cardholderlabel}>CARDHOLDER NAME</label>
              <input type='text' max={32} className={styles.cardholderinput} onChange={(e)=>{setCardNameError({...cardnameerror,input:e.target.value})}} value={cardnameerror.input}></input>
              <div className={cardnameerror.error ? styles.cardholdererror : styles.cardholdernoerror}>{cardnameerror.message} </div>
          </div>
          <div className={styles.cardnumbercontainer}>
              <label className={styles.cardnumberlabel}>CARD NUMBER</label>
              <input type='text' max={32} className={styles.cardnumberinput} onChange={(e)=>{setCardNumberError({...cardnumbererror,input:e.target.value})}} value={cardnumbererror.input}></input>
              <div className={cardnumbererror.error ? styles.cardnumbererror : styles.cardnumbernoerror}>{cardnumbererror.message} </div>
          </div>
          
          <div className={styles.singlebandinput}>
              <div className={styles.singlebandinput1}>
                  <label>EXP.MM</label>
                  <input type='text' className={styles.expdateinput} onChange={(e)=>{setExpDateMMError({...expdatemmerror,input:e.target.value})}} value={expdatemmerror.input}></input>
                  <div className={expdatemmerror.error ? styles.expdateerror : styles.expdatenoerror}>{expdatemmerror.message}</div>
              </div>
              <div className={styles.singlebandinput2}>
                  <label>EXP.YY</label>
                  <input type='text' className={styles.mm_yy} onChange={(e)=>{setYYError({...yyerror,input:e.target.value})}} value={yyerror.input}></input>
                  <div className={yyerror.error ? styles.mm_yyerror : styles.mm_yynoerror}>{yyerror.message}</div>
              </div>
              <div className={styles.singlebandinput3}>
                  <label>cvc</label>
                  <input type='text' className={styles.cvc} onChange={(e)=>{setCvcError({...cvcerror,input:e.target.value})}} value={cvcerror.input}></input>
                  <div className={cvcerror.error ? styles.cvcerror : styles.cvcnoerror}>{cvcerror.message}</div>
              </div>
          </div>

          <button onClick={()=>{validateForm(navigate,cardnameerror,setCardNameError,cardnumbererror,setCardNumberError,expdatemmerror,setExpDateMMError,yyerror,setYYError,cvcerror,setCvcError)}} className={styles.confirmbutton}>Confirm</button>
      </div>
        
    </div>
  )
}
const validateForm = (navigate, cardnameerror, setCardNameError, cardnumbererror, setCardNumberError, expdatemmerror, setExpDateMMError, yyerror, setYYError, cvcerror, setCvcError) => {
  // Regular expressions for validation
  const cardNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const cardNumberRegex = /^\d{12,19}$/;
  const expDateRegex = /^(0[1-9]|1[0-2])$/;
  const cvcRegex = /^\d{3,4}$/;
  const mm_yyRegex =/^\d{2}$/; // MM/YY format

  

  // Validation logic
  let isValid = true;

  if (!cardNameRegex.test(cardnameerror.input)) {
    setCardNameError({ error: false, message: "Invalid card name" ,input:cardnameerror.input});
    isValid = false;
  }
  else{
    setCardNameError({ error: true, message: "Invalid card name" ,input:cardnameerror.input});
  }


  if (!cardNumberRegex.test(cardnumbererror.input)) {
    setCardNumberError({ error: false, message: "Invalid card number",input:cardnumbererror.input});
    isValid = false;
  }
  else{
    setCardNumberError({ error: true, message: "Invalid card number",input:cardnumbererror.input});
  }


  if (!expDateRegex.test(expdatemmerror.input)) {
    setExpDateMMError({ error: false, message: "Invalid expiration date",input:expdatemmerror.input });
    isValid = false;
  }
  else{
    setExpDateMMError({ error: true, message: "Invalid expiration date",input:expdatemmerror.input });
  }

  if (!mm_yyRegex.test(yyerror.input)) {
    setYYError({ error: false, message: "Invalid MM/YY format",input:yyerror.input });
    isValid = false;
  } else {
    setYYError({ error: true, message: "Invalid MM/YY format",input:yyerror.input });
  }

  if (!cvcRegex.test(cvcerror.input)) {
    setCvcError({ error: false, message: "Invalid CVV/CVC",input:cvcerror.input});
    isValid = false;
  }
  else{
    setCvcError({ error: true, message: "Invalid CVV/CVC",input:cvcerror.input });
  }

  if (isValid) {
    navigate("/submit");
  }
};

