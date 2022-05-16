import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import  Wolox  from './Wolox';
import  Pokemon  from './Pokemon';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Wolox />} />
        <Route path="/Pokemon" element={<Pokemon />} />
    </Routes>




    </BrowserRouter>


  );
}

export default App;