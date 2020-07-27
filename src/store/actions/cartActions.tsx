import { OPEN_CLOSE_CART, UPDATE_CART, REMOVE_ITEM_CART, CHECKOUT_CART } from "../constants/cartConstants";
import { PokemonData } from "../types/pokemonDataTypes";

export interface OpenCloseCart {
    type: OPEN_CLOSE_CART
    payload: boolean
}

export interface UpdateCart {
    type: UPDATE_CART
    payload: PokemonData
}

export interface RemoveItemCart {
    type: REMOVE_ITEM_CART
    payload: number
}

export interface CheckoutCart {
    type: CHECKOUT_CART
}


export type CartActions = OpenCloseCart | UpdateCart | RemoveItemCart | CheckoutCart

export const openCloseCart = (status: boolean): OpenCloseCart => ({
    type: OPEN_CLOSE_CART,
    payload: status
})

export const updateCart = (pokemon: PokemonData): UpdateCart => ({
    type: UPDATE_CART,
    payload: pokemon
})

export const removeItemCart = (id: number): RemoveItemCart => ({
    type: REMOVE_ITEM_CART,
    payload: id
})

export const checkoutCart = (): CheckoutCart => ({
    type: CHECKOUT_CART
})