import React from 'react';
import EpisodeItem from '../episodeItem/EpisodeItem';
import './episodeList.scss';

import { Link } from 'react-router-dom';

const EpisodesList = ({episodes, title}) => {
  const getArrSeason = (episodes = []) => {
    const arr = [];
    episodes.forEach(item => {
      if (!arr.includes(item.episode.substr(0, 3))) {
        arr.push(item.episode.substr(0, 3));
      };
    })
    return arr;
  }

  const getSeason = (episode) => episode.substr(0, 3);

  const arrSeason = getArrSeason(episodes);

  if (!episodes.length) {
    return (
      <div>Ничего не найдено!</div>
    )
  }

  return (
    <div className='episodesList'>
      <h1>{title}</h1>
      {arrSeason.map(season =>
        <div key={season}>
          <h3>Сезон {season}</h3>
          {episodes.map(episode =>
            getSeason(episode.episode) === season
              ? <Link key={episode.id} to={`/episode/${episode.id}`}>
                  <EpisodeItem episode={episode} />
                </Link>
              : ''
          )}
        </div>
      )}
    </div>
  );
};

export default EpisodesList;