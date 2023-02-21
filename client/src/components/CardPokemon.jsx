import React from 'react';
import styles from './CardPokemon.module.css';


const CardPokemon = ({ name, type, img}) => {
  return (
    <div className={styles.card}>
       <h3 className={styles.name}>{name}</h3>
          <img src={img} alt='images' className={styles.img}/>
            <ul className={styles.typeStyle}>
              <li className={styles.type}>
                {typeof type[0] === 'string'
                  ? type[0]
                  : type[0]?.name}
                {typeof type[1] === 'string'
                  ? ' ~ ' + type[1]
                  : type[1]?.name}
              </li>
            </ul>
    </div>
  );
};

export default CardPokemon