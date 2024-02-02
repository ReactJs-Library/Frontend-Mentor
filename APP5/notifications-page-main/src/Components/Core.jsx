import React from 'react'
import { EachNotification } from './EachNotification'

export const Core = ({notifications}) => {
    const allnotifications=()=>{
        return notifications.map((notification)=>{
            return  <EachNotification key={notification.id} notification={notification}></EachNotification>
        })
    }
  return (
    <div>
        {allnotifications()}
    </div>
  )
}
