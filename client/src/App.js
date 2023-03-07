import React from "react";
import { Route , Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import PokemonCreate from './components/PokemonCreate';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route path='/home/:id' element={<PokemonDetail/>} />
        <Route path='/create' element={<PokemonCreate/>} /> 
        </Routes>  
        </div>
    
  );
}

export default App;
