import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './LandingPage.module.css';


const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to my Pokemon page!</h1>
            <Link to='/home'>
                <button>Comenzar</button>
            </Link>
        </div>
    )
}

export default LandingPage;