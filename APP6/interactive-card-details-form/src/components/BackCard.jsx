import React from 'react'
import styles from './BackCard.module.css'

export const BackCard = ({cvv}) => {
  return (
    <div className={styles.container}>
        <div className={styles.cvvalighner}>
          <div className={styles.cvv}>{cvv}</div>
        </div>
    </div>
  )
}
