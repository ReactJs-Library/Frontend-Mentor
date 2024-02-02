import React from 'react'

import styles from './EachNotification.module.css'

export const EachNotification = ({notification}) => {
   
  return (
    <div className={notification.read ?  `${styles.container}` : `${styles.container} ${styles.addcolor}`}>
        <div className={styles.containerofallcontent}>
        <img src={"/src/"+notification.profileimage} alt="img not found " className={styles.profileimage}></img>
            <div className={styles.minicontainer}>
                <div className={styles.textcontainer}>    
                    <span className={styles.name}>{notification.name}</span>
                    <span>{notification.conent}</span>
                    {notification.messageOrLinkOrImage.haslink ? <span className={styles.link}>{notification.link}</span> : <></>}
                    {notification.read ?   <></> : <div className={styles.reddot}></div>}
                </div>
                
                <div className={styles.notificationtime}>{notification.time}</div>
                {notification.messageOrLinkOrImage.hasmessage ? <div className={styles.message}>{notification.message}</div> : <></>}
            </div>
        </div>
        {notification.messageOrLinkOrImage.hasimage ? <img src={"/src/"+notification.image} alt="img not found " className={styles.image}></img> : <></>}
    </div>
  )
}
