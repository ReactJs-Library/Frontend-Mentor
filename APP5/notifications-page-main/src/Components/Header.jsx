import React from 'react'
import styles from './Header.module.css'

export const Header = ({notificationcount}) => {
  return (
    <div className={styles.container}>
        <div>Notification</div>
        <div>{notificationcount}</div>
        <div>Mark all as read</div>
    </div>
  )
}
