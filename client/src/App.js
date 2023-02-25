import React from "react";
import './App.css';
import { Route , Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
// import CreatedPokemon from './components/CreatedPokemon';
// import Details from './components/Details';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        {/* <Route path="/pokemon/:id" component={PokemonDetail} />
        <Route path="/create" component={Create} /> */}
        {/* <Route path="/about" component={About} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
