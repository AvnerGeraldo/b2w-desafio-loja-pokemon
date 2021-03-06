export const fetchPokemonList = async (offset = 20, limit = 20) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors'
    })

    return await response.json()
}

export const fetchPokemonDetail = async (url: string) => {
    const responseDetails = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors'
    })

    return await responseDetails.json()
}

export const fetchPokemonByName = async (pokemonName: string) => {
    const name = pokemonName.toLocaleLowerCase().replace(/[^a-zA-Zs-]/g, "")
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors'
    })

    if (!response.ok) return {}

    return await response.json()
}