export interface IPokemonData {
    id: number
    name: string
    price: number
    image: string
}

export type PokemonData = {
    id: number,
    name: string,
    price: number,
    image: string,
}

export interface IStatePokemonData {
    loadingData: boolean
    data: Array<PokemonData>
    page: number
}

export type StatePokemonData = {
    loadingData: boolean,
    data: Array<PokemonData>,
    page?: number
}