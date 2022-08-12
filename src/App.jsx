/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import style from './app.module.scss';
import AppRouter from './appRouter/AppRouter';
import NavBar from './components/UI/navBar/NavBar';

function App() {
  // const { state } = useSelector((state) => state);
  return (
    <BrowserRouter>
      <div className={style.app}>
        <NavBar />
        <div className={style.content}>
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
