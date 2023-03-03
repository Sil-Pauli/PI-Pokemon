import React from "react";
import "./Home.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "../redux/actions/index";
import SearchBar from "./SearchBar.jsx";
import Filter from "./Filter.jsx";
import Pagination from "./Pagination.jsx";
import LOGO2 from "../img/logo2.svg.webp";
import home from'./Home.module.css';


const Home = () => {
  const dispatch = useDispatch();
  const goBackHome = () => {
    dispatch(clearState());
  
  };

  return (
  <div className={home.container}>
    <header>
      
        <Link to="/home">
          <div className={home.logo2}>
            <img className="logo2" src={LOGO2} alt="pokemon" onClick={goBackHome}/>
          </div>
        </Link>
        
        <div>
        <Link to="/create">
              <p className={home.menu}>CREAR</p>
            </Link>
       </div> 

       <SearchBar/>
        
       <Filter
      
            />
      
     </header> 
     <Pagination />
     </div>
  );
};
 
       

export default Home;