import { combineReducers, createStore } from "redux";

import pokemonDataReducer from './reducers/pokemonDataReducer'
import { StoreState } from "./types/storeState";

const rootReducer = combineReducers<StoreState>({
    pokemonData: pokemonDataReducer
})

const store = createStore(rootReducer)

export default store