import { PokemonDataAction } from '../actions/pokemonDataAction'
import { PokemonData } from '../types/pokemonDataTypes';
import { RETRIEVE_POKEMON_DATA, GET_POKEMON_DATA } from '../constants/pokemonDataConstants';

export interface StateData {
    loadingData: boolean
    data: Array<PokemonData>
}

const initialState: StateData = {
    loadingData: false,
    data: []
}

const reducer = (state:StateData = initialState, action: PokemonDataAction): StateData => {
    switch(action.type) {
        case RETRIEVE_POKEMON_DATA:
            return {
                ...state,
                data: action.payload
            }
            break;
        case GET_POKEMON_DATA:
            return state
            break;
    }

    return state
}

export default reducer