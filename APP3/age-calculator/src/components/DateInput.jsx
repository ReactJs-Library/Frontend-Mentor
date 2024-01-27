import React, { useState } from 'react'
import arrow from '../images/icon-arrow.svg'
import './DateInput.css'
export const DateInput = ({calculateage}) => {
  const [days,setDays]=useState("")
  const [months,setMonths]=useState("")
  const [years,setYears]=useState("")

  const [dayerror,setDayError]=useState({inerrorstate:false,value:"for days"})
  const [montherror,setMonthError]=useState({inerrorstate:false,value:"for months"})
  const [yearerror,setYearError]=useState({inerrorstate:false,value:"for years"})
  return (
    <div>
        <div className='input-div'>
          <div className='miniconatiner'>
            <label className={dayerror.inerrorstate ? 'datelabel errorlabel': 'datelabel errorfreelabel'}>DAY</label>
            <input type='text' onChange={(e)=>{setDays(e.target.value)}} value={days} placeholder='DD' className={dayerror.inerrorstate ? 'dateinput errorinput': 'dateinput errorfreeinput'}/>
            <div className={dayerror.inerrorstate ? 'error': 'errorfree'} >{dayerror.value}</div>
          </div>
          <div className='miniconatiner'>
            <label className={montherror.inerrorstate ? 'datelabel errorlabel': 'datelabel errorfreelabel'}>MONTH</label>
            <input type='text' onChange={(e)=>{setMonths(e.target.value)}} value={months} placeholder='MM' className={montherror.inerrorstate ? 'dateinput errorinput': 'dateinput errorfreeinput'}/>
            <div className={montherror.inerrorstate ? 'error': 'errorfree'} >{montherror.value}</div>
          </div>
          <div className='miniconatiner'>
            <label className={yearerror.inerrorstate ? 'datelabel errorlabel': 'datelabel errorfreelabel'}>YEAR</label>
            <input type='text' onChange={(e)=>{setYears(e.target.value)}} value={years} placeholder='YYYY' className={yearerror.inerrorstate ? 'dateinput errorinput': 'dateinput errorfreeinput'}/>
            <div className={yearerror.inerrorstate ? 'error': 'errorfree'} >{yearerror.value}</div>
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
  
let haserror=false;
if(days!="" && !Number.isInteger(parseInt(days, 10)) || parseInt(days)>31 || parseInt(days)<1){
  haserror=true;
  setDayError({inerrorstate:true,value:"not a valid day"})
}
else if(days=="")
{
  haserror=true;
  setDayError({inerrorstate:true,value:"This field is required"})
}
else{
  
  setDayError({inerrorstate:false,value:"for days"})
}


if(months!="" && !Number.isInteger(parseInt(months, 10)) || parseInt(months)>12 || parseInt(months)<1){
  haserror=true;
  setMonthError({inerrorstate:true,value:"not a valid month"})
}
else if(months==""){
  haserror=true;
  setMonthError({inerrorstate:true,value:"This field is required"})
}
else{
  setMonthError({inerrorstate:false,value:"for months"})
}

if(years!="" && !Number.isInteger(parseInt(years, 10)) || new Date().getFullYear()<=parseInt(years)){
  haserror=true;
  setYearError({inerrorstate:true,value:"not a valid Year"})
}
else if(years==""){
  haserror=true;
  setYearError({inerrorstate:true,value:"This field is required"})
}
else{
  setYearError({inerrorstate:false,value:"for years"})
}
if(!haserror){
  if(isValidDate(days,months,years)){
    calculateage(days,months,years)
  }
  else{
    setDayError({inerrorstate:true,value:"not a valid date"})
    setMonthError({inerrorstate:true,value:"_"})
    setYearError({inerrorstate:true ,value:"_"})
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
  if (year < 100 || year > 9999) {
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
