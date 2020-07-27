import { StatePokemonData } from "./pokemonDataTypes";
import { StateCart } from "./cartTypes";

export type StoreState = {
    pokemonDataStore: StatePokemonData,
    cartStore: StateCart
}