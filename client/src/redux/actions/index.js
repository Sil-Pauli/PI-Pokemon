import axios from 'axios';

const backUrl = 'http://localhost:3001/pokemon/';
const backUrlQN = 'http://localhost:3001/pokemon?name=';
const backUrlType = 'http://localhost:3001/type';

export function getPokemons() {
    return async (dispatch) => {
        try {
            var json = await axios.get(backUrl);
            return dispatch({
                type: GET_POKEMONS, 
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}