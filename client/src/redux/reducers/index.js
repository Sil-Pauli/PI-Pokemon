const initialState = {
    allPokemons:[],
}
function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_POKEMONS: //viene del /action/index.jsx
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload 
                // allpokemons esta como un arreglo vacio, y con este return le mandamos todo lo que trae la accion GET_POKEMONS
            }
    }
}

export default rootReducer;