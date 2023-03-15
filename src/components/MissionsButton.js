import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from 'src/css/MissionsButton.module.css';

function MissionsButton({ isReserved }) {
  return (
    <button
      type="button"
      className={cn(
        styles.button,
        isReserved ? styles.leaveMission : styles.joinMission,
      )}
    >
      {isReserved ? 'Leave Mission' : 'Join Mission'}
    </button>
  );
}

MissionsButton.propTypes = {
  isReserved: PropTypes.bool.isRequired,
};

export default MissionsButton;
