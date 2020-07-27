import { combineReducers, createStore } from "redux";

import pokemonDataReducer from './reducers/pokemonDataReducer'
import cartReducer from './reducers/cartReducer'

import { StoreState } from "./types/storeState";

const rootReducer = combineReducers<StoreState>({
    pokemonDataStore: pokemonDataReducer,
    cartStore: cartReducer
})

const store = createStore(rootReducer)

export default store