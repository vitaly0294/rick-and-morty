import React from 'react';
import './locationItem.scss';
import { Link } from 'react-router-dom';

const LocationItem = ({ location }) => {
  return (
    <div className='wrap'>
      {location.ip
      ? <>
          <h2>Локация персонажа</h2>
          <Link to={`/location/${location.ip}`} className='locationItem'>
            {location.name}
          </Link>
        </>

      : <div>{location.name}</div>
      }
    </div>
  );
};

export default LocationItem;