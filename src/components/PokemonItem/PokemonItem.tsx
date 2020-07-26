import * as React from 'react'
import { Row, Button, Col, Container } from 'react-bootstrap'

export type PokemonItemProps = {
    id: number
    name: string
    price: number
    image: string
}

const imageStyle = {
    height: '100%',
    width: '100%'
}

const PokemonItem = (props: PokemonItemProps) => {
    const { id, name, price, image } = props
    return (
        <Container className="pokemon-list-item">
            <Col><span className="d-none pokemon-id">{id}</span><img src={image} style={imageStyle} /></Col>
            <Col className="text-center text-capitalize pokemon-name"><span>{name}</span></Col>
            <Col className="text-center mt-1 mb-2 pokemon-price">R$ <span>{price.toLocaleString('pt-br')}</span></Col>
            <Col className="text-center"><Button>Adicionar <i>Icon cart</i></Button></Col>
        </Container>
    )
}

export default PokemonItem