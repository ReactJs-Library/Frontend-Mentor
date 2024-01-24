import React, { useState } from 'react'
import arrow from '../images/icon-arrow.svg'
import './DateInput.css'
export const DateInput = ({calculateage}) => {
  const [days,setDays]=useState("")
  const [months,setMonths]=useState("")
  const [years,setYears]=useState("")

  const [dayerror,setDayError]=useState("This field is required")
  const [montherror,setMonthError]=useState("for months")
  const [yearerror,setYearError]=useState("for years")
  return (
    <div>
        <div className='input-div'>
          <div className='miniconatiner'>
            <label>DAY</label>
            <input type='text' onChange={(e)=>{setDays(e.target.value)}} value={days} placeholder='DD'/>
            <div className='error' id="errordate">{dayerror}</div>
          </div>
          <div className='miniconatiner'>
            <label>MONTH</label>
            <input type='text' onChange={(e)=>{setMonths(e.target.value)}} value={months} placeholder='MM'/>
            <div className='error' id="errormonth">{montherror}</div>
          </div>
          <div className='miniconatiner'>
            <label>YEAR</label>
            <input type='text' onChange={(e)=>{setYears(e.target.value)}} value={years} placeholder='YYYY'/>
            <div className='error' id="erroryear">{yearerror}</div>
          </div>
        </div>
        <div className='divider'>
        <div className='line'></div>
        <img src={arrow} alt='arrowimg' className='arrowsvg' onClick={()=>{ProcessDate(days,months,years,calculateage,setDayError,setMonthError,setYearError)}}></img>
        </div>
    </div>
  )
}

function ProcessDate(days,months,years,calculateage,setDayError,setMonthError,setYearError){
if(days=="")
{
  setDayError("This field is required")
}
if(months==""){
  setMonthError("This field is required")
}
if(years==""){
  setYearError("This field is required")
}
if(!Number.isInteger(parseInt(days, 10)) || parseInt(days)>31 || parseInt(days)<1){
  setDayError("not a valid day")
}
if(!Number.isInteger(parseInt(months, 10)) || parseInt(months)>12 || parseInt(months)<1){
  setMonthError("not a valid month")
}
if(!Number.isInteger(parseInt(years, 10)) || new Date().getFullYear()<=parseInt(years)){
  setYearError("not a valid date")
}

if(isValidDate(days,months,years)){
  calculateage(days,months,years)
}
else{
  setDayError("not a valid date")
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
