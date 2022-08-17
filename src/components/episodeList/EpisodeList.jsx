import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './episodeList.module.scss';
import EpisodeItem from '../episodeItem/EpisodeItem';

import { getNumberNoNullLeft } from '../../utils/pages';

function EpisodesList({ episodes, title, sortSeason }) {
  const getSeason = (episode) => episode.substr(1, 2);
  const getArrSeason = (list) => {
    const arrSeason = [];
    list.forEach((item) => {
      const numSeason = getSeason(item.episode);
      if (!arrSeason.includes(numSeason)) arrSeason.push(numSeason);
    });
    return arrSeason;
  };

  return (
    <div className={style.list}>
      <h1 className={style.title}>{title}</h1>

      {episodes.length
        ? ''
        : (
          <div>Эпизодов не найдено!</div>
        )}

      {sortSeason
        ? (
          <>
            {getArrSeason(episodes).map((season) => (
              <div key={season} className={style.season}>
                <h2 className={style.season__title}>
                  {`Сезон ${getNumberNoNullLeft(season)}`.toLocaleUpperCase()}
                </h2>
                {episodes.map((episode) => (getSeason(episode.episode) === season
                  ? (
                    <Link key={episode.id} to={`/episode/${episode.id}`}>
                      <EpisodeItem item={episode} />
                    </Link>
                  )
                  : ''))}
              </div>
            ))}
          </>
        )
        : (
          <>
            {episodes.map((episode) => (
              <Link key={episode.id} to={`/episode/${episode.id}`}>
                <EpisodeItem item={episode} />
              </Link>
            ))}
          </>
        )}
    </div>
  );
}

EpisodesList.defaultProps = {
  episodes: [],
  title: 'Заголовок',
  sortSeason: false,
};

EpisodesList.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape),
  title: PropTypes.string,
  sortSeason: PropTypes.bool,

};

export default EpisodesList;
