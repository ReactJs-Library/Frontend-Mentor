import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import './InputForm.css'
export const InputForm = ({updatemail}) => {
  const [currmail,setCurrMail]=useState("")
  return (
   
        <form action='/success' className='form' onSubmit={(e)=>{e.preventDefault();updatemail(currmail)}}>
            <div >
                <label>Email address</label><br/>
                <input type='email' placeholder='email@company.com' pattern=".+@.+\.com"  required className='email' onChange={(e)=>{setCurrMail(e.target.value)}} value={currmail}></input>
            </div>
            <input type='submit' className='submit' value="Subscribe to monthly newsletter" ></input>
        </form>

  )
}
