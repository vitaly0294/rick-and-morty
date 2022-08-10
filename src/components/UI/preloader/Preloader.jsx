import React from 'react';
import style from './preloader.module.scss';

function Preloader() {
  return (
    <div className={style.wrap}>
      <div className={style.preloader} />
    </div>
  );
}

export default Preloader;
