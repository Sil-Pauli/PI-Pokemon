import React, { useEffect, useState } from "react";
import "./Pagination.module.css";
// import Loading from "../../assets/loading-L-H.gif";
import CardPokemon from "./CardPokemon.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getPokemonTypes } from "../redux/actions/index";

const Pagination = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1); //pagina actual que empieza en 1
  const [pokemonsPerPage] = useState(12); //la cantidad de poke trae por pagina
  const indexOfLastPost = currentPage * pokemonsPerPage; //12
  const indexOfFirstPost = indexOfLastPost - pokemonsPerPage; //0

  const totalPokemons = useSelector((state) => state.filteredPokemons);
  const totalPages = Math.ceil(totalPokemons.length / pokemonsPerPage); //ceil=redondea todos los pokes sobre las paginas

  const currentPokemons = useSelector((state) =>state.filteredPokemons
      ? state.filteredPokemons.slice(indexOfFirstPost, indexOfLastPost) //toma todo el arreglo de todos los poke, el slice lo corta y me trae los 12 q pido
      : false
  );

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getPokemonTypes());
  }, [dispatch]);

  // paginacion

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); //window.scrollTo, se desplaza en un conjunto particular de coordenadas en el documento.
  };

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); //smooth= desplazamiento suave
  };
  if (currentPage > totalPages) previousPage();

  if (currentPokemons.length) {
    return (
      <div>
        <div className="container__gral">
          <div className="pokem">
            {currentPokemons &&
              currentPokemons.map((p) => (
                <Link
                  key={p.id}
                  to={`pokemon/${p.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardPokemon
                    name={p.name}
                    types={p.types}
                    image={p.image}
                    hp={p.hp}
                    attack={p.attack}
                    defense={p.defense}
                    speed={p.speed}
                    key={p.id}
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="pagination">
          <div className="frame">
            <button className="custom-btn btn-2" onClick={previousPage}>
              {" "}
              &laquo;{" "}
            </button>
          </div>
          <div>
            <h4>
              {/* numero de pagina sobre el total de paginas */}
              {currentPage} / {totalPages}
            </h4>
          </div>
          <div className="frame">
            {/* proxima pagina */}
            <button className="custom-btn btn-2" onClick={nextPage}> 
              &raquo;
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    // gif de cargando
    return (
      <div className="loading__l-h">
        {/* <img className="loading__img" src={Loading} alt="Loading" /> */}
      </div>
    );
  }
};
export default Pagination;
