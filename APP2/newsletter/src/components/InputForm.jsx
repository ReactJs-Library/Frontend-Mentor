import React from 'react'
import './InputForm.css'
export const InputForm = () => {
  return (
   
        <form action='/success' className='form'>
            <div >
                <label>Email address</label><br/>
                <input type='email' placeholder='email@company.com' pattern=".+@.+\.com"  required className='email'></input>
            </div>
            <input type='submit' className='submit' value="Subscribe to monthly newsletter"></input>
        </form>

  )
}
