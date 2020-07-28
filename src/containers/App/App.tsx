import * as React from 'react'
import { Container, Pagination } from 'react-bootstrap'
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/themes/main.css';
import '../../assets/themes/aqua/aqua.css';
import '../../assets/themes/fire/fire.css';


import TopBar from '../TopBar/TopBar'
import PokemonList from '../PokemonList/PokemonList';

import { StoreState } from '../../store/types/storeState';
import { PokemonData } from '../../store/types/pokemonDataTypes';
import { fetchPokemonList, fetchPokemonDetail } from '../../api';
import * as actions from '../../store/actions';
import { Dispatch } from 'redux';
import CartSidebar from '../CartSidebar/CartSidebar';

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
        const qtyPages = localStorage.getItem('qtyPages')
        const pokemonList = await fetchPokemonList(offset, limit)

        if (!pokemonList.results) throw new Error('Não foi possível puxar Pokemon')

        if (!qtyPages) this.setQtyPages(pokemonList.count, limit)

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

    private setQtyPages = (count: number, limit: number) => {
        const pages = count / limit
        localStorage.setItem('qtyPages', String(Math.ceil(pages)))
    }

    private getPokemonListLocalStorage = async (offset: number, limit: number): Promise<Array<PokemonData>> => {
        const offsetLocalStorage = parseInt(localStorage.getItem('offset'))
        const pokemonListLocalStorage = JSON.parse(localStorage.getItem('pokemonList'))

        if (pokemonListLocalStorage) {
            if (offset > offsetLocalStorage || offsetLocalStorage === 0) {
                const pokemonList = await this.getPokemonList(offset, limit)
                pokemonListLocalStorage.push(pokemonList)
                localStorage.setItem('offset', String(offsetLocalStorage + limit))
                localStorage.setItem('pokemonList', JSON.stringify(pokemonListLocalStorage))
            }
            
            if (this.props.page === 0) {
                this.props.setActualPage(1)
            }
        }

        return pokemonListLocalStorage
    }

    private loadPokemonList = async (offset = 20, limit = 20) => {
        this.props.updateStateLoading(true)
        
        if (!localStorage.getItem('offset')) localStorage.setItem('offset', '0')
        if (!localStorage.getItem('pokemonList')) localStorage.setItem('pokemonList', JSON.stringify([]))
        
        const pokemonList = await this.getPokemonListLocalStorage(offset, limit)
        const getActualPage = (this.props.page > 0) ? this.props.page - 1 : 0
        
        this.props.updatePokemonData(pokemonList[getActualPage])
    }

    setPage = async (newPage: number) => {
        const limit = 20
        const offset = newPage * limit

        this.props.setActualPage(newPage)
        await this.loadPokemonList(offset, limit)
    }

    render() {
        const { theme, cartIsOpen, page, pokemonDataList } = this.props
        const qtyTotalPages = parseInt(localStorage.getItem('qtyPages'))

        const themeStyles = (theme: string): string => {
            switch (theme) {
                case 'fire':
                    return 'fireTheme'
                default:
                    return 'aquaTheme'
            }
        }
        
        return (
            <Container fluid id={themeStyles(theme)}>
                <TopBar 
                    loadLocalStorage={this.getPokemonListLocalStorage}
                    setPage={this.setPage} />
                <Container fluid className="d-flex align-items: stretch" style={{ width: '100%', paddingRight: 0 }}>
                    <PokemonList />
                    {cartIsOpen && (
                        <CartSidebar />
                    )}                    
                </Container>
                
                {(pokemonDataList.length > 1 && page > 0) && (
                    <Container fluid style={{ marginTop: 20 }}>
                        <Pagination size="lg" className="justify-content-center">
                            <Pagination.Prev style={{ cursor: 'pointer' }}
                                onClick={async () => (page > 1) && await this.setPage(parseInt(this.props.page) - 1)} 
                                disabled={!(page > 1)} />

                            <Pagination.Next style={{ cursor: 'pointer' }}
                                onClick={async () => (page >= 1 && page < qtyTotalPages) && await this.setPage(parseInt(this.props.page) + 1)} 
                                disabled={!(page >= 1 && page < qtyTotalPages)} />
                        </Pagination>
                    </Container>
                )}
            </Container>
        )
    }
}

const mapStateToProps = ({ pokemonDataStore: { page, data }, cartStore: { isOpen } }: StoreState) => ({
    page,
    cartIsOpen: isOpen,
    pokemonDataList: data
})

const mapDispatchToPropos = (dispatch: Dispatch<actions.PokemonDataAction>) => ({
    updateStateLoading: (status: boolean) => dispatch(actions.setLoadingData(status)),
    updatePokemonData: (data: Array<PokemonData>) => dispatch(actions.retrievePokemonData(data)),
    setActualPage: (page: number) => dispatch(actions.updatePage(page))
})

export default connect(mapStateToProps, mapDispatchToPropos)(App)