import TestLogo from '../../public/TestLogo.svg'
import home from '../../public/home_FILL0_wght300_GRAD0_opsz24.svg'
import group from '../../public/group.svg'
import calendar from '../../public/calendar.svg'
import chat_bubble from '../../public/chat_bubble.svg'
import credit_card from '../../public/credit_card.svg'
import senior_woman from '../../public/senior-woman.png'
import settings from '../../public/settings.png'
import more_vert from '../../public/more_vert.png'
import Styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={Styles.container}>
        <img src={TestLogo} alt="Test Logo" className={Styles.minicontainer1}/>

        <div className={Styles.minicontainer2}>
                <div>
                    <img src={home} alt="Home Icon" />
                    <div>Overview</div>
                </div>
                <div className={Styles.selected}>
                    <img src={group} alt="Group Icon" />
                    <div>Patients</div>
                </div>
                <div>
                    <img src={calendar} alt="Calendar Icon" />
                    <div>Schedule</div>
                </div>
                <div>
                    <img src={chat_bubble} alt="Chat Bubble Icon" />
                    <div>Message</div>
                </div>
                <div>
                    <img src={credit_card} alt="Credit Card Icon" />
                    <div>Transactions</div>
                </div>
        </div>
        
        <div className={Styles.minicontainer3}>
            <div>
                <img src={senior_woman} alt="Seniorwoman Icon" />
            </div>
            <div className={Styles.mini3minicontainer2}>
                <div className={Styles.doctorname}>Dr. Jose Simmons</div>
                <div>General Practicioner</div>
            </div>
            <div>
                <img src={settings} alt="Settings Icon" />
            </div>
            <div>
                <img src={more_vert} alt="3 dots icon"/>
            </div>
        </div>

    </div>
  )
}

export default Navbar