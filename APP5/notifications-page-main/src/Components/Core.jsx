import React from 'react'
import { EachNotification } from './EachNotification'
import styles from './Core.module.css'
export const Core = ({notifications}) => {
    const allnotifications=()=>{
        return notifications.map((notification)=>{
            return  <EachNotification key={notification.id} notification={notification}></EachNotification>
        })
    }
  return (
    <div className={styles.container}>
        {allnotifications()}
    </div>
  )
}
