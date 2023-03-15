import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from '../styles/MissionsButton.module.css';

function MissionsButton({ isReserved, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
};

export default MissionsButton;
