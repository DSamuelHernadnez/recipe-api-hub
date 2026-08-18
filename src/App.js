import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import CreateRecipe from './views/CreateRecipe/CreateRecipe';
import Detail from './views/Detail/Detail';
import './App.css'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<CreateRecipe />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;