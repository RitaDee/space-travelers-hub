import React from 'react';
import { useSelector } from 'react-redux';
import RocketUi from '../components/RocketUi';

const RocketLists = () => {
  const rockets = useSelector((store) => store.rockets?.list ?? []);
  return (
    <div>
      {rockets.map((rocket) => (
        <RocketUi
          key={rocket.rocket_id}
          id={rocket.rocket_id}
          name={rocket.rocket_name}
          desc={rocket.description}
          reserved={rocket.reserved}
          picture={rocket.flickr_images}
        />

      ))}
    </div>

  );
};

export default RocketLists;
