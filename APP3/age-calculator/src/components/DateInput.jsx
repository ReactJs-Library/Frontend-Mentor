import React from 'react'
import arrow from '../images/icon-arrow.svg'
export const DateInput = () => {
  return (
    <div>
        <label>DAY</label>
        <input type='number'/>

        <label>MONTH</label>
        <input type='number'/>

        <label>YEAR</label>
        <input type='number'/>

        <img src={arrow} alt='arrowimg' className='arrowsvg'></img>
    </div>
  )
}
