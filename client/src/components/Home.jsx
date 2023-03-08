import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemon,
  getPokemonType,
  filterPokemonType,
  filterPokemonCreated,
  filterPokemonAttack,
  orderPokemonName } from '../redux/actions';
import { Link } from 'react-router-dom';
import CardPokemon from './CardPokemon';
import styles from './Home.module.css';
import Pagination from './Pagination';
import NavBar from './NavBar';
//import PokemonCreate from './PokemonCreate';


export default function Home() {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.pokemon);
  const allPokemonType = useSelector((state) => state.types);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage /*setPokemonPerPage*/] = useState(12);
  const [order,setOrder] = useState('');

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = allPokemon.slice(indexOfFirstPokemon,indexOfLastPokemon);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]); //get pokemon when componentdidmount

  useEffect(() => {
    dispatch(getPokemonType());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemon());
  };

  const handleFilterType = (e) => {
    e.preventDefault();
    dispatch(filterPokemonType(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value); 
  };

  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterPokemonCreated(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value); 
  };

  const handleFilterAttack = (e) => {
    e.preventDefault();
    dispatch(filterPokemonAttack(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value); 
  };


  const handleOrderName = (e) => {
    e.preventDefault();
    dispatch(orderPokemonName(e.target.value));
    setOrder(e.target.value); 
    setCurrentPage(1);
  };

  return (
    
    <div className={styles.container1}>
      <NavBar />
      <div >
        <div className={styles.filtro}>
        <button
          className={styles.button}
          onClick={(e) => {handleClick(e)}}>
          Pokemon!!
        </button>
          <select className={styles.name} onChange={(e) => handleOrderName(e)} value={order}>
            <option value='name'>Nombre</option>
            <option value='asc'>A - Z</option>
            <option value='desc'>Z - A</option>
          </select> 
          <select onChange={(e) => handleFilterAttack(e)} value={order}>
            <option value='attack'>Ataque</option>
            <option value='ataque -60'>Ataque -60</option>
            <option value='more aggressive'>Más Agresivo</option>
            <option value='less aggresive'>Menos Agresivo</option>
          </select>
          <select onChange={(e) => handleFilterType(e)} value={order}>
  <option value='type'>Tipo</option>
  {allPokemonType?.sort((a, b) => a.name.localeCompare(b.name)).map((t) => (
    <option value={t.name} key={t.id}>
      {`${t.name.charAt(0).toUpperCase() + t.name.slice(1)}`}
    </option>
  ))}
</select>
          <select onChange={(e) => handleFilterCreated(e)} value={order}>
            <option value='all'>All</option>
            <option value='existent'>Existent</option>
            <option value='created'>Created</option>
          </select> 
          </div>
          <Pagination
            pokemonPerPage={pokemonPerPage}
            allPokemon={allPokemon.length}
            pagination={pagination}
            currentPage={currentPage}
          />
          {currentPokemon?.map((p) => {
           
            return (
              <Fragment key={p.id}>
                <Link to={`/home/${p.id}`} className={styles.cardpoke}>
                  {/* <PokemonCreate/>
                  name={p.name}
                    img={p.img}
                    types={p.types} */}
                  <CardPokemon 
                 
                    name={p.name}
                    img={p.img}
                    types={p.types}
                  />
                </Link>
              </Fragment>
            );
          })}
        
      </div>
    </div>
  );
}