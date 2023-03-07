import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetail } from '../redux/actions';
import styles from './PokemonDetail.module.css';
import Logo1 from '../img/logo2.svg.webp';


const PokemonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetails = useSelector((state) => state.detail);



  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return ()=> {dispatch(getPokemonDetail())}
  }, [dispatch, id]);


  return (
    <div className={styles.container}>
       <Link to='/home'>
          <img  className={styles.logo} src={ Logo1 } alt='pkh' />
        </Link>
      

    <div>
    {pokemonDetails.length ? (
      pokemonDetails.map((p) => (
        <Link key={p.id} to={`/home/${p.id}`}>
          <div>
            <h1 className={styles.names}>{p.name}</h1>
            <h2 className={styles.id}>#{p.id}</h2>
          </div>
          <div className={styles.detail}>
            <img  className={styles.image} src={p.img} alt='PokeImg' width='250px' height='250px' />
            {p.types.length === 2 ? (
              <div>
                <h3 className={styles.type1}>
                <ul className={styles.type}>
                  <li>
                    {
                    typeof p.types[0] === 'string' ? p.types[0] : p.types[0]?.name}~
                     {
                     typeof p.types[1] === 'string' ? p.types[1] : p.types[1]?.name}
                  </li>
                </ul>
                </h3>
              </div>
            ) : (
              <div>
                <h3 className={styles.type2}>{
                typeof p.types[0] === 'string' ? p.types[0] : p.types[0]?.name}</h3>
              </div>
            )} 
            <div>
            <div className={styles.list}>
            <div>
              <p> hp {p.hp}</p>
              <progress max='250' value={p.hp}></progress>
            </div>
            <div>
              <p> attack {p.attack}</p>
              <progress max='250' value={p.attack}></progress>
            </div>
            <div>
              <p> defense {p.defense}</p>
              <progress max='250' value={p.defense}></progress>
            </div>
            <div>
              <p> speed {p.speed}</p>
              <progress max='250' value={p.speed}></progress>
            </div>
            <div>
              <p> height {p.height}</p>
              <progress max='100' value={p.height}></progress>
            </div>
            <div>
              <p> weight {p.weight}</p>
              <progress max='1000' value={p.weight}></progress>
            </div>
            </div>
          </div>
          </div>
        </Link>
      ))
    ) : (
      <img
        src={'https://static.wixstatic.com/media/20abc5_e58061f333744c2899c375ec7f024eb3~mv2.gif'}
        width='250px' height='300px'
        alt='Not found'
      />
    )}
  </div><div className={styles.back}>
      <Link to='/home' className={styles.letter}> Back </Link> 
    </div>
  </div>
  )
}
  
export default PokemonDetails