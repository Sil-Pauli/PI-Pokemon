import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions";
import { Link } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const allPokemon = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(getPokemon());
    }, [dispatch]);

    function handleClick(e){ //funcionamiento de los botones
        e.preventDefault();
        dispatch(getPokemons());
    };

return(
    <div>
        <Link to='/pokemon'><button>Crear pokemon</button></Link>
        <h1>Pokemon App</h1>
        <button onClick={e => handleClick(e)}>
            Volver a cargar los Pokemon
        </button>
        <SearchBar 
            setCurrentPage={setCurrentPage}
        />
        <SortFilter
            setCurrentPage={setCurrentPage}
            order={order}
            sort={sort}
            filter={filter}
            selectedFilter={selectedFilter}
        />
        <Paginated 
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginated={paginated}
            currentPage={currentPage}
        />
        <Cards pokemons={currentPokemons} />
    </div>
)
}
export default Home