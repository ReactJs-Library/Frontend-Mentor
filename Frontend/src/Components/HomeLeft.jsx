import Styles from './HomeLeft.module.css'
import PropTypes from 'prop-types';
import EachPatient from './EachPatient'
import search from '../../public/search.png'

const HomeLeft = ({patients}) => {
  const showPatients = () => {
    return patients.map((patient,index)=>{
      if(patient.name === "Jessica Taylor"){
        console.log(patient)
      }
      return <EachPatient key={index} name={patient.name} gender={patient.gender} age={patient.age} image={patient.profile_picture}></EachPatient>
    })
  }
  return (
    <div className={Styles.container}>
        <div className={Styles.minicontainer1}>
          <div>Patients</div>
          <img src={search} alt="search icon" />
        </div>
        <div className={Styles.minicontainer2}>
          {showPatients()}
        </div>
    </div>
  )
}
HomeLeft.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      profile_picture: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default HomeLeft