import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReserve } from '../redux/rockets/rocketsSlice';

function RocketUi({
  name, desc, picture, reserved, id,
}) {
  const dispatch = useDispatch();
  const handleReserve = () => {
    dispatch(reserveRocket(id));
  };

  const handleCancel = () => {
    dispatch(cancelReserve(id));
  };
  return (
    <div className="rocket-ui">
      <div className="rocket-ui-image">
        <img src={picture} alt="Rocket" className="img" />
      </div>

      {!reserved && (
        <div>
          <h1 className="rocket-ui-info">{name}</h1>
          <p className="desc">{desc}</p>
          <button type="button" className="reserve-btn" onClick={handleReserve}>Reserve Rocket</button>
        </div>

      )}
      {reserved && (
        <div>
          <h1 className="rocket-ui-info">{name}</h1>
          <p className="desc">
            <span className="reserved">reserved</span>
            {desc}
          </p>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel Reservation</button>
        </div>

      )}

    </div>
  );
}

RocketUi.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  picture: PropTypes.arrayOf(PropTypes.string).isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default RocketUi;
