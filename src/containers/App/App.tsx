import * as React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import TopBar from '../TopBar/TopBar'
import PokemonList from '../PokemonList/PokemonList';

import { StoreState } from '../../store/types/storeState';
import { PokemonData } from '../../store/types/pokemonDataTypes';
import { fetchPokemonList, fetchPokemonDetail } from '../../api';
import * as actions from '../../store/actions';
import { Dispatch } from 'redux';

interface StateApp {
    loadingData: boolean
    pokemonData: Array<PokemonData>
}

class App extends React.Component<any, StateApp> {

    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        this.loadPokemonList()
    }

    private getPokemonList = async (offset: number, limit: number): Promise<Array<PokemonData>> => {
        const pokemonList = await fetchPokemonList(offset, limit)

        if (!pokemonList.results) throw new Error('Não foi possível puxar Pokemon')

        const response: Array<PokemonData> = await Promise.all(
            pokemonList.results.map(async (pokemon: any) => {
                const pokemonDetail = await fetchPokemonDetail(pokemon.url)

                if (!pokemonDetail) throw new Error('Não foi possível puxar detalhes dos Pokemon')
                
                return {
                    id: pokemonDetail.id,
                    name: pokemon.name,
                    price: parseFloat((Math.random() * 100).toFixed(2)),
                    image: pokemonDetail.sprites.front_default
                }
            })
        )

        return response
    }

    private getPokemonListLocalStorage = async (offset: number, limit: number): Promise<Array<PokemonData>> => {
        const offsetLocalStorage = parseInt(localStorage.getItem('offset'))
        const pokemonListLocalStorage = JSON.parse(localStorage.getItem('pokemonList'))

        if (pokemonListLocalStorage) {
            /*const qtyPokemonLocalStorage = pokemonListLocalStorage.reduce((acc: number, cur: any) => {
                return acc + cur.length
            }, 0)*/

            if (offset > offsetLocalStorage || offsetLocalStorage === 0) {
                const pokemonList = await this.getPokemonList(offset, limit)
                pokemonListLocalStorage.push(pokemonList)
                localStorage.setItem('offset', String(offsetLocalStorage + limit))
                localStorage.setItem('pokemonList', JSON.stringify(pokemonListLocalStorage))

                if (offsetLocalStorage === 0) this.props.setActualPage(1)
            }
        }

        return pokemonListLocalStorage
    }

    private loadPokemonList = async (offset = 20, limit = 20) => {
        this.props.updateStateLoading(true)
        
        if (!localStorage.getItem('offset')) localStorage.setItem('offset', '0')
        if (!localStorage.getItem('pokemonList')) localStorage.setItem('pokemonList', JSON.stringify([]))
        
        const pokemonList = await this.getPokemonListLocalStorage(offset, limit)
        const getActualPage = this.props.page

        this.props.updatePokemonData(pokemonList[getActualPage])
    }

    render() {
        return (
            <Container fluid>
                <TopBar />
                <PokemonList />
            </Container>
        )
    }
}

const mapStateToProps = ({ pokemonDataStore: { page } }: StoreState) => ({
    page
})

const mapDispatchToPropos = (dispatch: Dispatch<actions.PokemonDataAction>) => ({
    updateStateLoading: (status: boolean) => dispatch(actions.setLoadingData(status)),
    updatePokemonData: (data: Array<PokemonData>) => dispatch(actions.retrievePokemonData(data)),
    setActualPage: (page: number) => dispatch(actions.updatePage(page))
})

export default connect(mapStateToProps, mapDispatchToPropos)(App)