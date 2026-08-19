import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Vistas
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import CreateRecipe from './views/CreateRecipe/CreateRecipe';
import Detail from './views/Detail/Detail';

// Componentes
import Nav from './components/Nav/NavBar';
import './App.css';

function App() {
   return (
      <div className="App">
         {/* La NavBar se muestra de forma incondicional en todas las rutas */}
         <Nav />

         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/recipes' element={<Home />} /> 
            <Route path='/create' element={<CreateRecipe />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;