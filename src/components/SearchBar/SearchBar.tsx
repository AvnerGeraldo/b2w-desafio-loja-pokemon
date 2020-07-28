import * as React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { fetchPokemonByName } from '../../api'
import { StoreState } from '../../store/types/storeState'
import * as actions from '../../store/actions'
import { Dispatch } from 'redux'
import { PokemonData } from '../../store/types/pokemonDataTypes'
import { connect } from 'react-redux'

interface ISearchBar {
    onNotFound: () => void
    loadLocalStorage: (offset: number, limit: number) => void
    setPage: (newPage: number) => void
    onUpdatePokemonList?:  (data: Array<PokemonData>) => void
    setLoadingData?: (status: boolean) => void
}

interface ISearchBarState {
    textPokemon: string
}

class SearchBar extends React.Component<ISearchBar, ISearchBarState> {
    constructor(props: ISearchBar) {
        super(props)

        this.state = {
            textPokemon: ''
        }
    }

    checkPokemonExist = async (textPokemon: string) => {
        const fetchByName = [await fetchPokemonByName(textPokemon)]
        return fetchByName.length > 0
    }

    searchPokemonInList = (pokemonList: Array<Array<PokemonData>>, pokemonName: string) => {
        let i = 0
        for(const listItem of pokemonList) {
            i += 1
            const found = listItem.filter((item: PokemonData) => item.name.toLocaleLowerCase() === pokemonName)

            if (found.length > 0) {
                return {
                    pokemonId: found[0].id,
                    pokemonPage: i
                }
            }
        }

        return {
            pokemonId: 0,
            pokemonPage: 0
        }
    }

    filterPokemonById = (id: number, pokemonList: Array<Array<PokemonData>>) => {
        const { onUpdatePokemonList, setLoadingData } = this.props
        let newPokemonList: Array<PokemonData> = []

        for(let i = 0; i < pokemonList.length; i++) {
            newPokemonList = pokemonList[i].filter((item: PokemonData) => item.id === id)

            if (newPokemonList.length > 0) {
                break;
            }
        }

        setLoadingData(true)
        setTimeout(() => onUpdatePokemonList(newPokemonList), 2000)        
    }
    
    manageSearch = async (name: string) => {
        if (name.length === 0) return

        const pokemonName = name.toLocaleLowerCase().replace(/[^a-zA-Zs-]/g, "")
        const limit = 20

        const checkPokemonExist = await this.checkPokemonExist(name)

        if (!checkPokemonExist) {
            this.props.onNotFound()
            return
        }

        let searchedPokemon = { pokemonId: 0, pokemonPage: 0 }
        let pokemonList = JSON.parse(localStorage.getItem('pokemonList'))

        if (pokemonList.length > 0) {
            searchedPokemon = this.searchPokemonInList(pokemonList, pokemonName)
        }

        if (searchedPokemon.pokemonPage === 0) {
            const qtyTotalPages = parseInt(localStorage.getItem('qtyPages'))
            const qtyPages = parseInt(localStorage.getItem('offset')) / limit

            for(let i = qtyPages + 1; i <= qtyTotalPages; i++) {
                const offset = i * limit
                pokemonList = this.props.loadLocalStorage(offset, limit)
                searchedPokemon = this.searchPokemonInList(pokemonList, pokemonName)

                if (searchedPokemon.pokemonPage > 0) break;
            }
        }

        this.filterPokemonById(searchedPokemon.pokemonId, pokemonList)
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        e.preventDefault

        if (value.length === 0) this.props.setPage(1)

        this.setState({
            textPokemon: value
        })
    }
	
    render() {
        return (
            <InputGroup>
                <FormControl
                    type="text"
                    placeholder="Busque os Pokemon aqui"
                    aria-label="Busque os Pokemon aqui"
                    id="inputTextPokemon"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChange(e)}
                    value={this.state.textPokemon} />
                <InputGroup.Append>
                    <Button onClick={async() => await this.manageSearch(this.state.textPokemon)}><Icon icon={faSearch} /></Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

const mapStateToProps = (state: StoreState) => state
const mapDispatchToProps = (dispatch: Dispatch<actions.RetrievePokemonData | actions.RetrievePokemonData | actions.SetLoadingData>) => ({
    onNotFound: () => dispatch(actions.retrievePokemonData([])),
    onUpdatePokemonList: (data: Array<PokemonData>) => dispatch(actions.retrievePokemonData(data)),
    setLoadingData: (status:boolean) => dispatch(actions.setLoadingData(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)