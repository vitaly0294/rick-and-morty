import React from 'react';
import EpisodeItem from '../episodeItem/EpisodeItem';
import './episodeList.scss';

import { Link } from 'react-router-dom';

const EpisodesList = ({episodes, title}) => {
  if (!episodes.length) {
    return (
      <div>Ничего не найдено!</div>
    )
  }

  return (
    <div className='episodesList'>
      <h1>{title}</h1>
      {episodes.map(episode =>
        <Link key={episode.id} to={`/episode/${episode.id}`}>
          <EpisodeItem episode={episode} />
        </Link>
        
      )}
    </div>
  );
};

export default EpisodesList;