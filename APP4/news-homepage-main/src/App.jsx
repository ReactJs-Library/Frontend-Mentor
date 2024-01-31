
import styles from './App.module.css'
import { Navbar } from './Components/Navbar'
import {Core} from './Components/Core'
import { CoreRight } from './Components/CoreRight'
import { Footer } from './Components/Footer'
function App() {
  

  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <div className={styles.corecontainer}>
        <Core></Core>
        <CoreRight></CoreRight>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
