import more_horiz from '../../public/more_horiz.png'
import Styles from './EachPatient.module.css'
import PropTypes from 'prop-types';

const EachPatient = ({name,age,gender,image}) => {
  
  return (
    <div className={`${Styles.container} ${name==="Jessica Taylor" ? `${Styles.selected}` : ""}`} >

        <div className={Styles.minicontainer1}>
            <div className={Styles.mini1minicontainer1}>
              <img src={image} alt={name} className={Styles.profile_image}/>
            </div>
            <div className={Styles.mini1minicontainer2}>
                <div>{name}</div>
                <div>{gender}, {age}</div>
            </div>
        </div>
        <img src={more_horiz} alt="more_vert" className={Styles.minicontainer2}/>  
    </div>
  )
}

EachPatient.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default EachPatient