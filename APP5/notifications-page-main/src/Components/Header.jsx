import React from 'react'
import styles from './Header.module.css'

export const Header = ({notificationcount}) => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.Heading}>Notifications</div>
            <div className={styles.notification}>{notificationcount}</div>
        </div>
        
        <div className={styles.right}>Mark all as read</div>
    </div>
  )
}
