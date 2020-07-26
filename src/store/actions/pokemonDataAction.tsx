import { PokemonData } from "../types/pokemonDataTypes"
import { SET_LOADING_DATA, RETRIEVE_POKEMON_DATA, GET_POKEMON_DATA, UPDATE_PAGE } from "../constants/pokemonDataConstants"

export interface RetrievePokemonData {
    type: RETRIEVE_POKEMON_DATA
    payload: Array<PokemonData>
}

export interface GetPokemonData {
    type: GET_POKEMON_DATA
}

export interface SetLoadingData {
    type: SET_LOADING_DATA
    payload: boolean
}

export interface UpdatePage {
    type: UPDATE_PAGE
    payload: number
}

export type PokemonDataAction = RetrievePokemonData | GetPokemonData | SetLoadingData | UpdatePage

export const retrievePokemonData = (data: Array<PokemonData>) :RetrievePokemonData => ({
  type: RETRIEVE_POKEMON_DATA,
  payload: data
})

export const getPokemonData = (): GetPokemonData => ({
    type: GET_POKEMON_DATA
})

export const setLoadingData = (loadingData: boolean): SetLoadingData => ({
    type: SET_LOADING_DATA,
    payload: loadingData
})

export const updatePage = (page: number): UpdatePage => ({
    type: UPDATE_PAGE,
    payload: page
})