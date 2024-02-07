import React, { useEffect, useState } from 'react'
import styles from './Right.module.css'
import {useNavigate} from 'react-router-dom'
export const Right = ({setCardNumber,setCardName,setDate,setCvv}) => {
 
  const [cardnameerror,setCardNameError]=useState({error:true,message:"no error",input:""})
  const [cardnumbererror,setCardNumberError]=useState({error:true,message:"no error",input:""})
  const [expdatemmerror,setExpDateMMError]=useState({error:true,message:"no error",input:""})
  const [yyerror,setYYError]=useState({error:true,message:"no error",input:""})
  const [cvcerror,setCvcError]=useState({error:true,message:"no error",input:""})
  useEffect(()=>{
    if(expdatemmerror.input!="" && yyerror.input!=""){
      setDate(expdatemmerror.input+"/"+yyerror.input)
    }
  },[expdatemmerror,yyerror])
  const navigate=useNavigate()
  
 
  return (
    <div className={styles.container}>
      <div className={styles.minicontainer}>
          <div className={styles.cardholdercontainer}>
              <label className={styles.cardholderlabel}>CARDHOLDER NAME</label>
              <input type='text' maxLength={20} className={cardnameerror.error ? `${styles.cardholderinput}` : `${styles.cardholderinputerror} ${styles.cardholderinput}`} onChange={(e)=>{setCardNameError({...cardnameerror,input:e.target.value});setCardName(e.target.value)}} value={cardnameerror.input} placeholder='vishal gandla'></input>
              <div className={cardnameerror.error ? styles.cardholdererror : styles.cardholdernoerror}>{cardnameerror.message} </div>
          </div>
          <div className={styles.cardnumbercontainer}>
              <label className={styles.cardnumberlabel}>CARD NUMBER</label>
              <input type='text' maxLength={20} className={cardnumbererror.error ? `${styles.cardnumberinput}` : `${styles.cardnumberinputerror} ${styles.cardnumberinput}`} onChange={(e)=>{setCardNumberError({...cardnumbererror,input:e.target.value});setCardNumber(e.target.value)}} value={cardnumbererror.input} placeholder='9123 6388 2482 7638'></input>
              <div className={cardnumbererror.error ? styles.cardnumbererror : styles.cardnumbernoerror}>{cardnumbererror.message} </div>
          </div>
          
          <div className={styles.singlebandinput}>
              <div className={styles.singlebandinput1}>
                  <label>EXP.MM</label>
                  <input type='text' maxLength={2} className={expdatemmerror.error ? `${styles.expdateinput}` : `${styles.expdateinputerror} ${styles.expdateinput}`} onChange={(e)=>{setExpDateMMError({...expdatemmerror,input:e.target.value})}} value={expdatemmerror.input} placeholder='MM'></input>
                  <div className={expdatemmerror.error ? styles.expdateerror : styles.expdatenoerror}>{expdatemmerror.message}</div>
              </div>
              <div className={styles.singlebandinput2}>
                  <label>EXP.YY</label>
                  <input type='text' maxLength={2} className={yyerror.error ? `${styles.mm_yy}` : `${styles.mm_yyinputerror} ${styles.mm_yy}`} onChange={(e)=>{setYYError({...yyerror,input:e.target.value})}} value={yyerror.input} placeholder='YY'></input>
                  <div className={yyerror.error ? styles.mm_yyerror : styles.mm_yynoerror}>{yyerror.message}</div>
              </div>
              <div className={styles.singlebandinput3}>
                  <label>cvc</label>
                  <input type='text' maxLength={3} className={cvcerror.error ? `${styles.cvc}` : `${styles.cvcinputerror} ${styles.cvc}`} onChange={(e)=>{setCvcError({...cvcerror,input:e.target.value});setCvv(e.target.value)}} value={cvcerror.input} placeholder='e.g. 123'></input>
                  <div className={cvcerror.error ? styles.cvcerror : styles.cvcnoerror}>{cvcerror.message}</div>
              </div>
          </div>
          <button onClick={()=>{validateForm(navigate,cardnameerror,setCardNameError,cardnumbererror,setCardNumberError,expdatemmerror,setExpDateMMError,yyerror,setYYError,cvcerror,setCvcError)}} className={styles.confirmbutton}>Confirm</button>
      </div>
        
    </div>
  )
}
const validateForm = (navigate, cardnameerror, setCardNameError, cardnumbererror, setCardNumberError, expdatemmerror, setExpDateMMError, yyerror, setYYError, cvcerror, setCvcError) => {

  const cardNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const cardNumberRegex = /^\d{12,19}$/;
  const expDateMMRegex = /^(0[1-9]|1[0-2])$/;
  const cvcRegex = /^\d{3,4}$/;
  const yyRegex =/^\d{2}$/; 
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


  if (!expDateMMRegex.test(expdatemmerror.input)) {
    setExpDateMMError({ error: false, message: "Invalid expiration date",input:expdatemmerror.input });
    isValid = false;
  }
  else{
    setExpDateMMError({ error: true, message: "Invalid expiration date",input:expdatemmerror.input });
  }

  if (!yyRegex.test(yyerror.input)) {
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

