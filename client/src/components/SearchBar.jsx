import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  getPokemonByName } from '../redux/actions/index';
import styles from"./SearchBar.module.css";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
  
    const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (search) {
        dispatch(getPokemonByName(search));
        setSearch("");
      }
    };
  //  buscador de pokemon
    return (
        
      <form onSubmit={handleSubmit} className={styles.search}>
         <div className={styles.searchBox}>
          <input
            className={styles.searchInput} 
            type="text"
            required=""
            value={search}
            onChange={handleChange}
            placeholder="Buscar Pokemon"
            id="search"
            size='40'
          />
        </div>
      </form>
     
    );
  };
  export default SearchBar;