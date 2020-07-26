import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const loadingImage = require('../../assets/images/loading-image.gif')

interface PokemonListProps {
    pokemonData?: Array<any>
}

export default class PokemonList extends React.Component<PokemonListProps, any> {
    constructor(props: PokemonListProps) {
        super(props)
        this.state = {
            loadingData: false
        }
    }

    componentDidMount() {
        this.loadPokemonList()
    }

    loadPokemonList = () => {
        // Fetch data from API
    }

    render() {
        const { pokemonData } = this.props
        const { loadingData } = this.state
        
        return (
            <Container fluid className="h-100">
                { loadingData && (
                    <Row className="align-items-center">
                        <Col className="text-center loading-data-image">
                            <img src={loadingImage.default} height="15%" width="15%" />
                        </Col>
                    </Row>
                )}

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