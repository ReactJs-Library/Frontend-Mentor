import styles from './App.module.css'
import { BackCard } from './components/BackCard'
import { FrontCard } from './components/FrontCard'
import { Left } from './components/Left'
import { Right } from './components/Right'
import { Route,Routes } from 'react-router-dom'
import {ThankYou} from './components/ThankYou'
import { useState } from 'react'
function App() {
  const [cardnumber,setCardNumber]=useState("9591  1232  3445  9230")
  const [cardname,setCardName]=useState("vishal gandla")
  const [date,setDate]=useState("09/26")
  const [cvv,setCvv]=useState(123)

  return (
    <div className={styles.container}>
      <FrontCard number={cardnumber} name={cardname} date={date}></FrontCard>
      <BackCard cvv={cvv}></BackCard>
      <Left></Left>
      <Routes>
          <Route path="/" element={<Right setCardNumber={setCardNumber} setCardName={setCardName} setDate={setDate} setCvv={setCvv}></Right>}></Route>
          <Route path="/submit" element={<ThankYou></ThankYou>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
