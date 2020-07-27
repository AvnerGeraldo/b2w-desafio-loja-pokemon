import * as React from 'react'
import { Button, Col, Container } from 'react-bootstrap'

import { PokemonData } from '../../store/types/pokemonDataTypes'
import { StoreState } from '../../store/types/storeState'
import { Dispatch } from 'redux'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

interface IPokemonItem extends PokemonData {
    id: number
    name: string
    price: number
    image: string
    addPokemonToCart?: (pokemon: PokemonData) => void
}

const imageStyle = {
    height: '100%',
    width: '100%'
}

const PokemonItem = (props: IPokemonItem) => {
    const { id, name, price, image, addPokemonToCart } = props
    return (
        <Container className="pokemon-list-item">
            <Col><span className="d-none pokemon-id">{id}</span><img src={image} style={imageStyle} /></Col>
            <Col className="text-center text-capitalize pokemon-name"><span>{name}</span></Col>
            <Col className="text-center mt-1 mb-2 pokemon-price">R$ <span>{price.toLocaleString('pt-br')}</span></Col>
            <Col className="text-center">
                <Button onClick={() => addPokemonToCart({ id, name, price, image })}>Adicionar <i>Icon cart</i></Button>
            </Col>
        </Container>
    )
}

const mapStateToProps = (state: StoreState) => state
const mapDispatchToProps = (dispatch: Dispatch<actions.UpdateCart>) => ({
    addPokemonToCart: (pokemon: PokemonData) => dispatch(actions.updateCart(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonItem)