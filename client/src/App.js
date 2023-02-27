import React from "react";
import { Route , Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import PokemonCreate from './components/PokemonCreate';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    // React.Fragment elimina los div, mas rapido, usa menos memoria.
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route path="/pokemon/:id" component={PokemonDetail} />
        <Route path="/create" component={PokemonCreate} /> 
      </Switch>
    </React.Fragment>
  );
}

export default App;
