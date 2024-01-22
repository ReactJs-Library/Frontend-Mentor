import React from 'react'

export const AgeOutput = ({years,months,days}) => {
    
  return (
    <div>
        <div>{years}years</div>
        <div>{months}months</div>
        <div>{days}days</div>
    </div>
  )
}
