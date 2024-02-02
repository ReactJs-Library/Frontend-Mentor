import React from 'react'

import styles from './EachNotification.module.css'

export const EachNotification = ({notification}) => {
   
  return (
    <div className={notification.read ?  `${styles.container}` : `${styles.container} ${styles.addcolor}`}>
        <div>
            <img src={"/src/"+notification.profileimage} alt="img not found "></img>
            <div>{notification.name}</div>
            <div>{notification.conent}</div>
            {notification.messageOrLinkOrImage.haslink ? <div>{notification.link}</div> : <></>}
            <div>{notification.time}</div>
            {notification.messageOrLinkOrImage.hasmessage ? <div>{notification.message}</div> : <></>}
        </div>
        {notification.messageOrLinkOrImage.hasimage ? <img src={"/src/"+notification.image} alt="img not found "></img> : <></>}
    </div>
  )
}
