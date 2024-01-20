import React from 'react'
import { InputForm } from './InputForm'
import desktopsignup from '../images/illustration-sign-up-desktop.svg'
import mobilesignup from '../images/illustration-sign-up-mobile.svg'
import BulletPoints from './BulletPoints'
import {   useState } from 'react'
import './Home.css'
export const Home = ({updatemail}) => {
  const [points,setPoints]=useState([
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more! "
  ])

  const showpoints=()=>{
    return points.map((point,index)=>{
      return <BulletPoints key={index} point={point}></BulletPoints>
    })
  }

  return (
    <div className='container'>
        <div className='content'>
            <img src={mobilesignup} alt='mobilesignup' className='mobilesignup'></img>
            <h1 className='heading'>Stay updated!</h1>
            <h3 className='smallheading'>Join 60,000+ product managers receiving monthly updates on:</h3>
            {showpoints()}
            <InputForm updatemail={updatemail}></InputForm>
        </div>
        <img src={desktopsignup} alt='desktopsignup' className='desktopsignup'></img>
    </div>
  )
}
