import React from 'react'
import Wrapper from './pages/Wrapper.js';
import Header from './pages/Header.js';
import Main from './pages/Main.js';
import Sub01 from './pages/Sub01.js';
import Sub02 from './pages/Sub02.js';
import Sub03 from './pages/Sub03.js';
import Sub04 from './pages/Sub04.js';
import Board from './pages/Board.js';
import Footer from './pages/Footer.js';
import { Routes, Route } from 'react-router-dom';

import './css/Basic.scss';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sub01' element={<Sub01 />} />
        <Route path='/sub02' element={<Sub02 />} />
        <Route path='/sub03' element={<Sub03 />} />
        <Route path='/sub04' element={<Sub04 />} />
        <Route path='/board' element={<Board />} />
      </Routes>
      <Footer />
    </Wrapper>
  )
}

export default App
