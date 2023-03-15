import React from 'react';

function RocketUi({
  // eslint-disable-next-line react/prop-types
  name, desc, picture, reserved,
}) {
  return (
    <div className="rocket-ui">
      <div className="rocket-ui-image">
        <img src={picture} alt="Rocket" className="img" />
      </div>

      {!reserved && (
      <div>
        <h1 className="rocket-ui-info">{name}</h1>
        <p className="desc">{desc}</p>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>

      )}
      {reserved && (
      <div>
        <h1 className="rocket-ui-info">{name}</h1>
        <p className="desc">
          {desc}
          <span className="cancel-reserved" />
          {desc}
        </p>
        <button type="button" className="cancel-btn">Cancel Reservation</button>

      </div>

      )}

    </div>
  );
}
export default RocketUi;
