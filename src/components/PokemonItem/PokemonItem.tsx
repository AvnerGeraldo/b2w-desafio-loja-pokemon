import * as React from 'react'
import { Container, Row, Button } from 'react-bootstrap'

export interface PokemonItemProps {
    id: number
    name: string
    price: number
    image: string
}

const imageStyle = {
    height: '5em',
    width: '5em'
}

const PokemonItem = (props: PokemonItemProps) => {
    const { id, name, price, image } = props
    return (
        <Container className="pokemon-list-item">
            <Row><span className="hide pokemon-id">{id}</span><img src={image} style={imageStyle} /></Row>
            <Row className="text-center pokemon-name"><span>{name}</span></Row>
            <Row className="text-center pokemon-price"><span>{price}</span></Row>
            <Row className="justify-content-center"><Button>Adicionar <i>Icon cart</i></Button></Row>
        </Container>
    )
}

export default PokemonItem