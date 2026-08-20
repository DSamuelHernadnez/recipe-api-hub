import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Vistas
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import CreateRecipe from './views/CreateRecipe/CreateRecipe';
import Detail from './views/Detail/Detail';

// Componentes
import Nav from './components/Nav/NavBar';
import { useLocation } from 'react-router-dom';
import './App.css';

function App() {
   const location = useLocation();
   const isLandingPage = location.pathname === '/';

   return (
      <div className="App">
         {/* Renderizamos el Nav solo si NO estamos en la Landing Page */}
         {!isLandingPage && <Nav />}

         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<h1> Welcome To Home </h1>} />
            <Route path='/createRecipe' element={<h1> Welcome To CreateRecipe </h1>} />
            <Route path='/detail/:id' element={<h1> Welcome To detail </h1>} />
         </Routes>
      </div>
   );
}

export default App;