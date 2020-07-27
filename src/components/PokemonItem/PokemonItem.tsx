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
    isOpen?: boolean
    addPokemonToCart?: (pokemon: PokemonData) => void
    openCloseCart?: (status: boolean) => void
}

const imageStyle = {
    height: '100%',
    width: '100%'
}

const addToCart = (props: IPokemonItem) => {
    const { id, name, price, image, addPokemonToCart, openCloseCart, isOpen } = props

    addPokemonToCart({ id, name, price, image })
    
    if (!isOpen) {
        openCloseCart(!isOpen)

        setTimeout(() => {
            openCloseCart(false)
        }, 3000)
    }
}

const PokemonItem = (props: IPokemonItem) => {
    const { id, name, price, image } = props
    return (
        <Container className="pokemon-list-item">
            <Col><span className="d-none pokemon-id">{id}</span><img src={image} style={imageStyle} /></Col>
            <Col className="text-center text-capitalize pokemon-name"><span>{name}</span></Col>
            <Col className="text-center mt-1 mb-2 pokemon-price">R$ <span>{price.toLocaleString('pt-br')}</span></Col>
            <Col className="text-center">
                <Button onClick={() => addToCart(props)}>Adicionar <i>Icon cart</i></Button>
            </Col>
        </Container>
    )
}

const mapStateToProps = ({ cartStore: { isOpen } }: StoreState) => ({
    isOpen
})
const mapDispatchToProps = (dispatch: Dispatch<actions.UpdateCart | actions.OpenCloseCart>) => ({
    addPokemonToCart: (pokemon: PokemonData) => dispatch(actions.updateCart(pokemon)),
    openCloseCart: (status: boolean) => dispatch(actions.openCloseCart(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonItem)