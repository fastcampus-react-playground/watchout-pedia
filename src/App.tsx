import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MovieDetail from './pages/MovieDetail';
import TvPage from './pages/TvPage';
import TvDetail from './pages/TvDetail';

import LoginModal from './features/app/LoginModal';
import SignupModal from './features/app/SignupModal';

const Base = styled.div``;

function App() {
  return (
    <Base>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
        </Routes>
      </BrowserRouter>
      <LoginModal />
      <SignupModal />
    </Base>
  );
}

export default App;
