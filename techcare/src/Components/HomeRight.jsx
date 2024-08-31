import Styles from './HomeRight.module.css'
import BirthIcon from '../../public/BirthIcon.svg'
import FemaleIcon from '../../public/FemaleIcon.svg'
import PhoneIcon from '../../public/PhoneIcon.svg'
import InsuranceIcon from '../../public/InsuranceIcon.svg'
import Jessica from '../../public/Jessica.png'
import PropTypes from 'prop-types';

import download from '../../public/download.svg'
const HomeRight = ({patient}) => {
  const showLabResults=()=>{
    return patient.lab_results.map((testname,id)=>
    {
      return (<div key={id} className={Styles.test}> 
              <div className={Styles.testName}>{testname}</div>
               <img src={download} alt="download icon"></img>
            </div>)
    })
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.minicontainer1}>

        <div className={Styles.patientInfo}>
          <img src={Jessica} alt="patient profile picture" className={Styles.profileImage} />
          <div className={Styles.patientName}>{patient.name}</div>
        </div>

        <div className={Styles.details}>
          <div className={Styles.detailItem}>
            <img src={BirthIcon} alt="Birth Icon" className={Styles.icon} />
            <div className={Styles.detailText}>
              <div className={Styles.detailLabel}>Date Of Birth</div>
              <div className={Styles.detailValue}>{patient.date_of_birth}</div>
            </div>
          </div>
          <div className={Styles.detailItem}>
            <img src={FemaleIcon} alt="Female Icon" className={Styles.icon} />
            <div className={Styles.detailText}>
              <div className={Styles.detailLabel}>Gender</div>
              <div className={Styles.detailValue}>{patient.gender}</div>
            </div>
          </div>

          <div className={Styles.detailItem}>
            <img src={PhoneIcon} alt="PhoneIcon" className={Styles.icon} />
            <div className={Styles.detailText}>
              <div className={Styles.detailLabel}>Gender</div>
              <div className={Styles.detailValue}>{patient.phone_number}</div>
            </div>
          </div>
          <div className={Styles.detailItem}>
            <img src={PhoneIcon} alt="PhoneIcon" className={Styles.icon} />
            <div className={Styles.detailText}>
              <div className={Styles.detailLabel}>Gender</div>
              <div className={Styles.detailValue}>{patient.emergency_contact}</div>
            </div>
          </div>
          <div className={Styles.detailItem}>
            <img src={InsuranceIcon} alt="InsuranceIcon" className={Styles.icon} />
            <div className={Styles.detailText}>
              <div className={Styles.detailLabel}>Gender</div>
              <div className={Styles.detailValue}>{patient.insurance_type}</div>
            </div>
          </div>

        </div>
        <div className={Styles.button}>
          Show All Information
        </div>
      </div>

      <div className={Styles.minicontainer2}>
        <div className={Styles.labresultsheader}>Lab Results</div>
        <div className={Styles.tests}>
        {showLabResults()}

        </div>
          
      </div>
    </div>
  )
}
HomeRight.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date_of_birth: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    emergency_contact: PropTypes.string.isRequired,
    insurance_type: PropTypes.string.isRequired,
    lab_results: PropTypes.arrayOf(PropTypes.string).isRequired,
    profile_picture: PropTypes.string.isRequired,
  }).isRequired,
};


export default HomeRight