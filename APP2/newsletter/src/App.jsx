
import {   useEffect, useState } from 'react'
import './App.css'

import {Route,Routes} from 'react-router-dom'
import { Home } from './components/Home'
import Success from './components/Success'
import { useNavigate  } from 'react-router-dom';


function App() {

  
  const [email,setEmail]=useState("")
  const navigateTo = useNavigate();

  useEffect(()=>{
    navigateTo('/success')
  },[email])
  useEffect(()=>{
    navigateTo("/")
  },[])
  const updatemail= (mail)=>{
    setEmail(mail)
  }
  

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home  updatemail={updatemail}></Home>}>
          </Route>
        <Route path='/success' element={<Success email={email}/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
