
import { useState } from 'react'
import './App.css'
import { AgeOutput } from './components/AgeOutput.jsx'

import { DateInput } from './components/DateInput.jsx'
function App() {
  const [years,setYears]=useState("--")
  const [months,setMonths]=useState("--")
  const [days,setDays]=useState("--")
  const calculateage=(days,months,years)=>{
    let ages;
    if(months<10 && months.length==1){
       ages=BirthAge("0"+months+"/"+days+"/"+years)
    }
    else{
      ages=BirthAge(months+"/"+days+"/"+years)
    }
    
    setDays((curr)=>{return ages.days})
    setMonths((curr)=>{return ages.months})
    setYears((curr)=>{return ages.years})
   
  }
  return (
    <div className='container'>
      <DateInput calculateage={calculateage}/>
      <AgeOutput years={years} months={months} days={days}/>
    </div>
  )
}

function BirthAge(dateString) {
  var now = new Date();
  var today = new Date(now.getYear(),now.getMonth(),now.getDate());
 
  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString.substring(6,10),
                     dateString.substring(0,2)-1,                   
                     dateString.substring(3,5)                  
                     );
  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";


  let yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };
  return age;
}





export default App
