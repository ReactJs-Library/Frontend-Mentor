import React, { useState } from 'react'
import arrow from '../images/icon-arrow.svg'
export const DateInput = ({calculateage}) => {
  const [days,setDays]=useState("")
  const [months,setMonths]=useState("")
  const [years,setYears]=useState("")
  return (
    <div>
        <label>DAY</label>
        <input type='number' onChange={(e)=>{setDays(e.target.value)}} value={days}/>

        <label>MONTH</label>
        <input type='number' onChange={(e)=>{setMonths(e.target.value)}} value={months}/>

        <label>YEAR</label>
        <input type='number' onChange={(e)=>{setYears(e.target.value)}} value={years}/>

        <img src={arrow} alt='arrowimg' className='arrowsvg' onClick={()=>{ProcessDate(days,months,years,calculateage)}}></img>
    </div>
  )
}

function ProcessDate(days,months,years,calculateage){
if(days>31 || days<1){

}
else if(months>12 || months<1){
  
}
else if(new Date().getFullYear()<=years){

}
else{
  if(isValidDate(days,months,years)){
    calculateage(days,months,years)
  }
  else{
    
  }
}
}
function isValidDate(day, month, year) {
  // Check if the provided values are numbers
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  // Convert input to integers
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  // Check if the year is a valid 4-digit number
  if (year < 1000 || year > 9999) {
    return false;
  }

  // Check if the month is in the valid range (1 to 12)
  if (month < 1 || month > 12) {
    return false;
  }

  // Check if the day is in the valid range for the given month
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return false;
  }

  // If all checks pass, it's a valid date
  return true;
}
