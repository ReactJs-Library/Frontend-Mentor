import React from 'react'

import img from '../images/avatar-angela-gray.webp'
export const EachNotification = ({notification}) => {
   
  return (
    <div>
        <img src={"/src/"+notification.profileimage} alt="img not found "></img>
        {notification.name}
    </div>
  )
}
