import React from 'react'
import { InputForm } from './InputForm'
import desktopsignup from '../images/illustration-sign-up-desktop.svg'
import mobilesignup from '../images/illustration-sign-up-mobile.svg'
import './Home.css'
export const Home = ({showpoints}) => {
  return (
    <div className='container'>
        <div className='content'>
            <img src={mobilesignup} alt='mobilesignup' className='mobilesignup'></img>
            <h1>Stay updated!</h1>
            <h3>Join 60,000+ product managers receiving monthly updates on:</h3>
            {showpoints()}
            <InputForm></InputForm>
        </div>
        <img src={desktopsignup} alt='desktopsignup' className='desktopsignup'></img>
        
    </div>
  )
}
