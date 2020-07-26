import * as React from 'react'
import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import TopBar from '../TopBar/TopBar'
import PokemonList from '../PokemonList/PokemonList';
import { PokemonItemProps } from '../../components/PokemonItem/PokemonItem'

interface StateApp {
    loadingData: boolean
    pokemonData: Array<PokemonItemProps>
}

export default class App extends React.Component<any, StateApp> {

    constructor(props: any) {
        super(props)

        this.state = {
            loadingData: false,
            pokemonData: []
        }
    }

    componentDidMount() {
        this.loadPokemonList()
    }

    loadPokemonList = async () => {
        this.setState({
            loadingData: true
        })
        const response = await fetch('https://pokeapi.co/api/v2/pokemon', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'cors'
        })

        const pokemonList = await response.json()

        // Pegar Next/previous para paginar

        const consumeData: Array<PokemonItemProps> = await Promise.all(pokemonList.results.map(async (pokemon: any) => {
            const responseDetails = await fetch(pokemon.url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                mode: 'cors'
            })

            const pokemonDetail = await responseDetails.json()

            return {
                id: pokemonDetail.id,
                name: pokemon.name,
                price: parseFloat((Math.random() * 100).toFixed(2)),
                image: pokemonDetail.sprites.front_default
            }
        }))

        this.setState({
            loadingData: false,
            pokemonData: consumeData
        })

        //SetState
        // - Paginação (Apenas com botao de proximo e anterior)
        // - 
    }

    render() {
        const { loadingData, pokemonData } = this.state
        return (
            <Container fluid>
                <TopBar />
                <PokemonList pokemonData={pokemonData} loadingData={loadingData}/>
            </Container>
        )
    }
}