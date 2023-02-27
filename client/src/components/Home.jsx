import React from "react";
import "./Home.module.css";
// import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "../redux/actions/index";
import SearchBar from "./SearchBar.jsx";
import Filter from "./Filter";
import Pagination from "./Pagination.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const goBackHome = () => {
    dispatch(clearState());
  };

  return (
    <div className="container__header">
      <Link to="/home">
        <img
          className="header__logo"
        //   src={Logo}
          alt="Pokémon Logo"
          onClick={goBackHome}
        />
      </Link>
      <SearchBar />
      <div></div>
      <div className="container__card">
        <Pagination />
        <Filter />
      </div>
    </div>
  );
};
 
       

export default Home;