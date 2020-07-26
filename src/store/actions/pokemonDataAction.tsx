import { PokemonData } from "../types/pokemonDataTypes"
import { RETRIEVE_POKEMON_DATA, GET_POKEMON_DATA } from "../constants/pokemonDataConstants"

export interface RetrievePokemonData {
    type: RETRIEVE_POKEMON_DATA
    payload: Array<PokemonData>
}

export interface GetPokemonData {
    type: GET_POKEMON_DATA
}

export type PokemonDataAction = RetrievePokemonData | GetPokemonData

export const retrievePokemonData = (data: Array<PokemonData>) :RetrievePokemonData => ({
  type: RETRIEVE_POKEMON_DATA,
  payload: data
})

export const getPokemonData = (): GetPokemonData => ({
    type: GET_POKEMON_DATA
})
