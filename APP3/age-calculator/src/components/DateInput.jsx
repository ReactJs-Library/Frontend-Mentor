import React, { useState } from 'react'
import arrow from '../images/icon-arrow.svg'
import './DateInput.css'
export const DateInput = ({calculateage}) => {
  const [days,setDays]=useState("")
  const [months,setMonths]=useState("")
  const [years,setYears]=useState("")
  return (
    <div>
        <div className='input-div'>
          <div className='miniconatiner days'>
            <label>DAY</label>
            <input type='text' onChange={(e)=>{setDays(e.target.value)}} value={days} placeholder='DD'/>
            <div className='error' id="errordate">for days</div>
          </div>
          <div className='miniconatiner months'>
            <label>MONTH</label>
            <input type='text' onChange={(e)=>{setMonths(e.target.value)}} value={months} placeholder='MM'/>
            <div className='error' id="errormonth">for months</div>
          </div>
          <div className='miniconatiner years'>
            <label>YEAR</label>
            <input type='text' onChange={(e)=>{setYears(e.target.value)}} value={years} placeholder='YYYY'/>
            <div className='error' id="erroryear">for years</div>
          </div>
        </div>
        <div className='divider'>
        <div className='line'></div>
        <img src={arrow} alt='arrowimg' className='arrowsvg' onClick={()=>{ProcessDate(days,months,years,calculateage)}}></img>
        </div>
    </div>
  )
}

function ProcessDate(days,months,years,calculateage){
if(days>31 || days<1){
  alert("not a valid day")
}
else if(months>12 || months<1){
  alert("not a valid month")
}
else if(new Date().getFullYear()<=years){
  alert("not a valid date")
}
else{
  if(isValidDate(days,months,years)){
    calculateage(days,months,years)
  }
  else{
    alert("not a valid date")
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
