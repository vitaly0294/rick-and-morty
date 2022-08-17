/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import style from './episodeItem.module.scss';

import { getNumberNoNullLeft } from '../../utils/pages';

function EpisodeItem({ item }) {
  const {
    id, episode, name, air_date,
  } = item;

  const getSeriesNumber = (fullName) => getNumberNoNullLeft(fullName.slice(4));

  return (
    <div className={(id % 2) ? style.episodeItem : `${style.episodeItem} ${style.episodeItemColor}`}>
      <div className={style.id}>{id}</div>
      <div className={style.info}>
        <div className={style.titleOne}>
          <p className={style.titleItem}>Эпизод</p>
          <p className={style.value}>{getSeriesNumber(episode)}</p>
        </div>

        <div className={style.titleTwo}>
          <p className={style.titleItem}>Название эпизода</p>
          <h3 className={style.value}>{name}</h3>
        </div>

        <div className={style.titleOne}>
          <p className={style.titleItem}>Дата выхода эпизода</p>
          <p className={style.value}>{air_date}</p>
        </div>

      </div>

    </div>
  );
}

EpisodeItem.defaultProps = {
  item: {
    id: 0,
    episode: '',
    name: '',
    air_date: '',
  },
};

EpisodeItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    episode: PropTypes.string,
    name: PropTypes.string,
    air_date: PropTypes.string,
  }),
};

export default EpisodeItem;
