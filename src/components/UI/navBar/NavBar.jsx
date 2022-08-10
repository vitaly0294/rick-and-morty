import React from 'react';
import { Link } from 'react-router-dom';
import style from './navBar.module.scss';

function NavBar() {
  return (
    <div className={style.navBar}>
      <span className={style.link}>
        <Link to="/">Главная</Link>
      </span>
    </div>
  );
}

export default NavBar;
