import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

interface PokemonListProps {
    pokemonData?: Array<any>
}

export default class PokemonList extends React.Component<PokemonListProps, any> {

    componentDidMount() {
        this.loadPokemonList()
    }

    loadPokemonList = () => {
        // Fetch data from API
    }

    render() {
        const { pokemonData } = this.props
        
        return (
            <Container fluid className="h-100">
                {(pokemonData && pokemonData.length === 0) && (
                    <Row className="align-items-center">
                        <Col className="text-center error-message-empty-content">
                            <h3>Não há dados para serem exibidos.</h3><br /> 
                            <p><i style={{
                            fontSize: '4em'
                        }}>:(</i></p></Col>
                    </Row>
                )}
            </Container>
        )
    }
}