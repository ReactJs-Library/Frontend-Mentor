import styles from './App.module.css'
import { BackCard } from './components/BackCard'
import { FrontCard } from './components/FrontCard'
import { Left } from './components/Left'
import { Right } from './components/Right'
function App() {
  return (
    <div className={styles.container}>
      <FrontCard number={"9591  1232  3445  9230"} name={"vishal gandla"} date={"09/26"}></FrontCard>
      <BackCard></BackCard>
      <Left></Left>
      <Right></Right>
    </div>
  )
}

export default App
