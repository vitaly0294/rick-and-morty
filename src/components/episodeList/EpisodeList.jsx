import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './episodeList.module.scss';
import EpisodeItem from '../episodeItem/EpisodeItem';

function EpisodesList({ episodes, title, sortSeason }) {
  const getSeason = (episode) => episode.substr(1, 2);
  console.log(episodes);
  const getArrSeason = (list) => {
    const arrSeason = [];
    list.forEach((item) => {
      const numSeason = getSeason(item.episode);
      if (!arrSeason.includes(numSeason)) arrSeason.push(numSeason);
    });
    return arrSeason;
  };

  const getSeasonNumberConversion = (season) => (season[0] === '0' ? season[1] : season);

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
                <h3 className={style.season__title}>
                  {`Сезон ${getSeasonNumberConversion(season)}`.toLocaleUpperCase()}
                </h3>
                {episodes.map((episode) => (getSeason(episode.episode) === season
                  ? (
                    <Link key={episode.id} to={`/episode/${episode.id}`}>
                      <EpisodeItem list={episode} />
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
                <EpisodeItem episode={episode} />
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
