/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import style from './episodeItem.module.scss';

function EpisodeItem({ list }) {
  const {
    id, episode, name, air_date,
  } = list;

  const getSeriesNumber = (fullName) => fullName.slice(4);
  console.log(getSeriesNumber('s10p01'));

  return (
    <div className={style.episodeItem}>
      <div className={style.id}>{id}</div>
      <div>
        <div className={style.episode}>{`Серия: ${episode}`}</div>
        <div className={style.name}>{name}</div>
        <div className={style.airDate}>{air_date}</div>
      </div>
    </div>
  );
}

EpisodeItem.defaultProps = {
  list: {
    id: 0,
    episode: '',
    name: '',
    air_date: '',
  },
};

EpisodeItem.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number,
    episode: PropTypes.string,
    name: PropTypes.string,
    air_date: PropTypes.string,
  }),
};

export default EpisodeItem;
