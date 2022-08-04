import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__link">
        <Link to="/">Главная</Link>
      </div>
    </div>
  );
};

export default NavBar;