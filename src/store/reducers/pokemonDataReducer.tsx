import { PokemonDataAction } from '../actions/pokemonDataAction'
import { StatePokemonData } from '../types/pokemonDataTypes';
import { RETRIEVE_POKEMON_DATA, GET_POKEMON_DATA, SET_LOADING_DATA, UPDATE_PAGE } from '../constants/pokemonDataConstants';

const initialState: StatePokemonData = {
    loadingData: false,
    data: [],
    page: 0
}

const reducer = (state:StatePokemonData = initialState, action: PokemonDataAction): StatePokemonData => {
    switch(action.type) {
        case RETRIEVE_POKEMON_DATA:
            return {
                ...state,
                loadingData: false,
                data: action.payload
            }

        case GET_POKEMON_DATA:
            return state

        case SET_LOADING_DATA:
            return {
                ...state,
                loadingData: action.payload
            }
        
        case UPDATE_PAGE:
            return {
                ...state,
                page: action.payload
            }
    }

    return state
}

export default reducer