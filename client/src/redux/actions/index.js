import axios from 'axios';

export const GET_POKEMONS ='GET_POMENONS';
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_TYPES = "GET_TYPES";
export const POST_POKEMON = "POST_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON";

export const SET_FILTER = "SET_FILTER";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";

export const SET_SORT = "SET_SORT";
export const SET_ORDER = "SET_ORDER";

export const CLEAN_FILTER = "CLEAN_FILTER";
export const CLEAN_SELECTED_FILTER = "CLEAN_SELECTED_FILTER";
export const CLEAN_SORT = "CLEAN_SORT";
export const CLEAN_ORDER = "CLEAN_ORDER"
export const CLEAN_DETAIL = "CLEAN_DETAIL";


const backUrl = 'http://localhost:3001/pokemon/';
const backUrlQN = 'http://localhost:3001/pokemon?name=';
const backUrlType = 'http://localhost:3001/type';

export function getPokemon() {
    return async (dispatch) => {
        try {
            var json = await axios.get(backUrl); //coneccrion del back con el front
            return dispatch({
                type: GET_POKEMONS, 
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getPokemonByName(name) {
    return async (dispatch) => {
        try {
            var json = await axios.get(backUrlQN + name)
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getPokemonDetail(id) {
    return async (dispatch) => {
        try {
            var json = await axios.get(`${backUrl} ${id}`)
            return dispatch({
                type: GET_POKEMON_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getTypes() {
    return async (dispatch) => {
        try {
            var json = await axios.get(backUrlType)
            return dispatch({
                type: GET_TYPES,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postPokemon(payload) {
    return async (dispatch) => {
        try {
            const response = await axios.post(backUrl, payload);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}

export function deletePokemon(id) {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${backUrl} ${id}`)
            console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}

export function setFilter(payload) { 
    return { 
        type: SET_FILTER,
        payload
    }
}

export function filterByType(payload) {
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}

export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function setSort(payload){
    return {
        type: SET_SORT,
        payload
    }
}

export function setSortOrder(payload){
    return {
        type: SET_ORDER,
        payload
    }
}

export function cleanFilter(){
    return {
        type: CLEAN_FILTER,
    }
}

export function cleanSelectedFilter() {
    return {
        type: CLEAN_SELECTED_FILTER,
    }
}
export function cleanSort() {
    return {
        type: CLEAN_SORT,
    }
}

export function cleanOrder(){
    return { 
        type: CLEAN_ORDER,
    }
}

export function cleanDetail(){
    return {
        type: CLEAN_DETAIL,
    }
}