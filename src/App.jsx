/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import AppRouter from './appRouter/AppRouter';
import NavBar from './components/UI/navBar/NavBar';

function App() {
  const { state } = useSelector((state) => state);
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
