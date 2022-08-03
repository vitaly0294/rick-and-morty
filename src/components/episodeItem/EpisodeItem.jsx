import React from 'react';
import './episodeItem.scss';

const EpisodeItem = ({episode: {id, episode, name, air_date}}) => {
  return (
    <div className='episodeItem'>
      <div className='episodeItem-id'>{id}</div>
      <div className='episodeItem-episode'>{episode}</div>
      <div className='episodeItem-name'>{name}</div>
      <div className='episodeItem-air-date'>{air_date}</div>
    </div>
  );
};

export default EpisodeItem;