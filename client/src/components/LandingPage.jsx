import React from 'react';
import { Link } from 'react-router-dom';
import landing from'./LandingPage.module.css';
import LOGO from "../img/logo.svg.webp";


const LandingPage = () => {
    return (
        <div className={landing.container}>
            <div className={landing.logo}>
          <img className={landing.img} src={LOGO} alt="pokemon" />
        </div>
            <Link to='/home'>
                <button className={landing.button}>Comenzar</button>
            </Link>
        </div>
    )
}

export default LandingPage;