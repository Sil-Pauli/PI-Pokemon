import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanFilter, cleanSort, getPokemon} from "../redux/actions";
import CardPokemon from "./CardPokemon";
import Pagination from "./Pagination"
import SortFilter from "./SortFilter";
import SearchBar from "./SearchBar";


function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);
    const order = useSelector(state => state.order);
    const sort = useSelector(state => state.sort);
    const filter = useSelector(state => state.filter);
    const selectedFilter = useSelector(state => state.selectedFilter)
    const indexOfLastPokemon = currentPage * pokemonsPerPage; //12
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; //0
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
      };


    useEffect(() => {
        dispatch(getPokemon());
    }, [dispatch]);
 
    function handleClick(e){ //funcionamiento de boton "volver a cargar pokemon"
        e.preventDefault();
        dispatch(getPokemon());
        dispatch(cleanSort());
        dispatch(cleanFilter());
    };
 
return(
    <div>
        <Link to='/pokemon'><button>Crear pokemon</button></Link>
        <h1>Pokemon App</h1>
        <button onClick={e => handleClick(e)}>
            Volver a cargar los Pokemon
        </button>
        <SearchBar //barra de busqueda
            setCurrentPage={setCurrentPage}
        />
        <SortFilter //orfenar filtros
            setCurrentPage={setCurrentPage}
            order={order}
            sort={sort}
            filter={filter}
            selectedFilter={selectedFilter}
        />
        <Pagination // paginado
            pokemonsPerPage={pokemonsPerPage}
            getPokemon={allPokemons.length}
            pagination={pagination}
            currentPage={currentPage}
        />
        <CardPokemon pokemons={currentPokemons} /> 
    </div>
)
}
export default Home