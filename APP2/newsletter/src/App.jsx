
import { useState } from 'react'
import './App.css'
import BulletPoints from './components/BulletPoints'
import {Route,Routes} from 'react-router-dom'
import { Home } from './components/Home'
import Success from './components/Success'

function App() {
  const [points,setPoints]=useState([
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more! "
  ])
  const showpoints=()=>{
    return points.map((point,index)=>{
      return <BulletPoints key={index} point={point}></BulletPoints>
    })
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home showpoints={showpoints}></Home>}>
          </Route>
        <Route path='/success' element={<Success/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
