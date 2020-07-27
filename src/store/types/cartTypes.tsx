import { PokemonData } from "./pokemonDataTypes";

export interface IStateCart {
    isOpen: boolean
    cartList?: Array<PokemonData>
}

export type StateCart = {
    isOpen: boolean
    cartList?: Array<PokemonData>
}