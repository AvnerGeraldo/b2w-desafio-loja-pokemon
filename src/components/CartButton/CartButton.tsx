import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as actions from '../../store/actions'
import { StoreState } from '../../store/types/storeState'
import { IStateCart } from '../../store/types/cartTypes'

import { Button, Badge } from 'react-bootstrap'
import { PokemonData } from '../../store/types/pokemonDataTypes'

interface CartButtonProps {
    isOpen: boolean
    cartList: Array<PokemonData>
    openClose: (status: boolean) => void
}

const CartButton = (props: CartButtonProps) => {
    
    return (
        <Button style={{
            display: 'block',
            transition: '0.3s',
            minWidth: '75px'
        }}
            variant="outline-dark"
            onClick={() => props.openClose(!props.isOpen)}>
            Cart <Badge variant="light">{props.cartList.length || ''}</Badge>
            <span className="sr-only">cart items</span>
        </Button>
    )
}

const mapStateToProps = ({ cartStore: { isOpen, cartList } }: StoreState): IStateCart => ({
    isOpen,
    cartList
})

const mapDispatchToProps = (dispatch: Dispatch<actions.CartActions>) => ({
    openClose: (isOpen: boolean) => dispatch(actions.openCloseCart(isOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartButton)