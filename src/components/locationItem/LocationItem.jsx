import React from 'react';
import './locationItem.scss';
import { Link } from 'react-router-dom';

const LocationItem = ({ location }) => {
  return (
    <>
      {location.ip
      ? <Link to={`/location/${location.ip}`} className='locationItem'>
          {location.name}
        </Link>
      : <div>{location.name}</div>
      }
    </>
  );
};

export default LocationItem;