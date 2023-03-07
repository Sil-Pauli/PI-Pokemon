import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import Logo1 from '../img/logo2.svg.webp';
// import PokemonCreate from './PokemonCreate';

import Search from './Search';


export default function NavBar() {
  return (
      <header id='navegador' className={styles.header}>
        <Link to='/home'>
          <img  className={styles.logo} src={ Logo1 } alt='pkh' />
        </Link>
       <div> 
        {/* <PokemonCreate/> */}
          <Link to='/create'>
          <button className={styles.button2}>CREAR</button>
          </Link>
        </div>
        <Search />
      </header>

  );
}