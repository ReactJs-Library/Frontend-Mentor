import Styles from './HomeMiddle.module.css'
import DiagnosisChart from './DiagnosisChart'
import PropTypes from 'prop-types'; // Import PropTypes
import DiagnosticList from './DiagnosticList';
const HomeMiddle = ({patient}) => {
  

  return (
    <div className={Styles.container}>
      <div className={Styles.minicontainer1}>
        <DiagnosisChart data={patient.diagnosis_history}></DiagnosisChart>
      </div>
      <div className={Styles.minicontainer2}>
        <div className={Styles.header}>Diagnostic List</div>
        <DiagnosticList diagnostics={patient.diagnostic_list}></DiagnosticList>
      </div>
    </div>
  )
}

HomeMiddle.propTypes = {
  patient: PropTypes.shape({
    diagnosis_history: PropTypes.arrayOf(
      PropTypes.shape({
        month: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        blood_pressure: PropTypes.shape({
          systolic: PropTypes.shape({
            value: PropTypes.number.isRequired,
            levels: PropTypes.string.isRequired,
          }).isRequired,
          diastolic: PropTypes.shape({
            value: PropTypes.number.isRequired,
            levels: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
        heart_rate: PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        }).isRequired,
        respiratory_rate: PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        }).isRequired,
        temperature: PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
    diagnostic_list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};


export default HomeMiddle