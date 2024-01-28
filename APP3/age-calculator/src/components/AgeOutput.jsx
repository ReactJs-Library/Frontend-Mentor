import React from 'react'
import './AgeOutput.css'
export const AgeOutput = ({years,months,days}) => {
    
  return (
    <div className='MainContainer'>
        <div ><span className='ageanswer'>{years}</span> <span className='agetext'>years</span></div>
        <div><span className='ageanswer'>{months}</span> <span className='agetext'>months</span></div>
        <div><span className='ageanswer'>{days}</span> <span className='agetext'>days</span></div>
    </div>
  )
}
