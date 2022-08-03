import React from 'react';
import './characterItem.scss';

const CharacterItem = ({character: {id, name}}) => {
  return (
    <div className='characterItem'>
      <div className='characterItem-id'>{id}</div>
      <div className='characterItem-name'>{name}</div>
    </div>
  );
};

export default CharacterItem;