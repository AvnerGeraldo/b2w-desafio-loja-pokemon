import { combineReducers, createStore } from "redux";

import pokemonDataReducer from './reducers/pokemonDataReducer'
import { StoreState } from "./types/storeState";

const rootReducer = combineReducers<StoreState>({
    pokemonDataStore: pokemonDataReducer
})

const store = createStore(rootReducer)

export default store