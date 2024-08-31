
import './App.css'

import Navbar from "./Components/Navbar"
import HomeLeft from './Components/HomeLeft'
import HomeMiddle from './Components/HomeMiddle'
import HomeRight from './Components/HomeRight'
import {useEffect, useState} from 'react'
function App() {
  const [patients, setPatients]=useState([])
  const [patient, setPatient]=useState({
    "name": "",
    "gender": "",
    "age": 0,
    "profile_picture": "",
    "date_of_birth": "",
    "phone_number": "",
    "emergency_contact": "",
    "insurance_type": "",
    "lab_results":[],
    "diagnosis_history":[],
    "diagnostic_list":[]
  })

  let username="coalition"
  let password="skills-test"
  let auth=btoa(`${username}:${password}`);

  const onload=async()=>{
    const response=await fetch("https://fedskillstest.coalitiontechnologies.workers.dev",{
      method:"GET",
      headers:{
        'Authorization': `Basic ${auth}`,
        "Content-Type":"application/json"
      },
    })
    const data=await response.json();
    setPatients(data)
    data.map((patient)=>{
      if(patient.name==="Jessica Taylor"){
        setPatient(patient)
      }
    })
  }

  useEffect(()=>{
    onload()
  },[])
  
  return (
    <>
    <Navbar></Navbar>
      <div className="App">
          <HomeLeft patients={patients}></HomeLeft>
          <HomeMiddle patient={patient}></HomeMiddle>
          <HomeRight patient={patient}></HomeRight>
      </div>
    </>
  )
}

export default App
