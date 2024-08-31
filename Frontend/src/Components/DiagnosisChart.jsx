import { Line } from 'react-chartjs-2';
import Styles from './DiagnosisChart.module.css'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import expand from '../../public/expand.png';
import temperatureIcon from '../../public/temperature.png';
import respiratory from '../../public/respiratory.png';
import HeartBPM from '../../public/HeartBPM.png';
import PropTypes from 'prop-types'; // Import PropTypes

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DiagnosisChart = ({ data }) => {
    // Extract data for the last 6 months
    const recentData = data && data.slice(-6);
    const months = recentData.map(item => `${item.month} ${item.year}`);
    const systolicBP = recentData.map(item => item.blood_pressure.systolic.value);
    const diastolicBP = recentData.map(item => item.blood_pressure.diastolic.value);
    const heartRate = recentData.map(item => item.heart_rate.value);
    const respiratoryRate = recentData.map(item => item.respiratory_rate.value);
    const temperature = recentData.map(item => item.temperature.value);
    
    // Calculate averages
    const avgSystolic = (systolicBP.reduce((a, b) => a + b, 0) / systolicBP.length).toFixed(0);
    const avgDiastolic = (diastolicBP.reduce((a, b) => a + b, 0) / diastolicBP.length).toFixed(0);


    const avgheartRate = (heartRate.reduce((a, b) => a + b, 0) / heartRate.length).toFixed(0);
    const avgrespiratoryRate = (respiratoryRate.reduce((a, b) => a + b, 0) / respiratoryRate.length).toFixed(0);
    const avgtemperature = (temperature.reduce((a, b) => a + b, 0) / temperature.length).toFixed(1);


    const chartData = {
        labels: months,
        datasets: [
            {
                label: 'Systolic Blood Pressure',
                data: systolicBP,
                borderColor: 'rgb(230,111,210)',
                backgroundColor: 'rgb(244,240,254)',
                fill: false,
                tension: 0.4, // interpolation mode
                pointRadius: 5, // size of dots
                pointHoverRadius: 7, // size of dots on hover
                pointBackgroundColor: 'rgb(230,111,210)', // fill color of dots

            },
            {
                label: 'Diastolic Blood Pressure',
                data: diastolicBP,
                borderColor: 'rgb(140,111,230)',
                backgroundColor: 'rgb(244,240,254)',
                fill: false,
                tension: 0.4, // interpolation mode
                pointRadius: 5, // size of dots
                pointHoverRadius: 7, // size of dots on hover
                pointBackgroundColor: 'rgb(140,111,230)', // fill color of dots

            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow resizing of the chart
        plugins: {
            legend: {
                position: 'right',
                display: false, // Hide the legend
            },
            title: {
                display: false,
                text: 'Blood Pressure',
            },
        
        },
    };

    return (

            <div className={Styles.container}>

                    <div className={Styles.heading}>Diagnosis History</div>

                    <div  className={Styles.wholechart}>
                        <div className={Styles.chartwithHeadings}>
                            <div className={Styles.chartHeading}>
                                <div>Blood Pressure</div>
                                <div>Last 6 months <img src={expand} alt="expand icon" style={{width:"0.7rem"}}></img></div>
                            </div>
                            <div className={Styles.chart}>
                                <Line data={chartData} options={options} />
                            </div>
                        </div>
                        <div className={Styles.twoValues}>
                                <div className={Styles.systolic}>
                                    <div style={{display:'flex',alignItems:'center'}}><div className={Styles.pinkdot}></div><div>Systolic:</div> </div>
                                    <div className={Styles.bpValues}>{avgSystolic}</div>
                                    <div style={{display:'flex',alignItems:'center'}}><div className={Styles.upArrow}></div><div>Higher than Average</div></div>

                                </div>
                                <div className={Styles.diastolic}>
                                <div style={{display:'flex',alignItems:'center'}}><div className={Styles.bluedot}></div><div>Diastolic:</div> </div>

                                    <div></div>
                                    <div className={Styles.bpValues}>{avgDiastolic}</div> 
                                    <div style={{display:'flex',alignItems:'center'}}><div className={Styles.downArrow}></div><div>Lower than Average</div></div>
                                </div>
                        </div>
                    </div>

                    <div className={Styles.threeValues}>
                        <div className={Styles.respiratory}>
                            <img src={respiratory} ></img>
                            <div className={Styles.nameValue}>Respiratory Rate</div>
                            <div className={Styles.actualValue}>{avgheartRate} bpm</div>
                            <div className={Styles.ValueStatus}>Normal</div>
                        </div>

                        <div className={Styles.temperature}>
                            <img src={temperatureIcon}></img>
                            <div className={Styles.nameValue}>Temperature</div>
                            <div className={Styles.actualValue}>{avgtemperature} &deg;F</div>
                            <div className={Styles.ValueStatus}>Normal</div>
                        </div>


                        <div className={Styles.heartBpm}>
                            <img src={HeartBPM}></img>
                            <div className={Styles.nameValue}>Heart Rate</div>
                            <div className={Styles.actualValue}>{avgrespiratoryRate} bpm</div>
                            <div className={Styles.ValueStatus} style={{display:"flex",alignItems:"center"}}><div className={Styles.downArrow}></div><div>Lower than Average</div></div>
                        </div>
                    </div>
            </div>
    );
};



DiagnosisChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            month: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            blood_pressure: PropTypes.shape({
                systolic: PropTypes.shape({
                    value: PropTypes.number.isRequired,
                    levels: PropTypes.string.isRequired
                }).isRequired,
                diastolic: PropTypes.shape({
                    value: PropTypes.number.isRequired,
                    levels: PropTypes.string.isRequired
                }).isRequired,
            }).isRequired,
            heart_rate: PropTypes.shape({
                value: PropTypes.number.isRequired,
                levels: PropTypes.string.isRequired
            }).isRequired,
            respiratory_rate: PropTypes.shape({
                value: PropTypes.number.isRequired,
                levels: PropTypes.string.isRequired
            }).isRequired,
            temperature: PropTypes.shape({
                value: PropTypes.number.isRequired,
                levels: PropTypes.string.isRequired
            }).isRequired,
        }).isRequired
    ).isRequired,
};


export default DiagnosisChart;
