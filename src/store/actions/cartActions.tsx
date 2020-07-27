import { OPEN_CLOSE_CART, UPDATE_CART } from "../constants/cartConstants";
import { PokemonData } from "../types/pokemonDataTypes";

export interface OpenCloseCart {
    type: OPEN_CLOSE_CART
    payload: boolean
}

export interface UpdateCart {
    type: UPDATE_CART
    payload: PokemonData
}

export type CartActions = OpenCloseCart | UpdateCart

export const openCloseCart = (status: boolean): OpenCloseCart => ({
    type: OPEN_CLOSE_CART,
    payload: status
})

export const updateCart = (pokemon: PokemonData): UpdateCart => ({
    type: UPDATE_CART,
    payload: pokemon
})