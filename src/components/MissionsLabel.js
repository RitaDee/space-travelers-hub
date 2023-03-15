import React from 'react';
import PropTypes from 'prop-types';

import styles from 'src/css/MissionsLabel.module.css';

function MissionsLabel({ isReserved }) {
  return (
    <div
      className={styles.label}
      style={{ backgroundColor: isReserved ? '#18a2b8' : '#6d757d' }}
    >
      {isReserved ? 'Active Member' : 'NOT A MEMBER'}
    </div>
  );
}

MissionsLabel.propTypes = {
  isReserved: PropTypes.bool.isRequired,
};

export default MissionsLabel;
