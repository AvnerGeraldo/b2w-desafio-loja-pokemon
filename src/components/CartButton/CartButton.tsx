import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as actions from '../../store/actions'
import { StoreState } from '../../store/types/storeState'
import { IStateCart } from '../../store/types/cartTypes'

import { Button, Badge } from 'react-bootstrap'

interface CartButtonProps {
    isOpen: boolean
    openClose: (status: boolean) => void
}

const CartButton = (props: CartButtonProps) => {
    return (
        <Button style={{
            display: 'block',
            transition: '0.3s'
        }}
            variant="outline-dark"
            onClick={() => props.openClose(!props.isOpen)}>
            Cart <Badge variant="light">1</Badge>
            <span className="sr-only">cart items</span>
        </Button>
    )
}

const mapStateToProps = ({ cartStore: { isOpen } }: StoreState): IStateCart => ({
    isOpen
})

const mapDispatchToProps = (dispatch: Dispatch<actions.CartActions>) => ({
    openClose: (isOpen: boolean) => dispatch(actions.openCloseCart(isOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartButton)