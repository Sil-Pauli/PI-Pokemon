import React from "react";
import "./Home.module.css";
import Filter from "./Filter";
import Header from "./Header.jsx";
import Pagination from "./Pagination.jsx";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div>
        <div className="container__card">
          <Pagination />
          <Filter />
        </div>
      </div>
    </div>
  );
};
export default Home;