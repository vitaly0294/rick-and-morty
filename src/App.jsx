
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import AppRouter from './appRouter/AppRouter';
import NavBar from './components/UI/navBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;