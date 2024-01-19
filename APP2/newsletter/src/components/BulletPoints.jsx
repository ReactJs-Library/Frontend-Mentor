import React from 'react'
import iconlist from '../images/icon-list.svg'
import './BulletPoints.css'

const BulletPoints = ({point}) => {
  return (
    <div className='point'>
        <img src={iconlist} alt='tick' className='tick'></img>
        <p>{point}</p>
    </div>
  )
}

export default BulletPoints