import styles from './DiagnosticList.module.css';
import PropTypes from 'prop-types';

const DiagnosticList = ({ diagnostics }) => {
  return (
    <div className={styles.diagnosticTable}>
      <div className={styles.tableHeader}>
        <div className={styles.tableCell}>Name</div>
        <div className={styles.tableCell}>Description</div>
        <div className={styles.tableCell}>Status</div>
      </div>
      <div className={styles.tableBody}>
        {diagnostics.map((diagnostic, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={styles.tableCell}>{diagnostic.name}</div>
            <div className={styles.tableCell}>{diagnostic.description}</div>
            <div className={styles.tableCell}>{diagnostic.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

DiagnosticList.propTypes = {
    diagnostics: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };
  
export default DiagnosticList;
