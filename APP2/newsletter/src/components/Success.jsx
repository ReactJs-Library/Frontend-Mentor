import React, { useEffect } from 'react'
import './Success.css'
import successicon from '../images/icon-success.svg'
import {Link} from 'react-router-dom'
const Success = ({email}) => {
  
  return (

      <div className='smallcontainer'>
        <span className='top-container'>
        <img src={successicon} alt='successicon' className='successicon'></img>
        <h1 className='smallheader'>Thanks for subscribing!</h1>
        <p className='smallparagraph'>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
        </span>
        <button className='smallbutton'><Link to="/"> Dismiss message</Link></button>
      </div>
  )
}

export default Success