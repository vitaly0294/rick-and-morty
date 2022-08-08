import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import Character from '../pages/character/Character';
// import Episode from '../pages/episode/Episode';
import Error from '../pages/error/Error';
// import Location from '../pages/location/Location';
import Main from '../pages/main/Main';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/episode/:id" element={<Episode />} />
      <Route path="/character/:id" element={<Character />} />
      <Route path="/location/:id" element={<Location />} /> */}
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate replace to="/error" />} />
    </Routes>
  );
}

export default AppRouter;
