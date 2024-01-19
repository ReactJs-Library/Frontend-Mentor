import React from 'react'
import plus from '../Assets/icon-plus.svg'
import minus from '../Assets/icon-minus.svg'

import './Question.css'
export const Question = ({QApair,updateFaq}) => {
  
  return (
  
    <div className='qapair'>
        <h3 className='question'>{QApair.question} {QApair.show ? <img src={minus} alt='minus' onClick={()=>{updateFaq(QApair.id,false)}} className='sign'/>: <img src={plus} alt='plus' onClick={()=>{updateFaq(QApair.id,true)}} className='sign'/> }</h3>

        {QApair.show ? <p className='answer'>{QApair.answer}</p> : <></>}
        
        
    </div>
    
  )
}
