import * as React from 'react'
import { Button, Badge } from 'react-bootstrap'

const CartButton = () => {
    return (
        <Button variant="outline-dark">
            Cart <Badge variant="light">1</Badge>
            <span className="sr-only">cart items</span>
        </Button>
    )
}

export default CartButton